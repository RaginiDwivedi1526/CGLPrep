import React from 'react';
import { Link } from 'react-router-dom';

const SectionalTestsHero = () => {
  return (
    <div className="sect-hero-wrapper">
      <section className="mock-hero">
        <div className="container mock-hero-inner">
          <div className="mock-hero-content">
            <div className="mock-hero-breadcrumb">
              <Link to="/">Home</Link>
              <i className="fas fa-chevron-right"></i>
              <Link to="/mock-tests">Mock Tests</Link>
              <i className="fas fa-chevron-right"></i>
              <span>Sectional Tests</span>
            </div>

            <div className="mock-hero-badge">
              <i className="fas fa-layer-group"></i> SECTIONAL TESTS
            </div>

            <h1 className="mock-hero-title">
              Master Every Section. <br />
              <span className="text-blue">Build a Stronger You.</span>
            </h1>
            
            <p className="mock-hero-desc">
              Topic-wise sectional tests to help you master concepts, improve accuracy and build speed. Focus on your weak areas and turn them into strengths with AI-powered analysis.
            </p>

            <div className="sect-hero-badges-row">
              <span className="sect-hero-tag"><i className="fas fa-book text-purple"></i> Practice by Topic</span>
              <span className="sect-hero-tag"><i className="fas fa-brain text-green"></i> AI Performance Analysis</span>
              <span className="sect-hero-tag"><i className="fas fa-bullseye text-purple"></i> Improve Accuracy</span>
              <span className="sect-hero-tag"><i className="fas fa-bolt text-red"></i> Build Speed</span>
            </div>
          </div>

          <div className="mock-hero-image-side">
            <div className="mock-hero-img-wrapper">
              <img src="/images/mocktests/mock-sectional-hero.jpg" alt="Student holding books" />
            </div>

            {/* Handwritten texts */}
            <div className="mock-hero-handwritten left-text" style={{ top: '20px', left: '-120px' }}>
              <span>Small</span>
              <span>Steps</span>
              <span className="hl-blue">Big Results!</span>
            </div>
            
            <div className="sect-post-it right-text">
              "Strong sections<br />
              build confidence,<br />
              weak sections get<br />
              stronger here."
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SectionalTestsHero;
