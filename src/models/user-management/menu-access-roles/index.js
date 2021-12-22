exports.init = (sequelize, DataTypes, { Menu, Role }) => {
  const MenuAccessRoles = sequelize.define(
    "MenuAccessRoles",
    {
      marId: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
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

  Menu.hasMany(MenuAccessRoles, { foreignKey: "menu_id" });
  MenuAccessRoles.belongsTo(Menu, { foreignKey: "menu_id" });

  Role.hasMany(MenuAccessRoles, { foreignKey: "role_id" });
  MenuAccessRoles.belongsTo(Role, { foreignKey: "role_id" });

  return MenuAccessRoles;
};
