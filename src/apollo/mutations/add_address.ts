import { v4 as uuidv4 } from 'uuid';
import { updateContractAddress } from '../..';
import { IAddress } from '../../interfaces';
import { collectionNames, db } from '../../mongo';

export async function add_address (root: any, args: any, ctx: any) {
    try {
        const { tagName, address } = args
        // To do: 
        // check is contract address ?
        const existedGroup = await db.collection<IAddress>(collectionNames.contract_addresses).findOne({ tagName, address })
        if (existedGroup) {
            throw new Error('Group is existed')
        }
        const group = await db.collection<IAddress>(collectionNames.contract_addresses).insertOne({ tagName, address })
        await updateContractAddress()
        return group.ops[0]
    } catch (e) {
        throw e
    }
}