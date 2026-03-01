import React from 'react';
import { motion } from 'framer-motion';
import { 
  Palette, Camera, Video, PenTool, Globe, 
  Coffee, FileText, ShoppingCart, Cpu, CheckCircle2,
  Code2, Server, Search, Cloud, Layers
} from 'lucide-react';
import '../styles/Services.css';

const services = [
  {
    category: "Software & Web Development Rwanda",
    items: [
      { icon: Code2, title: "Frontend Development", tools: "React.js, Next.js, Tailwind CSS", desc: "Building responsive, fast, and interactive user interfaces for businesses in Kigali." },
      { icon: Server, title: "Backend Development", tools: "Node.js, Express, MongoDB, PostgreSQL", desc: "Robust server-side logic and secure database management for Rwanda's tech market." },
      { icon: Globe, title: "Custom Web Development", tools: "WordPress, Shopify, PHP", desc: "The best web design services in Rwanda for corporate portals and e-commerce platforms." },
      { icon: Layers, title: "Full-Stack Solutions", tools: "MERN Stack, NextAuth, Prisma", desc: "End-to-end web applications designed for scalability and high performance." }
    ]
  },
  {
    category: "Digital Growth & SEO Kigali",
    items: [
      { icon: Search, title: "SEO Optimization", tools: "Google Search Console, SEMrush", desc: "Professional SEO services in Rwanda to help your business rank #1 on Google search." },
      { icon: Cloud, title: "Web Hosting & Domain", tools: "AWS, .RW Domain, SSL", desc: "Reliable web hosting in Rwanda with secure .rw domain registration and 24/7 support." },
      { icon: PenTool, title: "Digital Marketing", tools: "Copywriting, Social Media, Ads", desc: "Strategic storytelling, content creation, and social media management for brand growth." }
    ]
  },
  {
    category: "Creative Media Studio",
    items: [
      { icon: Palette, title: "Graphic Design", tools: "Adobe Illustrator, Photoshop, Figma", desc: "Professional branding, minimalist logos, and creative marketing materials in Kigali." },
      { icon: Camera, title: "Photography", tools: "Corporate & Event Photography", desc: "High-end corporate headshots and product photography services in Rwanda." },
      { icon: Video, title: "Videography", tools: "Premiere Pro, DaVinci Resolve", desc: "Cinematic commercials, documentaries, and engaging social media video ads." }
    ]
  },
  {
    category: "Tech Hardware & Retail",
    items: [
      { icon: Cpu, title: "IT Equipment Sales", tools: "Laptops, SSDs, Networking", desc: "Sale of high-performance laptops and networking peripherals for companies in Rwanda." },
      { icon: ShoppingCart, title: "Stationery & Branding", tools: "Office Supplies", desc: "Supply of all office essentials, stationery, and customized branding materials." },
      { icon: Coffee, title: "Cyber Café & Hub", tools: "High-Speed Fiber", desc: "Fastest internet access in Kigali, document printing, and expert digital assistance." }
    ]
  }
];

const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="services-page">
      {/* Header Section - SEO Optimized Title */}
      <section className="services-hero">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="top-tag">Leading Digital Agency in Rwanda</span>
            <h1>Expert <span>Digital Solutions</span> for Your Business</h1>
            <p>ByteFlow Ltd provides the full tech stack—from web design and SEO to professional photography and digital marketing in Kigali.</p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-grid-container">
        <div className="container">
          {services.map((group, idx) => (
            <div key={idx} className="service-group">
              <div className="group-header">
                <h2 className="group-title">{group.category}</h2>
                <div className="title-line"></div>
              </div>
              
              <motion.div 
                className="grid"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {group.items.map((item, i) => (
                  <motion.div 
                    variants={itemVariants}
                    whileHover={{ y: -10 }}
                    className="service-card" 
                    key={i}
                  >
                    <div className="icon-wrapper">
                      <item.icon className="service-icon" size={30} />
                    </div>
                    <h3>{item.title}</h3>
                    <p className="service-desc">{item.desc}</p>
                    <div className="tools-box">
                      <div className="tools-label">
                         <CheckCircle2 size={12} /> <span>Stack:</span>
                      </div>
                      <p className="tools-list">{item.tools}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="services-cta">
        <div className="container cta-box">
          <h2>Ready to Start Your Project in Rwanda?</h2>
          <p>Get the best web design, SEO, and digital marketing services today.</p>
          <button className="btn-cta">Get a Free Quote</button>
        </div>
      </section>
    </div>
  );
};

export default Services;
