import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Education from './components/Education/Education';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import CV from './components/CV/CV';
import NotFound from './components/NotFound/NotFound';
import Navbar from './components/Navbar/Navbar';
import './App.css';

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

    <div class="smallScreen">
            <img class="screens" src="small-screen-mockup.png" alt="Phones & Tablets" />
            <div class="details">
                <span class="h2">P phones and tablets soon</span>
                <p class="detail">In the meantime, use a screen with a width 1024 pixels and above.</p>
            </div>
        </div>

            <div id="socialMedia" class="sidebar">
            <ul class="social-media-icons">
                <li><a id="smIcons" href="#"><i class="fi fi-brands-twitter-alt-circle"></i></a></li>
                <li><a id="smIcons" href="#"><i class="fi fi-brands-facebook"></i></a></li>
                <li><a id="smIcons" href="#"><i class="fi fi-brands-linkedin"></i></a></li>
                <li><a id="smIcons" href="#"><i class="fi fi-brands-instagram"></i></a></li>
            </ul>
        </div>
    </>

  );
}

export default App;