import { SimpleButton } from '@dreamstack/simple-components'
import { GetStaticProps } from 'next'
import Link from 'next/link'
import React from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import { getStaticPropsWithApollo } from '../lib/getStaticQueries'
import { getStaticTranslations } from '../lib/getStaticTranslations'

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
      <Link href="/ships">
        <a>
          <SimpleButton>{t('ships:ship_plural')}</SimpleButton>
        </a>
      </Link>
    </StyledPage>
  )
}

export const getStaticProps: GetStaticProps = getStaticPropsWithApollo(
  async ({ locale }) => {
    return {
      props: {
        ...(await getStaticTranslations(locale, ['ships', 'common'])),
      },
    }
  }
)

export default Index
