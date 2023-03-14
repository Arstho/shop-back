const { Router } = require("express");
const createCartItem = require("../controllers/cart.controller");

const router = Router();

router.post("/cart", createCartItem);

module.exports = router;
