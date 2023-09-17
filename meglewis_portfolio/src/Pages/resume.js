import React from 'react';
import Navbar from '../components/Navbar/navbar.js'
import Contact from '../components/Contact/contact.js';
import Footer from '../components/Footer/footer.js';
import Resumep1 from '../images/meg_lewis_resume1.png';
import Resumep2 from '../images/meg_lewis_resume2.png';
import './resume.css';

function Resume () {
    return(
        <div>
            <Navbar></Navbar>
        <img className="resume" src={Resumep1} alt="meg lewis resume page 1"/>
        <img className="resume" src={Resumep2} alt="meg lewis resume page 2" />
        <Contact></Contact>
        <Footer></Footer>
        </div>
        

    );

}

export default Resume;