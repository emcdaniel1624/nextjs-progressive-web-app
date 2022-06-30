import React, { useState } from 'react'
import styles from './navbar.module.css'
import { MobileView, BrowserView } from 'react-device-detect'
import Link from 'next/link'

export const NavBar = () => {

  const [activeTabs, setActiveTabs] = useState('home')

  return (
    <div>
      <MobileView className={styles.mobileContainer}>Mobile View
          
      </MobileView>
      <BrowserView className={styles.desktopContainer}>Desktop View
      
      </BrowserView>
    </div>
  )
}