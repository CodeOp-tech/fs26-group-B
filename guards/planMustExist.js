const models = require("../models");

async function planMustExist(req, res, next) {
  const { id } = req.params;
  try {
    const plan = await models.Plan.findOne({
      where: {
        id,
      },
    });
    console.log(plan);
    if (plan) {
      next();
    } else res.status(404).send({ message: "Plan was not found" });
  } catch (err) {
    res.status(500).send(err);
  }
}

module.exports = planMustExist;
