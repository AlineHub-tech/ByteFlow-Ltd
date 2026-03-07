import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, MessageCircle, Send, Clock, Globe } from 'lucide-react';
import '../styles/Contact.css';
import contact from '../assets/contact.jpg'; 

const Contact = () => {
  const whatsappNumber = "+250796023452"; 

  return (
    <div className="contact-v14" style={{ width: '100%', overflowX: 'hidden', background: '#020617' }}>
      {/* 1. Hero Header - IFOTO NA GRACE KOSOYE KURI MOBILE */}
      <section className="contact-hero-v14" style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url(${contact})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '60px 15px',
        minHeight: '45vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        boxSizing: 'border-box'
      }}>
        <div style={{ width: '100%', maxWidth: '600px', boxSizing: 'border-box' }}>
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="hero-text-center"
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              padding: '30px 15px',
              borderRadius: '20px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              textAlign: 'center',
              width: '100%',
              boxSizing: 'border-box'
            }}
          >
            <span className="contact-tag">Get In Touch</span>
            <h1 style={{ fontSize: 'clamp(1.8rem, 5vw, 2.8rem)', color: '#fff' }}>Let's Start a <span className="highlight">Project</span></h1>
            <p style={{ color: '#ccc', fontSize: '0.95rem' }}>Ready to transform your vision into a digital reality? Reach out to our team today.</p>
          </motion.div>
        </div>
      </section>

      {/* 2. Main Contact Section - RESPONSIVE GRID FIX */}
      <section className="contact-main container" style={{ padding: '40px 15px', width: '100%', boxSizing: 'border-box' }}>
        <div className="contact-wrapper-grid" style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', 
          gap: '30px',
          width: '100%',
          boxSizing: 'border-box'
        }}>
          
          {/* Left Side: Contact Info */}
          <motion.div 
            className="info-sidebar"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            style={{ width: '100%', boxSizing: 'border-box' }}
          >
            <div className="info-card-v14" style={{ width: '100%', boxSizing: 'border-box' }}>
              <h2>Contact Information</h2>
              <p>Fill out the form and our team will get back to you within 24 hours.</p>

              <div className="contact-links-stack">
                <div className="contact-link-item">
                  <div className="icon-bg"><MapPin size={22} /></div>
                  <div>
                    <h4>Visit Us</h4>
                    <p>Batsinda, Kigali, Rwanda</p>
                  </div>
                </div>

                <div className="contact-link-item">
                  <div className="icon-bg"><Mail size={22} /></div>
                  <div>
                    <h4>Email Us</h4>
                    <p>abettertomorrowf@.gmail.com</p>
                  </div>
                </div>

                <div className="contact-link-item">
                  <div className="icon-bg"><Phone size={22} /></div>
                  <div>
                    <h4>Call Us</h4>
                    <p>+250 796 023 452</p>
                  </div>
                </div>

                <div className="contact-link-item">
                  <div className="icon-bg"><Clock size={22} /></div>
                  <div>
                    <h4>Working Hours</h4>
                    <p>Mon - Sat: 8:00 AM - 9:00 PM</p>
                  </div>
                </div>
              </div>

              <a 
                href={`https://wa.me{whatsappNumber}`} 
                target="_blank" 
                rel="noreferrer"
                className="v14-whatsapp-btn"
              >
                <MessageCircle size={20} /> Chat on WhatsApp
              </a>
            </div>
          </motion.div>

          {/* Right Side: Form */}
          <motion.div 
            className="form-container-v14"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            style={{ width: '100%', boxSizing: 'border-box' }}
          >
            <form className="v14-form" onSubmit={(e) => e.preventDefault()} style={{ width: '100%', boxSizing: 'border-box' }}>
              <div className="v14-form-grid" style={{ width: '100%', boxSizing: 'border-box' }}>
                <div className="v14-input-box">
                  <label>Full Name</label>
                  <input type="text" placeholder="John Doe" required style={{ width: '100%', boxSizing: 'border-box' }} />
                </div>
                <div className="v14-input-box">
                  <label>Email Address</label>
                  <input type="email" placeholder="john@example.com" required style={{ width: '100%', boxSizing: 'border-box' }} />
                </div>
              </div>
              
              <div className="v14-input-box">
                <label>Subject</label>
                <input type="text" placeholder="e.g. Website Development" required style={{ width: '100%', boxSizing: 'border-box' }} />
              </div>

              <div className="v14-input-box">
                <label>How can we help?</label>
                <textarea rows="6" placeholder="Tell us about your project goals..." style={{ width: '100%', boxSizing: 'border-box' }}></textarea>
              </div>

              <button type="submit" className="v14-submit-btn" style={{ width: '100%' }}>
                Send Message <Send size={18} />
              </button>
            </form>
          </motion.div>
          
        </div>
      </section>

      {/* Map Teaser */}
      <section className="location-teaser container" style={{ padding: '40px 15px', width: '100%', boxSizing: 'border-box' }}>
        <div className="teaser-box" style={{ width: '100%', boxSizing: 'border-box' }}>
          <Globe className="spinning-globe" size={40} />
          <h3>Global Standards, Local Expertise.</h3>
          <p>Serving clients in Kigali and beyond with precision engineering.</p>
        </div>
      </section>
    </div>
  );
};

export default Contact;
