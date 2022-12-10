module.exports = (sequelize, Sequelize) => {
  const Like = sequelize.define("likes", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    userId: {
      type: Sequelize.INTEGER,
      foreignKey: true
    },
    postId: {
      type: Sequelize.INTEGER,
      foreignKey: true
    }
  });

  return Like;
};