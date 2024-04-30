import React from 'react'
import styles from './NavSideDrawer.module.css'
import Image from 'next/image'
import NavLinks from './NavLinks'
const NavSideDrawer = () => {
  return (
    <div className={styles.NavSideDrawer}>
        <div className={styles.NavSideDrawer_Container}>
            <div className={styles.NavSideDrawer_Container_TopLogo}>
                <div className={styles.NavSideDrawer_Container_TopLogo_logo}>
                    <Image src="/images/logo.png" alt='logo'  width={40} height={40} />
                </div>
                <div className={styles.NavSideDrawer_Container_TopLogo_Title}>
                    <span>Bur<span className={styles.special}>GO</span></span>
                </div>
            </div>
            <div className={styles.NavSideDrawer_Container_Links}>
                <NavLinks/>
            </div>
        </div>
        
    </div>
  )
}

export default NavSideDrawer