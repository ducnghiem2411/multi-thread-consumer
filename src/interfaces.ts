import { ObjectId } from "mongodb";

const block = {
"timeStamp":1626887961000,
"triggerName":"blockTrigger",
"blockNumber":17924932,
"blockHash":"000000000111834415f8ef62981126da6a34d15d712ed6cf7b81342ba069a08b",
"transactionSize":0,
"latestSolidifiedBlockNumber":17924914,
"transactionList":[]
}

const contractevent = {"timeStamp":1626888105000,"triggerName":"contractEventTrigger","uniqueId":"533a57d3238e7648057d14ef6e1f73bd3d6a2444417c35fd6b2e30f22a97eeeb_2","transactionId":"533a57d3238e7648057d14ef6e1f73bd3d6a2444417c35fd6b2e30f22a97eeeb","contractAddress":"TB4muJ2BJP7mXqdNaAx3S65TvZM3pq3VaJ","callerAddress":"","originAddress":"TQFFRFmhyPt3XdrnsgzqFvvquSe6Fu5kAa","creatorAddress":"TR64JvB3mfRQmPrkchXqrZjQ8AwxyEXWE3","blockNumber":17924978,"removed":false,"latestSolidifiedBlockNumber":17924959,"logInfo":null,"rawData":{"address":"0c05ab6d59a0403074a4b2b0247ba1cea6d7e7b9","topics":["f0b9ba8d680e4c031c972ee6f0f465286cd054c7e12ca49616794dab1a6d0d69","0000000000000000000000000000000000000000000000000000000000000018","0000000000000000000000000000000000000000000000000000000000000001","0000000000000000000000000000000000000000000000000000000002faf080"],"data":"0000000000000000000000000000000000000000000000000000000060f857a9"},"abi":null,"eventSignature":"SendCommission(uint256,uint256,uint256,uint256)","eventSignatureFull":"SendCommission(uint256 fromadd,uint256 sendTo,uint256 amount,uint256 timestamp)","eventName":"SendCommission","topicMap":{"0":"24","1":"1","amount":"50000000","2":"50000000","sendTo":"1","fromadd":"24"},"dataMap":{"3":"1626888105","timestamp":"1626888105"}}

const event = {"timeStamp":1626888297000,"triggerName":"transactionTrigger","transactionId":"d51101d58a80a36fad4588bac295c277b0360904ce8584e5a90184536f6af38c","blockHash":"00000000011183b2a9855e6bdb4e3d49a4ab6d3c2f163414c354e75ecd688381","blockNumber":17925042,"energyUsage":0,"energyFee":65524900,"originEnergyUsage":0,"energyUsageTotal":468035,"netUsage":350,"netFee":0,"result":"SUCCESS","contractAddress":"TB4muJ2BJP7mXqdNaAx3S65TvZM3pq3VaJ","contractType":"TriggerSmartContract","feeLimit":100000000,"contractCallValue":200000000,"contractResult":"00000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000000","fromAddress":null,"toAddress":null,"assetName":null,"assetAmount":0,"latestSolidifiedBlockNumber":17925024,"internalTransactionList":[{"hash":"7a8f388e6711271fa371d7809d972fb3fbe1c3661c31e33a2b0018fdb160afaf","callValue":50000000,"tokenInfo":{},"transferTo_address":"41a5d58aee13055894d98d1c83e804f38f988c695d","data":"","caller_address":"410c05ab6d59a0403074a4b2b0247ba1cea6d7e7b9","rejected":false,"note":"call"},{"hash":"896d3cc03903efaec604d577714e2b121a54425c18733350f8174b36ed9d4fcf","callValue":150000000,"tokenInfo":{},"transferTo_address":"418fdd5958bd7945db72fd11e9c379c4e1ccf3b94f","data":"","caller_address":"410c05ab6d59a0403074a4b2b0247ba1cea6d7e7b9","rejected":false,"note":"call"}],"data":""}

export interface IBlock {
	blockNumber: number;
}

export interface ITransaction {
	blockNumber: number
	transactionId: string;
}

export interface IContract {
	uniqueId: string
	blockNumber: number
	contractAddress: string;
}

export interface IAddress {
	_id?: ObjectId
	tagName?: string
	address: string
}

export enum TronEvent {
	Block = "block",
	Transaction = "transaction",
	Contract = "contractevent",
}
