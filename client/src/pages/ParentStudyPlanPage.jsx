import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ParentSidebar from '../components/ParentSidebar';

const ParentStudyPlanPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ display: 'flex', minHeight: '100vh', fontFamily: "'Inter', sans-serif", backgroundColor: '#f1f5f9' }}>
      
      {/* Sidebar */}
      <ParentSidebar activeTab="study-plan" />

      {/* Main Content Area */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        
        {/* Top Navbar */}
        <div style={{ height: '60px', backgroundColor: 'white', borderBottom: '1px solid #e2e8f0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 30px', position: 'sticky', top: 0, zIndex: 50 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <i className="fas fa-users" style={{ color: '#2563eb', fontSize: '20px' }}></i>
            <div>
              <h2 style={{ margin: 0, fontSize: '15px', fontWeight: '700', color: '#0f172a' }}>Parent Portal</h2>
              <p style={{ margin: 0, fontSize: '11px', color: '#64748b' }}>Supporting their dreams, together.</p>
            </div>
          </div>

          <div style={{ transform: 'rotate(-5deg)' }}>
            <p style={{ fontFamily: "'Caveat', cursive", fontSize: '18px', color: '#1e3a8a', margin: '0 0 2px', lineHeight: '1.1' }}>Same Aspiration<br/>Bigger Dreams!</p>
            <div style={{ height: '2px', width: '40px', background: 'linear-gradient(90deg, #ff9933 33.3%, #ffffff 33.3%, #ffffff 66.6%, #138808 66.6%)', borderRadius: '2px', marginLeft: 'auto' }}></div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <div style={{ position: 'relative', cursor: 'pointer' }}>
              <i className="far fa-bell" style={{ fontSize: '20px', color: '#475569' }}></i>
              <div style={{ position: 'absolute', top: '-4px', right: '-4px', width: '8px', height: '8px', backgroundColor: '#ef4444', borderRadius: '50%', border: '2px solid white' }}></div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
              <div style={{ width: '32px', height: '32px', backgroundColor: '#64748b', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white', fontSize: '12px', fontWeight: '700' }}>
                RK
              </div>
              <div style={{ textAlign: 'left' }}>
                <p style={{ margin: 0, fontSize: '10px', color: '#64748b' }}>Welcome,</p>
                <h4 style={{ margin: 0, fontSize: '13px', fontWeight: '700', color: '#0f172a' }}>Rakesh Kumar Thakur</h4>
                <p style={{ margin: 0, fontSize: '10px', color: '#94a3b8' }}>(Pankaj's Father)</p>
              </div>
              <i className="fas fa-chevron-down" style={{ fontSize: '12px', color: '#94a3b8' }}></i>
            </div>
          </div>
        </div>

        {/* Dashboard Content */}
        <div style={{ padding: '30px', flex: 1, overflowY: 'auto' }}>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '12px', color: '#64748b', marginBottom: '15px' }}>
            <Link to="/parent-dashboard" style={{ color: '#2563eb', textDecoration: 'none' }}><i className="fas fa-chevron-left" style={{ fontSize: '10px', marginRight: '5px' }}></i> Dashboard</Link>
            <i className="fas fa-chevron-right" style={{ fontSize: '10px', margin: '0 5px' }}></i> Study Plan
          </div>

          {/* Header Row */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '25px' }}>
            <div>
              <h1 style={{ margin: '0 0 5px', fontSize: '28px', fontWeight: '800', color: '#1e3a8a' }}>Study Plan</h1>
              <p style={{ margin: 0, fontSize: '15px', color: '#475569' }}>A personalized plan for Pankaj's SSC CGL 2026 preparation.</p>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
               <div style={{ display: 'flex', alignItems: 'center', gap: '10px', backgroundColor: 'white', padding: '10px 15px', borderRadius: '8px', border: '1px solid #cbd5e1', color: '#0f172a', fontWeight: '600', fontSize: '14px', cursor: 'pointer' }}>
                 <i className="far fa-calendar-alt" style={{ color: '#64748b' }}></i> CGL 2026 (Tier I) <i className="fas fa-chevron-down" style={{ color: '#2563eb', marginLeft: '10px' }}></i>
               </div>
               <div style={{ backgroundColor: '#f0fdf4', padding: '12px 20px', borderRadius: '12px', border: '1px solid #bbf7d0', textAlign: 'center', transform: 'rotate(-2deg)' }}>
                  <p style={{ fontFamily: "'Caveat', cursive", fontSize: '18px', color: '#166534', margin: '0 0 5px', lineHeight: '1.2' }}>"Plan today,<br/>success tomorrow."</p>
                  <div style={{ height: '2px', width: '30px', background: 'linear-gradient(90deg, #ff9933 33.3%, #ffffff 33.3%, #ffffff 66.6%, #138808 66.6%)', borderRadius: '2px', margin: '0 auto' }}></div>
               </div>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '25px' }}>
            
            {/* Left Main Column (75%) */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '20px' }}>
              
              {/* Plan KPI Row */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '15px' }}>
                <div style={{ backgroundColor: 'white', padding: '15px', borderRadius: '12px', border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', gap: '15px' }}>
                  <div style={{ width: '45px', height: '45px', borderRadius: '10px', backgroundColor: '#f3e8ff', color: '#a855f7', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '20px' }}><i className="fas fa-list-ul"></i></div>
                  <div>
                    <p style={{ margin: '0 0 3px', fontSize: '11px', color: '#64748b', fontWeight: '500' }}>Plan Progress</p>
                    <h4 style={{ margin: '0 0 3px', fontSize: '20px', fontWeight: '800', color: '#0f172a' }}>78%</h4>
                    <p style={{ margin: 0, fontSize: '11px', color: '#16a34a', fontWeight: '600' }}><i className="fas fa-check-circle"></i> On Track</p>
                  </div>
                </div>

                <div style={{ backgroundColor: 'white', padding: '15px', borderRadius: '12px', border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', gap: '15px' }}>
                  <div style={{ width: '45px', height: '45px', borderRadius: '10px', backgroundColor: '#dcfce7', color: '#16a34a', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '20px' }}><i className="fas fa-bullseye"></i></div>
                  <div>
                    <p style={{ margin: '0 0 3px', fontSize: '11px', color: '#64748b', fontWeight: '500' }}>Topics Planned</p>
                    <h4 style={{ margin: '0 0 3px', fontSize: '20px', fontWeight: '800', color: '#0f172a' }}>120</h4>
                    <p style={{ margin: 0, fontSize: '11px', color: '#64748b' }}>(Tier I Syllabus)</p>
                  </div>
                </div>

                <div style={{ backgroundColor: 'white', padding: '15px', borderRadius: '12px', border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', gap: '15px' }}>
                  <div style={{ width: '45px', height: '45px', borderRadius: '10px', backgroundColor: '#ffe4e6', color: '#e11d48', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '20px' }}><i className="far fa-check-circle"></i></div>
                  <div>
                    <p style={{ margin: '0 0 3px', fontSize: '11px', color: '#64748b', fontWeight: '500' }}>Topics Completed</p>
                    <h4 style={{ margin: '0 0 3px', fontSize: '20px', fontWeight: '800', color: '#0f172a' }}>94</h4>
                    <p style={{ margin: 0, fontSize: '11px', color: '#16a34a', fontWeight: '600' }}><i className="fas fa-check"></i> 78% Completed</p>
                  </div>
                </div>

                <div style={{ backgroundColor: 'white', padding: '15px', borderRadius: '12px', border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', gap: '15px' }}>
                  <div style={{ width: '45px', height: '45px', borderRadius: '10px', backgroundColor: '#eff6ff', color: '#2563eb', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '20px' }}><i className="far fa-clock"></i></div>
                  <div>
                    <p style={{ margin: '0 0 3px', fontSize: '11px', color: '#64748b', fontWeight: '500' }}>Days Remaining</p>
                    <h4 style={{ margin: '0 0 3px', fontSize: '20px', fontWeight: '800', color: '#0f172a' }}>348</h4>
                    <p style={{ margin: 0, fontSize: '11px', color: '#64748b' }}>until Tier I Exam</p>
                  </div>
                </div>
              </div>

              {/* Weekly Plan Table Container */}
              <div style={{ backgroundColor: 'white', borderRadius: '16px', border: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
                
                {/* Tabs & Navigation */}
                <div style={{ padding: '15px 20px', borderBottom: '1px solid #e2e8f0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'flex', gap: '5px' }}>
                    <button style={{ padding: '8px 16px', border: 'none', backgroundColor: '#2563eb', color: 'white', borderRadius: '6px', fontSize: '12px', fontWeight: '600', cursor: 'pointer' }}>Weekly Plan</button>
                    <button style={{ padding: '8px 16px', border: 'none', backgroundColor: 'transparent', color: '#64748b', borderRadius: '6px', fontSize: '12px', fontWeight: '500', cursor: 'pointer' }}>Monthly Plan</button>
                    <button style={{ padding: '8px 16px', border: 'none', backgroundColor: 'transparent', color: '#64748b', borderRadius: '6px', fontSize: '12px', fontWeight: '500', cursor: 'pointer' }}>Subject Plan</button>
                    <button style={{ padding: '8px 16px', border: 'none', backgroundColor: 'transparent', color: '#64748b', borderRadius: '6px', fontSize: '12px', fontWeight: '500', cursor: 'pointer' }}>Revision Plan</button>
                    <button style={{ padding: '8px 16px', border: 'none', backgroundColor: 'transparent', color: '#64748b', borderRadius: '6px', fontSize: '12px', fontWeight: '500', cursor: 'pointer' }}>Test Plan</button>
                  </div>
                  
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{ width: '28px', height: '28px', borderRadius: '6px', border: '1px solid #cbd5e1', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#64748b', cursor: 'pointer' }}><i className="fas fa-chevron-left" style={{ fontSize: '10px' }}></i></div>
                    <div style={{ padding: '6px 12px', border: '1px solid #cbd5e1', borderRadius: '6px', fontSize: '12px', fontWeight: '600', color: '#0f172a' }}>10 Aug – 16 Aug 2026</div>
                    <div style={{ width: '28px', height: '28px', borderRadius: '6px', border: '1px solid #cbd5e1', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#64748b', cursor: 'pointer' }}><i className="fas fa-chevron-right" style={{ fontSize: '10px' }}></i></div>
                    <button style={{ padding: '6px 12px', border: '1px solid #cbd5e1', backgroundColor: 'white', color: '#2563eb', borderRadius: '6px', fontSize: '12px', fontWeight: '600', marginLeft: '5px', cursor: 'pointer' }}>Today</button>
                  </div>
                </div>

                {/* Grid Table */}
                <div style={{ overflowX: 'auto' }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '10px', textAlign: 'center', minWidth: '800px' }}>
                    <thead>
                      <tr style={{ backgroundColor: '#f8fafc', color: '#475569' }}>
                        <th style={{ padding: '12px 10px', borderRight: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0', width: '100px', fontWeight: '600' }}>Time / Day</th>
                        <th style={{ padding: '12px 10px', borderRight: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0', fontWeight: '600' }}>Mon<br/>10 Aug</th>
                        <th style={{ padding: '12px 10px', borderRight: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0', fontWeight: '600' }}>Tue<br/>11 Aug</th>
                        <th style={{ padding: '12px 10px', borderRight: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0', fontWeight: '600', backgroundColor: '#eff6ff', color: '#1e3a8a' }}>Wed<br/>12 Aug</th>
                        <th style={{ padding: '12px 10px', borderRight: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0', fontWeight: '600' }}>Thu<br/>13 Aug</th>
                        <th style={{ padding: '12px 10px', borderRight: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0', fontWeight: '600' }}>Fri<br/>14 Aug</th>
                        <th style={{ padding: '12px 10px', borderRight: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0', fontWeight: '600' }}>Sat<br/>15 Aug</th>
                        <th style={{ padding: '12px 10px', borderBottom: '1px solid #e2e8f0', fontWeight: '600' }}>Sun<br/>16 Aug</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* 6:00 - 7:00 AM */}
                      <tr>
                        <td style={{ padding: '10px', borderRight: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0', color: '#64748b' }}>6:00 – 7:00 AM</td>
                        <td style={{ padding: '6px', borderRight: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}><div style={{ backgroundColor: '#fef3c7', color: '#b45309', padding: '6px', borderRadius: '4px' }}>Current Affairs</div></td>
                        <td style={{ padding: '6px', borderRight: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}><div style={{ backgroundColor: '#fef3c7', color: '#b45309', padding: '6px', borderRadius: '4px' }}>Vocab Revision</div></td>
                        <td style={{ padding: '6px', borderRight: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0', backgroundColor: '#eff6ff' }}><div style={{ backgroundColor: '#fef3c7', color: '#b45309', padding: '6px', borderRadius: '4px' }}>Current Affairs</div></td>
                        <td style={{ padding: '6px', borderRight: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}><div style={{ backgroundColor: '#fef3c7', color: '#b45309', padding: '6px', borderRadius: '4px' }}>Static GK</div></td>
                        <td style={{ padding: '6px', borderRight: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}><div style={{ backgroundColor: '#fef3c7', color: '#b45309', padding: '6px', borderRadius: '4px' }}>Current Affairs</div></td>
                        <td style={{ padding: '6px', borderRight: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}><div style={{ backgroundColor: '#dcfce7', color: '#166534', padding: '6px', borderRadius: '4px' }}>Weekly Revision</div></td>
                        <td style={{ padding: '6px', borderBottom: '1px solid #e2e8f0' }}><div style={{ backgroundColor: '#fef3c7', color: '#b45309', padding: '6px', borderRadius: '4px' }}>Rest / Light Study</div></td>
                      </tr>
                      {/* 7:00 - 9:00 AM */}
                      <tr>
                        <td style={{ padding: '10px', borderRight: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0', color: '#64748b' }}>7:00 – 9:00 AM</td>
                        <td style={{ padding: '6px', borderRight: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}><div style={{ backgroundColor: '#e0f2fe', color: '#0369a1', padding: '6px', borderRadius: '4px' }}>Quant (Arithmetic)</div></td>
                        <td style={{ padding: '6px', borderRight: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}><div style={{ backgroundColor: '#e0f2fe', color: '#0369a1', padding: '6px', borderRadius: '4px' }}>Quant (Algebra)</div></td>
                        <td style={{ padding: '6px', borderRight: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0', backgroundColor: '#eff6ff' }}><div style={{ backgroundColor: '#e0f2fe', color: '#0369a1', padding: '6px', borderRadius: '4px' }}>Quant (Number System)</div></td>
                        <td style={{ padding: '6px', borderRight: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}><div style={{ backgroundColor: '#e0f2fe', color: '#0369a1', padding: '6px', borderRadius: '4px' }}>Quant (Geometry)</div></td>
                        <td style={{ padding: '6px', borderRight: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}><div style={{ backgroundColor: '#e0f2fe', color: '#0369a1', padding: '6px', borderRadius: '4px' }}>Quant (Trigonometry)</div></td>
                        <td style={{ padding: '6px', borderRight: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}><div style={{ backgroundColor: '#f1f5f9', color: '#334155', padding: '6px', borderRadius: '4px' }}>Mixed Practice</div></td>
                        <td style={{ padding: '6px', borderBottom: '1px solid #e2e8f0' }}><div style={{ backgroundColor: '#fef3c7', color: '#b45309', padding: '6px', borderRadius: '4px' }}>Current Affairs (W)</div></td>
                      </tr>
                      {/* 10:00 - 12:00 PM */}
                      <tr>
                        <td style={{ padding: '10px', borderRight: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0', color: '#64748b' }}>10:00 – 12:00 PM</td>
                        <td style={{ padding: '6px', borderRight: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}><div style={{ backgroundColor: '#ffe4e6', color: '#be123c', padding: '6px', borderRadius: '4px' }}>Reasoning (Puzzles)</div></td>
                        <td style={{ padding: '6px', borderRight: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}><div style={{ backgroundColor: '#ffe4e6', color: '#be123c', padding: '6px', borderRadius: '4px' }}>Reasoning (Seating)</div></td>
                        <td style={{ padding: '6px', borderRight: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0', backgroundColor: '#eff6ff' }}><div style={{ backgroundColor: '#ffe4e6', color: '#be123c', padding: '6px', borderRadius: '4px' }}>Reasoning (Blood Rel.)</div></td>
                        <td style={{ padding: '6px', borderRight: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}><div style={{ backgroundColor: '#ffe4e6', color: '#be123c', padding: '6px', borderRadius: '4px' }}>Reasoning (Syllogism)</div></td>
                        <td style={{ padding: '6px', borderRight: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}><div style={{ backgroundColor: '#ffe4e6', color: '#be123c', padding: '6px', borderRadius: '4px' }}>Reasoning (Coding)</div></td>
                        <td style={{ padding: '6px', borderRight: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}><div style={{ backgroundColor: '#f1f5f9', color: '#334155', padding: '6px', borderRadius: '4px' }}>Mixed Practice</div></td>
                        <td style={{ padding: '6px', borderBottom: '1px solid #e2e8f0' }}><div style={{ backgroundColor: '#e0f2fe', color: '#0369a1', padding: '6px', borderRadius: '4px' }}>Topic-wise Quiz</div></td>
                      </tr>
                      {/* Break */}
                      <tr>
                        <td style={{ padding: '10px', borderRight: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0', color: '#64748b' }}>1:00 – 2:00 PM</td>
                        <td style={{ padding: '6px', borderRight: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0', color: '#94a3b8' }}>Break</td>
                        <td style={{ padding: '6px', borderRight: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0', color: '#94a3b8' }}>Break</td>
                        <td style={{ padding: '6px', borderRight: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0', backgroundColor: '#eff6ff', color: '#94a3b8' }}>Break</td>
                        <td style={{ padding: '6px', borderRight: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0', color: '#94a3b8' }}>Break</td>
                        <td style={{ padding: '6px', borderRight: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0', color: '#94a3b8' }}>Break</td>
                        <td style={{ padding: '6px', borderRight: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0', color: '#94a3b8' }}>Break</td>
                        <td style={{ padding: '6px', borderBottom: '1px solid #e2e8f0', color: '#94a3b8' }}>Break</td>
                      </tr>
                      {/* 3:00 - 5:00 PM */}
                      <tr>
                        <td style={{ padding: '10px', borderRight: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0', color: '#64748b' }}>3:00 – 5:00 PM</td>
                        <td style={{ padding: '6px', borderRight: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}><div style={{ backgroundColor: '#dcfce7', color: '#166534', padding: '6px', borderRadius: '4px' }}>English (Grammar)</div></td>
                        <td style={{ padding: '6px', borderRight: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}><div style={{ backgroundColor: '#dcfce7', color: '#166534', padding: '6px', borderRadius: '4px' }}>GA (Polity)</div></td>
                        <td style={{ padding: '6px', borderRight: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0', backgroundColor: '#eff6ff' }}><div style={{ backgroundColor: '#dcfce7', color: '#166534', padding: '6px', borderRadius: '4px' }}>English (Cloze Test)</div></td>
                        <td style={{ padding: '6px', borderRight: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}><div style={{ backgroundColor: '#dcfce7', color: '#166534', padding: '6px', borderRadius: '4px' }}>English (Para Jumbles)</div></td>
                        <td style={{ padding: '6px', borderRight: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}><div style={{ backgroundColor: '#dcfce7', color: '#166534', padding: '6px', borderRadius: '4px' }}>GA (Economy)</div></td>
                        <td style={{ padding: '6px', borderRight: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}><div style={{ backgroundColor: '#e0f2fe', color: '#0369a1', padding: '6px', borderRadius: '4px' }}>Previous Year Qs</div></td>
                        <td style={{ padding: '6px', borderBottom: '1px solid #e2e8f0' }}><div style={{ backgroundColor: '#dcfce7', color: '#166534', padding: '6px', borderRadius: '4px' }}>Doubt Solving</div></td>
                      </tr>
                      {/* 6:00 - 7:00 PM */}
                      <tr>
                        <td style={{ padding: '10px', borderRight: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0', color: '#64748b' }}>6:00 – 7:00 PM</td>
                        <td style={{ padding: '6px', borderRight: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}><div style={{ backgroundColor: '#f1f5f9', color: '#334155', padding: '6px', borderRadius: '4px' }}>Mock Practice</div></td>
                        <td style={{ padding: '6px', borderRight: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}><div style={{ backgroundColor: '#f1f5f9', color: '#334155', padding: '6px', borderRadius: '4px' }}>Practice Questions</div></td>
                        <td style={{ padding: '6px', borderRight: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0', backgroundColor: '#eff6ff' }}><div style={{ backgroundColor: '#e0f2fe', color: '#0369a1', padding: '6px', borderRadius: '4px' }}>Sectional Test</div></td>
                        <td style={{ padding: '6px', borderRight: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}><div style={{ backgroundColor: '#f1f5f9', color: '#334155', padding: '6px', borderRadius: '4px' }}>Practice Questions</div></td>
                        <td style={{ padding: '6px', borderRight: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}><div style={{ backgroundColor: '#f1f5f9', color: '#334155', padding: '6px', borderRadius: '4px' }}>Mock Test</div></td>
                        <td style={{ padding: '6px', borderRight: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}><div style={{ backgroundColor: '#f1f5f9', color: '#334155', padding: '6px', borderRadius: '4px' }}>Mock Test</div></td>
                        <td style={{ padding: '6px', borderBottom: '1px solid #e2e8f0' }}><div style={{ backgroundColor: '#f1f5f9', color: '#334155', padding: '6px', borderRadius: '4px' }}>Plan Next Week</div></td>
                      </tr>
                      {/* 8:00 - 9:00 PM */}
                      <tr>
                        <td style={{ padding: '10px', borderRight: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0', color: '#64748b' }}>8:00 – 9:00 PM</td>
                        <td style={{ padding: '6px', borderRight: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}><div style={{ backgroundColor: '#f1f5f9', color: '#334155', padding: '6px', borderRadius: '4px' }}>Analysis & Notes</div></td>
                        <td style={{ padding: '6px', borderRight: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}><div style={{ backgroundColor: '#f1f5f9', color: '#334155', padding: '6px', borderRadius: '4px' }}>Error Analysis</div></td>
                        <td style={{ padding: '6px', borderRight: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0', backgroundColor: '#eff6ff' }}><div style={{ backgroundColor: '#e0f2fe', color: '#0369a1', padding: '6px', borderRadius: '4px' }}>Review Mistakes</div></td>
                        <td style={{ padding: '6px', borderRight: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}><div style={{ backgroundColor: '#f1f5f9', color: '#334155', padding: '6px', borderRadius: '4px' }}>Notes Update</div></td>
                        <td style={{ padding: '6px', borderRight: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}><div style={{ backgroundColor: '#f1f5f9', color: '#334155', padding: '6px', borderRadius: '4px' }}>Analysis</div></td>
                        <td style={{ padding: '6px', borderRight: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}><div style={{ backgroundColor: '#f1f5f9', color: '#334155', padding: '6px', borderRadius: '4px' }}>Performance Review</div></td>
                        <td style={{ padding: '6px', borderBottom: '1px solid #e2e8f0' }}><div style={{ backgroundColor: '#f1f5f9', color: '#334155', padding: '6px', borderRadius: '4px' }}>Motivational Video</div></td>
                      </tr>
                      {/* 9:00 - 10:00 PM */}
                      <tr>
                        <td style={{ padding: '10px', borderRight: '1px solid #e2e8f0', color: '#64748b' }}>9:00 – 10:00 PM</td>
                        <td style={{ padding: '6px', borderRight: '1px solid #e2e8f0' }}><div style={{ backgroundColor: '#f8fafc', color: '#475569', padding: '6px', borderRadius: '4px' }}>Reading / Revision</div></td>
                        <td style={{ padding: '6px', borderRight: '1px solid #e2e8f0' }}><div style={{ backgroundColor: '#f8fafc', color: '#475569', padding: '6px', borderRadius: '4px' }}>Reading / Revision</div></td>
                        <td style={{ padding: '6px', borderRight: '1px solid #e2e8f0', backgroundColor: '#eff6ff' }}><div style={{ backgroundColor: '#f1f5f9', color: '#334155', padding: '6px', borderRadius: '4px' }}>Light Revision</div></td>
                        <td style={{ padding: '6px', borderRight: '1px solid #e2e8f0' }}><div style={{ backgroundColor: '#f8fafc', color: '#475569', padding: '6px', borderRadius: '4px' }}>Reading / Revision</div></td>
                        <td style={{ padding: '6px', borderRight: '1px solid #e2e8f0' }}><div style={{ backgroundColor: '#f8fafc', color: '#475569', padding: '6px', borderRadius: '4px' }}>Reading / Revision</div></td>
                        <td style={{ padding: '6px', borderRight: '1px solid #e2e8f0' }}><div style={{ backgroundColor: '#f8fafc', color: '#475569', padding: '6px', borderRadius: '4px' }}>Reading / Revision</div></td>
                        <td style={{ padding: '6px' }}><div style={{ backgroundColor: '#f8fafc', color: '#475569', padding: '6px', borderRadius: '4px' }}>Early Sleep</div></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Bottom Row */}
              <div style={{ display: 'flex', gap: '20px' }}>
                 {/* Subject-wise Plan Progress */}
                 <div style={{ flex: 1, backgroundColor: 'white', padding: '20px', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
                      <h3 style={{ margin: 0, fontSize: '15px', fontWeight: '700', color: '#0f172a', display: 'flex', alignItems: 'center', gap: '8px' }}><i className="fas fa-tasks" style={{ color: '#2563eb' }}></i> Subject-wise Plan Progress</h3>
                    </div>
                    
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <div style={{ width: '24px', height: '24px', borderRadius: '6px', backgroundColor: '#eff6ff', color: '#2563eb', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '12px' }}><i className="fas fa-calculator"></i></div>
                        <span style={{ width: '100px', fontSize: '11px', color: '#475569' }}>Quantitative Aptitude</span>
                        <div style={{ flex: 1, height: '8px', backgroundColor: '#f1f5f9', borderRadius: '4px', overflow: 'hidden' }}>
                          <div style={{ width: '76%', height: '100%', backgroundColor: '#16a34a', borderRadius: '4px' }}></div>
                        </div>
                        <div style={{ width: '50px', textAlign: 'right' }}>
                          <div style={{ fontSize: '11px', fontWeight: '700', color: '#0f172a' }}>76%</div>
                          <div style={{ fontSize: '9px', color: '#64748b' }}>38 / 50 topics</div>
                        </div>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <div style={{ width: '24px', height: '24px', borderRadius: '6px', backgroundColor: '#fff1f2', color: '#e11d48', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '12px' }}><i className="fas fa-brain"></i></div>
                        <span style={{ width: '100px', fontSize: '11px', color: '#475569' }}>Reasoning</span>
                        <div style={{ flex: 1, height: '8px', backgroundColor: '#f1f5f9', borderRadius: '4px', overflow: 'hidden' }}>
                          <div style={{ width: '80%', height: '100%', backgroundColor: '#2563eb', borderRadius: '4px' }}></div>
                        </div>
                        <div style={{ width: '50px', textAlign: 'right' }}>
                          <div style={{ fontSize: '11px', fontWeight: '700', color: '#0f172a' }}>80%</div>
                          <div style={{ fontSize: '9px', color: '#64748b' }}>32 / 40 topics</div>
                        </div>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <div style={{ width: '24px', height: '24px', borderRadius: '6px', backgroundColor: '#f0fdf4', color: '#16a34a', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '12px' }}><i className="fas fa-book"></i></div>
                        <span style={{ width: '100px', fontSize: '11px', color: '#475569' }}>English Language</span>
                        <div style={{ flex: 1, height: '8px', backgroundColor: '#f1f5f9', borderRadius: '4px', overflow: 'hidden' }}>
                          <div style={{ width: '70%', height: '100%', backgroundColor: '#16a34a', borderRadius: '4px' }}></div>
                        </div>
                        <div style={{ width: '50px', textAlign: 'right' }}>
                          <div style={{ fontSize: '11px', fontWeight: '700', color: '#0f172a' }}>70%</div>
                          <div style={{ fontSize: '9px', color: '#64748b' }}>28 / 40 topics</div>
                        </div>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <div style={{ width: '24px', height: '24px', borderRadius: '6px', backgroundColor: '#fdf4ff', color: '#9333ea', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '12px' }}><i className="fas fa-globe"></i></div>
                        <span style={{ width: '100px', fontSize: '11px', color: '#475569' }}>General Awareness</span>
                        <div style={{ flex: 1, height: '8px', backgroundColor: '#f1f5f9', borderRadius: '4px', overflow: 'hidden' }}>
                          <div style={{ width: '65%', height: '100%', backgroundColor: '#16a34a', borderRadius: '4px' }}></div>
                        </div>
                        <div style={{ width: '50px', textAlign: 'right' }}>
                          <div style={{ fontSize: '11px', fontWeight: '700', color: '#0f172a' }}>65%</div>
                          <div style={{ fontSize: '9px', color: '#64748b' }}>26 / 40 topics</div>
                        </div>
                      </div>
                    </div>
                 </div>

                 {/* Upcoming Milestones */}
                 <div style={{ flex: 0.8, backgroundColor: 'white', padding: '20px', borderRadius: '16px', border: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
                      <h3 style={{ margin: '0', fontSize: '15px', fontWeight: '700', color: '#0f172a', display: 'flex', alignItems: 'center', gap: '8px' }}><i className="fas fa-flag" style={{ color: '#2563eb' }}></i> Upcoming Milestones</h3>
                      <a href="#" style={{ fontSize: '11px', color: '#2563eb', fontWeight: '600', textDecoration: 'none' }}>View All</a>
                    </div>
                    
                    <div style={{ position: 'relative', paddingLeft: '15px', flex: 1 }}>
                       {/* Vertical Line */}
                       <div style={{ position: 'absolute', left: '19px', top: '10px', bottom: '10px', width: '2px', backgroundColor: '#e2e8f0' }}></div>
                       
                       <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                          <div style={{ display: 'flex', gap: '15px', position: 'relative' }}>
                            <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#16a34a', position: 'absolute', left: 0, top: '4px' }}></div>
                            <div>
                              <p style={{ margin: 0, fontSize: '10px', fontWeight: '600', color: '#475569' }}>15 Aug 2026</p>
                              <p style={{ margin: '2px 0 0', fontSize: '11px', color: '#0f172a' }}>Complete Arithmetic & Algebra</p>
                            </div>
                          </div>
                          <div style={{ display: 'flex', gap: '15px', position: 'relative' }}>
                            <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#2563eb', position: 'absolute', left: 0, top: '4px' }}></div>
                            <div>
                              <p style={{ margin: 0, fontSize: '10px', fontWeight: '600', color: '#475569' }}>25 Aug 2026</p>
                              <p style={{ margin: '2px 0 0', fontSize: '11px', color: '#0f172a' }}>Take Full Mock Test 5</p>
                            </div>
                          </div>
                          <div style={{ display: 'flex', gap: '15px', position: 'relative' }}>
                            <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#e11d48', position: 'absolute', left: 0, top: '4px' }}></div>
                            <div>
                              <p style={{ margin: 0, fontSize: '10px', fontWeight: '600', color: '#475569' }}>5 Sep 2026</p>
                              <p style={{ margin: '2px 0 0', fontSize: '11px', color: '#0f172a' }}>Complete English Syllabus (Tier I)</p>
                            </div>
                          </div>
                          <div style={{ display: 'flex', gap: '15px', position: 'relative' }}>
                            <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#9333ea', position: 'absolute', left: 0, top: '4px' }}></div>
                            <div>
                              <p style={{ margin: 0, fontSize: '10px', fontWeight: '600', color: '#475569' }}>15 Sep 2026</p>
                              <p style={{ margin: '2px 0 0', fontSize: '11px', color: '#0f172a' }}>Revise Current Affairs (Jan - Aug)</p>
                            </div>
                          </div>
                          <div style={{ display: 'flex', gap: '15px', position: 'relative' }}>
                            <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#cbd5e1', position: 'absolute', left: 0, top: '4px' }}></div>
                            <div>
                              <p style={{ margin: 0, fontSize: '10px', fontWeight: '600', color: '#475569' }}>30 Sep 2026</p>
                              <p style={{ margin: '2px 0 0', fontSize: '11px', color: '#0f172a' }}>Complete First Revision Cycle</p>
                            </div>
                          </div>
                       </div>
                    </div>
                 </div>

                 {/* AI Recommended Plan */}
                 <div style={{ flex: 1.2, backgroundColor: '#f0f9ff', padding: '20px', borderRadius: '16px', border: '1px solid #bae6fd', display: 'flex', flexDirection: 'column' }}>
                    <h3 style={{ margin: '0 0 10px', fontSize: '15px', fontWeight: '700', color: '#1e3a8a', display: 'flex', alignItems: 'center', gap: '8px' }}><i className="fas fa-robot"></i> AI Recommended Plan</h3>
                    <div style={{ display: 'flex', gap: '15px', marginBottom: '15px' }}>
                      <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: '#1e3a8a', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white', flexShrink: 0 }}>
                        <i className="fas fa-robot"></i>
                      </div>
                      <div>
                        <p style={{ margin: 0, fontSize: '11px', color: '#1e3a8a', lineHeight: '1.4' }}>Based on Pankaj's performance, we recommend focusing more on General Awareness and practicing 1 additional mock test per week.</p>
                      </div>
                    </div>
                    
                    <div>
                      <p style={{ margin: '0 0 8px', fontSize: '11px', fontWeight: '700', color: '#0f172a' }}>Recommended Actions:</p>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                          <i className="fas fa-check-circle" style={{ color: '#16a34a', marginTop: '2px', fontSize: '12px' }}></i>
                          <p style={{ margin: 0, fontSize: '11px', color: '#334155' }}>Add 30 mins daily for Current Affairs</p>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                          <i className="fas fa-check-circle" style={{ color: '#16a34a', marginTop: '2px', fontSize: '12px' }}></i>
                          <p style={{ margin: 0, fontSize: '11px', color: '#334155' }}>Revisit weak topics in GA (Polity & Economy)</p>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                          <i className="fas fa-check-circle" style={{ color: '#16a34a', marginTop: '2px', fontSize: '12px' }}></i>
                          <p style={{ margin: 0, fontSize: '11px', color: '#334155' }}>Take Mock Test every Sunday</p>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                          <i className="fas fa-check-circle" style={{ color: '#16a34a', marginTop: '2px', fontSize: '12px' }}></i>
                          <p style={{ margin: 0, fontSize: '11px', color: '#334155' }}>Maintain 6-7 hours of focused study daily</p>
                        </div>
                      </div>
                    </div>
                 </div>
              </div>

            </div>

            {/* Right Sidebar Column (25%) */}
            <div style={{ width: '280px', display: 'flex', flexDirection: 'column', gap: '20px', flexShrink: 0 }}>
              
              {/* Monthly Study Calendar */}
              <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
                  <h3 style={{ margin: 0, fontSize: '14px', fontWeight: '700', color: '#0f172a', display: 'flex', alignItems: 'center', gap: '8px' }}><i className="far fa-calendar-alt" style={{ color: '#2563eb' }}></i> Monthly Study Calendar</h3>
                </div>
                
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px', fontSize: '12px', fontWeight: '700', color: '#0f172a' }}>
                  <i className="fas fa-chevron-left" style={{ color: '#94a3b8', cursor: 'pointer' }}></i>
                  <span>August 2026</span>
                  <i className="fas fa-chevron-right" style={{ color: '#2563eb', cursor: 'pointer' }}></i>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '8px', textAlign: 'center', fontSize: '10px' }}>
                  {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
                    <div key={day} style={{ color: '#64748b', fontWeight: '600', marginBottom: '5px' }}>{day}</div>
                  ))}
                  
                  {/* Mock Calendar Grid */}
                  <div style={{ color: '#cbd5e1' }}>27</div>
                  <div style={{ color: '#cbd5e1' }}>28</div>
                  <div style={{ color: '#cbd5e1' }}>29</div>
                  <div style={{ color: '#cbd5e1' }}>30</div>
                  <div style={{ color: '#cbd5e1' }}>31</div>
                  <div style={{ width: '22px', height: '22px', borderRadius: '50%', color: '#475569', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0 auto' }}>1</div>
                  <div style={{ width: '22px', height: '22px', borderRadius: '50%', color: '#475569', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0 auto' }}>2</div>
                  
                  <div style={{ width: '22px', height: '22px', borderRadius: '50%', color: '#475569', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0 auto' }}>3</div>
                  <div style={{ width: '22px', height: '22px', borderRadius: '50%', color: '#475569', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0 auto' }}>4</div>
                  <div style={{ width: '22px', height: '22px', borderRadius: '50%', color: '#475569', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0 auto' }}>5</div>
                  <div style={{ width: '22px', height: '22px', borderRadius: '50%', color: '#475569', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0 auto' }}>6</div>
                  <div style={{ width: '22px', height: '22px', borderRadius: '50%', color: '#475569', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0 auto' }}>7</div>
                  <div style={{ width: '22px', height: '22px', borderRadius: '50%', color: '#475569', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0 auto' }}>8</div>
                  <div style={{ width: '22px', height: '22px', borderRadius: '50%', color: '#475569', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0 auto' }}>9</div>

                  <div style={{ width: '22px', height: '22px', borderRadius: '50%', backgroundColor: '#dcfce7', color: '#16a34a', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0 auto', fontWeight: '600' }}>10</div>
                  <div style={{ width: '22px', height: '22px', borderRadius: '50%', backgroundColor: '#dcfce7', color: '#16a34a', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0 auto', fontWeight: '600' }}>11</div>
                  <div style={{ width: '22px', height: '22px', borderRadius: '50%', backgroundColor: '#2563eb', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0 auto', fontWeight: '700' }}>12</div>
                  <div style={{ width: '22px', height: '22px', borderRadius: '50%', backgroundColor: '#f1f5f9', color: '#16a34a', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0 auto', fontWeight: '600' }}>13</div>
                  <div style={{ width: '22px', height: '22px', borderRadius: '50%', backgroundColor: '#f1f5f9', color: '#16a34a', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0 auto', fontWeight: '600' }}>14</div>
                  <div style={{ width: '22px', height: '22px', borderRadius: '50%', backgroundColor: '#f1f5f9', color: '#16a34a', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0 auto', fontWeight: '600' }}>15</div>
                  <div style={{ width: '22px', height: '22px', borderRadius: '50%', backgroundColor: '#f1f5f9', color: '#16a34a', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0 auto', fontWeight: '600' }}>16</div>

                  <div style={{ color: '#475569', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '22px' }}>17</div>
                  <div style={{ color: '#475569', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '22px' }}>18</div>
                  <div style={{ color: '#475569', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '22px' }}>19</div>
                  <div style={{ color: '#475569', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '22px' }}>20</div>
                  <div style={{ color: '#475569', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '22px' }}>21</div>
                  <div style={{ color: '#475569', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '22px' }}>22</div>
                  <div style={{ color: '#475569', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '22px' }}>23</div>
                  
                  <div style={{ color: '#475569', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '22px' }}>24</div>
                  <div style={{ color: '#475569', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '22px' }}>25</div>
                  <div style={{ color: '#475569', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '22px' }}>26</div>
                  <div style={{ color: '#475569', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '22px' }}>27</div>
                  <div style={{ color: '#475569', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '22px' }}>28</div>
                  <div style={{ color: '#475569', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '22px' }}>29</div>
                  <div style={{ color: '#475569', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '22px' }}>30</div>
                  
                  <div style={{ color: '#475569', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '22px' }}>31</div>
                  <div style={{ color: '#cbd5e1' }}>1</div><div style={{ color: '#cbd5e1' }}>2</div><div style={{ color: '#cbd5e1' }}>3</div><div style={{ color: '#cbd5e1' }}>4</div><div style={{ color: '#cbd5e1' }}>5</div><div style={{ color: '#cbd5e1' }}>6</div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginTop: '20px', fontSize: '9px', color: '#475569' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><div style={{ width: '8px', height: '8px', backgroundColor: '#16a34a', borderRadius: '50%' }}></div> Completed</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><div style={{ width: '8px', height: '8px', backgroundColor: '#f1f5f9', border: '1px solid #cbd5e1', borderRadius: '50%' }}></div> Planned</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><div style={{ width: '8px', height: '8px', backgroundColor: 'transparent', borderRadius: '50%' }}></div> Not Planned</div>
                </div>
              </div>

              {/* Today's Plan */}
              <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
                  <h3 style={{ margin: 0, fontSize: '14px', fontWeight: '700', color: '#0f172a', display: 'flex', alignItems: 'center', gap: '8px' }}><i className="fas fa-check-square" style={{ color: '#2563eb' }}></i> Today's Plan</h3>
                  <span style={{ fontSize: '10px', color: '#2563eb', fontWeight: '600' }}>Wed, 12 Aug 2026</span>
                </div>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '20px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <i className="fas fa-check-circle" style={{ color: '#16a34a', fontSize: '16px' }}></i>
                    <span style={{ fontSize: '11px', color: '#0f172a', textDecoration: 'line-through' }}>Current Affairs (30 mins)</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <i className="fas fa-check-circle" style={{ color: '#16a34a', fontSize: '16px' }}></i>
                    <span style={{ fontSize: '11px', color: '#0f172a', textDecoration: 'line-through' }}>Quant - Number System (2 hrs)</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{ width: '14px', height: '14px', borderRadius: '4px', border: '2px solid #cbd5e1', cursor: 'pointer' }}></div>
                    <span style={{ fontSize: '11px', color: '#475569' }}>Reasoning - Blood Relations (2 hrs)</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{ width: '14px', height: '14px', borderRadius: '4px', border: '2px solid #cbd5e1', cursor: 'pointer' }}></div>
                    <span style={{ fontSize: '11px', color: '#475569' }}>English - Cloze Test (2 hrs)</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{ width: '14px', height: '14px', borderRadius: '4px', border: '2px solid #cbd5e1', cursor: 'pointer' }}></div>
                    <span style={{ fontSize: '11px', color: '#475569' }}>Sectional Test (1 hr)</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{ width: '14px', height: '14px', borderRadius: '4px', border: '2px solid #cbd5e1', cursor: 'pointer' }}></div>
                    <span style={{ fontSize: '11px', color: '#475569' }}>Review Mistakes (1 hr)</span>
                  </div>
                </div>

                <button style={{ width: '100%', padding: '10px', backgroundColor: '#2563eb', color: 'white', border: 'none', borderRadius: '8px', fontSize: '12px', fontWeight: '600', cursor: 'pointer' }}>
                  Mark Today as Complete
                </button>
              </div>

              {/* Quick Actions */}
              <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
                <h3 style={{ margin: '0 0 15px', fontSize: '14px', fontWeight: '700', color: '#0f172a', display: 'flex', alignItems: 'center', gap: '8px' }}><i className="fas fa-bolt" style={{ color: '#2563eb' }}></i> Quick Actions</h3>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0', borderBottom: '1px solid #f1f5f9', cursor: 'pointer', fontSize: '11px', color: '#0f172a', fontWeight: '500' }}>
                    <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}><i className="fas fa-file-pdf" style={{ color: '#2563eb', width: '16px' }}></i> Download Study Plan (PDF)</div>
                    <i className="fas fa-chevron-right" style={{ color: '#94a3b8' }}></i>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0', borderBottom: '1px solid #f1f5f9', cursor: 'pointer', fontSize: '11px', color: '#0f172a', fontWeight: '500' }}>
                    <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}><i className="fas fa-sliders-h" style={{ color: '#2563eb', width: '16px' }}></i> Customize Plan</div>
                    <i className="fas fa-chevron-right" style={{ color: '#94a3b8' }}></i>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0', borderBottom: '1px solid #f1f5f9', cursor: 'pointer', fontSize: '11px', color: '#0f172a', fontWeight: '500' }}>
                    <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}><i className="fas fa-calendar-plus" style={{ color: '#2563eb', width: '16px' }}></i> Add / Reschedule Study</div>
                    <i className="fas fa-chevron-right" style={{ color: '#94a3b8' }}></i>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0', borderBottom: '1px solid #f1f5f9', cursor: 'pointer', fontSize: '11px', color: '#0f172a', fontWeight: '500' }}>
                    <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}><i className="fas fa-bullseye" style={{ color: '#2563eb', width: '16px' }}></i> Set Weekly Goals</div>
                    <i className="fas fa-chevron-right" style={{ color: '#94a3b8' }}></i>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0', cursor: 'pointer', fontSize: '11px', color: '#0f172a', fontWeight: '500' }}>
                    <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}><i className="fas fa-video" style={{ color: '#2563eb', width: '16px' }}></i> Schedule Parent Call</div>
                    <i className="fas fa-chevron-right" style={{ color: '#94a3b8' }}></i>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Footer */}
        <div style={{ padding: '20px 30px', backgroundColor: 'white', borderTop: '1px solid #e2e8f0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '12px', color: '#64748b' }}>
          <div>
            <i className="fas fa-trophy" style={{ color: '#fbbf24', marginRight: '8px', fontSize: '16px' }}></i>
            <span style={{ fontWeight: '700', color: '#0f172a' }}>95%</span> Parent Satisfaction
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <i className="fas fa-users" style={{ color: '#3b82f6', fontSize: '16px' }}></i>
            <span style={{ fontWeight: '700', color: '#0f172a' }}>10,000+</span> Students Trust Us
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <span style={{ fontWeight: '600', color: '#1e3a8a', display: 'flex', alignItems: 'center', gap: '8px' }}>
              Together for a Brighter Tomorrow <div style={{ width: '20px', height: '3px', display: 'flex', borderRadius: '2px', overflow: 'hidden' }}><div style={{ flex: 1, backgroundColor: '#ff9933' }}></div><div style={{ flex: 1, backgroundColor: '#ffffff' }}></div><div style={{ flex: 1, backgroundColor: '#138808' }}></div></div>
            </span>
            <span>|</span>
            <span style={{ fontWeight: '600', color: '#475569', display: 'flex', alignItems: 'center', gap: '5px' }}>
               Made for India's Aspirants <i className="fas fa-heart" style={{ color: '#ef4444' }}></i>
            </span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ParentStudyPlanPage;
