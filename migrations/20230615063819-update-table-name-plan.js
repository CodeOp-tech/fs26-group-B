"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.renameTable("Plan", "Plan");
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.renameTable("Plan", "Plan");
  },
};
