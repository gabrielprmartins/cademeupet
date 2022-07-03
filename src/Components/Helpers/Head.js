import React from 'react';

const Head = ({ title, description }) => {
  React.useEffect(() => {
    if (title) document.title = title;
    else document.title = 'Cadê meu pet?';
    if (description)
      document
        .querySelector('meta[name="description"]')
        .setAttribute('content', description);
  }, [title, description]);
  return null;
};

export default Head;
