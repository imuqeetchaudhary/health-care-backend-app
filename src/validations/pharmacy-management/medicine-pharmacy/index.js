const yup = require('yup');

exports.createMedicinePharmacySchema = yup.object().shape({
	medicineUnitId: yup.number().required(),
	pharmacyId: yup.number().required(),
	quantity: yup.number().required(),
});

exports.updateMedicinePharmacySchema = yup.object().shape({
	pharmacyId: yup.number().required(),
	quantity: yup.number(),
});
