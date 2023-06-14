"use strict";

const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  class Event extends Model {
    // each event has multiple users

    static associate(models) {
      Event.hasMany(models.User);
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
    }
  );

  return Event;
};
