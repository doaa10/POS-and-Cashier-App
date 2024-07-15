import React from 'react'
import styles from './MenuGrid.module.css'
import MenuData from './MenuData'
import LargeContainer from '@/Components/Small/LargeContainer/LargeContainer'
const MenuGrid = () => {
  return (
    <div className={styles.MenuGrid}>
        <div className={styles.MenuGrid_container}>
            {
              MenuData.map((item)=>{
                return <LargeContainer id={item.id} image={item.image} title={item.title} price={item.price} size={item.size}/>
              })
            }

        </div>
    </div>
  )
}

export default MenuGrid