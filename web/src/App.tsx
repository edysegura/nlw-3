import React from 'react';

import './styles/global.css';
import './styles/pages/landing.css';

import logoImage from './images/logo.svg';

function App() {
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

        <a href="#home" className="enter-app"> Enter </a>
      </div>
    </div>
  );
}

export default App;
