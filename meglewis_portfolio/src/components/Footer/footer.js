import React from 'react';
import './footer.css';
import Logo from '../../images/logo.png'




function Footer () {




    return (
        <div>
            <div className="footer-container">
            <div className="footer-logo">
            <img className="footer-logo-image" src={Logo} alt="logo" />
                </div>
                <div className="footer-links-container">
                    <a className="footer-link" href="/recentwork">RECENT WORK</a>
                    <a className="footer-link" href="https://www.linkedin.com/in/megan-lewis-935969193/">LINKEDIN</a>
                    <a className="footer-link" href="/resume">RESUME</a>

                </div>
                </div>
        </div>
    );
}

export default Footer;