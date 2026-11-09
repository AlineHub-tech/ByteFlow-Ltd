import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import LogoImg from '../assets/logo.jpg';
import '../styles/Footer.css';

const Footer = () => {
  const year = new Date().getFullYear();
  const whatsappNumber = '250796023452';

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-cta">
          <div>
            <span className="eyebrow footer-eyebrow">Have a project in mind?</span>
            <h2>Let&apos;s make something meaningful.</h2>
            <p>Tell us what you&apos;re building. We&apos;ll help you find the right next step.</p>
          </div>
          <Link to="/contact" className="footer-cta-link">Talk to our team <ArrowUpRight size={17} /></Link>
        </div>

        <div className="footer-main">
          <div className="footer-brand-block">
            <Link to="/" className="footer-brand" aria-label="ByteFlow Ltd home">
              <img src={LogoImg} alt="" className="footer-brand-mark" />
              <span><strong>ByteFlow Ltd</strong><small>Engineering Digital Success.</small></span>
            </Link>
            <p>Creative design, thoughtful technology, and visual storytelling for brands ready to move forward.</p>
            <div className="footer-socials" aria-label="Social media">
              <a href="https://www.instagram.com/byteflow_ltd" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={18} /></a>
              <a href="https://www.facebook.com/profile.php?id=61588130300960" target="_blank" rel="noreferrer" aria-label="Facebook"><Facebook size={18} /></a>
              <a href="https://www.linkedin.com/company/a-better-t-solutions/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a>
            </div>
          </div>

          <div className="footer-column">
            <h3>Explore</h3>
            <Link to="/">Home</Link>
            <Link to="/about">About ByteFlow</Link>
            <Link to="/services">Services</Link>
            <Link to="/portfolio">Our work</Link>
            <Link to="/team">Our team</Link>
            <Link to="/blog">Insights</Link>
          </div>

          <div className="footer-column footer-contact">
            <h3>Get in touch</h3>
            <a href="mailto:byteflowltd9@gmail.com"><Mail size={16} /> byteflowltd9@gmail.com</a>
            <a href={`tel:+${whatsappNumber}`}><Phone size={16} /> +250 796 023 452</a>
            <a href="https://wa.me/250796023452" target="_blank" rel="noreferrer"><ArrowUpRight size={16} /> WhatsApp us</a>
            <span><MapPin size={16} /> Kigali, Rwanda</span>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {year} ByteFlow Ltd. All rights reserved.</span>
          <span>Creative design. Powerful technology. Meaningful experiences.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
