import {
  createApolloClient,
  GetShipByIdDocument,
  GetShipByIdQuery,
  GetShipByIdQueryVariables,
  GetTopShipsDocument,
  GetTopShipsQuery,
  useGetShipByIdQuery,
} from '@dreamstack/graphql'
import { SimpleJson } from '@dreamstack/simple-components'
import { map } from 'lodash'
import { GetStaticPaths, GetStaticProps } from 'next'
import React, { FunctionComponent } from 'react'
import { useParams } from '../../components/hooks/useParams'
import { getStaticPropsWithApollo } from '../../lib/getStaticQueries'

const ShipDetails: FunctionComponent<{ title: string }> = ({ title }) => {
  const { shipId: id } = useParams()
  const { data } = useGetShipByIdQuery({ variables: { id } })
  return (
    <>
      <h1 className="text-2xl m-6">Ship: {id}</h1>
      <h1 className="text-2xl m-6">Title: {title}</h1>
      <SimpleJson value={data?.ship} />
    </>
  )
}

export const getStaticProps: GetStaticProps = getStaticPropsWithApollo(
  async ({ params, apolloClient }) => {
    const { shipId } = params
    await apolloClient.query<GetShipByIdQuery, GetShipByIdQueryVariables>({
      query: GetShipByIdDocument,
      variables: {
        id: shipId as string,
      },
    })

    return {
      props: {
        title: `This is Server Title ${shipId}`,
      },
    }
  }
)

export const getStaticPaths: GetStaticPaths = async () => {
  const client = createApolloClient()
  const { data } = await client.query<GetTopShipsQuery>({
    query: GetTopShipsDocument,
  })
  const paths = map(data?.ships, (ship) => ({
    params: {
      shipId: ship.id,
    },
  }))
  return {
    paths,
    fallback: true,
  }
}

export default ShipDetails
