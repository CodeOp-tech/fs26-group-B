var express = require("express");
var router = express.Router();
const models = require("../models");

// Post selection (every time you click YES the userID and planID goes to selection)

router.post("/", async function (req, res, next) {
  const { userId, planId, eventId } = req.body;
  try {
    const selection = await models.Selections.create({
      userId,
      planId,
      eventId,
    });
    res.send(selection);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Get selection by planID where planID count is 2(twice)  << do this every time the user says yes

// router.get("/:planId", async function (req, res, next){
// try {
//   const {planId} = req.params;
//   const plan
// }
// })

//PLANID = EVENTID

// UPDATE DB TABLES

module.exports = router;
