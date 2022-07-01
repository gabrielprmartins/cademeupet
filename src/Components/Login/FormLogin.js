import React from 'react';
import styles from './FormLogin.module.css';
import { Link, useNavigate } from 'react-router-dom';
import useForm from '../../Hooks/useForm';
import Button from '../FormComponents/Button';
import Input from '../FormComponents/Input';
import { UserContext } from '../../UserContext';
import Error from '../Helpers/Error';

const FormLogin = () => {
  const navigate = useNavigate();
  const username = useForm('email');
  const password = useForm('');

  const { userLogin, loading, error } = React.useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  }

  return (
    <section className={styles.formLogin}>
      <h1 className="title">Login</h1>
      <form onSubmit={handleSubmit}>
        <Input label="E-mail" type="email" name="email" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />
        {loading ? (
          <Button disabled>Logando...</Button>
        ) : (
          <Button>Login</Button>
        )}
        {error && <Error error={error} />}
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
