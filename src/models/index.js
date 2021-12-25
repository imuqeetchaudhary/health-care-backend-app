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

// User Management System

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

// Hospital Management System

const hospital = require("./hospital-management/hospital");
const department = require("./hospital-management/department");
const doctor = require("./hospital-management/doctor");
const drInDepart = require("./hospital-management/dr-in-depart");
const qualification = require("./hospital-management/qualification");

const Hospital = hospital.init(dbClient, DataTypes);
const Department = department.init(dbClient, DataTypes, { Hospital });
const Doctor = doctor.init(dbClient, DataTypes, { User });
const DrInDepart = drInDepart.init(dbClient, DataTypes);
const Qualification = qualification.init(dbClient, DataTypes, { Doctor });

db.Hospital = Hospital;
db.Department = Department;
db.Doctor = Doctor;
db.DrInDepart = DrInDepart;
db.Qualification = Qualification;

module.exports = db;
