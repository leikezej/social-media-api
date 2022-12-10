
const controller = require("../controllers/relationship.controller");

module.exports = function(app) {

  app.post("/api/user/posts", controller.create);
  app.get("/api/user/posts", controller.findAll);
  app.get("/api/user/posts/:id", controller.findOne);
  app.delete("/api/user/posts", controller.delete);
  
  app.get("/api/user/posts", controller.getRelationships);
  app.post("/api/user/posts", controller.addRelationship);
  app.delete("/api/user/posts", controller.deleteRelationship);

};