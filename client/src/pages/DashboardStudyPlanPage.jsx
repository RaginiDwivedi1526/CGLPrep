import React, { useEffect } from 'react';
import DashboardLayout from '../components/DashboardLayout';
import { Link } from 'react-router-dom';

const DashboardStudyPlanPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <DashboardLayout>
      <div className="study-plan-container">
        {/* Header Section */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
          <div>
            <h2 style={{ color: '#0f172a', fontSize: '28px', fontWeight: '800', margin: '0 0 8px' }}>My Study Plan</h2>
            <p style={{ color: '#475569', fontSize: '15px', margin: 0 }}>Track your daily goals and upcoming milestones.</p>
          </div>
          <button style={{ backgroundColor: '#2563eb', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '8px', fontWeight: '600', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <i className="fas fa-plus"></i> Add Custom Task
          </button>
        </div>

        {/* Today's Targets */}
        <div style={{ backgroundColor: 'white', borderRadius: '12px', padding: '24px', border: '1px solid #e2e8f0', marginBottom: '24px' }}>
          <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#0f172a', margin: '0 0 20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <i className="fas fa-bullseye text-blue"></i> Today's Targets
          </h3>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            {/* Task 1 */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '15px', border: '1px solid #f1f5f9', borderRadius: '8px', backgroundColor: '#f8fafc' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <input type="checkbox" style={{ width: '20px', height: '20px', cursor: 'pointer' }} />
                <div>
                  <h4 style={{ margin: '0 0 4px', fontSize: '15px', fontWeight: '600', color: '#1e293b' }}>Complete Ratio & Proportion Concepts</h4>
                  <span style={{ fontSize: '12px', color: '#64748b', display: 'flex', alignItems: 'center', gap: '5px' }}><i className="far fa-clock"></i> 45 mins • Quantitative Aptitude</span>
                </div>
              </div>
              <span style={{ padding: '4px 10px', backgroundColor: '#dbeafe', color: '#1d4ed8', borderRadius: '12px', fontSize: '12px', fontWeight: '600' }}>In Progress</span>
            </div>
            
            {/* Task 2 */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '15px', border: '1px solid #f1f5f9', borderRadius: '8px', backgroundColor: '#f8fafc' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <input type="checkbox" style={{ width: '20px', height: '20px', cursor: 'pointer' }} />
                <div>
                  <h4 style={{ margin: '0 0 4px', fontSize: '15px', fontWeight: '600', color: '#1e293b' }}>Take Daily Current Affairs Quiz</h4>
                  <span style={{ fontSize: '12px', color: '#64748b', display: 'flex', alignItems: 'center', gap: '5px' }}><i className="far fa-clock"></i> 15 mins • General Awareness</span>
                </div>
              </div>
              <span style={{ padding: '4px 10px', backgroundColor: '#f1f5f9', color: '#475569', borderRadius: '12px', fontSize: '12px', fontWeight: '600' }}>Pending</span>
            </div>

            {/* Task 3 */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '15px', border: '1px solid #e2e8f0', borderRadius: '8px', backgroundColor: '#f0fdf4' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <input type="checkbox" defaultChecked style={{ width: '20px', height: '20px', cursor: 'pointer' }} />
                <div>
                  <h4 style={{ margin: '0 0 4px', fontSize: '15px', fontWeight: '600', color: '#166534', textDecoration: 'line-through' }}>Revise English Vocabulary</h4>
                  <span style={{ fontSize: '12px', color: '#15803d', display: 'flex', alignItems: 'center', gap: '5px' }}><i className="far fa-clock"></i> 30 mins • English Language</span>
                </div>
              </div>
              <span style={{ padding: '4px 10px', backgroundColor: '#dcfce7', color: '#166534', borderRadius: '12px', fontSize: '12px', fontWeight: '600' }}>Completed</span>
            </div>
          </div>
        </div>

        {/* Calendar View Placeholder */}
        <div style={{ backgroundColor: 'white', borderRadius: '12px', padding: '24px', border: '1px solid #e2e8f0' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#0f172a', margin: 0 }}>Upcoming Schedule</h3>
            <div style={{ display: 'flex', gap: '10px' }}>
              <button style={{ padding: '6px 12px', backgroundColor: '#f1f5f9', border: 'none', borderRadius: '6px', fontSize: '13px', cursor: 'pointer', fontWeight: '600' }}>Day</button>
              <button style={{ padding: '6px 12px', backgroundColor: '#2563eb', color: 'white', border: 'none', borderRadius: '6px', fontSize: '13px', cursor: 'pointer', fontWeight: '600' }}>Week</button>
              <button style={{ padding: '6px 12px', backgroundColor: '#f1f5f9', border: 'none', borderRadius: '6px', fontSize: '13px', cursor: 'pointer', fontWeight: '600' }}>Month</button>
            </div>
          </div>
          
          <div style={{ height: '300px', backgroundColor: '#f8fafc', borderRadius: '8px', border: '1px dashed #cbd5e1', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: '10px' }}>
             <i className="far fa-calendar-check" style={{ fontSize: '48px', color: '#94a3b8' }}></i>
             <p style={{ color: '#64748b', fontSize: '15px', fontWeight: '500' }}>Dynamic Calendar Integration Pending</p>
          </div>
        </div>

      </div>
    </DashboardLayout>
  );
};

export default DashboardStudyPlanPage;
