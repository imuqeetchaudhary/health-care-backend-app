const medicineUnitService = require('../../../services/pharmacy-management/medicine-unit');
const { promise } = require('../../../middlewares/promise');

exports.createMedicineUnit = promise(async (req, res) => {
	const { medicineId, unitId, unitNumber, pricePerUnit, medTotalNumber } = req.body;
	const actionPerformedBy = req.user.userId;

	const medicineUnit = await medicineUnitService.saveMedicineUnit({
		medicineId,
		unitId,
		unitNumber,
		pricePerUnit,
		medTotalNumber,
		actionPerformedBy,
	});

	res.status(200).json({
		message: 'Successfully created new medicineUnit',
		medicineUnit,
	});
});

exports.getAllMedicineUnit = promise(async (req, res) => {
	const medicineUnit = await medicineUnitService.listAllMedicineUnit();
	res.status(200).json({ medicineUnit });
});

exports.getSingleMedicineUnit = promise(async (req, res) => {
	const { medicineId } = req.params;

	const medicineUnit = await medicineUnitService.findByMedicineId({ medicineId });
	res.status(200).json({ medicineUnit });
});

exports.updateMedicineUnit = promise(async (req, res) => {
	const { medicineId } = req.params;
	const { unitId, unitNumber, pricePerUnit, medTotalNumber } = req.body;
	const actionPerformBy = req.user.userId;

	const updatemedicineUnit = await medicineUnitService.updateMedicineUnit({
		medicineId,
		unitId,
		unitNumber,
		pricePerUnit,
		medTotalNumber,
		actionPerformBy,
	});
	console.log(updatemedicineUnit);
	res.status(200).json({ message: 'Successfully updated medicineUnit' });
});

exports.deleteMedicineUnit = promise(async (req, res) => {
	const { medicineId } = req.params;

	const deletemedicineUnit = await medicineUnitService.deleteMedicineUnit({
		medicineId,
	});
	res.status(200).json({ message: 'Successfully deleted medicineUnit' });
});
