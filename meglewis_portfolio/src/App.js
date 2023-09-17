import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import Homepage from './components/Homepage/homepage.js';
import WorkPage from './components/Work_page/work_examples.js';
import CFGPage from './Pages/CFGProject.js';
import OmniFoodPage from './Pages/Omnifood.js';
import CalculatorPage from './Pages/Calculator.js';
import Resume from './Pages/resume.js';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/recentwork" element={<WorkPage/>} />
        <Route path="/cfgproject" element={<CFGPage/>} />
        <Route path="/omnifoodproject" element={<OmniFoodPage/>} />
        <Route path="/calculatorproject" element={<CalculatorPage/>} />
        <Route path="/resume" element={<Resume/>} />
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
