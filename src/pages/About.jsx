import React, { useEffect } from 'react';
import { Target, Eye, Award, Heart, Linkedin, Facebook, Instagram, ShieldCheck, Zap, Layers, BarChart3 } from 'lucide-react';
import '../styles/About.css';
import heroBg from '../assets/pro.png'; // Ifoto ya Founder ikoresha pro.png

const About = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('show');
      });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about-page">
      <div className="tech-dots"></div>

      {/* --- 1. HERO SECTION --- */}
      <section className="about-hero" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.85)), url(${heroBg})` }}>
        <div className="reveal container hero-inner-text">
          <span className="badge">About ByteFlow Ltd</span>
          <h1>Corporate <span className="sig-font">Overview</span></h1>
          <p>
            ByteFlow Ltd is a legally registered, full-service digital technology consulting and creative media agency 
            headquartered in Kigali, Rwanda (KG 24 Ave, Gasabo). Established to drive the next generation of digital 
            transformation in East Africa, the company serves as a strategic growth partner for small-to-medium enterprises (SMEs), 
            startups, and corporate brands.
          </p>
        </div>
      </section>

      {/* --- PHILOSOPHY INTRODUCTION SECTION --- */}
      <section className="philosophy-section container reveal">
        <div className="philosophy-box">
          <p>
            At ByteFlow Ltd, we believe that modern business success requires a seamless intersection between high-performance 
            engineering and impactful visual branding. We eliminate the technical complexities of the digital world, allowing 
            our clients to focus entirely on scaling their core operations. From writing clean, optimized code for web platforms 
            to executing high-conversion digital marketing frameworks, ByteFlow Ltd delivers end-to-end solutions that guarantee 
            measurable market impact.
          </p>
        </div>
      </section>

      {/* --- 2. LEADERSHIP & FOUNDING VISION --- */}
      <section className="founder-section container">
        <div className="founder-grid reveal">
          <div className="founder-info">
            <span className="section-subtitle">Leadership & Founding Vision</span>
            <h2 className="section-title">Meet the <span className="sig-font">Founder & CEO</span></h2>
            <h4 className="founder-name">Umugwaneza Aline</h4>
            <p>
              The establishment of ByteFlow Ltd was catalyzed by a vision to democratize premium tech and media infrastructure 
              for businesses operating in Africa's rapidly growing digital economy.
            </p>
            <p>
              <strong>The Founding Philosophy:</strong> Under the leadership of Umugwaneza Aline, ByteFlow Ltd was built on the 
              principle of continuous digital iteration—the "Flow." The founder envisioned an ecosystem where businesses do 
              not just acquire software or media assets, but rather integrate technology into their daily operations to automate 
              workflows, lower customer acquisition costs, and build recognizable brand equity.
            </p>
            <div className="founder-socials">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer"><Linkedin size={20} /></a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer"><Facebook size={20} /></a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer"><Instagram size={20} /></a>
            </div>
          </div>
          <div className="founder-visual">
            <div className="founder-frame">
              <img src={heroBg} alt="Umugwaneza Aline - CEO" className="founder-img" />
            </div>
          </div>
        </div>
      </section>

      {/* --- 3. MISSION & VISION --- */}
      <section className="vision-mission container">
        <div className="section-center-header reveal">
          <span className="badge">Corporate Framework</span>
          <h2>Strategic <span className="sig-font">Direction</span></h2>
          <p className="framework-pitch">To maintain our position as an industry leader, ByteFlow Ltd operates under a strict corporate framework guided by the following principles:</p>
        </div>
        <div className="mv-grid">
          <div className="mv-card reveal">
            <Target className="mv-icon" size={36} />
            <h3>Our Mission</h3>
            <p>To accelerate business growth and regional competitiveness across Africa by deploying secure, scalable, and highly optimized digital infrastructure alongside premium creative assets.</p>
          </div>
          <div className="mv-card reveal">
            <Eye className="mv-icon" size={36} />
            <h3>Our Vision</h3>
            <p>To become East Africa’s most trusted and innovative hub for integrated digital engineering, corporate branding, and enterprise business automation.</p>
          </div>
        </div>
      </section>

      {/* --- CORE VALUES --- */}
      <section className="values-section container">
        <div className="section-center-header reveal">
          <h2>Core <span className="sig-font">Values</span></h2>
          <div className="accent-bar"></div>
        </div>
        <div className="values-grid">
          <div className="value-item reveal">
            <Zap className="v-icon" size={30} />
            <h4>Innovation First</h4>
            <p>We leverage modern tech stacks (including React and Next.js) to build future-proof products.</p>
          </div>
          <div className="value-item reveal">
            <ShieldCheck className="v-icon" size={30} />
            <h4>Absolute Integrity</h4>
            <p>Transparent pricing, secure data handling, and reliable service uptime.</p>
          </div>
          <div className="value-item reveal">
            <Award className="v-icon" size={30} />
            <h4>Client-Centric Execution</h4>
            <p>Every line of code written and every frame captured is designed to solve a specific business problem.</p>
          </div>
          <div className="value-item reveal">
            <Layers className="v-icon" size={30} />
            <h4>Agility</h4>
            <p>The digital landscape changes daily; our team adapts instantly to global best practices.</p>
          </div>
        </div>
      </section>

      {/* --- 4. COMPREHENSIVE SERVICE PORTFOLIO --- */}
      <section className="portfolio-divisions container">
        <div className="section-center-header reveal">
          <span className="badge">Corporate Structure</span>
          <h2>Comprehensive Service <span className="sig-font">Portfolio</span></h2>
          <p className="framework-pitch">ByteFlow Ltd operates through two primary corporate divisions:</p>
        </div>
        
        <div className="divisions-grid">
          {/* Division A */}
          <div className="division-card reveal">
            <div className="div-header">
              <span className="div-num">A</span>
              <h3>The Tech Engineering Wing</h3>
            </div>
            <div className="div-body">
              <div className="div-bullet">
                <strong>Full-Stack Web Development:</strong>
                <p>We architecture, design, and deploy web applications tailored to business requirements. We specialize in building fast, interactive user interfaces using modern frameworks, ensuring cross-device compatibility and clean code structures.</p>
              </div>
              <div className="div-bullet">
                <strong>Corporate Web Hosting & Domain Management:</strong>
                <p>We provide high-security server environments with guaranteed 99.9% uptime, regular data backups, and SSL certifications alongside local and international domain registration (.rw, .com, .net, etc.).</p>
              </div>
              <div className="div-bullet">
                <strong>Search Engine Optimization (SEO):</strong>
                <p>We implement technical, on-page, and off-page SEO strategies to position our clients’ web platforms on the first page of global search engines like Google, maximizing organic traffic.</p>
              </div>
            </div>
          </div>

          {/* Division B */}
          <div className="division-card reveal">
            <div className="div-header">
              <span className="div-num">B</span>
              <h3>The Creative Media Hub</h3>
            </div>
            <div className="div-body">
              <div className="div-bullet">
                <strong>Corporate Branding & Graphic Design:</strong>
                <p>We formulate complete visual identities for new and existing businesses, including logo creation, typography rules, corporate stationery, and comprehensive brand guidelines.</p>
              </div>
              <div className="div-bullet">
                <strong>Digital Marketing & Growth Hacking:</strong>
                <p>We design and manage high-conversion advertising campaigns across social media channels and search networks, utilizing data analytics to maximize Return on Ad Spend (ROAS).</p>
              </div>
              <div className="div-bullet">
                <strong>Premium Photography & Videography:</strong>
                <p>Our creative production unit delivers high-resolution commercial photography, corporate profile videos, product shoots, and digital media content tailored for marketing campaigns.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 5. WHY BUSINESSES CHOOSE US --- */}
      <section className="why-choose-section container">
        <div className="why-box-wrapper reveal">
          <div className="why-header">
            <h2>Why Businesses Choose <span className="sig-font">ByteFlow Ltd</span></h2>
          </div>
          <div className="why-reasons-grid">
            <div className="reason-item">
              <div className="reason-icon">01</div>
              <div>
                <h4>Localized Expertise with Global Standards</h4>
                <p>While based in Kigali, our technical execution matches international benchmarks.</p>
              </div>
            </div>
            <div className="reason-item">
              <div className="reason-icon">02</div>
              <div>
                <h4>End-to-End Execution</h4>
                <p>Businesses do not need to hire a separate software company, a branding agency, and a production house. ByteFlow Ltd handles everything under one roof.</p>
              </div>
            </div>
            <div className="reason-item">
              <div className="reason-icon">03</div>
              <div>
                <h4>Data-Driven Results</h4>
                <p>We do not just build websites; we analyze metrics, track user behaviors, and optimize platforms for actual financial conversion.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
