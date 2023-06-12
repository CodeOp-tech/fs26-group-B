"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Selections extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Selections.init(
    {
      userId: DataTypes.INTEGER,
    },
    {
      planId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Selections",
    }
  );
  return Selections;
};
