import React from 'react';
import { UserContext } from '../UserContext';
import Feed from './Feed/Feed';
import FeedFilter from './Feed/FeedFilter';
import Main from './Main';

const Home = () => {
  const { login } = React.useContext(UserContext);
  const [specie, setSpecie] = React.useState('');
  const [region, setRegion] = React.useState('');

  return (
    <section>
      {!login && <Main />}
      <FeedFilter
        specie={specie}
        setSpecie={setSpecie}
        region={region}
        setRegion={setRegion}
      />
      <Feed status="lost" specie={specie} region={region} />
    </section>
  );
};

export default Home;
