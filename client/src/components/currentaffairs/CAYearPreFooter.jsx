import React from 'react';

const CAYearPreFooter = () => {
  return (
    <div className="ca-pre-footer" style={{ background: '#0f172a' }}>
      <div className="container">
        <div className="capf-content" style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <div className="capf-text">
            <h2>Learn from the Past. Stay Ahead for the Future.</h2>
            <p style={{ color: '#94a3b8' }}>Year-wise current affairs to strengthen your General Awareness.</p>
          </div>
          <button className="btn-yellow">Explore Year-wise <i className="fas fa-arrow-right"></i></button>
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

export default CAYearPreFooter;
