import React from 'react';
import { Route, Routes } from 'react-router-dom';
import styles from './User.module.css';

import UserNav from './UserNav';
import UserPetsMissing from './UserPetsMissing';
import UserPetsFound from './UserPetsFound';
import UserPetsFind from './UserPetsFind';
import UserDataEdit from './UserDataEdit';

const User = () => {
  return (
    <section className={`${styles.user} container`}>
      <UserNav />
      <Routes>
        <Route path="/" element={<UserPetsMissing />} />
        <Route path="encontrados" element={<UserPetsFound />} />
        <Route path="procurar" element={<UserPetsFind />} />
        <Route path="editar" element={<UserDataEdit />} />
      </Routes>
    </section>
  );
};

export default User;
