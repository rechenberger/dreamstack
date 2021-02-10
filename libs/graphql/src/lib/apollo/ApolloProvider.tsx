import {
  ApolloClient,
  ApolloProvider as ApolloProviderRaw,
  InMemoryCache,
} from '@apollo/client'
import React, { FunctionComponent } from 'react'
export const createApolloClient = () => {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    // uri: process.env.GRAPHQL_URL,
    uri: 'https://api.spacex.land/graphql',
    cache: new InMemoryCache(),
  })
}

export const ApolloProvider: FunctionComponent = ({ children }) => {
  const client = createApolloClient()
  return <ApolloProviderRaw client={client}>{children}</ApolloProviderRaw>
}
