import { GetTopShipsDocument, useGetTopShipsQuery } from '@dreamstack/graphql'
import { SimpleJson } from '@dreamstack/simple-components'
import { getStaticQueries } from 'apps/next/lib/getStaticQueries'
import { map } from 'lodash'
import { GetStaticProps } from 'next'
import Link from 'next/link'
import React, { FunctionComponent } from 'react'

const ShipOverview: FunctionComponent = () => {
  const { data, loading } = useGetTopShipsQuery()
  if (loading) {
    return <>Loading...</>
  }
  return (
    <>
      {map(data?.ships, (ship) => {
        const url = `ships/${ship.id}`
        return (
          <Link href={url} key={ship.id}>
            <a>
              <SimpleJson value={ship} />
            </a>
          </Link>
        )
      })}
    </>
  )
}

export const getStaticProps: GetStaticProps = getStaticQueries([
  {
    query: GetTopShipsDocument,
  },
])

export default ShipOverview
