import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    
    <nav className="navbar">
      <div className="profile-icon">
          <Link to="/about"><img src="alfaris-icon.jpg" alt="Image" /></Link>
      </div>
      <div className="pages">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/experience">Experience</Link></li>
        <li><Link to="/education">Education</Link></li>
        <li><Link to="/skills">Skills</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/cv">CV</Link></li>
      </ul>
      </div>
      <div className="nav-buttons">
        <a className="download-button" href="" download="">Download CV</a>
        <Link className="contact-button" to="/contact">Contact Me</Link>
      </div>
    </nav>
  );
};

export default Navbar;