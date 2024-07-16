import React from 'react';
import styles from './Button.module.css';

interface ButtonProps {
  size: string;
  type: string; 
  children: React.ReactNode;
  onClick?: () => void;
  icon?: React.ReactNode;

}

const Button: React.FC<ButtonProps> = ({ size, type, children, onClick ,icon}) => {
  const typeClass = type === 'popular' ? styles.popular : styles[type];

  return (
    <button className={`${styles.button} ${typeClass} ${styles[size]}`} onClick={onClick}>
      {icon}{children}
    </button>
  );
}

export default Button;
