import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { TOKEN_POST } from '../../api';
import useForm from '../../Hooks/useForm';
import Button from '../FormComponents/Button';
import Input from '../FormComponents/Input';
import styles from './FormLogin.module.css';

const FormLogin = () => {
  const navigate = useNavigate();
  const username = useForm('email');
  const password = useForm('');

  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      setLoading(true);
      const { url, options } = TOKEN_POST({
        username: username.value,
        password: password.value,
      });
      const response = await fetch(url, options);
      console.log(response);
      const json = await response.json();
      console.log(json);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className={styles.formLogin}>
      <h1 className="title">Login</h1>
      <form onSubmit={handleSubmit}>
        <Input label="E-mail" type="email" name="email" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />
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
