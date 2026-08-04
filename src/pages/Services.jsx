import React, { useEffect, useState } from 'react';
import { 
  Code2, Palette, FileText, Share2, CheckCircle2, Server, 
  Globe2, Video, Camera, ChevronRight, ShoppingCart, Calendar, 
  Send, X, Sparkles, ShieldCheck, Target 
} from 'lucide-react';
import '../styles/Services.css';
import heroBg from '../assets/ss.jpg'; 

const Services = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [formData, setFormData] = useState({ name: "", email: "", whatsapp: "", notes: "" });
  const whatsappNumber = "250796023452";

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
    const message = encodeURIComponent(
      `Hello ByteFlow! I want to place an order.\n\nService: ${selectedService}\nName: ${formData.name}\nEmail: ${formData.email}\nWhatsApp: ${formData.whatsapp}\nRequirements: ${formData.notes}`
    );
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
    setIsModalOpen(false);
    setFormData({ name: "", email: "", whatsapp: "", notes: "" });
  };

  const serviceDetails = [
    { 
      title: "Website Development", 
      price: "From 220,000 RWF",
      description: "We build clean and professional websites for your business. We make sure your site looks beautiful on mobile phones and computers so you can get more clients.", 
      subServices: ["Company Profile Websites", "Online E-commerce Stores", "Personal Blogs & Portfolios", "Custom Dashboards & Apps"], 
      tools: ["HTML & CSS", "React.js", "Node.js", "Figma Design"], 
      icon: <Code2 size={20} /> 
    },
    { 
      title: "Graphic Design", 
      price: "From 90,000 RWF",
      description: "We create stunning designs that grab attention. From perfect logos to clean marketing posters, we make your brand look trustworthy and serious.", 
      subServices: ["Logo & Branding Kits", "Social Media Templates", "Flyers & Brochures", "Roll-up Banners & Slides"], 
      tools: ["Photoshop", "Illustrator", "Canva Pro", "Figma"], 
      icon: <Palette size={20} /> 
    },
    { 
      title: "Web Hosting", 
      price: "From 80,000 RWF/month",
      description: "We keep your website online day and night without stopping. Our cloud servers are highly secure, fast, and protect all your business data from loss.", 
      subServices: ["Shared Cloud Hosting", "Dedicated VPS Servers", "Business Email Hosting", "Automated Daily Backups"], 
      tools: ["cPanel Panel", "LiteSpeed Engine", "SSL Certificate"], 
      icon: <Server size={20} /> 
    },
    { 
      title: "Website Domain Name", 
      price: "From 25,000 RWF/year",
      description: "We help you buy and lock your business name on the internet (like yourname.rw). We give you full control over your official name registry.", 
      subServices: ["Local Domains (.rw, .co.rw)", "Global Domains (.com, .net)", "Secure Domain Transfers", "DNS Zone Record Setup"], 
      tools: ["RICTA Registry", "ICANN Control", "DNSSEC Security"], 
      icon: <Globe2 size={20} /> 
    },
    { 
      title: "Digital Marketing & SEO", 
      price: "From 110,000 RWF",
      description: "We help your business get found by people looking for your services on Google. We also run paid ads on social media to bring you instant buyers.", 
      subServices: ["Google Search Ranking (SEO)", "Social Media Management", "Meta & Google Paid Ads", "Copywriting & Sales Text"], 
      tools: ["Google Console", "Meta Business", "Google Analytics"], 
      icon: <Share2 size={20} /> 
    },
    { 
      title: "Videography", 
      price: "From 150,000 RWF",
      description: "We shoot and edit high-quality videos that tell your business story. Perfect for driving massive engagement on TikTok, Instagram, and Television.", 
      subServices: ["Corporate Promo Videos", "Social Media Reels & Shorts", "Event Highlights & Recaps", "YouTube Video Production"], 
      tools: ["Premiere Pro", "After Effects", "DaVinci Resolve"], 
      icon: <Video size={20} /> 
    },
    { 
      title: "Photography", 
      price: "From 120,000 RWF",
      description: "We take sharp, professional photos of your products and your team. High-end clean pictures make new clients trust your business instantly.", 
      subServices: ["Premium Product Shoots", "Corporate Team Headshots", "Event & Summit Coverage", "Brand Lifestyle Photography"], 
      tools: ["Lightroom", "Photoshop", "Studio Lighting"], 
      icon: <Camera size={20} /> 
    },
    { 
      title: "Office and Documentation", 
      price: "From 70,000 RWF",
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

  const orderSteps = [
    {
      number: "1",
      title: "Hit the service you need",
      desc: "Choose from website design, graphic work, video, or document help. Each option explains what we do for you.",
    },
    {
      number: "2",
      title: "Click order and write us",
      desc: "Open the order form, type your name and phone, then explain what you want in simple words.",
    },
    {
      number: "3",
      title: "We reply fast on WhatsApp",
      desc: "Our team answers quickly, confirms your price, and starts work so you can relax and follow the simple plan.",
    }
  ];

  return (
    <div className="services-page">
      {/* --- HERO SECTION --- */}
      <section className="services-hero" style={{}}>
        <div className="hero-content container reveal">
          <h1>Services made easy for every business</h1>
          <p>Choose the service you need, send a short message, and our team will start building your online presence in 7 days.</p>
        </div>
      </section>

      <section className="services-overview container reveal">
        <div className="section-center-header">
          <span className="badge">Quick service guide</span>
          <h2>Find your service fast</h2>
          <p>Each service is explained in plain words so anyone can understand what to order and how it helps the business.</p>
        </div>

        {/* <div className="service-cards-grid">
          {serviceDetails.map((service, idx) => (
            <article key={idx} className={`service-card ${activeTab === idx ? 'service-card-active' : ''}`}>
              <div className="service-card-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <div className="service-card-meta">
                <span>{service.price}</span>
                <button
                  type="button"
                  className="service-card-order"
                  onClick={() => { setActiveTab(idx); openOrderModal(service.title); }}
                >
                  Order now
                </button>
              </div>
            </article>
          ))}
        </div> */}
      </section>

      <section className="order-process-section container reveal">
        <div className="section-center-header">
          <span className="badge">How to order</span>
          <h2>Order in 3 simple steps</h2>
          <p>We made the process easy so you can start even if this is your first project.</p>
        </div>

        <div className="order-steps-grid">
          {orderSteps.map((step) => (
            <div key={step.number} className="order-step-card">
              <div className="order-step-label">Step {step.number}</div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

{/* --- ACCORDION OPUS SOLUTIONS INTERFACE --- */} 
<section className="solutions-container container reveal">
  <div className="solutions-accordion-mesh" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
    
    {serviceDetails.map((tab, idx) => {
      // Reba niba iyi serivisi ariyo ifunguye
      const isOpen = activeTab === idx;

      return (
        <div key={idx} className="solutions-accordion-item" style={{  overflow: 'hidden' }}>
          <button 
            className={`sol-nav-btn ${isOpen ? 'sol-nav-active' : ''}`} 
            onClick={() => setActiveTab(isOpen ? null : idx)} 
            style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px', borderRadius: '18px', background: '#d4d4d4', border: 'none', cursor: 'pointer' }}
          >
            <div className="sol-btn-left" style={{ display: 'flex', alignItems: 'center', gap: '12px', textAlign: 'left' }}>
              <span className="sol-btn-icon">{tab.icon}</span>
              <div className="sol-btn-details">
                <span className="sol-btn-title" style={{ display: 'block', fontWeight: 'bold' }}>{tab.title}</span>
                <span className="sol-btn-price" style={{ color: '#64748b', fontSize: '14px' }}>{tab.price}</span>
              </div>
            </div>
            <ChevronRight 
              size={16} 
              className="sol-btn-arrow" 
              style={{ transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }} 
            />
          </button>
          {isOpen && (
            <div className="solutions-content-panel" style={{ padding: '20px', borderTop: '1px solid #e2e8f0' }}>
              <div className="sol-active-view">
                <p className="sol-active-desc">{tab.description}</p>
                
                <div className="sol-active-pricebar" style={{ margin: '15px 0', display: 'flex', gap: '10px', alignItems: 'center' }}>
                  <span className="service-price-tag">{tab.price}</span>
                  <span className="service-delivery-tag" style={{ fontSize: '13px', color: '#64748b' }}>Order online now and get delivery guidance in 7 days</span>
                </div>

                <div className="sol-active-sublist" style={{ marginTop: '15px' }}>
                  <h4>What We Do Exactly:</h4>
                  <div className="sol-subgrid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginTop: '8px' }}>
                    {tab.subServices.map((sub, i) => (
                      <div key={i} className="sol-sub-item" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <CheckCircle2 size={16} className="sol-check-icon" style={{ color: '#22c55e' }} />
                        <span>{sub}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="sol-active-tools" style={{ marginTop: '15px' }}>
                  <span>Tools & Technologies Used:</span>
                  <div className="sol-tools-tags" style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '6px' }}>
                    {tab.tools.map((tool, i) => (
                      <span key={i} className="sol-tag" style={{padding: '4px 8px', fontSize: '12px' }}>{tool}</span>
                    ))}
                  </div>
                </div>

                <div className="sol-panel-action-row" style={{ marginTop: '20px' }}>
                  <button className="btn-order-direct" onClick={() => openOrderModal(tab.title)}>
                    <ShoppingCart size={18} />
                    <span>Order This Service</span>
                  </button>
                </div>
              </div>
            </div>
          )}

        </div>
      );
    })}

  </div>
</section>
      {/* --- 1-WEEK PIPELINE DELIVERY FRAMEWORK --- */}
      <section className="process-pipeline-section container reveal">
        <div className="section-center-header">
          <span className="badge">Execution Model</span>
          <h2>Our Guaranteed <span className="sig">1-Week Delivery</span> Pipeline</h2>
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
          <h2>Have a <span className="sig">Special</span> Requirement?</h2>
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
  <div className="order-modal-overlay" onClick={() => setIsModalOpen(false)}>
    <div className="order-modal-card" onClick={(e) => e.stopPropagation()}>
      
      {/* HEADER */}
      <div className="modal-close-header">
        <h3>Place Your Order</h3>
        <button className="btn-modal-close" onClick={() => setIsModalOpen(false)} aria-label="Close modal">
          <X size={18} />
        </button>
      </div>
      
      {/* BADGE */}
      <div className="modal-service-selected-badge">
        <span>Selected Option:</span>
        <strong>{selectedService}</strong>
      </div>

      {/* FORM */}
      <form 
        onSubmit={(e) => {
          e.preventDefault();
          const companyWhatsApp = "250796023452"; 
          

          const message = `*NEW ORDER - BYTEFLOW*\n\n` +
                          `• *Service:* ${selectedService}\n` +
                          `• *Client Name:* ${formData.name}\n` +
                          `• *Email:* ${formData.email}\n` +
                          `• *Client WhatsApp:* ${formData.whatsapp}\n\n` +
                          `*Project Goals & Requirements:* \n${formData.notes}`;
          
          const whatsappUrl = `https://wa.me{companyWhatsApp}?text=${encodeURIComponent(message)}`;
          window.open(whatsappUrl, '_blank');
          setIsModalOpen(false);
        }} 
        className="order-modal-form"
      >
        <div className="order-form-grid">
          <div className="form-input-group">
            <label>Full Name / Business Title</label>
            <input 
              type="text" name="name" required value={formData.name} onChange={handleInputChange} placeholder="e.g., John Doe / Apex Logistics Ltd"
            />
          </div>

          <div className="form-input-group">
            <label>Corporate Email Address</label>
            <input 
              type="email" name="email" required value={formData.email} onChange={handleInputChange} placeholder="e.g., corporate@yourdomain.rw"
            />
          </div>

          <div className="form-input-group">
            <label>Active WhatsApp Contact Number</label>
            <input 
              type="tel" name="whatsapp" required value={formData.whatsapp} onChange={handleInputChange} placeholder="e.g., 0788000000"
            />
          </div>

          <div className="form-input-group full-width">
            <label>Project Goals & Specific Requirements</label>
            <textarea 
              name="notes" rows="4" required value={formData.notes} onChange={handleInputChange} placeholder="Please list your specific needs, desired outcome, and any examples."
            ></textarea>
          </div>
        </div>

        <div className="modal-guarantee-notice">
          <Calendar size={14} />
          <span>ByteFlow Guarantee: Project hand-off finalized within 7 business days.</span>
        </div>

        <button type="submit" className="btn-modal-submit">
          <Send size={14} />
          <span>Submit Order via WhatsApp</span>
        </button>
      </form>
      
      <p className="order-form-footnote">Your order is sent directly to WhatsApp for fast review by our team.</p>
    </div>
  </div>
)}

    </div>
  );
};

export default Services;
