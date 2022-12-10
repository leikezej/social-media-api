module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("users", {
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
    // userId : {
    //   type: Sequelize.STRING
    // }
  });

  return User;
};