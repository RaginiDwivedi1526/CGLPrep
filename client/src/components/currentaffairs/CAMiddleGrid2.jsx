import React from 'react';

const CAMiddleGrid2 = () => {
  return (
    <section className="container ca-section">
      <div className="ca-mid2-grid">
        
        {/* Left: Magazine */}
        <div className="ca-mag-box">
          <div className="ca-sec-header">
            <div className="ca-sh-left">
              <div className="ca-sh-icon blue"><i className="fas fa-file-alt"></i></div>
              <div>
                <h2>Monthly Current Affairs Magazine</h2>
                <p>Download month-wise capsules with important news, MCQs and one-liners.</p>
              </div>
            </div>
            <span className="ca-view-all">View All <i className="fas fa-arrow-right"></i></span>
          </div>

          <div className="ca-mag-grid">
            <div className="ca-mag-card">
              <div className="ca-mag-icon blue"><i className="fas fa-file-pdf"></i></div>
              <h4>September 2026</h4>
              <span>PDF • 12 MB</span>
              <button className="ca-mag-dl"><i className="fas fa-download"></i></button>
            </div>
            <div className="ca-mag-card">
              <div className="ca-mag-icon green"><i className="fas fa-file-pdf"></i></div>
              <h4>August 2026</h4>
              <span>PDF • 11 MB</span>
              <button className="ca-mag-dl"><i className="fas fa-download"></i></button>
            </div>
            <div className="ca-mag-card">
              <div className="ca-mag-icon orange"><i className="fas fa-file-pdf"></i></div>
              <h4>July 2026</h4>
              <span>PDF • 10 MB</span>
              <button className="ca-mag-dl"><i className="fas fa-download"></i></button>
            </div>
            <div className="ca-mag-card">
              <div className="ca-mag-icon teal"><i className="fas fa-file-pdf"></i></div>
              <h4>June 2026</h4>
              <span>PDF • 11 MB</span>
              <button className="ca-mag-dl"><i className="fas fa-download"></i></button>
            </div>
          </div>
        </div>

        {/* Center: One Liners */}
        <div className="ca-oneliner-box">
          <div className="ca-sec-header" style={{ marginBottom: '16px' }}>
            <div className="ca-sh-left" style={{ gap: '12px' }}>
              <div className="ca-sh-icon blue-light" style={{ width: '32px', height: '32px', fontSize: '14px', borderRadius: '8px' }}><i className="fas fa-bolt"></i></div>
              <div>
                <h2 style={{ fontSize: '15px' }}>Current Affairs in One-Liners</h2>
                <p style={{ fontSize: '11px' }}>Quick revision for last-minute prep.</p>
              </div>
            </div>
          </div>
          
          <ul className="ca-ol-list">
            <li><i className="fas fa-check-circle text-green"></i> India ranked 4th in Global Innovation Index 2026</li>
            <li><i className="fas fa-check-circle text-green"></i> G20 Education Working Group meet in 2026</li>
            <li><i className="fas fa-check-circle text-green"></i> RBI repo rate unchanged at 6.50%</li>
            <li><i className="fas fa-check-circle text-green"></i> UN adopts global AI governance pact</li>
            <li><i className="fas fa-check-circle text-green"></i> INSAT-3DS launched by ISRO</li>
          </ul>
          
          <div className="ca-ol-viewmore">View More <i className="fas fa-arrow-right"></i></div>
        </div>

        {/* Right: Most Read */}
        <div className="ca-mostread-box">
          <div className="ca-sec-header" style={{ marginBottom: '16px' }}>
            <div className="ca-sh-left" style={{ gap: '12px' }}>
              <div className="ca-sh-icon red-light" style={{ width: '28px', height: '28px', fontSize: '14px', borderRadius: '50%' }}><i className="fas fa-fire"></i></div>
              <h2 style={{ fontSize: '15px' }}>Top 5 Most Read</h2>
            </div>
            <div className="ca-filter-sm">This Week <i className="fas fa-chevron-down"></i></div>
          </div>

          <ul className="ca-mr-list">
            <li>
              <div className="ca-mr-rank orange">1</div>
              <span className="ca-mr-title">Budget 2026 - Key Highlights</span>
              <span className="ca-mr-views"><i className="far fa-eye"></i> 12.4K</span>
            </li>
            <li>
              <div className="ca-mr-rank blue">2</div>
              <span className="ca-mr-title">New Criminal Laws in India</span>
              <span className="ca-mr-views"><i className="far fa-eye"></i> 10.8K</span>
            </li>
            <li>
              <div className="ca-mr-rank blue">3</div>
              <span className="ca-mr-title">India's G20 Presidency Outcomes</span>
              <span className="ca-mr-views"><i className="far fa-eye"></i> 9.6K</span>
            </li>
            <li>
              <div className="ca-mr-rank blue">4</div>
              <span className="ca-mr-title">ISRO's Recent Missions</span>
              <span className="ca-mr-views"><i className="far fa-eye"></i> 8.9K</span>
            </li>
            <li>
              <div className="ca-mr-rank blue">5</div>
              <span className="ca-mr-title">Important Days 2026</span>
              <span className="ca-mr-views"><i className="far fa-eye"></i> 7.2K</span>
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default CAMiddleGrid2;
