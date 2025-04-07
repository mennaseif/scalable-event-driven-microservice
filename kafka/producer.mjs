import { Kafka } from 'kafkajs';

const kafka = new Kafka({
  clientId: 'user-activity-service',
  brokers: [KAFKA_BROKER],
});

const producer = kafka.producer();

const runProducer = async () => {
  await producer.connect();
  await producer.send({
    topic: 'user-activity',
    messages: [{ value: JSON.stringify({ userId: 1, activity: 'login' }) }],
  });
};

runProducer().catch(console.error);
