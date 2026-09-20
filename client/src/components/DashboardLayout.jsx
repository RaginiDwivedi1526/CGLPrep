import React, { useContext, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const DashboardLayout = ({ children }) => {
  const { user } = useContext(AuthContext);
  const location = useLocation();
  const [showParentModal, setShowParentModal] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const navItems = [
    { path: '/dashboard', icon: 'fas fa-home', label: 'Dashboard' },
    { path: '/dashboard-study-plan', icon: 'far fa-calendar-alt', label: 'My Study Plan' },
    { path: '/dashboard-practice', icon: 'fas fa-tasks', label: 'Practice Tests' },
    { path: '/dashboard-mock-tests', icon: 'far fa-file-alt', label: 'Mock Tests' },
    { path: '/dashboard-pyq', icon: 'fas fa-history', label: 'Previous Year Papers' },
    { path: '/current-affairs', icon: 'far fa-newspaper', label: 'Current Affairs' },
    { path: '/post-predictor', icon: 'fas fa-bullseye', label: 'Post Predictor' },
    { path: '/dashboard-analysis', icon: 'fas fa-chart-bar', label: 'Performance Analytics' },
    { path: '/dashboard-notes', icon: 'far fa-file-pdf', label: 'Notes & PDFs' },
    { path: '/dashboard-bookmarks', icon: 'far fa-bookmark', label: 'Bookmarks' },
    { path: '/dashboard-discuss', icon: 'far fa-comments', label: 'Discuss & Learn' },
    { path: '/dashboard-settings', icon: 'fas fa-cog', label: 'Settings' }
  ];

  return (
    <div className="dashboard-page dashboard-page-wrapper animate-fade-in">
      {/* Top Header */}
      <header className="dashboard-header">
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <button className="hamburger-menu-btn" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
            <i className="fas fa-bars"></i>
          </button>
          <i className="fas fa-graduation-cap" style={{ fontSize: '28px', color: '#1e3a8a' }}></i>
          <div>
            <h1 className="brand-title" style={{ margin: 0, fontSize: '20px', fontWeight: '800', color: '#0f172a' }}>CGLPrep AI</h1>
            <p style={{ margin: 0, fontSize: '10px', color: '#1e3a8a', fontWeight: '600' }}>Plan • Practice • Crack CGL</p>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginLeft: 'auto' }}>
          <button className="upgrade-btn" style={{ backgroundColor: '#2563eb', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '8px', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
            <i className="fas fa-crown"></i> Upgrade Plan
          </button>
          
          <div style={{ position: 'relative', cursor: 'pointer' }}>
            <i className="far fa-bell" style={{ fontSize: '20px', color: '#475569' }}></i>
            <span style={{ position: 'absolute', top: '-5px', right: '-5px', backgroundColor: '#ef4444', color: 'white', fontSize: '10px', fontWeight: 'bold', borderRadius: '50%', width: '16px', height: '16px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>3</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
            {user?.profilePicture ? (
              <img src={user.profilePicture} alt="User Avatar" style={{ width: '36px', height: '36px', borderRadius: '50%', objectFit: 'cover' }} onError={(e) => { e.target.onerror = null; e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }} />
            ) : null}
            <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: '#475569', color: 'white', display: user?.profilePicture ? 'none' : 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: '700', fontSize: '14px' }}>
              {user?.name ? user.name.charAt(0).toUpperCase() : 'U'}
            </div>
            <span style={{ fontSize: '14px', fontWeight: '600', color: '#334155' }}>{user?.name || 'User'} <i className="fas fa-chevron-down" style={{ fontSize: '10px', marginLeft: '5px' }}></i></span>
          </div>
        </div>
      </header>

      {/* Main Layout */}
      <div className="dashboard-layout-main">
        
        {/* Overlay for mobile sidebar */}
        <div className={`sidebar-overlay ${isSidebarOpen ? 'active' : ''}`} onClick={() => setIsSidebarOpen(false)}></div>

        {/* Left Sidebar */}
        <aside className={`dashboard-sidebar ${isSidebarOpen ? 'open' : ''}`}>
          <nav style={{ padding: '20px 15px', flex: 1, overflowY: 'auto' }}>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '5px' }}>
              {navItems.map((item, idx) => {
                const isActive = location.pathname === item.path;
                return (
                  <li key={idx} className="nav-item" style={isActive ? { backgroundColor: '#1d4ed8', borderRadius: '8px' } : {}}>
                    <Link to={item.path} style={{ color: isActive ? 'white' : '#cbd5e1', textDecoration: 'none', padding: '12px 15px', display: 'flex', alignItems: 'center', gap: '12px', fontWeight: isActive ? '600' : '500', fontSize: '14px' }}>
                      <i className={item.icon} style={{ width: '20px', textAlign: 'center' }}></i> {item.label}
                    </Link>
                  </li>
                );
              })}
              <li>
                <a href="#" onClick={(e) => { e.preventDefault(); setShowParentModal(true); }} style={{ color: '#cbd5e1', textDecoration: 'none', padding: '12px 15px', display: 'flex', alignItems: 'center', gap: '12px', fontWeight: '500', fontSize: '14px' }}>
                  <i className="fas fa-user-friends" style={{ width: '20px', textAlign: 'center' }}></i> Parent Access <span style={{ backgroundColor: '#10b981', color: 'white', fontSize: '10px', padding: '2px 6px', borderRadius: '10px', marginLeft: 'auto' }}>New</span>
                </a>
              </li>
            </ul>
          </nav>
          
          <div style={{ padding: '20px', position: 'relative' }}>
            <div style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '20px', textAlign: 'center' }}>
              <i className="fas fa-trophy" style={{ color: '#fbbf24', fontSize: '24px', marginBottom: '10px' }}></i>
              <h4 style={{ color: 'white', margin: '0 0 5px', fontSize: '15px' }}>Upgrade to Pro</h4>
              <p style={{ color: '#cbd5e1', fontSize: '11px', margin: '0 0 15px', lineHeight: '1.4' }}>Get full access to all tests, PDFs and advanced analytics.</p>
              <button style={{ backgroundColor: '#2563eb', color: 'white', border: 'none', width: '100%', padding: '10px', borderRadius: '8px', fontSize: '13px', fontWeight: '600', cursor: 'pointer' }}>Upgrade Now <i className="fas fa-arrow-right"></i></button>
            </div>
          </div>
        </aside>

        {/* Center Content Area */}
        <main className="dashboard-content-area">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
