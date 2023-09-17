import React from 'react';
import './cfg_project.css';
import '../../universal.css';
import CFGProjectImage from '../../images/group_project_website.png';
import {useNavigate} from 'react-router-dom';


function CFGProject () {

    const navigate = useNavigate();

    function handleClick(event) {
        navigate('/cfgproject');
    }


    return (
        <div>
            <div className="section-container-left">
                <div className="main-text-container-left">
            <h1 className="main-header">It's Not me, It's You</h1>
            <p className="main-paragraph">During my Code First Girls course, I had the privilege of collaborating on an exciting project. Our team created a captivating React guessing game that connects two players. Participants answer questions about each other, and the better you know your partner, the more likely you are to get the answers right! It was not only a valuable technical experience but I'm proud of the teamwork and creativity that went into this project. I invite you to click the button to find out more.
</p>
            <button className="primary-btn" onClick={handleClick}>
                <p className="btn-text">VIEW</p></button>
            </div>
            <div>
                <img src={CFGProjectImage} className="project-image" alt="Code First Girls Project"/>
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
    <p className="skill-text">SQL</p>
</div>
</div>

<div className="skill-row">

<div className="skill-item percentage-60">
    <p className="skill-text">APIs</p>
</div>
<div className="skill-item percentage-80">
    <p className="skill-text">GITHUB</p>
</div>
<div className="skill-item percentage-60">
    <p className="skill-text">TESTING</p>
</div>
</div>

<div className="skill-row">

<div className="skill-item percentage-80">
    <p className="skill-text">JIRA</p>
</div>
<div className="skill-item percentage-80">
    <p className="skill-text">REACT</p>
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

export default CFGProject;