const reviewService = require("../../../services/hospital-management/review");
const { promise } = require("../../../middlewares/promise");
const Exceptions = require("../../../utils/custom-exceptions");

exports.createReview = promise(async (req, res) => {
  const { stars, patientId, doctorId } = req.body;
  const actionPerformedBy = req.user.userId;

  const review = await reviewService.saveReview({
    stars,
    patientId,
    doctorId,
    actionPerformedBy,
  });

  res.status(200).json({
    message: "Successfully created new review",
    review,
  });
});

exports.getAllReview = promise(async (req, res) => {
  const review = await reviewService.listAllReview();
  res.status(200).json({ review });
});

exports.getSingleReview = promise(async (req, res) => {
  const { id } = req.params;

  const review = await reviewService.findById({ id });
  res.status(200).json({ review });
});

exports.updateReview = promise(async (req, res) => {
  const { id } = req.params;
  const { stars, patientId, doctorId } = req.body;
  const reviewId = id;
  const actionPerformBy = req.user.userId;

  const updateReview = await reviewService.updateReview({
    reviewId,
    stars,
    patientId,
    doctorId,
    actionPerformBy,
  });
  console.log(updateReview);
  res.status(200).json({ message: "Successfully updated review" });
});

exports.deleteReview = promise(async (req, res) => {
  const { id } = req.params;
  const reviewId = id;

  const deleteReview = await reviewService.deleteReview({
    reviewId,
  });
  res.status(200).json({ message: "Successfully deleted review" });
});
