exports.init = (sequelize, DataTypes, { User }) => {
  const Patient = sequelize.define(
    "Patient",
    {
      patientId: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      status: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      userId: {
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
    { underscored: true, tableName: "patient" }
  );

  User.hasMany(Patient, { foreignKey: "user_id" });
  Patient.belongsTo(User, { foreignKey: "user_id" });

  return Patient;
};
