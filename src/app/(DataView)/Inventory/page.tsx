import React from 'react'
import styles from './Page.module.css'
import Button from '@/Components/Small/Button/Button'
import { TiPlus } from "react-icons/ti";
import { PiExportBold } from "react-icons/pi";

const Inventory = () => {
  return (
    <div className={styles.inventory}>
        <div className={styles.inventory_container}>
          <div className={styles.inventory_container_header}>
              <div className={styles.inventory_container_header_title}>
                <span>Inventory</span>
              </div>
              <div className={styles.inventory_container_header_actions}>
              <Button type='secondary' size='meduim2' children='Export' icon={<PiExportBold/>} />

                <Button type='popular' size='meduim' children='Add Product' icon={<TiPlus/>} />
              </div>
          </div>
          <div className={styles.inventory_container_table}>

          </div>
        </div>

    </div>
  )
}

export default Inventory