import React from 'react';
import { Link } from 'react-router-dom';

const ParentSidebar = ({ activeTab }) => {
  const getTabStyle = (tabName) => {
    const isActive = activeTab === tabName;
    return {
      padding: '10px 20px',
      backgroundColor: isActive ? '#1d4ed8' : 'transparent',
      color: isActive ? 'white' : '#94a3b8',
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      fontSize: '13px',
      fontWeight: isActive ? '600' : '500',
      cursor: 'pointer',
      margin: '0 10px',
      borderRadius: '8px',
      textDecoration: 'none'
    };
  };

  return (
    <div className="parent-sidebar" style={{ width: '250px', backgroundColor: '#0f172a', color: 'white', display: 'flex', flexDirection: 'column', flexShrink: 0, position: 'sticky', top: 0, height: '100vh', overflowY: 'auto' }}>
      
      {/* Sidebar Header */}
      <div style={{ padding: '20px', display: 'flex', alignItems: 'center', gap: '10px', borderBottom: '1px solid #1e293b' }}>
        <div style={{ width: '30px', height: '30px', backgroundColor: '#1e3a8a', borderRadius: '6px', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white', fontSize: '14px' }}>
          <i className="fas fa-graduation-cap"></i>
        </div>
        <div>
          <h1 style={{ margin: 0, fontSize: '16px', fontWeight: '800', color: 'white' }}>CGLPrep AI</h1>
          <p style={{ margin: 0, fontSize: '8px', color: '#94a3b8', fontWeight: '500' }}>Plan • Practice • Crack CGL</p>
        </div>
      </div>

      {/* Profile Info */}
      <div style={{ padding: '20px', borderBottom: '1px solid #1e293b', display: 'flex', alignItems: 'center', gap: '12px' }}>
        <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#3b82f6', overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center', flexShrink: 0 }}>
           <i className="fas fa-user" style={{ fontSize: '20px', color: 'white' }}></i>
        </div>
        <div>
          <p style={{ margin: 0, fontSize: '10px', color: '#94a3b8' }}>Viewing Progress of</p>
          <h3 style={{ margin: '2px 0', fontSize: '14px', fontWeight: '700', color: 'white' }}>Pankaj Thakur</h3>
          <p style={{ margin: 0, fontSize: '10px', color: '#cbd5e1' }}>SSC CGL 2026</p>
        </div>
      </div>
      <div style={{ padding: '0 20px 20px', borderBottom: '1px solid #1e293b' }}>
        <div style={{ backgroundColor: '#16a34a', color: 'white', fontSize: '10px', fontWeight: '700', padding: '4px 8px', borderRadius: '12px', display: 'inline-block', marginTop: '-10px' }}>
          Parent Account (Read-Only)
        </div>
      </div>

      {/* Navigation */}
      <div style={{ padding: '20px 0', display: 'flex', flexDirection: 'column', gap: '5px', flex: 1 }}>
        <Link to="/parent-dashboard" style={{ textDecoration: 'none' }}>
          <div style={getTabStyle('dashboard')}>
            <i className="fas fa-home" style={{ width: '16px', textAlign: 'center' }}></i> Dashboard
          </div>
        </Link>
        <Link to="/parent-overall-progress" style={{ textDecoration: 'none' }}>
          <div style={getTabStyle('overall-progress')}>
            <i className="fas fa-chart-line" style={{ width: '16px', textAlign: 'center' }}></i> Overall Progress
          </div>
        </Link>
        <Link to="/parent-subject-analysis" style={{ textDecoration: 'none' }}>
          <div style={getTabStyle('subject-analysis')}>
            <i className="fas fa-book-open" style={{ width: '16px', textAlign: 'center' }}></i> Subject Analysis
          </div>
        </Link>
        <Link to="/parent-test-performance" style={{ textDecoration: 'none' }}>
          <div style={getTabStyle('test-performance')}>
            <i className="fas fa-tasks" style={{ width: '16px', textAlign: 'center' }}></i> Test Performance
          </div>
        </Link>
        <Link to="/parent-study-activity" style={{ textDecoration: 'none' }}>
          <div style={getTabStyle('study-activity')}>
            <i className="fas fa-running" style={{ width: '16px', textAlign: 'center' }}></i> Study Activity
          </div>
        </Link>
        <Link to="/parent-study-plan" style={{ textDecoration: 'none' }}>
          <div style={getTabStyle('study-plan')}>
            <i className="fas fa-calendar-alt" style={{ width: '16px', textAlign: 'center' }}></i> Study Plan
          </div>
        </Link>
        <Link to="/parent-strengths-weaknesses" style={{ textDecoration: 'none' }}>
          <div style={getTabStyle('strengths-weaknesses')}>
            <i className="fas fa-balance-scale" style={{ width: '16px', textAlign: 'center' }}></i> Strengths & Weaknesses
          </div>
        </Link>
        <Link to="/parent-ai-insights" style={{ textDecoration: 'none' }}>
          <div style={getTabStyle('ai-insights')}>
            <i className="fas fa-robot" style={{ width: '16px', textAlign: 'center' }}></i> AI Insights
          </div>
        </Link>
        <Link to="/parent-reports-downloads" style={{ textDecoration: 'none' }}>
          <div style={getTabStyle('reports-downloads')}>
            <i className="fas fa-file-download" style={{ width: '16px', textAlign: 'center' }}></i> Reports & Downloads
          </div>
        </Link>
        <Link to="/parent-notifications" style={{ textDecoration: 'none' }}>
          <div style={getTabStyle('notifications')}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <i className="fas fa-bell" style={{ width: '16px', textAlign: 'center' }}></i> Notifications
            </div>
            <div style={{ backgroundColor: '#ef4444', color: 'white', fontSize: '10px', padding: '2px 6px', borderRadius: '10px', fontWeight: '700' }}>3</div>
          </div>
        </Link>
        <Link to="/parent-help-support" style={{ textDecoration: 'none' }}>
          <div style={getTabStyle('help-support')}>
            <i className="fas fa-question-circle" style={{ width: '16px', textAlign: 'center' }}></i> Help & Support
          </div>
        </Link>
      </div>

      {/* Quote inside Sidebar */}
      <div style={{ padding: '20px', margin: '20px', backgroundColor: '#1e293b', borderRadius: '12px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <p style={{ fontFamily: "'Caveat', cursive", fontSize: '18px', color: '#e2e8f0', margin: '0 0 10px', lineHeight: '1.2', transform: 'rotate(-3deg)' }}>
          "A supportive<br/>family builds<br/>greater success."
        </p>
        <div style={{ height: '3px', width: '30px', background: 'linear-gradient(90deg, #ff9933 33.3%, #ffffff 33.3%, #ffffff 66.6%, #138808 66.6%)', borderRadius: '2px', margin: '0 auto', transform: 'rotate(-3deg)' }}></div>
      </div>
    </div>
  );
};

export default ParentSidebar;
