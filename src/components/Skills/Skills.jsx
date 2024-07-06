import React from 'react';
import { useEffect } from 'react';
import './Skills.css';

function Skills(){

  useEffect(() => {
    document.title = "P | Skills";
  }, []);

  return(
    <div>
      <h1>Skills Page</h1>
      <p>This is the skills page content.</p>
    </div>
  );
};

export default Skills;