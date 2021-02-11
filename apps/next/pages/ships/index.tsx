import { GetTopShipsDocument, useGetTopShipsQuery } from '@dreamstack/graphql'
import { SimpleJson } from '@dreamstack/simple-components'
import { LinkWithLocale } from 'apps/next/lib/i18n'
import { map } from 'lodash'
import { GetStaticProps } from 'next'
import React, { FunctionComponent } from 'react'
import { useTranslation } from 'react-i18next'
import { getStaticQueries } from '../../lib/getStaticQueries'

const ShipOverview: FunctionComponent = () => {
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
      {map(data?.ships, (ship) => {
        const url = `/ships/${ship.id}`
        return (
          <LinkWithLocale href={url} key={ship.id}>
            <a>
              <SimpleJson value={ship} />
            </a>
          </LinkWithLocale>
        )
      })}
    </>
  )
}

export const getStaticProps: GetStaticProps = getStaticQueries([
  {
    query: GetTopShipsDocument,
  },
])

ShipOverview.defaultProps = {
  i18nNamespaces: ['ships'],
}

export default ShipOverview
