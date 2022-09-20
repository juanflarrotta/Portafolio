import Head from 'next/head'
import '../styles/globals.scss'
import { primaryColor } from '../styles/variables.module.scss';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Juan F. Larrotta Bernal</title>
        <meta name="msapplication-TileColor" content={primaryColor} />
        <meta name="apple-mobile-web-app-status-bar" content={primaryColor} />
        <meta name="theme-color" content={primaryColor} />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
