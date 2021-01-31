import { useMutation, useQuery } from 'react-query'
import { queryClient } from '../queryClient'
import {
    CreateMenuItemDocument,
    DeleteMenuItemDocument,
    MenuDocument,
    MenuItem,
    MutationCreateItemArgs,
    MutationDeleteItemArgs,
    MutationUpdateItemArgs,
    UpdateMenuItemDocument
} from '../../lib/graphql-generated'
import { consoleErrorHandler } from '../api/handlers'
import { graphqlClient } from '../graphql/graphqlClient'

export function useMenu(sortField = 'name') {
    return useQuery<MenuItem[], unknown>('MenuDocument', () => {
        return graphqlClient
            .request(MenuDocument)
            .then(d => {
                return d.menu.sort((c, p) => {
                    if (c[sortField] < p[sortField]) return -1

                    return 1
                })
            })
            .catch(consoleErrorHandler)
    })
}

export function useCreateMenuItem() {
    return useMutation<MutationCreateItemArgs, unknown, MutationCreateItemArgs>(args =>
        graphqlClient
            .request(CreateMenuItemDocument, args)
            .catch(consoleErrorHandler)
            .then(() => queryClient.fetchQuery('MenuDocument'))
    )
}
export function useUpdateMenuItem() {
    return useMutation<MutationUpdateItemArgs, unknown, MutationUpdateItemArgs>(args =>
        graphqlClient
            .request(UpdateMenuItemDocument, args)
            .catch(consoleErrorHandler)
            .then(() => queryClient.fetchQuery('MenuDocument'))
    )
}
export function useDeleteMenuItem() {
    return useMutation<MutationDeleteItemArgs, unknown, MutationDeleteItemArgs>(args =>
        graphqlClient
            .request(DeleteMenuItemDocument, args)
            .catch(consoleErrorHandler)
            .then(() => queryClient.fetchQuery('MenuDocument'))
    )
}
