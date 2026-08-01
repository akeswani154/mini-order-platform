const { sendMessage } = require("../kafka/producer");
const Topics = require("../kafka/topic");
const Order = require("../models/order.model");

const createOrder = async (orderData) => {
  const order = await Order.create(orderData);

  await sendMessage(Topics.ORDER_CREATED,order)

  return order;
};

const getOrders = async () => {
    return await Order.find().sort({ createdAt: -1 });
};

module.exports = {
  createOrder,
  getOrders
};