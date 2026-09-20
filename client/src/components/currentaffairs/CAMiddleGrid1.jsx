import React from 'react';

const CAMiddleGrid1 = () => {
  const categories = [
    { icon: 'fa-map-marker-alt', color: 'orange', name: 'National', count: '248 Articles' },
    { icon: 'fa-globe-americas', color: 'blue', name: 'International', count: '186 Articles' },
    { icon: 'fa-coins', color: 'orange-dark', name: 'Economy', count: '205 Articles' },
    { icon: 'fa-university', color: 'purple', name: 'Polity & Governance', count: '172 Articles' },
    { icon: 'fa-seedling', color: 'green', name: 'Schemes & Initiatives', count: '134 Articles' },
    { icon: 'fa-flask', color: 'pink', name: 'Science & Technology', count: '146 Articles' },
    { icon: 'fa-leaf', color: 'green-dark', name: 'Environment & Climate', count: '128 Articles' },
    { icon: 'fa-shield-alt', color: 'red', name: 'Defence & Security', count: '96 Articles' },
    { icon: 'fa-trophy', color: 'gold', name: 'Awards & Honours', count: '98 Articles' },
    { icon: 'fa-running', color: 'red-dark', name: 'Sports', count: '110 Articles' },
  ];

  const importantTopics = [
    "Government Schemes (2024-26)",
    "Budget 2026 Highlights",
    "Major Appointments (2024-26)",
    "Awards & Honours (Latest)",
    "Important Days (Jan-Dec 2026)",
    "New Laws & Policies",
    "International Summits (2024-26)",
    "Defence Exercises (Latest)",
    "Science & Technology (ISRO, DRDO, etc.)",
    "Environment & Climate Change"
  ];

  return (
    <section className="container ca-section">
      <div className="ca-mid1-grid">
        
        {/* Left: Categories */}
        <div className="ca-categories-box">
          <div className="ca-sec-header">
            <div className="ca-sh-left">
              <div className="ca-sh-icon blue"><i className="fas fa-puzzle-piece"></i></div>
              <div>
                <h2>Current Affairs by Category</h2>
                <p>Explore topic-wise current affairs with curated news, analysis and MCQs.</p>
              </div>
            </div>
            <span className="ca-view-all">View All Topics <i className="fas fa-arrow-right"></i></span>
          </div>

          <div className="ca-cat-grid">
            {categories.map((cat, idx) => (
              <div className="ca-cat-card" key={idx}>
                <div className={`ca-cat-icon ${cat.color}`}><i className={`fas ${cat.icon}`}></i></div>
                <h4>{cat.name}</h4>
                <div className="ca-cat-meta">
                  <span>{cat.count}</span>
                  <i className="fas fa-arrow-right"></i>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Important Topics */}
        <div className="ca-important-box">
          <div className="ca-sec-header" style={{ marginBottom: '16px' }}>
            <div className="ca-sh-left" style={{ gap: '12px' }}>
              <div className="ca-sh-icon red" style={{ width: '28px', height: '28px', fontSize: '14px' }}><i className="fas fa-thumbtack"></i></div>
              <h2 style={{ fontSize: '16px' }}>Important for SSC CGL 2026</h2>
            </div>
          </div>

          <ul className="ca-imp-list">
            {importantTopics.map((topic, idx) => (
              <li key={idx}>
                <div className="ca-imp-num">{idx + 1}</div>
                <span className="ca-imp-text">{topic}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
};

export default CAMiddleGrid1;
