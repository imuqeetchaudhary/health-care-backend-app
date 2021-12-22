const config = require("config");
const { Sequelize, DataTypes } = require("sequelize");

function init() {
  const sequelize = new Sequelize({ ...config.get("db") });
  return () => sequelize;
}
const getDbClient = init();
const dbClient = getDbClient();

const db = {};
db.sequelize = dbClient;

const user = require("./user-management/user");
const role = require("./user-management/role");
const menuCategory = require("./user-management/menu_category");
const menu = require("./user-management/menu");
const menuAccessRoles = require("./user-management/menu-access-roles");
const userAccessRoles = require("./user-management/user-access-roles");

const User = user.init(dbClient, DataTypes);
const Role = role.init(dbClient, DataTypes);
const MenuCategory = menuCategory.init(dbClient, DataTypes);
const Menu = menu.init(dbClient, DataTypes, { MenuCategory });
const MenuAccessRoles = menuAccessRoles.init(dbClient, DataTypes, {
  Menu,
  Role,
});
const UserAccessRoles = userAccessRoles.init(dbClient, DataTypes, {
  User,
  Role,
});

db.User = User;
db.Role = Role;
db.MenuCategory = MenuCategory;
db.Menu = Menu;
db.MenuAccessRoles = MenuAccessRoles;
db.UserAccessRoles = UserAccessRoles;

module.exports = db;
