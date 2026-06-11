import React, { useEffect } from 'react';
import { Target, Eye, Award, Heart, Linkedin, Facebook, Instagram, ShieldCheck, Zap, Layers, BarChart3, Star } from 'lucide-react';
import '../styles/About.css';
import heroBg1 from '../assets/pro.webp'; 
import hubImg from '../assets/hub.webp';
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

  // 4 Professional Client Testimonials targeting baseline metrics, corporate validation, and contract trust
  const testimonials = [
    {
      quote: "We chose ByteFlow Ltd because they are a legally registered agency that offers clear, contract-backed timelines. Our corporate platform was deployed in exactly 12 days, and their local payment integration has processed millions in MoMo transactions flawlessly.",
      author: "Kevine K.",
      role: "Operations Director, ABT Group",
      rating: 5
    },
    {
      quote: "Most agencies give vague promises, but ByteFlow provided a bulletproof technical blueprint. They merged our web architecture with premium high-end photography and commercial video assets. Their data transparency helped us scale our sales securely.",
      author: "Jean U.",
      role: "Managing Director, Luxury Apparel Boutique",
      rating: 5
    },
    {
      quote: "ByteFlow built our custom web dashboard and automated management panel with real-time analytics. They didn't just hand over the code; they provided hands-on handoff training for our team and 24/7 technical server protection that keeps us running smoothly.",
      author: "Paccy J.",
      role: "Co-Founder, Imena Tech Hub",
      rating: 5
    },
    {
      quote: "Their combination of Digital Marketing and organic Google SEO indexing doubled our monthly qualified inquiries. They handled our local .RW domain registry and cloud emails transparently. They are easily the most reliable tech partners in Kigali.",
      author: "Aline U.",
      role: "Head of Growth, Professional Logistics Ltd",
      rating: 5
    }
  ];

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

      {/* --- 2. WHY CLIENTS TRUST US (RISK MITIGATION PILLARS) --- */}
      <section className="trust-pillars-section container reveal">
        <div className="section-center-header">
          <span className="badge">Why Choose ByteFlow</span>
          <h2>What makes us your <span className="sig-font">trusted</span> tech partner?</h2>
          <div className="accent-bar"></div>
          <p className="framework-pitch">We eliminate delivery risk. Here are the core parameters local business leaders evaluate before signing a contract with us:</p>
        </div>
        
        <div className="pillars-grid">
          <div className="pillar-card reveal">
            <ShieldCheck className="pillar-icon" />
            <h3>Legally Registered & Transparent</h3>
            <p>We operate as a fully compliant corporate entity in Rwanda. Every project is backed by strict non-disclosure agreements (NDAs) and transparent, itemized contracts.</p>
          </div>
          <div className="pillar-card reveal">
            <Zap className="pillar-icon" />
            <h3>Guaranteed Milestone Timelines</h3>
            <p>We eliminate vague delivery windows. Corporate websites are strictly completed within 7 to 14 days, and custom database applications are deployed within 21 days.</p>
          </div>
          <div className="pillar-card reveal">
            <Layers className="pillar-icon" />
            <h3>Full Hand-off & Active Support</h3>
            <p>We provide comprehensive hand-off training sessions for your personnel, paired with dedicated 24/7 technical server uptime monitoring to prevent operational downtime.</p>
          </div>
          <div className="pillar-card reveal">
            <BarChart3 className="pillar-icon" />
            <h3>Outcome-Driven Architecture</h3>
            <p>We do not build hollow designs. From secure local MTN MoMo/Airtel Money checkouts to Google #1 SEO keyword indexing, every pixel is engineered to convert visitors into buyers.</p>
          </div>
        </div>
      </section>

      {/* --- 3. PHILOSOPHY INTRODUCTION SECTION --- */}
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

      {/* --- 4. TARGET CLIENTS --- */}
      <section className="client-audience container reveal">
        <div className="section-center-header">
          <span className="badge">Target Clients</span>
          <h2>We serve <span className="sig-font">businesses</span>, not just founders</h2>
          <div className="accent-bar"></div>
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

      {/* --- 5. VERIFIED CLIENT TESTIMONIALS (4 CASE STUDIES) --- */}
      <section className="testimonials-section container reveal">
        <div className="section-center-header">
          <span className="badge">Client Testimonials</span>
          <h2>What our corporate <span className="sig-font">partners</span> say</h2>
          <div className="accent-bar"></div>
          <p className="framework-pitch">Real business results from local companies, creative directories, and operations built on ByteFlow's digital infrastructure.</p>
        </div>
        
        <div className="testimonials-grid">
          {testimonials.map((t, idx) => (
            <div key={idx} className="testimonial-card reveal">
              <div className="stars-row">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="#eab308" color="#eab308" />
                ))}
              </div>
              <p className="testimonial-quote">"{t.quote}"</p>
              <div className="testimonial-author-box">
                <div className="author-avatar">{t.author.charAt(0)}</div>
                <div className="author-info">
                  <h5>{t.author}</h5>
                  <span>{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

           {/* --- 6. FEATURED CLIENT WORK --- */}
      <section className="featured-work container reveal">
        <div className="section-center-header">
          <span className="badge">Selected Projects</span>
          <h2>Recent work from our <span className="sig-font">project studio</span></h2>
          <div className="accent-bar"></div>
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
              <p>The A Better Tomorrow (ABT) Foundation web platform serves as a digital portal for the organization's mission to support vulnerable groups through mental health services and economic empowerment. It highlights the Hope Center project and includes an interactive portal for member registration.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- 7. LEADERSHIP & STRATEGY --- */}
      <section className="founder-section container">
        <div className="founder-grid reveal">
          <div className="founder-info">
            <span className="section-subtitle">Leadership & Strategy</span>
            <h2 className="section-title">Meet the Leadership Team</h2>
            <h4 className="founder-name">Umugwaneza Aline</h4>
            <p>
              The establishment of ByteFlow Ltd was catalyzed by a vision to democratize premium tech and media infrastructure 
              for businesses operating in Africa's rapidly growing digital economy.
            </p>
            <p>
              <strong>The Founding Philosophy:</strong> Under the leadership of Umugwaneza Aline, ByteFlow Ltd was built on the 
              principle of continuous digital iteration the "Flow." The team operates on an ecosystem architecture where local companies receive contract-backed, milestone-driven support, helping founders maintain market dominance effortlessly.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
