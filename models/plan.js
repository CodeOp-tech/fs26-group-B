"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Plan extends Model {
    static associate(models) {
      Plan.belongsToMany(models.Event, { through: models.Selection });
    }
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
