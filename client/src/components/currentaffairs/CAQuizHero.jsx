import React from 'react';
import { Link } from 'react-router-dom';

const CAQuizHero = ({ activeTab, setActiveTab }) => {
  return (
    <>
      <div className="ca-hero-wrapper" style={{ background: 'linear-gradient(135deg, #eff6ff 0%, #e0e7ff 100%)' }}>
        <section className="ca-hero">
          <div className="container ca-hero-inner">
            <div className="ca-hero-content">
              <div className="ca-breadcrumb">
                <Link to="/">Home</Link>
                <i className="fas fa-chevron-right"></i>
                <Link to="/current-affairs">Current Affairs</Link>
                <i className="fas fa-chevron-right"></i>
                <span>MCQs & Quizzes</span>
              </div>

              <div className="ca-hero-tagline" style={{ color: '#4f46e5' }}>
                <span className="ca-ht-part">MCQS & QUIZZES</span>
              </div>

              <h1 className="ca-hero-title">
                Test Your <span className="text-blue">Current Affairs</span> Knowledge
              </h1>
              
              <p className="ca-hero-desc">
                Practice exam-relevant current affairs through MCQs, quizzes and challenge yourself daily. Learn, attempt, analyze and improve — one question at a time!
              </p>

              <div className="ca-hero-badges-row">
                <span className="ca-hero-tag"><div className="ca-ht-icon red"><i className="fas fa-bullseye"></i></div> Exam Relevant</span>
                <span className="ca-hero-tag"><div className="ca-ht-icon blue"><i className="far fa-calendar-check"></i></div> Daily Updated</span>
                <span className="ca-hero-tag"><div className="ca-ht-icon purple"><i className="fas fa-book-open"></i></div> Detailed Explanations</span>
                <span className="ca-hero-tag"><div className="ca-ht-icon green"><i className="fas fa-chart-bar"></i></div> Performance Analytics</span>
                <span className="ca-hero-tag"><div className="ca-ht-icon orange"><i className="fas fa-trophy"></i></div> Streak & Rewards</span>
              </div>
            </div>

            <div className="ca-hero-image-side">
              <div className="ca-hero-img-container">
                <img src="/images/currentaffairs/caquiz-hero.png" alt="Quiz Hero" className="ca-hero-img" style={{ transform: 'scale(1.1)', filter: 'drop-shadow(0 20px 30px rgba(0,0,0,0.1))' }} />

                {/* Post-it Notes */}
                <div className="ca-post-it left-post-it" style={{ top: '-10px', left: '10%', transform: 'rotate(-6deg)', background: '#eff6ff', padding: '16px' }}>
                  <span className="cpi-text" style={{ fontSize: '20px' }}>"Small</span>
                  <span className="cpi-text" style={{ fontSize: '20px' }}>Questions</span>
                  <span className="cpi-text hl-blue" style={{ fontSize: '24px' }}>Big</span>
                  <span className="cpi-text hl-blue" style={{ fontSize: '24px' }}>Progress!"</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Sub Navigation Bar */}
      <div className="ca-subnav-wrapper">
        <div className="container">
          <ul className="ca-subnav">
            <li><button className={`ca-subnav-btn ${activeTab === 'today' ? 'active' : ''}`} onClick={() => setActiveTab('today')}><i className="far fa-calendar-check"></i> Today's Update</button></li>
            <li><button className={`ca-subnav-btn ${activeTab === 'magazine' ? 'active' : ''}`} onClick={() => setActiveTab('magazine')}><i className="far fa-calendar-alt"></i> Monthly Magazine</button></li>
            <li><button className={`ca-subnav-btn ${activeTab === 'topic' ? 'active' : ''}`} onClick={() => setActiveTab('topic')}><i className="fas fa-layer-group"></i> Topic-wise <i className="fas fa-chevron-down" style={{ fontSize: '10px', marginLeft: '4px' }}></i></button></li>
            <li><button className={`ca-subnav-btn ${activeTab === 'quiz' ? 'active' : ''}`} onClick={() => setActiveTab('quiz')}><i className="fas fa-plus-square"></i> MCQs & Quizzes</button></li>
            <li><button className={`ca-subnav-btn ${activeTab === 'docs' ? 'active' : ''}`} onClick={() => setActiveTab('docs')}><i className="far fa-file-alt"></i> Important Documents</button></li>
            <li><button className={`ca-subnav-btn ${activeTab === 'year' ? 'active' : ''}`} onClick={() => setActiveTab('year')}><i className="far fa-calendar"></i> Year-wise <i className="fas fa-chevron-down" style={{ fontSize: '10px', marginLeft: '4px' }}></i></button></li>
            <li><button className="ca-subnav-btn"><i className="fas fa-link"></i> News Analysis</button></li>
            <li><button className="ca-subnav-btn"><i className="far fa-bookmark"></i> Bookmarks</button></li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default CAQuizHero;
