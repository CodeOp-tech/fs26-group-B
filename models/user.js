"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // a users creates an event, which means they "send an invitation"
      User.hasMany(models.Event, { as: "invitations", foreignKey: "userId_1" });
      // a users receives an event, which means they "get a proposal"
      User.hasMany(models.Event, { as: "proposals", foreignKey: "userId_2" });
      //throws error in user.js
    }
  }
  User.init(
    {
      name: DataTypes.STRING,
      username: DataTypes.STRING,
      password: DataTypes.STRING,
      email: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User",
      freezeTableName: true,
    }
  );
  return User;
};
