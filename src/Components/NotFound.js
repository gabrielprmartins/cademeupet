import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NotFound.module.css';
import buttonStyles from './FormComponents/Button.module.css';

const NotFound = () => {
  return (
    <div className={`${styles.notFound} container animeRight`}>
      <h1 className="title">Página não encontrada</h1>
      <Link to="/" className={buttonStyles.button}>
        Voltar para home
      </Link>
    </div>
  );
};

export default NotFound;
