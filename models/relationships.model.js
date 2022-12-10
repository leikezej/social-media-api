module.exports = (sequelize, Sequelize) => {
  const Relationship = sequelize.define("relationships", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    image: {
      type: Sequelize.STRING
    },
    userId: {
      type: Sequelize.INTEGER,
      foreignKey: true
    },
    storyUserId: {
      type: Sequelize.INTEGER,
      foreignKey: true
    }
  });

  return Relationship;
};