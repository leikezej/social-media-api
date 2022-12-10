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


db.likes.belongsToMany(db.user, {
  through: "user_posts",
  foreignKey: "postId",
  foreignKey: "userId",
  targetKey: "id"
});

db.posts.belongsToMany(db.likes, {
  through: "posts_likes",
  foreignKey: "postId",
  foreignKey: "userId",
  targetKey: "id"
});

db.user.belongsToMany(db.role, {
  through: "user_roles",
  foreignKey: "userId",
  otherKey: "roleId"
});




// db.products.hasMany(db.reviews, {
//   foreignKey: 'productId',
//   as: 'review'
// })

// db.reviews.belongsTo(db.products, {
//   foreignKey: 'productId',
//   as: 'product'
// })


// Like =  
// Comment = 
// Post = 
// Relationships = 
// Stories = 
// User = 

// db.likes.belongsTo(db.user, {
//   foreignKey: 'userId', targetKey: 'id',
//     foreignKey:'postId', targetKey: 'postId'
// });

// db.comments.belongsToMany(db.user, {
//   through: "posts",
//   foreignKey: "userId",
//   foreignKey: "postId",
//   foreignKey: "commentUserId",
//   otherKey: "commentUserId"
// });

// db.posts.belongsToMany(db.user, {
//   // through: "user_roles",
//   foreignKey: "userId",
//   otherKey: "postId"
// });

// db.user.belongsToMany(db.posts, {
//   // through: "user_roles",
//   foreignKey: "userId",
//   storyUserId: "id"
// });


db.ROLES = ["user", "admin"];

module.exports = db;