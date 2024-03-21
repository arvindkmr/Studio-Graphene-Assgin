import React from 'react'
import './Contact.css'
export default function Contact() {
  return (
      <div className="contact-section">
        <div className="contact-header">
        <h2>COLLABORATE<br /><span>WITH US</span></h2> {/* Updated to include "With Us" in a <span> */}
        <p className="contact-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
        </p>
      </div>
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Name" />
          </div>
          <div className="form-group">
            <label htmlFor="surname">Surname</label>
            <input type="text" id="surname" name="surname" placeholder="Surname" />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input type="tel" id="phone" name="phone" placeholder="Phone" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" name="email" placeholder="Email" />
          </div>
          <div className="form-group">
            <label htmlFor="experience">Experience</label>
            <select id="experience" name="experience">
              <option value="">Select</option>
              {/* Additional options here */}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="source">Where did you hear about us?</label>
            <select id="source" name="source">
              <option value="">Select</option>
              {/* Additional options here */}
            </select>
          </div>
          <div className="form-group">
            <button type="submit">SEND</button>
          </div>
        </form>
      </div>
    );
  }

