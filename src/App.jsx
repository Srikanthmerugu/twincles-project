// src/App.jsx
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import HeroPage from './components/HeroPage';
import Services from './components/Services';
import Blog from './components/Blog';
import CTA from './components/CTA';
import Features from './components/Features';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';
import HeropageTwo from './components/HeroPageTwo';
import Home from './home/Home';

function App() {
  return (
    <>
    <Home />
    <Router>
      <div className="min-h-screen bg-sky-50 text-sky-950">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HeroPage />} />
            {/* <Route path="/hero2" element={<HeropageTwo />} /> */}
            {/* Add other routes here if needed */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
    </>
  );
}

export default App;
