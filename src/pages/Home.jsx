import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Rocket, CheckCircle2, MessageSquare, Cpu, Code2, Palette, 
  Server, Globe2, Share2, Video, Camera, FileText, HelpCircle, ChevronDown 
} from 'lucide-react';
import '../styles/Home.css';
import heroBg from '../assets/pro.webp';

const Home = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('show');
      });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  }, []);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  // A. PICK ONE THING: INDIVIDUAL SERVICES BASELINE MENU (Zose uko ari 8 ziri hano)
  const singleServices = [
    { title: "Website Development", price: "350,000", badge: "Fixed Price", desc: "Corporate sites, E-commerce stores, Web apps, and Custom dashboards.", icon: <Code2 /> },
    { title: "Graphic Design", price: "15,000", badge: "Per Asset", desc: "Logo identity kits, Social media templates, and Brand identity design.", icon: <Palette /> },
    { title: "Web Hosting", price: "50,000", badge: "Per Year", desc: "Secure cloud web hosting, corporate emails, and automated daily backups.", icon: <Server /> },
    { title: "Website Domain Name", price: "15,000", badge: "Per Year", desc: "Local .rw registration and global domain transfers with full DNS control.", icon: <Globe2 /> },
    { title: "Digital Marketing & SEO", price: "150,000", badge: "Per Month", desc: "Google #1 SEO Ranking, Meta advertising, and content creation strategy.", icon: <Share2 /> },
    { title: "Videography", price: "150,000", badge: "Per Project", desc: "Corporate commercials, high-converting social media reels, and event coverage.", icon: <Video /> },
    { title: "Photography", price: "100,000", badge: "Per Shoot", desc: "High-end product photoshoot, team headshots, and corporate events.", icon: <Camera /> },
    { title: "Office & Documentation", price: "30,000", badge: "Per Document", desc: "Report formatting, business translations, spreadsheets, and file setup.", icon: <FileText /> }
  ];

  // B. ALL IN ONE PROJECT TIERS (Zose uko ari 6 zitondetse neza)
  const projectTiers = [
    {
      name: "Website Development Tier",
      desc: "High-converting web applications, online stores, and corporate portals tailored for Rwandan brands.",
      icon: <Code2 />,
      services: [
        { name: "Custom Corporate Websites", price: "350,000", period: "Fixed Price" },
        { name: "E-commerce Online Stores (Most Demanded Setup)", price: "600,000", period: "Starting From" },
        { name: "Personal Blogs & Portfolios", price: "200,000", period: "Fixed Price" },
        { name: "Web Applications & Dashboards", price: "1,200,000", period: "Custom Quote" },
        { name: "UI/UX Web Interface Design (Figma Clickable Prototypes)", price: "150,000", period: "Per Project" },
        { name: "Website Maintenance & Bug Fixing", price: "40,000", period: "Per Issue" }
      ]
    },
    {
      name: "Graphic Design & Branding Tier",
      desc: "Complete business visual kits from small continuous marketing items to large scale advertisement billboards.",
      icon: <Palette />,
      services: [
        { name: "Logo & Brand Identity Kits (Complete Corporate Guides)", price: "80,000", period: "Full Kit" },
        { name: "Business Cards & Letterheads Layouts", price: "20,000", period: "Setup Fee" },
        { name: "Social Media Graphic Templates", price: "35,000", period: "5 Templates" },
        { name: "Marketing Flyers & Brochures", price: "15,000", period: "Per Asset" },
        { name: "Roll-up Banners & Billboards Assets", price: "45,000", period: "Per Design" },
        { name: "Company Profile Presentation Slides", price: "60,000", period: "Up to 15 Slides" }
      ]
    },
    {
      name: "Media Content: Photography & Videography Tier",
      desc: "Premium 4K commercial videos and sharp structural imagery deployment for digital ads.",
      icon: <Video />,
      services: [
        { name: "Professional Product Photography Suite", price: "100,000", period: "Per Session" },
        { name: "Corporate Team Portrait Headshots", price: "75,000", period: "Per Session" },
        { name: "Event & Conference Photography Coverage", price: "150,000", period: "Per Day Session" },
        { name: "Interior & Architectural Environmental Photography", price: "120,000", period: "Per Setup" },
        { name: "Creative Brand Lifestyle Shoots", price: "130,000", period: "Per Setup" },
        { name: "Corporate Promotional Videos Trailers", price: "300,000", period: "Per Project" },
        { name: "Social Media Reels & TikTok Commercial Ads", price: "40,000", period: "Per Short Video" },
        { name: "YouTube Video Timeline Editing", price: "50,000", period: "Per Video" },
        { name: "Event Highlights & Recap Documentation Videos", price: "200,000", period: "Full Edit" },
        { name: "Real Estate Property Walkthroughs Video Tours", price: "180,000", period: "Per Property" },
        { name: "TV & Online Commercial Media Ads", price: "600,000", period: "Premium Tier" }
      ]
    },
    {
      name: "Digital Marketing & SEO Retention Tier",
      desc: "Technical indexing for organic Google ranking and continuous multi-channel tracking architecture.",
      icon: <Share2 />,
      services: [
        { name: "Google Search Engine Optimization (SEO Implementation)", price: "150,000", period: "Per Month Retainer" },
        { name: "Social Media Management (Instagram, LinkedIn Growth)", price: "200,000", period: "Per Month Retainer" },
        { name: "Meta Ads Setup (Facebook & Instagram Lead Generation)", price: "80,000", period: "Setup Fee" },
        { name: "Google Ads Campaign Target Management", price: "90,000", period: "Setup Fee" },
        { name: "Email Marketing Automation Blueprints", price: "60,000", period: "Setup Fee" },
        { name: "Copywriting & Strategic Content Marketing", price: "45,000", period: "Per Month" }
      ]
    },
    {
      name: "Cloud Hosting & Domain Registry Tier",
      desc: "High-security isolated virtual servers and localized DNS zone record configurations.",
      icon: <Server />,
      services: [
        { name: "Shared Cloud Web Hosting Infrastructure", price: "40,000", period: "Per Year" },
        { name: "Dedicated VPS Hosting Isolation Servers", price: "300,000", period: "Per Year" },
        { name: "Corporate Business Email Hosting Setup", price: "25,000", period: "Per Year" },
        { name: "Free SSL Certificate HTTPS Map Installation", price: "0", period: "Always Free" },
        { name: "Automated Daily Cloud Snapshot Backups", price: "20,000", period: "Per Year" },
        { name: "24/7 Technical Server Support Oversight", price: "50,000", period: "Per Year" },
        { name: "Local Domain Name Registry (.RW, .CO.RW)", price: "15,000", period: "Per Year" },
        { name: "Global Domain Name Registry (.COM, .NET, .ORG)", price: "15,000", period: "Per Year" },
        { name: "Custom Domain Name Administrative Transfers", price: "20,000", period: "One-Time Setup" },
        { name: "Private Domain Privacy Masking Protection", price: "10,000", period: "Per Year" },
        { name: "Advanced DNS Zone Record Management", price: "15,000", period: "One-Time Setup" }
      ]
    },
    {
      name: "Corporate Office & Documentation Tier",
      desc: "Complete documentation structural indexing, automated spreadsheets, and business translating.",
      icon: <FileText />,
      services: [
        { name: "Professional Report Formatting & Layout Work", price: "30,000", period: "Per Document Bundle" },
        { name: "Data Entry & Complex Spreadsheets Management (Macros)", price: "45,000", period: "Per Project Setup" },
        { name: "Official Business Translations (English/French/Kinyarwanda)", price: "15,000", period: "Per Page" },
        { name: "Digital File Organization & Centralized Cloud Storage Setup", price: "70,000", period: "Setup Fee" },
        { name: "Executive CV, Professional Cover Letters & Bio Writing", price: "25,000", period: "Full Kit" }
      ]
    }
  ];

  // C. TARGETED COMPREHENSIVE BUSINESS FAQS
  const faqs = [
    { q: "How are the Web Development packages timeline structured?", a: "Custom Corporate Sites take between 7 to 14 days to deploy. E-commerce stores integrated with Mobile Money systems take 3 weeks due to rigorous security tests and financial webhook setups." },
    { q: "What distinguishes flyer design costs from a full Brand Identity Kit?", a: "Marketing Flyers are single campaign promotional images priced at 15,000 RWF. Logo & Brand Identity Kits cost 80,000 RWF because they include exhaustive visual assets, color code palettes, typography, and complete company profile rules." },
    { q: "Does the Domain & Hosting package explicitly cover business email setups?", a: "Yes. When choosing Cloud Web Hosting or our combined bundles, corporate business email configurations (e.g., admin@yourdomain.rw) are completely embedded, including secure SSL validation and daily data redundancy protection." },
    { q: "How do you manage continuous Digital Marketing and technical SEO rankings?", a: "Our system combines automated keyword position tracking with physical asset production. The SEO framework maps out search parameters while our Meta Ads mechanism dynamically profiles target markets to lower customer acquisition costs." },
    { q: "What is your workflow policy regarding Photography and Videography output?", a: "ByteFlow delivers fully processed post-production visual content. Videos are exported in 4K resolution incorporating modern sound engineering, and architectural or brand lifestyle photography sessions include full color grading and web formatting options." }
  ];
  return (
    <div className="home-wrapper">
      <div className="tech-dots"></div>

      {/* --- HERO SECTION --- */}
      <section className="hero-section" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.85)), url(${heroBg})` }}>
        <div className="container hero-flex">
          <div className="hero-text reveal">
            <div className="hero-badge">ByteFlow Ltd — Engineering Digital Success</div>
            <h1>We Build Professional Websites, Online E-commerce Stores, and Stunning <span className="green-text">Graphic Design & Corporate Media</span></h1>
            <p>We engineer secure cloud ecosystems, localized mobile-money payment workflows, and strategic brand identities. Our comprehensive digital infrastructures ensure Rwandan businesses scale operations effortlessly, command absolute credibility, and capture maximum market visibility.</p>
            
            <div className="hero-btns">
              <Link to="/contact" className="btn-main">
                Deploy Your Infrastructure <Rocket size={18}/>
              </Link> 
              <a href="#pricing-grid" className="btn-outline">
                Explore Core Menu
              </a> 
            </div>
          </div>

          <div className="hero-visual reveal">
            <div className="tech-dashboard">
              <div className="dash-header">
                <div className="dash-dot"></div><div className="dash-dot"></div><div className="dash-dot"></div>
              </div>
              <div className="dash-body">
                <div className="dash-welcome-text">
                  <h3>⚡ Strategic Digital Automation</h3>
                  <p>Accelerate your growth pipeline. We seamlessly integrate MoMo payment channels, engineer pristine Google SEO schemas, publish 4K commercial marketing reels, and configure automated company filing systems.</p>
                  <div className="dash-status-pill">
                    <span className="dash-pulse-dot"></span> Rwanda Infrastructure Active
                  </div>
                </div>
                <Cpu className="dash-icon" size={40} />
              </div>
            </div>
          </div>
        </div>
      </section>




      {/* 3. ALL IN ONE PROJECT TIERS SECTION */}
      <section id="tiers-grid" className="tiers-section container">
        <div className="section-header reveal">
          <span className="sub-title">PROJECT TIERS</span>
          <h2>Looking for a <span className="sig-font">complete</span> setup? Choose a Tier:</h2>
          <div className="accent-bar"></div>
        </div>

        <div className="tiers-grid">
          {projectTiers.map((tier, idx) => (
            <div key={idx} className="tier-card reveal">
              <div className="tier-header">
                <div className="tier-title-wrap">
                  <div className="tier-icon-circle">{tier.icon}</div>
                  <h3>{tier.name}</h3>
                </div>
                <p>{tier.desc}</p>
              </div>
              
              <div className="tier-services-sublist">
                {tier.services.map((srv, sIdx) => (
                  <div key={sIdx} className="tier-service-row">
                    <div className="tier-srv-info">
                      <CheckCircle2 size={14} className="tier-check-icon" />
                      <span className="tier-srv-name">{srv.name}</span>
                    </div>
                    <div className="tier-srv-pricing">
                      <span className="tier-srv-curr">RWF</span>
                      <span className="tier-srv-num">{srv.price}</span>
                      <span className="tier-srv-period">/ {srv.period}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="tier-footer">
                <Link to="/contact" className="btn-tier-action btn-tier-popular">
                  Select This Tier & Order Services
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* 2. PICK ONE THING: INDIVIDUAL SERVICES MENU (NAGARUYE IKI GICE) */}
      <section id="pricing-grid" className="opus-pricing-section container">
        <div className="section-header reveal">
          <span className="sub-title">TRANSPARENT VALUE</span>
          <h2>Pick <span className="sig-font">one</span> thing. Here's our baseline menu:</h2>
          <div className="accent-bar"></div>
        </div>
        
        <div className="opus-menu-grid">
          {singleServices.map((service, idx) => (
            <div key={idx} className="opus-menu-card reveal">
              <div className="opus-card-main">
                <div className="opus-icon-wrap">{service.icon}</div>
                <div className="opus-details">
                  <div className="opus-title-row">
                    <h3>{service.title}</h3>
                    <span className="opus-badge">{service.badge}</span>
                  </div>
                  <p>{service.desc}</p>
                </div>
              </div>
              <div className="opus-price-action">
                <div className="opus-price">
                  <span className="op-curr">RWF</span>
                  <span className="op-num">{service.price}</span>
                </div>
                <Link to="/contact" className="opus-btn-select">Order Service</Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- THINGS PEOPLE ACTUALLY ASK (FAQ) --- */}
      <section className="faq-section container">
        <div className="section-header reveal">
          <span className="sub-title">FAQ</span>
          <h2>Things people <span className="sig-font">actually</span> ask</h2>
          <div className="accent-bar"></div>
        </div>

        <div className="faq-wrapper-list" style={{ maxWidth: '800px', margin: '35px auto 0 auto', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {faqs.map((faq, idx) => {
            const isCurrentActive = activeFaq === idx;
            return (
              <div 
                key={idx} 
                className="faq-item-box reveal"
                style={{
                  background: '#ffffff',
                  border: isCurrentActive ? '2px solid #006400' : '1.5px solid #e2e8f0',
                  borderRadius: '16px',
                  padding: '20px 24px',
                  boxShadow: isCurrentActive ? '0 10px 25px rgba(0, 100, 0, 0.04)' : 'none',
                  transition: 'all 0.3s ease'
                }}
              >
                {/* Umutwe w'ikibazo: Aha niho hantu honyine ho gukanda */}
                <div 
                  className="faq-question-row"
                  onClick={(e) => {
                    e.stopPropagation(); // Birinda ko gukanda kwivuruganya
                    toggleFaq(idx);
                  }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    cursor: 'pointer',
                    userSelect: 'none'
                  }}
                >
                  <div className="faq-q-text" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <HelpCircle size={18} style={{ color: '#006400', flexShrink: 0 }} />
                    <h4 style={{ fontSize: '1.05rem', fontWeight: '700', margin: 0, color: '#111111', textAlign: 'left' }}>{faq.q}</h4>
                  </div>
                  <ChevronDown 
                    size={18} 
                    style={{ 
                      color: isCurrentActive ? '#006400' : '#555555',
                      transform: isCurrentActive ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.2s ease'
                    }} 
                  />
                </div>

                {/* Agasanduku k'Igisubizo: Gafunguka muri React mu buryo buhamye kidashobora kuzimira */}
                {isCurrentActive && (
                  <div 
                    className="faq-answer-block"
                    style={{
                      display: 'block',
                      marginTop: '14px',
                      paddingTop: '14px',
                      borderTop: '1px dashed #e2e8f0'
                    }}
                  >
                    <p style={{ margin: 0, fontSize: '0.95rem', color: '#555555', lineHeight: '1.6', paddingLeft: '30px', textAlign: 'left' }}>
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>



      {/* 5. CTA SECTION */}
      <section className="cta-section container reveal">
        <div className="cta-card">
          <h2>Have custom architecture requirements?</h2>
          <p>Join over 50+ businesses that leverage ByteFlow Ltd's technical ecosystem for scalable business development.</p>
          <Link to="/contact" className="btn-cta">Talk directly to an Engineer <MessageSquare size={18}/></Link>
        </div>
      </section>

    </div>
  );
};

export default Home;
