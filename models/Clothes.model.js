const mongoose = require("mongoose");

const clothesSchema = mongoose.Schema({
  name: String,
  image: String,
  category: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Category",
  },
  brand: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Brand",
  },
  size: String,
  price: Number,
  color: String,
});

const Clothes = mongoose.model("Clothes", clothesSchema);

module.exports = Clothes;
