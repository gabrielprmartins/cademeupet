import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PET_DELETE } from '../api';
import useFetch from '../Hooks/useFetch';
import styles from './ButtonDeletePet.module.css';

const ButtonDeletePet = ({ id }) => {
  const { request } = useFetch();
  const navigate = useNavigate();

  async function handleClick() {
    const token = window.localStorage.getItem('token');
    const { url, options } = PET_DELETE(id, token);
    const { response } = await request(url, options);
    if (response.ok) navigate('/conta');
  }

  return (
    <button onClick={handleClick} className={styles.button}>
      Deletar
    </button>
  );
};

export default ButtonDeletePet;
