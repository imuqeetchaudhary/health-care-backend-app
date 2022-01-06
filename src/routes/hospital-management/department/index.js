const express = require("express");
const router = express.Router();
const departmentController = require("../../../controllers/hospital-management/department");
const { validation } = require("../../../middlewares/validation");
const { authentication } = require("../../../middlewares/is-auth");
const {
  createDepartmentSchema,
  updateDepartmentSchema,
} = require("../../../validations/hospital-management/department");

router.post(
  "/create",
  authentication,
  validation(createDepartmentSchema),
  departmentController.createDepartment
);

router.get("/get-all", authentication, departmentController.getAllDepartment);

router.get("/get/:id", authentication, departmentController.getSingleDepartment);

router.patch(
  "/update/:id",
  authentication,
  validation(updateDepartmentSchema),
  departmentController.updateDepartment
);

router.delete("/delete/:id", authentication, departmentController.deleteDepartment);

module.exports = router;
