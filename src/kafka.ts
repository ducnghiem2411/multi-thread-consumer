import { EachMessagePayload, Kafka, Consumer } from "kafkajs"
import { KAFKA_DESTINATION, KAFKA_CLUSTER, KAFKA_GROUP_ID, KAFKA_TOPICS } from "./config"
import { Sentry } from "./sentry"
import { addBlockEvent, addContractEvent, addTransactionEvent } from "./event"
import { TronEvent } from "./interfaces"

let CURRENT_CLUSTER_INDEX = 0;

const kafkaInput = new Kafka({
	brokers: [KAFKA_CLUSTER],
	ssl: false,
	sasl: undefined,
	connectionTimeout: 5000,
	requestTimeout: 60000,
})

const kafkaOutput = new Kafka({
	brokers: [KAFKA_DESTINATION],
	ssl: false,
	sasl: undefined,
	connectionTimeout: 5000,
	requestTimeout: 60000,
})

const startKafkaConsumer = async (topic: string, messageResolver: Function) => {
	try {
		const kafkaConsumer = await kafkaInput.consumer({ groupId: KAFKA_GROUP_ID, allowAutoTopicCreation: true })

		console.log(`🚀 - Kafka consumer connected`)

		await kafkaConsumer.run({
			eachMessage: async (payload: EachMessagePayload) => {
				
			},
		});
	} catch (e) {
		console.error(`kafka consumer disconnected`);
		throw e;
	}
};

const destinationKafka = new Kafka({
	brokers: [KAFKA_DESTINATION],
	ssl: false,
	sasl: undefined,
	connectionTimeout: 5000,
	requestTimeout: 60000,
});

const kafkaProducer = destinationKafka.producer({
	allowAutoTopicCreation: true,
});

const startKafkaProducer = async () => {
	await kafkaProducer.connect();
	console.log(`🚀 - Kafka destination connected`);
};

export { startKafkaConsumer, startKafkaProducer, kafkaProducer };
