import { useEffect } from 'react'

import { queryClient } from '../queryClient'
import { MenuItem } from '../../lib/graphql-generated'
import { GRAPHQL_CHANNELS } from '../constants'
import Socket from '../socket'

export function useGraphqlSub() {
    useEffect(() => {
        if (typeof window === 'undefined') {
            return
        }
        const socket = new Socket()

        socket.subscribe(Object.values(GRAPHQL_CHANNELS), (data: SubscriptionResponse) => {
            switch (data.channel) {
                case GRAPHQL_CHANNELS.NEW_MENU_ITEM:
                    queryClient.fetchQuery('MenuDocument')
                    break
                case GRAPHQL_CHANNELS.DELETED_MENU_ITEM:
                    queryClient.fetchQuery('MenuDocument')
                    break

                default:
                    break
            }
        })

        return () => socket.unsubscribe()
    }, [])
}

type SubscriptionResponse =
    | {
          channel: GRAPHQL_CHANNELS.NEW_MENU_ITEM
          newMenuItem: MenuItem
      }
    | { channel: GRAPHQL_CHANNELS.DELETED_MENU_ITEM; deleteMenuItem: MenuItem }
