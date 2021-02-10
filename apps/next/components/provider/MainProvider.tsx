import { ApolloProvider } from '@apollo/client'
import React, { FunctionComponent } from 'react'
import { useApollo } from '../hooks/useApolloClient'

export const MainProvider: FunctionComponent<{ pageProps: any }> = ({
  children,
  pageProps,
}) => {
  const apolloClient = useApollo(pageProps.initialApolloState)
  return (
    <>
      <ApolloProvider client={apolloClient}>{children}</ApolloProvider>
    </>
  )
}
