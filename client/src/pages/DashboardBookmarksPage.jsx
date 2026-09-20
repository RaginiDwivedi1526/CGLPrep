import React, { useEffect, useState } from 'react';
import DashboardLayout from '../components/DashboardLayout';

const DashboardBookmarksPage = () => {
  const [activeTab, setActiveTab] = useState('Questions');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const bookmarkedQuestions = [
    { id: 1, subject: 'Quantitative Aptitude', topic: 'Time & Work', text: 'A and B can do a piece of work in 12 days, B and C in 15 days, and C and A in 20 days. In how many days can A alone do the work?', dateAdded: 'Oct 16, 2025' },
    { id: 2, subject: 'English', topic: 'Error Spotting', text: 'Scarcely had he gone (A) / than a policeman knocked (B) / at the door (C) / No error (D).', dateAdded: 'Oct 14, 2025' },
    { id: 3, subject: 'General Awareness', topic: 'History', text: 'Who was the first Indian ruler to organize the Haj pilgrimage at the expense of the state?', dateAdded: 'Oct 10, 2025' }
  ];

  return (
    <DashboardLayout>
      <div className="bookmarks-container">
        {/* Header Section */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
          <div>
            <h2 style={{ color: '#0f172a', fontSize: '28px', fontWeight: '800', margin: '0 0 8px' }}>Bookmarks</h2>
            <p style={{ color: '#475569', fontSize: '15px', margin: 0 }}>Review your saved questions, articles, and important concepts.</p>
          </div>
        </div>

        {/* Tabs */}
        <div style={{ display: 'flex', borderBottom: '1px solid #e2e8f0', marginBottom: '30px' }}>
          {['Questions', 'Current Affairs', 'Notes'].map(tab => (
            <button 
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{ padding: '12px 24px', background: 'none', border: 'none', borderBottom: activeTab === tab ? '2px solid #2563eb' : '2px solid transparent', color: activeTab === tab ? '#2563eb' : '#64748b', fontSize: '15px', fontWeight: activeTab === tab ? '600' : '500', cursor: 'pointer', transition: 'all 0.2s' }}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content */}
        {activeTab === 'Questions' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {bookmarkedQuestions.map(q => (
              <div key={q.id} style={{ backgroundColor: 'white', borderRadius: '12px', padding: '24px', border: '1px solid #e2e8f0', position: 'relative' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
                  <div style={{ display: 'flex', gap: '10px' }}>
                    <span style={{ backgroundColor: '#f1f5f9', color: '#475569', padding: '4px 10px', borderRadius: '20px', fontSize: '12px', fontWeight: '600' }}>{q.subject}</span>
                    <span style={{ backgroundColor: '#dbeafe', color: '#1d4ed8', padding: '4px 10px', borderRadius: '20px', fontSize: '12px', fontWeight: '600' }}>{q.topic}</span>
                  </div>
                  <button style={{ background: 'none', border: 'none', color: '#fbbf24', fontSize: '18px', cursor: 'pointer' }}>
                    <i className="fas fa-bookmark"></i>
                  </button>
                </div>
                <p style={{ margin: '0 0 20px', fontSize: '15px', color: '#0f172a', lineHeight: '1.5', fontWeight: '500' }}>{q.text}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #f1f5f9', paddingTop: '15px' }}>
                  <span style={{ fontSize: '12px', color: '#94a3b8' }}>Bookmarked on {q.dateAdded}</span>
                  <button style={{ color: '#2563eb', background: 'none', border: 'none', fontWeight: '600', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '5px' }}>
                    View Solution <i className="fas fa-arrow-right"></i>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab !== 'Questions' && (
          <div style={{ padding: '60px 20px', textAlign: 'center', backgroundColor: 'white', borderRadius: '12px', border: '1px dashed #cbd5e1' }}>
            <i className="far fa-folder-open" style={{ fontSize: '48px', color: '#94a3b8', marginBottom: '15px' }}></i>
            <h3 style={{ fontSize: '18px', color: '#334155', margin: '0 0 10px' }}>No {activeTab} Bookmarked Yet</h3>
            <p style={{ color: '#64748b', fontSize: '14px', margin: 0 }}>Start exploring and bookmark important items to see them here.</p>
          </div>
        )}

      </div>
    </DashboardLayout>
  );
};

export default DashboardBookmarksPage;
