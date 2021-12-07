const express = require("express");
const router = express.Router();
const menuController = require("../../../controllers/user-management/menu");
const { validation } = require("../../../middlewares/validation");
const { authentication } = require("../../../middlewares/is-auth");
const {
  createMenuSchema,
} = require("../../../validations/user-management/menu");

router.post(
  "/create",
  authentication,
  validation(createMenuSchema),
  menuController.createMenu
);

router.get("/get-all", authentication, menuController.getAllMenus);

router.get("/get/:id", authentication, menuController.getSingleMenu);

router.delete("/delete/:id", authentication, menuController.deleteMenu);

module.exports = router;
