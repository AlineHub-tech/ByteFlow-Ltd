import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Home, Briefcase, Layout, Info, Phone, BookOpen, ChevronRight } from 'lucide-react';
import LogoImg from '../assets/logo.jpg';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('menu-open', isOpen);
    return () => document.body.classList.remove('menu-open');
  }, [isOpen]);

  return (
    <nav className={`navbar-elite ${isOpen ? 'menu-open' : ''}`}>
      <div className={`nav-backdrop ${isOpen ? 'active' : ''}`} onClick={() => setIsOpen(false)} />
      <div className="container nav-container">
        <Link to="/" className="nav-brand" onClick={() => setIsOpen(false)}>
          <img src={LogoImg} alt="ByteFlow Logo" className="nav-brand-logo" />
          <div className="brand-copy">
            <span className="brand-title">ByteFlow <span className="accent">Ltd</span></span>
            <span className="brand-subtitle">Engineering Digital Success</span>
          </div>
        </Link>

        <div id="navbar-menu" className={`nav-links ${isOpen ? 'active' : ''}`} role="menu">
          <div className="nav-panel-header">
            <span className="nav-panel-title">Menu</span>
            <button type="button" className="nav-close" onClick={() => setIsOpen(false)} aria-label="Close menu">
              <X size={22} />
            </button>
          </div>
          <Link to="/" className="nav-link" onClick={() => setIsOpen(false)} role="menuitem">
            <div className="nav-link-main"><Home size={20} /> <span className="nav-link-title">Home</span> <ChevronRight className="nav-link-arrow" size={16} /></div>
            <div className="nav-link-sub">Go to landing page</div>
          </Link>
          <Link to="/about" className="nav-link" onClick={() => setIsOpen(false)} role="menuitem">
            <div className="nav-link-main"><Info size={20} /> <span className="nav-link-title">About</span> <ChevronRight className="nav-link-arrow" size={16} /></div>
            <div className="nav-link-sub">Learn about our mission</div>
          </Link>
          <Link to="/services" className="nav-link" onClick={() => setIsOpen(false)} role="menuitem">
            <div className="nav-link-main"><Briefcase size={20} /> <span className="nav-link-title">Services</span> <ChevronRight className="nav-link-arrow" size={16} /></div>
            <div className="nav-link-sub">Explore our solutions</div>
          </Link>
          <Link to="/portfolio" className="nav-link" onClick={() => setIsOpen(false)} role="menuitem">
            <div className="nav-link-main"><Layout size={20} /> <span className="nav-link-title">Portfolio</span> <ChevronRight className="nav-link-arrow" size={16} /></div>
            <div className="nav-link-sub">See our latest work</div>
          </Link>
          <Link to="/blog" className="nav-link" onClick={() => setIsOpen(false)} role="menuitem">
            <div className="nav-link-main"><BookOpen size={20} /> <span className="nav-link-title">Blog</span> <ChevronRight className="nav-link-arrow" size={16} /></div>
            <div className="nav-link-sub">Read news and updates</div>
          </Link>
          <Link to="/contact" className="nav-link nav-link-cta" onClick={() => setIsOpen(false)} role="menuitem">
            <div className="nav-link-main"><Phone size={20} /> <span className="nav-link-title">Contact</span> <ChevronRight className="nav-link-arrow" size={16} /></div>
            <div className="nav-link-sub">Get in touch with us</div>
          </Link>
        </div>

        <Link to="/contact" className="nav-cta desktop-only">
          Get Started
        </Link>

        <button type="button" className="mobile-toggle" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle navigation" aria-expanded={isOpen} aria-controls="navbar-menu">
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
