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

module.exports = router;
