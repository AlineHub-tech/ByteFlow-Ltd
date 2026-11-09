import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Linkedin } from 'lucide-react';
import '../styles/About.css';
import alineImg from '../assets/aline1.jpeg';
import yvesImg from '../assets/yves.jpg';
import blaiseImg from '../assets/blaise.jpg';
import princeImg from '../assets/prince.jpg';

const members = [
  { name: 'Umugwaneza Aline', role: 'Founder & Graphic Designer', description: 'Founded ByteFlow and leads its visual identity, shaping thoughtful graphic design and creative direction for the brand.', image: alineImg },
  { name: 'Mutijima Yves', role: 'Creative Social Media Manager', description: 'Leads ByteFlow’s creative social media presence, managing content and helping the brand connect with its audience.', image: yvesImg },
  { name: 'Mugisha Blaise', role: 'Lead Developer', description: 'Leads development, turning ideas into reliable, responsive websites and digital solutions.', image: blaiseImg },
  { name: 'Kwitonda Price', role: 'Business Development', description: 'Builds relationships and supports ByteFlow’s growth by connecting client goals with the right creative solutions.', image: princeImg }
];

const Team = () => (
  <div className="team-page">
    <section className="page-hero team-hero">
      <div className="container page-hero-content">
        <span className="eyebrow"><span className="eyebrow-dot" /> The people behind ByteFlow</span>
        <h1>Good ideas take<br /><span>a good team.</span></h1>
        <p>Meet the people bringing creativity, care, and technical skill to every ByteFlow project.</p>
      </div>
    </section>

    <section className="container team-section section-space">
      <div className="section-heading">
        <span className="eyebrow">Meet our team</span>
        <h2>People with purpose.<br /><span>Creativity with direction.</span></h2>
        <p>Behind every idea, every design, and every digital experience is a team working together toward a shared vision.</p>
      </div>
      <div className="team-grid">
        {members.map((member, index) => (
          <article className="team-card" key={member.name} style={{ '--card-index': index }}>
            <div className="team-photo"><img src={member.image} alt={member.name} loading="lazy" /></div>
            <div className="team-card-copy">
              <span className="team-role">{member.role}</span>
              <h3>{member.name}</h3>
              <p>{member.description}</p>
              <span className="team-card-mark"><Linkedin size={16} /></span>
            </div>
          </article>
        ))}
      </div>
    </section>
    <section className="container team-cta">
      <div><span className="eyebrow">Let&apos;s work together</span><h2>Have a good idea?</h2><p>We&apos;d love to hear what you&apos;re working on.</p></div>
      <Link to="/contact" className="button button-primary">Start a conversation <ArrowRight size={17} /></Link>
    </section>
  </div>
);

export default Team;
