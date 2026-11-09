import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Phone, Mail, MapPin, MessageCircle, Send, Clock, Globe, Instagram, Facebook, Linkedin } from 'lucide-react';
import emailjs from '@emailjs/browser';
import '../styles/Contact.css';

const Contact = () => {
  const [searchParams] = useSearchParams();
  const whatsappNumber = '250796023452';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    project: '',
    budget: '',
    deadline: '',
    whatsapp: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('');

  useEffect(() => {
    const service = searchParams.get('service');
    if (service) setFormData((current) => ({ ...current, service }));
  }, [searchParams]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus('');

    const serviceID = 'service_2spoe5l';
    const templateID = 'template_2zxcvvg';
    const publicKey = 'raeWP3pefif4FWJsT';

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.service || 'Project Inquiry',
      message: `Service: ${formData.service}\nBudget: ${formData.budget || 'Not specified'}\nDeadline: ${formData.deadline || 'Not specified'}\nWhatsApp: ${formData.whatsapp || 'Not specified'}\n\n${formData.project || formData.message}`,
      to_email: 'byteflowltd9@gmail.com'
    };

    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then(() => {
        setLoading(false);
        setStatus('success');
        setFormData({ name: '', email: '', service: '', project: '', budget: '', deadline: '', whatsapp: '', message: '' });
      })
      .catch((error) => {
        setLoading(false);
        setStatus('error');
        console.error('EmailJS Error:', error);
      });
  };

  const encodedMessage = encodeURIComponent(
    `Hello ByteFlow Ltd! 👋\nI would like to start a project with you.\n\nName: ${formData.name || 'Visitor'}\nEmail: ${formData.email || 'Not provided'}\nService Needed: ${formData.service || 'General Inquiry'}\nProject Description: ${formData.project || formData.message || 'I want to build a website.'}\nBudget: ${formData.budget || 'Not specified'}\nDeadline: ${formData.deadline || 'Not specified'}\nWhatsApp: ${formData.whatsapp || 'Not specified'}`
  );
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

  return (
    <div className="contact-v14">
      <section className="contact-hero-v14">
        <div className="hero-container">
          <div className="hero-text-center">
            <h1>Let&apos;s Create Something <span className="highlight">Exceptional.</span></h1>
            <p>Have a project in mind? We&apos;d love to hear about it. Whether you need a creative design, a professional website, branding, or visual content, let&apos;s discuss how we can bring your ideas to life.</p>
          </div>
        </div>
      </section>

      <section className="contact-main container">
        <div className="contact-wrapper-grid">
          <div className="info-sidebar">
            <div className="info-card-v14">
              <h2>Contact & Project Inquiry</h2>
              <p>Tell us what you need and our team will get back to you with the right next step.</p>

              <div className="contact-links-stack">
                <div className="contact-link-item">
                  <div className="icon-bg"><MapPin size={22} /></div>
                  <div>
                    <h4>Location</h4>
                    <p>Batsinda, Kigali, Rwanda</p>
                  </div>
                </div>
                <div className="contact-link-item">
                  <div className="icon-bg"><Mail size={22} /></div>
                  <div>
                    <h4>Email</h4>
                    <p>byteflowltd9@gmail.com</p>
                  </div>
                </div>
                <div className="contact-link-item">
                  <div className="icon-bg"><Phone size={22} /></div>
                  <div>
                    <h4>WhatsApp</h4>
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

              <div style={{ display: 'flex', gap: '10px', marginTop: '18px', flexWrap: 'wrap' }}>
                <a href={whatsappLink} target="_blank" rel="noreferrer" className="v14-whatsapp-btn"><MessageCircle size={18} /> WhatsApp</a>
                <a href="https://www.instagram.com/byteflow_ltd" target="_blank" rel="noreferrer" className="v14-whatsapp-btn" style={{ background: '#0f172a' }}><Instagram size={18} /> Instagram</a>
                <a href="https://www.facebook.com/profile.php?id=61588130300960" target="_blank" rel="noreferrer" className="v14-whatsapp-btn" style={{ background: '#1d4ed8' }}><Facebook size={18} /> Facebook</a>
                <a href="https://www.linkedin.com/company/a-better-t-solutions/" target="_blank" rel="noreferrer" className="v14-whatsapp-btn" style={{ background: '#0a66c2' }}><Linkedin size={18} /> LinkedIn</a>
              </div>
            </div>
          </div>

          <div className="form-container-v14">
            <form className="v14-form" onSubmit={handleEmailSubmit}>
              <div className="v14-form-grid">
                <div className="v14-input-box">
                  <label>Name</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="John Doe" required />
                </div>
                <div className="v14-input-box">
                  <label>Email</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="john@example.com" required />
                </div>
              </div>

              <div className="v14-form-grid">
                <div className="v14-input-box">
                  <label>Service Needed</label>
                  <input type="text" name="service" value={formData.service} onChange={handleChange} placeholder="e.g. Website Design" />
                </div>
                <div className="v14-input-box">
                  <label>WhatsApp Contact</label>
                  <input type="tel" name="whatsapp" value={formData.whatsapp} onChange={handleChange} placeholder="e.g. 0788000000" />
                </div>
              </div>

              <div className="v14-form-grid">
                <div className="v14-input-box">
                  <label>Budget (Optional)</label>
                  <input type="text" name="budget" value={formData.budget} onChange={handleChange} placeholder="e.g. 500,000 RWF" />
                </div>
                <div className="v14-input-box">
                  <label>Deadline (Optional)</label>
                  <input type="text" name="deadline" value={formData.deadline} onChange={handleChange} placeholder="e.g. 2 weeks" />
                </div>
              </div>

              <div className="v14-input-box">
                <label>Project Description</label>
                <textarea rows="6" name="project" value={formData.project} onChange={handleChange} placeholder="Tell us about your project goals, target audience, and ideal outcome..." required></textarea>
              </div>

              <button type="submit" className="v14-submit-btn" disabled={loading}>
                {loading ? 'Sending...' : 'Send Message'} <Send size={18} />
              </button>

              {status === 'success' && <p style={{ color: '#22c55e', marginTop: '15px', fontWeight: 'bold' }}>⚡ Message sent successfully to ByteFlow email.</p>}
              {status === 'error' && <p style={{ color: '#ef4444', marginTop: '15px', fontWeight: 'bold' }}>❌ Failed to send message. Please use WhatsApp instead.</p>}
            </form>
          </div>
        </div>
      </section>

      <section className="location-teaser container">
        <div className="teaser-box">
          <Globe className="spinning-globe" size={40} />
          <h3>Global Standards, Local Expertise.</h3>
          <p>Serving clients in Kigali and beyond with premium creative and digital solutions.</p>
        </div>
      </section>
    </div>
  );
};

export default Contact;
