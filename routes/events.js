const express = require("express");
const router = express.Router();
const models = require("../models");
require("dotenv").config();
const bcrypt = require("bcrypt");
const saltRounds = 10;
const { v4: uuidv4 } = require("uuid");

//get event by [boolean]
//getOpenEvents(userId)

// CREATE new event with private ID
router.post("/", async (req, res) => {
  const { userId_1, userId_2, chosenPlanId, status } = req.body;

  try {
    // Generate a unique identifier for the event
    const hash = uuidv4();

    // Hash the event ID to create a secure private token
    const privateToken = await bcrypt.hash(hash, saltRounds);
    const eventId = req.params;
    // Create the event with the public ID and private token
    const event = await models.Event.create({
      eventId,
      userId_1,
      userId_2,
      chosenPlanId,
      status,
      hash: privateToken,
    });

    res.send(event);
  } catch (error) {
    console.error(error); // Log the error for debugging purposes
    res.status(500).send("Internal server error");
  }
});

// GET event with ID NUMBER (public)
router.get("/:id", async function (req, res, next) {
  const { id } = req.params;

  try {
    // Find the event using the hashed URL token
    const event = await models.Event.findOne({
      where: { id },
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

//GET event with hash (private)WORK IN ROGRESS

router.get("/eventprivate/:hash", async function (req, res, next) {
  const { hash } = req.params;

  try {
    // Find the event using the hashed URL token
    const event = await models.Event.findOne({
      where: { hash },
    });

    if (event !== null) {
      // Check if event is not null
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

// DELETE all events
// router.delete("/", async (req, res) => {
//   try {
//     // Delete all events
//     await models.Event.destroy({
//       where: {},
//       truncate: true, // This ensures that the table is truncated, removing all rows
//     });

//     res.send("All events deleted successfully");
//   } catch (error) {
//     console.error(error); // Log the error for debugging purposes
//     res.status(500).send("Internal server error");
//   }
// });

module.exports = router;
