import React from 'react';
import { Link } from 'react-router-dom';

const CATopicHero = ({ activeTab, setActiveTab }) => {
  return (
    <>
      <div className="ca-hero-wrapper" style={{ background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)' }}>
        <section className="ca-hero">
          <div className="container ca-hero-inner">
            <div className="ca-hero-content">
              <div className="ca-breadcrumb">
                <Link to="/">Home</Link>
                <i className="fas fa-chevron-right"></i>
                <Link to="/current-affairs">Current Affairs</Link>
                <i className="fas fa-chevron-right"></i>
                <span>Topic-wise</span>
              </div>

              <div className="ca-hero-tagline" style={{ color: '#2563eb' }}>
                <span className="ca-ht-part">TOPIC-WISE CURRENT AFFAIRS</span>
              </div>

              <h1 className="ca-hero-title">
                Explore <span className="text-blue">Current Affairs</span> by Topics
              </h1>
              
              <p className="ca-hero-desc">
                Study exam-relevant current affairs topic by topic with latest updates, detailed notes, practice questions, quizzes and PDFs.
              </p>

              <div className="ca-hero-badges-row">
                <span className="ca-hero-tag"><div className="ca-ht-icon red"><i className="fas fa-bullseye"></i></div> Exam Focused</span>
                <span className="ca-hero-tag"><div className="ca-ht-icon green"><i className="fas fa-book"></i></div> Topic-wise Notes</span>
                <span className="ca-hero-tag"><div className="ca-ht-icon purple"><i className="fas fa-tasks"></i></div> Practice Questions</span>
                <span className="ca-hero-tag"><div className="ca-ht-icon orange"><i className="fas fa-layer-group"></i></div> PYQ Mapping</span>
                <span className="ca-hero-tag"><div className="ca-ht-icon red-light"><i className="fas fa-file-pdf"></i></div> PDF Download</span>
                <span className="ca-hero-tag"><div className="ca-ht-icon blue"><i className="fas fa-check-square"></i></div> MCQs & Quizzes</span>
              </div>
            </div>

            <div className="ca-hero-image-side">
              <div className="ca-hero-img-container">
                <img src="/images/currentaffairs/catopic-hero.png" alt="Topic-wise Study" className="ca-hero-img" style={{ filter: 'drop-shadow(0 20px 30px rgba(0,0,0,0.1))' }} />

                {/* Post-it Notes */}
                <div className="ca-post-it left-post-it" style={{ top: '0px', left: '-10px', transform: 'rotate(-5deg)', background: '#eff6ff', padding: '12px' }}>
                  <span className="cpi-text" style={{ fontSize: '18px' }}>"Current</span>
                  <span className="cpi-text" style={{ fontSize: '18px' }}>Affairs Today</span>
                  <span className="cpi-text hl-blue" style={{ fontSize: '20px' }}>A Stronger</span>
                  <span className="cpi-text hl-blue" style={{ fontSize: '20px' }}>Tomorrow!"</span>
                </div>

                <div className="ca-post-it right-post-it" style={{ top: '-10px', right: '-20px', transform: 'rotate(8deg)', background: '#fef9c3', padding: '16px' }}>
                  <span className="cpi-text" style={{ fontSize: '20px' }}>"Same</span>
                  <span className="cpi-text" style={{ fontSize: '20px' }}>News</span>
                  <span className="cpi-text hl-red" style={{ fontSize: '24px' }}>Better</span>
                  <span className="cpi-text hl-red" style={{ fontSize: '24px' }}>Preparation!"</span>
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

export default CATopicHero;
