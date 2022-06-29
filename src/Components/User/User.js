import React from 'react';
import { Route, Routes } from 'react-router-dom';
import styles from './User.module.css';

import Feed from '../Feed/Feed';
import UserNav from './UserNav';
import UserPetsFind from './UserPetsFind';
import UserDataEdit from './UserDataEdit';
import { UserContext } from '../../UserContext';

const User = () => {
  const { data } = React.useContext(UserContext);

  if (data)
    return (
      <section className={`${styles.user} container`}>
        <UserNav />
        <Routes>
          <Route path="/" element={<Feed user={data.id} status="lost" />} />
          <Route
            path="encontrados"
            element={<Feed user={data.id} status="found" />}
          />
          <Route path="procurar" element={<UserPetsFind />} />
          <Route path="editar" element={<UserDataEdit />} />
        </Routes>
      </section>
    );
  else return null;
};

export default User;
