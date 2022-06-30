import React from 'react';
import { UFS_GET } from '../api';
import useFetch from './useFetch';

const useRegion = () => {
  const { request } = useFetch();
  const [ufs, setUfs] = React.useState(null);
  const [ufsWithId, setUfsWithId] = React.useState(null);
  const [namesWithId, setNamesWithId] = React.useState(null);
  const [response, setResponse] = React.useState(null);

  React.useEffect(() => {
    async function fetchUfs() {
      const { url, options } = UFS_GET();
      const { response, json } = await request(url, options);
      if (response.ok && json.length) {
        setResponse(json);
        setUfs(json.map((region) => region.sigla));
        setUfsWithId(
          json.map((region) => {
            return { id: region.id, initial: region.sigla };
          }),
        );
        setNamesWithId(
          json.map((region) => {
            return { id: region.id, name: region.nome };
          }),
        );
      }
    }
    fetchUfs();
  }, [request]);

  function getStateName(uf) {
    let ufName;
    let ufInitial;
    if (ufs) {
      let id;
      ufsWithId.forEach((ufWithId) => {
        if (ufWithId.initial === uf) {
          id = ufWithId.id;
          ufInitial = ufWithId.initial;
        }
      });
      namesWithId.forEach((name) => {
        if (name.id === id) {
          ufName = name.name;
        }
      });
    }
    return `${ufName} - ${ufInitial}`;
  }

  return { ufs, ufsWithId, namesWithId, getStateName, response };
};

export default useRegion;
