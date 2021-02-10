import { ApolloClient } from '@apollo/client'
import { GetStaticProps, GetStaticPropsResult } from 'next'
import { ParsedUrlQuery } from 'querystring'
import { initializeApollo } from '../components/hooks/useApolloClient'

type StaticQueryCallback = ({
  params,
  apolloClient,
}: {
  params: ParsedUrlQuery
  apolloClient: ApolloClient<any>
}) => Promise<GetStaticPropsResult<any> | void>

export const getStaticQueries = (callback: StaticQueryCallback) => {
  const getStaticProps: GetStaticProps = async ({ params }) => {
    const apolloClient = initializeApollo()

    const staticProps: any =
      (await callback({
        params,
        apolloClient,
      })) || {}

    return {
      // TODO: check if `revalidate: 1` is necessary
      revalidate: 1,
      ...staticProps,
      props: {
        initialApolloState: apolloClient.cache.extract(),
        ...staticProps?.props,
      },
    }
  }
  return getStaticProps
}
