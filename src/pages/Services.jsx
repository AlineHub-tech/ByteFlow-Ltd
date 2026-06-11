import React, { useEffect, useState } from 'react';
import { 
  Code2, Palette, FileText, Share2, CheckCircle2, Server, 
  Globe2, Video, Camera, ChevronRight, ShoppingCart, Calendar, 
  Send, X, Sparkles, ShieldCheck, Target 
} from 'lucide-react';
import '../styles/Services.css';
import heroBg from '../assets/ss.JPG'; 

const Services = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [formData, setFormData] = useState({ name: "", email: "", whatsapp: "", notes: "" });

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('show');
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    window.scrollTo(0, 0);
  }, []);

  const openOrderModal = (serviceName) => {
    setSelectedService(serviceName);
    setIsModalOpen(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const message = `Hello ByteFlow! I want to place an order.%0A%0A*Service:* ${selectedService}%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*WhatsApp:* ${formData.whatsapp}%0A*Requirements:* ${formData.notes}`;
    window.open(`https://wa.me{message}`, '_blank');
    setIsModalOpen(false);
    setFormData({ name: "", email: "", whatsapp: "", notes: "" });
  };

  const serviceDetails = [
    { 
      title: "Website Development", 
      description: "We build clean and professional websites for your business. We make sure your site looks beautiful on mobile phones and computers so you can get more clients.", 
      subServices: ["Company Profile Websites", "Online E-commerce Stores", "Personal Blogs & Portfolios", "Custom Dashboards & Apps"], 
      tools: ["HTML & CSS", "React.js", "Node.js", "Figma Design"], 
      icon: <Code2 size={20} /> 
    },
    { 
      title: "Graphic Design", 
      description: "We create stunning designs that grab attention. From perfect logos to clean marketing posters, we make your brand look trustworthy and serious.", 
      subServices: ["Logo & Branding Kits", "Social Media Templates", "Flyers & Brochures", "Roll-up Banners & Slides"], 
      tools: ["Photoshop", "Illustrator", "Canva Pro", "Figma"], 
      icon: <Palette size={20} /> 
    },
    { 
      title: "Web Hosting", 
      description: "We keep your website online day and night without stopping. Our cloud servers are highly secure, fast, and protect all your business data from loss.", 
      subServices: ["Shared Cloud Hosting", "Dedicated VPS Servers", "Business Email Hosting", "Automated Daily Backups"], 
      tools: ["cPanel Panel", "LiteSpeed Engine", "SSL Certificate"], 
      icon: <Server size={20} /> 
    },
    { 
      title: "Website Domain Name", 
      description: "We help you buy and lock your business name on the internet (like yourname.rw). We give you full control over your official name registry.", 
      subServices: ["Local Domains (.rw, .co.rw)", "Global Domains (.com, .net)", "Secure Domain Transfers", "DNS Zone Record Setup"], 
      tools: ["RICTA Registry", "ICANN Control", "DNSSEC Security"], 
      icon: <Globe2 size={20} /> 
    },
    { 
      title: "Digital Marketing & SEO", 
      description: "We help your business get found by people looking for your services on Google. We also run paid ads on social media to bring you instant buyers.", 
      subServices: ["Google Search Ranking (SEO)", "Social Media Management", "Meta & Google Paid Ads", "Copywriting & Sales Text"], 
      tools: ["Google Console", "Meta Business", "Google Analytics"], 
      icon: <Share2 size={20} /> 
    },
    { 
      title: "Videography", 
      description: "We shoot and edit high-quality videos that tell your business story. Perfect for driving massive engagement on TikTok, Instagram, and Television.", 
      subServices: ["Corporate Promo Videos", "Social Media Reels & Shorts", "Event Highlights & Recaps", "YouTube Video Production"], 
      tools: ["Premiere Pro", "After Effects", "DaVinci Resolve"], 
      icon: <Video size={20} /> 
    },
    { 
      title: "Photography", 
      description: "We take sharp, professional photos of your products and your team. High-end clean pictures make new clients trust your business instantly.", 
      subServices: ["Premium Product Shoots", "Corporate Team Headshots", "Event & Summit Coverage", "Brand Lifestyle Photography"], 
      tools: ["Lightroom", "Photoshop", "Studio Lighting"], 
      icon: <Camera size={20} /> 
    },
    { 
      title: "Office and Documentation", 
      description: "We fix and clean your official paperwork, generate automated business spreadsheets, and organize your files inside a clean cloud storage.", 
      subServices: ["Professional Report Layouts", "Data Entry & Spreadsheets", "Official Document Translations", "Digital File Cloud Setup"], 
      tools: ["MS Word", "MS Excel", "Google Workspace"], 
      icon: <FileText size={20} /> 
    }
  ];

  const executionProcess = [
    {
      step: "01",
      title: "Target & Briefing (Day 1)",
      desc: "Place your order instantly via our system form. We establish an active WhatsApp channel within 4 hours to review your project files.",
      icon: <Target size={20} />
    },
    {
      step: "02",
      title: "Creative Construction (Days 2-4)",
      desc: "Our project studio crafts your interface designs, high-end content layout, or document parameters. We present clean prototypes for review.",
      icon: <Sparkles size={20} />
    },
    {
      step: "03",
      title: "Systems Launch (Days 5-7)",
      desc: "We deploy secure servers, map domain records, and configure Google SEO indexing. Your team receives direct operational hands-on training.",
      icon: <ShieldCheck size={20} />
    }
  ];

  return (
    <div className="services-page">
      {/* --- HERO SECTION --- */}
      <section className="services-hero" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.85)), url(${heroBg})` }}>
        <div className="hero-content container reveal">
          <span className="badge">ByteFlow Expertise</span>
          <h1>Our <span className="sig-font">Professional</span> Ecosystem</h1>
          <p>Explore our full range of technology and creative services designed to build <span className="sig-font">Success</span>.</p>
        </div>
      </section>

      {/* --- DUAL COLUMN OPUS SOLUTIONS INTERFACE --- */}
      <section className="solutions-container container reveal">
        <div className="solutions-split-mesh">
          
          {/* LEFT COLUMN: Tabs Navigation */}
          <div className="solutions-nav-panel">
            {serviceDetails.map((tab, idx) => (
              <button
                key={idx}
                className={`sol-nav-btn ${activeTab === idx ? 'sol-nav-active' : ''}`}
                onClick={() => setActiveTab(idx)}
              >
                <div className="sol-btn-left">
                  <span className="sol-btn-icon">{tab.icon}</span>
                  <span className="sol-btn-title">{tab.title}</span>
                </div>
                <ChevronRight size={16} className="sol-btn-arrow" />
              </button>
            ))}
          </div>

          {/* RIGHT COLUMN: Active Panel Viewer */}
          <div className="solutions-content-panel">
            <div className="sol-active-view">
              <h2 className="sol-active-title">{serviceDetails[activeTab].title}</h2>
              <p className="sol-active-desc">{serviceDetails[activeTab].description}</p>
              
              <div className="sol-active-sublist">
                <h4>What We Do Exactly:</h4>
                <div className="sol-subgrid">
                  {serviceDetails[activeTab].subServices.map((sub, i) => (
                    <div key={i} className="sol-sub-item">
                      <CheckCircle2 size={16} className="sol-check-icon" />
                      <span>{sub}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="sol-active-tools">
                <span>Tools & Technologies Used:</span>
                <div className="sol-tools-tags">
                  {serviceDetails[activeTab].tools.map((tool, i) => (
                    <span key={i} className="sol-tag">{tool}</span>
                  ))}
                </div>
              </div>

              <div className="sol-panel-action-row">
                <button 
                  className="btn-order-direct"
                  onClick={() => openOrderModal(serviceDetails[activeTab].title)}
                >
                  <ShoppingCart size={18} />
                  <span>Order This Service</span>
                </button>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* --- 1-WEEK PIPELINE DELIVERY FRAMEWORK --- */}
      <section className="process-pipeline-section container reveal">
        <div className="section-center-header">
          <span className="badge">Execution Model</span>
          <h2>Our Guaranteed <span className="sig-font">1-Week Delivery</span> Pipeline</h2>
          <div className="accent-bar"></div>
          <p>We respect your corporate timelines. From the moment you place an order to full production hand-off, we execute inside a fixed 7-day milestone architecture:</p>
        </div>

        <div className="process-pipeline-grid">
          {executionProcess.map((proc, idx) => (
            <div key={idx} className="process-step-box reveal">
              <div className="process-step-header">
                <div className="process-step-icon">{proc.icon}</div>
                <span className="process-step-num">{proc.step}</span>
              </div>
              <h3>{proc.title}</h3>
              <p>{proc.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- FINAL CTA --- */}
      <section className="services-cta container reveal">
        <div className="cta-gradient-box">
          <h2>Have a <span className="sig-font">Special</span> Requirement?</h2>
          <p>We provide custom packages tailored to your unique business goals.</p>
          <button className="btn-main" onClick={() => openOrderModal("Custom Tailored Project Package")}>
            Schedule a Consultation
          </button>
        </div>
      </section>

      {/* ==========================================================================
         --- INTERACTIVE MODAL OVERLAY (ORDER SYSTEM ENGINE - COMPACT FIX) ---
         ========================================================================== */}
      {isModalOpen && (
        <div 
          className="order-modal-overlay" 
          onClick={() => setIsModalOpen(false)}
          style={{
            position: 'fixed',
            top: 0, left: 0, width: '100%', height: '100%',
            background: 'rgba(7, 10, 19, 0.45)',
            backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            zIndex: 9999, padding: window.innerWidth < 640 ? '8px' : '20px',
            boxSizing: 'border-box'
          }}
        >
          <div 
            className="order-modal-card" 
            onClick={(e) => e.stopPropagation()}
            style={{
              background: '#ffffff',
              border: '1px solid rgba(0, 100, 0, 0.06)',
              borderRadius: window.innerWidth < 640 ? '16px' : '24px',
              width: '100%',
              maxWidth: '460px', /* Twagabanyije ubugari bwayo */
              padding: window.innerWidth < 640 ? '16px 14px' : '40px', /* Padding yagabanyijwe cyane kuri mobile */
              boxShadow: '0 30px 60px -15px rgba(7, 10, 19, 0.2)',
              maxHeight: window.innerWidth < 640 ? '94vh' : '85vh', /* Ikomeza kuguma mu mfuruka z'ecran */
              overflowY: 'auto',
              boxSizing: 'border-box'
            }}
          >
            <div className="modal-close-header" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
              <h3 style={{ fontSize: window.innerWidth < 640 ? '1.15rem' : '1.45rem', fontWeight: '800', margin: 0, color: '#111111' }}>Place Your Order</h3>
              <button 
                className="btn-modal-close" 
                onClick={() => setIsModalOpen(false)}
                style={{ background: '#f1f5f9', border: 'none', color: '#555555', width: '32px', height: '32px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
              >
                <X size={16} />
              </button>
            </div>
            
            <div className="modal-service-selected-badge" style={{ background: 'rgba(0, 100, 0, 0.04)', border: '1px solid rgba(0, 100, 0, 0.08)', borderRadius: '10px', padding: '10px 12px', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: window.innerWidth < 640 ? '12px' : '24px', fontSize: '0.85rem' }}>
              <span style={{ color: '#555555' }}>Selected Option:</span>
              <strong style={{ color: '#006400', fontWeight: '700' }}>{selectedService}</strong>
            </div>

            <form onSubmit={handleFormSubmit} className="order-modal-form" style={{ display: 'flex', flexDirection: 'column', gap: window.innerWidth < 640 ? '10px' : '20px' }}>
              <div className="form-input-group" style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <label style={{ fontSize: '0.78rem', fontWeight: '700', color: '#334155', textTransform: 'uppercase', letterSpacing: '0.5px', textAlign: 'left' }}>Full Name / Business Title</label>
                <input 
                  type="text" name="name" required value={formData.name} onChange={handleInputChange} placeholder="e.g., John Doe / Apex Logistics Ltd"
                  style={{ width: '100%', background: '#f8fafc', border: '1.5px solid #e2e8f0', borderRadius: '10px', padding: window.innerWidth < 640 ? '10px 12px' : '14px 16px', fontSize: '0.9rem', boxSizing: 'border-box' }}
                />
              </div>
              
              <div className="form-input-group" style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <label style={{ fontSize: '0.78rem', fontWeight: '700', color: '#334155', textTransform: 'uppercase', letterSpacing: '0.5px', textAlign: 'left' }}>Corporate Email Address</label>
                <input 
                  type="email" name="email" required value={formData.email} onChange={handleInputChange} placeholder="e.g., corporate@yourdomain.rw"
                  style={{ width: '100%', background: '#f8fafc', border: '1.5px solid #e2e8f0', borderRadius: '10px', padding: window.innerWidth < 640 ? '10px 12px' : '14px 16px', fontSize: '0.9rem', boxSizing: 'border-box' }}
                />
              </div>

              <div className="form-input-group" style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <label style={{ fontSize: '0.78rem', fontWeight: '700', color: '#334155', textTransform: 'uppercase', letterSpacing: '0.5px', textAlign: 'left' }}>Active WhatsApp Contact Number</label>
                <input 
                  type="tel" name="whatsapp" required value={formData.whatsapp} onChange={handleInputChange} placeholder="e.g., 0788000000"
                  style={{ width: '100%', background: '#f8fafc', border: '1.5px solid #e2e8f0', borderRadius: '10px', padding: window.innerWidth < 640 ? '10px 12px' : '14px 16px', fontSize: '0.9rem', boxSizing: 'border-box' }}
                />
              </div>

              <div className="form-input-group" style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <label style={{ fontSize: '0.78rem', fontWeight: '700', color: '#334155', textTransform: 'uppercase', letterSpacing: '0.5px', textAlign: 'left' }}>Project Goals & Specific Requirements</label>
                <textarea 
                  name="notes" rows={window.innerWidth < 640 ? "3" : "4"} required value={formData.notes} onChange={handleInputChange} placeholder="Please list your specific needs..."
                  style={{ width: '100%', background: '#f8fafc', border: '1.5px solid #e2e8f0', borderRadius: '10px', padding: window.innerWidth < 640 ? '10px 12px' : '14px 16px', fontSize: '0.9rem', boxSizing: 'border-box', height: window.innerWidth < 640 ? '80px' : 'auto', resize: 'vertical' }}
                ></textarea>
              </div>

              <div className="modal-guarantee-notice" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#006400', backgroundColor: 'rgba(0, 100, 0, 0.04)', padding: '10px 12px', borderRadius: '10px', fontSize: '0.76rem', fontWeight: '600', borderLeft: '3px solid #006400', width: '100%', boxSizing: 'border-box' }}>
                <Calendar size={14} style={{ flexShrink: 0 }} />
                <span style={{ textAlign: 'left' }}>ByteFlow Guarantee: Project hand-off finalized within 7 business days.</span>
              </div>

              <button 
                type="submit" className="btn-modal-submit"
                style={{ background: '#006400', color: '#ffffff', border: '1px solid #006400', padding: window.innerWidth < 640 ? '12px' : '15px', borderRadius: '10px', fontWeight: '600', fontSize: '0.9rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', cursor: 'pointer', width: '100%', boxSizing: 'border-box', boxShadow: '0 4px 12px rgba(0, 100, 0, 0.15)' }}
              >
                <Send size={14} />
                <span>Submit Order via WhatsApp</span>
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;
