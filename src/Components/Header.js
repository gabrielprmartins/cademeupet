import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../Assets/logo.svg';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={`${styles.headerContainer} container`}>
        <Link to="/">
          <Logo />
        </Link>
        <Link to="login" className={styles.link}>
          login/cadastro
        </Link>
      </nav>
    </header>
  );
};

export default Header;
