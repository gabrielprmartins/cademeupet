import React from 'react';
import Input from '../FormComponents/Input';
import Button from '../FormComponents/Button';
import styles from './FormLogin.module.css';

const FormRegister = () => {
  return (
    <section className={styles.formLogin}>
      <h1 className="title">Cadastro</h1>
      <form>
        <Input label="Nome Completo" type="text" name="name" />
        <Input label="E-mail" type="email" name="email" />
        <Input label="Telefone" type="text" name="phone" />
        <Input label="Senha" type="password" name="password" />
        <Button>Cadastrar</Button>
      </form>
    </section>
  );
};

export default FormRegister;
