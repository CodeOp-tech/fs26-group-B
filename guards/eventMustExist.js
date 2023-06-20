const models = require("../models");

async function eventMustExist(req, res, next) {
  const { id } = req.params;
  try {
    const event = await models.Event.findOne({
      where: {
        id,
      },
    });
    console.log(event);
    if (event) {
      next();
    } else res.status(404).send({ message: "Event was not found" });
  } catch (err) {
    res.status(500).send(err);
  }
}

module.exports = eventMustExist;
