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
    //DEVUELVE EL EVENT ID Y "NEW EVENT CREATED"
    res.send(event.id && "New event created");
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get("/", async function (req, res, next) {
  try {
    const events = await models.Event.findAll();
    res.send(events);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
