var express = require("express");
var router = express.Router();
const models = require("../models");

// CREATE new event

router.post("/", async function (req, res, next) {
  const { userId_1, userId_2, chosenPlanId, status } = req.body;
  try {
    const event = await models.Events.create({
      userId_1,
      //USER 2 ES NULL PQ LA RESPUESTA ESTÁ PENDING

      userId_2,
      //COMIENZA SIENDO NULL

      chosenPlanId,
      status,
    });
    //DEVUELVE EL EVENT ID Y "NEW EVENT CREATED"
    res.send(event);
  } catch (error) {
    res.status(500).send(error);
  }
});

// PUT PARA AÑADIR EL USER 2
// DESDE AUTHENTICATION
