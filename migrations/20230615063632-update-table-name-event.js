"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.renameTable("Event", "Event");
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.renameTable("Event", "Event");
  },
};
