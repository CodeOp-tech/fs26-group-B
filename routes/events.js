const express = require("express");
const router = express.Router();
const { Sequelize } = require("sequelize");
const models = require("../models");
require("dotenv").config();
const eventMustExist = require("../guards/eventMustExist");
const { v4: uuidv4 } = require("uuid");

const userShouldBeLoggedIn = require("../guards/userShouldBeLoggedIn");

// Create new event
router.post("/", userShouldBeLoggedIn, async function (req, res) {
  const { userId_2 } = req.body;
  const userId_1 = req.user_id;
  console.log(userId_1, userId_2);

  try {
    // First we check if there's already an event
    const openEvent = await models.Event.findOne({
      where: {
        // With either of the users
        [Sequelize.Op.or]: [
          {
            [Sequelize.Op.and]: [
              { userId_1: userId_1 },
              { userId_2: userId_2 },
            ],
          },
          {
            [Sequelize.Op.and]: [
              { userId_1: userId_2 },
              { userId_2: userId_1 },
            ],
          },
        ],

        // That is open
        status: true,
      },
    });
    // if there is, then you can't create a new one
    if (openEvent) {
      console.log("Error message:", "You already have an open event");
      res.status(400).send("You already have an open event");
      return;
      //otherwise, start creating the new event
    } else {
      // Generate a unique identifier for the event
      const hash = uuidv4();

      // Make it URL friendly
      const encodedToken = encodeURIComponent(hash);

      // Create the event with the public ID and private token
      const event = await models.Event.create({
        userId_1,
        userId_2,
        status: true,
        hash: encodedToken,
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

// GET all events by userid only if it's open/true
router.get("/user", userShouldBeLoggedIn, async function (req, res, next) {
  const user_id = req.user_id;

  try {
    const events = await models.Event.findAll({
      where: {
        [Sequelize.Op.or]: [{ userId_1: user_id }, { userId_2: user_id }],
        status: true,
      },
      include: ["inviter", "invitee"],
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

// GET event with ID NUMBER (public)
router.get("/:id", eventMustExist, async function (req, res, next) {
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

//GET event by hash (private)

router.get("/private/:hash", async function (req, res, next) {
  const { hash } = req.params;

  try {
    // Decode the URL-encoded hash
    const decodedHash = decodeURIComponent(hash);

    // Find the event using the decoded hash
    const event = await models.Event.findOne({
      where: { hash: decodedHash },
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
router.delete("/", async (req, res) => {
  try {
    // Delete all events
    await models.Event.destroy({
      where: {},
      truncate: true, // This ensures that the table is truncated, removing all rows
    });

    res.send("All events deleted successfully");
  } catch (error) {
    console.error(error); // Log the error for debugging purposes
    res.status(500).send("Internal server error");
  }
});

module.exports = router;
