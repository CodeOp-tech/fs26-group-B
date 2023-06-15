const express = require("express");
const router = express.Router();
const models = require("../models");
require("dotenv").config();
const bcrypt = require("bcrypt");
const saltRounds = 10;
const { v4: uuidv4 } = require("uuid");

// CREATE new event with private ID
router.post("/", async (req, res) => {
  const { userId_1, userId_2, chosenPlanId, status } = req.body;

  try {
    // Generate a unique identifier for the event
    const hashId = uuidv4();

    // Hash the event ID to create a secure private token
    const privateToken = await bcrypt.hash(hashId, saltRounds);
    const eventId = req.params;
    // Create the event with the public ID and private token
    const event = await models.Event.create({
      eventId,
      userId_1,
      userId_2,
      chosenPlanId,
      status,
      hashId: privateToken,
    });

    res.send(event);
  } catch (error) {
    console.error(error); // Log the error for debugging purposes
    res.status(500).send("Internal server error");
  }
});
// GET event with private ID

router.get("/:hashEventId", async function (req, res, next) {
  const { eventId } = req.params;

  try {
    // Find the event using the hashed URL token
    const event = await models.Event.findOne({
      where: { id: eventId },
      include: ["inviter", "invitee"],
    });

    if (event) {
      res.send(event);
    } else {
      res.status(404).send("Event not found");
    }
  } catch (error) {
    console.error(error); // Log the error for debugging purposes
    res.status(500).send("Internal server error");
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

module.exports = router;
