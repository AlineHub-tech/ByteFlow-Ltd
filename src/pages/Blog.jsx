import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Search, Server, Camera, Smartphone, ArrowRight, Shield, Database, Cpu, Palette, Zap, Share2, Layers, Rocket, Lock, BarChart, Mail, BookOpen } from 'lucide-react';
import '../styles/Blog.css';
import blog from '../assets/blog.webp'; // Faster WebP hero image

const blogPosts = [
  { id: "web-dev-2026", title: "Why Your Business Needs a Website in 2026", excerpt: "In a digital-first economy, a website is your primary office. Build 24/7 credibility and trust.", category: "Web Development", icon: <Globe size={40} />, color: "#006400" },
  { id: "seo-kigali", title: "How to Rank #1 on Google in Kigali", excerpt: "Local SEO strategies to help your business appear when people search for services in Rwanda.", category: "SEO", icon: <Search size={40} />, color: "#1e293b" },
  { id: "ssd-hosting", title: "SSD NVMe Hosting: Why Speed Matters", excerpt: "ByteFlow's hosting is 20x faster than traditional HDD. Speed equals better customer retention.", category: "Hosting", icon: <Server size={40} />, color: "#006400" },
  { id: "4k-videography", title: "4K Videography for High-Impact Social Ads", excerpt: "Professional video production can increase your engagement by over 300% on social media.", category: "Videography", icon: <Camera size={40} />, color: "#1e293b" },
  { id: "rw-domains", title: "The Strategic Importance of .RW Domains", excerpt: "Build local trust and improve your local search presence with a country-specific extension.", category: "Domains", icon: <Database size={40} />, color: "#006400" },
  { id: "react-nextjs", title: "React vs Next.js: Choosing the Right Stack", excerpt: "A deep dive into why we use Next.js for high-performance e-commerce platforms.", category: "Web Development", icon: <Cpu size={40} />, color: "#1e293b" },
  { id: "color-psychology", title: "Psychology of Colors in Modern Branding", excerpt: "How choosing the right colors can influence your customers' purchasing decisions.", category: "Design", icon: <Palette size={40} />, color: "#006400" },
  { id: "email-marketing", title: "Email Marketing: The Highest ROI Channel", excerpt: "Why building an email list is safer than relying solely on social media algorithms.", category: "Marketing", icon: <Mail size={40} />, color: "#1e293b" },
  { id: "momo-integration", title: "Integrating MoMo Pay for Online Sales", excerpt: "A step-by-step guide on how we integrate local payments to boost your e-commerce.", category: "Payments", icon: <Smartphone size={40} />, color: "#006400" },
  { id: "cyber-security", title: "Cybersecurity Basics for Small Businesses", excerpt: "Protect your customer data and your brand reputation with essential security tips.", category: "Security", icon: <Shield size={40} />, color: "#1e293b" },
  { id: "ui-ux-trends", title: "UI vs UX: Designing for the User", excerpt: "A look into how we design interfaces that are both beautiful and easy to navigate.", category: "Design", icon: <BookOpen size={40} />, color: "#006400" },
  { id: "cloud-scaling", title: "Scaling with Cloud Infrastructure", excerpt: "Move from shared hosting to a scalable cloud environment as your traffic grows.", category: "Hosting", icon: <Server size={40} />, color: "#1e293b" },
  { id: "rwanda-tech-2026", title: "Tech Trends in Rwanda for 2026", excerpt: "What to expect in the local tech scene and how to stay ahead of the curve.", category: "Insights", icon: <Zap size={40} />, color: "#006400" },
  { id: "social-proof", title: "The Power of Social Proof in Digital Sales", excerpt: "How displaying reviews and testimonials can increase your conversion rates.", category: "Strategy", icon: <Share2 size={40} />, color: "#1e293b" },
  { id: "content-strategy", title: "Content Strategy that Actually Converts", excerpt: "Stop posting randomly. Learn how to create content that brings in real leads.", category: "Marketing", icon: <Layers size={40} />, color: "#006400" },
  { id: "mobile-first", title: "Mobile-First Design is No Longer Optional", excerpt: "80% of Rwandans browse on mobile. Is your website optimized for them?", category: "Development", icon: <Smartphone size={40} />, color: "#1e293b" },
  { id: "logo-optimization", title: "Optimizing Your Logo for Digital Screens", excerpt: "Common mistakes when designing logos for web and social media platforms.", category: "Branding", icon: <Rocket size={40} />, color: "#006400" },
  { id: "ssl-importance", title: "SSL Certificates: Security and SEO", excerpt: "Encryption builds customer confidence and improves your Google ranking.", category: "Security", icon: <Lock size={40} />, color: "#1e293b" },
  { id: "digital-ads", title: "Facebook vs Google Ads for Startups", excerpt: "Where should you spend your marketing budget for the best possible ROI?", category: "Ads", icon: <BarChart size={40} />, color: "#006400" },
  { id: "api-economy", title: "The Growth of the API Economy in Rwanda", excerpt: "How local businesses are connecting services to create seamless ecosystems.", category: "Tech", icon: <Cpu size={40} />, color: "#1e293b" }
];

const Blog = () => {
  return (
    <div id="byteflow-blog-hub">
      {/* 1. HERO SECTION WITH REDUCED HEIGHT */}
      <header className="blog-hero-main" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.8)), url(${blog})` }}>
        <div className="blog-limit container">
          <motion.div 
            className="hero-inner-text"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="blog-tagline">Expert Insights</span>
            <h1 className="blog-heading">
              Actionable digital insights for <span className="green-accent">Rwanda's growing businesses.</span>
            </h1>
            <p className="blog-desc">
              Practical articles on websites, branding, SEO, and media strategy for companies that want measurable results.
            </p>
          </motion.div>
        </div>
      </header>

      {/* 2. BLOG LIST SECTION */}
      <section className="blog-list-section">
        <div className="blog-limit container">
          <div className="blog-grid-system">
            <AnimatePresence>
              {blogPosts.map((post, index) => (
                <motion.article 
                  key={post.id} 
                  initial={{ opacity: 0, y: 30 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  transition={{ delay: index * 0.02 }} 
                  viewport={{ once: true }} 
                  className="blog-item-card"
                >
                  <div className="blog-card-visual" style={{ backgroundColor: post.color }}>
                    <div className="blog-card-icon">{post.icon}</div>
                    <span className="blog-card-cat">{post.category}</span>
                  </div>
                  <div className="blog-card-info">
                    <h3>{post.title}</h3>
                    <p>{post.excerpt}</p>
                    <div className="blog-card-footer">
                      <Link to={`/blog/${post.id}`} className="blog-read-link">
                        Read Article <ArrowRight size={18} />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
