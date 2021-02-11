// const NextI18Next = require('next-i18next').default
import NextI18Next from 'next-i18next'
// const { localeSubpaths } = require('next/config').default().publicRuntimeConfig
import config from 'next/config'
// const path = require('path')
import path from 'path'
const { localeSubpaths } = config().publicRuntimeConfig

module.exports = new NextI18Next({
  defaultLanguage: 'en',
  otherLanguages: ['de'],
  localeSubpaths,
  // localePath: path.resolve('../public/static/locales'),
  localePath: path.resolve('apps/next/public/static/locales'),
})
