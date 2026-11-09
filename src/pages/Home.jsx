import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Camera,
  Check,
  Code2,
  Palette,
  Play,
  Sparkles
} from 'lucide-react';
import '../styles/Home.css';
import reel1 from '../assets/reel1.mp4';
import reel2 from '../assets/reel2.mp4';
import reel3 from '../assets/reel3.mp4';
import reel4 from '../assets/reel4.mp4';

const services = [
  {
    number: '01',
    title: 'Graphic design & branding',
    description: 'Clear, memorable identities and visuals that give your brand a consistent voice.',
    icon: <Palette size={20} />
  },
  {
    number: '02',
    title: 'Web development',
    description: 'Responsive websites and digital products designed around your goals and your customers.',
    icon: <Code2 size={20} />
  },
  {
    number: '03',
    title: 'Photography & videography',
    description: 'Thoughtful visual content that helps people see, feel, and remember your story.',
    icon: <Camera size={20} />
  },
  {
    number: '04',
    title: 'Creative digital solutions',
    description: 'Connected creative support to help your business show up with confidence online.',
    icon: <Sparkles size={20} />
  }
];

const reels = [
  { name: 'Reel 01', video: reel1 },
  { name: 'Reel 02', video: reel2 },
  { name: 'Reel 03', video: reel3 },
  { name: 'Reel 04', video: reel4 }
];

const reasons = [
  'We listen before we design.',
  'We combine creative thinking with practical technology.',
  'We make the process clear and collaborative.',
  'We care about the details and the result.'
];

const Home = () => (
  <div className="home-page">
    <section className="home-hero">
      <div className="container home-hero-layout">
        <div className="home-hero-copy">
          <span className="eyebrow"><span className="eyebrow-dot" /> ByteFlow Ltd · Kigali, Rwanda</span>
          <h1>We turn ideas into <span>digital experiences.</span></h1>
          <p className="home-hero-lead">
            We are a creative and technology company helping businesses build stronger brands, useful websites,
            and visual stories that connect with people.
          </p>
          <div className="home-hero-actions">
            <Link to="/contact" className="button button-primary">Start a project <ArrowRight size={17} /></Link>
            <Link to="/portfolio" className="button button-quiet">Explore our work <ArrowUpRight size={17} /></Link>
          </div>
          <div className="home-hero-note"><Check size={15} /> Design, technology, and storytelling in one team</div>
        </div>

        <div className="hero-reel-composition" aria-label="A preview of ByteFlow video work">
          <div className="hero-reel-main">
            <video src={reel1} muted autoPlay loop playsInline preload="metadata" aria-label="ByteFlow creative video preview" />
            <span className="hero-reel-label"><Play size={13} fill="currentColor" /> A glimpse of our creative work</span>
          </div>
          <div className="hero-reel-side">
            {reels.slice(1, 3).map((reel, index) => (
              <div className="hero-reel-mini" key={reel.name} style={{ animationDelay: `${index * 140}ms` }}>
                <video src={reel.video} muted loop playsInline preload="metadata" aria-label={`${reel.name} preview`} />
                <span>{reel.name}</span>
              </div>
            ))}
            <div className="hero-reel-caption"><span className="caption-mark">B.</span><span>Ideas made<br />visible.</span></div>
          </div>
        </div>
      </div>
      <a className="hero-scroll-hint" href="#what-we-do"><span>Discover ByteFlow</span><ArrowDown size={15} /></a>
    </section>

    <section className="home-intro section-space" id="what-we-do">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">What we do</span>
          <h2>Creative thinking.<br /><span>Digital excellence.</span></h2>
          <p>We bring creative design, technology, and strategy together to help your business grow with purpose.</p>
        </div>
        <div className="home-service-grid">
          {services.map((service, index) => (
          <article className="home-service-card" key={service.number} style={{ '--card-index': index }}>
              <div className="home-service-card-top"><span>{service.number}</span><div className="home-service-icon">{service.icon}</div></div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <Link to="/services" aria-label={`Learn about ${service.title}`}><ArrowUpRight size={18} /></Link>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="home-work-section section-space">
      <div className="container">
        <div className="section-heading section-heading-row">
          <div><span className="eyebrow">Selected reels</span><h2>Ideas in <span>motion.</span></h2></div>
          <Link className="text-link" to="/portfolio">Explore all our work <ArrowRight size={16} /></Link>
        </div>
        <p className="work-intro">A small preview of the video stories and creative work we make for brands.</p>
        <div className="home-reel-grid">
          {reels.map((reel) => (
            <Link to="/portfolio" className="home-reel-card" key={reel.name}>
              <video src={reel.video} muted loop playsInline preload="metadata" />
              <span className="home-reel-play"><Play size={15} fill="currentColor" /></span>
              <span className="home-reel-name">{reel.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>

    <section className="home-difference section-space">
      <div className="container difference-layout">
        <div className="section-heading">
          <span className="eyebrow">Why ByteFlow</span>
          <h2>More than just<br /><span>digital solutions.</span></h2>
          <p>We work as a creative partner—bringing the right people and skills together around your vision.</p>
          <Link className="text-link" to="/about">Get to know us <ArrowRight size={16} /></Link>
        </div>
        <div className="difference-list">
          {reasons.map((reason, index) => (
            <div className="difference-item" key={reason}><span>0{index + 1}</span><p>{reason}</p><Check size={17} /></div>
          ))}
        </div>
      </div>
    </section>

    <section className="home-final-cta">
      <div className="container final-cta-inner">
        <span className="eyebrow">Your next idea starts here</span>
        <h2>Have an idea?<br />Let&apos;s make it happen.</h2>
        <p>Tell us what you have in mind. We&apos;re ready to help bring your vision to life.</p>
        <Link to="/contact" className="button button-light">Let&apos;s work together <ArrowRight size={17} /></Link>
      </div>
    </section>
  </div>
);

export default Home;
