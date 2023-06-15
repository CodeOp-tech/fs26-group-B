"use strict";

const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  class Event extends Model {
    // each event has multiple users

    static associate(models) {
      Event.belongsTo(models.User, { as: "inviter", foreignKey: "userId_1" });
      Event.belongsTo(models.User, { as: "invitee", foreignKey: "userId_2" });
      // throws error in user.js
    }
  }

  Event.init(
    {
      userId_1: DataTypes.INTEGER,
      userId_2: DataTypes.INTEGER,
      chosenPlanId: DataTypes.INTEGER,
      status: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "Event",
      freezeTableName: true,
    }
  );

  return Event;
};
