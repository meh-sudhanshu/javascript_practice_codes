const { Kafka } = require("kafkajs");

exports.kafka = new Kafka({
  clientId: "my-app",
  brokers: ["192.168.57.143:9092"],
//   logLevel: require("kafkajs").logLevel.DEBUG,
//   logCreator: require("kafkajs").defaultLogCreator,
});
