import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export const getStaticTranslations = (
  locale,
  namespaces: string[],
  options = {}
) => {
  return serverSideTranslations(locale, namespaces, {
    localePath: 'apps/next/public/static/locales',
    ...options,
  })
}
