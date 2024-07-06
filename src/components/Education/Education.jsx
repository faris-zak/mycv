import React from 'react';
import { useEffect } from 'react';
import './Education.css';

function Education(){

  useEffect(() => {
    document.title = "P | Education";
  }, []);

  return(
    <div>
      <h1>Education Page</h1>
      <p>This is the education page content.</p>
    </div>
  );
};

export default Education;