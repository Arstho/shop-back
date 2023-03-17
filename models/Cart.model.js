const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    default: "",
  },
  count: {
    type: Number,
    default: 0,
  },
  price: {
    type: Number,
    default: 0,
  },
  total: {
    type: Number,
    default: 0,
  },
  color: {
    type: String,
    default: "",
  },
});

const Cart = mongoose.model("Cart", CartSchema);

module.exports = Cart;
