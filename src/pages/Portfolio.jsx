import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Code, Palette, Video, Share2, Globe, Server, Search, Camera, Zap, Award, ExternalLink, ShoppingCart } from 'lucide-react';
import '../styles/Portfolio.css';
import projectBackground from '../assets/project.webp';

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
import hubImg from '../assets/hub.png';
import plusImg from '../assets/plus.png';
import voiceImg from '../assets/voice.png';
import shipingImg from '../assets/shiping.png';

const projects = [
  { id: 0, title: "Aline Personal Portfolio", category: "Web Development", img: alineImg, desc: "A modern personal portfolio built with React, showing projects, skills, and achievements. It includes a clean UI, dynamic project fetching, and responsive design optimized for mobile and desktop users. Made to present professional work and experience clearly.", tools: ["React", "Framer Motion","css Vanilla "], icon: <Code size={16} />, liveLink: "https://aline-site-seven.vercel.app/" },
  { id: 1, title: "ABT Hub", category: "Web Development", img: hubImg, desc: "ABT Hub is a modern platform for A Better Tomorrow Foundation Hub that helps members track financial operations and projects with full transparency. The main dashboard displays real-time data on total savings, fines, and weekly contribution statuses. It also provides a clear breakdown of financial allocations across outreach, investments, and operations, alongside the progress trackers for active community projects.", tools: ["React", "Node.js","MongoDB","Javascript","Express.js","css Vanilla"], icon: <Globe size={16} />, liveLink: "https://abt-hub-org.vercel.app/", outcome: "Improved client engagement with a fast, mobile-friendly services portal." },
  { id: 2, title: "U & J Shop", category: "E-commerce", img: shipingImg, desc: "U & J Shop is a premium fashion e-commerce platform delivering elite boutique apparel, elegant dresses, curated matching sets, and luxury designer handbags. Optimized with a high-converting, single-tap WhatsApp checkout form, the platform ensures a seamless ordering experience paired with guaranteed, 100% free door-to-door delivery from our Muhanga hub straight to Kigali.", tools: ["React", "Stripe","Next.js","javascript","Firebase"], icon: <ShoppingCart size={16} />, liveLink: "https://uj-shipping-com.vercel.app/", outcome: "Turned browsers into buyers with a polished shopping experience." },
  { id: 3, title: "Imena Move Kids", category: "Web Development", img: img2, desc: "Imena Moves is a dance management platform for Imena Moves Kidz featuring full member CRUD operations and daily attendance tracking. The public dashboard displays real-time analytics for total dancers, active collaborators, and daily presence. It features an automated broadcast system for instant administrative announcements, keeping families and partners connected via live MongoDB updates.", tools: ["Framer", "MongDB","React","Express.js","Node.js","Tailwind css"], icon: <Code size={16} />, liveLink: "https://imena-moves-kidz.vercel.app/" },
  { id: 4, title: "Nexus News Network", category: "Web Development", img: img1, desc: "Nexus News Network is a modern digital news platform that delivers timely, high-quality content across major categories including politics, business, culture, sports, opinion, and community. It features multi-section news coverage, a responsive design for smooth browsing, and a robust admin dashboard providing full CRUD content management to control published articles and dynamic media updates.", tools: ["React", "Node.js & Express","MongoDB & Mongoose","JWT (JSON Web Tokens)","Cloudinary","Multer"], icon: <Code size={16} />, liveLink: "https://nexus-news-network.vercel.app/" },
  { id: 5, title: "A Better Tomorrow Foundation", category: "Web Development", img: abt1, desc: "The A Better Tomorrow (ABT) Foundation web platform serves as a digital portal for the organization's mission to support vulnerable groups through mental health services and economic empowerment. It highlights the Hope Center project and includes an interactive portal for member registration. For more information", tools: ["React", "MySQL","css Vanilla","javascript"], icon: <Code size={16} />, liveLink: "https://a-better-tomorrow-foundation-org.vercel.app/" },
  { id: 6, title: "Buy & Get", category: "Web Development", img: img4, desc: "Buy&Get is a modern full-stack e-commerce platform designed for online shopping. It allows users to browse products, shop by category, and access special offers. The platform features an advanced layout with multi-currency support, internationalization options, search capabilities, a comprehensive comparison system, and detailed customer product reviews", tools: ["Next.js", "Stripe API", "React", "Tailwind css"], icon: <Code size={16} />, liveLink: "https://buy-get-e-commerce.vercel.app/" },
  { id: 7, title: "A Better-T Solution", category: "Web Development", img: img9, desc: "A Better Tech Solutions is a modern and premium digital agency website engineered to provide businesses and startups with top-tier technology and creative services. The platform features a responsive user experience highlighting core solutions like high-performance web development, digital infrastructure (cloud hosting and domain registration), and search engine optimization (SEO). It seamlessly connects clients to comprehensive multimedia branding services—such as professional graphic design, photography, and corporate videography—built to elevate brand identity and accelerate business growth", tools: ["Vite","React", "Tailwind CSS"], icon: <Code size={16} />, liveLink: "https://a-better-t-solutions.vercel.app/store" },
  { id: 8, title: "Citizen Complaint", category: "Web Development", img: img3, desc: "The Citizen Complaints & Engagement System is a modern, responsive digital governance platform built to bridge the gap between citizens and authorities. It empowers users to submit and track community issues, suggestions, and feedback through an intuitive, accessible interface. Designed with built-in transparency, the system displays logged concerns in real time, enabling local administrators and service providers to track progress, prioritize community needs, and respond efficiently.This standalone architecture leverages localized storage mechanisms, making the system highly reliable, offline-friendly, and an ideal framework for rapid prototyping and minimum viable products (MVPs).", tools: ["React", "PostgreSQL"], icon: <Code size={16} />, liveLink: "https://citizen-complaint-six.vercel.app/" },
  { id: 9, title: "IntabweFlow", category: "Web Development", img: host1, desc: "IntambweFlow is a productivity dashboard built with React and Vite. It helps users track daily tasks, manage finances (income/expenses), and log daily learning progress. It features a weekly progress tracker (%) using LocalStorage for data persistence and a clean, responsive UI with CSS Flexbox/Grid.", tools: ["TypeScript", "Node.js"], icon: <Server size={16} />, liveLink: "https://intambwe-flow-com.vercel.app/" },
  { id: 10, title: "Voice Impowered", category: "Web Developmen", img: voiceImg, desc: "Empowered Voice is a premium spiritual growth platform and knowledge hub founded by author Ellen Luna. It is built to awaken potential, strengthen faith, and cultivate values rooted in the Word of God, the writings of great thinkers, and the study of history's greatest heroes. Designed to reach audiences across Rwanda and the world, Empowered Voice carries a clear mission to speak, to advocate, and to empower as many lives as possible through wisdom, faith, and truth.", tools: ["React", "Typescript", "Tailwind css"], icon: <Share2 size={16} />, liveLink: "#", outcome: "Positioned the brand as a modern media partner with strong online storytelling." },
  { id: 11, title: "Personal Banking", category: "Web Development", img: img7, desc: "Personal Bank is a modern React web app for managing digital savings and transactions. Users can deposit, withdraw, check balances, and customize their profiles easily. Featuring dark/light mode, responsive design, and secure dashboard navigation Personal Bank offers a smart, smooth banking experience online.", tools: ["TypeScript", "Node.js"], icon: <Code size={16} />, liveLink: "#" },
  { id: 12, title: "NovaPay System", category: "Web Development", img: ne1, desc: "NovaPay is a premier digital banking ecosystem designed for the modern Rwandan economy. institutional trust, it offers a seamless interface for automated goal-based savings, instant multi-bank transfers, and AI-driven wealth analytics. Experience military-grade security with a professional, edge-to-edge responsive design.", tools: ["React", "Node.js & Express","MongoDB & Mongoose","JWT (JSON Web Tokens)"], icon: <Share2 size={16} />, liveLink: "#" },
  { id: 13, title: "Accountant System", category: "Web Development", img: img8, desc: "AccPro is a professional, high-density financial suite designed for modern Rwandan firms. Built for precision and speed, it automates payroll generation, RRA & RSSB tax compliance, and audit-ready reporting. With a secure, local-first architecture , it empowers accountants to lead with clarity.", tools: ["React", "MySQL"], icon: <Code size={16} />, liveLink: "https://vercel.app" },
  { id: 14, title: "Plus", category: "Web Development", img: plusImg, desc: "DevPulse is an enterprise-grade agile project management dashboard built with React and strict TypeScript. Featuring a sleek, responsive Cyberpunk theme (Matte Black & Electric Purple), it delivers real-time sprint velocity metrics, repository tracking, and an interactive HTML5 drag-and-drop Kanban workspace with zero lag.", tools: ["Typescript", "React", "vanilla css"], icon: <Palette size={16} />, liveLink: "#", outcome: "Built trust and clarity for a growing service brand." },
  { id: 15, title: "E-Commerce SEO", category: "SEO", img: seo1, desc: "Ranking #1 for competitive keywords.", tools: ["Research", "GA4"], icon: <Search size={16} />, liveLink: "#" },
  { id: 16, title: "Technical SEO Audit", category: "SEO", img: seo2, desc: "Optimizing site speed for Google.", tools: ["Audit", "Backlinks"], icon: <Search size={16} />, liveLink: "#" },

  { id: 17, title: "Technical SEO Audit", category: "SEO", img: seo2, desc: "Optimizing site speed for Google.", tools: ["Audit", "Backlinks"], icon: <Search size={16} />, liveLink: "#" },
  { id: 18, title: "Social Growth Campaign", category: "Digital Marketing", img: ne1, desc: "Facebook & Instagram growth for local brands.", tools: ["Ads Manager", "Meta"], icon: <Share2 size={16} />, liveLink: "#" },
  { id: 19, title: "Corporate Rebranding", category: "Graphic Design", img: d2, desc: "Complete visual identity for tech firms.", tools: ["Illustrator", "Figma"], icon: <Palette size={16} />, liveLink: "#" },
  { id: 20, title: "Cinematic Brand Film", category: "Photography & Video", img: d3, desc: "High-end commercial for tech startups.", tools: ["Premiere Pro", "Drone"], icon: <Video size={16} />, liveLink: "#" }
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
          <span className="badge">ByteFlow Client Work</span>
          <h1>Built digital platforms for <span className="sig-font">business growth</span></h1>
          <p>Discover our portfolio of websites, e-commerce stores, corporate brands and media campaigns created for Rwandan companies and organizations.</p>

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
                  <img src={project.img} alt={project.title} className="project-img" loading="lazy" />
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
                <img src={selectedProject.img} alt={selectedProject.title} className="modal-img" loading="lazy" />
              </div>
              <div className="modal-info">
                <span className="badge">{selectedProject.category}</span>
                <h2>{selectedProject.title}</h2>
                <p>{selectedProject.desc}</p>
                <div className="modal-meta">
                  <div className="project-meta-item">
                    <span>Industry</span>
                    <strong>{selectedProject.category}</strong>
                  </div>
                  {selectedProject.outcome && (
                    <div className="project-meta-item">
                      <span>Outcome</span>
                      <strong>{selectedProject.outcome}</strong>
                    </div>
                  )}
                </div>
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
