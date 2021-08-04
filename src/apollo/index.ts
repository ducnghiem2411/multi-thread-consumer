import { ApolloServer } from "apollo-server";
import { PORT } from "../config";
import { resolvers } from "./resolvers";
import { typeDefs } from "./schema";

export async function initApolloServer() {
	try {
		const server = new ApolloServer({
			typeDefs,
			resolvers,
            context: (req) => ({
                ...req,
            })
		});

		const { url } = await server.listen({ port: PORT })

		console.log(`🚀 Multi-node layer ready at ${url}`)
	} catch (e) {
        throw e
    }
}
