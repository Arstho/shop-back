const Clothes = require("../models/Clothes.model");

module.exports.clothesController = {
  addClothes: async (req, res) => {
    try {
      const clothes = await Clothes.create({
        name: req.body.name,
        image: req.body.image,
        category: req.body.category,
        sizes: req.body.sizes, 
        price: req.body.price,
        color: req.body.color,
      });
      return res.json(clothes);
    } catch (error) {
      console.log(error.message);
    }
  },
  deleteClothes: async (req, res) => {
    try {
      const clothes = await Clothes.findByIdAndDelete(req.params.id);
      return res.json(clothes);
    } catch (error) {
      console.log(error.message);
    }
  },
  editClothes: async (req, res) => {
    try {
      const clothes = await Clothes.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        image: req.body.image,
        category: req.body.category,
        brand: req.body.brand,
        size: req.body.size,
        price: req.body.price,
        color: req.body.color,
      });
      return res.json(clothes);
    } catch (error) {
      console.log(error.message);
    }
  },
  getClothes: async (req, res) => {
    try {
      const AllClothes = await Clothes.find();
      return res.json(AllClothes);
    } catch (error) {
      console.log(error.message);
    }
  },
  getClothesById: async (req, res) => {
    try {
      const clothes = await Clothes.findById(req.params.id);
      return res.json(clothes);
    } catch (error) {
      console.log(error.message);
    }
  },
};
