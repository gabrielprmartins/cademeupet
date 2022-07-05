import React from 'react';
import { useParams } from 'react-router-dom';
import { PET_GET } from '../../api';
import useFetch from '../../Hooks/useFetch';
import ButtonDeletePet from '../ButtonDeletePet';
import ButtonFoundPet from '../ButtonFoundPet';
import Error from '../Helpers/Error';
import Loading from '../Helpers/Loading';
import { UserContext } from '../../UserContext';
import styles from './PetPage.module.css';
import { ReactComponent as Globe } from '../../Assets/globe.svg';
import { ReactComponent as Phone } from '../../Assets/phone.svg';
import { ReactComponent as Check } from '../../Assets/check.svg';
import useRegion from '../../Hooks/useRegion';
import Head from '../Helpers/Head';

// Menu
// Esqueceu a senha

const PetPage = () => {
  const { id } = useParams();
  const { data, loading, error, request } = useFetch();
  const user = React.useContext(UserContext);
  const { getStateName } = useRegion();

  React.useEffect(() => {
    function fetchPet(id) {
      const { url, options } = PET_GET(id);
      request(url, options);
    }
    fetchPet(id);
  }, [id, request]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <section className={`${styles.petContainer} container animeRight`}>
        <Head
          title={`Cadê ${data.sex === 'Macho' ? 'meu' : 'minha'} ${
            data.title
          }?`}
          description=""
        />

        <figure className={styles.petImg}>
          <img src={data.src} alt={data.title} />
        </figure>
        <div className={styles.petInfo}>
          {user.data &&
          user.data.email === data.author_email &&
          data.status === 'lost' ? (
            <div className={styles.userOptions}>
              <ButtonFoundPet id={id} />
              <ButtonDeletePet id={id} />
            </div>
          ) : (
            ''
          )}
          {data.status === 'found' ? (
            <p className={styles.foundPet}>
              <Check /> Pet já encontrado!
            </p>
          ) : (
            ''
          )}
          <span className={styles.lostDate}>
            {data.sex === 'Macho' ? 'desaparecido' : 'desaparecida'} desde{' '}
            {data.date
              .slice(5, 10)
              .split('-')
              .reverse()
              .join()
              .replace(',', '/')}
          </span>
          <h1 className="title">{data.title}</h1>
          {getStateName(data.region) && (
            <p className={styles.region}>
              <Globe /> {getStateName(data.region)}
            </p>
          )}
          <ul className={styles.petInfoList}>
            <li>
              <strong>{data.sex}</strong>
              <span>Sexo</span>
            </li>
            <li>
              <strong>{data.specie}</strong>
              <span>Espécie</span>
            </li>
          </ul>
          <div className={styles.contact}>
            <Phone />
            <div>
              <p>
                <strong>{data.author}</strong>
              </p>
              <p>{data.phone}</p>
            </div>
          </div>
          <p className={styles.comment}>{data.comment}</p>
        </div>
      </section>
    );
  else return null;
};

export default PetPage;
