"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Events", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      userId_1: {
        type: Sequelize.INTEGER,
<<<<<<< HEAD
        allowNull: false,
=======
>>>>>>> aab1759c7ea9736ed1adad312ada579de2d153b3
      },
      userId_2: {
        type: Sequelize.INTEGER,
<<<<<<< HEAD
        allowNull: false,
      },
      chosenPlanId: {
        type: Sequelize.INTEGER,
        allowNull: false,
=======
      },
      chosenPlanId: {
        type: Sequelize.INTEGER,
>>>>>>> aab1759c7ea9736ed1adad312ada579de2d153b3
      },
      status: {
        type: Sequelize.BOOLEAN,
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
    await queryInterface.dropTable("Events");
  },
};
