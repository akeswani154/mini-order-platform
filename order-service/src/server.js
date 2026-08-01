require("dotenv").config();
const { connectProducer } = require("./kafka/producer");


const app = require("./app");
const connectDB = require("./config/db");

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await connectDB();

    // Connect Kafka Producer
    await connectProducer();


    app.listen(PORT, () => {
      console.log(`🚀 Order Service running on port ${PORT}`);
    });
  } catch (error) {
    console.error(error);
  }
};

startServer();