import { SimpleButton } from '@dreamstack/simple-components'
import { map } from 'lodash'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { FunctionComponent } from 'react'
import { useTranslation } from 'react-i18next'

export const Language: FunctionComponent = () => {
  const { locale: currentLocale, locales, asPath } = useRouter()
  const { t } = useTranslation()
  return (
    <div>
      <p>
        {t('currentLanguage')}: {currentLocale?.toUpperCase()}
      </p>
      {map(locales, (locale) => {
        return (
          <div key={locale}>
            <Link href={asPath} locale={locale}>
              <a>
                <SimpleButton>
                  {t('changeLanguageTo')}: {locale?.toUpperCase()}
                </SimpleButton>
              </a>
            </Link>
          </div>
        )
      })}
    </div>
  )
}

Language.defaultProps = {
  i18nNamespaces: ['common'],
}
