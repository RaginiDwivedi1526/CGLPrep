import React from 'react';

const Mastery = () => {
  return (
    <section className="mastery-section">
        <div className="container">
            <div className="mastery-grid">
                <div className="mastery-card">
                    <h3>Topic Mastery & Mistake Book</h3>
                    <div className="mastery-content">
                        <div className="mastery-bars">
                            <h4>Percentage</h4>
                            <div className="progress-item">
                                <span>Quantitative Aptitude</span>
                                <div className="progress-bar"><div className="progress-fill blue" style={{width: '78%'}}></div></div>
                                <span>78%</span>
                            </div>
                            <div className="progress-item">
                                <span>Reasoning</span>
                                <div className="progress-bar"><div className="progress-fill green" style={{width: '72%'}}></div></div>
                                <span>72%</span>
                            </div>
                            <div className="progress-item">
                                <span>English</span>
                                <div className="progress-bar"><div className="progress-fill orange" style={{width: '65%'}}></div></div>
                                <span>65%</span>
                            </div>
                            <div className="progress-item">
                                <span>General Awareness</span>
                                <div className="progress-bar"><div className="progress-fill red" style={{width: '55%'}}></div></div>
                                <span>55%</span>
                            </div>
                        </div>
                        <div className="mistake-book">
                            <h4>Your Mistake Book</h4>
                            <div className="mistake-list">
                                <div className="mistake-item">
                                    <span className="m-num">15</span>
                                    <span>Quantitative</span>
                                </div>
                                <div className="mistake-item">
                                    <span className="m-num">12</span>
                                    <span>Reasoning</span>
                                </div>
                                <div className="mistake-item">
                                    <span className="m-num">8</span>
                                    <span>English</span>
                                </div>
                                <div className="mistake-item">
                                    <span className="m-num">14</span>
                                    <span>GK</span>
                                </div>
                            </div>
                            <button className="btn-outline btn-sm">Review Mistakes →</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Mastery;
