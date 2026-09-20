import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ParentFeatures from './ParentFeatures';
import WhyItMatters from './WhyItMatters';

const FeaturesGrid = () => {
  const [activeTab, setActiveTab] = useState('students');

  return (
    <section className="feat-explore-sec" id="explore">
        <div className="container">
            <div className="feat-explore-header">
                <div className="feat-explore-title">
                    <h2>Explore Our Features</h2>
                    <p>Everything you need to prepare, practice, analyze and succeed – all in one platform.</p>
                </div>
                <div className="feat-tabs">
                    <button className={activeTab === 'students' ? 'active' : ''} onClick={() => setActiveTab('students')}>For Students</button>
                    <button className={activeTab === 'parents' ? 'active' : ''} onClick={() => setActiveTab('parents')}>For Parents</button>
                    <button className={activeTab === 'why' ? 'active' : ''} onClick={() => setActiveTab('why')}>Why It Matters</button>
                </div>
            </div>
            
            {activeTab === 'students' && (
                <div className="feat-grid-12">
                    <div className="feat-card-clean">
                        <div className="feat-card-icon red"><i className="fas fa-star"></i></div>
                        <h4>AI Study Plan</h4>
                        <p>Get a personalized, adaptive study plan based on your strengths, weaknesses and target score. Your plan updates as you improve.</p>
                        <Link to="#" className="feat-card-link">Learn More <i className="fas fa-arrow-right"></i></Link>
                    </div>
                    <div className="feat-card-clean">
                        <div className="feat-card-icon blue"><i className="fas fa-th"></i></div>
                        <h4>Mock Tests</h4>
                        <p>Full-length, sectional and topic-wise mock tests with analysis and All India ranking.</p>
                        <Link to="#" className="feat-card-link">Learn More <i className="fas fa-arrow-right"></i></Link>
                    </div>
                    <div className="feat-card-clean">
                        <div className="feat-card-icon purple"><i className="fas fa-file-alt"></i></div>
                        <h4>Previous Year Papers</h4>
                        <p>Solve past 10 years' SSC CGL papers with solutions and topic-wise filters. Understand the exam pattern better.</p>
                        <Link to="#" className="feat-card-link">Learn More <i className="fas fa-arrow-right"></i></Link>
                    </div>
                    <div className="feat-card-clean">
                        <div className="feat-card-icon green"><i className="fas fa-clipboard-list"></i></div>
                        <h4>Current Affairs</h4>
                        <p>Daily updated current affairs, curated for SSC CGL, with concise notes, quizzes and revision packs.</p>
                        <Link to="#" className="feat-card-link">Learn More <i className="fas fa-arrow-right"></i></Link>
                    </div>
                    
                    <div className="feat-card-clean">
                        <div className="feat-card-icon orange"><i className="fas fa-chart-pie"></i></div>
                        <h4>Post Predictor</h4>
                        <p>Predict your possible posts based on your expected score, category and preferences. Know your dream, target and safe posts.</p>
                        <Link to="#" className="feat-card-link">Learn More <i className="fas fa-arrow-right"></i></Link>
                    </div>
                    <div className="feat-card-clean">
                        <div className="feat-card-icon purple"><i className="fas fa-sort-numeric-up"></i></div>
                        <h4>Post Preference Optimizer</h4>
                        <p>Already know your preferred posts? Let AI optimize your preference order based on vacancies, cutoffs, location and career growth.</p>
                        <Link to="#" className="feat-card-link">Learn More <i className="fas fa-arrow-right"></i></Link>
                    </div>
                    <div className="feat-card-clean">
                        <div className="feat-card-icon blue"><i className="fas fa-robot"></i></div>
                        <h4>AI Tutor</h4>
                        <p>Ask any question, anytime. Get instant, accurate and concept-based explanations with our 24x7 AI tutor.</p>
                        <Link to="#" className="feat-card-link">Learn More <i className="fas fa-arrow-right"></i></Link>
                    </div>
                    <div className="feat-card-clean">
                        <div className="feat-card-icon red"><i className="fas fa-search"></i></div>
                        <h4>AI Doubt Solver</h4>
                        <p>Solve doubts via text, image or voice. Get step-by-step solutions for any CGL question.</p>
                        <Link to="#" className="feat-card-link">Learn More <i className="fas fa-arrow-right"></i></Link>
                    </div>
                    
                    <div className="feat-card-clean">
                        <div className="feat-card-icon green"><i className="fas fa-chart-bar"></i></div>
                        <h4>Performance Analytics</h4>
                        <p>Detailed analysis of your strengths, weaknesses, accuracy, speed, error types and progress trends.</p>
                        <Link to="#" className="feat-card-link">Learn More <i className="fas fa-arrow-right"></i></Link>
                    </div>
                    <div className="feat-card-clean">
                        <div className="feat-card-icon orange"><i className="fas fa-book-open"></i></div>
                        <h4>Topic Mastery</h4>
                        <p>Track your mastery level for every topic with concept clarity, practice, accuracy and retention.</p>
                        <Link to="#" className="feat-card-link">Learn More <i className="fas fa-arrow-right"></i></Link>
                    </div>
                    <div className="feat-card-clean">
                        <div className="feat-card-icon pink"><i className="fas fa-calendar-alt"></i></div>
                        <h4>Mistake Book</h4>
                        <p>Your personal AI-powered mistake book that automatically categorizes and helps you revise your errors.</p>
                        <Link to="#" className="feat-card-link">Learn More <i className="fas fa-arrow-right"></i></Link>
                    </div>
                    <div className="feat-card-clean">
                        <div className="feat-card-icon purple"><i className="fas fa-sd-card"></i></div>
                        <h4>Notes & Revision</h4>
                        <p>Smart notes, formula sheets, mind maps and revision cards for quick and effective learning.</p>
                        <Link to="#" className="feat-card-link">Learn More <i className="fas fa-arrow-right"></i></Link>
                    </div>
                </div>
            )}
            
            {activeTab === 'parents' && (
                <ParentFeatures />
            )}

            {activeTab === 'why' && (
                <WhyItMatters />
            )}
        </div>
    </section>
  );
};

export default FeaturesGrid;
