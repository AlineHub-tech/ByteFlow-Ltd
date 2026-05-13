import React, { useEffect } from 'react';
import { Code2, Palette, FileText, Share2, GraduationCap, CheckCircle2 } from 'lucide-react';
import '../styles/Services.css';
import heroBg from '../assets/ss.JPG'; // Twazanyemo ifoto yawe hano

const Services = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('show');
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    window.scrollTo(0, 0);
  }, []);

  const serviceDetails = [
    { id: "01", title: "Web & Software Development", description: "We build high-performance, scalable digital solutions. From complex backend systems to stunning frontend interfaces, we engineer success.", subServices: ["Full-Stack Web Apps", "UI/UX Responsive Design", "Database Architecture"], tools: ["React.js", "Node.js", "Tailwind CSS", "MongoDB", "Figma"], icon: <Code2 size={32} /> },
    { id: "02", title: "Creative Media Services", description: "Visual storytelling that captures attention. We create brand identities and cinematic content that makes your business stand out.", subServices: ["Professional Branding", "Product Photography", "Cinematic Video Editing"], tools: ["Adobe Photoshop", "Illustrator", "Premiere Pro", "After Effects"], icon: <Palette size={32} /> },
    { id: "03", title: "Professional Office & Documentation", description: "Streamlining your business operations with high-quality documentation and data management services.", subServices: ["Business Plans & Reports", "Excel Bookkeeping", "Advanced Presentations"], tools: ["MS Word", "MS Excel", "MS PowerPoint", "PDF Expert"], icon: <FileText size={32} /> },
    { id: "04", title: "Digital Marketing & Growth", description: "Increase your reach and revenue. We optimize your online presence to ensure you dominate your market niche.", subServices: ["SEO (Google Ranking)", "Content Creation", "Digital Strategy"], tools: ["Google Search Console", "Meta Business Suite", "SEMrush", "Canva"], icon: <Share2 size={32} /> },
    { id: "05", title: "Entrepreneurship & Technical Mentorship", description: "Empowering the next generation of tech leaders. We provide hands-on training and project management oversight.", subServices: ["Git & GitHub Training", "Women in Tech Support", "Agile Project Management"], tools: ["Git", "GitHub", "Trello", "Slack", "Jira"], icon: <GraduationCap size={32} /> }
  ];

  return (
    <div className="services-page">
      {/* --- HERO SECTION WITH SS.JPG BACKGROUND --- */}
      <section className="services-hero" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.85)), url(${heroBg})` }}>
        <div className="hero-content container reveal">
          <span className="badge">ByteFlow Expertise</span>
          <h1>Our <span className="sig-font">Professional</span> Ecosystem</h1>
          <p>Explore our wide range of technology and creative services designed to build <span className="sig-font">Success</span>.</p>
        </div>
      </section>

      {/* --- SERVICE SECTIONS --- */}
      <section className="services-detailed container">
        {serviceDetails.map((service, index) => (
          <div key={index} className={`service-row reveal ${index % 2 !== 0 ? 'reverse' : ''}`}>
            <div className="service-info">
              <div className="service-number">{service.id}</div>
              <h2 className="service-title">{service.title}</h2>
              <p className="service-desc">{service.description}</p>
              
              <div className="sub-services">
                {service.subServices.map((sub, i) => (
                  <div key={i} className="sub-item">
                    <CheckCircle2 size={16} />
                    <span>{sub}</span>
                  </div>
                ))}
              </div>
              
              <div className="tools-box">
                <span className="tools-label">Tech Stack & Tools:</span>
                <div className="tools-tags">
                  {service.tools.map((tool, i) => (
                    <span key={i} className="tool-tag">{tool}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="service-visual">
              <div className="visual-icon-box">
                {service.icon}
                <div className="orbit-animation"></div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* --- FINAL CTA --- */}
      <section className="services-cta container reveal">
        <div className="cta-gradient-box">
          <h2>Have a <span className="sig-font">Special</span> Requirement?</h2>
          <p>We provide custom packages tailored to your unique business goals.</p>
          <button className="btn-main">Schedule a Consultation</button>
        </div>
      </section>
    </div>
  );
};

export default Services;
