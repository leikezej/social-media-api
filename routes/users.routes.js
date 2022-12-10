const { verifySignUp } = require("../middleware");
const controller = require("../controllers/user.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      'Access-Control-Allow-Origin: *',
      "x-access-token, Origin,  Content-Type, Accept"
    );
    next();
  });

  app.get("/api/users", controller.findAll);
  app.get("/api/users", controller.findOne);
  app.put("/api/users/:id", controller.update);
  app.delete("/api/users/:id", controller.delete);
  app.delete("/api/users", controller.deleteAll);
};
