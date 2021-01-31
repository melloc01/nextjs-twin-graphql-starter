import { AuthenticationError } from 'apollo-server-micro'
import { MutationCreateItemArgs, MutationDeleteItemArgs } from '../../../lib/graphql-generated'
import { GRAPHQL_CHANNELS, SERVER_MESSAGES } from '../../constants'
import { MenuRepository } from '../../db/MenuRepository'
import { authenticationGate } from '../../session'
import Socket from '../../socket'
const socket = new Socket()

const GlobalMutations = {
    async createItem(parent, args: MutationCreateItemArgs) {
        const menuItem = await MenuRepository.createMenuItem(args)

        if (menuItem.id) {
            socket.publish(GRAPHQL_CHANNELS.NEW_MENU_ITEM, menuItem)
        }

        return menuItem
    },
    async updateItem(parent, args: MutationCreateItemArgs, context) {
        const { req, res } = context

        if (!authenticationGate(req, res)) {
            throw new AuthenticationError(SERVER_MESSAGES.NOT_LOGGED)
        }

        const menuItem = await MenuRepository.updateMenuItem(args)

        if (menuItem.id) {
            socket.publish(GRAPHQL_CHANNELS.NEW_MENU_ITEM, menuItem)
        }

        return menuItem
    },
    async deleteItem(parent, args: MutationDeleteItemArgs, context) {
        const { req, res } = context

        if (!authenticationGate(req, res)) {
            throw new AuthenticationError(SERVER_MESSAGES.NOT_LOGGED)
        }

        const menuItem = await MenuRepository.deleteMenuItem(args)

        if (menuItem.id) {
            socket.publish(GRAPHQL_CHANNELS.NEW_MENU_ITEM, menuItem)
        }

        return menuItem
    }
}

export const resolvers = {
    Query: {
        async menu() {
            return MenuRepository.getMenu()
        }
    },
    Mutation: GlobalMutations
}
