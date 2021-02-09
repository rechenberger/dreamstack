import React, { FunctionComponent } from 'react'
import styled from 'styled-components'

const StyledSimpleButton = styled.button`
  color: pink;
`

export const SimpleButton: FunctionComponent<{}> = ({ children }) => {
  return <StyledSimpleButton>{children}</StyledSimpleButton>
}
