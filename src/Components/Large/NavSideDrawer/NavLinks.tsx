'use client'
import React from 'react'
import styles from './NavSideDrawer.module.css'
import { Links } from './LinksData'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
const NavLinks = () => {
  const pathname = usePathname();

  return (
    <div className={styles.LinksContainer}>
      
        
        {Links.map((link)=>{
            return <ul key={link.id} className={pathname === link.path ? styles.activeLink : styles.other}>
            <li><Link href={link.path}>{link.icon}</Link></li>    
            </ul>
        })}
       
    </div>
  )
}

export default NavLinks