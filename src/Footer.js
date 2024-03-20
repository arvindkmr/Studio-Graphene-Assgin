import React from 'react';
import './Footer.css'; // Ensure this file exists and is in the correct directory relative to this JS file.
import FacebookIcon from './Assets/facebook.svg'; 
import TwitterIcon from './Assets/twitter.svg';
import InstagramIcon from './Assets/instagram.svg';
import LinkedinIcon from './Assets/Linkedin.svg';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-sections">
         
          <div className="footer-section">
            <h4 className="footer-heading-4">SECTION 1</h4>
            <a href="#!" className="footer-subheading-4"> Subsection</a>
            <a href="#!" className="footer-subheading-4"> Subsection</a>
            <a href="#!" className="footer-subheading-4"> Subsection</a>
            <a href="#!" className="footer-subheading-4"> Subsection</a>
          </div>
          <div className="footer-section">
            <h4 className="footer-heading-4">SECTION 1</h4>
            <a href="#!" className="footer-subheading-4"> Subsection</a>
            <a href="#!" className="footer-subheading-4"> Subsection</a>
            <a href="#!" className="footer-subheading-4"> Subsection</a>
            <a href="#!" className="footer-subheading-4"> Subsection</a>
          </div>
          <div className="footer-section">
            <h4 className="footer-heading-4">SECTION 1</h4>
            <a href="#!" className="footer-subheading-4"> Subsection</a>
            <a href="#!" className="footer-subheading-4"> Subsection</a>
            <a href="#!" className="footer-subheading-4"> Subsection</a>
            <a href="#!" className="footer-subheading-4"> Subsection</a>
          </div>
          <div className="footer-section">
            <h4 className="footer-heading-4">SECTION 1</h4>
            <a href="#!" className="footer-subheading-4"> Subsection</a>
            <a href="#!" className="footer-subheading-4"> Subsection</a>
            <a href="#!" className="footer-subheading-4"> Subsection</a>
            <a href="#!" className="footer-subheading-4"> Subsection</a>
          </div>
          <div className="footer-section">
            <h4 className="footer-heading-4">SECTION 1</h4>
            <a href="#!" className="footer-subheading-4"> Subsection</a>
            <a href="#!" className="footer-subheading-4"> Subsection</a>
            <a href="#!" className="footer-subheading-4"> Subsection</a>
            <a href="#!" className="footer-subheading-4"> Subsection</a>
          </div>
          <div className="footer-section">
            <h4 className="footer-heading-4">SECTION 1</h4>
            <a href="#!" className="footer-subheading-4"> Subsection</a>
            <a href="#!" className="footer-subheading-4"> Subsection</a>
            <a href="#!" className="footer-subheading-4"> Subsection</a>
            <a href="#!" className="footer-subheading-4"> Subsection</a>
          </div>
          <div className="footer-section">
            <h4 className="footer-heading-4">SECTION 1</h4>
            <a href="#!" className="footer-subheading-4"> Subsection</a>
            <a href="#!" className="footer-subheading-4"> Subsection</a>
            <a href="#!" className="footer-subheading-4"> Subsection</a>
            <a href="#!" className="footer-subheading-4"> Subsection</a>
          </div>
        </div>
        <div className="footer-logo">
          <span className="logo-text-small">THIS IS THE</span>
          <br/>
          <span className="logo-text-large">LOGO</span>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p className="footer-bottom-text">
            &copy; 2017. Company. Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor.
          </p>
          
        <div className="footer-social">
        <a href="https://facebook.com" className="social-link">
          <img src={FacebookIcon} alt="Facebook" /> 
        </a>
        <a href="https://twitter.com" className="social-link">
          <img src={TwitterIcon} alt="Twitter" /> 
        </a>
        <a href="https://instagram.com" className="social-link">
          <img src={InstagramIcon} alt="Instagram" /> 
        </a>
        <a href="https://linkedin.com" className="social-link">
          <img src={LinkedinIcon} alt="Linkedin" /> 
        </a>
        <a href="https://facebook.com" className="social-link">
          <img src={FacebookIcon} alt="Facebook" /> 
        </a>
        </div>
      </div>
      </div>
    
    </footer>
  );
}

export default Footer;