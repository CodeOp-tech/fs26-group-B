"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint("Event", "PRIMARY");
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.addConstraint("Event", {
      type: "primary key",
      fields: ["id"],
      name: "PRIMARY",
    });
  },
};
