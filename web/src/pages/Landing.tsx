import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import '../styles/pages/landing.css';

import logoImage from '../images/logo.svg';

function Landing() {
  return (
    <div id="landing-page">
      <div className="content-wrapper">
        <img src={logoImage} alt="Happy" />

        <main>
          <h1>Bring the happiness to the world</h1>
          <p>Pay a visit to the orphanage and change the day of children</p>
        </main>

        <div className="location">
          <strong>Santa Rita</strong>
          <span>Minas Gerais</span>
        </div>

        <Link to="/app" className="enter-app">
          <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)" />
        </Link>
      </div>
    </div>
  );
}

export default Landing;