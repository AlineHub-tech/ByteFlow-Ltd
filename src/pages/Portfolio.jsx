import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Code, Palette, Video, Share2 } from 'lucide-react';
import '../styles/Portfolio.css';

const projects = [
  // WEB DEVELOPMENT
  {
    id: 1,
    title: "Vuba-Vuba Portal",
    category: "Web Development",
    img: "https://images.unsplash.com",
    desc: "A high-speed React & Node.js platform for real-time logistics.",
    icon: <Code size={20} />
  },
  {
    id: 2,
    title: "Kigali Real Estate",
    category: "Web Development",
    img: "https://images.unsplash.com",
    desc: "Luxury property listing site with advanced search and 3D tours.",
    icon: <Code size={20} />
  },
  // GRAPHIC DESIGN
  {
    id: 3,
    title: "Akagera Coffee Identity",
    category: "Graphic Design",
    img: "https://images.unsplash.com",
    desc: "Premium logo design and eco-friendly packaging system.",
    icon: <Palette size={20} />
  },
  {
    id: 4,
    title: "Inyange Marketing Kit",
    category: "Graphic Design",
    img: "https://images.unsplash.com",
    desc: "Corporate branding and large-scale billboard designs.",
    icon: <Palette size={20} />
  },
  // CONTENT CREATION
  {
    id: 5,
    title: "Visit Rwanda Promo",
    category: "Content Creation",
    img: "https://images.unsplash.com",
    desc: "Cinematic social media campaign with 4K video storytelling.",
    icon: <Video size={20} />
  },
  {
    id: 6,
    title: "Tech-Hub Podcast",
    category: "Content Creation",
    img: "https://images.unsplash.com",
    desc: "Weekly audio-visual production for Kigali's startup ecosystem.",
    icon: <Share2 size={20} />
  }
];

const Portfolio = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Web Development', 'Graphic Design', 'Content Creation'];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="portfolio-v16">
      {/* Luxury Header */}
      <section className="portfolio-hero-v16">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }}
            className="hero-text-area"
          >
            <span className="v16-badge">Our Digital Mastery</span>
            <h1>Showcasing <span className="green-gradient">Innovation.</span></h1>
            <p>We combine strategic code with artistic vision to build brands that matter.</p>
          </motion.div>
          
          <div className="v16-tabs">
            {categories.map(cat => (
              <button 
                key={cat} 
                className={`tab-btn ${filter === cat ? 'active' : ''}`} 
                onClick={() => setFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Dynamic Grid */}
      <section className="portfolio-grid-v16 container">
        <motion.div layout className="v16-grid">
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map(project => (
              <motion.div 
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                key={project.id} 
                className="v16-card"
              >
                <div className="v16-img-box">
                  <img src={project.img} alt={project.title} />
                  <div className="v16-overlay">
                    <ExternalLink size={28} />
                    <span>Explore Project</span>
                  </div>
                </div>
                <div className="v16-info">
                  <div className="v16-meta">
                    {project.icon}
                    <span className="v16-cat">{project.category}</span>
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.desc}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>
    </div>
  );
};

export default Portfolio;
