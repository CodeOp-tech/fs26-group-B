"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Plans extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }

  Plans.init(
    {
      name: DataTypes.STRING,
      searchKeyword: DataTypes.STRING,
      imageSrc: DataTypes.BLOB,
    },
    {
      sequelize,
      modelName: "Plans",
    }
  );

  return Plans;
};
