import React, { useEffect } from 'react'
import styles from './navbar.module.css'
import isMobile from 'react-device-detect'

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
    <div className={styles.container}>NavBar Component</div>
  )
}