import React from 'react';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../../UserContext';
import styles from './UserNav.module.css';
import { useLocation } from 'react-router-dom';
import useMedia from '../../Hooks/useMedia';

import { ReactComponent as Missing } from '../../Assets/warning.svg';
import { ReactComponent as Found } from '../../Assets/check.svg';
import { ReactComponent as Find } from '../../Assets/add.svg';
import { ReactComponent as Edit } from '../../Assets/config.svg';
import { ReactComponent as Logout } from '../../Assets/arrow-left.svg';

const UserNav = () => {
  const { userLogout } = React.useContext(UserContext);
  const [title, setTitle] = React.useState('');
  const location = useLocation();
  const mobile = useMedia('(max-width: 1200px)');

  React.useEffect(() => {
    const { pathname } = location;
    switch (pathname) {
      case '/conta/procurar':
        setTitle('Procurar pet');
        break;
      case '/conta/encontrados':
        setTitle('Encontrados');
        break;
      case '/conta/editar':
        setTitle('Editar dados');
        break;
      default:
        setTitle('Desaparecidos');
    }
  }, [location]);

  return (
    <>
      <div className={styles.navContainer}>
        <nav className={styles.navList}>
          <NavLink to="/conta" className={styles.navLink} end>
            <Missing />
            <span>Meus pets desaparecidos</span>
          </NavLink>
          <NavLink to="encontrados" className={styles.navLink}>
            <Found />
            <span>Meus pets encontrados</span>
          </NavLink>
          <NavLink to="procurar" className={styles.navLink}>
            <Find />
            <span>Procurar meu pet</span>
          </NavLink>
          <NavLink to="editar" className={styles.navLink}>
            <Edit />
            <span>Editar dados</span>
          </NavLink>
          <button className={styles.navLink} onClick={userLogout}>
            <Logout className={styles.logout} />
            <span>Sair</span>
          </button>
        </nav>
      </div>
      {mobile && <h1 className={`${styles.navTitle} title`}>{title}:</h1>}
    </>
  );
};

export default UserNav;
