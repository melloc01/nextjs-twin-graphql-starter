import { GraphQLClient } from 'graphql-request'
import { GRAPHQL_PATH } from '../constants'

export const graphqlClient = new GraphQLClient(`${globalThis?.location?.origin}/${GRAPHQL_PATH}`, {
    headers: {}
})
