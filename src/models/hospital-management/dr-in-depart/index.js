exports.init = (sequelize, DataTypes, { Department, Doctor }) => {
  const DrInDepart = sequelize.define(
    "DrInDepart",
    {
      drInDepartId: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      doctorId: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
      },
      departmentId: {
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
    { underscored: true, tableName: "dr_in_depart" }
  );

  Department.hasMany(DrInDepart, { foreignKey: "department_id" });
  DrInDepart.belongsTo(Department, { foreignKey: "department_id" });

  Doctor.hasMany(DrInDepart, { foreignKey: "doctor_id" });
  DrInDepart.belongsTo(Doctor, { foreignKey: "doctor_id" });

  return DrInDepart;
};
