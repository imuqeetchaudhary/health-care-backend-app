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

const User = user.init(dbClient, DataTypes);
const Role = role.init(dbClient, DataTypes);

db.User = User;
db.Role = Role;

module.exports = db;
