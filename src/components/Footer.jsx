import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Github, Linkedin, Mail, Phone, MapPin, Send, ChevronRight } from 'lucide-react';
import LogoImg from '../assets/logo.jpg';
import '../styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const whatsappNumber = '250796023452';

  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    setStatus('Sending...');

    setTimeout(() => {
      setStatus('Success! Check your inbox.');
      setEmail('');
    }, 1500);
  };

  return (
    <footer className="footer-modern">
      <div className="container footer-top">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            <img src={LogoImg} alt="ByteFlow Logo" className="footer-brand-logo" />
            <div>
              <span className="footer-brand-title">ByteFlow <span className="accent">Ltd</span></span>
              <p className="footer-brand-text">Digital engineering and business growth for modern teams.</p>
            </div>
          </Link>

          <div className="footer-social">
            <a href="https://www.facebook.com/profile.php?id=61588130300960" target="_blank" rel="noreferrer" aria-label="Facebook">
              <Facebook size={18} />
            </a>
            <a href="https://www.instagram.com/byteflow_ltd" target="_blank" rel="noreferrer" aria-label="Instagram">
              <Instagram size={18} />
            </a>
            <a href="https://github.com/AlineHub-tech" target="_blank" rel="noreferrer" aria-label="Github">
              <Github size={18} />
            </a>
            <a href="https://www.linkedin.com/company/a-better-t-solutions/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <Linkedin size={18} />
            </a>
          </div>
        </div>

        <div className="footer-links-row">
          <div className="footer-column">
            <h4 className="footer-title">Explore</h4>
            <ul className="footer-list">
              <li><Link to="/"><ChevronRight size={14} /> Home</Link></li>
              <li><Link to="/about"><ChevronRight size={14} /> About</Link></li>
              <li><Link to="/services"><ChevronRight size={14} /> Services</Link></li>
              <li><Link to="/portfolio"><ChevronRight size={14} /> Portfolio</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4 className="footer-title">Services</h4>
            <ul className="footer-list">
              <li><Link to="/services"><ChevronRight size={14} /> Web Development</Link></li>
              <li><Link to="/services"><ChevronRight size={14} /> Brand Design</Link></li>
              <li><Link to="/services"><ChevronRight size={14} /> Digital Marketing</Link></li>
              <li><Link to="/services"><ChevronRight size={14} /> Support & Maintenance</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4 className="footer-title">Contact</h4>
            <ul className="footer-contact-list">
              <li><MapPin size={16} /> <span>Gasabo, Kigali, Rwanda</span></li>
              <li><Phone size={16} /> <a href={`tel:+${whatsappNumber}`} aria-label="Call ByteFlow">+{whatsappNumber}</a></li>
              <li><Mail size={16} /> <a href="mailto:byteflowltd9@gmail.com" aria-label="Email ByteFlow">byteflowltd9@gmail.com</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4 className="footer-title">Newsletter</h4>
            <p className="footer-note">Subscribe for updates on design, strategy, and new launches.</p>
            <form className="footer-subscribe" onSubmit={handleSubscribe}>
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit">
                <Send size={16} />
              </button>
            </form>
            {status && <p className="subscribe-status">{status}</p>}
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-copy">© {currentYear} ByteFlow Ltd. All rights reserved.</p>
        <div className="footer-legal-links">
          <Link to="/privacy">Privacy Policy</Link>
          <span className="footer-divider" />
          <Link to="/terms">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
