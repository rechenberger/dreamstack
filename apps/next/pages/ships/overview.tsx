import { useGetTopShipsQuery } from '@dreamstack/graphql'
import { SimpleJson } from '@dreamstack/simple-components'
import { map } from 'lodash'
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
        const url = `./${ship.id}`
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

export default ShipOverview
