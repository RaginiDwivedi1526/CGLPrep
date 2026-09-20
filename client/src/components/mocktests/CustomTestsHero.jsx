import React from 'react';
import { Link } from 'react-router-dom';

const CustomTestsHero = () => {
  return (
    <div className="sect-hero-wrapper" style={{ background: 'linear-gradient(135deg, #eff6ff 0%, #e0e7ff 100%)' }}>
      <section className="mock-hero">
        <div className="container mock-hero-inner">
          <div className="mock-hero-content">
            <div className="mock-hero-breadcrumb">
              <Link to="/">Home</Link>
              <i className="fas fa-chevron-right"></i>
              <Link to="/mock-tests">Mock Tests</Link>
              <i className="fas fa-chevron-right"></i>
              <span>Custom Tests</span>
            </div>

            <div className="mock-hero-badge">
              <i className="fas fa-sliders-h"></i> CUSTOM TESTS
            </div>

            <h1 className="mock-hero-title">
              Create Your Own Test. <br />
              <span className="text-blue">Your Rules.</span>
            </h1>
            
            <p className="mock-hero-desc">
              Design a custom test as per your preparation needs. Choose topics, number of questions, difficulty level and more. Get a personalized test with AI-powered recommendations.
            </p>

            <div className="sect-hero-badges-row">
              <span className="sect-hero-tag"><i className="fas fa-sliders-h text-purple"></i> 100% Customizable</span>
              <span className="sect-hero-tag"><i className="fas fa-bullseye text-green"></i> Topic-wise Focus</span>
              <span className="sect-hero-tag"><i className="fas fa-robot text-purple"></i> AI Recommendations</span>
              <span className="sect-hero-tag"><i className="fas fa-laptop text-green"></i> Exam-like Interface</span>
            </div>
          </div>

          <div className="mock-hero-image-side">
            <div className="mock-hero-img-wrapper">
              <img src="/images/mocktests/mock-sectional-hero.jpg" alt="Student holding books" />
            </div>

            {/* Handwritten texts */}
            <div className="mock-hero-handwritten left-text" style={{ top: '0px', left: '-100px' }}>
              <span>"Your</span>
              <span>Preparation</span>
              <span>Your Test</span>
              <span className="hl-green">Your Success!"</span>
            </div>
            
            <div className="sect-post-it right-text" style={{ background: '#fef9c3', bottom: '120px', right: '-80px', transform: 'rotate(5deg)' }}>
              "Custom Tests<br />
              give you the freedom<br />
              to focus on what<br />
              you need most."
            </div>

            <div className="pyq-floating-card" style={{ top: 'auto', bottom: '20px', right: '40px', padding: '12px 20px', background: '#e0f2fe', borderColor: '#bae6fd' }}>
              <ul className="pyq-fc-list" style={{ color: '#0369a1' }}>
                <li>Plan</li>
                <li>Practice</li>
                <li>Improve</li>
                <li>Succeed</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CustomTestsHero;
