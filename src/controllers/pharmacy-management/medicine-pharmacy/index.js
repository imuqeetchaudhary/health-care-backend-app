const medicinePharmacyService = require('../../../services/pharmacy-management/medicine-pharmacy');
const { promise } = require('../../../middlewares/promise');

exports.createMedicinePharmacy = promise(async (req, res) => {
	const { medicineUnitId, pharmacyId, quantity } = req.body;
	const actionPerformedBy = req.user.userId;

	const medicinePharmacy = await medicinePharmacyService.saveMedicinePharmacy({
		medicineUnitId,
		pharmacyId,
		quantity,
		actionPerformedBy,
	});

	res.status(200).json({
		message: 'Successfully created new medicine in pharmacy',
		medicinePharmacy,
	});
});

exports.getAllMedicinePharmacy = promise(async (req, res) => {
	const medicinePharmacy = await medicinePharmacyService.listAllMedicinePharmacy();
	res.status(200).json({ medicinePharmacy });
});

exports.getSingleMedicinePharmacy = promise(async (req, res) => {
	const { medicineUnitId } = req.params;

	const medicinePharmacy = await medicinePharmacyService.findByMedicineUnitId({
		medicineUnitId,
	});
	res.status(200).json({ medicinePharmacy });
});

exports.updateMedicinePharmacy = promise(async (req, res) => {
	const { medicineUnitId } = req.params;
	const { pharmacyId, quantity } = req.body;
	const actionPerformBy = req.user.userId;

	const updateMedicinePharmacy =
		await medicinePharmacyService.updateMedicinePharmacy({
			medicineUnitId,
			pharmacyId,
			quantity,
			actionPerformBy,
		});
	res.status(200).json({ message: 'Successfully updated medicine in pharmacy' });
});

exports.deleteMedicinePharmacy = promise(async (req, res) => {
	const { medicineUnitId } = req.params;

	const deleteMedicinePharmacy =
		await medicinePharmacyService.deleteMedicinePharmacy({
			medicineUnitId,
		});
	res.status(200).json({ message: 'Successfully deleted medicine in pharmacy' });
});
