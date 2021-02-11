import NextI18Next, { AppWithTranslation, Link } from 'next-i18next'
import config from 'next/config'
import path from 'path'
const { localeSubpaths } = config().publicRuntimeConfig

const i18n = new NextI18Next({
  defaultLanguage: 'en',
  otherLanguages: ['de'],
  localeSubpaths,
  localePath: path.resolve('apps/next/public/static/locales'),
})

export const LinkWithLocale: Link = i18n.Link
export const appWithTranslation: AppWithTranslation = i18n.appWithTranslation
