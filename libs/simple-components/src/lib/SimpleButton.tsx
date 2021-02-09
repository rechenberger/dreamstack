import React, { FunctionComponent } from 'react'
import tw from 'tailwind-styled-components'

const StyledSimpleButton = tw.button`
  flex
  items-center
  justify-center
  rounded-md
  bg-black 
  text-white
  p-2
  hover:bg-gray-300
`

export const SimpleButton: FunctionComponent<{}> = ({ children }) => {
  return <StyledSimpleButton>{children}</StyledSimpleButton>
}
