import { AppProps } from 'next/app'
import Head from 'next/head'
import React from 'react'
import { MainProvider } from '../components/provider/MainProvider'
import './styles.css'

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>DreamStack</title>
      </Head>
      <MainProvider pageProps={pageProps}>
        <Component {...pageProps} />
      </MainProvider>
    </>
  )
}

export default CustomApp
