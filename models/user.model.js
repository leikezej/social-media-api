module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("users", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    username: {
      type: Sequelize.STRING
    },
    name: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    phone: {
      type: Sequelize.STRING
    },
    address: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
    },
    cover_image: {
      type: Sequelize.STRING
    },
    profile_image: {
      type: Sequelize.STRING
    },
    website:{
        type: Sequelize.TEXT
    }
  });

  return User;
};