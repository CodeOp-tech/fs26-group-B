module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface
      .changeColumn("Event", "id", {
        type: Sequelize.STRING,
      })
      .then(() => {
        return queryInterface.removeColumn("Event", "hash");
      });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface
      .changeColumn("Event", "id", {
        type: Sequelize.INTEGER,
      })
      .then(() => {
        return queryInterface.addColumn("Event", "hash", {
          type: Sequelize.STRING,
        });
      });
  },
};
