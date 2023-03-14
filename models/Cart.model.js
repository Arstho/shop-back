const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  ItemImage: {
    type: String,
    default: "",
  },
  ItemCount: {
    type: Number,
    default: 0,
  },
  ItemPrice: {
    type: Number,
    default: 0,
  },
  Total: {
    type: Number,
    default: 0,
  },
  Discount: {
    type: Number,
    default: 0,
  },
});

const Cart = mongoose.model("Cart", CartSchema);

module.exports = Cart;
