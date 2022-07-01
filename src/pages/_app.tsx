import '../shared/styles/globals.css'
import type { AppProps } from 'next/app'
import { NavBarComponent } from '../shared/components'
import { useState } from 'react'

function App({ Component, pageProps }: AppProps) {

  const [loading, setLoading] = useState(true)
  
  return (<>
    <NavBarComponent/>
    <Component {...pageProps} />
  </>)
}

export default App
