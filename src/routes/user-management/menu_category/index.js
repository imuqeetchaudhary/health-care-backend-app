const express = require("express");
const router = express.Router();
const menuCategoryController = require("../../../controllers/user-management/menu_category");
const { validation } = require("../../../middlewares/validation");
const { authentication } = require("../../../middlewares/is-auth");
const {
  createMenuCategorySchema,
} = require("../../../validations/user-management/menu_category");

router.post(
  "/create",
  authentication,
  validation(createMenuCategorySchema),
  menuCategoryController.createMenuCategory
);

router.get(
  "/get-all",
  authentication,
  menuCategoryController.getAllMenuCategory
);

router.get(
  "/get/:id",
  authentication,
  menuCategoryController.getSingleMenuCategory
);

router.delete(
  "/delete/:id",
  authentication,
  menuCategoryController.deleteMenuCategory
);

module.exports = router;
