import { collectionNames, db } from "../../mongo"
import { ioredis } from '../../redis'

export async function count_redis_duplicate_keys (root: any, args: any, ctx: any): Promise<String[]> {
    try {
        const allKeys = await ioredis.keys('multi_node_layer.*')
        const result: Array<string> = []
        
        for (let i = 0; i < allKeys.length; i++) {
            const value = await ioredis.get(allKeys[i])
            if(Number(value) >= 2) {
                result.push(allKeys[i])
            }
        }
        
        return result
    } catch (e) {
        throw e
    }
}