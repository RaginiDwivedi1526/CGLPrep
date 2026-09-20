import React from 'react';

const Parents = () => {
  return (
    <section className="parents-section">
        <div className="container">
            <h2 className="section-title">Why Parents Trust CGLPrep AI</h2>
            <p className="section-sub">Because your child's future matters.</p>
            <div className="parents-grid">
                <div className="parent-card">
                    <div className="parent-icon"><i className="fas fa-chart-line"></i></div>
                    <h4>Track Progress</h4>
                </div>
                <div className="parent-card">
                    <div className="parent-icon"><i className="fas fa-shield-alt"></i></div>
                    <h4>Know Strengths & Weaknesses</h4>
                </div>
                <div className="parent-card">
                    <div className="parent-icon"><i className="fas fa-calendar-check"></i></div>
                    <h4>Ensure Consistent Study</h4>
                    <p>Daily activity & targets</p>
                </div>
                <div className="parent-card">
                    <div className="parent-icon"><i className="fas fa-award"></i></div>
                    <h4>AI Guidance</h4>
                    <p>Better decisions, always</p>
                </div>
                <div className="parent-card">
                    <div className="parent-icon"><i className="fas fa-wallet"></i></div>
                    <h4>Better Investment</h4>
                    <p>Affordable & measureable</p>
                </div>
                <div className="parent-card">
                    <div className="parent-icon"><i className="fas fa-users"></i></div>
                    <h4>Trusted by Thousands</h4>
                    <p>1L+ students</p>
                </div>
            </div>
            <div className="parent-quote">
                <i className="fas fa-quote-left"></i>
                <p>"Finally, a platform that keeps us involved in our child's preparation."</p>
                <span>— Parent of a CGLPrep AI student</span>
            </div>
        </div>
    </section>
  );
};

export default Parents;
