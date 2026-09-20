import React from 'react';
import FullLengthTests from './FullLengthTests';
import SectionalTests from './SectionalTests';
import TopicWiseTests from './TopicWiseTests';
import PyqTests from './PyqTests';
import CustomTests from './CustomTests';

const MockTestsGrid = ({ activeTab, setActiveTab }) => {
  return (
    <div className="mock-tests-container">
      {/* ===== Tabs Navigation ===== */}
      <div className="mock-tabs-wrapper">
        <div className="container">
          <div className="mock-tabs">
            <button 
              className={`mock-tab ${activeTab === 'all' ? 'active' : ''}`}
              onClick={() => setActiveTab('all')}
            >
              <i className="fas fa-layer-group"></i> All Tests
            </button>
            <button 
              className={`mock-tab ${activeTab === 'full-length' ? 'active' : ''}`}
              onClick={() => setActiveTab('full-length')}
            >
              <i className="fas fa-file-alt"></i> Full Length Tests
            </button>
            <button 
              className={`mock-tab ${activeTab === 'sectional' ? 'active' : ''}`}
              onClick={() => setActiveTab('sectional')}
            >
              <i className="fas fa-puzzle-piece"></i> Sectional Tests
            </button>
            <button 
              className={`mock-tab ${activeTab === 'topic' ? 'active' : ''}`}
              onClick={() => setActiveTab('topic')}
            >
              <i className="fas fa-book-open"></i> Topic-wise Tests
            </button>
            <button 
              className={`mock-tab ${activeTab === 'pyq' ? 'active' : ''}`}
              onClick={() => setActiveTab('pyq')}
            >
              <i className="fas fa-history"></i> Previous Year Papers
            </button>
            <button 
              className={`mock-tab ${activeTab === 'custom' ? 'active' : ''}`}
              onClick={() => setActiveTab('custom')}
            >
              <i className="fas fa-sliders-h"></i> Custom Tests
            </button>
          </div>
        </div>
      </div>

      {/* ===== Tab Content ===== */}
      <div className="mock-tab-content">
        {activeTab === 'full-length' && <FullLengthTests />}
        {activeTab === 'sectional' && <SectionalTests />}
        {activeTab === 'topic' && <TopicWiseTests />}
        {activeTab === 'pyq' && <PyqTests />}
        {activeTab === 'custom' && <CustomTests />}
        
        {/* Placeholder for other tabs */}
        {activeTab === 'all' && (
          <div className="container" style={{ padding: '80px 0', textAlign: 'center' }}>
            <h3>Content for this tab is coming soon!</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default MockTestsGrid;
