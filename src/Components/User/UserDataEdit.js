import React from 'react';
import Input from '../FormComponents/Input';
import Button from '../FormComponents/Button';
import { UserContext } from '../../UserContext';
import useForm from '../../Hooks/useForm';
import useFetch from '../../Hooks/useFetch';
import { USER_PUT } from '../../api';
import Error from '../Helpers/Error';
import styles from './UserDataEdit.module.css';
import Feedback from '../Helpers/Feedback';

const UserDataEdit = () => {
  const { data, getUser } = React.useContext(UserContext);
  const name = useForm();
  const email = useForm('email');
  const phone = useForm('phone');
  const password = useForm();
  const { loading, error, request } = useFetch();
  const [feedback, setFeedback] = React.useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    const token = window.localStorage.getItem('token');
    if (data && token) {
      const { url, options } = USER_PUT(
        {
          name: name.value ? name.value : data.display_name,
          email: email.value ? email.value : data.email,
          phone: phone.value ? phone.value : data.phone,
          password: password.value,
        },
        token,
      );
      const { response } = await request(url, options);
      if (response.ok) {
        await getUser(token);
        name.resetValue();
        email.resetValue();
        phone.resetValue();
        password.resetValue();
        setFeedback(true);
        setTimeout(() => {
          setFeedback(false);
        }, 3000);
      }
    }
  }

  if (!data) return null;
  return (
    <form onSubmit={handleSubmit} className={`${styles.form} animeRight`}>
      <Input type="text" label={data.display_name} name="name" {...name} />
      <Input type="email" label={data.email} name="email" {...email} />
      <Input type="text" label={data.phone} name="phone" {...phone} />
      <Input type="password" label="Senha" name="password" {...password} />
      {loading ? (
        <Button disabled style={{ marginTop: '1.7rem' }}>
          Salvar
        </Button>
      ) : (
        <Button style={{ marginTop: '1.7rem' }}>Salvar</Button>
      )}
      <Error error={error} />
      {feedback && <Feedback>Dados atualizados com sucesso!</Feedback>}
    </form>
  );
};

export default UserDataEdit;
