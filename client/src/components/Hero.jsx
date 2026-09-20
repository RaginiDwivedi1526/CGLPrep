import React from 'react';

const Hero = () => {
  return (
    <section className="hero" id="hero">
        <div className="container hero-inner">
            <div className="hero-content">
                <span className="hero-badge"><i className="fas fa-robot"></i> #1 AI-Powered Platform for SSC CGL</span>
                <h1 className="hero-title">Your CGL Dream.<br/><span>Our AI Guidance.</span></h1>
                <p className="hero-desc">Personalized study plans, Real exam experience, Post prediction.<br/>Everything you need to crack SSC CGL — in one place.</p>
                <div className="hero-btns">
                    <button className="btn-primary btn-lg"><i className="fas fa-rocket"></i> Start Free Now</button>
                    <button className="btn-outline btn-lg"><i className="fas fa-play-circle"></i> Watch Video</button>
                </div>
                <div className="hero-trust">
                    <div className="trust-avatars">
                        <div className="avatar" style={{background: '#4f46e5'}}><i className="fas fa-user"></i></div>
                        <div className="avatar" style={{background: '#0ea5e9'}}><i className="fas fa-user"></i></div>
                        <div className="avatar" style={{background: '#10b981'}}><i className="fas fa-user"></i></div>
                        <div className="avatar" style={{background: '#f59e0b'}}><i className="fas fa-user"></i></div>
                    </div>
                    <span>Trusted by <strong>1,00,000+ Aspirants</strong></span>
                </div>
            </div>
            <div className="hero-image">
                <div className="hero-img-wrapper">
                    <div style={{
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        gap: '16px',
                        padding: '20px',
                        textAlign: 'center'
                    }}>
                        <i className="fas fa-user-graduate" style={{fontSize: '72px', opacity: 0.9}}></i>
                        <span style={{fontSize: '18px', fontWeight: 700, opacity: 0.9}}>Your CGL Dream<br/>Starts Here</span>
                    </div>
                    <div className="hero-floating-card card-dream">
                        <i className="fas fa-star"></i>
                        <span>Bigger Dream,<br/>Let's Crack it.</span>
                    </div>
                </div>
            </div>
            <div className="hero-sidebar">
                <h4>Product Features</h4>
                <ul className="feature-list-mini">
                    <li><i className="fas fa-brain"></i> AI Study Plan</li>
                    <li><i className="fas fa-file-alt"></i> Mock Tests</li>
                    <li><i className="fas fa-chart-bar"></i> Post Predictor</li>
                    <li><i className="fas fa-newspaper"></i> Current Affairs</li>
                    <li><i className="fas fa-book"></i> Previous Papers</li>
                    <li><i className="fas fa-chart-line"></i> Performance Analytics</li>
                    <li><i className="fas fa-tasks"></i> AI Tutor</li>
                    <li><i className="fas fa-bug"></i> Mistake Book</li>
                    <li><i className="fas fa-calculator"></i> Readiness Score</li>
                </ul>
            </div>
        </div>
        <div className="hero-stats">
            <div className="container">
                <div className="stats-grid">
                    <div className="stat-item">
                        <span className="stat-number" data-count="100000">1,00,000+</span>
                        <span className="stat-label">Active Learners</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-number">10,00,000+</span>
                        <span className="stat-label">Questions Practiced</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-number">50,000+</span>
                        <span className="stat-label">Mock Tests Attempted</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-number">90%</span>
                        <span className="stat-label">Improvement Rate</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-number">4.8/5</span>
                        <span className="stat-label">Student Rating</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Hero;
