import React, { useEffect, useState } from 'react'
import styles from './navbar.module.css'
import { MobileView, BrowserView } from 'react-device-detect'
import { MenuItemModel } from '../../generic/models'
import { MenuItemComponent } from './menu-item.component'
import { ApiRouteMenuItems, PageRoutes } from '../../generic/constants'

export const NavBarComponent = () => {

  const [activeTab, setActiveTabs] = useState(PageRoutes.Home.toString())
  const [ menuItems, setMenuItems] = useState<MenuItemModel[]>()

  useEffect(() => {

    const fetchData = async () => {
      await fetch(ApiRouteMenuItems)
      .then(async (data) => { 
        var value = await data.json() as MenuItemModel[]
        setMenuItems(value)
      })
    }
    fetchData()
  },[])

  return (<>
      <MobileView className={styles.mobileContainer}>
        {menuItems?.map((item:MenuItemModel) => {
          return (<>
            <div className={styles.menuItem} onClick={() => setActiveTabs(item.route)}>
              <MenuItemComponent item={item} activeTab={activeTab}/>
            </div>
          </>)
        })}
      </MobileView>
      <BrowserView className={styles.desktopContainer}>
        {menuItems?.map((item:MenuItemModel) => {
          return (<>
            <div key={item.id} className={styles.menuItem} onClick={() => setActiveTabs(item.route)}>
              <MenuItemComponent item={item} activeTab={activeTab}/>
            </div>
          </>)
        })}
      </BrowserView>
    </>)
}