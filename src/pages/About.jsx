import React, { useEffect } from 'react';
import { Target, Eye, Award, Heart, Linkedin, Facebook, Instagram, ShieldCheck, Zap, Layers, BarChart3 } from 'lucide-react';
import '../styles/About.css';
import heroBg1 from '../assets/pro.webp'; // Ifoto ya Founder ikoresha pro.webp
import hubImg from '../assets/hub.webp';
import heroBg from '../assets/pro.png'; 
import shipingImg from '../assets/shiping.webp';
import plusImg from '../assets/img2.png';
import voiceImg from '../assets/abt1.png';

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
      <section className="about-hero" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.85)), url(${heroBg1})` }}>
        <div className="reveal container hero-inner-text">
          <span className="badge">About ByteFlow Ltd</span>
          <h1>Digital solutions for <span className="sig-font">Rwandan businesses</span></h1>
          <p>
            ByteFlow Ltd is a legally registered, full-service digital technology and creative media agency based in Kigali. We
            build websites, brand systems, media campaigns, and business automation tools for companies, organizations, and
            service providers that need faster digital growth and stronger online credibility.
          </p>
        </div>
      </section>

      {/* --- PHILOSOPHY INTRODUCTION SECTION --- */}
      <section className="philosophy-section container reveal">
        <div className="philosophy-box">
          <p>
            At ByteFlow Ltd, we believe that modern business success requires a seamless intersection between high-performance 
            engineering and impactful visual branding. We remove digital friction for our clients so they can focus on growth,
            customer experience, and operational efficiency. From optimized web platforms to growth-driven media campaigns, our
            services are designed to deliver measurable market impact.
          </p>
        </div>
      </section>

      {/* --- TARGET CLIENTS --- */}
      <section className="client-audience container reveal">
        <div className="section-center-header">
          <span className="badge">Target Clients</span>
          <h2>We serve <span className="sig-font">businesses</span>, not just founders</h2>
          <p className="framework-pitch">ByteFlow works with SMEs, corporate teams, creative agencies, non-profits, and professional service providers that need digital products built to convert.</p>
        </div>
        <div className="audience-grid">
          <div className="audience-card reveal">
            <h4>SMEs & Local Brands</h4>
            <p>Modern online presence, product catalogs, and service websites that build trust and online authority.</p>
          </div>
          <div className="audience-card reveal">
            <h4>Corporate Teams</h4>
            <p>Secure hosting, internal dashboards, and polished brand communications for companies scaling operations.</p>
          </div>
          <div className="audience-card reveal">
            <h4>Creative & Media Projects</h4>
            <p>High-impact visual campaigns, videography, and photography that drive audience engagement.</p>
          </div>
          <div className="audience-card reveal">
            <h4>Retail & E-commerce</h4>
            <p>Online stores with smooth checkout, product management, and payment integration for busy sellers.</p>
          </div>
        </div>
      </section>

      {/* --- FEATURED CLIENT WORK --- */}
      <section className="featured-work container reveal">
        <div className="section-center-header">
          <span className="badge">Selected Projects</span>
          <h2>Recent work from our <span className="sig-font">project studio</span></h2>
          <p className="framework-pitch">These cases highlight how we turn digital ideas into clear business value for Rwandan companies.</p>
        </div>
        <div className="featured-grid">
          <div className="featured-card reveal">
            <img src={hubImg} alt="ABT Hub" loading="lazy" />
            <div className="featured-copy">
              <h4>ABT Hub</h4>
              <p>ABT Hub is a modern platform for A Better Tomorrow Foundation Hub that helps members track financial operations and projects with full transparency. The main dashboard displays real-time data on total savings, fines, and weekly contribution statuses. It also provides a clear breakdown of financial allocations across outreach, investments, and operations, alongside the progress trackers for active community projects.</p>
            </div>
          </div>
          <div className="featured-card reveal">
            <img src={shipingImg} alt="U & J Shop" loading="lazy" />
            <div className="featured-copy">
              <h4>U & J Shop</h4>
              <p>U & J Shop is a premium fashion e-commerce platform delivering elite boutique apparel, elegant dresses, curated matching sets, and luxury designer handbags. Optimized with a high-converting, single-tap WhatsApp checkout form, the platform ensures a seamless ordering experience paired with guaranteed, 100% free door-to-door delivery from our Muhanga hub straight to Kigali.</p>
            </div>
          </div>
          <div className="featured-card reveal">
            <img src={plusImg} alt="Plus" loading="lazy" />
            <div className="featured-copy">
              <h4>Imena Moves Kidz</h4>
              <p>Imena Moves is a dance management platform for Imena Moves Kidz featuring full member CRUD operations and daily attendance tracking. The public dashboard displays real-time analytics for total dancers, active collaborators, and daily presence. It features an automated broadcast system for instant administrative announcements, keeping families and partners connected via live MongoDB updates.</p>
            </div>
          </div>
          <div className="featured-card reveal">
            <img src={voiceImg} alt="Voice Impowered" loading="lazy" />
            <div className="featured-copy">
              <h4>Voice Impowered</h4>
              <p>The A Better Tomorrow (ABT) Foundation web platform serves as a digital portal for the organization's mission to support vulnerable groups through mental health services and economic empowerment. It highlights the Hope Center project and includes an interactive portal for member registration. For more information.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- 2. LEADERSHIP & STRATEGY --- */}
      <section className="founder-section container">
        <div className="founder-grid reveal">
          <div className="founder-info">
            <span className="section-subtitle">Leadership & Strategy</span>
            <h2 className="section-title">Meet the <span className="sig-font">Leadership Team</span></h2>
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
