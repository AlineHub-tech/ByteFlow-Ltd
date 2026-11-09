import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Compass, Heart, Lightbulb, ShieldCheck, Sparkles, Target, TrendingUp } from 'lucide-react';
import '../styles/About.css';

const values = [
  { title: 'Innovation', icon: <Lightbulb size={20} />, text: 'We stay curious and look for better, more thoughtful ways to solve problems.' },
  { title: 'Creativity', icon: <Sparkles size={20} />, text: 'We bring fresh ideas and clear creative direction to every project.' },
  { title: 'Quality', icon: <ShieldCheck size={20} />, text: 'We care about the details and build work people can rely on.' },
  { title: 'Excellence', icon: <Target size={20} />, text: 'We hold ourselves to a high standard from the first conversation to delivery.' },
  { title: 'Growth', icon: <TrendingUp size={20} />, text: 'We create digital solutions that help brands move forward.' },
  { title: 'Client satisfaction', icon: <Heart size={20} />, text: 'We listen closely and keep collaboration at the heart of our work.' }
];

const About = () => (
  <div className="about-page">
    <section className="page-hero about-hero">
      <div className="container page-hero-content">
        <span className="eyebrow"><span className="eyebrow-dot" /> About ByteFlow</span>
        <h1>We are ByteFlow Ltd.<br /><span>Engineering digital success.</span></h1>
        <p>We are a creative and technology company helping businesses and individuals bring their ideas to life through innovative digital solutions.</p>
        <Link to="/team" className="button button-primary">Meet the people behind it <ArrowRight size={17} /></Link>
      </div>
    </section>

    <section className="container about-story section-space">
      <div className="section-heading">
        <span className="eyebrow">Our story</span>
        <h2>Every brand has<br /><span>a story worth telling.</span></h2>
      </div>
      <div className="about-story-copy">
        <p>Every idea has the potential to become something extraordinary. Our work combines creativity, strategy, and technology to make those ideas meaningful, functional, and effective.</p>
        <p>From graphic design and branding to web development and visual storytelling, we help our clients build stronger brands and create lasting digital experiences.</p>
        <div className="about-story-note"><Compass size={18} /><span>Creative thinking, practical technology, and a shared vision.</span></div>
      </div>
    </section>

    <section className="about-purpose-section section-space">
      <div className="container about-purpose-grid">
        <article className="purpose-card">
          <span className="purpose-icon"><Target size={21} /></span><span className="eyebrow">Our mission</span>
          <h2>Empower people<br />through creativity.</h2>
          <p>To empower businesses and individuals through creative, innovative, and reliable digital solutions that inspire growth and create meaningful impact.</p>
        </article>
        <article className="purpose-card purpose-card-light">
          <span className="purpose-icon"><Compass size={21} /></span><span className="eyebrow">Our vision</span>
          <h2>A trusted creative<br />technology partner.</h2>
          <p>To become a trusted creative and technology partner, recognized for innovation, quality, and excellence in delivering digital experiences.</p>
        </article>
      </div>
    </section>

    <section className="container about-values-section section-space">
      <div className="section-heading">
        <span className="eyebrow">What guides us</span>
        <h2>Values behind<br /><span>every experience.</span></h2>
      </div>
      <div className="about-values-grid">
        {values.map((value) => (
          <article className="about-value-card" key={value.title}>
            <span>{value.icon}</span><h3>{value.title}</h3><p>{value.text}</p>
          </article>
        ))}
      </div>
    </section>
  </div>
);

export default About;
