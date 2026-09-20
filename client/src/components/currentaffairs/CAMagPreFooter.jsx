import React from 'react';

const CAMagPreFooter = () => {
  return (
    <div className="ca-pre-footer" style={{ background: '#0f172a' }}>
      <div className="container">
        <div className="capf-content" style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <div className="capf-text">
            <h2>Stay Informed. Stay Prepared.</h2>
            <p style={{ color: '#94a3b8' }}>Turn current events into your competitive advantage with CGLPrep AI.</p>
          </div>
          <button className="btn-yellow">Read Latest Magazine <i className="fas fa-arrow-right"></i></button>
        </div>
        <div className="capf-handwritten">
          <span>Same</span>
          <span>Aspirants</span>
          <span>Bigger Dreams</span>
        </div>
      </div>
    </div>
  );
};

export default CAMagPreFooter;
