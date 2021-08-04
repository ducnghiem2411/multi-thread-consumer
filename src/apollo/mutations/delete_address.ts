import { updateContractAddress } from '../..';
import { IAddress } from '../../interfaces';
import { collectionNames, db } from '../../mongo';

export async function delete_address (root: any, args: any, ctx: any) {
    try {
        const { name, address } = args

        // To do:
        // check is contract address ?
        const { result, deletedCount } = await db.collection<IAddress>(collectionNames.contract_addresses).deleteOne({ address })
        if (!deletedCount) {
            throw new Error(`Address not found`)
        }
        await updateContractAddress()
        return { name, address }
    } catch (e) {
        throw e
    }
}