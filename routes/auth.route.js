const Router = require("express");
const router = new Router();
const controller = require("../controllers/auth.controller");
const authMiddleware = require("../midlewaree/auth.Midlewaree");

router.post("/registration", controller.registration);
router.post("/login", controller.login);
router.get("/users", controller.getUsers);
router.delete("/:user", controller.deleteUser);

module.exports = router;
