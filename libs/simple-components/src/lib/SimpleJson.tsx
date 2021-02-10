import React, { FunctionComponent } from 'react'
import tw from 'tailwind-styled-components'

const Block = tw.pre`border bg-gray-200 m-2 rounded p-2 text-xs`

export const SimpleJson: FunctionComponent<{ value: any }> = ({ value }) => {
  return <Block>{JSON.stringify(value, null, 2)}</Block>
}
