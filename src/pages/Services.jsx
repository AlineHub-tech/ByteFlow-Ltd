import React, { useEffect } from 'react';
import { Code2, Palette, FileText, Share2, GraduationCap, CheckCircle2, Server, Globe2, Video, Camera } from 'lucide-react';
import '../styles/Services.css';
import heroBg from '../assets/ss.jpg'; // Ifoto yawe y'inyuma

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
    { 
      id: "01", 
      title: "Website Development", 
      description: "We build high-performance, scalable digital solutions. From complex backend systems to stunning frontend interfaces, we engineer your online success.", 
      subServices: ["Custom Corporate Websites", "E-commerce Online Stores", "Personal Blogs & Portfolios", "Web Applications & Dashboards"], 
      tools: ["React.js", "Node.js", "Tailwind CSS", "MongoDB", "Figma"], 
      icon: <Code2 size={32} /> 
    },
    { 
      id: "02", 
      title: "Graphic Design", 
      description: "Visual storytelling that captures attention. We create powerful brand identities and marketing visuals that instantly elevate your business credibility.", 
      subServices: ["Logo & Brand Identity Kits", "Social Media Graphics", "Flyers, Brochures & Banners", "Company Profiles"], 
      tools: ["Adobe Photoshop", "Adobe Illustrator", "Canva Pro", "Figma"], 
      icon: <Palette size={32} /> 
    },
    { 
      id: "03", 
      title: "Web Hosting", 
      description: "Keep your website online 24/7 with our secure, reliable, and ultra-fast cloud hosting servers tailored to protect your corporate database.", 
      subServices: ["Shared Cloud Hosting", "Dedicated VPS Servers", "Corporate Email Hosting", "Automated Daily Backups"], 
      tools: ["cPanel", "LiteSpeed Engine", "CloudLinux", "SSL Encryption"], 
      icon: <Server size={32} /> 
    },
    { 
      id: "04", 
      title: "Website Domain Name", 
      description: "Secure your business permanent address on the internet. Fast domain registration and full DNS control to protect your corporate identity.", 
      subServices: ["Local Domains (.rw, .co.rw)", "Global Domains (.com, .net, .org)", "Secure Domain Transfers", "DNS Zone Management"], 
      tools: ["RICTA Registry", "ICANN Control", "DNSSEC Security", "Whois Privacy"], 
      icon: <Globe2 size={32} /> 
    },
    { 
      id: "05", 
      title: "Digital Marketing & SEO", 
      description: "Increase your digital reach and revenue. We optimize your online presence and run high-converting ad campaigns to ensure you dominate your market.", 
      subServices: ["Google Search Ranking (SEO)", "Social Media Management", "Meta & Google Ad Campaigns", "Copywriting & Content Strategy"], 
      tools: ["Google Search Console", "Meta Business Suite", "SEMrush", "Google Analytics"], 
      icon: <Share2 size={32} /> 
    },
    { 
      id: "06", 
      title: "Videography", 
      description: "Bring your brand story to life. We shoot and edit high-definition commercial videos, social media reels, and event coverage that engage audiences.", 
      subServices: ["Corporate Promotional Videos", "Social Media Reels & TikTok Ads", "Event Highlights & Editing", "YouTube Video Production"], 
      tools: ["Adobe Premiere Pro", "After Effects", "DaVinci Resolve", "Cinema 4D"], 
      icon: <Video size={32} /> 
    },
    { 
      id: "07", 
      title: "Photography", 
      description: "Professional images that speak a thousand words. Breathtaking and crisp visuals essential for building instant trust with potential clients.", 
      subServices: ["High-End Product Photography", "Corporate Team Headshots", "Event & Conference Coverage", "Brand Lifestyle Shoots"], 
      tools: ["Lightroom Classic", "Adobe Photoshop", "Capture One", "Studio Lighting"], 
      icon: <Camera size={32} /> 
    },
    { 
      id: "08", 
      title: "Office and Documentation", 
      description: "Streamlining your corporate paperwork and day-to-day administrative operations with high-quality digital document management services.", 
      subServices: ["Corporate Report Formatting", "Data Entry & Spreadsheets", "Official Business Translations", "Digital Filing Setups"], 
      tools: ["MS Word", "MS Excel", "MS PowerPoint", "PDF Expert", "Google Workspace"], 
      icon: <FileText size={32} /> 
    },
    { 
      id: "09", // Iyi twayigumijeho nka serivisi y'inyongezo ku buntu idafungurwa ukwayo
      title: "Entrepreneurship & Technical Mentorship", 
      description: "Empowering the next generation of tech leaders. We provide hands-on training, project oversight, and support systems.", 
      subServices: ["Git & GitHub Training", "Women in Tech Support", "Agile Project Management"], 
      tools: ["Git", "GitHub", "Trello", "Slack", "Jira"], 
      icon: <GraduationCap size={32} /> 
    }
  ];

  return (
    <div className="services-page">
      {/* --- HERO SECTION --- */}
      <section className="services-hero" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.85)), url(${heroBg})` }}>
        <div className="hero-content container reveal">
          <span className="badge">ByteFlow Expertise</span>
          <h1>Our <span className="sig-font">Professional</span> Ecosystem</h1>
          <p>Explore our full range of technology and creative services designed to build <span className="sig-font">Success</span>.</p>
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
