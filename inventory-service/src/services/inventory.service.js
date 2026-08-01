const Order = require("../models/inventory.model");

const createOrder = async (orderData) => {
  const order = await Order.create(orderData);

  return order;
};

const getOrders = async () => {
    return await Order.find().sort({ createdAt: -1 });
};

module.exports = {
  createOrder,
  getOrders
};