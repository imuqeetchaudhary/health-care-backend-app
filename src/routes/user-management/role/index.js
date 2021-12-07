const express = require("express");
const router = express.Router();
const roleController = require("../../../controllers/user-management/role");
const { validation } = require("../../../middlewares/validation");
const { authentication } = require("../../../middlewares/is-auth");
const {
  createRoleSchema,
} = require("../../../validations/user-management/role");

router.post(
  "/create",
  authentication,
  validation(createRoleSchema),
  roleController.createRole
);

router.get("/get-all", authentication, roleController.getAllRoles);

router.get("/get/:id", authentication, roleController.getSingleRole);

router.delete("/delete/:id", authentication, roleController.deleteRole);

module.exports = router;
