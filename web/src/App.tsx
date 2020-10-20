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
      </div>
    </div>
  );
}

export default App;
