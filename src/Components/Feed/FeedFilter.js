import React from 'react';
import Radio from '../FormComponents/Radio';
import styles from './FeedFilter.module.css';
import useRegion from '../../Hooks/useRegion';

const species = ['', 'Cachorro', 'Gato'];

const FeedFilter = ({ specie, setSpecie, region, setRegion }) => {
  const { ufs } = useRegion();

  return (
    <div className={`${styles.filter} container`}>
      <div className={styles.specieContainer}>
        <h2 className={styles.filterTitle}>Espécie</h2>
        <div className={styles.specie}>
          <Radio options={species} value={specie} setValue={setSpecie} />
        </div>
      </div>
      {ufs && (
        <div className={styles.region}>
          <h2 className={styles.filterTitle}>Região</h2>
          <select
            value={region}
            onChange={({ target }) => setRegion(target.value)}
          >
            <option value="">Todas</option>
            {ufs &&
              ufs.map((option) => (
                <option value={option} key={option}>
                  {option}
                </option>
              ))}
          </select>
        </div>
      )}
    </div>
  );
};

export default FeedFilter;
