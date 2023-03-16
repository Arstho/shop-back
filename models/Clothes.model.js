const mongoose = require("mongoose");

const clothesSchema = mongoose.Schema({
  name: String,
  image: String,
  category: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Category",
  },
  sizes: [],
  price: Number,
  color: [],
});

const Clothes = mongoose.model("Clothes", clothesSchema);

module.exports = Clothes;
