import React, { useEffect, useState } from 'react';
import { ExternalLink, Play, X } from 'lucide-react';
import '../styles/Portfolio.css';
import alineImg from '../assets/aline.png';
import hubImg from '../assets/hub.png';
import shipingImg from '../assets/shiping.png';
import img1 from '../assets/img1.png';
import img3 from '../assets/img3.png';
import img4 from '../assets/img4.png';
import img9 from '../assets/img9.png';
import abt1 from '../assets/abt1.png';
import reel1 from '../assets/reel1.mp4';
import reel2 from '../assets/reel2.mp4';
import reel3 from '../assets/reel3.mp4';
import reel4 from '../assets/reel4.mp4';
import reel5 from '../assets/reel5.mp4';
import reel6 from '../assets/reel6.mp4';
import reel7 from '../assets/reel7.mp4';

const projects = [
  { title: 'Aline Personal Portfolio', category: 'Web Development', image: alineImg, description: 'A personal portfolio website presenting Aline’s profile, experience, and creative work in a clear, responsive format.' },
  { title: 'ABT Hub', category: 'Digital Platform', image: hubImg, description: 'A digital platform designed to bring the ABT Hub initiative, its information, and its services together online.' },
  { title: 'U & J Shop', category: 'E-commerce', image: shipingImg, description: 'An online shop experience created to introduce products and give customers a simple path to enquire and order.' },
  { title: 'Nexus News Network', category: 'Publishing', image: img1, description: 'A news and publishing website layout built to organize articles and make stories easy to discover.' },
  { title: 'Citizen Complaint System', category: 'Web Application', image: img3, description: 'A web application interface for submitting and following up on citizen feedback and service concerns.' },
  { title: 'A Better Tomorrow Foundation', category: 'Organization Website', image: abt1, description: 'A digital presence for a community-focused organization, with information about its mission and work.' },
  { title: 'Buy & Get', category: 'E-commerce', image: img4, description: 'An online shopping experience focused on product discovery, clear offers, and accessible browsing.' },
  { title: 'A Better-T Solutions', category: 'Business Website', image: img9, description: 'A business website presenting the company, its digital services, and ways for clients to get in touch.' }
];

const reels = [
  { title: 'Reel 01', category: 'Video showcase', video: reel1, description: 'A short-form video from ByteFlow’s creative portfolio. Watch the full clip to see the featured work and visual direction.' },
  { title: 'Reel 02', category: 'Video showcase', video: reel2, description: 'A short-form video from ByteFlow’s creative portfolio. Watch the full clip to see the featured work and visual direction.' },
  { title: 'Reel 03', category: 'Video showcase', video: reel3, description: 'A short-form video from ByteFlow’s creative portfolio. Watch the full clip to see the featured work and visual direction.' },
  { title: 'Reel 04', category: 'Video showcase', video: reel4, description: 'A short-form video from ByteFlow’s creative portfolio. Watch the full clip to see the featured work and visual direction.' },
  { title: 'Reel 05', category: 'Video showcase', video: reel5, description: 'A short-form video from ByteFlow’s creative portfolio. Watch the full clip to see the featured work and visual direction.' },
  { title: 'Reel 06', category: 'Video showcase', video: reel6, description: 'A short-form video from ByteFlow’s creative portfolio. Watch the full clip to see the featured work and visual direction.' },
  { title: 'Reel 07', category: 'Video showcase', video: reel7, description: 'A short-form video from ByteFlow’s creative portfolio. Watch the full clip to see the featured work and visual direction.' }
];

const Portfolio = () => {
  const [activeProject, setActiveProject] = useState(null);

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setActiveProject(null);
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, []);

  return (
    <div className="portfolio-page">
      <section className="page-hero portfolio-hero">
        <div className="container page-hero-content">
          <span className="eyebrow"><span className="eyebrow-dot" /> Our creative showcase</span>
          <h1>Our work speaks<br /><span>for itself.</span></h1>
          <p>Explore the ideas and digital experiences we&apos;ve brought to life. Every project reflects our commitment to thoughtful design and useful technology.</p>
          <a className="button button-primary" href="#portfolio-reels">Watch our reels <Play size={16} /></a>
        </div>
      </section>

      <section className="container portfolio-projects-section section-space">
        <div className="section-heading">
          <span className="eyebrow">Selected projects</span>
          <h2>Made with purpose.<br /><span>Built to make an impact.</span></h2>
          <p>Explore a selection of websites, digital platforms, and creative work from ByteFlow.</p>
        </div>
        <div className="portfolio-project-grid">
          {projects.map((project, index) => (
            <button type="button" className="portfolio-project-card" key={project.title} onClick={() => setActiveProject(project)} style={{ '--card-index': index }}>
              <span className="portfolio-project-image"><img src={project.image} alt={project.title} loading="lazy" /></span>
              <span className="portfolio-project-meta"><span>{project.category}</span><span className="portfolio-project-arrow"><ExternalLink size={16} /></span></span>
              <strong>{project.title}</strong>
            </button>
          ))}
        </div>
      </section>

      <section className="portfolio-reels-section section-space" id="portfolio-reels">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Reels & video</span>
            <h2>Behind the design.<br /><span>Beyond the frame.</span></h2>
            <p>Short-form videos from our creative portfolio. Play each reel here to see the work for yourself.</p>
          </div>
          <div className="portfolio-reel-grid">
            {reels.map((reel, index) => (
              <article className="portfolio-reel-card" key={reel.title} style={{ '--card-index': index }}>
                <div className="portfolio-reel-video">
                  <video src={reel.video} controls playsInline preload="metadata" aria-label={`${reel.title} video`} />
                  <span className="portfolio-reel-tag"><Play size={12} fill="currentColor" /> {reel.category}</span>
                </div>
                <div className="portfolio-reel-copy"><span>{reel.title}</span><p>{reel.description}</p></div>
              </article>
            ))}
          </div>
          <a className="portfolio-instagram-link" href="https://www.instagram.com/byteflow_ltd" target="_blank" rel="noreferrer">
            See more on Instagram <ExternalLink size={16} />
          </a>
        </div>
      </section>

      {activeProject && (
        <div className="portfolio-modal-overlay" onClick={() => setActiveProject(null)} role="presentation">
          <section className="portfolio-modal-content" role="dialog" aria-modal="true" aria-labelledby="portfolio-modal-title" onClick={(event) => event.stopPropagation()}>
            <button type="button" className="portfolio-modal-close" onClick={() => setActiveProject(null)} aria-label="Close project preview"><X size={20} /></button>
            <img src={activeProject.image} alt={activeProject.title} />
            <div className="portfolio-modal-copy"><span className="eyebrow">{activeProject.category}</span><h2 id="portfolio-modal-title">{activeProject.title}</h2><p>{activeProject.description}</p></div>
          </section>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
