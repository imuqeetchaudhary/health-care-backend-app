const express = require("express");
const router = express.Router();
const userAccessRoleController = require("../../../controllers/user-management/user-access-roles");
const { validation } = require("../../../middlewares/validation");
const { authentication } = require("../../../middlewares/is-auth");
const {
  createUserAccessRoleSchema,
} = require("../../../validations/user-management/user-access-roles");

router.post(
  "/create",
  authentication,
  validation(createUserAccessRoleSchema),
  userAccessRoleController.createUserAccessRole
);

router.get(
  "/get-all/:id",
  authentication,
  userAccessRoleController.getAllUsersForSingleRole
);

module.exports = router;
