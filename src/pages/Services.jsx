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
    category: "Software Development",
    items: [
      { icon: Code2, title: "Frontend Development", tools: "React.js, Next.js, Tailwind CSS, TypeScript", desc: "Building responsive, fast, and interactive user interfaces with modern frameworks." },
      { icon: Server, title: "Backend Development", tools: "Node.js, Express, MongoDB, PostgreSQL", desc: "Robust server-side logic, API integration, and secure database management." },
      { icon: Globe, title: "Web Development", tools: "WordPress, Shopify, PHP", desc: "Custom websites, e-commerce platforms, and corporate news portals." },
      { icon: Layers, title: "Full-Stack Solutions", tools: "MERN Stack, NextAuth, Prisma", desc: "End-to-end web applications designed for scalability and performance." }
    ]
  },
  {
    category: "Digital Growth & Cloud",
    items: [
      { icon: Search, title: "SEO Optimization", tools: "Google Search Console, SEMrush, Ahrefs", desc: "Improving your website visibility to rank #1 on search engines." },
      { icon: Cloud, title: "Hosting & Domain", tools: "AWS, Bluehost, Namecheap, Vercel", desc: "Reliable cloud hosting, domain registration, and SSL certification." },
      { icon: PenTool, title: "Content Creation", tools: "CapCut, Notion, Copy.ai", desc: "Strategic storytelling and social media management for brand growth." }
    ]
  },
  {
    category: "Creative Studio",
    items: [
      { icon: Palette, title: "Graphic Design", tools: "Adobe Illustrator, Photoshop, Figma", desc: "Professional branding, minimalist logos, and marketing UI/UX materials." },
      { icon: Camera, title: "Photography", tools: "Sony A7IV, Studio Lighting", desc: "High-end corporate headshots, event coverage, and product photography." },
      { icon: Video, title: "Videography", tools: "Premiere Pro, DaVinci Resolve", desc: "Cinematic commercials, documentaries, and engaging social media ads." }
    ]
  },
  {
    category: "Retail & Tech Hardware",
    items: [
      { icon: Cpu, title: "Technology Equipment", tools: "Laptops, SSDs, Networking", desc: "Sales of high-performance hardware and networking peripherals." },
      { icon: ShoppingCart, title: "Stationery & Office", tools: "Wholesale & Retail", desc: "Supply of all office essentials, stationery, and branding materials." },
      { icon: Coffee, title: "Cyber Café & Hub", tools: "High-Speed Fiber, Gaming PCs", desc: "Fast internet access, document printing, and digital assistance." }
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
      {/* Header Section */}
      <section className="services-hero">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="top-tag">What We Do Best</span>
            <h1>Our Expert <span>Solutions</span></h1>
            <p>From frontend pixels to backend servers, we provide the full tech stack for your success in the digital era.</p>
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
          <h2>Ready to start your next project?</h2>
          <p>Let's build something amazing together.</p>
          <button className="btn-cta">Get a Free Quote</button>
        </div>
      </section>
    </div>
  );
};

export default Services;
