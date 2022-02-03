const express = require("express");
const router = express.Router();
const { validation } = require("../../../middlewares/validation");
const { authentication } = require("../../../middlewares/is-auth");
const qualificationController = require("../../../controllers/hospital-management/qualification");
const {
    createQualificationSchema,
    updateQualificationSchema,
} = require("../../../validations/hospital-management/qualification");

router.post(
    "/create",
    authentication,
    validation(createQualificationSchema),
    qualificationController.createQualification
);

router.get(
    "/get-all",
    authentication,
    qualificationController.getAllQualification
);

router.get(
    "/get/:id",
    authentication,
    qualificationController.getSingleQualification
);

router.get(
    "/get-by-dr/:id",
    authentication,
    qualificationController.getSingleQualificationByDr
);

router.patch(
    "/update/:id",
    authentication,
    validation(updateQualificationSchema),
    qualificationController.updateQualification
);

router.delete(
    "/delete/:id",
    authentication,
    qualificationController.deleteQualification
);

router.delete(
    "/delete-by-doctor/:id",
    authentication,
    qualificationController.deleteQualificationByDr
);

module.exports = router;