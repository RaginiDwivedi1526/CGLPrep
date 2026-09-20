import React from 'react';

const Info = () => {
  return (
    <section className="info-section">
        <div className="container">
            <div className="info-grid-3">
                <div className="info-card highlights-card">
                    <h3>SSC CGL 2026 – Key Highlights</h3>
                    <div className="highlight-item">
                        <span className="hl-label">Exam Date</span>
                        <div className="hl-box">
                            <strong>12,256*</strong>
                            <span>Tentative Vacancies</span>
                        </div>
                    </div>
                    <div className="highlight-tags">
                        <span className="tag">Aug – Sep 2026*</span>
                        <span className="tag">Tier 1 (3 phases)</span>
                    </div>
                    <div className="highlight-item">
                        <span className="hl-label">Application</span>
                        <div className="hl-box">
                            <strong>Dec 2025*</strong>
                            <span>Expected</span>
                        </div>
                    </div>
                    <div className="eligibility-row">
                        <i className="fas fa-graduation-cap"></i>
                        <span>Bachelor's Degree</span>
                        <span className="tag-small">Eligibility</span>
                    </div>
                    <button className="btn-primary btn-sm w-full">View Complete CGL 2026 Guide →</button>
                    <p className="note-small">* Information is an estimate. Refer to official SSC website.</p>
                </div>

                <div className="info-card readiness-card">
                    <h3>Your CGL Readiness Score</h3>
                    <p className="card-sub">You are on the right track! Keep going.</p>
                    <div className="readiness-score-wrapper">
                        <div className="circle-progress" data-percent="72">
                            <svg viewBox="0 0 120 120">
                                <circle className="bg" cx="60" cy="60" r="52"></circle>
                                <circle className="fill" cx="60" cy="60" r="52" strokeDasharray="326.7" strokeDashoffset="91.5"></circle>
                            </svg>
                            <span className="circle-text">72%</span>
                        </div>
                        <div className="readiness-subjects">
                            <div className="subj"><span className="dot blue"></span> Quantitative <strong>82%</strong></div>
                            <div className="subj"><span className="dot green"></span> Reasoning <strong>78%</strong></div>
                            <div className="subj"><span className="dot orange"></span> English <strong>65%</strong></div>
                            <div className="subj"><span className="dot red"></span> GK / Awareness <strong>58%</strong></div>
                        </div>
                    </div>
                    <button className="btn-outline btn-sm w-full">Check My Readiness →</button>
                </div>

                <div className="info-card stopping-card">
                    <h3>What is Stopping You From Clearing CGL?</h3>
                    <div className="stopping-stats">
                        <div className="stop-stat">
                            <i className="fas fa-times-circle red"></i>
                            <strong>154</strong>
                            <span>Wrong Attempts</span>
                        </div>
                        <div className="stop-stat">
                            <i className="fas fa-clock orange"></i>
                            <strong>18</strong>
                            <span>Avg. Time / Q (sec)</span>
                        </div>
                        <div className="stop-stat">
                            <i className="fas fa-forward blue"></i>
                            <strong>172</strong>
                            <span>Skipped Questions</span>
                        </div>
                    </div>
                    <div className="weakness-list">
                        <div className="weak-item">
                            <i className="fas fa-exclamation-triangle"></i>
                            <span>Analogy Questions</span>
                            <span className="weak-pct red">42%</span>
                        </div>
                        <div className="weak-item">
                            <i className="fas fa-exclamation-triangle"></i>
                            <span>Profit & Loss</span>
                            <span className="weak-pct orange">55%</span>
                        </div>
                        <div className="weak-item">
                            <i className="fas fa-exclamation-triangle"></i>
                            <span>Reading Comprehension</span>
                            <span className="weak-pct yellow">60%</span>
                        </div>
                    </div>
                    <button className="btn-primary btn-sm w-full">Fix My Weak Areas →</button>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Info;
