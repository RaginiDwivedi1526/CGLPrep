import React from 'react';

const Features = () => {
  return (
    <section className="features-strip" id="features">
        <div className="container">
            <h2 className="section-title">Everything You Need to Crack SSC CGL</h2>
            <div className="features-row">
                <div className="feature-card-mini">
                    <div className="fc-icon blue"><i className="fas fa-brain"></i></div>
                    <h4>AI Study Plan</h4>
                    <p>Personalized for you</p>
                </div>
                <div className="feature-card-mini">
                    <div className="fc-icon green"><i className="fas fa-file-alt"></i></div>
                    <h4>Mock Tests</h4>
                    <p>Real exam interface</p>
                </div>
                <div className="feature-card-mini">
                    <div className="fc-icon purple"><i className="fas fa-history"></i></div>
                    <h4>Previous Year Papers</h4>
                    <p>Topic-wise & year-wise</p>
                </div>
                <div className="feature-card-mini">
                    <div className="fc-icon orange"><i className="fas fa-newspaper"></i></div>
                    <h4>Current Affairs</h4>
                    <p>Daily updates + MCQs</p>
                </div>
                <div className="feature-card-mini">
                    <div className="fc-icon red"><i className="fas fa-chart-bar"></i></div>
                    <h4>Post Predictor</h4>
                    <p>Find your best post</p>
                </div>
                <div className="feature-card-mini">
                    <div className="fc-icon teal"><i className="fas fa-robot"></i></div>
                    <h4>AI Tutor</h4>
                    <p>Doubt solving 24/7</p>
                </div>
                <div className="feature-card-mini">
                    <div className="fc-icon indigo"><i className="fas fa-chart-line"></i></div>
                    <h4>Performance Analytics</h4>
                    <p>Track & improve</p>
                </div>
                <div className="feature-card-mini">
                    <div className="fc-icon pink"><i className="fas fa-book-open"></i></div>
                    <h4>Notes & Revision</h4>
                    <p>Smart study material</p>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Features;
