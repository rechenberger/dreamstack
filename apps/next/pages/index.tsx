import { SimpleButton } from '@dreamstack/simple-components'
import React from 'react'
import styled from 'styled-components'

const StyledPage = styled.div``

export function Index() {
  return (
    <StyledPage>
      <h1>DreamStack</h1>
      <SimpleButton>SimpleButton</SimpleButton>
    </StyledPage>
  )
}

export default Index
