import React from 'react';

const StudyPlan = () => {
  return (
    <section className="study-plan-section">
        <div className="container">
            <div className="sp-header">
                <h2 className="section-title">Your Personalized Study Plan <span className="badge-ai">Adaptive & AI-Powered</span></h2>
                <p className="section-sub">Your plan changes as you improve. Focus where you need it most.</p>
            </div>
            <div className="study-plan-grid">
                <div className="sp-sidebar">
                    <h4>You Need to Work On</h4>
                    <ul className="sp-topics">
                        <li><span className="dot red"></span> Maths – Percentage (55/Q)</li>
                        <li><span className="dot orange"></span> Polity – Laxmikanth (35/Q)</li>
                        <li><span className="dot yellow"></span> English – Error Detection (21/Q)</li>
                        <li><span className="dot blue"></span> Geometry – Triangles (26/Q)</li>
                        <li className="divider"></li>
                        <li><span className="dot gray"></span> Current Affairs – August (40/Q)</li>
                    </ul>
                    <button className="btn-primary btn-sm w-full">Get Your AI Study Plan →</button>
                </div>
                <div className="sp-main">
                    <div className="sp-ai-card">
                        <div className="sp-ai-icon"><i className="fas fa-robot"></i></div>
                        <h3>Not just a plan.<br/>A personal AI coach<br/>that adapts to you.</h3>
                        <ul className="sp-ai-features">
                            <li><i className="fas fa-check"></i> Identifies Performance Gaps</li>
                            <li><i className="fas fa-check"></i> Adapts Study Plan</li>
                            <li><i className="fas fa-check"></i> Focus on Weak Topics</li>
                            <li><i className="fas fa-check"></i> Maps Routine/Pattern Tracker</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default StudyPlan;
