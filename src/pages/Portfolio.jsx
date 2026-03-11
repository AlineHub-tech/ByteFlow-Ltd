import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Globe2, Code, Palette, Video, Share2, Globe, Server, Search, Camera, Zap, Award } from 'lucide-react';
import '../styles/Portfolio.css';
import projectBackground from '../assets/project.jpg';

// IMPORT IMAGES
import alineImg from '../assets/aline.png'; 
import img1 from '../assets/img1.png'; import img2 from '../assets/img2.png';
import img3 from '../assets/img3.png'; import img4 from '../assets/img4.png';
import img7 from '../assets/img7.png'; import img8 from '../assets/img8.png';
import img9 from '../assets/img9.png';
import seo1 from '../assets/seo1.png'; import seo2 from '../assets/seo2.png';
import d1 from '../assets/d1.png'; import d2 from '../assets/d2.png';
import d3 from '../assets/d3.png'; import host1 from '../assets/host1.png';
import host2 from '../assets/host2.png';

const projects = [
  // 1. WEB DEVELOPMENT (WITH LIVE LINKS)
  { id: 0, title: "Aline Personal Portfolio", category: "Web Development", img: alineImg, desc: "Premium high-end personal branding website.", tools: ["React", "Framer Motion"], icon: <Code size={16} />, liveLink: "https://vercel.app" },
  { id: 1, title: "Nexus News Network", category: "Web Development", img: img1, desc: "A dynamic news portal for real-time journalism.", tools: ["React", "Node.js"], icon: <Code size={16} />, liveLink: "https://vercel.app" },
  { id: 2, title: "Imena Move Kids", category: "Web Development", img: img2, desc: "Creative platform for kids' dance groups.", tools: ["Framer", "Firebase"], icon: <Code size={16} />, liveLink: "https://vercel.app" },
  { id: 3, title: "Citizen Complaint", category: "Web Development", img: img3, desc: "Governance tool for reporting issues to leaders.", tools: ["React", "PostgreSQL"], icon: <Code size={16} />, liveLink: "https://vercel.app" },
  { id: 4, title: "Buy & Get", category: "Web Development", img: img4, desc: "Modern E-commerce with secure payments.", tools: ["Next.js", "Stripe API"], icon: <Code size={16} />, liveLink: "https://vercel.app" },
  { id: 7, title: "Personal Banking", category: "Web Development", img: img7, desc: "Secure online banking interface.", tools: ["TypeScript", "Node.js"], icon: <Code size={16} />, liveLink: "https://vercel.app" },
  { id: 8, title: "Accountant System", category: "Web Development", img: img8, desc: "ERP system for payroll & finance.", tools: ["React", "MySQL"], icon: <Code size={16} />, liveLink: "https://vercel.app" },
  { id: 9, title: "A Better-T Solution", category: "Web Development", img: img9, desc: "Tech solutions landing page.", tools: ["Vite", "Tailwind CSS"], icon: <Code size={16} />, liveLink: "https://vercel.app" },

  // 2. HOSTING & DOMAINS
  { id: 10, title: "Cloud Infrastructure", category: "Hosting & Domains", img: host1, desc: "High-performance SSD hosting solutions.", tools: ["Litespeed", "cPanel"], icon: <Server size={16} />, liveLink: "#" },
  { id: 11, title: "Managed Server", category: "Hosting & Domains", img: host2, desc: "Secure enterprise server management.", tools: ["Linux", "SSL"], icon: <Server size={16} />, liveLink: "#" },
  { id: 12, title: "Global Domain Registry", category: "Hosting & Domains", img: d1, desc: "Fast .RW and global domain search.", tools: ["DNS", "WHOIS"], icon: <Globe size={16} />, liveLink: "#" },

  // 3. SEO
  { id: 15, title: "E-Commerce SEO", category: "SEO", img: seo1, desc: "Ranking #1 for competitive keywords.", tools: ["Research", "GA4"], icon: <Search size={16} />, liveLink: "#" },
  { id: 16, title: "Technical SEO Audit", category: "SEO", img: seo2, desc: "Optimizing site speed for Google.", tools: ["Audit", "Backlinks"], icon: <Search size={16} />, liveLink: "#" },

  // 4. DIGITAL MARKETING
  { id: 17, title: "Social Growth Campaign", category: "Digital Marketing", img: "https://unsplash.com", desc: "Facebook & Instagram growth for local brands.", tools: ["Ads Manager", "Meta"], icon: <Share2 size={16} />, liveLink: "#" },

  // 5. GRAPHIC DESIGN
  { id: 22, title: "Corporate Rebranding", category: "Graphic Design", img: "https://unsplash.com", desc: "Complete visual identity for tech firms.", tools: ["Illustrator", "Figma"], icon: <Palette size={16} />, liveLink: "#" },

  // 6. PHOTOGRAPHY & VIDEO
  { id: 28, title: "Cinematic Brand Film", category: "Photography & Video", img: "https://unsplash.com", desc: "High-end commercial for tech startups.", tools: ["Premiere Pro", "Drone"], icon: <Video size={16} />, liveLink: "#" }
];

const Portfolio = () => {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  
  const categories = ['All', 'Web Development', 'Hosting & Domains', 'Digital Marketing', 'Graphic Design', 'Photography & Video', 'SEO'];
  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  return (
    <div className="portfolio-v16" style={{ background: '#ffffff', color: '#000000', width: '100%', overflowX: 'hidden' }}>
      
      {/* 1. HERO SECTION WITH NEW ELEMENTS */}
      <section className="portfolio-hero-v16" style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.9)), url(${projectBackground})`,
        backgroundSize: 'cover', backgroundPosition: 'center', padding: '100px 15px 60px', textAlign: 'center'
      }}>
        <div className="container" style={{ width: '100%', maxWidth: '900px', margin: '0 auto' }}>
          
          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '30px', flexWrap: 'wrap' }}>
             <div style={{ background: 'rgb(255, 255, 255)', color:'rgba(3, 78, 16, 0.98)', padding: '10px 20px', borderRadius: '50px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Zap size={16} color="#22c55e" /> <span style={{ fontSize: '0.8rem', fontWeight: 'bold' }}>50+ Live Projects</span>
             </div>
             <div style={{ background: 'rgba(3, 78, 16, 0.98)', color:'white', padding: '10px 20px', borderRadius: '50px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Award size={16} color="#fff" /> <span style={{ fontSize: '0.8rem', fontWeight: 'bold' }}>Top Rated Agency</span>
             </div>
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} 
            style={{  }}>
            <h1 style={{ fontSize: 'clamp(2rem, 6vw, 3.5rem)', fontWeight: '900',color:'white', lineHeight: '1.1' }}>Engineering <span style={{ color: '#006400' }}>Digital Mastery.</span></h1>
            <p style={{ color: '#ffffff', fontSize: '1.1rem', marginTop: '15px' }}>Explore our ecosystem of high-performance software and infrastructure.</p>
          </motion.div>
          
          {/* TABS - NO SCROLL (WRAPPED) */}
          <div style={{ marginTop: '40px', display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center' }}>
            {categories.map(cat => (
              <button key={cat} onClick={() => setFilter(cat)} 
                style={{ padding: '12px 22px', borderRadius: '15px', fontSize: '0.85rem', fontWeight: '800', cursor: 'pointer', border: 'none', transition: '0.3s',
                  background: filter === cat ? '#006400' : 'rgba(255,255,255,0.07)', color: filter === cat ? '#000' : '#fff' }}> {cat} </button>
            ))}
          </div>
        </div>
      </section>

      {/* 2. COMPACT PORTFOLIO GRID */}
      <section style={{ padding: '40px 15px', width: '100%', boxSizing: 'border-box' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 320px), 1fr))', gap: '25px', maxWidth: '1200px', margin: '0 auto' }}>
          <AnimatePresence>
            {filteredProjects.map(p => (
              <motion.div layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                key={p.id} onClick={() => setSelectedProject(p)}
                style={{ background: '#f1f1f1', borderRadius: '24px', overflow: 'hidden', border: '2px solid rgba(0, 0, 0, 0.57)', cursor: 'pointer', transition: '0.3s' }}>
                <div style={{ height: '200px', overflow: 'hidden' }}>
                  <img src={p.img} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ padding: '25px' }}>
                  <div style={{ color: '#22c55e', fontSize: '0.7rem', fontWeight: '900', textTransform: 'uppercase', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    {p.icon} {p.category}
                  </div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: '800' }}>{p.title}</h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* 3. PROJECT DETAIL POP-UP */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.96)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '15px', backdropFilter: 'blur(10px)' }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div initial={{ scale: 0.9, y: 30 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 30 }}
              style={{ background: '#0f172a', width: '100%', maxWidth: '480px', borderRadius: '30px', overflow: 'hidden', border: '1px solid rgba(34, 197, 94, 0.3)', boxShadow: '0 25px 50px rgba(0,0,0,0.5)' }}
              onClick={e => e.stopPropagation()}
            >
              <div style={{ height: '240px', position: 'relative' }}>
                <img src={selectedProject.img} alt={selectedProject.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <button onClick={() => setSelectedProject(null)} style={{ position: 'absolute', top: '20px', right: '20px', background: '#000', border: 'none', color: '#fff', borderRadius: '50%', width: '35px', height: '35px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><X size={20}/></button>
              </div>
              <div style={{ padding: '30px' }}>
                <h2 style={{ fontSize: '1.8rem', fontWeight: '900', color: '#fff', marginBottom: '15px' }}>{selectedProject.title}</h2>
                <p style={{ color: '#94a3b8', fontSize: '1rem', lineHeight: '1.6' }}>{selectedProject.desc}</p>
                <div style={{ marginTop: '20px', display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                  {selectedProject.tools.map((t, i) => (
                    <span key={i} style={{ background: 'rgba(34, 197, 94, 0.1)', color: '#22c55e', padding: '6px 14px', borderRadius: '10px', fontSize: '0.75rem', fontWeight: '800' }}>{t}</span>
                  ))}
                </div>
                {selectedProject.liveLink !== "#" && (
                  <a href={selectedProject.liveLink} target="_blank" rel="noreferrer" 
                     style={{ marginTop: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', background: '#22c55e', color: '#000', padding: '16px', borderRadius: '15px', textDecoration: 'none', fontWeight: '900', fontSize: '1rem' }}>
                    <Globe2 size={20} /> EXPLORE LIVE PROJECT
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Portfolio;
