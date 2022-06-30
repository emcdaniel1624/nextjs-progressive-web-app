import '../core/styles/globals.css'
import type { AppProps } from 'next/app'
import { NavBar } from '../core/components'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavBar></NavBar>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
