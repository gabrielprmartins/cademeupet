import React from 'react';
import Radio from '../FormComponents/Radio';
import Select from '../FormComponents/Select';
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
          <Select
            options={['Todas', ...ufs]}
            value={region}
            onChange={({ target }) => setRegion(target.value)}
          />
        </div>
      )}
    </div>
  );
};

export default FeedFilter;
