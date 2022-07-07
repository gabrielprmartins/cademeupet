import React from 'react';
import styles from './Feedback.module.css';
import { ReactComponent as Check } from '../../Assets/check.svg';

const Feedback = ({ children }) => {
  return (
    <div className={`${styles.feedback} animeRight`}>
      <Check />
      <p>{children}</p>
    </div>
  );
};

export default Feedback;
