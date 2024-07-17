import React from 'react';
import styles from './Input.module.css';

interface inputTypes {
    placeholder?: string;
    label?: string;
    size: 'meduim' | 'large';
    search?: string;
};

const Input: React.FC<inputTypes> = ({ placeholder, label, size, search }) => {
    return (
        <div className={search ? styles.search : styles.inputContainer}>
            {label && <label className={styles.input__label}>{label}</label>}
            <input type='text' placeholder={placeholder} className={`${styles.input__field} ${styles[size]}`} />
        </div>
    );
};

export default Input;
