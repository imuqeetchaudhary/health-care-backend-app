const yup = require('yup');

exports.createMedicineSchema = yup.object().shape({
	medicineName: yup.string().required(),
	description: yup.string().required(),
});

exports.updateMedicineSchema = yup.object().shape({
	medicineName: yup.string(),
	description: yup.string(),
});
