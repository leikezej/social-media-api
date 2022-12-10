module.exports = (sequelize, DataTypes) => {
  const Like = sequelize.define("likes", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    userId: {
      type: DataTypes.INTEGER,
      foreignKey: true
    },
    postId: {
      type: DataTypes.INTEGER,
      foreignKey: true
    }
  });

  return Like;
};