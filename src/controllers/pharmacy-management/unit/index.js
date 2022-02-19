const unitService = require('../../../services/pharmacy-management/unit');
const { promise } = require('../../../middlewares/promise');

exports.createUnit = promise(async (req, res) => {
	const { description } = req.body;
	const actionPerformedBy = req.user.userId;

	const unit = await unitService.saveUnit({
		description,
		actionPerformedBy,
	});

	res.status(200).json({
		message: 'Successfully created new unit',
		unit,
	});
});

exports.getAllUnit = promise(async (req, res) => {
	const unit = await unitService.listAllUnit();
	res.status(200).json({ unit });
});

exports.getSingleUnit = promise(async (req, res) => {
	const { id } = req.params;

	const unit = await unitService.findById({ id });
	res.status(200).json({ unit });
});

exports.updateUnit = promise(async (req, res) => {
	const { id } = req.params;
	const { description } = req.body;
	const unitId = id;
	const actionPerformBy = req.user.userId;

	const updateunit = await unitService.updateUnit({
		unitId,
		description,
		actionPerformBy,
	});
	console.log(updateunit);
	res.status(200).json({ message: 'Successfully updated unit' });
});

exports.deleteUnit = promise(async (req, res) => {
	const { id } = req.params;
	const unitId = id;

	const deleteunit = await unitService.deleteUnit({
		unitId,
	});
	res.status(200).json({ message: 'Successfully deleted unit' });
});
