import { AppProps } from 'next/app'
import Head from 'next/head'
import React from 'react'
import '../../../libs/theme/src/lib/tailwind.css'
import { MainProvider } from '../components/provider/MainProvider'
import { appWithTranslation } from '../lib/i18n'

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

// export const getInitialProps = async (appContext) => ({
//   ...(await CustomApp.getInitialProps(appContext)),
// })

export default appWithTranslation(CustomApp)
