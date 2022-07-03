import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Head from '../Helpers/Head';
import FormLogin from './FormLogin';
import FormRegister from './FormRegister';
import styles from './Login.module.css';

const Login = () => {
  return (
    <section className={styles.login}>
      <Head
        title="Cadê meu pet? | Login"
        description="Faça login e procure por seu pet"
      />

      <Routes>
        <Route path="/" element={<FormLogin />} />
        <Route path="cadastro" element={<FormRegister />} />
      </Routes>
    </section>
  );
};

export default Login;
