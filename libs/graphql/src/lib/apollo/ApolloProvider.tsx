import { ApolloClient, InMemoryCache } from '@apollo/client'

export const createApolloClient = () => {
  const uri = process.env.NEXT_PUBLIC_GRAPHQL_API
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    uri,
    // uri: 'https://api.spacex.land/graphql',
    cache: new InMemoryCache(),
  })
}

// export const ApolloProvider: FunctionComponent = ({ children }) => {
//   const client = createApolloClient()
//   return <ApolloProviderRaw client={client}>{children}</ApolloProviderRaw>
// }
