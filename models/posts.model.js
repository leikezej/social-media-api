module.exports = (sequelize, Sequelize) => {
  const Post = sequelize.define("posts", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    desc: {
      type: Sequelize.STRING
    },
    image: {
      type: Sequelize.STRING
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

  return Post;
};