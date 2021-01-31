import { QueryClient } from 'react-query'

import { persistWithLocalStorage } from 'react-query/persist-localstorage-experimental'

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            cacheTime: 1000 * 60 * 60 * 24 // 24 hours
        }
    }
})

persistWithLocalStorage(queryClient, {
    buster: 'v1'
})
