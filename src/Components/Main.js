import React from 'react';
import petMain from '../Assets/main-pet.png';
import styles from './Main.module.css';
import { Link } from 'react-router-dom';

const Main = () => {
  return (
    <main className={styles.main}>
      <div className={`${styles.mainContent} container`}>
        <div>
          <h1 className={styles.mainTitle}>Cadê meu pet?</h1>
          <p className="paragraph">
            Faça um cadastro e poste seu pet para que alguém o encontre na sua
            região rapidamente.
          </p>
          <Link to="login" className="button">
            Cadastrar
          </Link>
        </div>
        <figure>
          <img src={petMain} alt="Um cachorro e um gato juntos" />
        </figure>
      </div>
    </main>
  );
};

export default Main;
