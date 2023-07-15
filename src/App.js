import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./My-Components/Navbars"
import Home from "./My-Components/Home";
import About from "./My-Components/About";
import Contact from "./My-Components/Contact";
import Learning from "./My-Components/Learning"
import Works from "./My-Components/Works"
import Footer from "./My-Components/footer";
import Nopages from "./My-Components/Nopage";
import Whatsapp from './My-Components/Whatsapp';

function App() {
  return (
    <Router>
      <Navbar tittle="Mindtrail Technologies"/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/learning" element={<Learning />} />
        <Route path="/works" element={<Works />} />
        <Route path="*" element={<Nopages />} />
      </Routes>
      <Whatsapp/>
      <Footer />
    </Router>
  );
}

export default App;

