import React from 'react';
import { useLocation } from 'react-router-dom';

const GoToTop = () => {
  const routePath = useLocation();

  React.useEffect(() => {
    function onTop() {
      window.scrollTo(0, 0);
    }
    onTop();
  }, [routePath]);

  return null;
};

export default GoToTop;
