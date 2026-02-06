import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, MessageCircle, Send, Clock, Globe } from 'lucide-react';
import '../styles/Contact.css';

const Contact = () => {
  const whatsappNumber = "+250796023452"; 

  return (
    <div className="contact-v14">
      {/* Hero Header */}
      <section className="contact-hero-v14">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="hero-text-center"
          >
            <span className="contact-tag">Get In Touch</span>
            <h1>Let's Start a <span className="highlight">Project</span></h1>
            <p>Ready to transform your vision into a digital reality? Reach out to our team today.</p>
          </motion.div>
        </div>
      </section>

      <section className="contact-main container">
        <div className="contact-wrapper-grid">
          
          {/* Left Side: Contact Info */}
          <motion.div 
            className="info-sidebar"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="info-card-v14">
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
          >
            <form className="v14-form" onSubmit={(e) => e.preventDefault()}>
              <div className="v14-form-grid">
                <div className="v14-input-box">
                  <label>Full Name</label>
                  <input type="text" placeholder="John Doe" required />
                </div>
                <div className="v14-input-box">
                  <label>Email Address</label>
                  <input type="email" placeholder="john@example.com" required />
                </div>
              </div>
              
              <div className="v14-input-box">
                <label>Subject</label>
                <input type="text" placeholder="e.g. Website Development" required />
              </div>

              <div className="v14-input-box">
                <label>How can we help?</label>
                <textarea rows="6" placeholder="Tell us about your project goals..."></textarea>
              </div>

              <button type="submit" className="v14-submit-btn">
                Send Message <Send size={18} />
              </button>
            </form>
          </motion.div>
          
        </div>
      </section>

      {/* Map or Location Teaser */}
      <section className="location-teaser container">
        <div className="teaser-box">
          <Globe className="spinning-globe" size={40} />
          <h3>Global Standards, Local Expertise.</h3>
          <p>Serving clients in Kigali and beyond with precision engineering.</p>
        </div>
      </section>
    </div>
  );
};

export default Contact;
