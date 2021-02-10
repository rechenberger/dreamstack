import { useGetShipByIdQuery } from '@dreamstack/graphql'
import { SimpleJson } from '@dreamstack/simple-components'
import React, { FunctionComponent } from 'react'
import { useParams } from '../../components/hooks/useParams'

const ShipDetails: FunctionComponent<{}> = () => {
  const { shipId: id } = useParams()
  const { data } = useGetShipByIdQuery({ variables: { id } })
  return (
    <>
      <h1 className="text-2xl m-6">Ship: {id}</h1>
      <SimpleJson value={data?.ship} />
    </>
  )
}

export default ShipDetails
