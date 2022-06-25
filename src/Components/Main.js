import React from 'react';
import petMain from '../Assets/main-pet.png';
import styles from './Main.module.css';
import Button from './FormComponents/Button';
import { useNavigate } from 'react-router-dom';

const Main = () => {
  const navigate = useNavigate();

  return (
    <main className={styles.main}>
      <div className={`${styles.mainContent} container`}>
        <div>
          <h1 className={styles.mainTitle}>Cadê meu pet?</h1>
          <p className="paragraph">
            Faça um cadastro e poste seu pet para que alguém o encontre na sua
            região rapidamente.
          </p>
          <Button onClick={() => navigate('login/cadastro')}>Cadastrar</Button>
        </div>
        <figure>
          <img src={petMain} alt="Um cachorro e um gato juntos" />
        </figure>
      </div>
    </main>
  );
};

export default Main;
