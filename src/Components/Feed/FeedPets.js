import React from 'react';
import styles from './FeedPets.module.css';
import { Link } from 'react-router-dom';

const FeedPets = ({ data }) => {
  return (
    <div className={styles.pets}>
      {data &&
        data.map((pet) => (
          <Link to={`pet/${pet.id}`} key={pet.id} className={styles.pet}>
            <img src={pet.src} alt={pet.title} />
            <article className={styles.petInfo}>
              <h2>{pet.title}</h2>
              <div className={styles.petInfoFlex}>
                <p>{pet.sex}</p>
                <p>
                  {pet.date
                    .slice(5, 10)
                    .split('-')
                    .reverse()
                    .join()
                    .replace(',', '/')}
                </p>
              </div>
            </article>
          </Link>
        ))}
    </div>
  );
};

export default FeedPets;
