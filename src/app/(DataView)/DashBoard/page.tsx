import React from 'react'
import styles from './page.module.css'
import DropDownMenu from '@/Components/Large/DropDownMenu/DropDownMenu'
import SalesChart from '@/Components/Large/Charts/SalesChart/SalesChart'
import Piechart from '@/Components/Large/Charts/PieChart/PieChart'
const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <div className={styles.dashboard_container}>
        <div className={styles.dashboard_container_header}>
          <span>Dashboard</span>
          <DropDownMenu/>

        </div>
        <div className={styles.dashboard_container_analytics}>
          <div className={styles.dashboard_container_analytics_sales}>
            <SalesChart/>
          </div>
          <div className={styles.dashboard_container_analytics_income}>
            <Piechart/>
          </div>
        </div>
        <div className={styles.dashboard_container_history}>
          
        </div>

      </div>
    </div>
  )
}

export default Dashboard