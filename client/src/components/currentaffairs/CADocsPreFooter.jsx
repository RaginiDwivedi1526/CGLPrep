import React from 'react';

const CADocsPreFooter = () => {
  return (
    <div className="ca-pre-footer" style={{ background: '#0f172a' }}>
      <div className="container">
        <div className="capf-content" style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <div className="capf-text">
            <h2>Prepare Smarter. Stay Ahead.</h2>
            <p style={{ color: '#94a3b8' }}>Use important documents to build a strong foundation for your CGL preparation.</p>
          </div>
          <button className="btn-yellow">Explore Documents <i className="fas fa-arrow-right"></i></button>
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

export default CADocsPreFooter;
