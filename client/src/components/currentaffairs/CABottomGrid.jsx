import React from 'react';

const CABottomGrid = () => {
  return (
    <section className="container ca-section" style={{ marginBottom: '60px' }}>
      <div className="ca-bot-grid">
        
        {/* Left: Analysis */}
        <div className="ca-analysis-box">
          <div className="ca-sec-header">
            <div className="ca-sh-left">
              <div className="ca-sh-icon green"><i className="far fa-lightbulb"></i></div>
              <div>
                <h2>Exam-Focused Analysis</h2>
                <p>In-depth analysis of important topics from an exam perspective.</p>
              </div>
            </div>
            <span className="ca-view-all">View All <i className="fas fa-arrow-right"></i></span>
          </div>

          <div className="ca-ana-grid">
            <div className="ca-ana-card">
              <img src="/images/currentaffairs/ca-ana1.jpg" alt="Monetary Policy" />
              <h4>Monetary Policy 2026<br/>- What it means for SSC CGL?</h4>
              <div className="ca-ana-meta">
                <span>12 Sep 2026</span>
                <span className="text-blue">Economy</span>
              </div>
            </div>
            <div className="ca-ana-card">
              <img src="/images/currentaffairs/ca-ana2.jpg" alt="International Org" />
              <h4>Important International<br/>Organisations for SSC CGL</h4>
              <div className="ca-ana-meta">
                <span>11 Sep 2026</span>
                <span className="text-blue">International</span>
              </div>
            </div>
            <div className="ca-ana-card">
              <img src="/images/currentaffairs/ca-ana3.jpg" alt="Climate" />
              <h4>India's Climate Commitments<br/>and Recent Initiatives</h4>
              <div className="ca-ana-meta">
                <span>10 Sep 2026</span>
                <span className="text-blue">Environment</span>
              </div>
            </div>
          </div>
        </div>

        {/* Center: Tools */}
        <div className="ca-tools-box">
          <div className="ca-sec-header" style={{ marginBottom: '20px' }}>
            <div className="ca-sh-left" style={{ gap: '12px' }}>
              <div className="ca-sh-icon blue" style={{ width: '32px', height: '32px', fontSize: '14px', borderRadius: '8px' }}><i className="fas fa-tools"></i></div>
              <h2 style={{ fontSize: '15px' }}>Current Affairs Revision Tools</h2>
            </div>
          </div>

          <ul className="ca-tools-list">
            <li>
              <div className="ca-tool-icon blue"><i className="far fa-file-alt"></i></div>
              <span className="ca-tool-name">Year-wise Compilation (2016-2025)</span>
              <span className="ca-tool-link">Download PDFs <i className="fas fa-arrow-right"></i></span>
            </li>
            <li>
              <div className="ca-tool-icon orange"><i className="fas fa-question-circle"></i></div>
              <span className="ca-tool-name">Topic-wise MCQs</span>
              <span className="ca-tool-link">Practice Now <i className="fas fa-arrow-right"></i></span>
            </li>
            <li>
              <div className="ca-tool-icon red"><i className="far fa-calendar-alt"></i></div>
              <span className="ca-tool-name">Important Days List</span>
              <span className="ca-tool-link">View List <i className="fas fa-arrow-right"></i></span>
            </li>
            <li>
              <div className="ca-tool-icon green"><i className="fas fa-link"></i></div>
              <span className="ca-tool-name">Static GK + Current Linkage</span>
              <span className="ca-tool-link">Explore <i className="fas fa-arrow-right"></i></span>
            </li>
            <li>
              <div className="ca-tool-icon pink"><i className="fas fa-project-diagram"></i></div>
              <span className="ca-tool-name">Mind Maps & Infographics</span>
              <span className="ca-tool-link">View Now <i className="fas fa-arrow-right"></i></span>
            </li>
            <li>
              <div className="ca-tool-icon purple"><i className="far fa-file-pdf"></i></div>
              <span className="ca-tool-name">Weekly PDF Digest</span>
              <span className="ca-tool-link">Download <i className="fas fa-arrow-right"></i></span>
            </li>
          </ul>
        </div>

        {/* Right: Newsletter & Chat */}
        <div className="ca-sidebar-bot">
          
          <div className="ca-nl-widget">
            <div className="ca-nl-icon"><i className="fas fa-bell"></i></div>
            <div className="ca-nl-content">
              <h4>Never Miss an Update!</h4>
              <p>Get daily current affairs in your inbox.</p>
            </div>
            <input type="email" placeholder="Enter your email address" className="ca-nl-input" />
            <button className="btn-primary ca-nl-btn">Subscribe Now</button>
          </div>

          <div className="ca-chat-widget">
            <div className="ca-chat-top">
              <div className="ca-chat-icon"><i className="fas fa-comments"></i></div>
              <div className="ca-chat-content">
                <h4>Current Affairs Discussion</h4>
                <p>Discuss important topics with fellow aspirants.</p>
              </div>
            </div>
            <button className="btn-outline-sm ca-chat-btn">Join Discussion <i className="fas fa-arrow-right"></i></button>
          </div>

        </div>

      </div>
    </section>
  );
};

export default CABottomGrid;
