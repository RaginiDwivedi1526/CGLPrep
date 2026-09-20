import React from 'react';

const CAQuizPreFooter = () => {
  return (
    <div className="ca-pre-footer" style={{ background: '#0f172a' }}>
      <div className="container">
        <div className="capf-content" style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <div className="capf-text">
            <h2>Current Affairs Practice Today.</h2>
            <h2 style={{ color: '#94a3b8', fontSize: '24px' }}>A Smarter You Tomorrow.</h2>
          </div>
          <button className="btn-yellow">Start a Quiz Now <i className="fas fa-arrow-right"></i></button>
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

export default CAQuizPreFooter;
