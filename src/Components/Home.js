import React from 'react';
import { UserContext } from '../UserContext';
import Main from './Main';

const Home = () => {
  const { login } = React.useContext(UserContext);

  return (
    <section>
      {!login && <Main />}
      Feed
    </section>
  );
};

export default Home;
