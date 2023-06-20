var express = require("express");
var router = express.Router();
const models = require("../models");
const planMustExist = require("../guards/planMustExist");

//GET ALL PLANS

router.get("/", async function (req, res, next) {
  try {
    const plans = await models.Plan.findAll();
    res.send(plans);
  } catch (error) {
    res.status(500).send(error);
  }
});

//GET PLAN BY ID

router.get("/:id", planMustExist, async function (req, res, next) {
  try {
    const { id } = req.params;
    const plan = await models.Plan.findOne({ where: { id } });

    if (plan) {
      res.send(plan);
    } else {
      res.status(404).send("This plan doesn't exist!");
    }
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
