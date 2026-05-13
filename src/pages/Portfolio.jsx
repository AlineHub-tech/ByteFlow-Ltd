import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Code, Palette, Video, Share2, Globe, Server, Search, Camera, Zap, Award, ExternalLink } from 'lucide-react';
import '../styles/Portfolio.css';
import projectBackground from '../assets/project.jpg';

// IMPORT IMAGES
import alineImg from '../assets/aline.png';
import img1 from '../assets/img1.png';
import img2 from '../assets/img2.png';
import img3 from '../assets/img3.png';
import img4 from '../assets/img4.png';
import img7 from '../assets/img7.png';
import img8 from '../assets/img8.png';
import img9 from '../assets/img9.png';
import abt1 from '../assets/abt1.png';
import seo1 from '../assets/seo1.png';
import seo2 from '../assets/seo2.png';
import d1 from '../assets/d1.png';
import d2 from '../assets/d2.png';
import d3 from '../assets/d3.png';
import host1 from '../assets/host1.png';
import host2 from '../assets/host2.png';
import ne1 from '../assets/ne1.png';

const projects = [
  { id: 0, title: "Aline Personal Portfolio", category: "Web Development", img: alineImg, desc: "Premium high-end personal branding website.", tools: ["React", "Framer Motion"], icon: <Code size={16} />, liveLink: "https://vercel.app" },
  { id: 1, title: "Nexus News Network", category: "Web Development", img: img1, desc: "A dynamic news portal for real-time journalism.", tools: ["React", "Node.js"], icon: <Code size={16} />, liveLink: "https://vercel.app" },
  { id: 2, title: "Imena Move Kids", category: "Web Development", img: img2, desc: "Creative platform for kids' dance groups.", tools: ["Framer", "Firebase"], icon: <Code size={16} />, liveLink: "https://vercel.app" },
  { id: 3, title: "Citizen Complaint", category: "Web Development", img: img3, desc: "Governance tool for reporting issues to leaders.", tools: ["React", "PostgreSQL"], icon: <Code size={16} />, liveLink: "https://vercel.app" },
  { id: 4, title: "Buy & Get", category: "Web Development", img: img4, desc: "Modern E-commerce with secure payments.", tools: ["Next.js", "Stripe API"], icon: <Code size={16} />, liveLink: "https://vercel.app" },
  { id: 7, title: "Personal Banking", category: "Web Development", img: img7, desc: "Secure online banking interface.", tools: ["TypeScript", "Node.js"], icon: <Code size={16} />, liveLink: "https://vercel.app" },
  { id: 8, title: "Accountant System", category: "Web Development", img: img8, desc: "ERP system for payroll & finance.", tools: ["React", "MySQL"], icon: <Code size={16} />, liveLink: "https://vercel.app" },
  { id: 9, title: "A Better Tomorrow Foundation", category: "Web Development", img: abt1, desc: "Organization Digital Platform", tools: ["React", "MySQL"], icon: <Code size={16} />, liveLink: "vercel.app" },
  { id: 10, title: "A Better-T Solution", category: "Web Development", img: img9, desc: "Tech solutions landing page.", tools: ["Vite", "Tailwind CSS"], icon: <Code size={16} />, liveLink: "https://vercel.app" },
  { id: 11, title: "Cloud Infrastructure", category: "Hosting & Domains", img: host1, desc: "High-performance SSD hosting solutions.", tools: ["Litespeed", "cPanel"], icon: <Server size={16} />, liveLink: "#" },
  { id: 12, title: "Managed Server", category: "Hosting & Domains", img: host2, desc: "Secure enterprise server management.", tools: ["Linux", "SSL"], icon: <Server size={16} />, liveLink: "#" },
  { id: 13, title: "Global Domain Registry", category: "Hosting & Domains", img: d1, desc: "Fast .RW and global domain search.", tools: ["DNS", "WHOIS"], icon: <Globe size={16} />, liveLink: "#" },
  { id: 14, title: "E-Commerce SEO", category: "SEO", img: seo1, desc: "Ranking #1 for competitive keywords.", tools: ["Research", "GA4"], icon: <Search size={16} />, liveLink: "#" },
  { id: 15, title: "Technical SEO Audit", category: "SEO", img: seo2, desc: "Optimizing site speed for Google.", tools: ["Audit", "Backlinks"], icon: <Search size={16} />, liveLink: "#" },
  { id: 16, title: "Social Growth Campaign", category: "Digital Marketing", img: ne1, desc: "Facebook & Instagram growth for local brands.", tools: ["Ads Manager", "Meta"], icon: <Share2 size={16} />, liveLink: "#" },
  { id: 22, title: "Corporate Rebranding", category: "Graphic Design", img: d2, desc: "Complete visual identity for tech firms.", tools: ["Illustrator", "Figma"], icon: <Palette size={16} />, liveLink: "#" },
  { id: 28, title: "Cinematic Brand Film", category: "Photography & Video", img: d3, desc: "High-end commercial for tech startups.", tools: ["Premiere Pro", "Drone"], icon: <Video size={16} />, liveLink: "#" }
];

const categories = ['All', 'Web Development', 'Hosting & Domains', 'Digital Marketing', 'Graphic Design', 'Photography & Video', 'SEO'];

const Portfolio = () => {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  return (
    <div className="portfolio-page">
      {/* --- HERO SECTION WITH TABS INSIDE --- */}
      <section className="portfolio-hero" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.85)), url(${projectBackground})` }}>
        <div className="hero-overlay-content container">
          <span className="badge">ByteFlow Masterpieces</span>
          <h1>Engineering <span className="sig-font">Digital Excellence</span></h1>
          <p>Explore our full ecosystem of innovative solutions and <span className="sig-font">Creative</span> media architectures.</p>
          
          {/* TABS FILTER SYSTEM IS HANO NDANI Y'IFOTO */}
          <div className="portfolio-filters">
            {categories.map((cat, i) => (
              <button 
                key={i} 
                className={filter === cat ? 'active' : ''} 
                onClick={() => setFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* --- CARDS GRID --- */}
      <section className="portfolio-grid container">
        <motion.div layout className="grid-layout">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div 
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                key={project.id} 
                className="project-card"
                onClick={() => setSelectedProject(project)}
              >
                <div className="project-media">
                  <img src={project.img} alt={project.title} className="project-img" />
                  <div className="project-overlay-icon">{project.icon}</div>
                </div>
                <div className="project-details">
                  <span className="p-category">{project.category}</span>
                  <h3>{project.title}</h3>
                  <p>{project.desc}</p>
                  <div className="project-tags">
                    {project.tools.map((tool, i) => (
                      <span key={i} className="p-tag">{tool}</span>
                    ))}
                  </div>
                  <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="project-link" 
                    onClick={(e) => e.stopPropagation()}
                  >
                    Launch App <ExternalLink size={14} />
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* --- LIGHTBOX MODAL --- */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            className="portfolio-modal-overlay"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div 
              initial={{ y: 30, scale: 0.98 }} 
              animate={{ y: 0, scale: 1 }} 
              exit={{ y: 30, scale: 0.98 }} 
              className="portfolio-modal-content"
              onClick={(e) => e.stopPropagation()}
            >
              <button className="close-modal-btn" onClick={() => setSelectedProject(null)}><X size={22} /></button>
              <div className="modal-media-box">
                <img src={selectedProject.img} alt={selectedProject.title} className="modal-img" />
              </div>
              <div className="modal-info">
                <span className="badge">{selectedProject.category}</span>
                <h2>{selectedProject.title}</h2>
                <p>{selectedProject.desc}</p>
                <div className="modal-meta">
                  <strong>Built With Tools:</strong>
                  <div className="project-tags">
                    {selectedProject.tools.map((tool, i) => (
                      <span key={i} className="p-tag">{tool}</span>
                    ))}
                  </div>
                </div>
                {selectedProject.liveLink !== "#" && (
                  <a href={selectedProject.liveLink} target="_blank" rel="noreferrer" className="btn-main-modal">
                    Visit Live System <ExternalLink size={16} />
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
