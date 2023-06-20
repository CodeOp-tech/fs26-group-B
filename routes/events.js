const express = require("express");
const router = express.Router();
const { Sequelize } = require("sequelize");
const models = require("../models");
require("dotenv").config();
const bcrypt = require("bcrypt");
const saltRounds = 10;
const { v4: uuidv4 } = require("uuid");

// Create new event
router.post("/", async function (req, res) {
  const { userId_1, userId_2 } = req.body;

  try {
    // First we check if there's already an event
    const openEvent = await models.Event.findOne({
      where: {
        // With either of the users
        [Sequelize.Op.or]: [
          { userId_1: userId_1 },
          { userId_1: userId_2 },
          { userId_2: userId_1 },
          { userId_2: userId_2 },
        ],
        // That is open
        status: true,
      },
    });
    // if there is, then you can't create a new one
    if (openEvent) {
      res.status(400).send("You already have an open event");
      //otherwise, start creating the new event
    } else {
      // Generate a unique identifier for the event
      const hash = uuidv4();

      // Hash the event ID to create a secure private token
      const privateToken = await bcrypt.hash(hash, saltRounds);
      // Create the event with the public ID and private token
      const event = await models.Event.create({
        userId_1,
        userId_2,
        status: true,
        hash: privateToken,
      });

      res.status(200).send({ event, message: "New event created!" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
});

// GET ALL EVENTS
router.get("/", async function (req, res, next) {
  try {
    const events = await models.Event.findAll({
      include: ["inviter", "invitee"],
    });
    res.status(200).send(events);
  } catch (error) {
    res.status(500).send(error);
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
    console.error(error);
    res.status(500).send("Internal server error");
  }
});

// GET events by userid only if it's open/true
router.get("/user/:userId", async function (req, res, next) {
  const { userId } = req.params;

  try {
    const events = await models.Event.findAll({
      where: {
        [Sequelize.Op.or]: [{ userId_1: userId }, { userId_2: userId }],
        status: true,
      },
    });

    if (events.length === 0) {
      res.status(404).send("Event not found");
    } else {
      res.send(events);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
});

//GET event by hash (private)

router.get("/private/:hash", async function (req, res, next) {
  const { hash } = req.params;

  try {
    // Find the event using the hashed URL token
    const event = await models.Event.findOne({
      where: { hash },
    });

    if (event) {
      // Check if event is not null
      res.send(event);
    } else {
      res.status(404).send("Event not found");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
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
