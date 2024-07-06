import React from 'react';
import { useEffect } from 'react';
import './CV.css';

function CV(){

  useEffect(() => {
    document.title = "P | CV";
  }, []);
  
    return(
        <div>
          <h1>CV Page</h1>
          <p>This is the CV page content.</p>
        </div>
    );
};

export default CV;