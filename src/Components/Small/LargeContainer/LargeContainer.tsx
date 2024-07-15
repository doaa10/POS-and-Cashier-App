import React from 'react'
import styles from './LargeContainer.module.css'
import Button from '../Button/Button'
import Image from 'next/image'
interface DataProps {
    id:number;
    image:string
    title: string,
    size:string,
    price:string
}
const LargeContainer: React.FC<DataProps> = ({id,image,title,size,price}) => {
  return (
    <div className={styles.LargeContainer}>
        <div className={styles.LargeContainer__content}>
            <div className={styles.LargeContainer__content_image}>
                 <Image src={image} width={170} height={110} alt='item image'/>
            </div>
            <div className={styles.LargeContainer__content_title}>
                <span>{title}</span>
            </div>
            <div className={styles.LargeContainer__content_details}>
                <span>{size}</span>
                <span>{price}</span>
            </div>
            <div className={styles.LargeContainer__content_button}>
                <Button type='popular' size='small' children='Order'/>
            </div>
        </div>
    </div>
  )
}

export default LargeContainer