import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Menu, X, Home, Briefcase, Layout, Info, Phone, Cpu 
} from 'lucide-react';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar-elite">
      <div className="container nav-container">
        {/* Logo Section */}
        <Link to="/" className="nav-logo" onClick={() => setIsOpen(false)}>
          <Cpu className="logo-icon" />
          ByteFlow<span className="green-txt">Ltd</span>
        </Link>

        {/* Desktop Menu */}
        <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <Link to="/" className="nav-item" onClick={() => setIsOpen(false)}>
            <Home size={18} /> Home
          </Link>
          <Link to="/about" className="nav-item" onClick={() => setIsOpen(false)}>
            <Info size={18} /> About
          </Link>
          <Link to="/services" className="nav-item" onClick={() => setIsOpen(false)}>
            <Briefcase size={18} /> Services
          </Link>
          <Link to="/portfolio" className="nav-item" onClick={() => setIsOpen(false)}>
            <Layout size={18} /> Portfolio
          </Link>
        </div>

        {/* Contact Button Desktop */}
        <Link to="/contact" className="nav-contact-btn">
          <Phone size={18} /> Contact Us
        </Link>

        {/* Mobile Toggle */}
        <div className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
