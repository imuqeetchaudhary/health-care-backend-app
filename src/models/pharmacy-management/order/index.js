exports.init = (sequelize, DataTypes, { User, Pharmacy }) => {
	const Order = sequelize.define(
		'Order',
		{
			orderId: {
				type: DataTypes.INTEGER.UNSIGNED,
				primaryKey: true,
				autoIncrement: true,
				allowNull: false,
			},
			userId: {
				type: DataTypes.INTEGER.UNSIGNED,
				allowNull: false,
			},
			pharmacyId: {
				type: DataTypes.INTEGER.UNSIGNED,
				allowNull: false,
			},
			area: {
				type: DataTypes.STRING(255),
				allowNull: false,
			},
			city: {
				type: DataTypes.STRING(55),
				allowNull: false,
			},
			country: {
				type: DataTypes.STRING(55),
				allowNull: false,
			},
			postalCode: {
				type: DataTypes.STRING(55),
				allowNull: false,
			},
			status: {
				type: DataTypes.STRING(255),
				allowNull: false,
			},
			isPaid: {
				type: DataTypes.BOOLEAN,
				allowNull: false,
				defaultValue: false,
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
		{ underscored: true, tableName: 'order' }
	);

	User.hasMany(Order, { foreignKey: 'user_id' });
	Order.belongsTo(User, { foreignKey: 'user_id' });

	Pharmacy.hasMany(Order, { foreignKey: 'pharmacy_id' });
	Order.belongsTo(Pharmacy, { foreignKey: 'pharmacy_id' });

	return Order;
};
