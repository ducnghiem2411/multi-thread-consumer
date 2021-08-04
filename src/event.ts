import { REDIS_PREFIX } from "./config"
import { ioredis } from "./redis"
import { db, collectionNames } from "./mongo"
import { IBlock, IContract, ITransaction } from "./interfaces"
import { CONTRACT_ADDRESSES } from "./index"
import { kafkaProducer } from "./kafka"

let CURRENT_BLOCK = 0
let CURRENT_TRANSACTION = 0
let CURRENT_CONTRACT = 0

const addBlockEvent = async (block: IBlock) => {
	const { blockNumber } = block
	const key = `${REDIS_PREFIX}.block.${blockNumber}`
	const value = 1

	try {
		
	
	} catch (e) {
	}
}

const addTransactionEvent = async (transaction: ITransaction) => {
	
}

const addContractEvent = async (contract: IContract) => {

}


export { addBlockEvent, addTransactionEvent, addContractEvent }