import React from 'react';
import { Link } from 'react-router-dom';

const TopicWiseHero = () => {
  return (
    <div className="sect-hero-wrapper topic-hero-bg">
      <section className="mock-hero">
        <div className="container mock-hero-inner">
          <div className="mock-hero-content">
            <div className="mock-hero-breadcrumb">
              <Link to="/">Home</Link>
              <i className="fas fa-chevron-right"></i>
              <Link to="/mock-tests">Mock Tests</Link>
              <i className="fas fa-chevron-right"></i>
              <span>Topic-wise Tests</span>
            </div>

            <div className="mock-hero-badge">
              <i className="fas fa-book-open"></i> TOPIC-WISE TESTS
            </div>

            <h1 className="mock-hero-title">
              Master Every Topic. <br />
              <span className="text-blue">One Step Closer to CGL.</span>
            </h1>
            
            <p className="mock-hero-desc">
              Focused topic-wise tests to strengthen your concepts, improve accuracy and build speed. Practice at your own pace and turn weak topics into strong areas with AI-powered analysis.
            </p>

            <div className="sect-hero-badges-row">
              <span className="sect-hero-tag"><i className="fas fa-book text-purple"></i> Concept-wise Practice</span>
              <span className="sect-hero-tag"><i className="fas fa-bolt text-green"></i> Instant Performance Analysis</span>
              <span className="sect-hero-tag"><i className="fas fa-layer-group text-purple"></i> Difficulty-wise Questions</span>
              <span className="sect-hero-tag"><i className="fas fa-crosshairs text-red"></i> Smart Recommendations</span>
            </div>
          </div>

          <div className="mock-hero-image-side">
            <div className="mock-hero-img-wrapper">
              <img src="https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?auto=format&fit=crop&w=800&q=80" alt="Student holding books" />
            </div>

            {/* Handwritten texts */}
            <div className="mock-hero-handwritten left-text" style={{ top: '20px', left: '-120px' }}>
              <span>"Strong</span>
              <span>Concepts</span>
              <span>Build</span>
              <span className="hl-blue">Selections!"</span>
            </div>
            
            <div className="sect-post-it right-text">
              "Practice<br />
              One Topic at a Time.<br />
              Progress for a<br />
              Lifetime."
            </div>

            <div className="mock-hero-handwritten bottom-center" style={{ bottom: '-30px', left: '50%', transform: 'translateX(-50%) rotate(-3deg)', color: '#1e3a8a' }}>
              <span>Same</span>
              <span>Aspirants</span>
              <span>Bigger Dreams</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TopicWiseHero;
