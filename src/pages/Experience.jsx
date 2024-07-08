import React from 'react';
import { useEffect } from 'react';

function Experience(){

  useEffect(() => {
    document.title = "P | Experience";
  }, []);

  return(
    <div>
      <h1>Experience Page</h1>
      <p>This is the experience page content.</p>
    </div>
  );
};

export default Experience;