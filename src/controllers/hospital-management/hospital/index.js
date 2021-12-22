const hospitalService = require("../../../services/hospital-management/hospital");
const { promise } = require("../../../middlewares/promise");
const Exceptions = require("../../../utils/custom-exceptions");

exports.createHospital = promise(async (req, res) => {
  const {
    hospitalName,
    openingHours,
    image,
    maxDoctors,
    maxPatients,
    maxDepartments,
    city,
    country,
    area,
    postalCode,
    phoneNo,
    email,
    status,
  } = req.body;
  const actionPerformedBy = req.user.userId;

  const hospital = await hospitalService.saveHospital({
    hospitalName,
    openingHours,
    image,
    maxDoctors,
    maxPatients,
    maxDepartments,
    city,
    country,
    area,
    postalCode,
    phoneNo,
    email,
    status,
    actionPerformedBy,
  });

  res.status(200).json({
    message: "Successfully created new hospital",
    hospital,
  });
});

exports.getAllHospitals = promise(async (req, res) => {
  const hospital = await hospitalService.listAllHospitals();
  res.status(200).json({ hospital });
});

exports.getSingleHospital = promise(async (req, res) => {
  const { id } = req.params;

  const hospital = await hospitalService.findById({ id });
  res.status(200).json({ hospital });
});

exports.deleteHospital = promise(async (req, res) => {
  const { id } = req.params;
  const hospitalId = id;

  const deletehospital = await hospitalService.deleteHospital({
    hospitalId,
  });
  res.status(200).json({ message: "Successfully deleted hospital" });
});
