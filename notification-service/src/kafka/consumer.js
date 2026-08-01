const kafka = require("./client");
const TOPICS = require("./topic");

const consumer = kafka.consumer({
  groupId: "notification-group",
});

const connectConsumer = async () => {
  await consumer.connect();

  console.log("✅ Notification Consumer Connected");

  await consumer.subscribe({
    topic: TOPICS.ORDER_CREATED,
    fromBeginning: true,
  });

  console.log("✅ Subscribed to order-created");

  await consumer.run({
    eachMessage: async ({ message }) => {
      const order = JSON.parse(message.value.toString());

      console.log("\n==============================");
      console.log(`📧 Sending email for Order: ${order._id}`);
      console.log(`Product: ${order.productName}`);
      console.log(`Quantity: ${order.quantity}`);
      console.log("✅ Email Sent Successfully");
      console.log("==============================\n");
    },
  });
};

module.exports = {
  connectConsumer,
};