const config = require('config');
const { Sequelize, DataTypes } = require('sequelize');

function init() {
	const sequelize = new Sequelize({ ...config.get('db') });
	return () => sequelize;
}
const getDbClient = init();
const dbClient = getDbClient();

const db = {};
db.sequelize = dbClient;

// User Management System

const user = require('./user-management/user');
const role = require('./user-management/role');
const menuCategory = require('./user-management/menu_category');
const menu = require('./user-management/menu');
const menuAccessRoles = require('./user-management/menu-access-roles');
const userAccessRoles = require('./user-management/user-access-roles');

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

const hospital = require('./hospital-management/hospital');
const department = require('./hospital-management/department');
const doctor = require('./hospital-management/doctor');
const drInDepart = require('./hospital-management/dr-in-depart');
const qualification = require('./hospital-management/qualification');
const specialization = require('./hospital-management/specialization');
const patient = require('./hospital-management/patient');
const patientInDepart = require('./hospital-management/patient-in-depart');
const review = require('./hospital-management/review');
const disease = require('./hospital-management/disease');
const diseaseTreatedByDr = require('./hospital-management/disease-treated-by-dr');
const appointment = require('./hospital-management/appointment');
const patientHistory = require('./hospital-management/patient-history');
const medicineHistory = require('./hospital-management/medicine-history');

const Hospital = hospital.init(dbClient, DataTypes, { User });
const Department = department.init(dbClient, DataTypes, { Hospital });
const Doctor = doctor.init(dbClient, DataTypes, { User });
const DrInDepart = drInDepart.init(dbClient, DataTypes, { Department, Doctor });
const Qualification = qualification.init(dbClient, DataTypes, { Doctor });
const Specialization = specialization.init(dbClient, DataTypes, { Doctor });
const Patient = patient.init(dbClient, DataTypes, { User });
const PatientInDepart = patientInDepart.init(dbClient, DataTypes, {
	Department,
	Patient,
});
const Review = review.init(dbClient, DataTypes, { Patient, Doctor });
const Disease = disease.init(dbClient, DataTypes);
const DiseaseTreatedByDr = diseaseTreatedByDr.init(dbClient, DataTypes, {
	Doctor,
	Disease,
});
const Appointment = appointment.init(dbClient, DataTypes, {
	Patient,
	Doctor,
	Disease,
});
const PatientHistory = patientHistory.init(dbClient, DataTypes, {
	Patient,
	Disease,
});
const MedicineHistory = medicineHistory.init(dbClient, DataTypes, {
	Appointment,
});

db.Hospital = Hospital;
db.Department = Department;
db.Doctor = Doctor;
db.DrInDepart = DrInDepart;
db.Qualification = Qualification;
db.Specialization = Specialization;
db.Patient = Patient;
db.PatientInDepart = PatientInDepart;
db.Review = Review;
db.Disease = Disease;
db.DiseaseTreatedByDr = DiseaseTreatedByDr;
db.Appointment = Appointment;
db.PatientHistory = PatientHistory;
db.MedicineHistory = MedicineHistory;

// Pharmacy Management System

const pharmacy = require('./pharmacy-management/pharmacy');
const unit = require('./pharmacy-management/unit');

const Pharmacy = pharmacy.init(dbClient, DataTypes, { User });
const Unit = unit.init(dbClient, DataTypes);

db.Pharmacy = Pharmacy;
db.Unit = Unit;

module.exports = db;
