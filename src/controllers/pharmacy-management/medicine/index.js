const medicineService = require('../../../services/pharmacy-management/medicine');
const { promise } = require('../../../middlewares/promise');

exports.createMedicine = promise(async (req, res) => {
	const { description, medicineName } = req.body;
	const actionPerformedBy = req.user.userId;

	const medicine = await medicineService.saveMedicine({
		description,
		medicineName,
		actionPerformedBy,
	});

	res.status(200).json({
		message: 'Successfully created new medicine',
		medicine,
	});
});

exports.getAllMedicine = promise(async (req, res) => {
	const medicine = await medicineService.listAllMedicine();
	res.status(200).json({ medicine });
});

exports.getSingleMedicine = promise(async (req, res) => {
	const { id } = req.params;

	const medicine = await medicineService.findById({ id });
	res.status(200).json({ medicine });
});

exports.updateMedicine = promise(async (req, res) => {
	const { id } = req.params;
	const { description, medicineName } = req.body;
	const medicineId = id;
	const actionPerformBy = req.user.userId;

	const updatemedicine = await medicineService.updateMedicine({
		medicineId,
		medicineName,
		description,
		actionPerformBy,
	});
	console.log(updatemedicine);
	res.status(200).json({ message: 'Successfully updated medicine' });
});

exports.deleteMedicine = promise(async (req, res) => {
	const { id } = req.params;
	const medicineId = id;

	const deletemedicine = await medicineService.deleteMedicine({
		medicineId,
	});
	res.status(200).json({ message: 'Successfully deleted medicine' });
});
