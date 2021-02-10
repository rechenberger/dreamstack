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

export const getStaticPropsWithApollo = (callback: StaticQueryCallback) => {
  const getStaticProps: GetStaticProps = async ({ params }) => {
    const apolloClient = initializeApollo()
    const staticProps: GetStaticPropsResult<any> = (await callback({
      params,
      apolloClient,
    })) || { props: {} }

    return {
      ...staticProps,
      props: {
        initialApolloState: apolloClient.cache.extract(),
        ...staticProps.props,
      },
      revalidate: 1,
    }
  }
  return getStaticProps
}
