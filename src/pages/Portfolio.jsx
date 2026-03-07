import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Code, Palette, Video, Share2, Globe, Server, Search, Camera } from 'lucide-react';
import '../styles/Portfolio.css';
import projectBackground from '../assets/project.jpg'; // Ifoto ya Hero

// 1. WEB DEVELOPMENT (Nagumishije amapic yawe yose)
import img1 from '../assets/img1.png'; import img2 from '../assets/img2.png';
import img3 from '../assets/img3.png'; import img4 from '../assets/img4.png';
import img5 from '../assets/img5.png'; import img6 from '../assets/img6.png';
import img7 from '../assets/img7.png'; import img8 from '../assets/img8.png';
import img9 from '../assets/img9.png';
import seo1 from '../assets/seo1.png'; import seo2 from '../assets/seo2.png';
import d1 from '../assets/d1.png'; import d2 from '../assets/d2.png';
import d3 from '../assets/d3.png'; import host1 from '../assets/host1.png';
import host2 from '../assets/host2.png';

const projects = [
  { id: 1, title: "Nexus News Network", category: "Web Development", img: img1, desc: "A dynamic news portal for real-time journalism.", tools: ["React", "Node.js", "Tailwind"], icon: <Code size={20} /> },
  { id: 2, title: "Imena Move Kids", category: "Web Development", img: img2, desc: "Creative platform for kids' dance groups.", tools: ["Framer Motion", "Firebase"], icon: <Code size={20} /> },
  { id: 3, title: "Citizen Complaint", category: "Web Development", img: img3, desc: "Governance tool for reporting issues to leaders.", tools: ["React", "PostgreSQL"], icon: <Code size={20} /> },
  { id: 4, title: "Buy & Get", category: "Web Development", img: img4, desc: "Modern E-commerce with secure payments.", tools: ["Next.js", "Stripe API"], icon: <Code size={20} /> },
  { id: 5, title: "Newwe Agency", category: "Web Development", img: img5, desc: "High-end web agency portfolio site.", tools: ["React", "Three.js"], icon: <Code size={20} /> },
  { id: 6, title: "Smart Saving", category: "Web Development", img: img6, desc: "Financial management for savings groups.", tools: ["React Native", "Chart.js"], icon: <Code size={20} /> },
  { id: 7, title: "Personal Banking", category: "Web Development", img: img7, desc: "Secure online banking interface.", tools: ["TypeScript", "Node.js"], icon: <Code size={20} /> },
  { id: 8, title: "Accountant System", category: "Web Development", img: img8, desc: "ERP system for payroll & finance.", tools: ["React", "MySQL"], icon: <Code size={20} /> },
  { id: 9, title: "A Better-T Solution", category: "Web Development", img: img9, desc: "Tech solutions landing page.", tools: ["Vite", "Tailwind CSS"], icon: <Code size={20} /> },
  { id: 10, title: "Cloud Infrastructure", category: "Hosting & Domains", img: host1, desc: "High-performance SSD hosting solutions.", tools: ["Litespeed", "cPanel"], icon: <Server size={20} /> },
  { id: 11, title: "Managed Server Hosting", category: "Hosting & Domains", img: host2, desc: "Secure enterprise server management.", tools: ["Linux", "SSL"], icon: <Server size={20} /> },
  { id: 12, title: "Global Domain Registry", category: "Hosting & Domains", img: d1, desc: "Fast .RW and global domain search.", tools: ["DNS", "WHOIS"], icon: <Globe size={20} /> },
  { id: 13, title: "Domain Portfolio Manager", category: "Hosting & Domains", img: d2, desc: "Manage multiple domains in one place.", tools: ["API", "Security"], icon: <Globe size={20} /> },
  { id: 14, title: "Bulk Domain Transfer", category: "Hosting & Domains", img: d3, desc: "Easy domain migration services.", tools: ["Automation", "Transfer"], icon: <Globe size={20} /> },
  { id: 15, title: "E-Commerce SEO Boost", category: "SEO", img: seo1, desc: "Ranking #1 for competitive shopping keywords.", tools: ["Keyword Research", "Analytics"], icon: <Search size={20} /> },
  { id: 16, title: "Technical SEO Audit", category: "SEO", img: seo2, desc: "Optimizing site speed and architecture for Google.", tools: ["Audit", "Backlinks"], icon: <Search size={20} /> },
  { id: 17, title: "Digital Marketing Campaign", category: "Digital Marketing", img: "https://unsplash.com", desc: "Facebook & Instagram growth strategies.", tools: ["Social Ads", "ROI"], icon: <Share2 size={20} /> },
  { id: 18, title: "Brand Identity Design", category: "Graphic Design", img: "https://unsplash.com", desc: "Premium logo and branding packages.", tools: ["Illustrator", "Photoshop"], icon: <Palette size={20} /> },
  { id: 19, title: "Cinematic Media Promo", category: "Photography & Video", img: "https://unsplash.com", desc: "Professional 4K cinematography & media.", tools: ["Premiere Pro", "Drone"], icon: <Camera size={20} /> }
];

const Portfolio = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Web Development', 'Hosting & Domains', 'Digital Marketing', 'Graphic Design', 'Photography & Video', 'SEO'];
  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  return (
    <div className="portfolio-v16" style={{ background: '#020617', color: '#fff', width: '100%', overflowX: 'hidden' }}>
      
      {/* 1. HERO SECTION WITH IMAGE & GLASS */}
      <section className="portfolio-hero-v16" style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${projectBackground})`,
        backgroundSize: 'cover', backgroundPosition: 'center',
        padding: '60px 15px', width: '100%', boxSizing: 'border-box'
      }}>
        <div className="container" style={{ padding: '0', maxWidth: '100%' }}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} 
            className="hero-text-area"
            style={{
              background: 'rgba(255, 255, 255, 0.05)', backdropFilter: 'blur(12px)',
              padding: '25px 15px', borderRadius: '20px', border: '1px solid rgba(255, 255, 255, 0.1)',
              width: '95%', maxWidth: '600px', margin: '0 auto', boxSizing: 'border-box'
            }}
          >
            <span className="v16-badge">ByteFlow Mastery</span>
            <h1 style={{ fontSize: 'clamp(1.5rem, 5vw, 2.5rem)', color: '#fff' }}>Engineering <span className="green-gradient">Digital Success.</span></h1>
            <p style={{ color: '#94a3b8' }}>Professional projects and infrastructure solutions.</p>
          </motion.div>
          
          <div className="v16-tabs" style={{ width: '100%', overflowX: 'auto', padding: '15px 0', boxSizing: 'border-box', display: 'flex', gap: '10px' }}>
            {categories.map(cat => (
              <button key={cat} className={`tab-btn ${filter === cat ? 'active' : ''}`} onClick={() => setFilter(cat)} style={{ whiteSpace: 'nowrap', flexShrink: 0 }}>{cat}</button>
            ))}
          </div>
        </div>
      </section>

      {/* 2. GRID SECTION - IYI NIYO IKOSOYE CYANE KURI MOBILE */}
      <section className="container" style={{ padding: '20px 10px', width: '100%', boxSizing: 'border-box' }}>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))', 
          gap: '20px', width: '100%', boxSizing: 'border-box' 
        }}>
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map(p => (
              <motion.div 
                layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                key={p.id} className="v16-card" style={{ width: '100%', margin: '0', boxSizing: 'border-box' }}
              >
                {/* Image Box - Fixed for Mobile Overflow */}
                <div className="v16-img-box" style={{ width: '100%', height: '200px', overflow: 'hidden' }}>
                  <img src={p.img} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>

                <div className="v16-info" style={{ padding: '15px', width: '100%', boxSizing: 'border-box' }}>
                  <div className="v16-meta">
                    {p.icon}
                    <span className="v16-cat">{p.category}</span>
                  </div>
                  <h3>{p.title}</h3>
                  <p className="v16-tech-desc">{p.desc}</p>
                  <div className="v16-tools" style={{ display: 'flex', flexWrap: 'wrap' }}>
                    {p.tools.map((tool, index) => (
                      <span key={index} className="tool-tag">{tool}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
