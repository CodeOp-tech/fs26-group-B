"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.renameTable("Selection", "Selection");
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.renameTable("Selection", "Selection");
  },
};
