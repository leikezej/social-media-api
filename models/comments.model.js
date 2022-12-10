module.exports = (sequelize, Sequelize) => {
  const Comment = sequelize.define("comments", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    desc: {
      type: Sequelize.STRING
    },
    userId: {
      type: Sequelize.INTEGER,
      foreignKey: true
    },
    commentUserId: {
      type: Sequelize.INTEGER,
      foreignKey: true
    },
    postId: {
      type: Sequelize.INTEGER,
      foreignKey: true
    }
});

  return Comment;
};