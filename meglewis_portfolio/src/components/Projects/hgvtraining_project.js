import React from 'react';
import './hgvtraining_project.css';
import '../../universal.css';
import HGVImage from '../../images/hgv_training_website.png';

function HGVProject () {
    return (
        <div>
            <div className="section-container-left">
                <div className="main-text-container-left">
            <h1 className="main-header">HGV Training</h1>
            <p className="main-paragraph">In a recent freelance project, I had the privilege of leading the complete redesign of a website for a client in the HGV training industry. The website was in need of significant improvements so I began by conducting a comprehensive website audit to identify areas for enhancement. Throughout the project, I maintained regular communication with the client, actively listening to their feedback and insights. The result was a successful collaboration that left the client delighted with the outcome. While the website is not yet live due to the ongoing transition of their rebrand, I invite you to view my figma file.</p>
            <a target="_blank" href="https://www.figma.com/file/j2L5JiYSvawzTKFoOJ0tSH/CELTIC-HGV-TRAINING-WEBSITE?type=design&node-id=0-1&mode=design&t=43abAiiMDJT9EBUY-0">
            <button className="primary-btn">
                <p className="btn-text">VIEW</p></button>
            </a>
            </div>
            <div>
                <img src={HGVImage} className="project-image" alt="HGV Training" />
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

export default HGVProject;