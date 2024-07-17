import React from 'react'
import styles from './Page.module.css'
import Button from '@/Components/Small/Button/Button'
import { TiPlus } from "react-icons/ti";
import { PiExportBold } from "react-icons/pi";
import DataTable from '@/Components/Large/DataTable/DataTable'; 
import Link from 'next/link';
import Input from '@/Components/Small/Inputs/Input';
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
              <Link href='/Product'><Button type='popular2' size='meduim' children='Add Product' icon={<TiPlus/>} /></Link>
              </div>
          </div>
          <div className={styles.inventory_container_table}>
                <DataTable/>
          </div>
        </div>

    </div>
  )
}

export default Inventory