import React from 'react';
import { useNavigate } from 'react-router-dom';

const ActionableInsights = () => {
  const navigate = useNavigate();
  return (
    <section className="feat-actionable-sec">
        <div className="container">
            <div className="feat-grid-3">
                
                <div className="insight-card">
                    <div className="insight-header">
                        <h3>CGL Readiness Score</h3>
                        <p>Know where you stand. Get your personalized readiness score and improvement plan.</p>
                    </div>
                    <div className="insight-content">
                        <div className="readiness-display">
                            <div className="readiness-circle">
                                <strong>72%</strong>
                                <span>CGL Ready</span>
                            </div>
                            <ul className="readiness-list">
                                <li><i className="fas fa-check-circle"></i> Concept Mastery <div className="r-bar"><div className="r-fill" style={{width: '81%'}}></div></div> 81%</li>
                                <li><i className="fas fa-check-circle"></i> Practice <div className="r-bar"><div className="r-fill" style={{width: '74%'}}></div></div> 74%</li>
                                <li><i className="fas fa-check-circle"></i> Accuracy <div className="r-bar"><div className="r-fill" style={{width: '87%'}}></div></div> 87%</li>
                                <li><i className="fas fa-check-circle"></i> Speed <div className="r-bar"><div className="r-fill" style={{width: '66%'}}></div></div> 66%</li>
                                <li><i className="fas fa-check-circle"></i> PYQ Performance <div className="r-bar"><div className="r-fill" style={{width: '79%'}}></div></div> 79%</li>
                                <li><i className="fas fa-check-circle"></i> Mock Performance <div className="r-bar"><div className="r-fill" style={{width: '72%'}}></div></div> 72%</li>
                                <li><i className="fas fa-check-circle"></i> Revision <div className="r-bar"><div className="r-fill" style={{width: '61%'}}></div></div> 61%</li>
                            </ul>
                        </div>
                    </div>
                    <button className="btn-primary w-full" onClick={() => navigate('/signup')}>Check My Readiness <i className="fas fa-arrow-right"></i></button>
                </div>

                <div className="insight-card">
                    <div className="insight-header">
                        <h3>What Is Stopping You?</h3>
                        <p>Find your exact gap and get AI suggestions to improve.</p>
                    </div>
                    <div className="insight-content">
                        <div className="gap-scores">
                            <div className="g-score">
                                <span>Current Avg. Score</span>
                                <strong>154</strong>
                            </div>
                            <i className="fas fa-arrow-right" style={{color: '#cbd5e1'}}></i>
                            <div className="g-score">
                                <span>Target Score</span>
                                <strong>172</strong>
                            </div>
                            <i className="fas fa-arrow-right" style={{color: '#cbd5e1'}}></i>
                            <div className="g-score red">
                                <span>Your Gap</span>
                                <strong>18 <small style={{fontSize: '10px', display: 'block'}}>Marks</small></strong>
                            </div>
                        </div>
                        <div className="gap-areas">
                            <h5>Key Areas to Improve</h5>
                            <ul>
                                <li><span><i className="fas fa-exclamation"></i> Maths Accuracy</span> <span className="red">-7 marks</span></li>
                                <li><span><i className="fas fa-exclamation"></i> General Awareness</span> <span className="red">-5 marks</span></li>
                                <li><span><i className="fas fa-exclamation"></i> English Speed</span> <span className="red">-3 marks</span></li>
                                <li><span><i className="fas fa-exclamation"></i> Reasoning (Mixed)</span> <span className="red">-3 marks</span></li>
                            </ul>
                        </div>
                    </div>
                    <button className="btn-primary w-full" onClick={() => navigate('/signup')}>Fix My Gap with AI <i className="fas fa-arrow-right"></i></button>
                </div>

                <div className="insight-card">
                    <div className="insight-header">
                        <h3>Complete CGL Journey</h3>
                        <p>From learning to selection – we guide you at every step.</p>
                    </div>
                    <div className="insight-content" style={{position: 'relative'}}>
                        <ul className="journey-list">
                            <li><i className="fas fa-book blue"></i> Learn Concepts</li>
                            <li><i className="fas fa-pen green"></i> Practice Topic-wise</li>
                            <li><i className="fas fa-history orange"></i> Solve PYQs</li>
                            <li><i className="fas fa-laptop red"></i> Take Mock Tests</li>
                            <li><i className="fas fa-chart-line purple"></i> Analyze Performance</li>
                            <li><i className="fas fa-wrench blue"></i> Fix Weaknesses</li>
                            <li><i className="fas fa-bullseye green"></i> Predict Posts</li>
                            <li><i className="fas fa-sort orange"></i> Optimize Preferences</li>
                            <li><i className="fas fa-trophy yellow"></i> Crack SSC CGL</li>
                        </ul>
                        <div className="journey-illustration">
                            <i className="fas fa-trophy"></i>
                            Plan<br/>Practice<br/>Progress<br/>Selection!
                        </div>
                    </div>
                    <button className="btn-primary w-full" onClick={() => navigate('/signup')}>Start Your Journey Today <i className="fas fa-arrow-right"></i></button>
                </div>
            </div>
        </div>
    </section>
  );
};

export default ActionableInsights;
