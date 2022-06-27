import React from 'react';
import styles from './Select.module.css';

const Select = ({ options, label, value, onChange }) => {
  return (
    <select
      value={value ? value : label}
      onChange={onChange}
      className={`${styles.select} ${value ? 'active' : ''}`}
    >
      <option value={label} disabled>
        {label}
      </option>
      {options.map((option) => (
        <option value={option} key={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default Select;
