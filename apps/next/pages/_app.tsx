import { appWithTranslation } from 'next-i18next'
import { AppProps } from 'next/app'
import Head from 'next/head'
import React from 'react'
import '../../../libs/theme/src/lib/tailwind.css'
import { Language } from '../components/provider/Language'
import { MainProvider } from '../components/provider/MainProvider'

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>DreamStack</title>
      </Head>
      <MainProvider pageProps={pageProps}>
        <Language />
        <Component {...pageProps} />
      </MainProvider>
    </>
  )
}

export default appWithTranslation(CustomApp)
