const config = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  config.DB,
  config.USER,
  config.PASSWORD,
  {
    host: config.HOST,
    dialect: config.dialect,
    operatorsAliases: false,

    pool: {
      max: config.pool.max,
      min: config.pool.min,
      acquire: config.pool.acquire,
      idle: config.pool.idle
    }
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("../models/user.model.js")(sequelize, Sequelize);
db.role = require("../models/role.model.js")(sequelize, Sequelize);
db.refreshToken = require("../models/refreshToken.model.js")(sequelize, Sequelize);

db.session = require("../models/session.model.js")(sequelize, Sequelize);

db.likes = require("../models/likes.model.js")(sequelize, Sequelize);
db.comments = require("../models/comments.model.js")(sequelize, Sequelize);
db.posts = require("../models/posts.model.js")(sequelize, Sequelize);
db.relationships = require("../models/relationships.model.js")(sequelize, Sequelize);
db.stories = require("../models/stories.model.js")(sequelize, Sequelize);
db.user = require("../models/user.model.js")(sequelize, Sequelize);

db.role.belongsToMany(db.user, {
  through: "user_roles",
  foreignKey: "roleId",
  otherKey: "userId"
});

db.user.belongsToMany(db.role, {
  through: "user_roles",
  foreignKey: "userId",
  otherKey: "roleId"
});

db.refreshToken.belongsTo(db.user, {
  foreignKey: 'userId', targetKey: 'id'
});

db.user.hasOne(db.refreshToken, {
  foreignKey: 'userId', targetKey: 'id'
});


// db.timein.belongsToMany(db.timeout, {
//   through: "time_sheets",
//   foreignKey: "timein_time",
//   otherKey: "timeout_time"
// })

// db.timeout.belongsToMany(db.timein, {
//   through: "time_sheets",
//   foreignKey: "timeout_time",
//   otherKey: "timein_time"
// })

// db.timeSheet.belongsTo(db.user,  {
//   foreignKey: 'user_id', targetKey:'id'
// });
// db.user.hasOne(db.timeSheet, {
//   foreignKey: 'user_id', targetKey: 'id'
// });

// db.timesheet.belongsTo(db.user, {
//   foreignKey: 'user_id', targetKey: 'id'
// });

// db.user.hasOne(db.timesheet, {
//   foreignKey: 'user_id', targetKey: 'id'
// });


// db.refreshToken.belongsTo(db.user, {
//   foreignKey: 'user_id', targetKey: 'id'
// });

// db.user.hasOne(db.refreshToken, {
//   foreignKey: 'user_id', targetKey: 'id'
// });

db.ROLES = ["user", "admin"];

module.exports = db;

  // users.associate = function (models) {
  //   users.belongsToMany(models.roles, {
  //     through: "user_roles",
  //     foreignKey: "userId",
  //     otherKey: "roleId"    
  //   });


  //   users.belongsToMany(models.phones, {
  //     through: "user_phones",
  //     foreignKey: "userId",
  //     otherKey: "phoneId",
  //     constraints: false   
  //   });

  //   users.belongsTo(models.businesses, {
  //     foreignKey: 'businessId', as: "business"
  //   });