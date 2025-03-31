// src/components/LandingPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <img className="background-image" src="background.jpg" alt="background" />
      <div className="content">
        <h1>Company Name</h1>
        <p>We offer the best houseplants for your home!</p>
        <Link to="/products">
          <button className="get-started-btn">Get Started</button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
