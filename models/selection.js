"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Selection extends Model {
    static associate(models) {
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
      hashEventId: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Selection",
      freezeTableName: true,
    }
  );

  return Selection;
};
