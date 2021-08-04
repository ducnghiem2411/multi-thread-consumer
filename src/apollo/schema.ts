import { gql } from "apollo-server";

export const typeDefs = gql`

    type Address {
        tagName: String
        address: String
    }

    type Query {
        count_by_pattern(pattern: String!): Int
        get_contract_addresses: [String],
        count_redis_key: [Int],
        count_redis_duplicate_keys: [String]
    }

    type Mutation {
        add_address(address: String!, tagName: String): Address,
        delete_address(address: String!): Address,
        delete_redis_keys(pattern: String!): String
    }

    type Subscription {
        test_sub: String
    }
`;
