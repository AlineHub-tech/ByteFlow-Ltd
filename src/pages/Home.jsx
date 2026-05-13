import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Rocket, CheckCircle2, MessageSquare, Cpu, Globe2, Camera, FileText, Share2, GraduationCap } from 'lucide-react';
import '../styles/Home.css';
import heroBg from '../assets/pro.jpg';

const Home = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('show');
      });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  }, []);

  const pricingPlans = [
    { title: "Essential Pack", price: "150,000", features: ["Graphic Design (Logos & Ads)", "Professional Documentation", "Social Media Branding", "Basic SEO Optimization"], btnText: "Choose Essential", featured: false },
    { title: "Professional", price: "450,000", features: ["Full-Stack Web Development", "Cinematic Videography", "UI/UX & Creative Media", "Digital Growth Strategy"], btnText: "Most Popular", featured: true },
    { title: "Enterprise", price: "1,200,000", features: ["Advanced Software Solutions", "Database & Project Mgmt", "Technical Mentorship", "Full Digital Ecosystem"], btnText: "Contact for Pro", featured: false }
  ];

  return (
    <div className="home-wrapper">
      <div className="tech-dots"></div>

      {/* --- HERO SECTION (KOSOYE: Reduced Height & Original Text) --- */}
      <section className="hero-section" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url(${heroBg})` }}>
        <div className="container hero-flex">
          <div className="hero-text reveal">
            <div className="hero-badge">ByteFlow Engineering</div>
            <h1>Transforming Ideas Into <span className="green-text">Digital Reality</span></h1>
            <p>ByteFlow Ltd provides high-end tech solutions, creative media, and professional documentation to scale your business in the digital era.</p>
            
            <div className="hero-btns"> 
              <Link to="/contact" className="btn-main">
                Launch Project <Rocket size={18}/>
              </Link> 
              <a href="#services" className="btn-outline">
                Our Services
              </a> 
            </div>
          </div>

          <div className="hero-visual reveal">
            <div className="tech-dashboard">
              <div className="dash-header">
                <div className="dash-dot"></div><div className="dash-dot"></div><div className="dash-dot"></div>
              </div>
              <div className="dash-body">
                <pre>
                  <code>
                    <span className="keyword">const</span> <span className="var">ByteFlow</span> = () =&gt; {"{"}
                    <br />
                    {"  "}<span className="comment">// Engineering Digital Success</span>
                    <br />
                    {"  "}<span className="keyword">return</span> <span className="str">"Digital Future"</span>;
                    <br />
                    {"}"};
                  </code>
                </pre>
                <Cpu className="dash-icon" size={40} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- ALL SERVICES SECTION --- */}
      <section id="services" className="services-showcase container">
        <div className="section-header reveal">
          <h2>Our <span className="sig-font">Pro</span> Services</h2>
          <div className="accent-bar"></div>
        </div>
        
        <div className="services-list-grid">
          <div className="s-item reveal">
            <Globe2 className="s-icon" /> 
            <div>
              <h3>Web & Software Dev</h3>
              <p>Front-end, Back-end, UI/UX, and Database Management.</p>
            </div>
          </div>
          <div className="s-item reveal">
            <Camera className="s-icon" /> 
            <div>
              <h3>Creative Media</h3>
              <p>Graphic Design, Pro Photography, and Cinematic Videography.</p>
            </div>
          </div>
          <div className="s-item reveal">
            <FileText className="s-icon" /> 
            <div>
              <h3>Office & Documentation</h3>
              <p>MS Word Reports, Excel Bookkeeping, and Pro PowerPoint.</p>
            </div>
          </div>
          <div className="s-item reveal">
            <Share2 className="s-icon" /> 
            <div>
              <h3>Digital Marketing</h3>
              <p>SEO Ranking, Content Creation, and Digital Strategy.</p>
            </div>
          </div>
          <div className="s-item reveal">
            <GraduationCap className="s-icon" /> 
            <div>
              <h3>Tech Mentorship</h3>
              <p>Git/GitHub Training and Supporting Women in Tech.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- PRICING SECTION --- */}
      <section className="pricing-section container">
        <div className="section-header reveal">
          <h2>Flexible <span className="sig-font">Pricing</span> Plans</h2>
          <p className="pricing-pitch">Upgrade your business with the right tech package.</p>
          <div className="accent-bar"></div>
        </div>
        
        <div className="pricing-grid">
          {pricingPlans.map((plan, idx) => (
            <div key={idx} className={`price-card reveal ${plan.featured ? 'featured' : ''}`}>
              {plan.featured && <div className="popular">Best Choice</div>}
              <h3>{plan.title}</h3>
              <div className="price-box">
                <span className="currency">RWF</span>
                <span className="amount">{plan.price}</span>
              </div>
              <ul className="plan-list">
                {plan.features.map((feat, i) => (
                  <li key={i}><CheckCircle2 size={16} className="check-icon"/> {feat}</li>
                ))}
              </ul>
              <Link to="/contact" className="btn-plan">{plan.btnText}</Link>
            </div>
          ))}
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="cta-section container reveal">
        <div className="cta-card">
          <h2>Ready to <span className="sig-font">Elevate</span> Your Brand?</h2>
          <p>Join 50+ businesses that trust ByteFlow for their digital transformation.</p>
          <Link to="/contact" className="btn-cta">Talk to an Expert <MessageSquare size={18}/></Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
