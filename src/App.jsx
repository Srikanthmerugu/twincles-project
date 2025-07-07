// src/App.jsx
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './home/Home';
import Footer from './components/Footer';
import AboutPage from './components/pages/AboutPage';
import Contact from './components/pages/Contact';



function App() {
  return (
    <>
    <Router>
      <div className="min-h-screen bg-sky-50 text-sky-950">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<Contact />} />
           
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
    </>
  );
}

export default App;
