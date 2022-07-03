import React from 'react';
import Input from '../FormComponents/Input';
import Button from '../FormComponents/Button';
import styles from './FormLogin.module.css';
import useForm from '../../Hooks/useForm';
import { USER_POST } from '../../api';
import useFetch from '../../Hooks/useFetch';
import { UserContext } from '../../UserContext';
import Error from '../Helpers/Error';
import Head from '../Helpers/Head';

const FormRegister = () => {
  const name = useForm();
  const email = useForm('email');
  const phone = useForm('phone');
  const password = useForm();
  const { error, loading, request } = useFetch();
  const { userLogin } = React.useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();

    if (email.validate() && phone.validate()) {
      const { url, options } = USER_POST({
        name: name.value,
        email: email.value,
        phone: phone.value,
        password: password.value,
      });
      const { response } = await request(url, options);
      if (response.ok) userLogin(email.value, password.value);
    }
  }

  return (
    <section className={styles.formLogin}>
      <Head
        title="Cadê meu pet? | Cadastro"
        description="Faça um cadastro e poste seu pet para que alguém o encontre na sua região rapidamente."
      />

      <h1 className="title">Cadastro</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Nome Completo" type="text" name="name" {...name} />
        <Input label="E-mail" type="email" name="email" {...email} />
        <Input label="Telefone" type="text" name="phone" {...phone} />
        <Input label="Senha" type="password" name="password" {...password} />
        {loading ? (
          <Button disabled>Cadastrando...</Button>
        ) : (
          <Button>Cadastrar</Button>
        )}
        {error && <Error error={error} />}
      </form>
    </section>
  );
};

export default FormRegister;
