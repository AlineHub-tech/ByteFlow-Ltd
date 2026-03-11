import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MoveRight, Zap, Globe, ShieldCheck, Database, Layout, Smartphone, HardDrive } from 'lucide-react';
import '../styles/Home.css';
import hero1 from '../assets/hero1.jpg';

const Home = () => {
  const slogans = [
    "Software Engineering",
    "Cinematic Branding",
    "Future-Ready Tech",
    "Digital Domination",
    "Elite User Experience"
  ];

  const [activeSlogan, setActiveSlogan] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const canvasRef = useRef(null);

  // Reba niba ari Mobile cyangwa Desktop
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // MATRIX EFFECT
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    const columns = Math.floor(width / 20);
    const drops = new Array(columns).fill(1);
    const chars = "010101BYTEFLOW";

    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
      ctx.fillRect(0, 0, width, height);
      ctx.fillStyle = "#006400";
      ctx.font = "15px monospace";
      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * 20, drops[i] * 20);
        if (drops[i] * 20 > height && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
      }
    };
    const interval = setInterval(draw, 33);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlogan((prev) => (prev + 1) % slogans.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [slogans.length]);

  return (
    <div className="home-v13">
      {/* 1. HERO SECTION */}
      <section 
        className="hero-v13-section"
        style={{ 
          position: 'relative',
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url(${hero1})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '100%',
          minHeight: isMobile ? '60vh' : '85vh', // Height ntoya kuri Mobile
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden'
        }}
      >
        <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, opacity: 0.15, zIndex: 1 }} />

        <div className="container centered-content" style={{ position: 'relative', zIndex: 5 }}>
          
          {/* GLASS CARD - Iyi niyo ituma text zigaragara neza */}
          <div style={{
            // background: "rgba(255, 255, 255, 0.83)",
            // backdropFilter: "blur(10px)",
            // WebkitBackdropFilter: "blur(10px)",
            // borderRadius: "20px",
            // border: "1px solid rgba(255, 255, 255, 0.1)",
            // padding: isMobile ? "20px" : "40px",
            // margin: "0 auto",
            // maxWidth: "900px",
            // boxShadow: "0 8px 32px rgba(0, 0, 0, 0.5)"
          }}>
            
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="v13-badge-wrapper"
            >
              <span className="v13-badge">ByteFlow Ltd • Engineering the Future</span>
            </motion.div>
            
            <div className="hero-text-block">
              <h1 className="v13-title" style={{ fontSize: isMobile ? '1.8rem' : '3.5rem', lineHeight: 1.2, color:'white'}}>
                Innovating Through <br />
                <div className="slogan-container">
                  <AnimatePresence mode="wait">
                    <motion.span 
                      key={activeSlogan}
                      initial={{ y: 25, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -25, opacity: 0 }}
                      transition={{ duration: 0.5, ease: "backOut" }}
                      className="slogan-span"
                      style={{ color: '#006400' }}
                    >
                      {slogans[activeSlogan]}
                    </motion.span>
                  </AnimatePresence>
                </div>
              </h1>

              <p className="v13-lead" style={{ fontSize: isMobile ? '0.95rem' : '1.2rem', opacity: 0.9 }}>
                The premier digital ecosystem in Rwanda. We build high-performance 
                software and creative identities for the next generation.
              </p>

              <div className="v13-cta-group" style={{ 
                flexDirection: isMobile ? 'column' : 'row', 
                gap: '10px', 
                alignItems: 'center' 
              }}>
                <Link to="/contact" className="btn-v13-primary" style={{ width: isMobile ? '100%' : 'auto' }}>
                  Get Started <MoveRight size={18} />
                </Link>
                <Link to="/portfolio" className="btn-v13-outline" style={{ width: isMobile ? '100%' : 'auto', color:'white' }}>
                  View Our Impact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE STATS EXPERIENCE */}
      <section className="v13-stats-bar">
        <div className="container stats-flex" style={{ flexWrap: isMobile ? 'wrap' : 'nowrap' }}>
          <div className="stat-unit">
            <h2>150+</h2>
            <p>Projects Launched</p>
          </div>
          {!isMobile && <div className="divider"></div>}
          <div className="stat-unit">
            <h2>99%</h2>
            <p>Uptime Guaranteed</p>
          </div>
          {!isMobile && <div className="divider"></div>}
          <div className="stat-unit">
            <h2>24/7</h2>
            <p>Expert Support</p>
          </div>
        </div>
      </section>

      {/* 3. THE FEATURES GRID */}
      <section className="v13-features-modern">
        <div className="container">
          <div className="section-title-center">
            <span className="mini-tag">Our Core Competencies</span>
            <h2>Architecting Excellence</h2>
          </div>

          <div className="feature-interactive-grid">
            <div className="feature-item">
              <div className="icon-circle"><Database size={28} /></div>
              <h4>Backend Scalability</h4>
              <p>Handling millions of requests with robust server-side architecture.</p>
            </div>
            <div className="feature-item">
              <div className="icon-circle"><Layout size={28} /></div>
              <h4>UI/UX Mastery</h4>
              <p>Designing interfaces that are as intuitive as they are beautiful.</p>
            </div>
            <div className="feature-item">
              <div className="icon-circle"><Smartphone size={28} /></div>
              <h4>Mobile First</h4>
              <p>Optimized experiences for the 80% of users on mobile devices.</p>
            </div>
            <div className="feature-item">
              <div className="icon-circle"><HardDrive size={28} /></div>
              <h4>Secure Hosting</h4>
              <p>Enterprise-grade infrastructure for maximum data protection.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. INFINITE TECH SCROLLER */}
      <div className="v13-tech-scroller">
        <div className="scroller-inner">
          <span> Backend Development • Frontend Development • Full-Stack Development • Web Hosting • Domain Name • Digital Marketing • Graphic Design • Typography & Copywriting • Photography • Videography •</span>
          <span> Backend Development • Frontend Development • Full-Stack Development • Web Hosting • Domain Name • Digital Marketing • Graphic Design • Typography & Copywriting • Photography • Videography •</span>
        </div>
      </div>
    </div>
  );
};

export default Home;
