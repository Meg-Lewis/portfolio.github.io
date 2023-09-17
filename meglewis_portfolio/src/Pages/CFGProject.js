import React from 'react';
import './CFGProject.css';
import '../universal.css';
import Navbar from '../components/Navbar/navbar.js'
import Contact from '../components/Contact/contact.js';
import Footer from '../components/Footer/footer.js';
import ProjectVideo from '../Videos/INYIM.mp4';
import {useNavigate} from 'react-router-dom';

function CFGPage () {

    const navigate = useNavigate();

    function handleClick(event) {
        navigate('/recentwork');
    }




    return (
        <div>
        <Navbar></Navbar>
        <div className="hero-container">
                <div>
                <p className="sub-heading">CFG</p>
                <h1 className="hero-heading">PROJECT</h1>
                </div>
            </div>
            <div className="project-intro-container">
                <h2 className="project-title">CFG Group Project</h2>
                <p className="project-paragraph">As the project manager and design lead of our team, I took on a dual role that allowed me to orchestrate and shape the project's success. I structured our team's progress by hosting regular Scrum meetings, ensuring that everyone remained aligned with our goals and tasks. On the design front, I crafted the wireframe and user profiles, shaping the visual and interactive aspects of our game. <br></br><br></br>Beyond design, I delved into the technical aspects, developing the API that seamlessly pulled questions from our SQL database. One of the standout features I implemented was the quiz carousel, which added an engaging element to our game. Throughout the project, I prioritised strong teamwork and communication, fostering a collaborative environment where ideas thrived. I also maintained a meticulous approach to version control, providing regular Github updates to ensure smooth project development.</p>
               <a target ="_blank"href="https://www.figma.com/file/lZyM1saI5VZifNJMCQC0RK/CFG-GROUP-HOMEWORK?type=design&node-id=2-2074&mode=design&t=43abAiiMDJT9EBUY-0">
                <button className="secondary-btn">
                    <p className="btn-text">VIEW FIGMA FILE</p></button>
                </a>
                <p>Click the video below to see the project in action</p>

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

export default CFGPage;