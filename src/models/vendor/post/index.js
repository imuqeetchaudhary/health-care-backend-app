exports.init = (sequelize, DataTypes, { User }) => {
	const Post = sequelize.define(
		'Post',
		{
			postId: {
				type: DataTypes.INTEGER.UNSIGNED,
				primaryKey: true,
				autoIncrement: true,
				allowNull: false,
			},
			title: {
				type: DataTypes.STRING(1000),
				allowNull: false,
			},
			description: {
				type: DataTypes.STRING(1000),
				allowNull: false,
			},
			category: {
				type: DataTypes.STRING(50),
				allowNull: false,
			},
			estimatedPrice: {
				type: DataTypes.INTEGER.UNSIGNED,
				allowNull: false,
			},
			status: {
				type: DataTypes.STRING(255),
				allowNull: false,
			},
			dueDtae: {
				type: DataTypes.DATE,
				allowNull: false,
			},
			hospitalAdminId: {
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
		{ underscored: true, tableName: 'post' }
	);

	User.hasMany(Post, { foreignKey: 'hospital_admin_id' });
	Post.belongsTo(User, { foreignKey: 'hospital_admin_id' });

	return Post;
};
