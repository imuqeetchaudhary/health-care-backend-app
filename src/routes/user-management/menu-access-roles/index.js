const express = require("express");
const router = express.Router();
const menuAccessRoleController = require("../../../controllers/user-management/menu-access-roles");
const { validation } = require("../../../middlewares/validation");
const { authentication } = require("../../../middlewares/is-auth");
const {
  createMenuAccessRoleSchema,
} = require("../../../validations/user-management/menu-access-roles");

router.post(
  "/create",
  authentication,
  validation(createMenuAccessRoleSchema),
  menuAccessRoleController.createMenuAccessRole
);

// router.get("/get-all", authentication, menuAccessRoleController.getAllMenuAccessRoles);

// router.get("/get/:id", authentication, menuAccessRoleController.getSingleMenuAccessRole);

// router.delete("/delete/:id", authentication, menuAccessRoleController.deleteMenuAccessRole);

module.exports = router;
