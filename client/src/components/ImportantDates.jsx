import React from 'react';

const ImportantDates = () => {
  return (
    <section className="dates-section">
        <div className="container">
            <div className="dates-grid">
                <div className="dates-timeline">
                    <h2>Important Dates (Expected Timeline)</h2>
                    <div className="timeline">
                        <div className="timeline-item">
                            <div className="tl-dot"></div>
                            <div className="tl-content">
                                <span className="tl-icon"><i className="fas fa-bullhorn"></i></span>
                                <strong>Official Notification</strong>
                                <span>Jun 2026*</span>
                            </div>
                        </div>
                        <div className="timeline-connector"></div>
                        <div className="timeline-item">
                            <div className="tl-dot"></div>
                            <div className="tl-content">
                                <span className="tl-icon"><i className="fas fa-edit"></i></span>
                                <strong>Online Application</strong>
                                <span>Jun – Jul 2026*</span>
                            </div>
                        </div>
                        <div className="timeline-connector"></div>
                        <div className="timeline-item active">
                            <div className="tl-dot"></div>
                            <div className="tl-content">
                                <span className="tl-icon"><i className="fas fa-file-alt"></i></span>
                                <strong>Tier-I Exam</strong>
                                <span>Aug – Sep 2026*</span>
                            </div>
                        </div>
                        <div className="timeline-connector"></div>
                        <div className="timeline-item">
                            <div className="tl-dot"></div>
                            <div className="tl-content">
                                <span className="tl-icon"><i className="fas fa-clipboard-check"></i></span>
                                <strong>Tier-I Result</strong>
                                <span>Oct 2026*</span>
                            </div>
                        </div>
                        <div className="timeline-connector"></div>
                        <div className="timeline-item">
                            <div className="tl-dot"></div>
                            <div className="tl-content">
                                <span className="tl-icon"><i className="fas fa-laptop"></i></span>
                                <strong>Tier-II Exam</strong>
                                <span>Dec 2026*</span>
                            </div>
                        </div>
                        <div className="timeline-connector"></div>
                        <div className="timeline-item">
                            <div className="tl-dot"></div>
                            <div className="tl-content">
                                <span className="tl-icon"><i className="fas fa-trophy"></i></span>
                                <strong>Final Result</strong>
                                <span>Mar 2027*</span>
                            </div>
                        </div>
                    </div>
                    <p className="dates-note">*Dates are tentative based on previous year trends. Please refer to the official SSC website for confirmed dates.</p>
                </div>
                <div className="notify-card">
                    <div className="notify-icon"><i className="fas fa-bell"></i></div>
                    <h3>Get Notified Instantly</h3>
                    <p>Be the first to know about SSC CGL 2026 notification, exam dates, admit card, result and more.</p>
                    <div className="notify-form">
                        <input type="email" placeholder="Enter your email address" className="form-input" id="notifyEmail" />
                        <button className="btn-primary btn-sm" id="notifyBtn"><i className="fas fa-bell"></i> Notify Me →</button>
                    </div>
                    <label className="checkbox-label">
                        <input type="checkbox" defaultChecked />
                        <span>Also send study tips & important updates</span>
                    </label>
                </div>
            </div>
        </div>
    </section>
  );
};

export default ImportantDates;
