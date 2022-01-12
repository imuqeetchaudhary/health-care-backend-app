const express = require("express");
const router = express.Router();
const { upload } = require("../../../middlewares/upload");
const { validation } = require("../../../middlewares/validation");
const { authentication } = require("../../../middlewares/is-auth");
const reviewController = require("../../../controllers/hospital-management/review");
const {
  createReviewSchema,
  updateReviewSchema,
} = require("../../../validations/hospital-management/review");

router.post(
  "/create",
  authentication,
  validation(createReviewSchema),
  reviewController.createReview
);

router.get("/get-all", authentication, reviewController.getAllReview);

router.get("/get/:id", authentication, reviewController.getSingleReview);

router.patch(
  "/update/:id",
  authentication,
  validation(updateReviewSchema),
  reviewController.updateReview
);

router.delete("/delete/:id", authentication, reviewController.deleteReview);

module.exports = router;
