const express = require("express");
const router = express.Router();

router.get("/", (req, res) =>
  res.send({ message: "Health Care Backend App RestApi" })
);

// User Management System

const user = require("../routes/user-management/user");
const role = require("../routes/user-management/role");
const menuCategory = require("../routes/user-management/menu_category");
const menu = require("../routes/user-management/menu");
const menuAccessRoles = require("../routes/user-management/menu-access-roles");
const userAccessRoles = require("../routes/user-management/user-access-roles");

router.use("/user", user);
router.use("/role", role);
router.use("/menu-category", menuCategory);
router.use("/menu", menu);
router.use("/menu-access-roles", menuAccessRoles);
router.use("/user-access-roles", userAccessRoles);

// Hospital Management System

const hospital = require("../routes/hospital-management/hospital");
const department = require("../routes/hospital-management/department");
const doctor = require("../routes/hospital-management/doctor");
const drInDepart = require("../routes/hospital-management/dr-in-depart");
const qualification = require("../routes/hospital-management/qualification");
const specialization = require("../routes/hospital-management/specialization");
const disease = require("../routes/hospital-management/disease");
const diseaseTreatedByDr = require("../routes/hospital-management/disease-treated-by-dr");
const patient = require("../routes/hospital-management/patient");
const review = require("../routes/hospital-management/review");
const patientInDepart = require("../routes/hospital-management/patient-in-depart");
const patientHistory = require("../routes/hospital-management/patient-history");
const appointment = require("../routes/hospital-management/appointment");

router.use("/hospital", hospital);
router.use("/department", department);
router.use("/doctor", doctor);
router.use("/dr-in-depart", drInDepart);
router.use("/qualification", qualification);
router.use("/specialization", specialization);
router.use("/disease", disease);
router.use("/disease-treated-by-dr", diseaseTreatedByDr);
router.use("/patient", patient);
router.use("/review", review);
router.use("/patient-in-depart", patientInDepart);
router.use("/patient-history", patientHistory);
router.use("/appointment", appointment);

module.exports = router;
