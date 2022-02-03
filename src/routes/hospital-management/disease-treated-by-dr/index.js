const express = require("express");
const router = express.Router();
const { upload } = require("../../../middlewares/upload");
const { validation } = require("../../../middlewares/validation");
const { authentication } = require("../../../middlewares/is-auth");
const diseaseTreatedByDrController = require("../../../controllers/hospital-management/disease-treated-by-dr");
const {
    createDiseaseTreatedByDrSchema,
    updateDiseaseTreatedByDrSchema,
} = require("../../../validations/hospital-management/disease-treated-by-dr");

router.post(
    "/create",
    authentication,
    validation(createDiseaseTreatedByDrSchema),
    diseaseTreatedByDrController.createDiseaseTreatedByDr
);

router.get(
    "/get-all",
    authentication,
    diseaseTreatedByDrController.getAllDiseaseTreatedByDr
);

router.get(
    "/get/:id",
    authentication,
    diseaseTreatedByDrController.getSingleDiseaseTreatedByDr
);

router.get(
    "/get-by-dr/:id",
    authentication,
    diseaseTreatedByDrController.getSingleDiseaseTreated
);

router.patch(
    "/update/:id",
    authentication,
    validation(updateDiseaseTreatedByDrSchema),
    diseaseTreatedByDrController.updateDiseaseTreatedByDr
);

router.delete(
    "/delete/:id",
    authentication,
    diseaseTreatedByDrController.deleteDiseaseTreatedByDr
);

router.delete(
    "/delete-by-doctor/:id",
    authentication,
    diseaseTreatedByDrController.deleteDiseaseTreated
);

module.exports = router;