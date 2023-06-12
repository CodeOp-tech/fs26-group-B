// Get user by username

// Get all plans

// Post selection (every time you click YES the userID and planID goes to selection)

// Get selection by planID where planID count is 2(twice)  << do this every time the user says yes

// Delete all from selections (happens when you click cancel or when you match)

var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

module.exports = router;
