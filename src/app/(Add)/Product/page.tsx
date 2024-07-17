import React from 'react'
import styles from './Page.module.css'
import AddForm from '@/Components/Large/AddForm/AddForm'
import Input from '@/Components/Small/Inputs/Input'
const Product = () => {
  return (
    <div className={styles.addProduct}>
        <div className={styles.addProduct_container}>
              <AddForm name='Add'/>

        </div>
    </div>
  )
}

export default Product