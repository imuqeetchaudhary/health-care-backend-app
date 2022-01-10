const yup = require("yup");

exports.createDrInDepartSchema = yup.object().shape({
  departmentId: yup.number().required(),
  doctorId: yup.number().required(),
});

exports.updateDrInDepartSchema = yup.object().shape({
  departmentId: yup.number(),
  doctorId: yup.number(),
});
