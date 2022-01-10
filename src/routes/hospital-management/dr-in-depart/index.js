const express = require("express");
const router = express.Router();
const { upload } = require("../../../middlewares/upload");
const { validation } = require("../../../middlewares/validation");
const { authentication } = require("../../../middlewares/is-auth");
const drInDepartController = require("../../../controllers/hospital-management/dr-in-depart");
const {
  createDrInDepartSchema,
  updateDrInDepartSchema,
} = require("../../../validations/hospital-management/dr-in-depart");

router.post(
  "/create",
  authentication,
  validation(createDrInDepartSchema),
  drInDepartController.createDrInDepart
);

router.get("/get-all", authentication, drInDepartController.getAllDrInDepart);

router.get(
  "/get/:id",
  authentication,
  drInDepartController.getSingleDrInDepart
);

router.patch(
  "/update/:id",
  authentication,
  validation(updateDrInDepartSchema),
  drInDepartController.updateDrInDepart
);

router.delete(
  "/delete/:id",
  authentication,
  drInDepartController.deleteDrInDepart
);

module.exports = router;
