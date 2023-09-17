import React from 'react';
import './omnifood_project.css';
import '../../universal.css';
import OmniFoodImage from '../../images/meal_service_website.png';

function OmnifoodProject () {



    return(
        <div>
            <div className="section-container-right">
                <div className="main-text-container-right">
            <h1 className="main-header">Omni Food</h1>
            <p className="main-paragraph">Introducing Omnifood, a food subscription service project that I completed during a web design bootcamp. This project was pivotal in teaching me the significance of UX & UI design principles, as well as the art of crafting responsive and clean code. Omnifood combines my passion for design and coding to create a user-centric and visually appealing experience that reflects my commitment to excellence in web development.</p>
          
            <a target="_blank" href="https://hilarious-youtiao-40bb32.netlify.app/">
            <button className="primary-btn">
                <p className="btn-text">VIEW</p></button>
            </a>

            </div>
            <div className="image-project-wrapper">
                <img src={OmniFoodImage} className="project-image" alt="OmniFood Project" />
                <div className="skills-container-small">
                <div className="skill-row">

<div className="skill-item percentage-100">
    <p className="skill-text">HTML</p>
</div>
<div className="skill-item percentage-100">
    <p className="skill-text">CSS</p>
</div>
<div className="skill-item percentage-100">
    <p className="skill-text">FIGMA</p>
</div>
<div className="skill-item percentage-100">
    <p className="skill-text">UX & UI</p>
</div>
</div>
</div>
            </div>
        </div>
        </div>
    );
}

export default OmnifoodProject;