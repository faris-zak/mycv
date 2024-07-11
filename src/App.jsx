import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Experience from './pages/Experience';
import Education from './pages/Education';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import CV from './pages/CV';
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <>
        <Router>
      <div>
        <Navbar />
        <Routes>
          <Route exact path="/p/" element={<Home />} />
          <Route path="/p/about" element={<About />} />
          <Route path="/p/experience" element={<Experience />} />
          <Route path="/p/education" element={<Education />} />
          <Route path="/p/skills" element={<Skills />} />
          <Route path="/p/contact" element={<Contact />} />
          <Route path="/p/cv" element={<CV />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>

    <div className="smallScreen">
            <img className="screens" src="./public/assets/images/small-screen-mockup.png" alt="Phones & Tablets" />
            <div className="details">
                <span className="h2">P phones and tablets soon</span>
                <p className="detail">In the meantime, use a screen with a width 1024 pixels and above.</p>
            </div>
        </div>

            <div id="socialMedia" className="sidebar">
            <ul className="social-media-icons">
                <li><a id="smIcons" href="#"><i className="fi fi-brands-twitter-alt-circle"></i></a></li>
                <li><a id="smIcons" href="#"><i className="fi fi-brands-facebook"></i></a></li>
                <li><a id="smIcons" href="#"><i className="fi fi-brands-linkedin"></i></a></li>
                <li><a id="smIcons" href="#"><i className="fi fi-brands-instagram"></i></a></li>
            </ul>
        </div>
    </>

  );
}

export default App;