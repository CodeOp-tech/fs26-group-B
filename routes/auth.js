var express = require("express");
var router = express.Router();
var jwt = require("jsonwebtoken");
var userShouldBeLoggedIn = require("../guards/userShouldBeLoggedIn");
var usernameShouldNotExist = require("../guards/usernameShouldNotExist");
const models = require("../models");
require("dotenv").config();
var bcrypt = require("bcrypt");
const saltRounds = 10;

const supersecret = process.env.SUPER_SECRET;

router.post("/register", usernameShouldNotExist, async (req, res) => {
  const { name, username, email, password } = req.body;

  try {
    const hash = await bcrypt.hash(password, saltRounds);

    const user = await models.User.create({
      name,
      username,
      email,
      password: hash,
    });

    res.send({ message: "New user created!" });
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await models.User.findOne({
      where: {
        username,
      },
    });
    if (user) {
      const user_id = user.id;

      const correctPassword = await bcrypt.compare(password, user.password);

      if (!correctPassword) throw new Error("Incorrect password");

      var token = jwt.sign({ user_id }, supersecret);
      res.send({ message: "Login successful!", token });
    } else {
      throw new Error("User does not exist");
    }
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

router.get("/profile", userShouldBeLoggedIn, (req, res) => {
  res.send(req.user);
});

module.exports = router;
