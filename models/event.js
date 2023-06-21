"use strict";

const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  class Event extends Model {
    static associate(models) {
      Event.belongsTo(models.User, { as: "inviter", foreignKey: "userId_1" });
      Event.belongsTo(models.User, { as: "invitee", foreignKey: "userId_2" });
      // Event.hasOne(models.Plan);
    }
  }

  Event.init(
    {
      userId_1: DataTypes.INTEGER,
      userId_2: DataTypes.INTEGER,
      chosenPlanId: DataTypes.INTEGER,
      hash: DataTypes.STRING,
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
