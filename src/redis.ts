import Redis from "ioredis";
import { REDIS_HOST, REDIS_PASSWORD, REDIS_PORT, REDIS_PREFIX } from "./config";
import IORedis from "ioredis";

let ioredis: IORedis.Redis;

const connectIoRedis = () => {
	ioredis = new Redis({
		port: Number(REDIS_PORT),
		host: REDIS_HOST,
		retryStrategy: (times) => {
			const delay = Math.min(times * 50, 2000);
			return delay;
		},
		password: REDIS_PASSWORD
	});
	console.log(`🚀 Ioredis: connected, prefix ${REDIS_PREFIX}`);
	
};

export { connectIoRedis, ioredis };
