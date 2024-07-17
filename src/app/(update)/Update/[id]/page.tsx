import React from 'react'
import styles from  './page.module.css'
import AddForm from '@/Components/Large/AddForm/AddForm'
const page = () => {
  return (
    <div className={styles.update}>
      <AddForm name='Update'/>

    </div>
  )
}

export default page