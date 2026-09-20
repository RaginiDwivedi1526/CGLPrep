import React from 'react';
import { Link } from 'react-router-dom';

const MockTestsHero = () => {
  return (
    <div className="mock-hero-wrapper">
      {/* ===== Hero Section ===== */}
      <section className="mock-hero">
        <div className="container mock-hero-inner">
          <div className="mock-hero-content">
            <div className="mock-hero-breadcrumb">
              <Link to="/">Home</Link>
              <i className="fas fa-chevron-right"></i>
              <span>Mock Tests</span>
            </div>

            <div className="mock-hero-badge">
              <i className="fas fa-laptop-code"></i> Real Exam. Real Improvement.
            </div>

            <h1 className="mock-hero-title">
              SSC CGL Mock Tests<br />
              <span className="text-dark">Practice Today.</span> <span className="text-blue">Perform Tomorrow.</span>
            </h1>
            
            <p className="mock-hero-desc">
              Experience the most authentic SSC CGL mock test series, designed by experts and powered by AI analytics. Improve your accuracy, speed and overall performance with real exam-like tests.
            </p>

            <div className="mock-hero-btns">
              <button className="btn-primary mock-hero-cta">
                Start a Free Mock Test <i className="fas fa-arrow-right"></i>
              </button>
              <button className="btn-outline mock-hero-watch">
                <i className="fas fa-play-circle"></i> View Test Series Plans
              </button>
            </div>
          </div>

          <div className="mock-hero-image-side">
            <div className="mock-hero-img-wrapper">
              <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80" alt="Student taking mock test" />
              
              {/* Laptop screen overlay box */}
              <div className="mock-laptop-overlay">
                <span>PRACTICE</span>
                <span>ANALYZE</span>
                <span>IMPROVE</span>
                <span>CRACK CGL</span>
              </div>
            </div>

            {/* Handwritten texts */}
            <div className="mock-hero-handwritten left-text">
              <span>Same</span>
              <span>Aspirants</span>
              <span className="hl-blue">Bigger Dreams</span>
              <span className="hl-blue">Let's Crack CGL!</span>
            </div>
            
            <div className="mock-hero-handwritten right-text">
              <span>"Discipline Today</span>
              <span>Selection Tomorrow"</span>
            </div>

            {/* Floating features list */}
            <div className="mock-floating-features">
              <div className="mff-item">
                <i className="fas fa-laptop text-green"></i> Real Exam Interface
              </div>
              <div className="mff-item">
                <i className="fas fa-brain text-blue"></i> AI Performance Analysis
              </div>
              <div className="mff-item">
                <i className="fas fa-layer-group text-orange"></i> Sectional & Full Mock Tests
              </div>
              <div className="mff-item">
                <i className="fas fa-file-alt text-purple"></i> Previous Year Papers
              </div>
              <div className="mff-item">
                <i className="fas fa-trophy text-yellow"></i> All India Ranking
              </div>
              <div className="mff-item">
                <i className="fas fa-clipboard-check text-red"></i> Detailed Solutions
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Feature Strip Under Hero ===== */}
      <section className="mock-feature-strip">
        <div className="container">
          <div className="mfs-row">
            <div className="mfs-item">
              <div className="mfs-icon purple"><i className="fas fa-flask"></i></div>
              <div className="mfs-text">
                <strong>Latest Exam Pattern</strong>
                <span>As per SSC guidelines</span>
              </div>
            </div>
            <div className="mfs-item">
              <div className="mfs-icon blue"><i className="fas fa-cog"></i></div>
              <div className="mfs-text">
                <strong>AI-Powered Analysis</strong>
                <span>Detailed performance report</span>
              </div>
            </div>
            <div className="mfs-item">
              <div className="mfs-icon green"><i className="fas fa-chart-line"></i></div>
              <div className="mfs-text">
                <strong>All India Ranking</strong>
                <span>Compete with aspirants</span>
              </div>
            </div>
            <div className="mfs-item">
              <div className="mfs-icon blue-light"><i className="fas fa-file-signature"></i></div>
              <div className="mfs-text">
                <strong>Topic-wise & Full Tests</strong>
                <span>Practice your way</span>
              </div>
            </div>
            <div className="mfs-item">
              <div className="mfs-icon green-light"><i className="fas fa-book-open"></i></div>
              <div className="mfs-text">
                <strong>Previous Year Papers</strong>
                <span>Chapter & year-wise</span>
              </div>
            </div>
            <div className="mfs-item">
              <div className="mfs-icon purple-light"><i className="fas fa-mobile-alt"></i></div>
              <div className="mfs-text">
                <strong>Accessible Anywhere</strong>
                <span>Web, Android & iOS</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MockTestsHero;
