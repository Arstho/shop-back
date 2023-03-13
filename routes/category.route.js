const { Router } = require("express");

const { CategoryController } = require("../controllers/category.controller");

const router = Router();

router.post("/category", CategoryController.addCategory);
router.get("/category", CategoryController.getAllCategories);
router.get("/category/:id", CategoryController.getCategoryById);
router.patch("/category/:id", CategoryController.updateCategoryById);
router.delete("/category/:id", CategoryController.deleteCategoryById);

module.exports = router;
