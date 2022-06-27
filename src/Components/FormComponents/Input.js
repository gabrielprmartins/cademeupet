import React from 'react';
import styles from './Input.module.css';

const Input = ({ label, name, type, value, onChange, onBlur, error }) => {
  return (
    <>
      {type === 'textarea' ? (
        <div className={styles.inputContent}>
          <textarea
            type={type}
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            className={styles.input}
            placeholder=" "
            rows="4"
          ></textarea>
          <label className={styles.label}>{label}</label>
        </div>
      ) : (
        <div className={styles.inputContent}>
          <input
            type={type}
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            className={styles.input}
            placeholder=" "
          />
          <label className={styles.label}>{label}</label>
        </div>
      )}
      {error && <p className={styles.error}>{error}</p>}
    </>
  );
};

export default Input;
