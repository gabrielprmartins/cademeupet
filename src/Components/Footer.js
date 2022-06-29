import React from 'react';
import styles from './Footer.module.css';
import { ReactComponent as Logo } from '../Assets/logo.svg';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.footerContainer} container`}>
        <Logo />
        <div className={styles.footerInfo}>
          <h2 className="title">Cadê meu pet?</h2>
          <p>Alguns direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
