import React from 'react';
import styles from './FeedPets.module.css';
import { Link } from 'react-router-dom';
import Error from '../Error';
import Loading from '../Loading';
import { PETS_GET } from '../../api';
import useFetch from '../../Hooks/useFetch';

const FeedPets = ({ page, setInfinite, user, status, specie, region }) => {
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    async function fetchPets() {
      const total = 6;
      const { url, options } = PETS_GET({
        page,
        total,
        user,
        status,
        specie,
        region,
      });
      const { json, response } = await request(url, options);
      if (response && response.ok) {
        if (json.length < total) {
          setInfinite(false);
        }
      }
    }
    fetchPets();
  }, [request, user, status, page, setInfinite, specie, region]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data && data.length)
    return (
      <div className={styles.pets}>
        {data &&
          data.map((pet) => (
            <Link to={`/pet/${pet.id}`} key={pet.id} className={styles.pet}>
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
  else return <p>Nenhum pet encontrado.</p>;
};

export default FeedPets;
