import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, MessageCircle, Send, Clock, Globe } from 'lucide-react';
import emailjs from '@emailjs/browser'; 
import '../styles/Contact.css';

const Contact = () => {
  const whatsappNumber = "+250796023452"; 
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 1. INTEGRATION: Gufasha Form kwi-senda kuri Email yawe
  const handleEmailSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus('');

    // Sura neza ko wasimbuye aya magambo n'ama-Keys yawe ya EmailJS ava kuri emailjs.com
    const serviceID = "YOUR_SERVICE_ID"; 
    const templateID = "YOUR_TEMPLATE_ID";
    const publicKey = "YOUR_PUBLIC_KEY";

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
      to_email: "byteflowltd9@gmail.com" 
    };

    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then((response) => {
        setLoading(false);
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' }); 
      }, (error) => {
        setLoading(false);
        setStatus('error');
        console.error('EmailJS Error:', error);
      });
  };

  // 2. INTEGRATION: Link ya WhatsApp (KOSOYE: wa.me/250796023452 ikorere neza)
  const encodedMessage = encodeURIComponent(
    `Hello ByteFlow Ltd! 👋\nI would like to start a project with you.\n\n*Name:* ${formData.name || 'Visitor'}\n*Email:* ${formData.email || 'Not provided'}\n*Subject:* ${formData.subject || 'General Inquiry'}\n*Message:* ${formData.message || 'I want to build a website.'}`
  );
  const whatsappLink = `https://wa.me{whatsappNumber}?text=${encodedMessage}`;

  return (
    <div className="contact-v14">
      {/* 1. Hero Header */}
      <section className="contact-hero-v14">
        <div className="hero-container">
          <motion.div 
            className="hero-text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="contact-tag">Get In Touch</span>
            <h1>Let's Start a <span className="highlight">Project</span></h1>
            <p>Ready to transform your vision into a digital reality? Reach out to our team today.</p>
          </motion.div>
        </div>
      </section>

      {/* 2. Main Contact Section */}
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
                    <p>byteflowltd9@gmail.com</p>
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
              
              <a href={whatsappLink} target="_blank" rel="noreferrer" className="v14-whatsapp-btn">
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
            <form className="v14-form" onSubmit={handleEmailSubmit}>
              <div className="v14-form-grid">
                <div className="v14-input-box">
                  <label>Full Name</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="John Doe" required />
                </div>
                <div className="v14-input-box">
                  <label>Email Address</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="john@example.com" required />
                </div>
              </div>
              <div className="v14-input-box">
                <label>Subject</label>
                <input type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder="e.g. Website Development" required />
              </div>
              <div className="v14-input-box">
                <label>How can we help?</label>
                <textarea rows="6" name="message" value={formData.message} onChange={handleChange} placeholder="Tell us about your project goals..." required></textarea>
              </div>
              
              <button type="submit" className="v14-submit-btn" disabled={loading}>
                {loading ? 'Sending...' : 'Send Message'} <Send size={18} />
              </button>

              {/* Ubutumwa bwerekana ko byagenze neza cyangwa nabi */}
              {status === 'success' && <p style={{ color: '#22c55e', marginTop: '15px', fontWeight: 'bold' }}>⚡ Message sent successfully to ByteFlow email!</p>}
              {status === 'error' && <p style={{ color: '#ef4444', marginTop: '15px', fontWeight: 'bold' }}>❌ Failed to send message. Please chat on WhatsApp.</p>}
            </form>
          </motion.div>

        </div>
      </section>

      {/* Map Teaser */}
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
