import React from 'react';
import styles from './Input.module.css';

const Input = ({ label, name, type, value }) => {
  return (
    <div className={styles.inputContent}>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        className={styles.input}
        placeholder=" "
      />
      <label className={styles.label}>{label}</label>
    </div>
  );
};

export default Input;
