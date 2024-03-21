
import React from 'react';
import './Contact.css';
import downArrow from './Assets/down-arrow.svg';

export default function Contact() {
    return (
        <div className="contact-section">
            <div className="contact-header">
                <h2>COLLABORATE<br /><span>WITH US</span></h2>
                <div className='contact-description'>

                <p className="contact-description-1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <p className="contact-description-2">
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore

                </p>
                </div>
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
                    <select id="experience" name="experience" style={{ backgroundImage: `url(${downArrow})` }}>
                        <option value="">Select</option>
                        {/* Additional options here */}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="source">Where did you hear about us?</label>
                    <select id="source" name="source" style={{ backgroundImage: `url(${downArrow})` }}>
                        <option value="">Select</option>
                        {/* Additional options here */}
                    </select>

                </div>
                <div className="form-group">
                    <button type="submit" className="send-button">SEND</button>
                </div>
            </form>
        </div>
    );
}