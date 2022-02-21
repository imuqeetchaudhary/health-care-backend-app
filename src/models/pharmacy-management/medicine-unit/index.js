exports.init = (sequelize, DataTypes, { Medicine, Unit }) => {
	const MedicineUnit = sequelize.define(
		'MedicineUnit',
		{
			muId: {
				type: DataTypes.INTEGER.UNSIGNED,
				primaryKey: true,
				autoIncrement: true,
				allowNull: false,
			},
			medicineId: {
				type: DataTypes.INTEGER.UNSIGNED,
				allowNull: false,
			},
			unitId: {
				type: DataTypes.INTEGER.UNSIGNED,
				allowNull: false,
			},
			unitNumber: {
				type: DataTypes.INTEGER.UNSIGNED,
				allowNull: false,
			},
			pricePerUnit: {
				type: DataTypes.INTEGER.UNSIGNED,
				allowNull: false,
			},
			medTotalNumber: {
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
		{ underscored: true, tableName: 'medicine_unit' }
	);

	Medicine.hasOne(MedicineUnit, { foreignKey: 'medicine_id' });
	MedicineUnit.belongsTo(Medicine, { foreignKey: 'medicine_id' });

	Unit.hasMany(MedicineUnit, { foreignKey: 'unit_id' });
	MedicineUnit.belongsTo(Unit, { foreignKey: 'unit_id' });

	return MedicineUnit;
};
