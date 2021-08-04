import { collectionNames, db } from "../../mongo"
import { ioredis } from '../../redis'

export async function delete_redis_keys (root: any, args: any, ctx: any) {
    try {
        const { pattern } = args
        
        const keysToDel = await ioredis.keys(pattern)

        if(!keysToDel.length) throw new Error('Keys not found')
        
        for (let i = 0; i < keysToDel.length; i++) {
            const pp = await ioredis.del(keysToDel[i])
            console.log(`delete ${pp} ${keysToDel[i]}`)  
        }
        return `Deleted ${keysToDel.length} keys`
    } catch (e) {
        throw e
    }
}