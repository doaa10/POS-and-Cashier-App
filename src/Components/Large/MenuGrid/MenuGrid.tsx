import React from 'react'
import styles from './MenuGrid.module.css'
import MenuData from './MenuData'
import LargeContainer from '@/Components/Small/LargeContainer/LargeContainer'
interface MenuGridProps {
  onItemSelect: (id: number) => void;
}

const MenuGrid: React.FC<MenuGridProps> = ({ onItemSelect }) => {
  return (
    <div className={styles.MenuGrid}>
        <div className={styles.MenuGrid_container}>
            {
              MenuData.map((item)=>{
                return <LargeContainer
                 id={item.id}
                  image={item.image} 
                  title={item.title} 
                  price={item.price} 
                  size={item.size}
                  onItemClick={onItemSelect}
                  />
                  
              })
            }

        </div>
    </div>
  )
}

export default MenuGrid