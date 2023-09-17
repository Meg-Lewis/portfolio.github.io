import React from 'react';
import './navbar.css';
import '../../universal.css';
import {Link as ScrollLink, Element} from 'react-scroll';
import Logo from '../../images/logo.png';
import {useNavigate} from 'react-router-dom';


function Navbar () {

    const navigate = useNavigate();

    function handleClick(event) {
        navigate('/');
    }

    



    return (
        <div>
            <div className="navbar-container">

                <ul className="nav-bar-links">
                    <li>
                        <a href="/" className="nav-link first-link">HOME</a>

                    </li>
                    <li>
                        <a href="/recentwork" className="nav-link second-link">WORK</a>

                    </li>
                </ul>
               

               <div className="logo">
                
                <img className="logo-image" onClick={handleClick} src={Logo} alt="logo" />
                </div>
                <div>
                    

                <ScrollLink
            to="contact-section"
            spy={true}
            smooth={true}
            duration={500}
            offset={-50}
          ><div className="nav-btn">
            <p className="nav-text">CONTACT</p>
          </div>
          </ScrollLink>
          </div>
        



                {/* <button className="nav-btn">CONTACT</button> */}
               

            </div>


        </div>
    );
}

export default Navbar;