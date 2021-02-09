import React, { FunctionComponent } from 'react'
import tw from 'tailwind-styled-components'

const StyledSimpleButton = tw.button`
  border
  border-gray-500
  p-4
`

export const SimpleButton: FunctionComponent<{}> = ({ children }) => {
  return <StyledSimpleButton>{children}</StyledSimpleButton>
}
