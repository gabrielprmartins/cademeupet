import React from 'react';
import Input from '../FormComponents/Input';
import Button from '../FormComponents/Button';
import styles from './UserPetsFind.module.css';
import Select from '../FormComponents/Select';
import useForm from '../../Hooks/useForm';
import { PET_POST } from '../../api';
import useFetch from '../../Hooks/useFetch';
import useRegion from '../../Hooks/useRegion';
import Error from '../Helpers/Error';
import { useNavigate } from 'react-router-dom';

const options = {
  specie: ['Cachorro', 'Gato'],
  sex: ['Macho', 'Fêmea'],
};

const UserPetsFind = () => {
  const name = useForm();
  const specie = useForm();
  const sex = useForm();
  const region = useForm();
  const comment = useForm();
  const [img, setImg] = React.useState({});
  const navigate = useNavigate();
  const { data, error, loading, request } = useFetch();
  const { ufs } = useRegion();

  React.useEffect(() => {
    if (data) navigate('/conta');
  }, [data, navigate]);

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData();
    formData.append('img', img.raw);
    formData.append('name', name.value);
    formData.append('specie', specie.value);
    formData.append('sex', sex.value);
    formData.append('region', region.value);
    formData.append('comment', comment.value);

    const token = window.localStorage.getItem('token');
    const { url, options } = PET_POST(formData, token);
    request(url, options);
  }

  function handleImgChange({ target }) {
    setImg({
      preview: URL.createObjectURL(target.files[0]),
      raw: target.files[0],
    });
  }

  return (
    <section className={`${styles.find} animeRight`}>
      <form onSubmit={handleSubmit}>
        <Input type="text" label="Nome" name="name" {...name} />
        <div className={styles.selects}>
          <Select label="Espécie" options={options.specie} {...specie} />
          <Select label="Sexo" options={options.sex} {...sex} />
          <Select
            label="Região"
            options={ufs ? ufs : ['Carregando...']}
            {...region}
          />
        </div>
        <Input type="textarea" label="Comentário" name="comment" {...comment} />
        <label htmlFor="photo" className={styles.labelFile}>
          Selecionar foto do pet
        </label>
        <input
          type="file"
          name="photo"
          id="photo"
          className={styles.inputFile}
          onChange={handleImgChange}
        />
        <div>
          {img.preview && (
            <div
              className={styles.preview}
              style={{ backgroundImage: `url('${img.preview}')` }}
            ></div>
          )}
        </div>
        {loading ? (
          <Button disabled>Postando...</Button>
        ) : (
          <Button>Procurar</Button>
        )}
        <Error error={error} />
      </form>
    </section>
  );
};

export default UserPetsFind;
