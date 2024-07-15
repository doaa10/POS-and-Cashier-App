import React from 'react'
import styles from './Page.module.css'
import Categories from '@/Components/Small/Categories/Categories'
import MenuGrid from '@/Components/Large/MenuGrid/MenuGrid'
import SideOrder from '@/Components/Large/SideOrder/SideOrder'
const Menu = () => {
  return (
    <div className={styles.menu}>
      <div className={styles.menu_container}>
            <div className={styles.menu_container_leftMenu}>
              <div className={styles.menu_container_leftMenu_categories}>
                    <Categories/>
              </div>
              <div className={styles.menu_container_leftMenu_items}>
                    <MenuGrid/>
              </div>

            </div>
            <div className={styles.menu_container_rightOrder}>
                   <SideOrder/>
            </div>
      </div>

    </div>
  )
}

export default Menu