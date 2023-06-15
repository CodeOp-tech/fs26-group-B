"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.renameTable("User", "User");
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.renameTable("User", "User");
  },
};
