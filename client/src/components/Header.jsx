import React, { useState, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const { user, logout } = useContext(AuthContext);

  return (
    <header className="header" id="header">
        <div className="container header-inner">
            <Link to="/" className="logo">
                <span className="logo-icon"><i className="fas fa-graduation-cap"></i></span>
                <span className="logo-text"><strong>CGLPrep</strong> AI</span>
                {location.pathname === '/cgl-2026' && <span className="logo-tagline">Plan • Practice • Crack CGL</span>}
            </Link>
            <nav className={`main-nav ${mobileOpen ? 'mobile-open' : ''}`} id="mainNav">
                <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>Home</Link>
                <Link to="/cgl-2026" className={`nav-link ${location.pathname === '/cgl-2026' ? 'active' : ''}`}>CGL 2026</Link>
                <Link to="/features" className={`nav-link ${location.pathname === '/features' ? 'active' : ''}`}>Features</Link>
                {user && (
                  <>
                    <Link to="/dashboard" className={`nav-link ${location.pathname === '/dashboard' ? 'active' : ''}`}>Dashboard</Link>
                    <Link to="/pricing" className={`nav-link ${location.pathname === '/pricing' ? 'active' : ''}`}>Pricing</Link>
                    {location.pathname === '/' && <a href="#success" className="nav-link">Success Stories</a>}
                    <div className="nav-link dropdown-link">More <i className="fas fa-chevron-down"></i></div>
                  </>
                )}
            </nav>
            <div className="header-actions">
                {location.pathname === '/cgl-2026' && <button className="btn-icon"><i className="fas fa-search"></i></button>}
                {user ? (
                  <>
                    <button onClick={logout} className="btn-login" style={{border: 'none', background: 'none', cursor: 'pointer', fontSize: '1rem', fontWeight: 600}}>Logout</button>
                    <Link to="/dashboard" className="btn-primary btn-sm" style={{textDecoration: 'none'}}>Dashboard</Link>
                  </>
                ) : (
                  <>
                    <Link to="/login" className="btn-login" style={{textDecoration: 'none'}}>Login</Link>
                    <Link to="/signup" className="btn-primary btn-sm" style={{textDecoration: 'none'}}>Get Started</Link>
                  </>
                )}
            </div>
            <button className={`hamburger ${mobileOpen ? 'active' : ''}`} id="hamburger" onClick={() => setMobileOpen(!mobileOpen)}>
                <span></span><span></span><span></span>
            </button>
        </div>
    </header>
  );
};

export default Header;
