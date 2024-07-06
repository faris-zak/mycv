import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    
    <nav className="navbar">
      <div className="profile-icon">
          <Link to="/p/about"><img src="alfaris-icon.jpg" alt="Image" /></Link>
      </div>
      <div className="pages">
      <ul>
        <li><Link to="/p/">Home</Link></li>
        <li><Link to="/p/about">About</Link></li>
        <li><Link to="/p/experience">Experience</Link></li>
        <li><Link to="/p/education">Education</Link></li>
        <li><Link to="/p/skills">Skills</Link></li>
        <li><Link to="/p/contact">Contact</Link></li>
        <li><Link to="/p/cv">CV</Link></li>
      </ul>
      </div>
      <div className="nav-buttons">
        <a className="download-button" href="" download="">Download CV</a>
        <Link className="contact-button" to="/p/contact">Contact Me</Link>
      </div>
    </nav>
  );
};

export default Navbar;