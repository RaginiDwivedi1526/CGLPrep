import React from 'react';

const CATopGrid = () => {
  return (
    <section className="container ca-section">
      <div className="ca-top-grid">
        
        {/* Left: Top Story Carousel */}
        <div className="ca-top-story">
          <div className="cats-bg" style={{ backgroundImage: "url('/images/currentaffairs/ca-satellite.jpg')" }}></div>
          <div className="cats-overlay"></div>
          
          <div className="cats-header">
            <span className="flt-tag green">TOP STORY</span>
            <span className="cats-date"><i className="far fa-calendar"></i> 12 Sep 2026</span>
          </div>

          <div className="cats-content">
            <h2>ISRO Launches INSAT-3DS Weather Satellite</h2>
            <p>Boosts India's weather forecasting and disaster management capabilities.</p>
          </div>

          <div className="cats-controls">
            <button className="cats-btn"><i className="fas fa-chevron-left"></i></button>
            <div className="cats-dots">
              <span className="cats-dot active"></span>
              <span className="cats-dot"></span>
              <span className="cats-dot"></span>
              <span className="cats-dot"></span>
            </div>
            <button className="cats-btn"><i className="fas fa-chevron-right"></i></button>
          </div>
        </div>

        {/* Center: Latest News List */}
        <div className="ca-latest-news">
          <div className="caln-item">
            <img src="/images/currentaffairs/ca-news1.jpg" alt="G20" className="caln-img" />
            <div className="caln-content">
              <h4>India to Host G20 Education Working Group Meet in 2026</h4>
              <div className="caln-meta">
                <span>12 Sep 2026</span>
                <span className="caln-tag blue">International <i className="fas fa-arrow-right"></i></span>
              </div>
            </div>
          </div>
          <div className="caln-item">
            <img src="/images/currentaffairs/ca-news2.jpg" alt="RBI" className="caln-img" />
            <div className="caln-content">
              <h4>RBI Keeps Repo Rate Unchanged at 6.50%</h4>
              <div className="caln-meta">
                <span>12 Sep 2026</span>
                <span className="caln-tag orange">Economy <i className="fas fa-arrow-right"></i></span>
              </div>
            </div>
          </div>
          <div className="caln-item">
            <img src="/images/currentaffairs/ca-news3.jpg" alt="Rajasthan" className="caln-img" />
            <div className="caln-content">
              <h4>Rajasthan Becomes 1st State to Implement 'Green Budgeting'</h4>
              <div className="caln-meta">
                <span>11 Sep 2026</span>
                <span className="caln-tag green">Schemes <i className="fas fa-arrow-right"></i></span>
              </div>
            </div>
          </div>
          <div className="caln-item">
            <div className="caln-img placeholder-un">
              <i className="fas fa-globe"></i>
            </div>
            <div className="caln-content">
              <h4>UN Adopts Global Pact on AI Governance</h4>
              <div className="caln-meta">
                <span>11 Sep 2026</span>
                <span className="caln-tag blue">International <i className="fas fa-arrow-right"></i></span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar: Quiz & Quote */}
        <div className="ca-top-sidebar">
          
          <div className="ca-quiz-widget">
            <div className="cqw-header">
              <div className="cqw-icon"><i className="fas fa-bullseye"></i></div>
              <div className="cqw-title">
                <h3>Daily Current Affairs Quiz</h3>
                <p>Test your knowledge with 10 new questions every day!</p>
              </div>
            </div>
            <div className="cqw-stats">
              <div className="cqws-item">
                <div className="cqws-icon purple"><i className="fas fa-clipboard-list"></i></div>
                <strong>10</strong>
                <span>Questions</span>
              </div>
              <div className="cqws-item">
                <div className="cqws-icon blue"><i className="far fa-clock"></i></div>
                <strong>10</strong>
                <span>Minutes</span>
              </div>
              <div className="cqws-item">
                <div className="cqws-icon red"><i className="fas fa-chart-bar"></i></div>
                <strong>Live</strong>
                <span>Score</span>
              </div>
            </div>
            <button className="btn-primary" style={{ width: '100%', marginBottom: '12px' }}>Start Today's Quiz <i className="fas fa-arrow-right"></i></button>
            <div className="cqw-link">View Previous Quizzes <i className="fas fa-arrow-right"></i></div>
          </div>

          <div className="ca-quote-widget">
            <img src="/images/currentaffairs/ca-kalam.jpg" alt="A.P.J. Abdul Kalam" className="ca-quote-img" />
            <div className="ca-quote-content">
              <p>"Dream is not that which you see while sleeping, it is that which does not let you sleep."</p>
              <strong>— Dr. A.P.J. Abdul Kalam</strong>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default CATopGrid;
