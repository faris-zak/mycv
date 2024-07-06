import React from 'react';
import { useEffect } from 'react';
import './Contact.css';

function Contact(){

  useEffect(() => {
    document.title = "P | Contact";
  }, []);

  return(
    <div>
      <h1>Contact Page</h1>
      <p>This is the contact page content.</p>
    </div>
  );
};

export default Contact;