import { SimpleButton } from '@dreamstack/simple-components'
import React from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import { LinkWithLocale } from '../lib/i18n'

const StyledPage = styled.div`
  margin: 32px auto;
  width: max-content;
`

export function Index() {
  const { t } = useTranslation()
  return (
    <StyledPage>
      <h1 className="text-4xl mb-4">{t('app.title')}</h1>
      <a
        href="https://github.com/rechenberger/dreamstack"
        target="_blank"
        rel="noreferrer"
      >
        <SimpleButton>{t('fork-me')}</SimpleButton>
        <SimpleButton>{t('ships:fork-me')}</SimpleButton>
      </a>
      <LinkWithLocale href="/ships">
        <a>
          <SimpleButton>{t('ships:ship_plural')}</SimpleButton>
        </a>
      </LinkWithLocale>
    </StyledPage>
  )
}

Index.defaultProps = {
  i18nNamespaces: ['common', 'ships'],
}

export default Index
