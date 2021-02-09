import React from 'react'

import styled from 'styled-components'

/* eslint-disable-next-line */
export interface SimpleComponentsProps {}

const StyledSimpleComponents = styled.div`
  color: pink;
`

export function SimpleComponents(props: SimpleComponentsProps) {
  return (
    <StyledSimpleComponents>
      <h1>Welcome to simple-components!</h1>
    </StyledSimpleComponents>
  )
}

export default SimpleComponents
