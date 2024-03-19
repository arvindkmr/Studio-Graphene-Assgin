import React from 'react';
import './Footer.css'; // Ensure this file exists and is in the correct directory relative to this JS file.

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-sections">
          <div className="footer-section">
            <h4>SECTION 1</h4>
            <a href="#!">Subsection</a>
            <a href="#!">Subsection</a>
            <a href="#!">Subsection</a>
            <a href="#!">Subsection</a>
          </div>
          <div className="footer-section">
            <h4>SECTION 1</h4>
            <a href="#!">Subsection</a>
            <a href="#!">Subsection</a>
            <a href="#!">Subsection</a>
            <a href="#!">Subsection</a>
          </div><div className="footer-section">
            <h4>SECTION 1</h4>
            <a href="#!">Subsection</a>
            <a href="#!">Subsection</a>
            <a href="#!">Subsection</a>
            <a href="#!">Subsection</a>
          </div>
          <div className="footer-section">
            <h4>SECTION 1</h4>
            <a href="#!">Subsection</a>
            <a href="#!">Subsection</a>
            <a href="#!">Subsection</a>
            <a href="#!">Subsection</a>
          </div>
          <div className="footer-section">
            <h4>SECTION 1</h4>
            <a href="#!">Subsection</a>
            <a href="#!">Subsection</a>
            <a href="#!">Subsection</a>
            <a href="#!">Subsection</a>
          </div>
        
        </div>
        <div className="footer-logo">
          <span>THIS IS THE LOGO</span>
        </div>
      </div>
      <>
      <div className="footer-social">
        <a href="https://facebook.com" className="social-link">f</a>
        <a href="https://twitter.com" className="social-link">t</a>
        <a href="https://instagram.com" className="social-link">in</a>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2017. Company. Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor.</p>
      </div>
      </>
    </footer>
  );
}

export default Footer;