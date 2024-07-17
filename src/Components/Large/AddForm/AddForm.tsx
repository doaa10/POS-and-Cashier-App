import React from 'react'
import styles from './AddForm.module.css'
import Button from '@/Components/Small/Button/Button'
import Input from '@/Components/Small/Inputs/Input'
const AddForm = () => {
  return (
    <div className={styles.addForm}>
        <div className={styles.addForm_container}>
            <div className={styles.addForm_container_imageUpload}></div>
            <div className={styles.addForm_container_inputs}>
            <Input  placeholder='Beef Burger' size='meduim' label='Product Name'/>
            </div>
            <div className={styles.addForm_container_button}>
                {/* <Button type='popular2' size='mediam' children='Add Product'/> */}
            </div>

        </div>
    </div>
  )
}

export default AddForm