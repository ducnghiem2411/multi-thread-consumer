import { startKafkaProducer, startKafkaConsumer } from "./kafka";
import { connectIoRedis, ioredis } from "./redis";
import { collectionNames, connectMongoDB, db } from "./mongo";
import { Sentry, initSentry } from "./sentry";
import { initApolloServer } from "./apollo";
import { IAddress } from "./interfaces";


import { isMainThread, Worker, } from 'worker_threads'
import cluster from 'cluster'
import { cpus } from 'os'
import { KAFKA_TOPICS } from "./config";


let CONTRACT_ADDRESSES: Array<string> = []

const start = async () => {
	try {
		for (let i = 0; i < KAFKA_TOPICS.length; i++) {
			const topic = KAFKA_TOPICS[i]
			// await kafkaConsumer.subscribe({ topic, fromBeginning: true })
			console.log(`🚀 - Topic ${topic} subscribed`)
		}
		// console.log('cpus.length: ', cpus().length)
		if (cluster.isMaster) {
			for (let i = 0; i < cpus().length; i++) {
				cluster.fork();
				console.log(`The Worker number: ${i + 1} is alive`);
			}
			cluster.on('exit', (worker) => {
				console.log(`The Worker number: ${worker.id} has died`);
			});
		} else {
			
			// http.createServer((sol, res) => {
			// 	res.end('Hi, we are harnessing the power of clusters :)');
			// }).listen(3000, () => console.log('The server is running on the port:3000'));
			console.log(`The Worker number: ${cluster.worker.id} is running`);
		}
		// const worker = new Worker()
		// await connectMongoDB()
		// await updateContractAddress()
		// await connectIoRedis()
		// // await initSentry()
		// // await initApolloServer()
		
		// await Promise.all([
		// 	startKafkaProducer(),
		// 	startKafkaConsumer()
		// ])
	} catch (e) {
		// Sentry.captureException(e)
		throw e;
	}
};

async function updateContractAddress () {
	try {
		const groups = await db.collection<IAddress>(collectionNames.contract_addresses).find().toArray()
		CONTRACT_ADDRESSES = groups.map(i => i.address)
		console.log('UPDATE CONTRACT_ADDRESSES', CONTRACT_ADDRESSES)
	} catch (e) {
		throw e
	}
}

start()

export { CONTRACT_ADDRESSES, updateContractAddress }
