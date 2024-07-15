import React from 'react'
import styles from './Page.module.css'
import Categories from '@/Components/Small/Categories/Categories'
const Menu = () => {
  return (
    <div className={styles.menu}>
      <div className={styles.menu_container}>
            <div className={styles.menu_container_leftMenu}>
              <div className={styles.menu_container_leftMenu_categories}>
                    <Categories/>
              </div>
              <div className={styles.menu_container_leftMenu_items}>

              </div>

            </div>
            <div className={styles.menu_container_rightOrder}>
              
            </div>
      </div>

    </div>
  )
}

export default Menu