import { EachMessagePayload,  } from "kafkajs";

async function blockResolver(messagePayload: EachMessagePayload) {
    try {
        const { topic, message } = messagePayload;
        const value = JSON.parse(message.value?.toString() || "");

        if(topic === 'block') {
            console.log('consuming topic block')
            
        }
        
    } catch (e) {
        console.log(e)
        throw e
    }
}