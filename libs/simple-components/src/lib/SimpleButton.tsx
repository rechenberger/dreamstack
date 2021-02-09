import React, { FunctionComponent } from 'react'
import styled from 'styled-components'

const StyledSimpleButton = styled.button.attrs({
  className: 'border border-gray-500 p-4',
})`
  color: pink;
`

export const SimpleButton: FunctionComponent<{}> = ({ children }) => {
  return <StyledSimpleButton>{children}</StyledSimpleButton>
}
