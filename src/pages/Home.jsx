import React, { useState, useEffect } from 'react';
import { motion} from 'framer-motion';
import { Link } from 'react-router-dom';
import { MoveRight, Zap, Globe, ShieldCheck, Database, Layout, Smartphone, HardDrive } from 'lucide-react';
import '../styles/Home.css';

const Home = () => {
  const slogans = [
    "Software Engineering",
    "Cinematic Branding",
    "Future-Ready Tech",
    "Digital Domination",
    "Elite User Experience"
  ];

  const [activeSlogan, setActiveSlogan] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlogan((prev) => (prev + 1) % slogans.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [slogans.length]);

  return (
    <div className="home-v13">
      {/* 1. HERO SECTION */}
      <section className="hero-v13-section">
        <div className="container centered-content">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="v13-badge-wrapper"
          >
            <span className="v13-badge">ByteFlow Ltd • Engineering the Future</span>
          </motion.div>
          
          <div className="hero-text-block">
            <h1 className="v13-title">
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
                  >
                    {slogans[activeSlogan]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </h1>

            <p className="v13-lead">
              The premier digital ecosystem in Rwanda. We build high-performance 
              software and creative identities for the next generation of global industry leaders.
            </p>

            <div className="v13-cta-group">
              <Link to="/contact" className="btn-v13-primary">
                Get Started <MoveRight size={18} />
              </Link>
              <Link to="/portfolio" className="btn-v13-outline">
                View Our Impact
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE STATS EXPERIENCE (Curiosity Builder) */}
      <section className="v13-stats-bar">
        <div className="container stats-flex">
          <div className="stat-unit">
            <h2>150+</h2>
            <p>Projects Launched</p>
          </div>
          <div className="divider"></div>
          <div className="stat-unit">
            <h2>99%</h2>
            <p>Uptime Guaranteed</p>
          </div>
          <div className="divider"></div>
          <div className="stat-unit">
            <h2>24/7</h2>
            <p>Expert Support</p>
          </div>
        </div>
      </section>

      {/* 3. THE "WHY BYTEFLOW" INTERACTIVE GRID */}
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

      {/* 4. INFINITE TECH SCROLLER (The Tech Stack Curiosity) */}
      <div className="v13-tech-scroller">
        <div className="scroller-inner">
          <span>React.js • Node.js • Next.js • Tailwind CSS • MongoDB • PostgreSQL • AWS • Framer Motion •</span>
          <span>React.js • Node.js • Next.js • Tailwind CSS • MongoDB • PostgreSQL • AWS • Framer Motion •</span>
        </div>
      </div>
    </div>
  );
};

export default Home;

