import React from 'react';
import Input from '../FormComponents/Input';
import Button from '../FormComponents/Button';
import useForm from '../../Hooks/useForm';
import useFetch from '../../Hooks/useFetch';
import { PASSWORD_LOST } from '../../api';
import Error from '../Helpers/Error';
import Feedback from '../Helpers/Feedback';
import Head from '../Helpers/Head';

const LoginPasswordLost = () => {
  const email = useForm();
  const { data, loading, error, request } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    if (email.validate()) {
      const { url, options } = PASSWORD_LOST({
        login: email.value,
        url: window.location.href.replace('esqueceu', 'resetar'),
      });
      request(url, options);
    }
  }

  return (
    <section
      className="mainContainer animeRight"
      style={{ marginRight: '1.25rem' }}
    >
      <Head
        title="Cadê meu pet? | Esqueci minha senha"
        description="Esqueceu a sua senha? Não se preocupe, enviaremos um e-mail para que você a resete."
      />

      <h1 className="title">Esqueceu a senha?</h1>
      {data ? (
        <Feedback>{data}</Feedback>
      ) : (
        <form onSubmit={handleSubmit} style={{ marginTop: '1rem' }}>
          <Input label="E-mail" type="email" name="email" {...email} />
          {loading ? (
            <Button disabled>Enviando...</Button>
          ) : (
            <Button>Enviar e-mail</Button>
          )}
        </form>
      )}

      <Error error={error} />
    </section>
  );
};

export default LoginPasswordLost;
