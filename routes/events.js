var express = require("express");
var router = express.Router();
const models = require("../models");

// CREATE new event

router.post("/", async function (req, res, next) {
  const { userId_1, userId_2, chosenPlanId, status } = req.body;
  try {
    const event = await models.Event.create({
      userId_1,
      userId_2,
      chosenPlanId,
      status,
    });
    res.send(event.id && "New event created");
  } catch (error) {
    res.status(500).send(error);
  }
});

// GET ALL EVENTS

router.get("/", async function (req, res, next) {
  try {
    const events = await models.Event.findAll({
      include: ["inviter", "invitee"],
    });
    res.send(events);
  } catch (error) {
    res.status(500).send(error);
  }
});

//GET EVENT BY HASH

router.get("/", async function (req, res, next) {
  try {
    const event = await models.Event.findOne({
      where: { hash },
    });
    if (event) {
      res.send(event);
    } else {
      res.status(404).send("The event doesn't exist!");
    }
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
