const yup = require('yup');

exports.createResponseSchema = yup.object().shape({
	price: yup.number().required(),
	description: yup.string().required(),
	status: yup.string().required(),
	postId: yup.number().required(),
	dueDtae: yup.date().required(),
});

exports.updateResponseSchema = yup.object().shape({
	price: yup.number(),
	description: yup.string(),
	status: yup.string(),
	postId: yup.number(),
	dueDtae: yup.date(),
});
