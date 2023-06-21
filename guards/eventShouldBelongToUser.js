const models = require("../models");
const { Sequelize } = require("sequelize");
async function eventShouldBelongToUser(req, res, next) {
  const { userId, id } = req.body;
  try {
    const event = await models.Event.findOne({
        where: {
          [Sequelize.Op.or]: [
            {userId_2: userId},
            {userId_1: userId},
            ],
            id,
      },
    });
    if (event) {
      next();
    } else
      res.status(400).send({
        message: "user doesn't have this event assigned",
      });
  } catch (err) {
    res.status(500).send(err);
  }
}

module.exports = eventShouldBelongToUser;
