import React from 'react'
import styles from './Box.module.css'


interface props {
    categoryName:string;
    categoryColor:string;
}

const Box: React.FC<props>  = ({categoryName,categoryColor}) => {

  return (
    <div className={`${styles.box} ${categoryColor === 'Active' ? styles.active : ''}`}>
        <span>{categoryName}</span>
    </div>
  )
}

export default Box