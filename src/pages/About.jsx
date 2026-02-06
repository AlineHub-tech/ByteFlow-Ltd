import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Award, Users, ChevronRight, CheckCircle2, Mail } from 'lucide-react';
// Menya neza ko ifoto yawe yitwa aline.jpg kandi iri muri src/assets/
import profile from '../assets/profile.png'; 
import '../styles/About.css';

const About = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="about-page">
      {/* 1. Hero Section */}
      <section className="about-hero">
        <div className="container hero-flex">
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="subtitle">Discover Our Journey</span>
            <h1>Empowering Digital <span className="text-highlight">Innovation</span> in Rwanda</h1>
            <p>ByteFlow Ltd is a premier multi-service tech hub in Kigali. We specialize in bridging the gap between human creativity and cutting-edge technology to drive your business forward.</p>
            <div className="hero-btns">
              <button className="btn-primary">Our Portfolio</button>
              <button className="btn-outline">Contact Us</button>
            </div>
          </motion.div>
          
          <motion.div 
            className="hero-image-wrapper"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <img src="https://images.unsplash.com" alt="Tech Innovation Kigali" />
            <div className="floating-card">
              <Award size={20} />
              <span>Top Rated Tech Hub</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {[
              { label: 'Years Experience', value: '5+', icon: <Award /> },
              { label: 'Projects Delivered', value: '150+', icon: <CheckCircle2 /> },
              { label: 'Happy Clients', value: '500+', icon: <Users /> },
              { label: 'Expert Team', value: '12+', icon: <Target /> }
            ].map((stat, index) => (
              <motion.div 
                key={index} 
                className="stat-card"
                {...fadeIn}
                transition={{ delay: index * 0.1 }}
              >
                <div className="stat-icon">{stat.icon}</div>
                <h2>{stat.value}</h2>
                <p>{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Mission & Vision */}
      <section className="mission-vision container">
        <div className="section-title">
          <h2>Our <span>Purpose</span></h2>
          <p>Guided by excellence, focused on impact.</p>
        </div>
        <div className="mv-grid">
          <motion.div className="mv-card" {...fadeIn}>
            <div className="icon-circle"><Target size={32} /></div>
            <h3>Our Mission</h3>
            <p>To provide high-quality digital services and tech equipment that empower individuals and businesses in Kigali to thrive in a digital-first world.</p>
            <ul className="mv-list">
              <li><ChevronRight size={16} /> Quality Solutions</li>
              <li><ChevronRight size={16} /> Tech Empowerment</li>
            </ul>
          </motion.div>

          <motion.div className="mv-card" {...fadeIn} transition={{ delay: 0.2 }}>
            <div className="icon-circle"><Eye size={32} /></div>
            <h3>Our Vision</h3>
            <p>To become the leading technology and creative partner in East Africa, known for seamless solutions, innovation, and professional excellence.</p>
            <ul className="mv-list">
              <li><ChevronRight size={16} /> Regional Leadership</li>
              <li><ChevronRight size={16} /> Creative Excellence</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* 4. Story Section & Founder Details */}
      <section className="story-section">
        <div className="container story-grid">
          <motion.div className="story-img-container" {...fadeIn}>
            <img src="https://images.unsplash.com" alt="Our Team Story" className="main-story-img" />
            
            {/* Founder Overlay Card */}
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
            <p className="lead">What started as a passion for coding and design has grown into a full-scale digital agency.</p>
            <p>Today, ByteFlow Ltd stands as a pillar of technology in Kigali, offering everything from professional web development and commercial photography to high-end tech equipment sales.</p>
            <p>Under the visionary leadership of <b>Umugwaneza Aline</b>, we don't just sell services; we build long-term partnerships with our clients, ensuring their digital presence is as professional and impactful as their business goals.</p>
            <button className="btn-primary mt-20">Learn More</button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
