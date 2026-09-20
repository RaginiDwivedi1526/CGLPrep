import React from 'react';
import { Link } from 'react-router-dom';

const PyqHero = () => {
  return (
    <div className="sect-hero-wrapper pyq-hero-bg">
      <section className="mock-hero">
        <div className="container mock-hero-inner">
          <div className="mock-hero-content">
            <div className="mock-hero-breadcrumb">
              <Link to="/">Home</Link>
              <i className="fas fa-chevron-right"></i>
              <Link to="/mock-tests">Mock Tests</Link>
              <i className="fas fa-chevron-right"></i>
              <span>Previous Year Papers</span>
            </div>

            <div className="mock-hero-badge">
              <i className="fas fa-users"></i> PREVIOUS YEAR PAPERS
            </div>

            <h1 className="mock-hero-title">
              Learn from the Past. <br />
              <span className="text-blue">Crack the Future.</span>
            </h1>
            
            <p className="mock-hero-desc">
              Access and practice SSC CGL previous years' papers (2016 - 2025) with detailed solutions, exam analysis and topic-wise insights. Understand the exam pattern, question trends and boost your preparation with real questions.
            </p>

            <div className="sect-hero-badges-row">
              <span className="sect-hero-tag"><i className="fas fa-file-invoice text-purple"></i> Real Exam Questions</span>
              <span className="sect-hero-tag"><i className="fas fa-check-circle text-green"></i> Detailed Solutions</span>
              <span className="sect-hero-tag"><i className="fas fa-chart-pie text-purple"></i> Topic-wise Analysis</span>
              <span className="sect-hero-tag"><i className="fas fa-download text-blue"></i> Download & Practice</span>
              <span className="sect-hero-tag"><i className="fas fa-chart-line text-green"></i> Performance Tracking</span>
            </div>
          </div>

          <div className="mock-hero-image-side">
            <div className="mock-hero-img-wrapper">
              <img src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80" alt="Students preparing for exams" />
            </div>

            {/* Handwritten texts */}
            <div className="mock-hero-handwritten left-text" style={{ top: '0px', left: '-120px' }}>
              <span>"Past</span>
              <span>Papers</span>
              <span>Present</span>
              <span className="hl-blue">Real Confidence!"</span>
            </div>
            
            <div className="sect-post-it right-text" style={{ background: '#fef9c3', bottom: '80px', right: '-60px' }}>
              "Same<br />
              Questions.<br />
              New Confidence.<br />
              Your CGL<br />
              Journey Continues!"
            </div>

            <div className="pyq-floating-card">
              <ul className="pyq-fc-list">
                <li>Previous</li>
                <li>Papers</li>
                <li>Stronger</li>
                <li>Preparation</li>
                <li>Brighter Future</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PyqHero;
