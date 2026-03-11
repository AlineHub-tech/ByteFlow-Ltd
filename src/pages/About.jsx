import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Award, Users, ChevronRight, CheckCircle2, Mail } from 'lucide-react';
// Menya neza ko izi foto zihari mu nzu ya assets
import profile from '../assets/profile.png'; 
import about from '../assets/about.jpg'; 
import '../styles/About.css';

const About = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="about-page" style={{ width: '100%', overflowX: 'hidden', background: '#e2e2e2', color: '#fff' }}>
      
      {/* 1. HERO SECTION - COMPACT GLASS */}
      <section 
        className="about-hero" 
        style={{ 
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${about})`,
          backgroundSize: 'cover', backgroundPosition: 'center',
          padding: '80px 20px', minHeight: '50vh', display: 'flex', alignItems: 'center', justifyContent: 'center'
        }}
      >
        <div className="container" style={{ width: '100%', maxWidth: '600px', boxSizing: 'border-box' }}>
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            style={{
  
              padding: "25px", borderRadius: "20px", border: "1px solid rgba(255, 255, 255, 0.1)",
              textAlign: "center", width: '100%', boxSizing: 'border-box'
            }}
          >
            <span style={{ fontSize: '0.75rem', color: '#22c55e', fontWeight: '800', textTransform: 'uppercase' }}>Discover Our Journey</span>
            <h1 style={{ fontSize: 'clamp(1.5rem, 5vw, 2.5rem)', marginTop: '10px' }}>Empowering Digital <span style={{ color: '#22c55e' }}>Innovation</span></h1>
          </motion.div>
        </div>
      </section>
      {/* 3. STORY SECTION & FOUNDER */}
      <section className="story-section" style={{ padding: '60px 20px',backgroundColor:'#ffffff' }}>
        <div className="container story-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '50px', alignItems: 'center' }}>
          
          <motion.div {...fadeIn} style={{ position: 'relative' }}>
            <img src={about} alt="Our Team Story" style={{  width: '100%', borderRadius: '25px', height: '400px', objectFit: 'cover', border: '1px solid rgba(255,255,255,0.1)' }} />
            <div style={{ position: 'absolute', bottom: '-20px', right: '10px', background: '#0f172a', padding: '15px', borderRadius: '15px', border: '1px solid #22c55e', display: 'flex', alignItems: 'center', gap: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}>
              <img src={profile} alt="Founder" style={{ width: '50px', height: '50px', borderRadius: '50%', objectFit: 'cover', border: '2px solid #22c55e' }} />
              <div>
                <h4 style={{ margin: 0, fontSize: '0.9rem' }}>Umugwaneza Aline</h4>
                <span style={{ fontSize: '0.7rem', color: '#22c55e', fontWeight: 'bold' }}>Founder & CEO</span>
              </div>
            </div>
          </motion.div>

          <motion.div {...fadeIn} transition={{ delay: 0.3 }}>
            <span style={{ color: '#22c55e', fontWeight: '800', textTransform: 'uppercase', fontSize: '0.8rem' }}>Our Heritage</span>
            <h2 style={{ fontSize: '2.5rem', margin: '15px 0', fontWeight: '800',color:'black', }}>The <span style={{ color: '#22c55e' }}>ByteFlow</span> Story</h2>
            <p style={{ color:'black', lineHeight: '1.7',fontWeight: '500', marginBottom: '20px' }}>What started as a passion for coding and design has grown into a full-scale digital agency. ByteFlow Ltd stands as a pillar of technology in Kigali.</p>
            <p style={{ color:'black', lineHeight: '1.7',fontWeight: '500' }}>Under the visionary leadership of <b>Umugwaneza Aline</b>, we build long-term partnerships with our clients, ensuring their digital presence is impactful.</p>
            
            {/* 4. STATS SECTION - MUNSI YA HISTORY (KOSOYE) */}
            <div style={{ 
              marginTop: '40px', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px',
              borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '30px'
            }}>
              {[
                { label: 'Years Exp', value: '5+', icon: <Award size={20} color="#22c55e" /> },
                { label: 'Projects', value: '150+', icon: <CheckCircle2 size={20} color="#22c55e" /> },
                { label: 'Clients', value: '500+', icon: <Users size={20} color="#22c55e" /> },
                { label: 'Experts', value: '12+', icon: <Target size={20} color="#22c55e" /> }
              ].map((stat, index) => (
                <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ background: 'rgba(34, 197, 94, 0.44)', padding: '10px', borderRadius: '10px' }}>{stat.icon}</div>
                  <div>
                    <h3 style={{ margin: 0, fontSize: '1.2rem', fontWeight: '800',color: '#000000' }}>{stat.value}</h3>
                    <p style={{ margin: 0, fontSize: '0.75rem', color: '#000000' }}>{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* 2. MISSION & VISION SECTION */}
      <section className="mission-vision container" style={{ padding: '60px 20px', backgroundColor:'#e2e2e2', border: '1px solid rgba(255,255,255,0.1)' }}>
        <div className="section-title" style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 style={{ fontSize: '2rem' }}>Our <span style={{ color: '#22c55e' }}>Purpose</span></h2>
          <p style={{ color: '#0d1014' }}>Guided by excellence, focused on impact.</p>
        </div>
        <div className="mv-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
          <motion.div className="mv-card" {...fadeIn} style={{ background: '#ffffff', padding: '30px', borderRadius: '20px', border: '2px solid rgba(2, 77, 7, 0.28)' }}>
            <div style={{ background: 'rgba(34, 197, 94, 0.1)', width: '60px', height: '60px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
              <Target size={32} color="#22c55e" />
            </div>
            <h3 style={{ fontSize: '1.4rem', marginBottom: '10px' }}>Our Mission</h3>
            <p style={{ color: '#070707', fontSize: '0.9rem', fontWeight:'600', lineHeight: '1.6' }}>To provide high-quality digital services and tech equipment that empower individuals and businesses in Kigali.</p>
          </motion.div>

          <motion.div className="mv-card" {...fadeIn} transition={{ delay: 0.2 }} style={{ background: '#ffffff', padding: '30px', borderRadius: '20px', border: '2px solid rgba(2, 77, 7, 0.28)' }}>
            <div style={{ background: 'rgba(34, 197, 94, 0.1)', width: '60px', height: '60px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
              <Eye size={32} color="#22c55e" />
            </div>
            <h3 style={{ fontSize: '1.4rem', marginBottom: '10px' }}>Our Vision</h3>
            <p style={{ color: '#0e0e0e', fontSize: '0.9rem', fontWeight:'600', lineHeight: '1.6' }}>To become the leading technology partner in East Africa, known for innovation and professional excellence.</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
