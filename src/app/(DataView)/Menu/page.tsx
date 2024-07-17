'use client'
import React, { useState } from 'react';
import styles from './Page.module.css';
import Categories from '@/Components/Small/Categories/Categories';
import MenuGrid from '@/Components/Large/MenuGrid/MenuGrid';
import SideOrder from '@/Components/Large/SideOrder/SideOrder';

const Menu: React.FC = () => {
  const [selectedItemIds, setSelectedItemIds] = useState<number[]>([]);

  const handleItemClick = (id: number) => {
    setSelectedItemIds((prevIds) => [...prevIds, id]);
  };

  return (
    <div className={styles.menu}>
      <div className={styles.menu_container}>
        <div className={styles.menu_container_leftMenu}>
          <div className={styles.menu_container_leftMenu_categories}>
            <Categories />

          </div>
          <div className={styles.menu_container_leftMenu_items}>
            <MenuGrid onItemSelect={handleItemClick} />
          </div>
        </div>
        <div className={styles.menu_container_rightOrder}>
          <SideOrder selectedItemIds={selectedItemIds} />
        </div>
      </div>
    </div>
  );
};

export default Menu;
