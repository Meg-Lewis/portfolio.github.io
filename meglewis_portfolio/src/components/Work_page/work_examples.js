import React from 'react';
import Navbar from '../Navbar/navbar.js';
import CFGProject from '../Projects/cfg_project.js';
import OmnifoodProject from '../Projects/omnifood_project.js';
import HGVProject from '../Projects/hgvtraining_project.js';
import CalculatorProject from '../Projects/calculator.js';
import Contact from '../Contact/contact.js';
import Footer from '../Footer/footer.js';
import '../../universal.css';


function WorkPage () {
    return (
        <div>
             <Navbar></Navbar>
            <div className="hero-container">
                <div>
                <p className="sub-heading">RECENT</p>
                <h1 className="hero-heading">WORK</h1>
                </div>
            </div>
            <CFGProject></CFGProject>
            <OmnifoodProject></OmnifoodProject>
            <HGVProject></HGVProject>
            <CalculatorProject></CalculatorProject>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
}

export default WorkPage;