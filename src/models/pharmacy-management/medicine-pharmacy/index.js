exports.init = (sequelize, DataTypes, { MedicineUnit, Pharmacy }) => {
	const MedicinePharmacy = sequelize.define(
		'MedicinePharmacy',
		{
			mpId: {
				type: DataTypes.INTEGER.UNSIGNED,
				primaryKey: true,
				autoIncrement: true,
				allowNull: false,
			},
			medicineUnitId: {
				type: DataTypes.INTEGER.UNSIGNED,
				allowNull: false,
			},
			pharmacyId: {
				type: DataTypes.INTEGER.UNSIGNED,
				allowNull: false,
			},
			quantity: {
				type: DataTypes.INTEGER.UNSIGNED,
				allowNull: false,
			},
			createdBy: {
				type: DataTypes.INTEGER.UNSIGNED,
				allowNull: false,
			},
			updatedBy: {
				type: DataTypes.INTEGER.UNSIGNED,
				allowNull: false,
			},
		},
		{ underscored: true, tableName: 'medicine_pharmacy' }
	);

	MedicineUnit.hasMany(MedicinePharmacy, { foreignKey: 'medicine_unit_id' });
	MedicinePharmacy.belongsTo(MedicineUnit, { foreignKey: 'medicine_unit_id' });

	Pharmacy.hasMany(MedicinePharmacy, { foreignKey: 'pharmacy_id' });
	MedicinePharmacy.belongsTo(Pharmacy, { foreignKey: 'pharmacy_id' });

	return MedicinePharmacy;
};
