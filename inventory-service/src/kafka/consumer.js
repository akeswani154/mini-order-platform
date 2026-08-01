const kafka = require("./client");

const consumer = kafka.consumer({
  groupId: "inventory-group",
});

const startConsumer = async () => {
  await consumer.connect();

  await consumer.subscribe({
    topic: "order-created",
    fromBeginning: true,
  });

  console.log("✅ Inventory Consumer Connected");

  await consumer.run({
    eachMessage: async ({ message }) => {
      const order = JSON.parse(message.value.toString());

      console.log("📦 Inventory Received:", order);
    },
  });
};

module.exports = startConsumer;