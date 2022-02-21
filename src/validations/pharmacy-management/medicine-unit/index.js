const yup = require('yup');

exports.createMedicineUnitSchema = yup.object().shape({
	medicineId: yup.number().required(),
	unitId: yup.number().required(),
	unitNumber: yup.number().required(),
	pricePerUnit: yup.number().required(),
	medTotalNumber: yup.number().required(),
});

exports.updateMedicineUnitSchema = yup.object().shape({
	medicineId: yup.number(),
	unitId: yup.number(),
	unitNumber: yup.number(),
	pricePerUnit: yup.number(),
	medTotalNumber: yup.number(),
});
