import React, { useState } from 'react'; // 1. Twongeyemo useState
import { Link } from 'react-router-dom';
import { 
  Facebook, Instagram, Github, Linkedin, 
  Mail, Phone, MapPin, Send, ChevronRight 
} from 'lucide-react';
import LogoImg from '../assets/logo.jpg'; 
import '../styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const whatsappNumber = "+250796023452";
  
  // 2. Ibi bituma twakira imeyili umuntu yanditse
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(""); // Ibi ni ibyerekana niba byakunze

  const handleSubscribe = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    
    // Hano niho uzashyira API ya MailerLite cyangwa Brevo mu gihe kizaza
    // Kuri ubu, reka dushyiremo ko byakunze (Simulated)
    setTimeout(() => {
      console.log("Email subscribed:", email);
      setStatus("Success! Check your inbox.");
      setEmail(""); // Gusiba imeyili nyuma yo kuyohereza
    }, 2000);
  };

  return (
    <footer className="footer-v2">
      <div className="container footer-grid">
        
        {/* 1. Brand Section & Logo */}
        <div className="footer-col brand-col">
          <Link to="/" className="footer-logo-link">
            <img src={LogoImg} alt="ByteFlow Logo" className="footer-brand-logo" />
            <span className="logo-text">ByteFlow<span className="accent">Ltd</span></span>
          </Link>
          <p className="brand-pitch">
            Your premier digital partner in Kigali. We bridge the gap between 
            innovation and reality through world-class tech solutions.
          </p>
          <div className="social-pill-container">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social-pill"><Facebook size={18} /></a>
            <a href="https://instagram.com/byteflow_ltd" target="_blank" rel="noreferrer" className="social-pill"><Instagram size={18} /></a>
            <a href="https://github.com/AlineHub-tech" target="_blank" rel="noreferrer" className="social-pill"><Github size={18} /></a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-pill"><Linkedin size={18} /></a>
          </div>
        </div>

        {/* 2. Quick Links */}
        <div className="footer-col">
          <h4 className="footer-title">Quick Links</h4>
          <ul className="footer-nav-list">
            <li><Link to="/"><ChevronRight size={14} /> Home</Link></li>
            <li><Link to="/about"><ChevronRight size={14} /> About Us</Link></li>
            <li><Link to="/services"><ChevronRight size={14} /> Services</Link></li>
            <li><Link to="/portfolio"><ChevronRight size={14} /> Portfolio</Link></li>
            <li><Link to="/contact"><ChevronRight size={14} /> Contact Us</Link></li>
          </ul>
        </div>

        {/* 3. Contact Details */}
        <div className="footer-col">
          <h4 className="footer-title">Contact Us</h4>
          <div className="contact-info-stack">
            <div className="contact-item">
              <div className="icon-box"><MapPin size={18} /></div>
              <span> Gasabo, Kigali, Rwanda</span>
            </div>
            <div className="contact-item">
              <div className="icon-box"><Phone size={18} /></div>
              <span>{whatsappNumber}</span>
            </div>
            <div className="contact-item">
              <div className="icon-box"><Mail size={18} /></div>
              <span>abettertomorrowf@gmail.com</span>
            </div>
          </div>
        </div>

        {/* 4. Newsletter Section (Yavuguruwe) */}
        <div className="footer-col">
          <h4 className="footer-title">Newsletter</h4>
          <p className="newsletter-text">Subscribe for exclusive tech offers and digital marketing tips.</p>
          <form className="modern-subscribe" onSubmit={handleSubscribe}>
            <input 
              type="email" 
              placeholder="Your Email Address" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
            <button type="submit" className="btn-send">
              <Send size={18} />
            </button>
          </form>
          {/* 3. Message y'inyunganira umukiriya */}
          {status && <p className="status-msg" style={{ fontSize: '12px', marginTop: '10px', color: '#006400' }}>{status}</p>}
        </div>

      </div>

      {/* Footer Bottom Bar */}
      <div className="footer-legal-bar">
        <div className="container bar-flex">
           <p>&copy; {currentYear} ByteFlow Ltd. All Rights Reserved. | Developed by <a href="https://aline-site-seven.vercel.app/"><span class="developer-name">Umugwaneza Aline</span></a></p>
          <div className="legal-links">
            <Link to="/privacy">Privacy Policy</Link>
            <span className="dot"></span>
            <Link to="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
