const departmentService = require("../../../services/hospital-management/department");
const { promise } = require("../../../middlewares/promise");
const Exceptions = require("../../../utils/custom-exceptions");

exports.createDepartment = promise(async (req, res) => {
  const {
    departmentName,
    image,
    maxDoctors,
    maxPatients,
    phoneNo,
    email,
    status,
    hospitalId,
  } = req.body;
  const actionPerformedBy = req.user.userId;

  const department = await departmentService.saveDepartment({
    departmentName,
    image,
    maxDoctors,
    maxPatients,
    phoneNo,
    email,
    status,
    hospitalId,
    actionPerformedBy,
  });

  res.status(200).json({
    message: "Successfully created new department",
    department,
  });
});

exports.getAllDepartment = promise(async (req, res) => {
  const department = await departmentService.listAllDepartment();
  res.status(200).json({ department });
});

exports.getSingleDepartment = promise(async (req, res) => {
  const { id } = req.params;

  const department = await departmentService.findById({ id });
  res.status(200).json({ department });
});

exports.updateDepartment = promise(async (req, res) => {
  const { id } = req.params;
  const {
    departmentName,
    image,
    maxDoctors,
    maxPatients,
    phoneNo,
    email,
    status,
    hospitalId,
  } = req.body;
  const departmentId = id;
  const actionPerformBy = req.user.userId;

  const updatedepartment = await departmentService.updateDepartment({
    departmentId,
    departmentName,
    image,
    maxDoctors,
    maxPatients,
    phoneNo,
    email,
    status,
    hospitalId,
    actionPerformBy,
  });
  console.log(updatedepartment);
  res.status(200).json({ message: "Successfully updated department" });
});

exports.deleteDepartment = promise(async (req, res) => {
  const { id } = req.params;
  const departmentId = id;

  const deletedepartment = await departmentService.deleteDepartment({
    departmentId,
  });
  res.status(200).json({ message: "Successfully deleted department" });
});
