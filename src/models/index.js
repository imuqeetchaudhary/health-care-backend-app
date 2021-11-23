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
const menu = require("./user-management/menu");
const menuAccessRoles = require("./user-management/menu-access-roles");
const userAccessRoles = require("./user-management/user-access-roles");

const User = user.init(dbClient, DataTypes);
const Role = role.init(dbClient, DataTypes);
const Menu = menu.init(dbClient, DataTypes);
const MenuAccessRoles = menuAccessRoles.init(dbClient, DataTypes);
const UserAccessRoles = userAccessRoles.init(dbClient, DataTypes);

db.User = User;
db.Role = Role;
db.Menu = Menu;
db.MenuAccessRoles = MenuAccessRoles;
db.UserAccessRoles = UserAccessRoles;

module.exports = db;
