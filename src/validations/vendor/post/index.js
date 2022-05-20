const yup = require('yup');

exports.createPostSchema = yup.object().shape({
	title: yup.string().required(),
	description: yup.string().required(),
	category: yup.string().required(),
	estimatedPrice: yup.number().required(),
	status: yup.string().required(),
	dueDtae: yup.date().required(),
});

exports.updatePostSchema = yup.object().shape({
	title: yup.string().required(),
	description: yup.string().required(),
	category: yup.string().required(),
	estimatedPrice: yup.number().required(),
	status: yup.string().required(),
	dueDtae: yup.date().required(),
});
