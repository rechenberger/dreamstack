import { useGetShipByIdQuery } from '@dreamstack/graphql'
import { SimpleJson } from '@dreamstack/simple-components'
import { GetStaticPaths, GetStaticProps } from 'next'
import React, { FunctionComponent } from 'react'
import { useParams } from '../../components/hooks/useParams'

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

export const getStaticProps: GetStaticProps = async ({ params }) => {
  console.log(`THIS IS SERVER rendering ${JSON.stringify(params)}`)
  const { shipId } = params
  return {
    props: {
      shipId,
      title: `Server says: ${shipId}`,
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      {
        params: {
          shipId: 'GOMSTREE',
        },
      },
    ],
    fallback: true,
  }
}

export default ShipDetails
