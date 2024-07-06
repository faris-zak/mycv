import React from 'react';
import { useEffect } from 'react';
import './About.css';

function About(){

  useEffect(() => {
    document.title = "P | About";
  }, []);

  return(
    <div>
      <h1>About Page</h1>
      <p>This is the about page content.</p>
    </div>
  );
};

export default About;