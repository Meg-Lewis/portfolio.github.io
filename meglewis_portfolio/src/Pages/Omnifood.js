import React from 'react';
import '../universal.css';
import Navbar from '../components/Navbar/navbar.js'
import Contact from '../components/Contact/contact.js';
import Footer from '../components/Footer/footer.js';
import ProjectVideo from '../Videos/Omnifood.mp4';
import {useNavigate} from 'react-router-dom';

function OmniFoodPage () {

    const navigate = useNavigate();

    function handleClick(event) {
        navigate('/recentwork');


    }

    return(
        <div>
              <Navbar></Navbar>
        <div className="hero-container">
                <div>
                <p className="sub-heading">OMNIFOOD</p>
                <h1 className="hero-heading">PROJECT</h1>
                </div>
            </div>
            <div className="project-intro-container">
                <h2 className="project-title">Omnifood Project</h2>
                <p className="project-paragraph">Hi there, I'm Megan Lewis. I am a driven web developer from Cardiff with a background in luxury Womenswear business ownership. Sponsored by Admiral for my place on Code First Girls, I'm driven and passionate about web development. I'm innately creative with a strong work ethic who thrives on challenges.</p>
                <p>Click the video below to see the project in action</p>

            </div>
            <div>
                <video className="project-video" src={ProjectVideo} controls />

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
export default OmniFoodPage;