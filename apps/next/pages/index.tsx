import { SimpleButton } from '@dreamstack/simple-components'
import React from 'react'
import styled from 'styled-components'

const StyledPage = styled.div`
  margin: 32px auto;
  width: max-content;
`

export function Index() {
  return (
    <StyledPage>
      <h1 className="text-4xl mb-4">DreamStack</h1>
      <a
        href="https://github.com/rechenberger/dreamstack"
        target="_blank"
        rel="noreferrer"
      >
        <SimpleButton>Fork me on GitHub</SimpleButton>
      </a>
    </StyledPage>
  )
}

export default Index
