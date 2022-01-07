const yup = require("yup");

exports.createDepartmentSchema = yup.object().shape({
  departmentName: yup.string().required(),
  maxDoctors: yup.number().required(),
  maxPatients: yup.number().required(),
  phoneNo: yup.string().required(),
  email: yup.string().required(),
  status: yup.string().required(),
  hospitalId: yup.number().required(),
});

exports.updateDepartmentSchema = yup.object().shape({
  departmentName: yup.string(),
  maxDoctors: yup.number(),
  maxPatients: yup.number(),
  phoneNo: yup.string(),
  email: yup.string(),
  status: yup.string(),
  hospitalId: yup.number(),
});
