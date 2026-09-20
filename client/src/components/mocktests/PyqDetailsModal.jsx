import React, { useEffect } from 'react';

const PyqDetailsModal = ({ paper, onClose }) => {
  // Prevent background scrolling when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  if (!paper) return null;

  return (
    <div className="pyq-modal-overlay" onClick={onClose}>
      <div className="pyq-modal-container" onClick={e => e.stopPropagation()}>
        
        {/* Modal Header */}
        <div className="pyq-modal-header">
          <div className="pyq-mh-left">
            <div className="pyq-mh-icon"><i className="fas fa-clipboard-list"></i></div>
            <div className="pyq-mh-text">
              <div className="pyq-mh-title-row">
                <h2>{paper.title}</h2>
                {paper.isLatest && <span className="flt-tag green" style={{ fontSize: '10px' }}>Latest</span>}
              </div>
              <div className="pyq-mh-sub">Actual Questions | With Detailed Solutions</div>
              <p>Practice the real exam paper with solutions, analysis and topic-wise insights.</p>
            </div>
          </div>
          <button className="pyq-mh-close" onClick={onClose}><i className="fas fa-times"></i></button>
        </div>

        {/* Modal Body */}
        <div className="pyq-modal-body">
          
          {/* Left Sidebar */}
          <div className="pyq-mb-sidebar">
            <div className="pyq-info-list">
              <div className="pyq-info-item">
                <div className="pyq-info-icon purple-light"><i className="far fa-calendar-alt"></i></div>
                <div><span>Year</span><strong>2024</strong></div>
              </div>
              <div className="pyq-info-item">
                <div className="pyq-info-icon blue-light"><i className="fas fa-layer-group"></i></div>
                <div><span>Tier</span><strong>Tier - I (All Shifts)</strong></div>
              </div>
              <div className="pyq-info-item">
                <div className="pyq-info-icon orange-light"><i className="fas fa-question-circle"></i></div>
                <div><span>Total Questions</span><strong>100</strong></div>
              </div>
              <div className="pyq-info-item">
                <div className="pyq-info-icon purple-light"><i className="fas fa-bullseye"></i></div>
                <div><span>Total Marks</span><strong>200</strong></div>
              </div>
              <div className="pyq-info-item">
                <div className="pyq-info-icon blue-light"><i className="far fa-clock"></i></div>
                <div><span>Exam Duration</span><strong>60 Minutes</strong></div>
              </div>
              <div className="pyq-info-item">
                <div className="pyq-info-icon green-light"><i className="fas fa-laptop"></i></div>
                <div><span>Exam Mode</span><strong>CBT (Online)</strong></div>
              </div>
              <div className="pyq-info-item">
                <div className="pyq-info-icon blue-light"><i className="fas fa-clipboard-list"></i></div>
                <div><span>Available Shifts</span><strong>Shift 1, Shift 2, Shift 3, Shift 4</strong></div>
              </div>
              <div className="pyq-info-item">
                <div className="pyq-info-icon red-light"><i className="fas fa-language"></i></div>
                <div><span>Language</span><strong>English & Hindi</strong></div>
              </div>
              <div className="pyq-info-item">
                <div className="pyq-info-icon blue-light"><i className="fas fa-check-double"></i></div>
                <div><span>Difficulty Level</span><span className="flt-tag orange" style={{ display: 'inline-block', marginTop: '4px' }}>Moderate</span></div>
              </div>
            </div>

            <div className="pyq-modal-quote">
              <i className="fas fa-quote-left"></i>
              <p>"Previous year papers are the best way to understand the actual exam level and question pattern."</p>
              <strong>— CGLPrep AI</strong>
            </div>
          </div>

          {/* Right Main Content */}
          <div className="pyq-mb-main">
            
            {/* Tabs */}
            <div className="pyq-modal-tabs">
              <button className="active">Overview</button>
              <button>Shift-wise Papers</button>
              <button>Subject-wise Analysis</button>
              <button>Exam Insights</button>
            </div>

            <div className="pyq-modal-scroll-area">
              
              <div className="pyq-about-section">
                <h3>About This Paper</h3>
                <p>SSC CGL 2024 Tier I was conducted in multiple shifts across various dates. This paper includes actual questions asked in all shifts with detailed solutions, answer explanations, topic-wise analysis and difficulty level.</p>
              </div>

              <div className="pyq-features-grid">
                <div className="pyq-features-col">
                  <h3>What's Included?</h3>
                  <ul className="pyq-inc-list">
                    <li><i className="fas fa-check-circle"></i> Actual questions from all shifts</li>
                    <li><i className="fas fa-check-circle"></i> Detailed solutions with explanations</li>
                    <li><i className="fas fa-check-circle"></i> Topic-wise and subject-wise analysis</li>
                    <li><i className="fas fa-check-circle"></i> Difficulty level and good attempts</li>
                    <li><i className="fas fa-check-circle"></i> Comparative analysis with previous years</li>
                  </ul>
                </div>
                
                <div className="pyq-features-col">
                  <h3>Subjects & Marks</h3>
                  <div className="pyq-subj-list">
                    <div className="pyq-subj-item">
                      <div className="pyq-subj-icon red-light"><i className="fas fa-brain"></i></div>
                      <span className="pyq-subj-name">General Intelligence & Reasoning</span>
                      <span className="pyq-subj-stats">25 Q | 50 Marks</span>
                    </div>
                    <div className="pyq-subj-item">
                      <div className="pyq-subj-icon orange-light"><i className="fas fa-globe"></i></div>
                      <span className="pyq-subj-name">General Awareness</span>
                      <span className="pyq-subj-stats">25 Q | 50 Marks</span>
                    </div>
                    <div className="pyq-subj-item">
                      <div className="pyq-subj-icon green-light"><i className="fas fa-calculator"></i></div>
                      <span className="pyq-subj-name">Quantitative Aptitude</span>
                      <span className="pyq-subj-stats">25 Q | 50 Marks</span>
                    </div>
                    <div className="pyq-subj-item">
                      <div className="pyq-subj-icon blue-light"><i className="fas fa-font"></i></div>
                      <span className="pyq-subj-name">English Language</span>
                      <span className="pyq-subj-stats">25 Q | 50 Marks</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pyq-shifts-section">
                <h3>Available Shifts (4)</h3>
                <div className="pyq-shifts-grid">
                  <div className="pyq-shift-card">
                    <h4>Shift 1</h4>
                    <p>09 Sep 2024</p>
                    <p>10:00 AM - 11:00 AM</p>
                    <button className="btn-outline-sm">View Paper</button>
                  </div>
                  <div className="pyq-shift-card">
                    <h4>Shift 2</h4>
                    <p>09 Sep 2024</p>
                    <p>01:00 PM - 02:00 PM</p>
                    <button className="btn-outline-sm">View Paper</button>
                  </div>
                  <div className="pyq-shift-card">
                    <h4>Shift 3</h4>
                    <p>10 Sep 2024</p>
                    <p>10:00 AM - 11:00 AM</p>
                    <button className="btn-outline-sm">View Paper</button>
                  </div>
                  <div className="pyq-shift-card">
                    <h4>Shift 4</h4>
                    <p>10 Sep 2024</p>
                    <p>01:00 PM - 02:00 PM</p>
                    <button className="btn-outline-sm">View Paper</button>
                  </div>
                </div>
              </div>

              <div className="pyq-pdf-banner">
                <div className="pyq-pdf-icon"><i className="fas fa-bullseye"></i></div>
                <div className="pyq-pdf-text">
                  <h4>Prefer a single PDF?</h4>
                  <p>Download the combined paper (All shifts) in one PDF file.</p>
                </div>
                <button className="btn-outline-sm pyq-pdf-btn">Download All Shifts (PDF)</button>
              </div>

            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="pyq-modal-footer">
          <button className="btn-outline" onClick={onClose}>Close</button>
          <button className="btn-primary">Start Practicing Now <i className="fas fa-arrow-right"></i></button>
        </div>

      </div>
    </div>
  );
};

export default PyqDetailsModal;
