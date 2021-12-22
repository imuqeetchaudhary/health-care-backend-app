const yup = require("yup");

exports.createHospitalSchema = yup.object().shape({
  hospitalName: yup.string().required(),
  openingHours: yup.string().required(),
  image: yup.string(),
  maxDoctors: yup.number().required(),
  maxPatients: yup.number().required(),
  maxDepartments: yup.number().required(),
  city: yup.string().required(),
  country: yup.string().required(),
  area: yup.string().required(),
  postalCode: yup.string().required(),
  phoneNo: yup.string().required(),
  email: yup.string().required(),
  status: yup.string().required(),
});
