import { useGetTopShipsQuery } from '@dreamstack/graphql'
import { SimpleJson } from '@dreamstack/simple-components'
import { map } from 'lodash'
import React, { FunctionComponent } from 'react'

const ShipOverview: FunctionComponent = () => {
  const { data, loading } = useGetTopShipsQuery()
  if (loading) {
    return <>Loading...</>
  }
  return (
    <>
      {map(data?.ships, (ship) => {
        return <SimpleJson value={ship} />
      })}
    </>
  )
}

export default ShipOverview
