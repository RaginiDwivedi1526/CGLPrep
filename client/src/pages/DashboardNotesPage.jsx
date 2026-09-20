import React, { useEffect, useState } from 'react';
import DashboardLayout from '../components/DashboardLayout';

const DashboardNotesPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = ['All', 'Quantitative Aptitude', 'Reasoning', 'English', 'General Awareness'];
  const notes = [
    { title: 'Percentage Master Formula Sheet', subject: 'Quantitative Aptitude', size: '1.2 MB', date: 'Oct 15, 2025' },
    { title: 'Top 500 Vocabulary Words', subject: 'English', size: '2.5 MB', date: 'Oct 12, 2025' },
    { title: 'Indian Constitution Quick Revision', subject: 'General Awareness', size: '4.1 MB', date: 'Oct 10, 2025' },
    { title: 'Number Series Tricks', subject: 'Reasoning', size: '800 KB', date: 'Oct 05, 2025' },
    { title: 'Geometry Theorems Cheat Sheet', subject: 'Quantitative Aptitude', size: '3.2 MB', date: 'Sep 28, 2025' },
    { title: 'Last 6 Months Current Affairs', subject: 'General Awareness', size: '8.5 MB', date: 'Sep 20, 2025' },
  ];

  const filteredNotes = activeCategory === 'All' ? notes : notes.filter(n => n.subject === activeCategory);

  return (
    <DashboardLayout>
      <div className="notes-container">
        {/* Header Section */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
          <div>
            <h2 style={{ color: '#0f172a', fontSize: '28px', fontWeight: '800', margin: '0 0 8px' }}>Notes & PDFs</h2>
            <p style={{ color: '#475569', fontSize: '15px', margin: 0 }}>Download high-quality study materials and revision notes.</p>
          </div>
          <div style={{ position: 'relative', width: '300px' }}>
            <i className="fas fa-search" style={{ position: 'absolute', left: '15px', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }}></i>
            <input 
              type="text" 
              placeholder="Search notes..." 
              style={{ width: '100%', padding: '10px 15px 10px 45px', border: '1px solid #cbd5e1', borderRadius: '8px', fontSize: '14px', outline: 'none' }} 
            />
          </div>
        </div>

        {/* Categories */}
        <div style={{ display: 'flex', gap: '10px', marginBottom: '30px', flexWrap: 'wrap' }}>
          {categories.map(cat => (
            <button 
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{ padding: '8px 16px', borderRadius: '20px', fontSize: '14px', fontWeight: '500', cursor: 'pointer', border: activeCategory === cat ? 'none' : '1px solid #cbd5e1', backgroundColor: activeCategory === cat ? '#2563eb' : 'white', color: activeCategory === cat ? 'white' : '#475569', transition: 'all 0.2s' }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Notes Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
          {filteredNotes.map((note, idx) => (
            <div key={idx} style={{ backgroundColor: 'white', borderRadius: '12px', padding: '20px', border: '1px solid #e2e8f0', display: 'flex', gap: '15px', transition: 'box-shadow 0.2s', cursor: 'pointer' }} onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.05)'} onMouseLeave={(e) => e.currentTarget.style.boxShadow = 'none'}>
              <div style={{ width: '48px', height: '48px', borderRadius: '10px', backgroundColor: '#fee2e2', color: '#ef4444', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '24px', flexShrink: 0 }}>
                <i className="fas fa-file-pdf"></i>
              </div>
              <div style={{ flex: 1 }}>
                <h4 style={{ margin: '0 0 6px', fontSize: '15px', fontWeight: '700', color: '#0f172a', lineHeight: '1.3' }}>{note.title}</h4>
                <p style={{ margin: '0 0 12px', fontSize: '12px', color: '#64748b' }}>{note.subject}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '11px', color: '#94a3b8', fontWeight: '500' }}>{note.size} • {note.date}</span>
                  <button style={{ background: 'none', border: 'none', color: '#2563eb', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '5px', fontSize: '13px', fontWeight: '600' }}>
                    <i className="fas fa-download"></i> Download
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DashboardNotesPage;
