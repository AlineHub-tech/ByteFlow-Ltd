import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Calendar, Share2, CheckCircle } from 'lucide-react';
import { blogPosts } from '../data/blogData';
import '../styles/Blog.css';

const BlogDetail = () => {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === id);

  // Scroll to top when page opens
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!post) {
    return (
      <div id="byteflow-blog-hub" style={{ padding: '200px 20px', textAlign: 'center' }}>
        <h2 style={{fontSize: '2rem'}}>Article Not Found</h2>
        <Link to="/blog" className="blog-read-link" style={{justifyContent: 'center', marginTop: '20px'}}>
          <ArrowLeft size={18} /> Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <div id="byteflow-blog-hub">
      <div className="blog-limit detail-page-padding">
        
        {/* Navigation Back */}
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
          <Link to="/blog" className="blog-read-link" style={{ marginBottom: '40px' }}>
            <ArrowLeft size={18} /> Back to Insights
          </Link>
        </motion.div>

        {/* Article Header */}
        <header className="detail-header-section">
          <div className="detail-category-badge" style={{ backgroundColor: post.color }}>
            {post.category}
          </div>
          <h1 className="detail-main-title">{post.title}</h1>
          
          <div className="detail-meta-info">
            <span><Calendar size={16} /> March 2026</span>
            <span><Clock size={16} /> 15 Min Read</span>
            <span><CheckCircle size={16} /> Expert Verified Content</span>
          </div>
        </header>

        {/* Hero Icon Box */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} 
          animate={{ opacity: 1, scale: 1 }}
          className="detail-hero-visual" 
          style={{ backgroundColor: post.color }}
        >
          <div className="large-icon-wrapper">{post.icon}</div>
        </motion.div>

        {/* Article Body Content */}
        <article className="detail-article-body">
          <div className="detail-rich-text">
            
            {/* FIXED: Loop through the fullContent array from blogData.js */}
            {post.fullContent && post.fullContent.map((section, index) => (
              <section key={index} style={{ marginBottom: '40px' }}>
                <h2 className="section-title">{section.subtitle}</h2>
                <p style={{ fontSize: '1.25rem', lineHeight: '1.9', color: '#000000' }}>
                  {section.text}
                </p>
              </section>
            ))}

            <div className="detail-quote-block" style={{ borderLeftColor: post.color }}>
              <p>“At ByteFlow Ltd, we believe that digital excellence is the foundation of every successful modern brand in Rwanda.”</p>
            </div>

            {/* Conclusion Section */}
            <section className="detail-conclusion-box">
              <h2 className="section-title">Conclusion</h2>
              <p style={{ fontSize: '1.25rem', lineHeight: '1.9', color: '#000000' }}>
                {post.conclusion}
              </p>
              <p style={{marginTop: '30px', fontWeight: 'bold', color: '#4ade80', fontSize: '1.1rem'}}>
                Ready to transform your brand? Contact ByteFlow Ltd today.
              </p>
            </section>
          </div>

          {/* Social Share */}
          <div className="detail-footer-share">
            <p>Share this knowledge:</p>
            <div className="share-btn-circle"><Share2 size={20} /></div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default BlogDetail;
