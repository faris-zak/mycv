import React from 'react';
import { useEffect } from 'react';

function NotFound(){

  useEffect(() => {
    document.title = "404 - Not Found";
  }, []);

  const styles = {
    textAlign: 'center',
    fontSize: '36px'
  };

  return (
      <h2 style={styles}>404 - Not Found</h2>
);
};

export default NotFound;