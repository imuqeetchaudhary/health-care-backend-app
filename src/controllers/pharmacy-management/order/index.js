const orderService = require('../../../services/pharmacy-management/order');
const { promise } = require('../../../middlewares/promise');

exports.createOrder = promise(async (req, res) => {
	const { pharmacyId, area, city, country, postalCode, status, isPaid, medicine } =
		req.body;
	const actionPerformedBy = req.user.userId;

	const order = await orderService.saveOrder({
		userId: actionPerformedBy,
		pharmacyId,
		area,
		city,
		country,
		postalCode,
		status,
		isPaid,
		medicine,
		actionPerformedBy,
	});

	res.status(200).json({
		message: 'Successfully created new order',
		order,
	});
});

exports.getAllOrder = promise(async (req, res) => {
	const order = await orderService.listAllOrder();
	res.status(200).json({ order });
});

exports.getAllOrderForPharmacy = promise(async (req, res) => {
	const { pharmacyId } = req.params;
	const order = await orderService.listAllOrderForPharmacy({ pharmacyId });
	res.status(200).json({ order });
});

exports.getAllOrderForUser = promise(async (req, res) => {
	const userId = req.user.userId;
	const order = await orderService.listAllOrderForUser({ userId });
	res.status(200).json({ order });
});

exports.getSingleOrder = promise(async (req, res) => {
	const { id } = req.params;

	const order = await orderService.findById({ id });
	res.status(200).json({ order });
});

exports.deleteOrder = promise(async (req, res) => {
	const { id } = req.params;
	const orderId = id;

	const deleteOrder = await orderService.deleteOrder({
		orderId,
	});
	res.status(200).json({ message: 'Successfully deleted order' });
});
