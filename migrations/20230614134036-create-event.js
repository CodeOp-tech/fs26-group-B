"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Event", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      userId_1: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      userId_2: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      chosenPlanId: {
        type: Sequelize.INTEGER,
      },
      hash: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      status: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Event");
  },
};
