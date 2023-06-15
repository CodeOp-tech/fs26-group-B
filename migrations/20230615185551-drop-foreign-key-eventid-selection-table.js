"use strict";

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.removeConstraint("Selection", "selection_ibfk_1");
  },

  down: async (queryInterface) => {
    await queryInterface.addConstraint("Selection", {
      fields: ["eventId"],
      type: "foreign key",
      name: "selection_ibfk_1",
      references: {
        table: "Event",
        field: "id",
      },
      onDelete: "cascade",
      onUpdate: "cascade",
    });
  },
};
