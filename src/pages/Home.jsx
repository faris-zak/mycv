import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

function Home(){

  useEffect(() => {
    document.title = "P | Home";
  }, []);

  return(
    <>
      <main>
          <section className="intro">
              <div className="background">
                  <div className="intro-header">
                      <h3>Welcome, I'm</h3>
                      <h1>Al-Faris Mujahid</h1>
                  </div>
                  <div class="intro-info">
                      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat asperiores obcaecati laboriosam saepe dolorem ullam necessitatibus excepturi exercitationem repellat omnis est, consequuntur voluptas recusandae cupiditate id amet laborum, magni provident quisquam, sunt nostrum dignissimos atque. Neque enim officiis voluptatem tempore eum alias qui nam, ipsam magni quasi quae minus. Vel.</p>
                  </div>
                  <div className="intro-buttons nav-buttons">
                      <a className="download-button" href="Skills.jsx" download="Skills.jsx">Download CV</a>
                      <Link className="contact-button" to="/p/contact">More info</Link>
                  </div>
              </div>
          </section>
      </main>

      <footer>
          <div>
              <img src="./public/assets/images/microsoft-pilot.jpeg" alt="Image" />
              <div className="circle"></div>
          </div>
      </footer>
    </>
  );
};

export default Home