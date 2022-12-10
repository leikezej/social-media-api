const controller = require("../controllers/comment.controller");

module.exports = function(app) {

  app.post("/api/user/comment", controller.create);
  app.get("/api/user/comment/:id", controller.findOne);
  app.delete("/api/user/comment/:id", controller.delete);

  app.get("/api/user/comment", controller.getComments);
  app.post("/api/user/comment", controller.addComment);
  app.delete("/api/user/comment/:id", controller.deleteComment);

};