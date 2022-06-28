import React from 'react';
import { PETS_GET } from '../../api';
import useFetch from '../../Hooks/useFetch';
import Loading from '../Loading';
import FeedPets from './FeedPets';
import Error from '../Error';
import styles from './Feed.module.css';

const Feed = ({ user, status }) => {
  const [pets, setPets] = React.useState(null);
  const { error, loading, request } = useFetch();

  React.useEffect(() => {
    async function fetchPets() {
      const { url, options } = PETS_GET({ page: 1, total: 10, user: user });
      const { json } = await request(url, options);
      if (json) {
        setPets(json.filter((pet) => pet.status === status));
      }
    }
    fetchPets();
  }, [request, user, status]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (pets && pets.length)
    return (
      <section className={`${styles.feed} container`}>
        <FeedPets data={pets} />
      </section>
    );
  else return <p>Nenhum pet encontrado.</p>;
};

Feed.defaultProps = {
  user: 0,
};

export default Feed;
