import React, { useEffect } from 'react'
import styles from './navbar.module.css'
import { MobileView, BrowserView, isMobile } from 'react-device-detect'

export interface Props {
}

export const NavBar = (props: Props) => {

  useEffect(() => {
    if(isMobile) {
      console.log("Mobile View")
    }
    else {
      console.log("Desktop View")
    }
  },[])

  return (
    <div>
      <MobileView className={styles.container}>Mobile View</MobileView>
      <BrowserView className={styles.container}>Desktop View</BrowserView>
    </div>
  )
}