import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Rocket,
  CheckCircle2,
  MessageSquare,
  Cpu,
  Code2,
  Palette,
  Server,
  Globe2,
  Share2,
  Video,
  Camera,
  FileText,
  HelpCircle,
  ChevronDown,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import '../styles/Home.css';
import heroBg from '../assets/pro.webp';

const Home = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          }
        });
      },
      { threshold: 0.12 }
    );

    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const highlights = [
    {
      title: 'Clear websites',
      text: 'Professional websites that explain your business in seconds and work on every screen.',
      icon: <Code2 />
    },
    {
      title: 'Brand design',
      text: 'Logos, visuals, and social media assets that make your brand feel trusted and modern.',
      icon: <Palette />
    },
    {
      title: 'Digital growth',
      text: 'SEO, ads, and content support that help more people discover your business online.',
      icon: <Share2 />
    },
    {
      title: 'Reliable hosting',
      text: 'Domains, secure hosting, and simple support so your website stays online and safe.',
      icon: <Server />
    }
  ];

  const steps = [
    {
      title: 'Tell us your goal',
      text: 'We start with a simple conversation about your business, target audience, and what you want people to do.'
    },
    {
      title: 'We design the right solution',
      text: 'We create a website, brand, or marketing plan that fits your needs and your budget.'
    },
    {
      title: 'You launch with confidence',
      text: 'We deliver a polished result, guide you through it, and help you grow from day one.'
    }
  ];

  const audiences = [
    {
      title: 'For businesses',
      text: 'Shops, clinics, agencies, and service providers that want a strong online presence.'
    },
    {
      title: 'For startups',
      text: 'New brands that need a professional platform to look serious and attract clients.'
    },
    {
      title: 'For creators',
      text: 'Freelancers, coaches, and content makers who want a simple digital home.'
    }
  ];

  const tierPackages = [
    {
      name: 'Web Development',
      badge: 'Websites & web apps',
      price: 'From 350,000 RWF',
      description: 'Modern websites and web-based tools that help your business look credible and perform smoothly.',
      points: [
        { label: 'Landing page', price: '350,000 RWF' },
        { label: 'Business website', price: '650,000 RWF' },
        { label: 'E-commerce store', price: '600,000 RWF' },
        { label: 'Web app / dashboard', price: '1,200,000 RWF' }
      ],
      icon: <Code2 />,
      cta: 'Build this web development package'
    },
    {
      name: 'Graphic Design',
      badge: 'Branding & visuals',
      price: 'From 80,000 RWF',
      description: 'Professional logos, branded visuals, and print materials that make your business look polished.',
      points: [
        { label: 'Logo design', price: '80,000 RWF' },
        { label: 'Brand kit', price: '180,000 RWF' },
        { label: 'Business cards', price: '20,000 RWF' },
        { label: 'Flyers & brochures', price: '15,000 RWF' }
      ],
      icon: <Palette />,
      cta: 'Create this graphic design package'
    },
    {
      name: 'Photography',
      badge: 'Product & business photos',
      price: 'From 100,000 RWF',
      description: 'Clear product, company, and event photography that gives your brand a professional feel.',
      points: [
        { label: 'Product photos', price: '100,000 RWF' },
        { label: 'Corporate portraits', price: '80,000 RWF' },
        { label: 'Event coverage', price: '150,000 RWF' },
        { label: 'Photo editing', price: 'Included' }
      ],
      icon: <Camera />,
      cta: 'Book this photography package'
    },
    {
      name: 'Videography',
      badge: 'Reels & promo videos',
      price: 'From 40,000 RWF',
      description: 'Short promotional videos and storytelling content that help people connect with your brand quickly.',
      points: [
        { label: 'Social reel', price: '40,000 RWF' },
        { label: 'Product video', price: '150,000 RWF' },
        { label: 'Corporate video', price: '300,000 RWF' },
        { label: 'Editing & delivery', price: 'Included' }
      ],
      icon: <Video />,
      cta: 'Book this videography package'
    },
    {
      name: 'Digital Marketing',
      badge: 'SEO & online growth',
      price: 'From 150,000 RWF',
      description: 'SEO, content support, and online visibility services that help more people find your business.',
      points: [
        { label: 'SEO setup', price: '150,000 RWF / mo' },
        { label: 'Website copy', price: '80,000 RWF' },
        { label: 'Social content plan', price: '60,000 RWF' },
        { label: 'Ads support', price: '200,000 RWF / mo' }
      ],
      icon: <Share2 />,
      cta: 'Grow with this digital marketing package'
    },
    {
      name: 'Corporate Office & Documentation',
      badge: 'Admin & professional docs',
      price: 'From 50,000 RWF',
      description: 'Professional business documents, reports, and formal materials that help your company look organized.',
      points: [
        { label: 'Business profile', price: '50,000 RWF' },
        { label: 'Proposal & report design', price: '40,000 RWF' },
        { label: 'Company documents', price: '60,000 RWF' },
        { label: 'Document formatting', price: 'Included' }
      ],
      icon: <FileText />,
      cta: 'Get this documentation package'
    },
    {
      name: 'Cloud Hosting & Domain Registry',
      badge: 'Secure online presence',
      price: 'From 15,000 RWF',
      description: 'Reliable domains, hosting, business emails, and backups that keep your website active and protected.',
      points: [
        { label: 'Domain registration', price: '15,000 RWF / year' },
        { label: 'Hosting package', price: '40,000 RWF / year' },
        { label: 'Business email', price: '25,000 RWF / year' },
        { label: 'Backup support', price: '20,000 RWF / year' }
      ],
      icon: <Server />,
      cta: 'Choose this hosting package'
    }
  ];

  const faqs = [
    { q: 'What kind of businesses do you help?', a: 'We support small businesses, startups, schools, shops, and creative professionals who want a modern and trustworthy online presence.' },
    { q: 'Can I start with one service only?', a: 'Yes. Many clients begin with a website or a logo and later add marketing, hosting, or more design support.' },
    { q: 'Do you help with mobile-friendly websites?', a: 'Absolutely. Every website we build is designed to look clear and easy to use on mobile, tablet, and desktop.' },
    { q: 'How long does a project take?', a: 'Simple websites can be ready in a few days, while larger builds may take a couple of weeks depending on the scope.' }
  ];

  return (
    <div className="home-wrapper">
      <div className="tech-dots" aria-hidden="true" />

      <section
        className="hero-section"
        style={{ backgroundImage: `linear-gradient(135deg, rgba(3, 23, 13, 0.93) 0%, rgba(0, 70, 35, 0.8) 55%, rgba(2, 16, 10, 0.94) 100%), url(${heroBg})` }}
      >
        <div className="container hero-flex">
          <div className="hero-text reveal">
            <div className="hero-badge">
              <Sparkles size={14} /> Simple digital solutions for growing brands
            </div>
            <h1>
              We help you look professional online and make your message easy to understand.
            </h1>
            <p>
              ByteFlow builds clean websites, strong branding, and simple digital marketing for businesses and creators who want to grow with confidence.
            </p>

            <div className="hero-btns">
              <Link to="/contact" className="btn-main">
                Start your project <Rocket size={18} />
              </Link>
              <a href="#services" className="btn-outline">
                See our services
              </a>
            </div>

            <ul className="hero-points">
              <li>Mobile-friendly websites</li>
              <li>Professional branding</li>
              <li>Easy online growth</li>
            </ul>
          </div>

          <div className="hero-visual reveal">
            <div className="hero-visual-card">
              <div className="hero-image-frame">
                <img src={heroBg} alt="Professional digital services for businesses" />
              </div>
              <div className="hero-visual-info">
                <h3>Professional digital solutions</h3>
                <p>We build clear websites, polished branding, and smart marketing that helps people trust your brand quickly.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="highlights-section container">
        <div className="section-header reveal">
          <span className="sub-title">WHAT WE DO</span>
          <h2>Clear services that help your brand stand out.</h2>
          <div className="accent-bar" />
        </div>

        <div className="feature-grid">
          {highlights.map((item, index) => (
            <article key={index} className="feature-card reveal">
              <div className="feature-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="process-section">
        <div className="container">
          <div className="section-header reveal">
            <span className="sub-title">HOW IT WORKS</span>
            <h2>Simple steps from idea to launch.</h2>
            <div className="accent-bar" />
          </div>

          <div className="process-grid">
            {steps.map((step, index) => (
              <article key={index} className="process-card reveal">
                <div className="process-number">0{index + 1}</div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="audience-section container">
        <div className="section-header reveal">
          <span className="sub-title">WHO WE SERVE</span>
          <h2>Built for people who want to be easy to trust online.</h2>
          <div className="accent-bar" />
        </div>

        <div className="audience-grid">
          {audiences.map((audience, index) => (
            <article key={index} className="audience-card reveal">
              <h3>{audience.title}</h3>
              <p>{audience.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="services" className="service-section container">
        <div className="section-header reveal">
          <span className="sub-title">CHOOSE A TIER</span>
          <h2>Pick a service tier that fits your goals and budget.</h2>
          <div className="accent-bar" />
          <p className="section-copy">Choose one service or build a full digital package with clear options, transparent pricing, and a direct path to order.</p>
        </div>

        <div className="service-quick-prompt reveal">
          <div>
            <span className="prompt-pill">Flexible packages</span>
            <h3>Need a full digital launch?</h3>
            <p>We can combine branding, design, growth, and support into one focused package that feels simple and professional.</p>
          </div>
          <Link to="/contact" className="service-btn prompt-btn">
            Build a full digital package <ArrowRight size={16} />
          </Link>
        </div>

        <div className="tier-package-grid">
          {tierPackages.map((tier, index) => (
            <article key={index} className="tier-package-card reveal">
              <div className="tier-card-top">
                <div className="service-icon">{tier.icon}</div>
                <div>
                  <div className="service-title-row">
                    <h3>{tier.name}</h3>
                    <span className="service-badge">{tier.badge}</span>
                  </div>
                  <p>{tier.description}</p>
                </div>
              </div>

              <div className="tier-price-tag">{tier.price}</div>

              <ul className="tier-list">
                {tier.points.map((item, pointIndex) => (
                  <li key={pointIndex}>
                    <span>{item.label}</span>
                    <strong>{item.price}</strong>
                  </li>
                ))}
              </ul>

              <Link to="/contact" className="service-btn tier-btn">
                {tier.cta} <ArrowRight size={16} />
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="faq-section container">
        <div className="section-header reveal">
          <span className="sub-title">FAQ</span>
          <h2>Helpful answers for first-time visitors.</h2>
          <div className="accent-bar" />
        </div>

        <div className="faq-wrapper-list">
          {faqs.map((faq, index) => {
            const isOpen = activeFaq === index;

            return (
              <div key={index} className={`faq-item-box reveal ${isOpen ? 'faq-active' : ''}`}>
                <button
                  className="faq-question-row"
                  onClick={() => toggleFaq(index)}
                  aria-expanded={isOpen}
                >
                  <div className="faq-q-text">
                    <HelpCircle size={18} />
                    <h4>{faq.q}</h4>
                  </div>
                  <ChevronDown size={18} className={`faq-arrow ${isOpen ? 'open' : ''}`} />
                </button>

                {isOpen && (
                  <div className="faq-answer-block" role="region">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      <section className="cta-section container reveal">
        <div className="cta-card">
          <div>
            <h2>Ready to build something clear and professional?</h2>
            <p>Let us create a website and digital experience that helps your audience understand your business quickly.</p>
          </div>
          <Link to="/contact" className="btn-cta">
            Talk to us <MessageSquare size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
