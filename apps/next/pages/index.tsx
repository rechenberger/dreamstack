import { SimpleButton } from '@dreamstack/simple-components'
import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'
import { withTranslation } from '../lib/i18n'

const StyledPage = styled.div`
  margin: 32px auto;
  width: max-content;
`

export function Index({ t }) {
  return (
    <StyledPage>
      <h1 className="text-4xl mb-4">DreamStack</h1>
      <a
        href="https://github.com/rechenberger/dreamstack"
        target="_blank"
        rel="noreferrer"
      >
        <SimpleButton>{t('fork-me')}</SimpleButton>
      </a>
      <Link href="/ships">
        <a>
          <SimpleButton>Ships</SimpleButton>
        </a>
      </Link>
      <SimpleButton onClick={() => console.log('this is test button')}>
        Test Button
      </SimpleButton>
    </StyledPage>
  )
}

export const getInitialProps = async () => ({
  namespacesRequired: ['common'],
})

export default withTranslation('common')(Index)
