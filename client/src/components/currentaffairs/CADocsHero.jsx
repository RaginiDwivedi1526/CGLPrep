import React from 'react';
import { Link } from 'react-router-dom';

const CADocsHero = ({ activeTab, setActiveTab }) => {
  return (
    <>
      <div className="ca-hero-wrapper" style={{ background: 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)' }}>
        <section className="ca-hero">
          <div className="container ca-hero-inner">
            <div className="ca-hero-content">
              <div className="ca-breadcrumb">
                <Link to="/">Home</Link>
                <i className="fas fa-chevron-right"></i>
                <Link to="/current-affairs">Current Affairs</Link>
                <i className="fas fa-chevron-right"></i>
                <span>Important Documents</span>
              </div>

              <div className="ca-hero-tagline" style={{ color: '#16a34a' }}>
                <span className="ca-ht-part" style={{ background: '#bbf7d0' }}>IMPORTANT DOCUMENTS</span>
              </div>

              <h1 className="ca-hero-title">
                Key Documents for a <span className="text-blue">Smarter Preparation</span>
              </h1>
              
              <p className="ca-hero-desc">
                Access important government reports, schemes, policies, committees, indices and official documents — all in one place. Curated for SSC CGL and other competitive exams.
              </p>
            </div>

            <div className="ca-hero-image-side" style={{ width: '55%', maxWidth: '600px' }}>
              <div className="ca-hero-img-container">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80" alt="Documents Hero" className="ca-hero-img" style={{ transform: 'scale(1.15) translateY(20px)', filter: 'drop-shadow(0 20px 30px rgba(0,0,0,0.15))' }} />

                {/* Post-it Notes */}
                <div className="ca-post-it left-post-it" style={{ top: '-20px', left: '0', transform: 'rotate(-5deg)', background: '#eff6ff', padding: '16px' }}>
                  <span className="cpi-text" style={{ fontSize: '20px', color: '#1e40af' }}>"Right</span>
                  <span className="cpi-text" style={{ fontSize: '20px', color: '#1e40af' }}>Documents</span>
                  <span className="cpi-text hl-blue" style={{ fontSize: '24px' }}>Right</span>
                  <span className="cpi-text hl-blue" style={{ fontSize: '24px' }}>Direction!"</span>
                </div>
                
                <div className="ca-post-it right-post-it" style={{ top: '-40px', right: '40px', transform: 'rotate(8deg)', background: '#fef9c3', padding: '16px' }}>
                  <span className="cpi-text" style={{ fontSize: '18px' }}>"Read</span>
                  <span className="cpi-text" style={{ fontSize: '18px' }}>Understand</span>
                  <span className="cpi-text" style={{ fontSize: '18px' }}>Apply</span>
                  <span className="cpi-text hl-red" style={{ fontSize: '22px' }}>Succeed!"</span>
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

export default CADocsHero;
