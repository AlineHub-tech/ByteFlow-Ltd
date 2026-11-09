import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import LogoImg from '../assets/logo.jpg';
import '../styles/Navbar.css';

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/services', label: 'Services' },
  { to: '/portfolio', label: 'Our work' },
  { to: '/team', label: 'Our team' },
  { to: '/about', label: 'About' },
  { to: '/blog', label: 'Insights' }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('menu-open', isOpen);
    return () => document.body.classList.remove('menu-open');
  }, [isOpen]);

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, []);

  return (
    <header className={`site-header${isOpen ? ' menu-is-open' : ''}`}>
      <nav className="site-nav container" aria-label="Main navigation">
        <Link to="/" className="site-brand" onClick={() => setIsOpen(false)} aria-label="ByteFlow Ltd home">
          <img src={LogoImg} alt="" className="site-brand-mark" />
          <span className="site-brand-copy">
            <strong>ByteFlow<span> Ltd</span></strong>
            <small>Engineering digital success</small>
          </span>
        </Link>

        <button
          type="button"
          className="nav-menu-toggle"
          onClick={() => setIsOpen((open) => !open)}
          aria-expanded={isOpen}
          aria-controls="primary-navigation"
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        <div className={`site-nav-panel${isOpen ? ' is-open' : ''}`} id="primary-navigation">
          <div className="mobile-nav-intro">
            <span className="eyebrow"><span className="eyebrow-dot" /> ByteFlow Ltd</span>
            <h2>Explore our work.</h2>
            <p>Creative design, technology, and visual storytelling.</p>
          </div>
          <div className="site-nav-links">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.end}
                className={({ isActive }) => `site-nav-link${isActive ? ' is-active' : ''}`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
          </div>
          <Link to="/contact" className="site-nav-cta" onClick={() => setIsOpen(false)}>
            Start a project <ArrowUpRight size={16} />
          </Link>
        </div>
      </nav>
      {isOpen && <button className="nav-backdrop" onClick={() => setIsOpen(false)} aria-label="Close navigation" />}
    </header>
  );
};

export default Navbar;
