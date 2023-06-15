var express = require("express");
var router = express.Router();
const models = require("../models");

//GET ALL PLANS

router.get("/", async function (req, res, next) {
  try {
    const plans = await models.Plan.findAll();
    res.send(plans);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
