'use client'
import React, { useState } from 'react'
import styles from './OrderContainer.module.css'
import Image from 'next/image'
import { HiMiniMinusCircle } from "react-icons/hi2";
import { HiMiniPlusCircle } from "react-icons/hi2";
import { RiDeleteBin5Line } from "react-icons/ri";
import MenuData from '@/Components/Large/MenuGrid/MenuData';

interface props {
  id:number;

}
const OrderContainer:React.FC<props> = ({id}) => {
  console.log('id'+ id)
  const menuItem = MenuData.find(item => item.id === id);

  if (!menuItem) {
    return null; 
  }

  const { image, title, price } = menuItem;

  const [count ,useCount]=useState(1);

  const plus=()=>{
    useCount(count+1)
  }
   const minus =()=>{
    useCount(count-1)
   }

   if(count<0){
    useCount(0);
   }

   const totalprice =price*count;
  return (
    <div className={styles.OrderContainer}>
        <div className={styles.OrderContainer_img}>       
             <Image src={image} width={90} height={80} alt='image'/>
        </div>
        <div className={styles.OrderContainer_details}>
            <div className={styles.OrderContainer_details_title}>
                <span>{title}</span>
            </div>
            <div className={styles.OrderContainer_details_controllers}>
                    <HiMiniMinusCircle size={25} color='#ACAAAA' onClick={minus}/>
                    <span>{count}</span>
                    <HiMiniPlusCircle size={25} color='#C8161D' onClick={plus}/>
            </div>
        </div>
        <div className={styles.OrderContainer_last}>
            <span>{totalprice}</span>
            <RiDeleteBin5Line size={25} color='#FC0005'/>
        </div>
    </div>
  )
}

export default OrderContainer