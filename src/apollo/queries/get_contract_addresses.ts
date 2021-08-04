import { CONTRACT_ADDRESSES } from "../.."

export async function get_contract_addresses (root: any, args: any, ctx: any) {
    try {
        return CONTRACT_ADDRESSES
    } catch (e) {
        throw e
    }
}
