import React from 'react';
import { Route, Routes } from 'react-router-dom';
import FormLogin from './FormLogin';
import FormRegister from './FormRegister';
import styles from './Login.module.css';

const Login = () => {
  return (
    <section className={styles.login}>
      <Routes>
        <Route path="/" element={<FormLogin />} />
        <Route path="cadastro" element={<FormRegister />} />
      </Routes>
    </section>
  );
};

export default Login;
