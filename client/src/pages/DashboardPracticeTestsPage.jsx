import React, { useEffect } from 'react';
import DashboardLayout from '../components/DashboardLayout';
import { Link } from 'react-router-dom';

const DashboardPracticeTestsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const subjects = [
    { name: 'Quantitative Aptitude', icon: 'fas fa-calculator', color: '#2563eb', progress: 45, total: 120, completed: 54 },
    { name: 'Reasoning Ability', icon: 'fas fa-brain', color: '#8b5cf6', progress: 65, total: 80, completed: 52 },
    { name: 'English Language', icon: 'fas fa-language', color: '#10b981', progress: 30, total: 100, completed: 30 },
    { name: 'General Awareness', icon: 'fas fa-globe', color: '#f59e0b', progress: 80, total: 150, completed: 120 }
  ];

  return (
    <DashboardLayout>
      <div className="practice-tests-container">
        {/* Header Section */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
          <div>
            <h2 style={{ color: '#0f172a', fontSize: '28px', fontWeight: '800', margin: '0 0 8px' }}>Practice Tests</h2>
            <p style={{ color: '#475569', fontSize: '15px', margin: 0 }}>Topic-wise practice questions to strengthen your concepts.</p>
          </div>
          <button style={{ backgroundColor: '#f1f5f9', color: '#0f172a', border: '1px solid #cbd5e1', padding: '10px 20px', borderRadius: '8px', fontWeight: '600', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <i className="fas fa-filter"></i> Filter
          </button>
        </div>

        {/* Subjects Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px', marginBottom: '40px' }}>
          {subjects.map((subject, idx) => (
            <div key={idx} style={{ backgroundColor: 'white', borderRadius: '12px', padding: '24px', border: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column', transition: 'transform 0.2s, box-shadow 0.2s', cursor: 'pointer' }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 10px 25px -5px rgba(0,0,0,0.1)'; }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}>
              <div style={{ width: '50px', height: '50px', borderRadius: '12px', backgroundColor: `${subject.color}15`, color: subject.color, display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '24px', marginBottom: '20px' }}>
                <i className={subject.icon}></i>
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#0f172a', margin: '0 0 10px' }}>{subject.name}</h3>
              <p style={{ color: '#64748b', fontSize: '13px', margin: '0 0 20px' }}>{subject.completed} of {subject.total} topics completed</p>
              
              <div style={{ width: '100%', height: '8px', backgroundColor: '#f1f5f9', borderRadius: '4px', overflow: 'hidden', marginBottom: '10px' }}>
                <div style={{ width: `${subject.progress}%`, height: '100%', backgroundColor: subject.color, borderRadius: '4px' }}></div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '13px', fontWeight: '600', color: '#334155' }}>{subject.progress}% Mastery</span>
                <span style={{ fontSize: '13px', fontWeight: '600', color: subject.color }}>Resume <i className="fas fa-arrow-right"></i></span>
              </div>
            </div>
          ))}
        </div>

        {/* Recent Practice Sessions */}
        <div style={{ backgroundColor: 'white', borderRadius: '12px', padding: '24px', border: '1px solid #e2e8f0' }}>
          <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#0f172a', margin: '0 0 20px' }}>Recent Practice Sessions</h3>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                  <th style={{ textAlign: 'left', padding: '12px', color: '#64748b', fontSize: '13px', fontWeight: '600' }}>Topic</th>
                  <th style={{ textAlign: 'left', padding: '12px', color: '#64748b', fontSize: '13px', fontWeight: '600' }}>Subject</th>
                  <th style={{ textAlign: 'left', padding: '12px', color: '#64748b', fontSize: '13px', fontWeight: '600' }}>Score</th>
                  <th style={{ textAlign: 'left', padding: '12px', color: '#64748b', fontSize: '13px', fontWeight: '600' }}>Time Spent</th>
                  <th style={{ textAlign: 'left', padding: '12px', color: '#64748b', fontSize: '13px', fontWeight: '600' }}>Date</th>
                  <th style={{ textAlign: 'center', padding: '12px', color: '#64748b', fontSize: '13px', fontWeight: '600' }}>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                  <td style={{ padding: '15px 12px', fontWeight: '600', color: '#1e293b', fontSize: '14px' }}>Percentage Basics</td>
                  <td style={{ padding: '15px 12px', color: '#475569', fontSize: '14px' }}>Quantitative Aptitude</td>
                  <td style={{ padding: '15px 12px' }}><span style={{ backgroundColor: '#dcfce7', color: '#166534', padding: '4px 8px', borderRadius: '6px', fontSize: '12px', fontWeight: '600' }}>18/20</span></td>
                  <td style={{ padding: '15px 12px', color: '#475569', fontSize: '14px' }}>22 mins</td>
                  <td style={{ padding: '15px 12px', color: '#475569', fontSize: '14px' }}>Today, 10:30 AM</td>
                  <td style={{ padding: '15px 12px', textAlign: 'center' }}><button style={{ color: '#2563eb', background: 'none', border: 'none', cursor: 'pointer', fontWeight: '600' }}>Review</button></td>
                </tr>
                <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                  <td style={{ padding: '15px 12px', fontWeight: '600', color: '#1e293b', fontSize: '14px' }}>Blood Relations</td>
                  <td style={{ padding: '15px 12px', color: '#475569', fontSize: '14px' }}>Reasoning</td>
                  <td style={{ padding: '15px 12px' }}><span style={{ backgroundColor: '#fef3c7', color: '#b45309', padding: '4px 8px', borderRadius: '6px', fontSize: '12px', fontWeight: '600' }}>12/20</span></td>
                  <td style={{ padding: '15px 12px', color: '#475569', fontSize: '14px' }}>15 mins</td>
                  <td style={{ padding: '15px 12px', color: '#475569', fontSize: '14px' }}>Yesterday</td>
                  <td style={{ padding: '15px 12px', textAlign: 'center' }}><button style={{ color: '#2563eb', background: 'none', border: 'none', cursor: 'pointer', fontWeight: '600' }}>Review</button></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DashboardPracticeTestsPage;
