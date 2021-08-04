import { collectionNames, db } from "../../mongo"
import { ioredis } from '../../redis'

export async function count_by_pattern (root: any, args: any, ctx: any) {
    try {
        const { pattern } = args
        
        const keys = await ioredis.keys(pattern)

        return keys.length
    } catch (e) {
        throw e
    }
}