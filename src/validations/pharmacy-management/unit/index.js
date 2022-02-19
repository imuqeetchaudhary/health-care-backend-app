const yup = require('yup');

exports.createUnitSchema = yup.object().shape({
	description: yup.string().required(),
});

exports.updateUnitSchema = yup.object().shape({
	description: yup.string(),
});
