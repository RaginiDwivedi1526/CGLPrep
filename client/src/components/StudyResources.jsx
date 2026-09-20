import React from 'react';

const StudyResources = () => {
  return (
    <section className="resources-section">
        <div className="container">
            <div className="resources-grid">
                <div className="resources-main">
                    <h2>Study Resources for CGL 2026</h2>
                    <div className="resource-cards">
                        <div className="resource-item">
                            <div className="resource-icon"><i className="fas fa-file-pdf"></i></div>
                            <strong>Syllabus PDF</strong>
                            <span>(Subject-wise)</span>
                        </div>
                        <div className="resource-item">
                            <div className="resource-icon"><i className="fas fa-th-list"></i></div>
                            <strong>Exam Pattern</strong>
                            <span>(Complete Details)</span>
                        </div>
                        <div className="resource-item">
                            <div className="resource-icon"><i className="fas fa-history"></i></div>
                            <strong>Previous Year Papers</strong>
                            <span>(2016 – 2025)</span>
                        </div>
                        <div className="resource-item">
                            <div className="resource-icon"><i className="fas fa-sticky-note"></i></div>
                            <strong>Topic-Wise Notes</strong>
                            <span>(Free & Premium)</span>
                        </div>
                        <div className="resource-item">
                            <div className="resource-icon"><i className="fas fa-newspaper"></i></div>
                            <strong>Current Affairs</strong>
                            <span>(Daily Updated)</span>
                        </div>
                        <div className="resource-item">
                            <div className="resource-icon"><i className="fas fa-chess-knight"></i></div>
                            <strong>Preparation Strategy</strong>
                            <span>(Expert Guidance)</span>
                        </div>
                    </div>
                </div>
                <div className="prep-kit-card">
                    <div className="prep-kit-header">
                        <i className="fas fa-gift"></i>
                        <h3>Free CGL 2026 Preparation Kit</h3>
                    </div>
                    <ul className="kit-items">
                        <li><i className="fas fa-check"></i> Syllabus PDF</li>
                        <li><i className="fas fa-check"></i> Last 5 Year's PYQs</li>
                        <li><i className="fas fa-check"></i> Topic-wise Study Plan</li>
                        <li><i className="fas fa-check"></i> Current Affairs Booster</li>
                        <li><i className="fas fa-check"></i> Expert Preparation Tips</li>
                    </ul>
                    <div className="kit-badge">
                        <span>CGL 2026</span>
                        <small>PREPARATION KIT</small>
                    </div>
                    <button className="btn-primary w-full"><i className="fas fa-download"></i> Download Free Kit →</button>
                </div>
            </div>
        </div>
    </section>
  );
};

export default StudyResources;
