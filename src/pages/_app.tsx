import '../shared/styles/globals.css'
import type { AppProps } from 'next/app'
import { NavBar } from '../shared/components'
import { useState } from 'react'

function App({ Component, pageProps }: AppProps) {

  const [loading, setLoading] = useState(true)
  
  return (<>
    <NavBar/>
    <Component {...pageProps} />
  </>)
}

export default App
