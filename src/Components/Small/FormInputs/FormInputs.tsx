import React from 'react'
import styles from './FormInouts.module.css'
import Input from '../Inputs/Input'
const FormInputs = () => {
  return (
    <div className={styles.container}>
        <div className={styles.container_top}>
                <div className={styles.container_top_left}>
                    <Input placeholder='id' size='meduim' label='Product ID'/>
                    <Input placeholder='name' size='meduim' label='Product Name'/>
                    <Input placeholder='size' size='meduim' label='Product Size'/>
                </div>
                <div className={styles.container_top_right}>
                    <Input placeholder='price' size='meduim' label='Product Price'/>
                    <Input placeholder='category' size='meduim' label='Product Category'/>
                    <Input placeholder='amount' size='meduim' label='Amount'/>
                </div>
            </div>
            <div className={styles.container_bottom}>
                 <Input placeholder='ingredients' size='large' label='Ingredients'/>
            </div>
    </div>
  )
}

export default FormInputs