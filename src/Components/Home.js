import React from 'react';
import { UserContext } from '../UserContext';
import Feed from './Feed/Feed';
import Main from './Main';

const Home = () => {
  const { login } = React.useContext(UserContext);

  return (
    <section>
      {!login && <Main />}
      <Feed status="lost" />
    </section>
  );
};

export default Home;
