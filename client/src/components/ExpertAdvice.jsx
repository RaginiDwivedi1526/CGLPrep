import React from 'react';

const ExpertAdvice = () => {
  return (
    <section className="advice-section">
        <div className="container">
            <div className="advice-grid">
                <div className="expert-card">
                    <h3>Expert's Advice</h3>
                    <div className="expert-content">
                        <div className="expert-avatar"><i className="fas fa-user-tie"></i></div>
                        <blockquote>
                            "Start early, be consistent and focus on practice. SSC CGL is not just about hard work, but smart strategy and regular mock tests. Analyze your performance and improve your weak areas continuously."
                        </blockquote>
                    </div>
                    <div className="expert-info">
                        <strong>Amit Sir</strong>
                        <span>CGL Expert, 10+ Years of Experience</span>
                    </div>
                </div>

                <div className="tips-card">
                    <h3>Quick Preparation Tips</h3>
                    <ul className="tips-list">
                        <li><i className="fas fa-check-circle"></i> Understand the latest exam pattern</li>
                        <li><i className="fas fa-check-circle"></i> Solve previous year papers regularly</li>
                        <li><i className="fas fa-check-circle"></i> Take full-length mock tests</li>
                        <li><i className="fas fa-check-circle"></i> Focus on weak topics</li>
                        <li><i className="fas fa-check-circle"></i> Revise current affairs daily</li>
                        <li><i className="fas fa-check-circle"></i> Maintain notes and formula sheets</li>
                        <li><i className="fas fa-check-circle"></i> Practice time management</li>
                        <li><i className="fas fa-check-circle"></i> Stay consistent and positive</li>
                    </ul>
                </div>

                <div className="motivation-card">
                    <div className="motivation-content">
                        <p className="motivation-quote">"Discipline Today<br/>Selection Tomorrow"</p>
                        <button className="btn-primary"><i className="fas fa-arrow-right"></i> Start Your CGL Journey →</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default ExpertAdvice;
