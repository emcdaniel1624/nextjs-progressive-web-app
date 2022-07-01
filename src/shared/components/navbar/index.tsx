import React, { useEffect, useState } from 'react'
import styles from './navbar.module.css'
import { MobileView, BrowserView } from 'react-device-detect'
import Link from 'next/link'
import { MenuItemDTO } from '../../models'
import { MenuItem } from './menu-item'
import { ApiRouteMenuItems, PageRoutes } from '../../constants'

export const NavBar = () => {

  const [activeTab, setActiveTabs] = useState(PageRoutes.Home.toString())
  const [ menuItems, setMenuItems] = useState<MenuItemDTO[]>()

  useEffect(() => {
    const fetchData = async () => {
      await fetch(ApiRouteMenuItems)
      .then(async (data) => { 
        var value = await data.json() as MenuItemDTO[]
        setMenuItems(value)
      })
    }
    fetchData()
  },[])

  return (
    <div>
      <MobileView className={styles.mobileContainer}>
        {menuItems?.map((item:MenuItemDTO) => {
          return (<>
            <div className={styles.menuItem} onClick={() => setActiveTabs(item.route)}>
              <MenuItem item={item} activeTab={activeTab}/>
            </div>
          </>)
        })}
      </MobileView>
      <BrowserView className={styles.desktopContainer}>
        {menuItems?.map((item:MenuItemDTO) => {
          return (<>
            <div key={item.id} className={styles.menuItem} onClick={() => setActiveTabs(item.route)}>
              <MenuItem item={item} activeTab={activeTab}/>
            </div>
          </>)
        })}
      </BrowserView>
    </div>
  )
}