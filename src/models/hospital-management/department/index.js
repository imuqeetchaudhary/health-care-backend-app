exports.init = (sequelize, DataTypes, { Hospital }) => {
  const Department = sequelize.define(
    "Department",
    {
      departmentId: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      departmentName: {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: true,
      },
      image: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      maxDoctors: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
      },
      maxPatients: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
      },
      phoneNo: {
        type: DataTypes.STRING(55),
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING(55),
        allowNull: false,
      },
      status: {
        type: DataTypes.STRING(55),
        allowNull: false,
      },
      hospitalId: {
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
    { underscored: true, tableName: "department" }
  );

  Hospital.hasMany(Department, { foreignKey: "hospital_id" });
  Department.belongsTo(Hospital, { foreignKey: "hospital_id" });

  return Department;
};
