import React from 'react';
import styles from './ButtonFoundPet.module.css';
import { ReactComponent as Check } from '../Assets/check.svg';
import useFetch from '../Hooks/useFetch';
import { PET_STATUS_PUT } from '../api';
import { useNavigate } from 'react-router-dom';

const ButtonFoundPet = ({ id }) => {
  const { request } = useFetch();
  const navigate = useNavigate();

  async function handleClick() {
    const confirm = window.confirm(
      'Deseja mesmo marcar seu pet como encontrado?',
    );
    if (confirm) {
      const token = window.localStorage.getItem('token');
      const { url, options } = PET_STATUS_PUT(id, token);
      const { response } = await request(url, options);
      if (response.ok) navigate('/conta/encontrados');
    }
  }

  return (
    <button onClick={handleClick} className={styles.button}>
      <Check /> Encontrado
    </button>
  );
};

export default ButtonFoundPet;
