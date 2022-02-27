const yup = require('yup');

exports.createOrderSchema = yup.object().shape({
	pharmacyId: yup.number().required(),
	area: yup.string().required(),
	city: yup.string().required(),
	country: yup.string().required(),
	postalCode: yup.string().required(),
	status: yup.string().required(),
	isPaid: yup.boolean().required(),
	medicine: yup
		.array()
		.of(
			yup.object().shape({
				muId: yup.number().required(),
				quantity: yup.number().required(),
			})
		)
		.required(),
});

exports.updateOrderSchema = yup.object().shape({
	pharmacyId: yup.number(),
	area: yup.string(),
	city: yup.string(),
	country: yup.string(),
	postalCode: yup.string(),
	status: yup.string(),
	isPaid: yup.boolean(),
	medicine: yup.array().of(
		yup.object().shape({
			muId: yup.number().required(),
			quantity: yup.number().required(),
		})
	),
});
