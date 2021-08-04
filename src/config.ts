import { config } from "dotenv";

config()

if (!process.env.NODE_ENV) throw new Error(`NODE_ENV must be provided`)
export const NODE_ENV = process.env.NODE_ENV

if (!process.env.PORT) throw new Error('PORT must be provided')
export const PORT = process.env.PORT

if (!process.env.SENTRY_DNS) throw new Error(`SENTRY_DNS must be provided`)
export const SENTRY_DNS = process.env.SENTRY_DNS

if (!process.env.REDIS_HOST) throw new Error(`REDIS_HOST must be provided`)
export const REDIS_HOST = process.env.REDIS_HOST

if (!process.env.REDIS_PASSWORD) throw new Error(`REDIS_PASSWORD must be provided`)
export const REDIS_PASSWORD = process.env.REDIS_PASSWORD

if (!process.env.REDIS_PORT) throw new Error(`REDIS_PORT must be provided`)
export const REDIS_PORT = process.env.REDIS_PORT

if (!process.env.REDIS_PREFIX) throw new Error(`REDIS_PREFIX must be provided`)
export const REDIS_PREFIX = process.env.REDIS_PREFIX

if (!process.env.MONGO_URI) throw new Error('MONGO_URI must be provided')
export const MONGO_URI = process.env.MONGO_URI

if (!process.env.KAFKA_CLUSTER) throw new Error(`KAFKA_CLUSTER must be provided`)
export const KAFKA_CLUSTER = process.env.KAFKA_CLUSTER

if (!process.env.KAFKA_TOPICS) throw new Error(`KAFKA_TOPICS must be provided`)
export const KAFKA_TOPICS: string[] = process.env.KAFKA_TOPICS.split('&')

if (!process.env.KAFKA_GROUP_ID) throw new Error(`KAFKA_GROUP_ID must be provided`)
export const KAFKA_GROUP_ID = process.env.KAFKA_GROUP_ID

if (!process.env.KAFKA_DESTINATION) throw new Error(`KAFKA_DESTINATION must be provided`)
export const KAFKA_DESTINATION = process.env.KAFKA_DESTINATION