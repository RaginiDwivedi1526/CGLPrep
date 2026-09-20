import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const location = useLocation();

  const handleSubscribe = () => {
    if (email.includes('@')) {
        setSubscribed(true);
        setEmail('');
        setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className="footer">
        <div className="container">
            <div className="footer-grid">
                <div className="footer-brand">
                    <Link to="/" className="logo">
                        <span className="logo-icon"><i className="fas fa-graduation-cap"></i></span>
                        <span className="logo-text"><strong>CGLPrep</strong> AI</span>
                    </Link>
                    {location.pathname === '/cgl-2026' ? (
                        <p className="footer-tagline">Plan • Practice • Crack CGL</p>
                    ) : null}
                    <p>{location.pathname === '/cgl-2026' ? "India's most focused AI-powered platform for SSC CGL. Helping aspirants achieve their government job dreams." : "India's most trusted AI-powered platform for SSC CGL. Making aspirants exam-ready with AI and data-driven preparation."}</p>
                    <div className="social-links">
                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                        <a href="#"><i className="fab fa-x-twitter"></i></a>
                        <a href="#"><i className="fab fa-youtube"></i></a>
                        {location.pathname === '/cgl-2026' && <a href="#"><i className="fab fa-whatsapp"></i></a>}
                    </div>
                </div>
                <div className="footer-col">
                    <h4>Quick Links</h4>
                    <Link to="/">Home</Link>
                    <Link to="/cgl-2026">CGL 2026</Link>
                    <Link to="/features">Features</Link>
                    {location.pathname === '/' ? <a href="#">Success Stories</a> : null}
                    {location.pathname === '/cgl-2026' ? (
                      <>
                        <a href="#">Mock Tests</a>
                        <a href="#">Current Affairs</a>
                        <Link to="/post-predictor">Post Predictor</Link>
                        <a href="#">Pricing</a>
                      </>
                    ) : null}
                </div>
                <div className="footer-col">
                    <h4>Study</h4>
                    {location.pathname === '/cgl-2026' && <a href="#">Syllabus</a>}
                    <a href="#">Previous Year Papers</a>
                    <a href="#">Notes & Revision</a>
                    {location.pathname === '/cgl-2026' && <a href="#">Exam Pattern</a>}
                    <a href="#">Preparation Tips</a>
                    {location.pathname === '/cgl-2026' && <a href="#">Success Stories</a>}
                </div>
                {location.pathname === '/' ? (
                    <div className="footer-col">
                        <h4>Tests</h4>
                        <a href="#">Mock Tests</a>
                        <a href="#">Past Predictors</a>
                        <a href="#">Mistake Book</a>
                    </div>
                ) : null}
                <div className="footer-col">
                    <h4>Support</h4>
                    {location.pathname === '/cgl-2026' && <a href="#">Help Center</a>}
                    <a href="#">Contact Us</a>
                    {location.pathname === '/cgl-2026' && <a href="#">FAQ</a>}
                    <a href="#">Terms & Conditions</a>
                    <a href="#">Privacy Policy</a>
                    {location.pathname === '/' ? <a href="#">About Us</a> : <a href="#">Refund Policy</a>}
                </div>
                
                {location.pathname === '/' ? (
                    <div className="footer-col">
                        <h4>Subscribe to Updates</h4>
                        <p>Get updates, tips, and resources directly in your inbox.</p>
                        <div className="subscribe-form">
                            <input 
                                type="email" 
                                placeholder="Enter your email" 
                                className="form-input" 
                                id="subEmail"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <button 
                                className="btn-primary btn-sm" 
                                id="subscribeBtn"
                                onClick={handleSubscribe}
                                style={subscribed ? {background: '#10b981'} : {}}
                            >
                                {subscribed ? 'Subscribed ✓' : 'Subscribe'}
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className="footer-col">
                        <h4>Download Our App</h4>
                        <p>Study anywhere, anytime.</p>
                        <div className="app-store-btns">
                            <button className="app-badge-sm"><i className="fab fa-google-play"></i> Google Play</button>
                            <button className="app-badge-sm"><i className="fab fa-apple"></i> App Store</button>
                        </div>
                        <div className="footer-aspirant-quote">
                            <em>Same Aspirants<br/>Bigger Dreams</em>
                        </div>
                    </div>
                )}
            </div>
            <div className="footer-bottom">
                <p>© 2026 CGLPrep AI. All rights reserved.</p>
                <p>Made with ❤️ for {location.pathname === '/' ? 'Indian' : "India's"} Aspirants</p>
            </div>
        </div>
    </footer>
  );
};

export default Footer;
