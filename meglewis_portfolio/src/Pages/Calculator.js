import React from 'react';
import '../universal.css';
import Navbar from '../components/Navbar/navbar.js'
import Contact from '../components/Contact/contact.js';
import Footer from '../components/Footer/footer.js';
import ProjectVideo from '../Videos/Calculator.mp4';
import {useNavigate} from 'react-router-dom';


function CalculatorPage () {

    const navigate = useNavigate();

    function handleClick(event) {
        navigate('/recentwork');
    }

    return(
        <div>
            <Navbar></Navbar>
        <div className="hero-container">
                <div>
                <p className="sub-heading">CALCULATOR</p>
                <h1 className="hero-heading">PROJECT</h1>
                </div>
            </div>
            <div className="project-intro-container">
                <h2 className="project-title">Calculator Project</h2>
                <p className="project-paragraph">Here's the calculator in action, hosted on a local tunnel. This video demonstrates my proficiency in React, where I crafted the calculator's user interface, but also highlights my skills in setting up the local environment using Express, Node.js, and local tunnel technology. The calculator seasmlessly performs its functions including catching an exception when the users inputs characters instead of numbers.</p>

            </div>
            <div>
                <video className="project-video" src={ProjectVideo} controls />

            </div>
            <div>
                <p>Source Code Available from 21/09/23</p>
            </div>

            <div>
                <button className="secondary-btn" onClick={handleClick}>
                    <p className="btn-text">BACK TO WORK</p></button>
            </div>

        <Contact></Contact>
        <Footer></Footer>

        </div>
    );
}

export default CalculatorPage;