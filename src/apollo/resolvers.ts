import { get_contract_addresses } from './queries/get_contract_addresses'
import { count_redis_key } from './queries/count_redis_keys'
import { count_redis_duplicate_keys } from './queries/count_redis_duplicate_keys'
import { count_by_pattern } from './queries/count_by_pattern'

import { add_address } from './mutations/add_address'
import { delete_address } from './mutations/delete_address'
import { delete_redis_keys } from './mutations/delete_redis_keys'

export const resolvers = {
    Query: {
        get_contract_addresses,
        count_redis_key,
        count_redis_duplicate_keys,
        count_by_pattern
    },
    Mutation: {
        add_address,
        delete_address,
        delete_redis_keys
    }
}
