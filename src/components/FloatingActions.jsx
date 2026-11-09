import React, { useEffect, useState } from 'react';
import { ArrowUp, Check, MessageCircle, X } from 'lucide-react';
import '../styles/FloatingActions.css';

const FloatingActions = () => {
  const [showScroll, setShowScroll] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScroll(window.scrollY > 500);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, []);

  return (
    <div className="floating-actions">
      {isOpen && (
        <aside className="quick-help-panel" aria-label="ByteFlow quick help">
          <div className="quick-help-header">
            <span className="quick-help-mark">B.</span>
            <div><strong>ByteFlow quick help</strong><small>Creative & technology studio · Kigali</small></div>
            <button type="button" onClick={() => setIsOpen(false)} aria-label="Close quick help"><X size={18} /></button>
          </div>
          <div className="quick-help-body">
            <p>Welcome! We help businesses with:</p>
            <ul>
              <li><Check size={15} /> Graphic design & branding</li>
              <li><Check size={15} /> Website design & development</li>
              <li><Check size={15} /> Photography & videography</li>
              <li><Check size={15} /> Creative digital content</li>
            </ul>
            <p>Tell us what you&apos;re working on and our team will get back to you.</p>
          </div>
          <a href="https://wa.me/250796023452?text=Hello%20ByteFlow%20Ltd%2C%20I%27d%20like%20to%20discuss%20a%20project." target="_blank" rel="noreferrer" className="quick-help-contact">
            <MessageCircle size={17} /> Continue on WhatsApp
          </a>
        </aside>
      )}

      <div className="floating-action-row">
        {showScroll && (
          <button type="button" className="scroll-top-button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Scroll to top">
            <ArrowUp size={19} />
          </button>
        )}
        <button type="button" className={`quick-help-trigger${isOpen ? ' is-open' : ''}`} onClick={() => setIsOpen((open) => !open)} aria-expanded={isOpen} aria-label={isOpen ? 'Close ByteFlow quick help' : 'Talk to ByteFlow'}>
          {isOpen ? <X size={23} /> : <MessageCircle size={23} />}
        </button>
        {!isOpen && <span className="quick-help-tooltip">Talk to ByteFlow</span>}
      </div>
    </div>
  );
};

export default FloatingActions;
