import React, { useState } from 'react';

const TabNavigation = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'vacancies', label: 'Vacancies' },
    { id: 'eligibility', label: 'Eligibility' },
    { id: 'exam-pattern', label: 'Exam Pattern' },
    { id: 'syllabus', label: 'Syllabus' },
    { id: 'selection', label: 'Selection Process' },
    { id: 'previous', label: 'Previous Year' },
    { id: 'strategy', label: 'Preparation Strategy' },
    { id: 'faqs', label: 'FAQs' }
  ];

  return (
    <section className="tab-section">
        <div className="container">
            <div className="tab-nav" id="tabNav">
                {tabs.map(tab => (
                    <button 
                        key={tab.id}
                        className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`} 
                        onClick={() => setActiveTab(tab.id)}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
        </div>
    </section>
  );
};

export default TabNavigation;
