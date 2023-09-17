import React from 'react';
import './recent_work.css';
import {useNavigate} from 'react-router-dom';

function RecentWork () {

    const navigate = useNavigate();

    function handleClick(event) {
        navigate('/recentwork');
    }

    return(
        <div>

            <div className="section-container-right">
                <div className="main-text-container-right">
            <h2 className="main-header">Recent Work</h2>
            <p className="main-paragraph">Welcome to the showcase of my recent work, where I proudly present a diverse range of projects that highlight my skills and dedication to web development. Among them, you'll find a collaborative group project, a successful freelance venture, and demonstrations of my coding prowess. Each project encapsulates my commitment to crafting elegant, functional, and user-centric web solutions. To explore in-depth, simply click the button below.</p>
           
            <button className="primary-btn" onClick={handleClick}>
                <p className="btn-text">DIV IN</p></button>
            
            </div>
        </div>

        </div>
    );
}

export default RecentWork;