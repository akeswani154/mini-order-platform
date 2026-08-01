const orderService = require("../services/inventory.service");

const createOrder = async (req, res) => {
  const order = await orderService.createOrder(req.body);

  res.status(201).json({
    success: true,
    data: order,
  });
};
const getOrders = async (req, res) => {
    const orders = await orderService.getOrders();

    res.status(200).json({
        success: true,
        data: orders,
    });
};

module.exports = {
  createOrder,
  getOrders
};