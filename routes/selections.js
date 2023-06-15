var express = require("express");
var router = express.Router();
const models = require("../models");

router.get("/", async function (req, res, next) {
  try {
    const selections = await models.Selection.findAll();
    res.send(selections);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Post selection (every time both users select the same plan, "it's a date")
// To know if they select the same, both users will be in the same event id.
//

router.post("/", async function (req, res, next) {
  const { userId, planId, eventId } = req.body;
  try {
    const selection = await models.Selection.create({
      userId,
      planId,
      eventId,
    });
    res.send(selection);
  } catch (error) {
    res.status(500).send(error);
  }
});

//add column to event table: "invitation hash"

//get invitation: get event where hash is... include inviter and invitee

//check if there is a match
// if there is, post it in the event table

// GET match cuando coinciden (event id coincide)

//PLANID = EVENTID

module.exports = router;
