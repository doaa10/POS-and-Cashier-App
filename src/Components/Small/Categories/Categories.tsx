import React from 'react'
import Box from '../Box/Box';
import styles from './Categories.module.css'
import CategoryData from './CategoriesData';
const Categories = () => {
  return (
    <div className={styles.Categories}>
       {
        CategoryData.map((category)=>{
            return <Box key={category.id} categoryName={category.name} categoryColor={category.status} />
        })
       }
    </div>
  )
}

export default Categories