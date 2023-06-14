"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Plan extends Model {
    static associate(models) {
      // Plan.belongsToMany(models.Events, {through: models.Selections});
      Plan.belongsTo(models.Selection);
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
    }
  );

  return Plan;
};
