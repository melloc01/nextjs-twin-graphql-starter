import { ApolloServer, gql } from 'apollo-server-micro'
import { resolvers } from '../../lib/graphql/resolvers/resolvers'
import { withSession } from '../../lib/session'

const typeDefs = gql`
    type MenuItem {
        id: ID!
        name: String!
        category: String!
        price: Float!
        description: String!
        hot: Boolean
        special: Boolean
    }

    fragment MenuAttrs on MenuItem {
        id
        name
        category
        price
        description
        hot
        special
    }

    type Query {
        menu: [MenuItem]!
    }

    type Mutation {
        createItem(
            name: String!
            category: String!
            price: Float!
            description: String!
            hot: Boolean
            special: Boolean
        ): MenuItem

        updateItem(
            id: ID!
            name: String
            category: String
            price: Float
            description: String
            hot: Boolean
            special: Boolean
        ): MenuItem
        deleteItem(id: ID!): MenuItem
    }
`

export const config = {
    api: {
        bodyParser: false
    }
}

const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    context: context => context
})

const handler = withSession(apolloServer.createHandler({ path: '/api/graphql' }))

export default handler
