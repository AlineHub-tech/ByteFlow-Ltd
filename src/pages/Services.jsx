import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Camera, Check, Code2, Palette, Share2 } from 'lucide-react';
import '../styles/Services.css';

const services = [
  {
    number: '01',
    title: 'Graphic Design & Branding',
    description: 'We create visual identities and branded materials that communicate who you are, attract attention, and stay memorable.',
    includes: ['Logo design & brand identity', 'Flyers, posters & social media', 'Business stationery & profiles', 'Packaging & campaign design'],
    icon: <Palette size={22} />
  },
  {
    number: '02',
    title: 'Web Development',
    description: 'We design and build responsive websites that make it easier for people to understand your business and take action.',
    includes: ['Business & portfolio websites', 'E-commerce & landing pages', 'Custom web applications', 'Website redesign & maintenance'],
    icon: <Code2 size={22} />
  },
  {
    number: '03',
    title: 'Photography & Videography',
    description: 'We produce visual content that tells your story, showcases your work, and helps your audience connect with your brand.',
    includes: ['Portrait, product & event photography', 'Corporate photography', 'Promotional videos & reels', 'Video editing'],
    icon: <Camera size={22} />
  },
  {
    number: '04',
    title: 'Digital Branding & Creative Solutions',
    description: 'We help you create a consistent brand presence across digital platforms with a clear, connected creative direction.',
    includes: ['Brand strategy & visual identity', 'Social media branding', 'Creative campaigns', 'Content creation & digital visuals'],
    icon: <Share2 size={22} />
  }
];

const process = [
  { number: '01', title: 'We listen', text: 'We understand your business, audience, goals, and what success means for your project.' },
  { number: '02', title: 'We create', text: 'We shape the direction, share our thinking, and work with your feedback as the project takes form.' },
  { number: '03', title: 'We deliver', text: 'We refine the work, prepare the handoff, and help you move confidently into the next step.' }
];

const Services = () => (
  <div className="services-page">
    <section className="page-hero services-hero">
      <div className="container page-hero-content">
        <span className="eyebrow"><span className="eyebrow-dot" /> What we do</span>
        <h1>Creative and digital<br /><span>solutions for real growth.</span></h1>
        <p>We help brands communicate clearly, build a strong identity, and create meaningful experiences across print, web, and media.</p>
        <Link to="/contact" className="button button-primary">Tell us about your project <ArrowRight size={17} /></Link>
      </div>
    </section>

    <section className="container services-list-section section-space">
      <div className="section-heading">
        <span className="eyebrow">Our capabilities</span>
        <h2>One creative partner.<br /><span>All the right skills.</span></h2>
      </div>
      <div className="services-list">
        {services.map((service, index) => (
          <article className="service-detail-card" key={service.number} style={{ '--card-index': index }}>
            <div className="service-detail-number">{service.number}</div>
            <div className="service-detail-icon">{service.icon}</div>
            <div className="service-detail-copy">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul>{service.includes.map((item) => <li key={item}><Check size={15} />{item}</li>)}</ul>
            </div>
            <Link to={`/contact?service=${encodeURIComponent(service.title)}`} className="service-detail-link" aria-label={`Start a ${service.title} project`}><ArrowRight size={19} /></Link>
          </article>
        ))}
      </div>
    </section>

    <section className="service-process-section section-space">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">How we work</span>
          <h2>A thoughtful process.<br /><span>A result you can use.</span></h2>
        </div>
        <div className="service-process-grid">
          {process.map((step) => (
            <article className="service-process-card" key={step.number}>
              <span>{step.number}</span><h3>{step.title}</h3><p>{step.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="container services-bottom-cta">
      <div><span className="eyebrow">Let&apos;s talk</span><h2>Not sure where to start?</h2><p>Share your idea and we&apos;ll help you choose the right service for your goals.</p></div>
      <Link to="/contact" className="button button-primary">Get in touch <ArrowRight size={17} /></Link>
    </section>
  </div>
);

export default Services;
