const controller = require("../controllers/like.controller");

module.exports = function(app) {

  // app.post("/api/user/likes", controller.create);
  app.get("/api/user/likes", controller.findOne);
  app.delete("/api/user/likes", controller.delete);
  
    
  app.post("/api/user/likes", controller.addLikes);
  app.get("/api/user/likes", controller.getLikes);
  app.delete("/api/user/likes", controller.deleteLike);
};