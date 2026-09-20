import React from 'react';

const CATopicPreFooter = () => {
  return (
    <div className="ca-pre-footer" style={{ background: '#0f172a' }}>
      <div className="container">
        <div className="capf-content" style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <div className="capf-text">
            <h2>Stay Updated. Stay Ahead.</h2>
            <p style={{ color: '#94a3b8' }}>Master current affairs topic by topic and boost your CGL preparation.</p>
          </div>
          <button className="btn-yellow">Start Learning Now <i className="fas fa-arrow-right"></i></button>
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

export default CATopicPreFooter;
