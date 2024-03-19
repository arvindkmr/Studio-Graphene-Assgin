import React, { useState, useEffect } from 'react';
import './Header.css'; // Ensure this file exists and is in the correct directory relative to this JS file.

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    // Add the event listener
    window.addEventListener('scroll', handleScroll);

    // Remove the event listener on cleanup
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-logo">
        <img src="/path-to-your-logo.png" alt="Logo" className="logo" />
      </div>
      <nav className="header-nav">
        <a href="/about" className="nav-link">ABOUT</a>
        <a href="/community" className="nav-link">COMMUNITY</a>
        <a href="/location" className="nav-link">LOCATION</a>
        <a href="/menu" className="nav-link">OUR MENU</a>
        <a href="/recipes" className="nav-link">RECIPES</a>
      </nav>
      <div className="header-actions">
        <a href="/contact" className="action-link">CONTACT</a>
        <a href="/login" className="action-link">LOGIN</a>
      </div>
    </header>
  );
}

export default Header;
