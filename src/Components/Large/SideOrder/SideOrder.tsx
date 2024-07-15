import React from 'react'
import styles from './SideOrder.module.css'
const SideOrder = () => {
  return (
    <div className={styles.sideOrder}>
        <div className={styles.sideOrder_container}>
            <div className={styles.sideOrder_container_head}></div>
            <div className={styles.sideOrder_container_orders}></div>
            <div className={styles.sideOrder_container_payment}></div>
            <div className={styles.sideOrder_container_method}></div>
            <div className={styles.sideOrder_container_button}></div>


        </div>
    </div>
  )
}

export default SideOrder