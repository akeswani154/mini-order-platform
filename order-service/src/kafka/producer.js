const kafka= require("./client");
const producer= kafka.producer();

const connectProducer = async()=> {
    await producer.connect();
   console.log("kafka client connected")
};

const sendMessage = async (topic, message) => {
  await producer.send({
    topic,
    messages: [
      {
        value: JSON.stringify(message),
      },
    ],
  });

  console.log(`📨 Message sent to topic: ${topic}`);
};


module.exports = {
  connectProducer,
  sendMessage,
};