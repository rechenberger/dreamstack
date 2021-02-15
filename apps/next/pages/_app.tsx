import App, { AppProps } from 'next/app'
import Head from 'next/head'
import React from 'react'
import '../../../libs/theme/src/lib/tailwind.css'
import { Language } from '../components/provider/Language'
import { MainProvider } from '../components/provider/MainProvider'
import { appWithTranslation } from '../lib/i18n'

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

// FROM: https://github.com/isaachinman/next-i18next/issues/652#issuecomment-644618517
CustomApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext)
  const defaultProps = appContext.Component.defaultProps

  console.log('getInitialProps', appContext.router)

  const props = {
    ...appProps,
    pageProps: {
      namespacesRequired: [
        ...(appProps.pageProps.namespacesRequired || []),
        ...(defaultProps?.i18nNamespaces || []),
      ],
    },
  }
  return props
}
// CustomApp.getInitialProps = async (appContext) => ({
//   ...(await App.getInitialProps(appContext)),
// })

export default appWithTranslation(CustomApp)
