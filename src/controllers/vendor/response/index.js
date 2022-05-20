const responseService = require('../../../services/vendor/response');
const { promise } = require('../../../middlewares/promise');
const Exceptions = require('../../../utils/custom-exceptions');

exports.createResponse = promise(async (req, res) => {
	const { price, description, status, postId, dueDtae } = req.body;
	const actionPerformedBy = req.user.userId;

	const response = await responseService.saveResponse({
		price,
		description,
		status,
		postId,
		dueDtae,
		actionPerformedBy,
	});

	res.status(200).json({
		message: 'Successfully created new response',
		response,
	});
});

exports.getAllResponse = promise(async (req, res) => {
	const response = await responseService.listAllResponse();
	res.status(200).json({ response });
});

exports.getAllResponseByPostId = promise(async (req, res) => {
	const { id } = req.params;
	const postId = id;

	const response = await responseService.listAllResponseByPostId({
		postId,
	});
	res.status(200).json({ response });
});

exports.getSingleResponse = promise(async (req, res) => {
	const { id } = req.params;

	const response = await responseService.findById({ id });
	res.status(200).json({ response });
});

exports.updateResponse = promise(async (req, res) => {
	const { id } = req.params;
	const responseId = id;
	const { price, description, status, postId, dueDtae } = req.body;
	const actionPerformedBy = req.user.userId;

	const updateResponse = await responseService.updateResponse({
		responseId,
		price,
		description,
		status,
		postId,
		dueDtae,
		actionPerformedBy,
	});
	res.status(200).json({ message: 'Successfully updated response' });
});

exports.deleteResponse = promise(async (req, res) => {
	const { id } = req.params;
	const responseId = id;

	const deleteResponse = await responseService.deleteResponse({
		responseId,
	});
	res.status(200).json({ message: 'Successfully deleted response' });
});
