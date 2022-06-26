import React from 'react';
import Input from '../FormComponents/Input';
import Button from '../FormComponents/Button';
import styles from './FormLogin.module.css';
import useForm from '../../Hooks/useForm';
import { USER_POST } from '../../api';

const FormRegister = () => {
  const name = useForm();
  const email = useForm('email');
  const phone = useForm('phone');
  const password = useForm();

  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      setLoading(true);
      const { url, options } = USER_POST({
        name: name.value,
        email: email.value,
        phone: phone.value,
        password: password.value,
      });
      const response = await fetch(url, options);
      console.log(response);
      const json = await response.json();
      console.log(json);
      if (!response.ok) throw new Error(json.message);
      setData(json);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className={styles.formLogin}>
      <h1 className="title">Cadastro</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Nome Completo" type="text" name="name" {...name} />
        <Input label="E-mail" type="email" name="email" {...email} />
        <Input label="Telefone" type="text" name="phone" {...phone} />
        <Input label="Senha" type="password" name="password" {...password} />
        <Button>Cadastrar</Button>
      </form>
    </section>
  );
};

export default FormRegister;
