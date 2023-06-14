"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Selection extends Model {
    static associate(models) {
      // each selection is made by one user
      // many selections are made into one event
      // one selection is made to one plan

      Selection.belongsTo(models.User);
      Selection.belongsTo(models.Plan);
      Selection.belongsTo(models.Event);
    }
  }

  Selection.init(
    {
      eventId: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
      planId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Selection",
    }
  );

  return Selection;
};
