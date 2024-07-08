import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    
    <nav className="navbar">
      <div className="profile-icon">
          <img id='userIcon' src="microsoft.jpg" alt="Image" />
      </div>
      <div className="pages">
      <ul>
        <li><Link to="/p/" className="fade">Home<div className="underline"></div></Link></li>
        <li><Link to="/p/about" className="fade">About<div className="underline"></div></Link></li>
        <li><Link to="/p/experience" className="fade">Experience<div className="underline"></div></Link></li>
        <li><Link to="/p/education" className="fade">Education<div className="underline"></div></Link></li>
        <li><Link to="/p/skills" className="fade">Skills<div className="underline"></div></Link></li>
        <li><Link to="/p/cv" className="fade">CV<div className="underline"></div></Link></li>
      </ul>
      </div>
      <div className="nav-buttons">
        <a className="download" href="" download="">Download CV</a>
        <Link className="fade" to="/p/contact">Contact Me</Link>
      </div>
    </nav>
  );
};

export default Navbar;