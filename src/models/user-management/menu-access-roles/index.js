exports.init = (sequelize, DataTypes) => {
  const MenuAccessRoles = sequelize.define(
    "MenuAccessRoles",
    {
      menuId: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
      },
      roleId: {
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
    { underscored: true, tableName: "ad_menu_access_roles" }
  );
  return MenuAccessRoles;
};
