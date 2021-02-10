import React, { FunctionComponent } from 'react'
import { useParams } from '../../components/hooks/useParams'

const ShipDetails: FunctionComponent<{}> = () => {
  const { shipId } = useParams()
  return (
    <>
      <div>Ship: {shipId}</div>
    </>
  )
}

export default ShipDetails
