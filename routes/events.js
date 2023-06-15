const express = require("express");
const router = express.Router();
const models = require("../models");
require("dotenv").config();
const bcrypt = require("bcrypt");
const saltRounds = 10;
const { v4: uuidv4 } = require("uuid");

const supersecret = process.env.SUPER_SECRET;

// CREATE new event with private ID

router.post("/", async function (req, res, next) {
  const { userId_1, userId_2, chosenPlanId, status } = req.body;

  try {
    // Generate a unique identifier for the event
    const eventId = uuidv4();

    // Hash the event ID to create a token
    const token = await bcrypt.hash(eventId, saltRounds);

    // Create the event with the hashed URL
    const event = await models.Event.create({
      id: eventId,
      userId_1,
      userId_2,
      chosenPlanId,
      status,
      eventToken: token, // Store the hashed URL token in the event object
    });

    res.send(event.id && "New private event created!");
  } catch (error) {
    console.error(error); // Log the error for debugging purposes
    res.status(500).send("Internal server error");
  }
});

// GET event with private ID

router.get("/event/:eventId", async function (req, res, next) {
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

//GET EVENT BY ID

router.get("/:id", async function (req, res, next) {
  try {
    const { id } = req.params;

    const event = await models.Event.findOne({
      where: { id },
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
