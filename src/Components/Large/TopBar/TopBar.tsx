import React from 'react'
import styles from './TopBar.module.css'
import Input from '@/Components/Small/Inputs/Input'
import { FiSearch } from 'react-icons/fi';
import { IoFilterSharp } from "react-icons/io5";


const TopBar = () => {
  return (
    <div className={styles.topBar}>
        <div className={styles.topBar_container}>
            <div className={styles.topBar_container_infoleft}>
                <span>Adam Mohamed</span>
                <span>Friday, 25 Apr 2024</span>
            </div>

            <div className={styles.topbar_container_searchRight}>
                <div className={styles.topbar_container_searchRight_searchbox}>
                <FiSearch size={17}  color='#414141'/>
                <Input type="text"  placeholder="search..."  size="small"  search='search'/>
                </div>
                <div className={styles.topbar_container_searchRight_filter}>
                    <IoFilterSharp size={18}  color='#414141' />
                </div>
            </div>

        </div>
    </div>
  )
}

export default TopBar