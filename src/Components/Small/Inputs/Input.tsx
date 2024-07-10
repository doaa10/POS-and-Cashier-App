import React from 'react'
import styles from './Input.module.css';
interface types {
    text: String,
    password: String,
};
interface inputTypes {
    type: string,
    placeholder: string,
    label?: String,
    size: string
    inputRef?: any;
    search?:String
};
const Input: React.FC<inputTypes> = ({ type, placeholder, label, size, search, inputRef }) => {
    return (
        <div className={search ? styles.search :styles.input }  >
            <label className={styles.input__label}>{label && label}</label>
            <input type={type} placeholder={placeholder} className={styles.input__field} ref={inputRef} />
        </div>
    )
}

export default Input