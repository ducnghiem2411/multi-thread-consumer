import { collectionNames, db } from "../../mongo"
import { ioredis } from '../../redis'

export async function count_redis_key (root: any, args: any, ctx: any) {
    try {
        const blockInRedis = await ioredis.keys('multi_node_layer.block*')
        const contractInRedis = await ioredis.keys('multi_node_layer.contract*')
        const txsInRedis = await ioredis.keys('multi_node_layer.transaction*')
        return [blockInRedis.length, contractInRedis.length, txsInRedis.length]
    } catch (e) {
        throw e
    }
}