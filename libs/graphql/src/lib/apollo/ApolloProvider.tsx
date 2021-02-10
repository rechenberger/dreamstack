import {
  ApolloClient,
  ApolloProvider as ApolloProviderRaw,
  InMemoryCache,
} from '@apollo/client'
import React, { FunctionComponent } from 'react'
const createApolloClient = () => {
  return new ApolloClient({
    // uri: process.env.GRAPHQL_URL,
    uri: 'https://api.spacex.land/graphql',
    cache: new InMemoryCache(),
  })
}

export const ApolloProvider: FunctionComponent = ({ children }) => {
  const client = createApolloClient()
  return <ApolloProviderRaw client={client}>{children}</ApolloProviderRaw>
}
