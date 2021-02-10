import { ApolloProvider } from '@dreamstack/graphql'
import React, { FunctionComponent } from 'react'

export const MainProvider: FunctionComponent = ({ children }) => {
  return <ApolloProvider>{children}</ApolloProvider>
}
