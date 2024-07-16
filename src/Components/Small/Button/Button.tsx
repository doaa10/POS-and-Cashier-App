import React from 'react';
import styles from './Button.module.css';

interface ButtonProps {
  size: string;
  type: string; // [primary, success, danger]
  children: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ size, type, children, onClick }) => {
  const typeClass = type === 'popular' ? styles.popular : styles[type];

  return (
    <button className={`${styles.button} ${typeClass} ${styles[size]}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
