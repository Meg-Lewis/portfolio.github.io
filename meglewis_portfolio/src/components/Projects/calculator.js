import React from 'react';
import './calculator.css';
import '../../universal.css';
import CalculatorImage from '../../images/calculator.png';
import {useNavigate} from 'react-router-dom';

function CalculatorProject () {

    const navigate = useNavigate();

    function handleClick(event) {

        navigate('/calculatorproject');

    }

    return(
        <div>
            <div className="section-container-right">
                <div className="main-text-container-right">
            <h1 className="main-header">Calculator</h1>
            <p className="main-paragraph">During my CFG Degree journey, I undertook a project aimed at creating a user-friendly calculator that could display the results accurately. The task not only involved building the calculator but also challenged me to host it on both a local server and a local tunnel. To achieve this, I harnessed the power of Express and Node.js, showcasing my expertise in server-side scripting and routing. This project stands as a testament to my proficiency in web development, demonstrating my ability to craft functional and intuitive web applications while mastering the intricacies of setting up a local environment for testing and development.</p>
            <button className="primary-btn" onClick={handleClick}>
                <p className="btn-text">VIEW</p></button>
            </div>
            <div className="image-project-wrapper">
                <img src={CalculatorImage} className="project-image" alt="calculator" />
                <div className="skills-container-small">
                <div className="skill-row">

<div className="skill-item percentage-100">
    <p className="skill-text">HTML</p>
</div>
<div className="skill-item percentage-100">
    <p className="skill-text">CSS</p>
</div>
<div className="skill-item percentage-80">
    <p className="skill-text">JAVASCRIPT</p>
</div>
<div className="skill-item percentage-80">
    <p className="skill-text">EXPRESS</p>
</div>
</div>
<div className="skill-row">

<div className="skill-item percentage-80">
    <p className="skill-text">NODE.JS</p>
</div>
<div className="skill-item percentage-60">
    <p className="skill-text">LOCAL TUNNEL</p>
</div>
</div>
</div>
            </div>
        </div>
        </div>

    );
}

export default CalculatorProject;