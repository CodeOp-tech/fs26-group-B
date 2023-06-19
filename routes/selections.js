var express = require("express");
var router = express.Router();
const models = require("../models");
const { Sequelize } = require("sequelize");

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
// search for coincidence
// if it's true, PUT in event table

//check if there is a match
// if there is, post it in the event table

//PLANID = EVENTID

router.post("/", async function (req, res, next) {
  const { userId, planId, eventId } = req.body;
  try {
    // find one selection
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
      // Find the another selection
      const otherMatch = await models.Selection.findOne({
        // With the same values
        where: {
          //EXCEPT for the userId
          userId: { [Sequelize.Op.not]: userId },
          planId,
          eventId,
        },
      });
      // If this other selection exists
      if (otherMatch) {
        // Update the chosenPlanId in the Event table
        await models.Event.update(
          // With the planId and turn the status into false
          { chosenPlanId: planId, status: false },
          {
            // From that eventId
            where: { id: eventId },
          }
        );

        res.send(match && "Match found. Chosen plan updated in the event.");
      } else {
        res.send("You made a selection, waiting for the other user.");
      }
    } else {
      res.send(selection && "You made a selection!");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

// router.post("/", async function (req, res, next) {
//   const { userId, planId, eventId } = req.body;
//   try {
//     const selection = await models.Selection.create({
//       userId,
//       planId,
//       eventId,
//     });
//     res.send(selection);
//   } catch (error) {
//     res.status(500).send(error);
//   }
// });

module.exports = router;
