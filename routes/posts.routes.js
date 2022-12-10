const controller = require("../controllers/post.controller");

module.exports = function(app) {

  app.post("/api/user/posts", controller.create);
  app.get("/api/user/posts", controller.findAll);
  app.get("/api/user/posts/:id", controller.findOne);
  app.delete("/api/user/posts", controller.delete);
  
  app.get("/api/user/posts", controller.getPosts);
  app.post("/api/user/posts", controller.addPost);
  app.delete("/api/user/posts", controller.deletePost);

};