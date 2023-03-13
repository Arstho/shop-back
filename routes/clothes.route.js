const { Router } = require("express");
const { clothesController } = require("../controllers/clothes.controller");

const router = Router();

router.post("/", clothesController.addClothes);
router.delete("/:id", clothesController.deleteClothes);
router.patch("/:id", clothesController.editClothes);
router.get("/", clothesController.getClothes);
router.get("/:id", clothesController.getClothesById);

module.exports = router;
