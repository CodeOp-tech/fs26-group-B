var express = require("express");
var router = express.Router();
const models = require("../models");

// Get all plans

// Post selection (every time you click YES the userID and planID goes to selection)

// Get selection by planID where planID count is 2(twice)  << do this every time the user says yes

// Delete all from selections (happens when you click cancel or when you match)

// Get all users
router.get("/", async function (req, res, next) {
  console.log("PLANS!");

  try {
    const plans = await models.Plan.findAll();
    res.send(plans);
  } catch (error) {
    res.status(500).send(error);
  }
});

//Get user by username

module.exports = router;
