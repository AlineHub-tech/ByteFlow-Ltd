import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Import Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Import Pages
import Home from './pages/Home';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
// KOSOYE: Hamagara BlogDetail hano
import BlogDetail from './pages/BlogDetail'; 

// Global Styles
import './styles/global.css';

function App() {
  return (
    <div className="app">
      {/* Navbar igaragara kuri pages zose */}
      <Navbar />
      
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          
          {/* KOSOYE: Iyi nzira niyo ituma ukanze "Read Article" page y'inkuru yuzuye ifunguka */}
          <Route path="/blog/:id" element={<BlogDetail />} />
        </Routes>
      </main>

      {/* Footer igaragara hasi kuri pages zose */}
      <Footer />
    </div>
  );
}

export default App;
