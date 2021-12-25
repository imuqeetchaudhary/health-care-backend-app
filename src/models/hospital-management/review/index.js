exports.init = (sequelize, DataTypes, { Patient, Doctor }) => {
  const Review = sequelize.define(
    "Review",
    {
      reviewId: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      stars: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
      },
      patientId: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
      },
      doctorId: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
      },
      createdBy: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
      },
      updatedBy: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
      },
    },
    { underscored: true, tableName: "review" }
  );

  Patient.hasMany(Review, { foreignKey: "patient_id" });
  Review.belongsTo(Patient, { foreignKey: "patient_id" });

  Doctor.hasMany(Review, { foreignKey: "doctor_id" });
  Review.belongsTo(Doctor, { foreignKey: "doctor_id" });

  return Review;
};
