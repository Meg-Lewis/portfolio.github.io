import React from 'react';
import './contact.css';
import {Element} from 'react-scroll';

function Contact () {
    return (
        <div>
            <Element name="contact-section">
            <div className="contact-center">
                <div className="contact-container">
            <h3 className="main-header">Contact Me</h3>
            <p className="main-paragraph"> Don't hesitate to reach out—<br></br>
            I'm eager to discuss how I can contribute to your organisation's success and create exceptional web experiences.</p>
            <p className="contact-details">meg3lewis@gmail.com</p>
            <p className="contact-details">07874813413</p>
            </div>
            </div>
            </Element>
        </div>
    );
}

export default Contact;