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
  hover:bg-gray-800
`

export const SimpleButton: FunctionComponent<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
> = ({ children, ...props }) => {
  return (
    <StyledSimpleButton>
      <button {...props}></button>
      {children}
    </StyledSimpleButton>
  )
}
