// Get all plans

// Post selection (every time you click YES the userID and planID goes to selection)

// Get selection by planID where planID count is 2(twice)  << do this every time the user says yes

// Delete all from selections (happens when you click cancel or when you match)

// Get all users

var express = require("express");
var router = express.Router();
const models = require("../models");

router.get("/", async function (req, res, next) {
  console.log("CONNECTED!!!!!");
  try {
    const users = await models.User.findAll();
    res.send(users);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Get user by username
router.get("/:username", async function (req, res, next) {
  try {
    const { username } = req.params;
    const user = await models.User.findOne({ where: { username } });

    if (user) {
      res.send(user);
    } else {
      res.status(404).send("User not found");
    }
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
