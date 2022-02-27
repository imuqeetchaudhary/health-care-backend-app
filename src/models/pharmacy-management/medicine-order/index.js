exports.init = (sequelize, DataTypes, { MedicineUnit, Order }) => {
	const MedicineOrder = sequelize.define(
		'MedicineOrder',
		{
			moId: {
				type: DataTypes.INTEGER.UNSIGNED,
				primaryKey: true,
				autoIncrement: true,
				allowNull: false,
			},
			medicineUnitId: {
				type: DataTypes.INTEGER.UNSIGNED,
				allowNull: false,
			},
			orderId: {
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
		{ underscored: true, tableName: 'medicine_order' }
	);

	MedicineUnit.hasMany(MedicineOrder, { foreignKey: 'medicine_unit_id' });
	MedicineOrder.belongsTo(MedicineUnit, { foreignKey: 'medicine_unit_id' });

	Order.hasMany(MedicineOrder, { foreignKey: 'order_id' });
	MedicineOrder.belongsTo(Order, { foreignKey: 'order_id' });

	return MedicineOrder;
};
