import React, { useState } from 'react';

const Predictor = () => {
  const [predicting, setPredicting] = useState(false);
  const [predicted, setPredicted] = useState(false);

  const handlePredict = () => {
    setPredicting(true);
    setTimeout(() => {
        setPredicting(false);
        setPredicted(true);
        setTimeout(() => setPredicted(false), 2000);
    }, 1500);
  };

  return (
    <section className="predictor-section">
        <div className="container">
            <div className="predictor-grid">
                <div className="predictor-card">
                    <h3>AI Post Predictor</h3>
                    <p>Your plan changes as you improve & preferences.</p>
                    <div className="predictor-form">
                        <div className="form-row">
                            <div className="form-group">
                                <label>Expected Test Score</label>
                                <input type="text" defaultValue="180" className="form-input" id="predScore" />
                            </div>
                            <div className="form-group">
                                <label>Category</label>
                                <select className="form-input" id="predCategory" defaultValue="General">
                                    <option>General</option>
                                    <option>OBC</option>
                                    <option>SC</option>
                                    <option>ST</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-group">
                            <label>Preferred Location</label>
                            <input type="text" defaultValue="Delhi / NCR" className="form-input" id="predLocation" />
                        </div>
                        <button 
                            className="btn-primary btn-sm w-full" 
                            id="predictBtn"
                            onClick={handlePredict}
                            disabled={predicting}
                            style={predicted ? {background: '#10b981'} : {}}
                        >
                            {predicting ? <><i className="fas fa-spinner fa-spin"></i> Predicting...</> : 
                             predicted ? <><i className="fas fa-check"></i> Prediction Updated!</> : 
                             <><i className="fas fa-magic"></i> Predict My Posts →</>}
                        </button>
                    </div>
                    <div className="predictor-results">
                        <h4>Your Possible Posts</h4>
                        <div className="post-result">
                            <span className="post-tag green">Probability</span>
                            <span className="post-name"><i className="fas fa-check-circle green"></i> Tax Assistant</span>
                            <span className="post-pct">High</span>
                        </div>
                        <div className="post-result">
                            <span className="post-tag yellow">Probability</span>
                            <span className="post-name"><i className="fas fa-minus-circle yellow"></i> Auditor (CAG)</span>
                            <span className="post-pct">Medium</span>
                        </div>
                        <div className="post-result">
                            <span className="post-tag blue">Probability</span>
                            <span className="post-name"><i className="fas fa-minus-circle blue"></i> Inspector (CBI)</span>
                            <span className="post-pct">Low</span>
                        </div>
                        <div className="post-result">
                            <span className="post-tag orange">Probability</span>
                            <span className="post-name"><i className="fas fa-times-circle orange"></i> Sub-Inspector (Enforcement)</span>
                            <span className="post-pct">Low</span>
                        </div>
                    </div>
                </div>
                <div className="pref-card">
                    <h3>Post Preference Optimizer</h3>
                    <p>Already know your target posts?<br/>Optimize your post preference order based on previous cut-offs, vacancies and your profile.</p>
                    <div className="pref-items">
                        <div className="pref-item">
                            <span className="pref-num">1st</span>
                            <span>Tax Assistant</span>
                        </div>
                        <div className="pref-item">
                            <span className="pref-num">2nd</span>
                            <span>Auditor (C&AG)</span>
                        </div>
                        <div className="pref-item">
                            <span className="pref-num">3rd</span>
                            <span>Upper Division Clerk</span>
                        </div>
                        <div className="pref-item">
                            <span className="pref-num">4th</span>
                            <span>Inspector (Postal Dept.)</span>
                        </div>
                        <div className="pref-item">
                            <span className="pref-num">5th</span>
                            <span>Statistical Investigator</span>
                        </div>
                    </div>
                    <button className="btn-outline btn-sm w-full">Optimize My Preferences →</button>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Predictor;
