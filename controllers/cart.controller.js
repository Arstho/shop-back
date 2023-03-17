const Cart = require("../models/Cart.model.js");

module.exports.CartController = {
  createCartItem: async (req, res) => {
    try {
      const { name, size, count, price, total, color } = req.body;
      const newCartItem = new Cart({
        name,
        size,
        count,
        price,
        total,
        color,
      });
      await newCartItem.save();
      res.json(newCartItem);
    } catch (error) {
      res.json({ message: "Что-то пошло не так." });
    }
  },
  
  getCart: async (req, res) => {
    try {
      const cart = await Cart.findById(req.params.id);
      return res.json(cart);
    } catch (err) {
      return res.json(err);
    }
  },

  getAllCarts: async (req, res) => {
    try {
      const allCarts = await Cart.find();
      return res.json(allCarts);
    } catch (err) {
      return res.json(err);
    }
  },
};
