import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../Assets/logo.svg';
import { UserContext } from '../UserContext';
import styles from './Header.module.css';

const Header = () => {
  const { data, login, userLogout } = React.useContext(UserContext);

  console.log(data);
  console.log(login);

  return (
    <header className={styles.header}>
      <nav className={`${styles.headerContainer} container`}>
        <Link to="/">
          <Logo />
        </Link>
        {login ? (
          <>
            <Link to="conta" className={styles.link}>
              {data.display_name.split(' ', 1)}
            </Link>
            <button onClick={userLogout}>Sair</button>
          </>
        ) : (
          <Link to="login" className={styles.link}>
            login/cadastro
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
