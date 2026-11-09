import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Search, Server, Camera, Smartphone, ArrowRight, Shield, Database, Cpu, Palette, Zap, Share2, Layers, Rocket, Lock, BarChart, Mail, BookOpen } from 'lucide-react';
import { blogPosts } from '../data/blogData';
import '../styles/Blog.css';

const iconMap = {
  'Web Development': <Globe size={40} />,
  SEO: <Search size={40} />,
  Hosting: <Server size={40} />,
  Videography: <Camera size={40} />,
  Domains: <Database size={40} />,
  Development: <Cpu size={40} />,
  Design: <Palette size={40} />,
  Marketing: <Mail size={40} />,
  Payments: <Smartphone size={40} />,
  Security: <Shield size={40} />,
  Strategy: <Share2 size={40} />,
  Insights: <Zap size={40} />,
  Branding: <Rocket size={40} />,
  Ads: <BarChart size={40} />,
  Tech: <Cpu size={40} />
};

const getPostIcon = (category) => iconMap[category] || <BookOpen size={40} />;

const Blog = () => {
  return (
    <div id="byteflow-blog-hub">
      {/* 1. HERO SECTION WITH REDUCED HEIGHT */}
      <header className="blog-hero-main" style={{}}>
        <div className="blog-limit container">
          <div className="hero-inner-text">
            <h1 className="blog-heading">
              Actionable digital insights for <span className="sign">Rwanda's growing businesses.</span>
            </h1>
            <p className="blog-desc">
              Practical articles on websites, branding, SEO, and media strategy for companies that want measurable results.
            </p>
          </div>
        </div>
      </header>

      {/* 2. BLOG LIST SECTION */}
      <section className="blog-list-section">
        <div className="blog-limit container">
          <div className="blog-grid-system">
            {blogPosts.map((post) => (
                <article
                  key={post.id} 
                  className="blog-item-card"
                >
                  <div className="blog-card-visual" style={{ backgroundColor: post.color }}>
                    <div className="blog-card-icon">{getPostIcon(post.category)}</div>
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
                </article>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
