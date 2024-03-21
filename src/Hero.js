import React from 'react';
import './Hero.css';
import heroImage from './Assets/Hero.jpeg';
import stampImage from './Assets/stamp.svg'; // Importing the stamp image

const Hero = () => {
  return (
    <div className="hero-section" style={{ backgroundImage: `url(${heroImage})` }}>
      <div className="stamp-container">
        <img src={stampImage} alt="Stamp" className="stamp-image" />
      </div>
      <h1 className="hero-main-title">THE BEST FOODIE</h1>
      <h1 className="hero-highlight-title">EXPERIENCE</h1>
      <p className="hero-subtitle">NOW IN LONDON</p>
    </div>
  );
};

export default Hero;
