const Cart = require("../models/Cart.model.js");

module.exports.CartController = {
  createCartItem: async (req, res) => {
    try {
      const { Name, ItemImage, ItemCount, ItemPrice, Total, Discount } = req.body;
      const newCartItem = new Cart({
        Name,
        ItemImage,
        ItemCount,
        ItemPrice,
        Total,
        Discount,
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
};
