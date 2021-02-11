import NextI18Next from 'next-i18next'
import config from 'next/config'
import path from 'path'
const { localeSubpaths } = config().publicRuntimeConfig

const i18n = new NextI18Next({
  defaultLanguage: 'en',
  otherLanguages: ['de'],
  localeSubpaths,
  localePath: path.resolve('apps/next/public/static/locales'),
  saveMissing: true,
  missingKeyHandler: (...keys) => console.warn(`i18n Key not found:`, keys),
})

export const { Link: LinkWithLocale, appWithTranslation, useTranslation } = i18n
