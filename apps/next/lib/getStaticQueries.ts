import { ApolloClient, QueryOptions } from '@apollo/client'
import { map } from 'lodash'
import { GetStaticProps, GetStaticPropsResult } from 'next'
import { ParsedUrlQuery } from 'querystring'
import { initializeApollo } from '../components/hooks/useApolloClient'

type GetStaticPropsWithApolloCallback = ({
  params,
  apolloClient,
}: {
  params: ParsedUrlQuery
  apolloClient: ApolloClient<any>
}) => Promise<GetStaticPropsResult<any> | void>

export const getStaticPropsWithApollo = (
  callback: GetStaticPropsWithApolloCallback
) => {
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

type GetStaticQueriesByParamsCallback = ({
  params,
}: {
  params: ParsedUrlQuery
}) => QueryOptions[]

export const getStaticQueriesByParams = (
  callback: GetStaticQueriesByParamsCallback
) =>
  getStaticPropsWithApollo(async ({ params, apolloClient }) => {
    const queries = callback({ params })
    await Promise.all(
      map(queries, async (query) => {
        await apolloClient.query(query)
      })
    )
  })

export const getStaticQueries = (queries: QueryOptions[]) =>
  getStaticQueriesByParams(() => queries)
