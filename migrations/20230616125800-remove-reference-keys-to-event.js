"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query(
      "ALTER TABLE `Event` DROP FOREIGN KEY `userId_1`;"
    );
    await queryInterface.sequelize.query(
      "ALTER TABLE `Event` DROP FOREIGN KEY `userId_2`;"
    );
    await queryInterface.sequelize.query(
      "ALTER TABLE `Event` DROP FOREIGN KEY `chosenPlanId`;"
    );
  },

  down: async (queryInterface, Sequelize) => {},
};
