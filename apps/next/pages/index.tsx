import { SimpleButton } from '@dreamstack/simple-components'
// import Link from 'next/link'
import React from 'react'
import { Trans, useTranslation } from 'react-i18next'
import styled from 'styled-components'
import { Link } from '../lib/i18n'

const StyledPage = styled.div`
  margin: 32px auto;
  width: max-content;
`

export function Index() {
  const { t } = useTranslation(['ships', 'common'])
  return (
    <StyledPage>
      <h1 className="text-4xl mb-4">DreamStack</h1>
      <a
        href="https://github.com/rechenberger/dreamstack"
        target="_blank"
        rel="noreferrer"
      >
        <SimpleButton>{t('fork-me')}</SimpleButton>
        <SimpleButton>
          <Trans>fork-me</Trans>
        </SimpleButton>
      </a>
      <Link href="/ships">
        <a>
          <SimpleButton>{t('ship')}</SimpleButton>
          <SimpleButton>
            <Trans ns="ships">ship</Trans>
          </SimpleButton>
        </a>
      </Link>
      <SimpleButton onClick={() => console.log('this is test button')}>
        Test Button
      </SimpleButton>
    </StyledPage>
  )
}

Index.getInitialProps = async () => ({
  namespacesRequired: ['common', 'ships'],
})

export default Index
