import { Kafka } from 'kafkajs';

const kafka = new Kafka({
  clientId: 'user-activity-service',
  brokers: [KAFKA_BROKER],
});

const consumer = kafka.consumer({ groupId: 'user-activity-group' });

const runConsumer = async () => {
  await consumer.connect();
  await consumer.subscribe({ topic: 'user-activity'});

  await consumer.run({
    eachMessage: async ({  message }) => {
      const userActivity = JSON.parse(message.value.toString());
      console.log('Received user activity:', userActivity);
    },
  });
};

runConsumer().catch(console.error);
