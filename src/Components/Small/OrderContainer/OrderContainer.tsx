import React from 'react'
import styles from './OrderContainer.module.css'
import Image from 'next/image'
import { HiMiniMinusCircle } from "react-icons/hi2";
import { HiMiniPlusCircle } from "react-icons/hi2";
import { RiDeleteBin5Line } from "react-icons/ri";

const OrderContainer = () => {
  return (
    <div className={styles.OrderContainer}>
        <div className={styles.OrderContainer_img}>       
             <Image src='/images/img1.png' width={90} height={80} alt='image'/>
        </div>
        <div className={styles.OrderContainer_details}>
            <div className={styles.OrderContainer_details_title}>
                <span>Beef Burger</span>
            </div>
            <div className={styles.OrderContainer_details_controllers}>
                    <HiMiniMinusCircle size={25} color='#ACAAAA'/>
                    <span>01</span>
                    <HiMiniPlusCircle size={25} color='#C8161D'/>
            </div>
        </div>
        <div className={styles.OrderContainer_last}>
            <span>$12</span>
            <RiDeleteBin5Line size={25} color='#FC0005'/>
        </div>
    </div>
  )
}

export default OrderContainer