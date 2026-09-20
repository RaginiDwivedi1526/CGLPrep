import React from 'react';
import { Link } from 'react-router-dom';

const FeaturesHero = () => {
  return (
    <section className="feat-hero">
        <div className="container feat-hero-inner">
            <div className="feat-hero-content">
                <div className="feat-hero-breadcrumb">
                    <Link to="/">Home</Link> <i className="fas fa-chevron-right"></i>
                    <span>Features</span>
                    <span className="highlight"><i className="fas fa-home"></i> ALL THE TOOLS YOU NEED, IN ONE PLACE</span>
                </div>
                
                <h1 className="feat-hero-title">Powerful Features Built for Your <span>CGL Success</span></h1>
                <p className="feat-hero-desc">From smart study plans to post prediction – every feature is designed specifically for SSC CGL aspirants. Study smarter, stay consistent, and achieve your dream government job with CGLPrep AI.</p>
                
                <div className="feat-badges-row">
                    <div className="feat-badge-item pink">
                        <i className="fas fa-robot"></i>
                        <span>AI-Powered</span>
                    </div>
                    <div className="feat-badge-item blue">
                        <i className="fas fa-shield-alt"></i>
                        <span>CGL Focused</span>
                    </div>
                    <div className="feat-badge-item purple">
                        <i className="fas fa-sync-alt"></i>
                        <span>Updated Content</span>
                    </div>
                    <div className="feat-badge-item green">
                        <i className="fas fa-user-friends"></i>
                        <span>Student & Parent Friendly</span>
                    </div>
                </div>
            </div>
            
            <div className="feat-hero-image">
                <div className="feat-img-wrapper">
                    <div style={{
                        background: 'transparent',
                        position: 'relative'
                    }}>
                        {/* Placeholder for the student image */}
                        <div style={{width: '400px', height: '400px', background: '#cbd5e1', borderRadius: '20px'}}></div>
                        
                        <div className="feat-quote-overlay">
                            Right Tools<br/>Right Guidance<br/>Right Job!
                        </div>
                        <div className="feat-badge-overlay" style={{bottom: '40px', left: '-80px'}}>
                            SAME<br/>ASPIRANTS<br/>BIGGER DREAMS<br/>LET'S CRACK CGL!
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default FeaturesHero;
