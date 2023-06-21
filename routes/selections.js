const express = require("express");
const router = express.Router();
const models = require("../models");
const { Sequelize } = require("sequelize");
const eventShouldBelongToUser = require("../guards/eventShouldBelongToUser");
// ADD GUARDS
// user should be logged in
// user should exist
// plan must exist
// event must exist
// event should belong to user

// POST a selection
router.post("/", eventShouldBelongToUser, async function (req, res, next) {
  const { userId, planId, eventId } = req.body;

  const selection = await models.Selection.findOne({
    where: {
      userId,
      planId,
      eventId,
    },
  });
  // if there is already a selection with this values
  if (selection) {
    // delete it
    await models.Selection.destroy({
      where: {
        userId,
        planId,
        eventId,
      },
    });
    res.send("Selection deleted.");
  } else {
    // start creating a new selection
    try {
      // Create a new selection
      await models.Selection.create({
        userId,
        planId,
        eventId,
      });

      // Find one selection
      const match = await models.Selection.findOne({
        // With these values
        where: {
          userId,
          planId,
          eventId,
        },
      });

      // If it exists
      if (match) {
        // Find the other selection
        const otherMatch = await models.Selection.findOne({
          // With the same values
          where: {
            userId: { [Sequelize.Op.not]: userId },
            planId,
            eventId,
          },
        });

        // If the other selection exists
        if (otherMatch) {
          // Update the chosenPlanId in the Event table
          const eventUpdateResult = await models.Event.update(
            { chosenPlanId: planId, status: false },
            { where: { id: eventId } }
          );

          // If an event with the given ID was found and updated successfully
          if (eventUpdateResult[0] > 0) {
            res.send("Match found. Chosen plan updated in the event.");
          } else {
            res.send("No event found with the given ID.");
          }
        } else {
          res.send("You made a selection, waiting for the other user.");
        }
        // If there is no match, just post the selection
      } else {
        res.send("You made a selection!");
      }
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  }
});

//GET all selections

router.get("/", async function (req, res, next) {
  try {
    const selections = await models.Selection.findAll();
    res.status(200).send(selections);
  } catch (error) {
    res.status(500).send(error);
  }
});

//DELETE ALL SELECTIONS
router.delete("/", async (req, res) => {
  try {
    // Delete all events
    await models.Selection.destroy({
      where: {},
      truncate: true, // This ensures that the table is truncated, removing all rows
    });

    res.send("All selections deleted successfully");
  } catch (error) {
    console.error(error); // Log the error for debugging purposes
    res.status(500).send("Internal server error");
  }
});

module.exports = router;
