import React from 'react';

const CGLStats = () => {
  return (
    <section className="cgl-stats-strip">
        <div className="container">
            <div className="cgl-stats-grid">
                <div className="cgl-stat">
                    <div className="cgl-stat-icon"><i className="fas fa-users"></i></div>
                    <div className="cgl-stat-info">
                        <strong>12,256+</strong>
                        <span>Tentative Vacancies<br/>(CGL 2026)</span>
                    </div>
                </div>
                <div className="cgl-stat">
                    <div className="cgl-stat-icon"><i className="fas fa-calendar-alt"></i></div>
                    <div className="cgl-stat-info">
                        <strong>Aug – Sep 2026*</strong>
                        <span>Tier-I Exam<br/>(Expected)</span>
                    </div>
                </div>
                <div className="cgl-stat">
                    <div className="cgl-stat-icon"><i className="fas fa-calendar-check"></i></div>
                    <div className="cgl-stat-info">
                        <strong>Dec 2026*</strong>
                        <span>Tier-II Exam<br/>(Expected)</span>
                    </div>
                </div>
                <div className="cgl-stat">
                    <div className="cgl-stat-icon"><i className="fas fa-th-large"></i></div>
                    <div className="cgl-stat-info">
                        <strong>4</strong>
                        <span>Tier-I Sections<br/>(Computer Based)</span>
                    </div>
                </div>
                <div className="cgl-stat">
                    <div className="cgl-stat-icon"><i className="fas fa-graduation-cap"></i></div>
                    <div className="cgl-stat-info">
                        <strong>Bachelor's Degree</strong>
                        <span>Minimum Eligibility</span>
                    </div>
                </div>
                <div className="cgl-stat">
                    <div className="cgl-stat-icon"><i className="fas fa-map-marker-alt"></i></div>
                    <div className="cgl-stat-info">
                        <strong>All India</strong>
                        <span>Exam Conducted</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default CGLStats;
