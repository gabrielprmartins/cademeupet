import React from 'react';
import FeedPets from './FeedPets';
import styles from './Feed.module.css';

const Feed = ({ user, status, specie, region }) => {
  const [pages, setPages] = React.useState([1]);
  const [infinite, setInfinite] = React.useState(true);

  React.useEffect(() => {
    setPages([1]);
  }, [specie, region]);

  React.useEffect(() => {
    let wait = false;
    function infiniteScroll() {
      if (infinite) {
        const scroll = window.scrollY;
        const height = document.body.offsetHeight - window.innerHeight;
        if (scroll > height * 0.9 && !wait) {
          setPages((pages) => [...pages, pages.length + 1]);
          wait = true;
          setTimeout(() => {
            wait = false;
          }, 1000);
        }
      }
    }

    window.addEventListener('scroll', infiniteScroll);
    window.addEventListener('wheel', infiniteScroll);
    return () => {
      window.removeEventListener('scroll', infiniteScroll);
      window.removeEventListener('wheel', infiniteScroll);
    };
  }, [infinite]);

  return (
    <section className={`${styles.feed} container`}>
      {pages.map((page) => (
        <FeedPets
          key={page}
          user={user}
          status={status}
          page={page}
          specie={specie}
          region={region}
          setInfinite={setInfinite}
        />
      ))}
    </section>
  );
};

Feed.defaultProps = {
  user: 0,
  specie: '',
  region: '',
};

export default Feed;
