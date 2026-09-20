import React from 'react';

const DeepDiveGrid = () => {
  return (
    <section className="feat-deepdive-sec">
        <div className="container">
            <div className="feat-grid-6">
                
                <div className="dd-card">
                    <h3>Real Exam Experience</h3>
                    <p>Mock tests that feel like the real SSC CGL exam.</p>
                    <ul className="dd-list">
                        <li><i className="fas fa-check-circle"></i> Latest pattern & difficulty level</li>
                        <li><i className="fas fa-check-circle"></i> All India ranking & percentile</li>
                        <li><i className="fas fa-check-circle"></i> Detailed question analysis</li>
                        <li><i className="fas fa-check-circle"></i> Compare with toppers</li>
                        <li><i className="fas fa-check-circle"></i> Attempt on web, Android & iOS</li>
                    </ul>
                    <div className="dd-image">
                        {/* Placeholder for laptop mockup */}
                        <div style={{background: '#cbd5e1', width: '250px', height: '150px', borderRadius: '8px', display: 'inline-block', boxShadow: '0 10px 25px rgba(0,0,0,0.1)'}}></div>
                    </div>
                    <button className="btn-primary w-full" style={{position: 'relative', zIndex: 3, marginTop: '20px'}}>Take a Free Mock Test <i className="fas fa-arrow-right"></i></button>
                </div>

                <div className="dd-card">
                    <h3>Cutoff & Salary Intelligence</h3>
                    <p>Know the expected cutoffs and salary details for every post.</p>
                    <ul className="dd-list">
                        <li><i className="fas fa-check-circle"></i> Previous year cutoffs (category-wise)</li>
                        <li><i className="fas fa-check-circle"></i> Expected cutoff trends</li>
                        <li><i className="fas fa-check-circle"></i> Post-wise salary & allowances</li>
                        <li><i className="fas fa-check-circle"></i> Department details</li>
                        <li><i className="fas fa-check-circle"></i> Promotion & career growth</li>
                    </ul>
                    <button className="btn-primary w-full" style={{marginTop: '20px'}}>View Cutoff & Salary Data <i className="fas fa-arrow-right"></i></button>
                </div>

                <div className="dd-card">
                    <h3>Stay Updated, Always</h3>
                    <p>Never miss an important update.</p>
                    <ul className="dd-list">
                        <li><i className="fas fa-check-circle"></i> Official notifications</li>
                        <li><i className="fas fa-check-circle"></i> Vacancies & exam dates</li>
                        <li><i className="fas fa-check-circle"></i> Admit card & result updates</li>
                        <li><i className="fas fa-check-circle"></i> Important notices</li>
                        <li><i className="fas fa-check-circle"></i> Expert guidance & analysis</li>
                    </ul>
                    <div className="bell-icon-large">
                        <i className="fas fa-bell"></i>
                        <span>Notify Me</span>
                    </div>
                    <button className="btn-primary w-full" style={{position: 'relative', zIndex: 3, marginTop: '20px'}}>Get Exam Updates <i className="fas fa-arrow-right"></i></button>
                </div>
                
                <div className="dd-card">
                    <h3>Parent Support</h3>
                    <p>Because your child's future matters.</p>
                    <ul className="dd-list">
                        <li><i className="fas fa-check-circle"></i> Track progress & study activity</li>
                        <li><i className="fas fa-check-circle"></i> Detailed performance reports</li>
                        <li><i className="fas fa-check-circle"></i> Know strengths & weaknesses</li>
                        <li><i className="fas fa-check-circle"></i> Stay updated on preparation</li>
                        <li><i className="fas fa-check-circle"></i> Give the right guidance</li>
                    </ul>
                    <div className="dd-image" style={{bottom: '-10px', right: '-10px'}}>
                         {/* Placeholder for parent image */}
                        <div style={{background: '#cbd5e1', width: '200px', height: '150px', borderRadius: '12px', display: 'inline-block'}}></div>
                    </div>
                    <button className="btn-primary w-full" style={{position: 'relative', zIndex: 3, marginTop: '20px'}}>Learn About Parent Dashboard <i className="fas fa-arrow-right"></i></button>
                </div>

                <div className="dd-card">
                    <h3>Affordable & Flexible Plans</h3>
                    <p>High-quality preparation at the best price.</p>
                    <ul className="dd-list">
                        <li><i className="fas fa-check-circle"></i> Free plan to get started</li>
                        <li><i className="fas fa-check-circle"></i> Affordable premium plans</li>
                        <li><i className="fas fa-check-circle"></i> Access on all devices</li>
                        <li><i className="fas fa-check-circle"></i> No hidden charges</li>
                        <li><i className="fas fa-check-circle"></i> Buy with confidence</li>
                    </ul>
                    <div className="price-tag-img">
                        <i className="fas fa-rupee-sign"></i>
                    </div>
                    <button className="btn-primary w-full" style={{position: 'relative', zIndex: 3, marginTop: '20px'}}>View Pricing Plans <i className="fas fa-arrow-right"></i></button>
                </div>

                <div className="dd-card">
                    <h3>Mobile App</h3>
                    <p>Study anytime, anywhere.</p>
                    <ul className="dd-list">
                        <li><i className="fas fa-check-circle"></i> Full mock tests</li>
                        <li><i className="fas fa-check-circle"></i> AI doubt solver (image/voice)</li>
                        <li><i className="fas fa-check-circle"></i> Current affairs updates</li>
                        <li><i className="fas fa-check-circle"></i> Track your progress</li>
                        <li><i className="fas fa-check-circle"></i> Available on Android & iOS</li>
                    </ul>
                    <div className="dd-image" style={{right: '10px', width: '40%'}}>
                         {/* Placeholder for mobile app mockup */}
                        <div style={{background: '#cbd5e1', width: '120px', height: '220px', borderRadius: '16px', display: 'inline-block', border: '4px solid #334155'}}></div>
                    </div>
                    
                    <div style={{display: 'flex', gap: '8px', marginTop: '20px', position: 'relative', zIndex: 3}}>
                        <button className="btn-primary w-full" style={{background: 'black'}}><i className="fab fa-google-play"></i> Google Play</button>
                        <button className="btn-primary w-full" style={{background: 'black'}}><i className="fab fa-apple"></i> App Store</button>
                    </div>
                </div>

            </div>
        </div>
    </section>
  );
};

export default DeepDiveGrid;
