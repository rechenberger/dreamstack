import { SimpleButton } from '@dreamstack/simple-components'
import Link from 'next/link'
import React from 'react'
import tw from 'tailwind-styled-components'

const StyledPage = tw.div`
  mx-auto
  my-8
  w-max
  flex
  flex-col
  gap-2
`

export function Index() {
  return (
    <StyledPage>
      <h1 className="text-4xl">DreamStack</h1>
      <a
        href="https://github.com/rechenberger/dreamstack"
        target="_blank"
        rel="noreferrer"
      >
        <SimpleButton>Fork me on GitHub</SimpleButton>
      </a>
      <Link href="/ships">
        <a>
          <SimpleButton>Ships Overview</SimpleButton>
        </a>
      </Link>
      <SimpleButton onClick={() => console.log('this is test button')}>
        Test Button
      </SimpleButton>
    </StyledPage>
  )
}

export default Index
