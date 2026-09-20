import React from 'react';
import { Link } from 'react-router-dom';

const CAYearHero = ({ activeTab, setActiveTab }) => {
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
                <span>Year-wise</span>
              </div>

              <div className="ca-hero-tagline" style={{ color: '#0369a1' }}>
                <span className="ca-ht-part" style={{ background: '#bae6fd' }}>YEAR-WISE CURRENT AFFAIRS</span>
              </div>

              <h1 className="ca-hero-title">
                Year-wise <span className="text-blue">Current Affairs</span>
              </h1>
              
              <p className="ca-hero-desc">
                Explore year-wise current affairs with important events, government schemes, policies, appointments, awards and more. Perfect for revision and exam preparation.
              </p>

              <div className="ca-hero-badges-row" style={{ marginTop: '24px' }}>
                <span className="ca-hero-badge"><i className="fas fa-book-open text-green"></i> Past Years Coverage</span>
                <span className="ca-hero-badge"><i className="fas fa-bullseye text-red"></i> Exam Focused</span>
                <span className="ca-hero-badge"><i className="fas fa-list-alt text-orange"></i> Topic-wise Segregation</span>
                <span className="ca-hero-badge"><i className="fas fa-cloud-download-alt text-purple"></i> PDF Download</span>
                <span className="ca-hero-badge"><i className="fas fa-chart-line text-blue"></i> Quick Revision</span>
              </div>
            </div>

            <div className="ca-hero-image-side" style={{ width: '55%', maxWidth: '600px' }}>
              <div className="ca-hero-img-container">
                <img src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80" alt="Year-wise Hero" className="ca-hero-img" style={{ transform: 'scale(1.1) translateY(10px)', filter: 'drop-shadow(0 20px 30px rgba(0,0,0,0.15))' }} />

                {/* Post-it Notes */}
                <div className="ca-post-it left-post-it" style={{ top: '10px', left: '-20px', transform: 'rotate(-5deg)', background: '#eff6ff', padding: '16px' }}>
                  <span className="cpi-text" style={{ fontSize: '18px', color: '#1e40af' }}>"Past</span>
                  <span className="cpi-text" style={{ fontSize: '18px', color: '#1e40af' }}>Events</span>
                  <span className="cpi-text hl-blue" style={{ fontSize: '20px' }}>Build</span>
                  <span className="cpi-text hl-blue" style={{ fontSize: '20px' }}>Future</span>
                  <span className="cpi-text hl-red" style={{ fontSize: '22px' }}>Success!"</span>
                </div>
                
                <div className="ca-post-it right-post-it" style={{ top: '-20px', right: '20px', transform: 'rotate(8deg)', background: '#fef9c3', padding: '16px' }}>
                  <span className="cpi-text" style={{ fontSize: '18px' }}>"Learn</span>
                  <span className="cpi-text" style={{ fontSize: '18px' }}>Revise</span>
                  <span className="cpi-text" style={{ fontSize: '18px' }}>Remember</span>
                  <span className="cpi-text hl-green" style={{ fontSize: '22px' }}>Excel!"</span>
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
            <li>
              <button className={`ca-subnav-btn ${activeTab === 'year' ? 'active ca-dropdown-active' : ''}`} onClick={() => setActiveTab('year')} style={activeTab === 'year' ? { background: '#2563eb', color: 'white', border: 'none' } : {}}>
                <i className="far fa-calendar"></i> Year-wise <i className="fas fa-chevron-down" style={{ fontSize: '10px', marginLeft: '4px' }}></i>
              </button>
            </li>
            <li><button className="ca-subnav-btn"><i className="fas fa-link"></i> News Analysis</button></li>
            <li><button className="ca-subnav-btn"><i className="far fa-bookmark"></i> Bookmarks</button></li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default CAYearHero;
