import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Award, Users, ChevronRight, CheckCircle2, Mail } from 'lucide-react';
import profile from '../assets/profile.png'; 
import '../styles/About.css';
import bout from '../assets/bout.jpg'; 

const About = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="about-page">
      {/* 1. HERO SECTION - IFOTO N'INYANDIKO ZIRI HEJURU */}
      <section 
        className="about-hero" 
        style={{ 
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.75)), url(${bout})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          padding: '80px 20px 140px', // Nashyizemo padding nini hasi ngo stats zijyemo
          minHeight: '80vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative'
        }}
      >
        <div className="container" style={{ display: 'flex', justifyContent: 'center', marginBottom: '40px' }}>
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            style={{
              background: "rgba(0, 0, 0, 0.5)",
              backdropFilter: "blur(12px)",
              padding: "25px 20px",
              borderRadius: "20px",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              maxWidth: "550px",
              textAlign: "center",
            }}
          >
            <span className="subtitle" style={{ fontSize: '0.75rem', color: '#22c55e', fontWeight: '800' }}>Discover Our Journey</span>
            <h1 style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', marginTop: '8px', color: '#fff' }}>
              Empowering Digital <span style={{ color: '#22c55e' }}>Innovation</span>
            </h1>
            <p style={{ fontSize: '0.9rem', margin: '10px 0', color: 'rgba(255,255,255,0.9)' }}>
              ByteFlow Ltd is a premier tech hub in Kigali, bridging the gap between creativity and technology.
            </p>
          </motion.div>
        </div>

        {/* 2. STATS SECTION - NONEHO YASHYIZWE HASI ISOZA HERO */}
        <div 
          className="container" 
          style={{ 
            position: 'absolute', 
            bottom: '-40px', // Ibi bituma imibare isohoka gato ku ifoto ikajya hasi
            left: '50%',
            transform: 'translateX(-50%)',
            width: '100%',
            zIndex: 10
          }}
        >
          <div className="stats-grid" style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', 
            gap: '15px',
            background: '#0f172a', 
            padding: '20px', 
            borderRadius: '20px',
            border: '1px solid rgba(34, 197, 94, 0.2)',
            boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
          }}>
            {[
              { label: 'Exp', value: '5+', icon: <Award size={18}/> },
              { label: 'Projects', value: '150+', icon: <CheckCircle2 size={18}/> },
              { label: 'Clients', value: '500+', icon: <Users size={18}/> },
              { label: 'Expert', value: '12+', icon: <Target size={18}/> }
            ].map((stat, index) => (
              <div key={index} style={{ textAlign: 'center', color: '#fff' }}>
                <div style={{ color: '#22c55e', marginBottom: '5px', display: 'flex', justifyContent: 'center' }}>{stat.icon}</div>
                <h3 style={{ margin: 0, fontSize: '1.2rem' }}>{stat.value}</h3>
                <p style={{ margin: 0, fontSize: '0.7rem', color: '#94a3b8' }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. MISSION & VISION - EXCELLENT PURPOSE (Hasi ya Hero) */}
      <section className="mission-vision container" style={{ marginTop: '80px' }}>
        <div className="section-title" style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2>Our <span style={{ color: '#22c55e' }}>Purpose</span></h2>
          <p>Guided by excellence, focused on impact.</p>
        </div>
        <div className="mv-grid">
          <motion.div className="mv-card" {...fadeIn}>
            <div className="icon-circle"><Target size={32} /></div>
            <h3>Our Mission</h3>
            <p>To provide high-quality digital services and tech equipment that empower individuals and businesses in Kigali.</p>
            <ul className="mv-list">
              <li><ChevronRight size={16} /> Quality Solutions</li>
              <li><ChevronRight size={16} /> Tech Empowerment</li>
            </ul>
          </motion.div>

          <motion.div className="mv-card" {...fadeIn} transition={{ delay: 0.2 }}>
            <div className="icon-circle"><Eye size={32} /></div>
            <h3>Our Vision</h3>
            <p>To become the leading technology partner in East Africa, known for innovation and professional excellence.</p>
            <ul className="mv-list">
              <li><ChevronRight size={16} /> Regional Leadership</li>
              <li><ChevronRight size={16} /> Creative Excellence</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* 4. STORY SECTION */}
      <section className="story-section" style={{ padding: '60px 0' }}>
        <div className="container story-grid">
          <motion.div className="story-img-container" {...fadeIn}>
            <img src="https://unsplash.com" alt="Our Team Story" className="main-story-img" />
            <div className="founder-card">
              <div className="founder-photo-wrapper">
                <img src={profile} alt="Umugwaneza Aline" className="founder-photo" />
              </div>
              <div className="founder-info">
                <h4>Umugwaneza Aline</h4>
                <span className="role">Founder & CEO</span>
                <a href="mailto:umugwanezaaline77@gmail.com" className="founder-email">
                  <Mail size={14} /> umugwanezaaline77@gmail.com
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div className="story-text" {...fadeIn} transition={{ delay: 0.3 }}>
            <span className="tag">Our Heritage</span>
            <h2>The <span>ByteFlow</span> Story</h2>
            <p>Under the visionary leadership of <b>Umugwaneza Aline</b>, we build long-term partnerships with our clients, ensuring their digital presence is as professional as their goals.</p>
            <button className="btn-primary mt-20">Learn More</button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
