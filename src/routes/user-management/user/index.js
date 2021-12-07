const express = require("express");
const router = express.Router();
const userController = require("../../../controllers/user-management/user");
const { validation } = require("../../../middlewares/validation");
const { authentication } = require("../../../middlewares/is-auth");
const {
  registerSchema,
  loginSchema,
} = require("../../../validations/user-management/user");

router.post(
  "/register",
  authentication,
  validation(registerSchema),
  userController.register
);

router.post("/login", validation(loginSchema), userController.login);

module.exports = router;
