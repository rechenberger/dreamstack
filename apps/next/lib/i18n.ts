import NextI18Next from 'next-i18next'
import config from 'next/config'
import path from 'path'
const { localeSubpaths } = config().publicRuntimeConfig

const i18n = new NextI18Next({
  defaultLanguage: 'de',
  otherLanguages: ['en'],
  localeSubpaths,
  localePath: path.resolve('apps/next/public/static/locales'),
  // localeStructure:'',
  saveMissing: true,
  missingKeyHandler: (...keys) => console.warn(`i18n Key not found:`, keys),
})

export const { Link: LinkWithLocale, appWithTranslation } = i18n
