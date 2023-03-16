const Category = require("../models/Category.model");

module.exports.CategoryController = {
  addCategory: async (req, res) => {
    try {
      const addedCategory = await Category.create({
        category: req.body.category,
      });
      return res.json(addedCategory);
    } catch (err) {
      return res.json(err);
    }
  },
  getAllCategories: async (req, res) => {
    try {
      const allCategories = await Category.find();
      return res.json(allCategories);
    } catch (err) {
      return res.json(err);
    }
  },
  getCategoryById: async (req, res) => {
    try {
      const categoryById = await Category.findById(req.params.id);  
      return res.json(categoryById);
    } catch (err) {
      return res.json(err);
    }
  },
  updateCategoryById: async (req, res) => {
    try {
      const updatedCategory = await Category.findByIdAndUpdate(req.params.id, {
        category: req.body.category,
      });
      return res.json(updatedCategory);
    } catch (err) {
      return res.json(err);
    }
  },
  deleteCategoryById: async (req, res) => {
    try {
      const deletedCategory = await Category.findByIdAndDelete(req.params.id);
      return res.json(deletedCategory);
    } catch (err) {
      return res.json(err);
    }
  },
};
