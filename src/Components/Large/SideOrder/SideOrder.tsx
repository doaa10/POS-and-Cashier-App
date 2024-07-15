import React from 'react'
import styles from './SideOrder.module.css'
import { RiVisaFill } from "react-icons/ri";
import { IoCashOutline } from "react-icons/io5";
import { BsQrCodeScan } from "react-icons/bs";
import Button from '@/Components/Small/Button/Button';
import OrderContainer from '@/Components/Small/OrderContainer/OrderContainer';

const SideOrder = () => {
  return (
    <div className={styles.sideOrder}>
        <div className={styles.sideOrder_container}>
            <div className={styles.sideOrder_container_head}>
                <span>Order</span>
                <span>#123</span>
            </div>
            <div className={styles.sideOrder_container_orders}>
                <OrderContainer/>
                <OrderContainer/>
                <OrderContainer/>
                <OrderContainer/>

            </div>
            <div className={styles.sideOrder_container_payment}>
                <span className={styles.sideOrder_container_payment_title}>Payment Summary</span>
                <div>
                    <span>sub-Total</span>
                    <span>45$</span>
                </div>

                <div>
                    <span>Tax</span>
                    <span>0$</span>
                </div>

                <div>
                    <span>Discount</span>
                    <span>0$</span>
                </div>

                <div className={styles.total}>
                    <span>Total</span>
                    <span>45$</span>
                </div>

            </div>
            <div className={styles.sideOrder_container_method}>
                    <div><RiVisaFill size={26}/></div> 
                    <div><IoCashOutline size={26}/></div>
                    <div><BsQrCodeScan size={26}/></div>
            </div>
            <div className={styles.sideOrder_container_button}>
                <Button type='popular' size='mediam' children='Proceed'/>
            </div>


        </div>
    </div>
  )
}

export default SideOrder