import React, { useState } from 'react'
import styles from './navbar.module.css'
import { MobileView, BrowserView } from 'react-device-detect'
import Link from 'next/link'

export const NavBar = () => {

  const [activeTabs, setActiveTabs] = useState('home')

  return (
    <div>
      <MobileView className={styles.mobileContainer}>Mobile View
        <div className={styles.bnTab} onClick={() => setActiveTabs('home')}>
            {activeTabs === 'home' ?
              <Link href='/'>
                <a style={{color:'white'}}>
                  Home
                </a>
              </Link> :
              <Link href='/'>
                <a style={{color:'#949494'}}>
                  Home
                </a>
              </Link>}
        </div>
      </MobileView>
      <BrowserView className={styles.desktopContainer}>Desktop View
      
      </BrowserView>
    </div>
  )
}