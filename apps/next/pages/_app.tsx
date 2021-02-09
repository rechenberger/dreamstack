import { AppProps } from 'next/app'
import Head from 'next/head'
import React from 'react'
import './styles.css'

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>DreamStack</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default CustomApp
