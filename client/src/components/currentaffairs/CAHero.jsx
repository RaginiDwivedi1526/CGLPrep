import React from 'react';
import { Link } from 'react-router-dom';

const CAHero = ({ activeTab, setActiveTab }) => {
  return (
    <>
      <div className="ca-hero-wrapper">
        <section className="ca-hero">
          <div className="container ca-hero-inner">
            <div className="ca-hero-content">
              <div className="ca-breadcrumb">
                <Link to="/">Home</Link>
                <i className="fas fa-chevron-right"></i>
                <span>Current Affairs</span>
              </div>

              <div className="ca-hero-tagline">
                <span className="ca-ht-part">STAY UPDATED</span> <span className="ca-ht-dot">•</span> <span className="ca-ht-part">STAY AHEAD</span>
              </div>

              <h1 className="ca-hero-title">
                Current Affairs for a <span className="text-blue">Brighter Tomorrow</span>
              </h1>
              
              <p className="ca-hero-desc">
                Comprehensive, exam-focused and exam-relevant current affairs crafted for SSC CGL. Daily updates, smart analysis, quizzes and PDFs – all in one place.
              </p>

              <div className="ca-hero-badges-row">
                <span className="ca-hero-tag"><div className="ca-ht-icon blue"><i className="far fa-calendar-alt"></i></div> Daily Updates</span>
                <span className="ca-hero-tag"><div className="ca-ht-icon red"><i className="fas fa-bullseye"></i></div> Exam Focused</span>
                <span className="ca-hero-tag"><div className="ca-ht-icon green"><i className="fas fa-chart-line"></i></div> Smart Analysis</span>
                <span className="ca-hero-tag"><div className="ca-ht-icon purple"><i className="fas fa-bolt"></i></div> Quick Revision</span>
                <span className="ca-hero-tag"><div className="ca-ht-icon orange"><i className="fas fa-file-pdf"></i></div> PDF Downloads</span>
              </div>
            </div>

            <div className="ca-hero-image-side">
              <div className="ca-hero-img-container">
                <img src="/images/currentaffairs/parliament-hero.png" alt="Indian Parliament" className="ca-hero-img" />
                
                {/* Floating Words */}
                <span className="ca-float-word fw-1">NATIONAL</span>
                <span className="ca-float-word fw-2">INTERNATIONAL</span>
                <span className="ca-float-word fw-3">AWARDS</span>
                <span className="ca-float-word fw-4">ECONOMY</span>
                <span className="ca-float-word fw-5">APPOINTMENTS</span>
                <span className="ca-float-word fw-6">SCHEMES</span>
                <span className="ca-float-word fw-7">DEFENCE</span>
                <span className="ca-float-word fw-8">SPORTS</span>
                <span className="ca-float-word fw-9">SCIENCE & TECH</span>

                {/* Post-it Notes */}
                <div className="ca-post-it left-post-it">
                  <span className="cpi-text">Small</span>
                  <span className="cpi-text">Updates</span>
                  <span className="cpi-text hl-blue" style={{ fontSize: '24px' }}>Big</span>
                  <span className="cpi-text hl-blue">Opportunities!</span>
                </div>

                <div className="ca-post-it right-post-it">
                  <span className="cpi-text">Awareness</span>
                  <span className="cpi-text">today,</span>
                  <span className="cpi-text hl-red">Advantage</span>
                  <span className="cpi-text hl-red">tomorrow!</span>
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

export default CAHero;
