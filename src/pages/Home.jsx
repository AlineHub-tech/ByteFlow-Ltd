import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Rocket, CheckCircle2, MessageSquare, Cpu, Code2, Palette, Server, Globe2, Share2, Video, Camera, FileText } from 'lucide-react';
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

  // Urutonde rw'ibiciro ku giti cyacyo kuri buri serivisi (Service-Specific Pricing)
  const individualServicesPricing = [
    { title: "Website Development", price: "350,000", badge: "Starting From", features: ["Custom Corporate Sites", "E-commerce Online Stores", "UI/UX Responsive Design", "Database Apps & Dashboards"], icon: <Code2 className="plan-icon" /> },
    { title: "Graphic Design", price: "15,000", badge: "Starting From", features: ["Logo & Brand Identity Kits", "Social Media Graphics", "Flyers, Brochures & Banners", "Company Profile Layouts"], icon: <Palette className="plan-icon" /> },
    { title: "Web Hosting", price: "50,000", badge: "Per Year", features: ["Shared Cloud Web Hosting", "Dedicated VPS Hosting Servers", "Corporate Business Emails", "Automated Daily Backups"], icon: <Server className="plan-icon" /> },
    { title: "Website Domain Name", price: "15,000", badge: "Per Year", features: ["Local Domains (.rw, .co.rw)", "Global Domains (.com, .net)", "Secure Domain Transfers", "Advanced DNS Management"], icon: <Globe2 className="plan-icon" /> },
    { title: "Digital Marketing & SEO", price: "150,000", badge: "Per Month", features: ["Google Search Ranking (SEO)", "Social Media Management", "Meta & Google Ad Campaigns", "Copywriting & Content Strategy"], icon: <Share2 className="plan-icon" /> },
    { title: "Videography", price: "150,000", badge: "Starting From", features: ["Corporate Promo Videos", "Social Media Reels & TikTok", "Event Highlights & Coverage", "YouTube Video Production"], icon: <Video className="plan-icon" /> },
    { title: "Photography", price: "100,000", badge: "Starting From", features: ["High-End Product Shoots", "Corporate Team Headshots", "Event & Conference Coverage", "Brand Lifestyle Photography"], icon: <Camera className="plan-icon" /> },
    { title: "Office & Documentation", price: "30,000", badge: "Starting From", features: ["Corporate Report Formatting", "Data Entry & Spreadsheets", "Official Business Translations", "Digital Filing Setups"], icon: <FileText className="plan-icon" /> }
  ];

  return (
    <div className="home-wrapper">
      <div className="tech-dots"></div>

      {/* --- HERO SECTION --- */}
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

      {/* --- ALL SERVICES SECTION (Zose uko ari 8 zanditswe neza) --- */}
      <section id="services" className="services-showcase container">
        <div className="section-header reveal">
          <h2>Our <span className="sig-font">Pro</span> Services</h2>
          <div className="accent-bar"></div>
        </div>
        
        <div className="services-list-grid">
          <div className="s-item reveal">
            <Code2 className="s-icon" /> 
            <div>
              <h3>Website Development</h3>
              <p>Corporate sites, E-commerce stores, Web apps, and Custom dashboards.</p>
            </div>
          </div>
          <div className="s-item reveal">
            <Palette className="s-icon" /> 
            <div>
              <h3>Graphic Design</h3>
              <p>Logo identity kits, Social media templates, and Brand identity design.</p>
            </div>
          </div>
          <div className="s-item reveal">
            <Server className="s-icon" /> 
            <div>
              <h3>Web Hosting</h3>
              <p>Secure cloud web hosting, corporate emails, and automated daily backups.</p>
            </div>
          </div>
          <div className="s-item reveal">
            <Globe2 className="s-icon" /> 
            <div>
              <h3>Website Domain Name</h3>
              <p>Local .rw registration and global domain transfers with full DNS control.</p>
            </div>
          </div>
          <div className="s-item reveal">
            <Share2 className="s-icon" /> 
            <div>
              <h3>Digital Marketing & SEO</h3>
              <p>Google #1 SEO Ranking, Meta advertising, and content creation strategy.</p>
            </div>
          </div>
          <div className="s-item reveal">
            <Video className="s-icon" /> 
            <div>
              <h3>Videography</h3>
              <p>Corporate commercials, high-converting social media reels, and event coverage.</p>
            </div>
          </div>
          <div className="s-item reveal">
            <Camera className="s-icon" /> 
            <div>
              <h3>Photography</h3>
              <p>High-end product photoshoot, team headshots, and corporate events.</p>
            </div>
          </div>
          <div className="s-item reveal">
            <FileText className="s-icon" /> 
            <div>
              <h3>Office & Documentation</h3>
              <p>Report formatting, business translations, spreadsheets, and file setup.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- PRICING SECTION (Ibyiciro by'ibiciro kuri buri serivisi) --- */}
      <section className="pricing-section container">
        <div className="section-header reveal">
          <h2>Transparent <span className="sig-font">Pricing</span> Plans</h2>
          <p className="pricing-pitch">Invest in the right tech and creative solutions for your business growth.</p>
          <div className="accent-bar"></div>
        </div>
        
        <div className="pricing-list-grid">
          {individualServicesPricing.map((plan, idx) => (
            <div key={idx} className="price-service-card reveal">
              <div className="price-card-header">
                {plan.icon}
                <h3>{plan.title}</h3>
              </div>
              <div className="price-box">
                <span className="price-badge">{plan.badge}</span>
                <div className="amount-wrapper">
                  <span className="currency">RWF</span>
                  <span className="amount">{plan.price}</span>
                </div>
              </div>
              <ul className="plan-list">
                {plan.features.map((feat, i) => (
                  <li key={i}><CheckCircle2 size={14} className="check-icon"/> {feat}</li>
                ))}
              </ul>
              <Link to="/contact" className="btn-plan">Get Started</Link>
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
