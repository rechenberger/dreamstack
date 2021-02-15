// eslint-disable-next-line @typescript-eslint/no-var-requires
// import { nextI18NextRewrites } from 'next-i18next/rewrites'
const { nextI18NextRewrites } = require('next-i18next/rewrites')
const withNx = require('@nrwl/next/plugins/with-nx')

const localeSubpaths = {
  //de: 'de',
  en: 'en',
}

module.exports = withNx({
  i18n: {
    locales: ['de', 'en'],
    defaultLocale: 'de',
  },
  rewrites: async () => nextI18NextRewrites(localeSubpaths),
  publicRuntimeConfig: {
    localeSubpaths,
  },
})
