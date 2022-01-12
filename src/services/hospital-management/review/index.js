const db = require("../../../models");
const dbUtils = require("../../error-check.util");
const Exceptions = require("../../../utils/custom-exceptions");

exports.saveReview = async ({
  stars,
  patientId,
  doctorId,
  actionPerformedBy,
}) => {
  const review = {
    stars,
    patientId,
    doctorId,
    createdBy: actionPerformedBy,
    updatedBy: actionPerformedBy,
  };

  try {
    const newReview = await db.Review.create({ ...review });
    return newReview;
  } catch (err) {
    if (dbUtils.isRecordDuplicate(err)) {
      throw new Exceptions.BadRequest({
        message: "Review already exists",
      });
    }
    throw err;
  }
};

exports.listAllReview = () => {
  return db.Review.findAll({
    attributes: ["reviewId", "stars"],
    include: [
      {
        model: db.Patient,
        attributes: ["patientId", "status", "userId"],
        include: [
          {
            model: db.User,
            attributes: [
              "userId",
              "email",
              "displayName",
              "isActive",
              "isAdmin",
              "isSuperuser",
            ],
          },
        ],
      },
      {
        model: db.Doctor,
        attributes: ["doctorId", "userId"],
        include: [
          {
            model: db.User,
            attributes: [
              "userId",
              "email",
              "displayName",
              "isActive",
              "isAdmin",
              "isSuperuser",
            ],
          },
        ],
      },
    ],
  });
};

exports.findById = ({ id }) => {
  return db.Review.findByPk(id, {
    attributes: ["reviewId", "stars"],
    include: [
      {
        model: db.Patient,
        attributes: ["patientId", "status", "userId"],
        include: [
          {
            model: db.User,
            attributes: [
              "userId",
              "email",
              "displayName",
              "isActive",
              "isAdmin",
              "isSuperuser",
            ],
          },
        ],
      },
      {
        model: db.Doctor,
        attributes: ["doctorId", "userId"],
        include: [
          {
            model: db.User,
            attributes: [
              "userId",
              "email",
              "displayName",
              "isActive",
              "isAdmin",
              "isSuperuser",
            ],
          },
        ],
      },
    ],
  });
};

exports.updateReview = async ({
  reviewId,
  stars,
  patientId,
  doctorId,
  actionPerformBy,
}) => {
  const review = {
    stars,
    patientId,
    doctorId,
    updatedBy: actionPerformBy,
  };

  try {
    const updatedReview = await db.Review.update(
      { ...review },
      { where: { reviewId } }
    );

    if (dbUtils.isRecordFound(updatedReview))
      throw new Exceptions.NotFound({
        message: "Review not found",
      });
  } catch (err) {
    if (dbUtils.isRecordDuplicate(err))
      throw new Exceptions.BadRequest({
        message: "Review already exists",
      });
    throw err;
  }
};

exports.deleteReview = async ({ reviewId }) => {
  try {
    const deleteReview = await db.Review.destroy({
      where: { reviewId },
    });
  } catch (err) {
    if (dbUtils.isFkFailed(err)) {
      throw new Exceptions.BadRequest({
        message: "Can't delete Review unless delete all its reference",
      });
    }
    throw err;
  }
};

const _prop = {
  HIDDEN_FIELDS: ["createdAt", "updatedAt"],
  hideFieldsCondition: function (...args) {
    return { attributes: { exclude: [...this.HIDDEN_FIELDS, ...args] } };
  },
};
