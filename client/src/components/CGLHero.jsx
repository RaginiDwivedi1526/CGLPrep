import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const CGLHero = () => {
  const navigate = useNavigate();
  return (
    <section className="cgl-hero">
        <div className="container">
            <div className="breadcrumb">
                <Link to="/">Home</Link> <i className="fas fa-chevron-right"></i>
                <Link to="/cgl-2026">CGL 2026</Link>
            </div>
            <div className="cgl-hero-badge"><i className="fas fa-file-alt"></i> SSC CGL 2026</div>

            <div className="cgl-hero-grid">
                <div className="cgl-hero-content">
                    <h1>Complete Guide to<br/><span className="highlight-text">SSC CGL 2026</span></h1>
                    <p className="cgl-hero-desc">Get the latest notification, important dates, syllabus, exam pattern, vacancies, eligibility, selection process and expert preparation strategy — all in one place.</p>
                    <div className="cgl-hero-btns">
                        <button className="btn-primary btn-lg" onClick={() => navigate('/signup')}><i className="fas fa-rocket"></i> Start Preparation →</button>
                        <button className="btn-outline btn-lg" onClick={() => navigate('/signup')}><i className="fas fa-download"></i> Download Guide (PDF)</button>
                    </div>
                </div>
                <div className="cgl-hero-image">
                    <div className="cgl-hero-img-wrapper">
                        <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="SSC CGL Aspirant" style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: '16px'}} />
                        <div className="cgl-floating-badge">
                            <span className="badge-text">GOVERNMENT<br/>JOBS<br/>BUILD A<br/>BETTER INDIA</span>
                        </div>
                        <div className="cgl-floating-quote">
                            <i className="fas fa-star"></i>
                            <span>Same Aspirants<br/>Bigger Dreams<br/>Let's Crack CGL!</span>
                        </div>
                    </div>
                </div>
                <div className="cgl-hero-sidebar">
                    <div className="sidebar-header">
                        <strong>India's Most Focused<br/>CGL Preparation Platform</strong>
                    </div>
                    <ul className="sidebar-features">
                        <li><i className="fas fa-check-circle"></i> Latest Official Updates</li>
                        <li><i className="fas fa-check-circle"></i> Exam-specific Study Plan</li>
                        <li><i className="fas fa-check-circle"></i> Mock Tests & PYQs</li>
                        <li><i className="fas fa-check-circle"></i> Post Prediction & Guidance</li>
                    </ul>
                    <div className="sidebar-motto">
                        <em>Sarkari Naukri<br/>Sirf Job Nahi,<br/>Izzat Bhi.</em>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default CGLHero;
