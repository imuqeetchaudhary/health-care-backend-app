exports.init = (sequelize, DataTypes, { User }) => {
  const Doctor = sequelize.define(
    "Doctor",
    {
      doctorId: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      fee: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
      },
      experience: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
      },
      availablityStatus: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      availablityDays: {
        type: DataTypes.STRING(55),
        allowNull: false,
      },
      activeHours: {
        type: DataTypes.STRING(55),
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
    { underscored: true, tableName: "doctor" }
  );

  User.hasMany(Doctor, { foreignKey: "user_id" });
  Doctor.belongsTo(User, { foreignKey: "user_id" });

  return Doctor;
};
