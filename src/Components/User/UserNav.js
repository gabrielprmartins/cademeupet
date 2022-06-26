import React from 'react';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../../UserContext';
import styles from './UserNav.module.css';

import { ReactComponent as Missing } from '../../Assets/warning.svg';
import { ReactComponent as Found } from '../../Assets/check.svg';
import { ReactComponent as Find } from '../../Assets/add.svg';
import { ReactComponent as Edit } from '../../Assets/config.svg';
import { ReactComponent as Logout } from '../../Assets/arrow-left.svg';

const UserNav = () => {
  const { userLogout } = React.useContext(UserContext);

  return (
    <nav className={styles.navList}>
      <NavLink to="/conta" className={styles.navLink} end>
        <Missing />
        Meus pets desaparecidos
      </NavLink>
      <NavLink to="encontrados" className={styles.navLink}>
        <Found />
        Meus pets encontrados
      </NavLink>
      <NavLink to="procurar" className={styles.navLink}>
        <Find />
        Procurar meu pet
      </NavLink>
      <NavLink to="editar" className={styles.navLink}>
        <Edit />
        Editar dados
      </NavLink>
      <button className={styles.navLink} onClick={userLogout}>
        <Logout />
        Sair
      </button>
    </nav>
  );
};

export default UserNav;
