const controller = require("../controllers/likes.controller");

module.exports = function(app) {

  app.post("/api/user/likes", controller.create);
  app.get("/api/user/likes", controller.findAll);
  app.get("/api/user/likes/:id", controller.findOne);
  app.delete("/api/user/likes", controller.delete);
  
  app.get("/api/user/likes", controller.getLikes);
  app.post("/api/user/likes", controller.addLike);
  app.delete("/api/user/likes", controller.deleteLike);


};