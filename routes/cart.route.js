const { Router } = require("express");
const { CartController } = require("../controllers/cart.controller");

const router = Router();

router.post("/cart", CartController.createCartItem);
router.get("/cart/:id", CartController.getCart);
router.get("/cart", CartController.getAllCarts);

module.exports = router;
