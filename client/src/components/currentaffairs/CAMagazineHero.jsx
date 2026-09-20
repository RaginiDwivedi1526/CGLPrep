import React from 'react';
import { Link } from 'react-router-dom';

const CAMagazineHero = ({ activeTab, setActiveTab }) => {
  return (
    <>
      <div className="ca-hero-wrapper">
        <section className="ca-hero">
          <div className="container ca-hero-inner">
            <div className="ca-hero-content">
              <div className="ca-breadcrumb">
                <Link to="/">Home</Link>
                <i className="fas fa-chevron-right"></i>
                <Link to="/current-affairs">Current Affairs</Link>
                <i className="fas fa-chevron-right"></i>
                <span>Monthly Magazine</span>
              </div>

              <div className="ca-hero-tagline" style={{ color: '#2563eb' }}>
                <span className="ca-ht-part">MONTHLY MAGAZINE</span>
              </div>

              <h1 className="ca-hero-title">
                Monthly <span className="text-blue">Current Affairs Magazine</span>
              </h1>
              
              <p className="ca-hero-desc">
                Your complete monthly dose of exam-relevant current affairs.<br/>Curated, concise and exam-focused — with analysis, infographics, MCQs and more.
              </p>

              <div className="ca-hero-badges-row">
                <span className="ca-hero-tag"><div className="ca-ht-icon red"><i className="fas fa-bullseye"></i></div> Exam Focused</span>
                <span className="ca-hero-tag"><div className="ca-ht-icon green"><i className="fas fa-check-circle"></i></div> Concise & Accurate</span>
                <span className="ca-hero-tag"><div className="ca-ht-icon purple"><i className="fas fa-book-open"></i></div> Easy to Revise</span>
                <span className="ca-hero-tag"><div className="ca-ht-icon orange"><i className="fas fa-chart-pie"></i></div> Infographics & Charts</span>
                <span className="ca-hero-tag"><div className="ca-ht-icon red-light"><i className="fas fa-file-pdf"></i></div> Download & Read Offline</span>
              </div>
            </div>

            <div className="ca-hero-image-side">
              <div className="ca-hero-img-container">
                <img src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=800&q=80" alt="Monthly Magazine Cover" className="ca-hero-img" style={{ transform: 'rotate(5deg) scale(1.1)', filter: 'drop-shadow(0 30px 40px rgba(0,0,0,0.15))' }} />

                {/* Post-it Notes */}
                <div className="ca-post-it left-post-it" style={{ top: '20px', left: '-20px', transform: 'rotate(-8deg)', background: '#eff6ff' }}>
                  <span className="cpi-text" style={{ fontSize: '22px' }}>"Knowledge</span>
                  <span className="cpi-text" style={{ fontSize: '22px' }}>Today</span>
                  <span className="cpi-text hl-blue" style={{ fontSize: '24px' }}>Success</span>
                  <span className="cpi-text hl-blue" style={{ fontSize: '24px' }}>Tomorrow!"</span>
                </div>

                <div className="ca-post-it right-post-it" style={{ bottom: '40px', right: '-40px', transform: 'rotate(10deg)', background: '#fef9c3' }}>
                  <span className="cpi-text">Read</span>
                  <span className="cpi-text">Analyse</span>
                  <span className="cpi-text">Revise</span>
                  <span className="cpi-text">Remember</span>
                  <span className="cpi-text hl-red" style={{ fontSize: '22px' }}>Crack CGL!</span>
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

export default CAMagazineHero;
