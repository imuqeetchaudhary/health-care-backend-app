const yup = require('yup');

exports.createPharmacySchema = yup.object().shape({
	pharmacyName: yup.string().required(),
	area: yup.string().required(),
	city: yup.string().required(),
	country: yup.string().required(),
	postalCode: yup.string().required(),
	licenceNumber: yup.string().required(),
	phoneNo: yup.string().required(),
	email: yup.string().required(),
	adminId: yup.number().required(),
});

exports.updatePharmacySchema = yup.object().shape({
	pharmacyName: yup.string(),
	area: yup.string(),
	city: yup.string(),
	country: yup.string(),
	postalCode: yup.string(),
	licenceNumber: yup.string(),
	phoneNo: yup.string(),
	email: yup.string(),
	adminId: yup.number(),
});
