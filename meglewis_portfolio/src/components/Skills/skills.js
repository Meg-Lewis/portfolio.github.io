import React from 'react';
import './skills.css';

function Skills () {
    return (
        <div>
            <div className="section-container-center">
                <div className="wrapper">
                    <div>
            <h1 className="main-header">Skills</h1>
            <p className="main-paragraph">Discover my skill proficiency levels with a simple hover.</p>
            </div>
    
            <div className="skills-container">


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
                    <p className="skill-text">PYTHON</p>
                </div>
                <div className="skill-item percentage-80">
                    <p className="skill-text">SQL</p>

                    </div>
                </div>

                <div className="skill-row">

                <div className="skill-item percentage-80">
                    <p className="skill-text">REACT</p>
                </div>
                <div className="skill-item percentage-80">
                    <p className="skill-text">NODE.JS</p>
                </div>
                <div className="skill-item percentage-80">
                    <p className="skill-text">EXPRESS</p>
                </div>
                <div className="skill-item percentage-60">
                    <p className="skill-text">API's</p>
                </div>
                <div className="skill-item percentage-80">
                    <p className="skill-text">GIT & GITUHB</p>
                </div>
                <div className="skill-item percentage-60">
                    <p className="skill-text">TESTING</p>

                    </div>
                </div>


                <div className="skill-row">

                <div className="skill-item skill-item percentage-100">
                    <p className="skill-text">UX & UI</p>
                </div>
                <div className="skill-item skill-item percentage-80">
                    <p className="skill-text">JIRA</p>
                </div>
                <div className="skill-item skill-item percentage-100">
                    <p className="skill-text">FIGMA</p>
                </div>
                <div className="skill-item skill-item percentage-100">
                    <p className="skill-text">ADOBE SUITE</p>
                </div>
                <div className="skill-item skill-item percentage-100">
                    <p className="skill-text">SHOPIFY</p>
                </div>
                </div>
                </div>
                </div>
               
               
                

            </div>
        </div>
      
    );
}

export default Skills;