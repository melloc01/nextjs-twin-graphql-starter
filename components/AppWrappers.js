import { ReactQueryDevtools } from 'react-query/devtools'
import { QueryClientProvider } from 'react-query'
import { queryClient } from '../lib/queryClient'
// import { useGraphqlSub } from '../lib/graphql/useGraphqlSub'

export function AppWrappers({ children }) {
    // useGraphqlSub()

    return (
        <QueryClientProvider client={queryClient}>
            {children}
            <ReactQueryDevtools />
        </QueryClientProvider>
    )
}
