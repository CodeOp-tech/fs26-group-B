module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addConstraint("Event", {
      fields: ["userId_1"],
      type: "foreign key",
      name: "userId_1",
      references: {
        table: "User",
        field: "id",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });

    await queryInterface.addConstraint("Event", {
      fields: ["userId_2"],
      type: "foreign key",
      name: "userId_2",
      references: {
        table: "User",
        field: "id",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });

    await queryInterface.addConstraint("Event", {
      fields: ["chosenPlanId"],
      type: "foreign key",
      name: "chosenPlanId",
      references: {
        table: "Plan",
        field: "id",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint("Event", "userId_1");
    await queryInterface.removeConstraint("Event", "userId_2");
    await queryInterface.removeConstraint("Event", "chosenPlanId");
  },
};
