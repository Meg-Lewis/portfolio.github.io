import React from 'react';
import Navbar from '../Navbar/navbar.js'
import About from '../About/about.js'
import RecentWork from '../Recent_work/recent_work.js'
import Skills from '../Skills/skills.js';
import Contact from '../Contact/contact.js';
import Footer from '../Footer/footer.js';
import '../../universal.css';
import './homepage.css';



function Homepage() {

    return (
        <div>
        
            <Navbar></Navbar>

            <div className="hero-container">
                <div>
                <p className="sub-heading">INTRODUCING</p>
                <h1 className="hero-heading">WEBFOLIO</h1>
                </div>
            </div>
          
            <About></About>
            <RecentWork></RecentWork>
            <Skills></Skills>
            <Contact></Contact>
            <Footer></Footer>

        </div>
    );
}

export default Homepage;