import React, { useState, useEffect } from 'react';
import { X, ArrowUp, MessageCircle } from 'lucide-react';
import '../styles/FloatingActions.css';

import ByteFlowLogo from '../assets/logo.jpg'; 

const whatsappNumber = '250796023452';
const whatsappMessage = encodeURIComponent('Hello ByteFlow Ltd, I need a business website or digital service quote.');
const whatsappLink = `https://whatsapp.com{whatsappNumber}&text=${whatsappMessage}`;

const FloatingActions = () => {
  const [showScroll, setShowScroll] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.pageYOffset > 320);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bf-floating-container">
      
      {/* 1. AGASANDUKU KA CHAT WINDOW */}
      {isOpen && (
        <div className="bf-chat-window">
          {/* Header */}
          <div className="bf-chat-header">
            <div className="bf-chat-profile">
              <img src={ByteFlowLogo} alt="ByteFlow Logo" className="bf-chat-avatar-img" />
              <div>
                <h4 className="bf-chat-title">ByteFlow Assistant</h4>
                <p className="bf-chat-status">
                  <span className="bf-status-dot"></span>
                  Online | Fast Response
                </p>
              </div>
            </div>
            {/* Gufunga bikozwe gusa n'iyi bouton y'aka X */}
            <button onClick={() => setIsOpen(false)} className="bf-close-btn" aria-label="Close chat">
              <X size={18} />
            </button>
          </div>

          {/* Chat Body (Hano hasi hasigaye hamanuka neza) */}
          <div className="bf-chat-body">
            
            {/* Quick Overview Card */}
            <div className="bf-company-card">
              <h5>Who We Are</h5>
              <p>ByteFlow Ltd is a premier digital agency specializing in engineering high-performing tech solutions that drive business growth.</p>
              
              <h5 style={{ marginTop: '14px' }}>Our Services</h5>
              <div className="bf-services-list">
                <div className="bf-service-item">
                  <strong>🌐 Website Development:</strong> Corporate sites, E-commerce stores, Web apps, Custom dashboards.
                </div>
                <div className="bf-service-item">
                  <strong>🎨 Graphic Design:</strong> Logo identity kits, Social media templates, Brand identity design.
                </div>
                <div className="bf-service-item">
                  <strong>☁️ Web Hosting:</strong> Secure cloud web hosting, corporate emails, automated daily backups.
                </div>
                <div className="bf-service-item">
                  <strong>🪪 Website Domain Name:</strong> Local .rw registration and global domain transfers with DNS control.
                </div>
                <div className="bf-service-item">
                  <strong>📈 Digital Marketing & SEO:</strong> Google #1 SEO Ranking, Meta advertising, content strategy.
                </div>
                <div className="bf-service-item">
                  <strong>🎥 Videography:</strong> Corporate commercials, high-converting social media reels, events.
                </div>
                <div className="bf-service-item">
                  <strong>📸 Photography:</strong> High-end product photoshoot, team headshots, corporate events.
                </div>
                <div className="bf-service-item">
                  <strong>📂 Office & Documentation:</strong> Report formatting, business translations, spreadsheets.
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="bf-chat-msg">
              <img src={ByteFlowLogo} alt="BF" className="bf-msg-avatar-img" />
              <div className="bf-msg-text">
                Hello! 👋 Welcome to <strong>ByteFlow Ltd</strong>. We are ready to transform your ideas into powerful digital realities.
              </div>
            </div>

            <div className="bf-chat-msg">
              <img src={ByteFlowLogo} alt="BF" className="bf-msg-avatar-img" />
              <div className="bf-msg-text">
                Get quick service details and pricing. For more info contact us on WhatsApp.
              </div>
            </div>
          </div>

          {/* Footer Button */}
          <div className="bf-chat-footer">
            <a href={whatsappLink} target="_blank" rel="noreferrer" className="bf-whatsapp-submit">
              <MessageCircle size={18} fill="currentColor" />
              <span>Start Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      )}

      {/* 2. AGACIRCLE GIFITE LOGO (FLOATING BUBBLE) */}
      <div className="bf-bubble-row">
        {!isOpen && (
          <div className="bf-chat-tooltip">
            Talk to ByteFlow! ⚡
          </div>
        )}
        
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="bf-whatsapp-bubble"
          aria-label="Open ByteFlow Assistant"
        >
          {isOpen ? (
            <X size={24} />
          ) : (
            <img src={ByteFlowLogo} alt="ByteFlow Logo" className="bf-bubble-logo-img" />
          )}
        </button>
      </div>

      {/* 3. SCROLL TO TOP */}
      {showScroll && (
        <button type="button" onClick={scrollToTop} className="bf-scroll-top" aria-label="Scroll to top">
          <ArrowUp size={18} />
        </button>
      )}

    </div>
  );
};

export default FloatingActions;
