import { GetTopShipsDocument, useGetTopShipsQuery } from '@dreamstack/graphql'
import { SimpleJson } from '@dreamstack/simple-components'
import { map } from 'lodash'
import { GetStaticProps } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Link from 'next/link'
import React, { FunctionComponent } from 'react'
import { getStaticPropsWithApollo } from '../../lib/getStaticQueries'

const ShipOverview: FunctionComponent<{ now: string }> = ({ now }) => {
  console.log('rendering ships overview')
  const { data, loading } = useGetTopShipsQuery()
  const { t } = useTranslation('ships')
  if (loading) {
    return <>Loading...</>
  }
  return (
    <>
      <h1 className="m-6 text-2xl">
        {t('shipWithCount', { count: data?.ships?.length || 0 })}
      </h1>
      <h2 className="m-6 text-xl">rendered at: {now}</h2>
      {map(data?.ships, (ship) => {
        const url = `/ships/${ship.id}`
        return (
          <Link href={url} key={ship.id}>
            <a>
              <SimpleJson value={ship} />
            </a>
          </Link>
        )
      })}
    </>
  )
}

export const getStaticProps: GetStaticProps = getStaticPropsWithApollo(
  async ({ apolloClient, locale }) => {
    await apolloClient.query({
      query: GetTopShipsDocument,
    })

    return {
      props: {
        // TODO: refactor
        ...(await serverSideTranslations(locale, ['ships', 'common'], {
          localePath: 'apps/next/public/static/locales',
        })),
        now: new Date().toISOString(),
      },
    }
  }
)

export default ShipOverview
