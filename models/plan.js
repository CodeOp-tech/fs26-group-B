"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Plan extends Model {
    static associate(models) {}
  }

  Plan.init(
    {
      name: DataTypes.STRING,
      searchKeyword: DataTypes.STRING,
      imageSrc: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Plan",
      freezeTableName: true,
    }
  );

  return Plan;
};
