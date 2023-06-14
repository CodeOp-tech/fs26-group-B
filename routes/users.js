var express = require("express");
var router = express.Router();
const models = require("../models");

// Get all users

router.get("/", async function (req, res, next) {
  try {
    const users = await models.Users.findAll();
    res.send(users);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Get user by username
router.get("/:id", async function (req, res, next) {
  try {
    const { id } = req.params;
    const user = await models.Users.findOne({ where: { id } });

    if (user) {
      res.send(user);
    } else {
      res.status(404).send("User not found");
    }
  } catch (error) {
    res.status(500).send(error);
  }
});

// POST USER 2 DESDE AUTHENTICATION

//FAKE POST
// router.post("/", async function (req, res, next) {
//   const { username, password, email } = req.body;
//   try {
//     const selection = await models.Selections.create({
//       username,
//       password,
//       email,
//     });
//     res.send(selection);
//   } catch (error) {
//     res.status(500).send(error);
//   }
// });

module.exports = router;
