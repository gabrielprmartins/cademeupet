import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../FormComponents/Button';
import Input from '../FormComponents/Input';
import styles from './FormLogin.module.css';

const FormLogin = () => {
  const navigate = useNavigate();

  return (
    <section className={styles.formLogin}>
      <h1 className="title">Login</h1>
      <form>
        <Input label="E-mail" type="email" name="email" />
        <Input label="Senha" type="password" name="password" />
        <Button>Login</Button>
      </form>
      <Link to="esqueceu" className={styles.lostPass}>
        Esqueceu sua senha?
      </Link>
      <h1 className="title">Faça seu cadastro</h1>
      <Button onClick={() => navigate('cadastro')}>Cadastre-se</Button>
    </section>
  );
};

export default FormLogin;
