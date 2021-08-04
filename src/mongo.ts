import { connect, Db, IndexSpecification, MongoClient } from "mongodb";
import { MONGO_URI } from "./config";

let client: MongoClient;
let db: Db;

const collectionNames = {
	blocks: "blocks",
	transactions: "transactions",
	contracts: "contracts",
	contract_addresses: "contract_addresses"
};

const BlockIndexes: IndexSpecification[] = [
	{ key: { blockNumber: 1 }, unique: true },
];

const TransactionIndexes: IndexSpecification[] = [
	{ key: { transactionId: 1 }, unique: true },
];

const ContractIndexes: IndexSpecification[] = [
	{ key: { uniqueId: 1 }, unique: true },
];

const ContractAddressIndexes: IndexSpecification[] = [
	{ key: { address: 1 }, unique: true },
]

const connectMongoDB = async () => {
	console.log(MONGO_URI);
	try {
		client = await connect(MONGO_URI, {
			useUnifiedTopology: true,
			useNewUrlParser: true,
			ignoreUndefined: true,
		});

		client.on("error", async (e) => {
			try {
				await client.close();
				await connectMongoDB();
			} catch (e) {
				setTimeout(connectMongoDB, 1000);
				throw e;
			}
		});

		client.on("timeout", async () => {
			try {
				await client.close();
				await connectMongoDB();
			} catch (e) {
				setTimeout(connectMongoDB, 1000);
				throw e;
			}
		});

		client.on("close", async () => {
			try {
				await connectMongoDB();
			} catch (e) {
				throw e;
			}
		});

		db = client.db("multi-node-filter");

		// await Promise.all([
		// 	db.collection(collectionNames.blocks).createIndexes(BlockIndexes),
		// 	db
		// 		.collection(collectionNames.transactions)
		// 		.createIndexes(TransactionIndexes),
		// 	db
		// 		.collection(collectionNames.contracts)
		// 		.createIndexes(ContractIndexes),
		// 	db
		// 		.collection(collectionNames.contract_addresses)
		// 		.createIndexes(ContractAddressIndexes),
		// ]);

		console.log(`Mongodb: connected`);
	} catch (e) {
		console.error(`Mongodb: disconnected`);
		await client?.close(true);
		setTimeout(connectMongoDB, 1000);
		throw e;
	}
};

export { client, db, connectMongoDB, collectionNames };
