import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ParentSidebar from '../components/ParentSidebar';

const ParentStudyActivityPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ display: 'flex', minHeight: '100vh', fontFamily: "'Inter', sans-serif", backgroundColor: '#f1f5f9' }}>
      
      {/* Sidebar */}
      <ParentSidebar activeTab="study-activity" />

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
            <i className="fas fa-chevron-right" style={{ fontSize: '10px', margin: '0 5px' }}></i> Study Activity
          </div>

          {/* Header Row */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '25px' }}>
            <div>
              <h1 style={{ margin: '0 0 5px', fontSize: '28px', fontWeight: '800', color: '#1e3a8a' }}>Study Activity</h1>
              <p style={{ margin: 0, fontSize: '15px', color: '#475569' }}>Track daily study habits, time spent, practice activities and overall engagement.</p>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
               <div style={{ display: 'flex', alignItems: 'center', gap: '10px', backgroundColor: 'white', padding: '10px 15px', borderRadius: '8px', border: '1px solid #cbd5e1', color: '#0f172a', fontWeight: '600', fontSize: '14px', cursor: 'pointer' }}>
                 <i className="far fa-calendar-alt" style={{ color: '#64748b' }}></i> Last 30 Days <i className="fas fa-chevron-down" style={{ color: '#2563eb', marginLeft: '10px' }}></i>
               </div>
               <div style={{ backgroundColor: '#f0fdf4', padding: '12px 20px', borderRadius: '12px', border: '1px solid #bbf7d0', textAlign: 'center', transform: 'rotate(-2deg)' }}>
                  <p style={{ fontFamily: "'Caveat', cursive", fontSize: '18px', color: '#166534', margin: '0 0 5px', lineHeight: '1.2' }}>"Consistent effort<br/>today, success tomorrow."</p>
                  <div style={{ height: '2px', width: '30px', background: 'linear-gradient(90deg, #ff9933 33.3%, #ffffff 33.3%, #ffffff 66.6%, #138808 66.6%)', borderRadius: '2px', margin: '0 auto' }}></div>
               </div>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '25px' }}>
            
            {/* Left Main Column (75%) */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '20px' }}>
              
              {/* Study KPI Row */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '15px' }}>
                <div style={{ backgroundColor: 'white', padding: '15px', borderRadius: '12px', border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', gap: '15px' }}>
                  <div style={{ width: '45px', height: '45px', borderRadius: '10px', backgroundColor: '#eff6ff', color: '#2563eb', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '20px' }}><i className="fas fa-clock"></i></div>
                  <div>
                    <p style={{ margin: '0 0 3px', fontSize: '11px', color: '#64748b', fontWeight: '500' }}>Total Study Time</p>
                    <h4 style={{ margin: '0 0 3px', fontSize: '20px', fontWeight: '800', color: '#0f172a' }}>36h 20m</h4>
                    <p style={{ margin: 0, fontSize: '11px', color: '#16a34a', fontWeight: '600' }}><i className="fas fa-arrow-up"></i> 18% <span style={{ color: '#64748b', fontWeight: '500' }}>vs previous 30 days</span></p>
                  </div>
                </div>

                <div style={{ backgroundColor: 'white', padding: '15px', borderRadius: '12px', border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', gap: '15px' }}>
                  <div style={{ width: '45px', height: '45px', borderRadius: '10px', backgroundColor: '#fff1f2', color: '#e11d48', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '20px' }}><i className="fas fa-bullseye"></i></div>
                  <div>
                    <p style={{ margin: '0 0 3px', fontSize: '11px', color: '#64748b', fontWeight: '500' }}>Study Days</p>
                    <h4 style={{ margin: '0 0 3px', fontSize: '20px', fontWeight: '800', color: '#0f172a' }}>26 <span style={{ fontSize: '12px', color: '#64748b', fontWeight: '500' }}>/ 30</span></h4>
                    <p style={{ margin: 0, fontSize: '11px', color: '#16a34a', fontWeight: '600' }}><i className="fas fa-arrow-up"></i> 87% <span style={{ color: '#64748b', fontWeight: '500' }}>consistency</span></p>
                  </div>
                </div>

                <div style={{ backgroundColor: 'white', padding: '15px', borderRadius: '12px', border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', gap: '15px' }}>
                  <div style={{ width: '45px', height: '45px', borderRadius: '10px', backgroundColor: '#dcfce7', color: '#16a34a', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '20px' }}><i className="fas fa-list-alt"></i></div>
                  <div>
                    <p style={{ margin: '0 0 3px', fontSize: '11px', color: '#64748b', fontWeight: '500' }}>Questions Practiced</p>
                    <h4 style={{ margin: '0 0 3px', fontSize: '20px', fontWeight: '800', color: '#0f172a' }}>1,250</h4>
                    <p style={{ margin: 0, fontSize: '11px', color: '#16a34a', fontWeight: '600' }}><i className="fas fa-arrow-up"></i> 22% <span style={{ color: '#64748b', fontWeight: '500' }}>vs previous 30 days</span></p>
                  </div>
                </div>

                <div style={{ backgroundColor: 'white', padding: '15px', borderRadius: '12px', border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', gap: '15px' }}>
                  <div style={{ width: '45px', height: '45px', borderRadius: '10px', backgroundColor: '#ffedd5', color: '#f97316', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '20px' }}><i className="fas fa-fire"></i></div>
                  <div>
                    <p style={{ margin: '0 0 3px', fontSize: '11px', color: '#64748b', fontWeight: '500' }}>Current Streak</p>
                    <h4 style={{ margin: '0 0 3px', fontSize: '20px', fontWeight: '800', color: '#0f172a' }}>12 Days</h4>
                    <p style={{ margin: 0, fontSize: '10px', color: '#64748b' }}>Best Streak: 18 Days</p>
                  </div>
                </div>
              </div>

              {/* Main Charts Row */}
              <div style={{ display: 'flex', gap: '20px' }}>
                {/* Daily Study Activity Bar Chart */}
                <div style={{ flex: 1.5, backgroundColor: 'white', padding: '20px', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                    <h3 style={{ margin: 0, fontSize: '15px', fontWeight: '700', color: '#0f172a', display: 'flex', alignItems: 'center', gap: '8px' }}><i className="fas fa-chart-bar" style={{ color: '#2563eb' }}></i> Daily Study Activity (Last 30 Days)</h3>
                    <div style={{ display: 'flex', gap: '15px', fontSize: '10px', color: '#64748b', fontWeight: '600' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><div style={{ width: '8px', height: '8px', backgroundColor: '#93c5fd', borderRadius: '2px' }}></div> Study Time</div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><div style={{ width: '12px', height: '2px', backgroundColor: '#475569', borderTop: '1px dashed #475569' }}></div> Target (3 hrs)</div>
                    </div>
                  </div>
                  
                  {/* Mock Bar Chart */}
                  <div style={{ height: '160px', position: 'relative', borderBottom: '1px solid #e2e8f0', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', paddingLeft: '25px', paddingRight: '10px' }}>
                     {/* Y Axis */}
                     <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', fontSize: '10px', color: '#94a3b8' }}>
                      <span>5h</span><span>4h</span><span>3h</span><span>2h</span><span>1h</span><span>0h</span>
                     </div>
                     {/* Grid lines */}
                     <div style={{ position: 'absolute', top: '20%', left: '25px', right: 0, borderTop: '1px solid #f1f5f9' }}></div>
                     <div style={{ position: 'absolute', top: '40%', left: '25px', right: 0, borderTop: '1px dashed #475569' }}></div> {/* Target Line at 3h */}
                     <div style={{ position: 'absolute', top: '60%', left: '25px', right: 0, borderTop: '1px solid #f1f5f9' }}></div>
                     <div style={{ position: 'absolute', top: '80%', left: '25px', right: 0, borderTop: '1px solid #f1f5f9' }}></div>

                     {/* Bars for 30 days (mocking a few) */}
                     {Array.from({ length: 30 }).map((_, i) => {
                       const h = Math.random() * 80 + 20; // random height
                       return (
                         <div key={i} style={{ width: '12px', height: `${h}%`, backgroundColor: h > 60 ? '#60a5fa' : '#93c5fd', borderTopLeftRadius: '2px', borderTopRightRadius: '2px', position: 'relative', zIndex: 5 }}></div>
                       );
                     })}
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', paddingLeft: '25px', paddingRight: '10px', marginTop: '10px', fontSize: '9px', color: '#475569' }}>
                    <span>14 Jul</span><span>17 Jul</span><span>20 Jul</span><span>23 Jul</span><span>26 Jul</span><span>29 Jul</span><span>1 Aug</span><span>4 Aug</span><span>7 Aug</span><span>10 Aug</span><span>12 Aug</span>
                  </div>
                </div>

                {/* Study Time Distribution */}
                <div style={{ flex: 1, backgroundColor: 'white', padding: '20px', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
                   <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                    <h3 style={{ margin: 0, fontSize: '15px', fontWeight: '700', color: '#0f172a', display: 'flex', alignItems: 'center', gap: '8px' }}><i className="fas fa-chart-pie" style={{ color: '#2563eb' }}></i> Study Time Distribution</h3>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '20px', height: '180px' }}>
                     {/* Donut Chart */}
                     <div style={{ position: 'relative', width: '130px', height: '130px', borderRadius: '50%', background: 'conic-gradient(#2563eb 0 28%, #e11d48 28% 54%, #16a34a 54% 76%, #9333ea 76% 94%, #cbd5e1 94% 100%)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                       <div style={{ width: '90px', height: '90px', backgroundColor: 'white', borderRadius: '50%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                         <span style={{ fontSize: '16px', fontWeight: '800', color: '#0f172a', lineHeight: '1' }}>36h 20m</span>
                         <span style={{ fontSize: '10px', color: '#64748b' }}>Total</span>
                       </div>
                     </div>

                     {/* Legend */}
                     <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                       <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                         <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><div style={{ width: '8px', height: '8px', backgroundColor: '#2563eb', borderRadius: '50%' }}></div><span style={{ fontSize: '10px', color: '#475569' }}>Quantitative Aptitude</span></div>
                         <span style={{ fontSize: '10px', fontWeight: '700', color: '#0f172a' }}>10h 15m (28%)</span>
                       </div>
                       <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                         <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><div style={{ width: '8px', height: '8px', backgroundColor: '#e11d48', borderRadius: '50%' }}></div><span style={{ fontSize: '10px', color: '#475569' }}>Reasoning</span></div>
                         <span style={{ fontSize: '10px', fontWeight: '700', color: '#0f172a' }}>9h 20m (26%)</span>
                       </div>
                       <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                         <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><div style={{ width: '8px', height: '8px', backgroundColor: '#16a34a', borderRadius: '50%' }}></div><span style={{ fontSize: '10px', color: '#475569' }}>English Language</span></div>
                         <span style={{ fontSize: '10px', fontWeight: '700', color: '#0f172a' }}>8h 10m (22%)</span>
                       </div>
                       <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                         <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><div style={{ width: '8px', height: '8px', backgroundColor: '#9333ea', borderRadius: '50%' }}></div><span style={{ fontSize: '10px', color: '#475569' }}>General Awareness</span></div>
                         <span style={{ fontSize: '10px', fontWeight: '700', color: '#0f172a' }}>6h 35m (18%)</span>
                       </div>
                       <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                         <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><div style={{ width: '8px', height: '8px', backgroundColor: '#cbd5e1', borderRadius: '50%' }}></div><span style={{ fontSize: '10px', color: '#475569' }}>Other / Revision</span></div>
                         <span style={{ fontSize: '10px', fontWeight: '700', color: '#0f172a' }}>2h 00m (6%)</span>
                       </div>
                     </div>
                   </div>
                </div>
              </div>

              {/* Activity Section Row */}
              <div style={{ display: 'flex', gap: '20px' }}>
                {/* Recent Study Activity Timeline */}
                <div style={{ flex: 1, backgroundColor: 'white', padding: '20px', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                    <h3 style={{ margin: 0, fontSize: '15px', fontWeight: '700', color: '#0f172a', display: 'flex', alignItems: 'center', gap: '8px' }}><i className="fas fa-history" style={{ color: '#2563eb' }}></i> Recent Study Activity</h3>
                    <a href="#" style={{ fontSize: '11px', color: '#2563eb', fontWeight: '600', textDecoration: 'none' }}>View All</a>
                  </div>
                  
                  <div style={{ position: 'relative', paddingLeft: '15px' }}>
                     {/* Vertical Line */}
                     <div style={{ position: 'absolute', left: '19px', top: '10px', bottom: '10px', width: '2px', backgroundColor: '#e2e8f0' }}></div>
                     
                     <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                        {/* Item 1 */}
                        <div style={{ display: 'flex', gap: '15px', position: 'relative' }}>
                          <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#2563eb', position: 'absolute', left: 0, top: '15px' }}></div>
                          <div style={{ width: '60px', flexShrink: 0, paddingTop: '10px' }}>
                            <p style={{ margin: 0, fontSize: '11px', fontWeight: '700', color: '#0f172a' }}>Today</p>
                            <p style={{ margin: 0, fontSize: '9px', color: '#64748b' }}>10:30 AM</p>
                          </div>
                          <div style={{ flex: 1, backgroundColor: '#f8fafc', padding: '12px', borderRadius: '12px', border: '1px solid #f1f5f9', display: 'flex', alignItems: 'center', gap: '15px' }}>
                            <div style={{ width: '32px', height: '32px', borderRadius: '8px', backgroundColor: '#ffe4e6', color: '#e11d48', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '14px' }}><i className="fas fa-file-alt"></i></div>
                            <div style={{ flex: 1 }}>
                              <h4 style={{ margin: '0 0 3px', fontSize: '12px', fontWeight: '700', color: '#0f172a' }}>Attempted Quantitative Aptitude Mock Test</h4>
                              <p style={{ margin: 0, fontSize: '10px', color: '#64748b' }}>Scored 72/100 • Duration: 1h 00m</p>
                            </div>
                            <div style={{ backgroundColor: '#dcfce7', color: '#166534', padding: '4px 8px', borderRadius: '10px', fontSize: '9px', fontWeight: '700' }}>Completed</div>
                          </div>
                        </div>

                        {/* Item 2 */}
                        <div style={{ display: 'flex', gap: '15px', position: 'relative' }}>
                          <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#2563eb', position: 'absolute', left: 0, top: '15px' }}></div>
                          <div style={{ width: '60px', flexShrink: 0, paddingTop: '10px' }}>
                            <p style={{ margin: 0, fontSize: '11px', fontWeight: '700', color: '#0f172a' }}>Today</p>
                            <p style={{ margin: 0, fontSize: '9px', color: '#64748b' }}>08:15 AM</p>
                          </div>
                          <div style={{ flex: 1, backgroundColor: '#f8fafc', padding: '12px', borderRadius: '12px', border: '1px solid #f1f5f9', display: 'flex', alignItems: 'center', gap: '15px' }}>
                            <div style={{ width: '32px', height: '32px', borderRadius: '8px', backgroundColor: '#eff6ff', color: '#2563eb', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '14px' }}><i className="fas fa-play-circle"></i></div>
                            <div style={{ flex: 1 }}>
                              <h4 style={{ margin: '0 0 3px', fontSize: '12px', fontWeight: '700', color: '#0f172a' }}>Watched Video Lecture</h4>
                              <p style={{ margin: 0, fontSize: '10px', color: '#64748b' }}>Time & Work (Basic Concepts) • 32m</p>
                            </div>
                            <div style={{ backgroundColor: '#dcfce7', color: '#166534', padding: '4px 8px', borderRadius: '10px', fontSize: '9px', fontWeight: '700' }}>Completed</div>
                          </div>
                        </div>

                        {/* Item 3 */}
                        <div style={{ display: 'flex', gap: '15px', position: 'relative' }}>
                          <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#cbd5e1', position: 'absolute', left: 0, top: '15px' }}></div>
                          <div style={{ width: '60px', flexShrink: 0, paddingTop: '10px' }}>
                            <p style={{ margin: 0, fontSize: '11px', fontWeight: '600', color: '#475569' }}>Yesterday</p>
                            <p style={{ margin: 0, fontSize: '9px', color: '#64748b' }}>09:10 PM</p>
                          </div>
                          <div style={{ flex: 1, backgroundColor: '#f8fafc', padding: '12px', borderRadius: '12px', border: '1px solid #f1f5f9', display: 'flex', alignItems: 'center', gap: '15px' }}>
                            <div style={{ width: '32px', height: '32px', borderRadius: '8px', backgroundColor: '#dcfce7', color: '#16a34a', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '14px' }}><i className="fas fa-puzzle-piece"></i></div>
                            <div style={{ flex: 1 }}>
                              <h4 style={{ margin: '0 0 3px', fontSize: '12px', fontWeight: '700', color: '#0f172a' }}>Practiced Reasoning Questions</h4>
                              <p style={{ margin: 0, fontSize: '10px', color: '#64748b' }}>Puzzle Set - 2 • 25 Questions</p>
                            </div>
                            <div style={{ backgroundColor: '#dcfce7', color: '#166534', padding: '4px 8px', borderRadius: '10px', fontSize: '9px', fontWeight: '700' }}>Completed</div>
                          </div>
                        </div>

                        {/* Item 4 */}
                        <div style={{ display: 'flex', gap: '15px', position: 'relative' }}>
                          <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#cbd5e1', position: 'absolute', left: 0, top: '15px' }}></div>
                          <div style={{ width: '60px', flexShrink: 0, paddingTop: '10px' }}>
                            <p style={{ margin: 0, fontSize: '11px', fontWeight: '600', color: '#475569' }}>Yesterday</p>
                            <p style={{ margin: 0, fontSize: '9px', color: '#64748b' }}>06:40 PM</p>
                          </div>
                          <div style={{ flex: 1, backgroundColor: '#f8fafc', padding: '12px', borderRadius: '12px', border: '1px solid #f1f5f9', display: 'flex', alignItems: 'center', gap: '15px' }}>
                            <div style={{ width: '32px', height: '32px', borderRadius: '8px', backgroundColor: '#f3e8ff', color: '#9333ea', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '14px' }}><i className="fas fa-book-open"></i></div>
                            <div style={{ flex: 1 }}>
                              <h4 style={{ margin: '0 0 3px', fontSize: '12px', fontWeight: '700', color: '#0f172a' }}>Read Current Affairs Notes</h4>
                              <p style={{ margin: 0, fontSize: '10px', color: '#64748b' }}>July 2026 - Important Events • 45m</p>
                            </div>
                            <div style={{ backgroundColor: '#dcfce7', color: '#166534', padding: '4px 8px', borderRadius: '10px', fontSize: '9px', fontWeight: '700' }}>Completed</div>
                          </div>
                        </div>
                        
                        {/* Item 5 */}
                        <div style={{ display: 'flex', gap: '15px', position: 'relative' }}>
                          <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#cbd5e1', position: 'absolute', left: 0, top: '15px' }}></div>
                          <div style={{ width: '60px', flexShrink: 0, paddingTop: '10px' }}>
                            <p style={{ margin: 0, fontSize: '11px', fontWeight: '600', color: '#475569' }}>11 Aug</p>
                            <p style={{ margin: 0, fontSize: '9px', color: '#64748b' }}>08:20 PM</p>
                          </div>
                          <div style={{ flex: 1, backgroundColor: '#f8fafc', padding: '12px', borderRadius: '12px', border: '1px solid #f1f5f9', display: 'flex', alignItems: 'center', gap: '15px' }}>
                            <div style={{ width: '32px', height: '32px', borderRadius: '8px', backgroundColor: '#ffedd5', color: '#ea580c', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '14px' }}><i className="fas fa-file-alt"></i></div>
                            <div style={{ flex: 1 }}>
                              <h4 style={{ margin: '0 0 3px', fontSize: '12px', fontWeight: '700', color: '#0f172a' }}>Attempted English Sectional Test</h4>
                              <p style={{ margin: 0, fontSize: '10px', color: '#64748b' }}>Scored 61/100 • Duration: 40m</p>
                            </div>
                            <div style={{ backgroundColor: '#dcfce7', color: '#166534', padding: '4px 8px', borderRadius: '10px', fontSize: '9px', fontWeight: '700' }}>Completed</div>
                          </div>
                        </div>
                     </div>
                  </div>
                </div>

                {/* Activity Breakdown Table */}
                <div style={{ flex: 1.2, backgroundColor: 'white', padding: '20px', borderRadius: '16px', border: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                    <h3 style={{ margin: 0, fontSize: '15px', fontWeight: '700', color: '#0f172a', display: 'flex', alignItems: 'center', gap: '8px' }}><i className="fas fa-layer-group" style={{ color: '#2563eb' }}></i> Activity Breakdown</h3>
                    <div style={{ display: 'flex', fontSize: '11px', color: '#64748b', gap: '15px', alignItems: 'center' }}>
                      <span style={{ backgroundColor: '#2563eb', color: 'white', padding: '4px 10px', borderRadius: '12px', fontWeight: '600' }}>All Activities</span>
                      <span>Videos</span><span>|</span>
                      <span>Tests</span><span>|</span>
                      <span>Practice</span><span>|</span>
                      <span>Notes</span>
                    </div>
                  </div>

                  <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '11px', textAlign: 'left' }}>
                    <thead>
                      <tr style={{ color: '#475569', borderBottom: '1px solid #e2e8f0' }}>
                        <th style={{ padding: '10px 5px', fontWeight: '600' }}>Activity Type</th>
                        <th style={{ padding: '10px 5px', fontWeight: '600', textAlign: 'center' }}>Count</th>
                        <th style={{ padding: '10px 5px', fontWeight: '600', textAlign: 'center' }}>Total Time</th>
                        <th style={{ padding: '10px 5px', fontWeight: '600', textAlign: 'center' }}>Avg. Time</th>
                        <th style={{ padding: '10px 5px', fontWeight: '600' }}>Last Activity</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                        <td style={{ padding: '12px 5px', display: 'flex', alignItems: 'center', gap: '8px', color: '#0f172a', fontWeight: '500' }}><i className="fas fa-play-circle" style={{ color: '#e11d48', fontSize: '14px' }}></i> Video Lectures</td>
                        <td style={{ padding: '12px 5px', textAlign: 'center', color: '#475569' }}>24</td>
                        <td style={{ padding: '12px 5px', textAlign: 'center', color: '#0f172a', fontWeight: '600' }}>8h 50m</td>
                        <td style={{ padding: '12px 5px', textAlign: 'center', color: '#475569' }}>22m</td>
                        <td style={{ padding: '12px 5px', color: '#16a34a', fontWeight: '500' }}>Today</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                        <td style={{ padding: '12px 5px', display: 'flex', alignItems: 'center', gap: '8px', color: '#0f172a', fontWeight: '500' }}><i className="fas fa-tasks" style={{ color: '#16a34a', fontSize: '14px' }}></i> Practice Questions</td>
                        <td style={{ padding: '12px 5px', textAlign: 'center', color: '#475569' }}>18</td>
                        <td style={{ padding: '12px 5px', textAlign: 'center', color: '#0f172a', fontWeight: '600' }}>10h 20m</td>
                        <td style={{ padding: '12px 5px', textAlign: 'center', color: '#475569' }}>35m</td>
                        <td style={{ padding: '12px 5px', color: '#16a34a', fontWeight: '500' }}>Today</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                        <td style={{ padding: '12px 5px', display: 'flex', alignItems: 'center', gap: '8px', color: '#0f172a', fontWeight: '500' }}><i className="fas fa-file-alt" style={{ color: '#2563eb', fontSize: '14px' }}></i> Mock Tests</td>
                        <td style={{ padding: '12px 5px', textAlign: 'center', color: '#475569' }}>6</td>
                        <td style={{ padding: '12px 5px', textAlign: 'center', color: '#0f172a', fontWeight: '600' }}>6h 15m</td>
                        <td style={{ padding: '12px 5px', textAlign: 'center', color: '#475569' }}>1h 2m</td>
                        <td style={{ padding: '12px 5px', color: '#475569' }}>10 Aug</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                        <td style={{ padding: '12px 5px', display: 'flex', alignItems: 'center', gap: '8px', color: '#0f172a', fontWeight: '500' }}><i className="fas fa-book-open" style={{ color: '#9333ea', fontSize: '14px' }}></i> Reading (Notes)</td>
                        <td style={{ padding: '12px 5px', textAlign: 'center', color: '#475569' }}>14</td>
                        <td style={{ padding: '12px 5px', textAlign: 'center', color: '#0f172a', fontWeight: '600' }}>6h 10m</td>
                        <td style={{ padding: '12px 5px', textAlign: 'center', color: '#475569' }}>26m</td>
                        <td style={{ padding: '12px 5px', color: '#475569' }}>Yesterday</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                        <td style={{ padding: '12px 5px', display: 'flex', alignItems: 'center', gap: '8px', color: '#0f172a', fontWeight: '500' }}><i className="fas fa-newspaper" style={{ color: '#f59e0b', fontSize: '14px' }}></i> Current Affairs</td>
                        <td style={{ padding: '12px 5px', textAlign: 'center', color: '#475569' }}>12</td>
                        <td style={{ padding: '12px 5px', textAlign: 'center', color: '#0f172a', fontWeight: '600' }}>4h 45m</td>
                        <td style={{ padding: '12px 5px', textAlign: 'center', color: '#475569' }}>24m</td>
                        <td style={{ padding: '12px 5px', color: '#475569' }}>Yesterday</td>
                      </tr>
                      <tr>
                        <td style={{ padding: '12px 5px', display: 'flex', alignItems: 'center', gap: '8px', color: '#0f172a', fontWeight: '500' }}><i className="fas fa-sync-alt" style={{ color: '#10b981', fontSize: '14px' }}></i> Revision</td>
                        <td style={{ padding: '12px 5px', textAlign: 'center', color: '#475569' }}>8</td>
                        <td style={{ padding: '12px 5px', textAlign: 'center', color: '#0f172a', fontWeight: '600' }}>3h 20m</td>
                        <td style={{ padding: '12px 5px', textAlign: 'center', color: '#475569' }}>25m</td>
                        <td style={{ padding: '12px 5px', color: '#475569' }}>9 Aug</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Bottom Row */}
              <div style={{ display: 'flex', gap: '20px' }}>
                 {/* Study Goals Progress */}
                 <div style={{ flex: 1, backgroundColor: 'white', padding: '20px', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
                      <h3 style={{ margin: 0, fontSize: '15px', fontWeight: '700', color: '#0f172a', display: 'flex', alignItems: 'center', gap: '8px' }}><i className="fas fa-bullseye" style={{ color: '#2563eb' }}></i> Study Goals Progress</h3>
                      <a href="#" style={{ fontSize: '10px', color: '#2563eb', fontWeight: '600', textDecoration: 'none' }}>Manage Goals</a>
                    </div>
                    
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <i className="far fa-clock" style={{ color: '#2563eb', width: '16px' }}></i>
                        <span style={{ width: '110px', fontSize: '11px', color: '#475569' }}>Daily Study Time (3 hrs)</span>
                        <div style={{ flex: 1, height: '8px', backgroundColor: '#f1f5f9', borderRadius: '4px', overflow: 'hidden' }}>
                          <div style={{ width: '80%', height: '100%', backgroundColor: '#2563eb', borderRadius: '4px' }}></div>
                        </div>
                        <span style={{ width: '50px', textAlign: 'right', fontSize: '11px', fontWeight: '700', color: '#0f172a' }}>2.4 / 3 hrs <i className="fas fa-arrow-right" style={{ fontSize: '8px', color: '#94a3b8' }}></i></span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <i className="fas fa-file-alt" style={{ color: '#16a34a', width: '16px' }}></i>
                        <span style={{ width: '110px', fontSize: '11px', color: '#475569' }}>Weekly Tests (5)</span>
                        <div style={{ flex: 1, height: '8px', backgroundColor: '#f1f5f9', borderRadius: '4px', overflow: 'hidden' }}>
                          <div style={{ width: '80%', height: '100%', backgroundColor: '#2563eb', borderRadius: '4px' }}></div>
                        </div>
                        <span style={{ width: '50px', textAlign: 'right', fontSize: '11px', fontWeight: '700', color: '#0f172a' }}>4 / 5</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <i className="fas fa-newspaper" style={{ color: '#9333ea', width: '16px' }}></i>
                        <span style={{ width: '110px', fontSize: '11px', color: '#475569' }}>Current Affairs (Daily)</span>
                        <div style={{ flex: 1, height: '8px', backgroundColor: '#f1f5f9', borderRadius: '4px', overflow: 'hidden' }}>
                          <div style={{ width: '85%', height: '100%', backgroundColor: '#2563eb', borderRadius: '4px' }}></div>
                        </div>
                        <span style={{ width: '50px', textAlign: 'right', fontSize: '11px', fontWeight: '700', color: '#0f172a' }}>6 / 7</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <i className="fas fa-sync-alt" style={{ color: '#f59e0b', width: '16px' }}></i>
                        <span style={{ width: '110px', fontSize: '11px', color: '#475569' }}>Revision (Weekly)</span>
                        <div style={{ flex: 1, height: '8px', backgroundColor: '#f1f5f9', borderRadius: '4px', overflow: 'hidden' }}>
                          <div style={{ width: '66%', height: '100%', backgroundColor: '#2563eb', borderRadius: '4px' }}></div>
                        </div>
                        <span style={{ width: '50px', textAlign: 'right', fontSize: '11px', fontWeight: '700', color: '#0f172a' }}>2 / 3</span>
                      </div>
                    </div>
                 </div>

                 {/* AI Insights Block */}
                 <div style={{ flex: 1.2, backgroundColor: '#f0f9ff', padding: '20px', borderRadius: '16px', border: '1px solid #bae6fd', display: 'flex', flexDirection: 'column' }}>
                    <h3 style={{ margin: '0 0 10px', fontSize: '15px', fontWeight: '700', color: '#1e3a8a', display: 'flex', alignItems: 'center', gap: '8px' }}><i className="fas fa-robot"></i> AI Insights</h3>
                    <div style={{ display: 'flex', gap: '15px', flex: 1 }}>
                      <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: '#1e3a8a', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white', flexShrink: 0 }}>
                        <i className="fas fa-robot"></i>
                      </div>
                      <div>
                        <p style={{ margin: 0, fontSize: '11px', color: '#1e3a8a', lineHeight: '1.5' }}>Pankaj's study activity is consistent and improving. He spends more time on Quantitative Aptitude which is great. Consider increasing practice in General Awareness and maintaining at least 3 hours daily study time.</p>
                      </div>
                    </div>
                    <div style={{ textAlign: 'right', marginTop: '10px' }}>
                      <a href="#" style={{ fontSize: '11px', color: '#2563eb', fontWeight: '600', textDecoration: 'none' }}>View Detailed Insights <i className="fas fa-arrow-right"></i></a>
                    </div>
                 </div>

                 {/* Quick Actions (2x2 Grid) */}
                 <div style={{ flex: 0.8, backgroundColor: 'white', padding: '20px', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
                    <h3 style={{ margin: '0 0 15px', fontSize: '15px', fontWeight: '700', color: '#0f172a', display: 'flex', alignItems: 'center', gap: '8px' }}><i className="fas fa-bolt" style={{ color: '#2563eb' }}></i> Quick Actions</h3>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                       <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px', border: '1px solid #e2e8f0', borderRadius: '8px', cursor: 'pointer', backgroundColor: '#f8fafc' }}>
                         <i className="fas fa-file-pdf" style={{ color: '#2563eb', fontSize: '16px' }}></i>
                         <span style={{ fontSize: '9px', fontWeight: '600', color: '#0f172a', lineHeight: '1.2' }}>Download<br/>Activity Report (PDF)</span>
                       </div>
                       <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px', border: '1px solid #e2e8f0', borderRadius: '8px', cursor: 'pointer', backgroundColor: '#f8fafc' }}>
                         <i className="fas fa-calendar-alt" style={{ color: '#2563eb', fontSize: '16px' }}></i>
                         <span style={{ fontSize: '9px', fontWeight: '600', color: '#0f172a', lineHeight: '1.2' }}>View Study Plan</span>
                       </div>
                       <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px', border: '1px solid #e2e8f0', borderRadius: '8px', cursor: 'pointer', backgroundColor: '#f8fafc' }}>
                         <i className="fas fa-bullseye" style={{ color: '#2563eb', fontSize: '16px' }}></i>
                         <span style={{ fontSize: '9px', fontWeight: '600', color: '#0f172a', lineHeight: '1.2' }}>Set Study Goals</span>
                       </div>
                       <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px', border: '1px solid #e2e8f0', borderRadius: '8px', cursor: 'pointer', backgroundColor: '#f8fafc' }}>
                         <i className="fas fa-video" style={{ color: '#2563eb', fontSize: '16px' }}></i>
                         <span style={{ fontSize: '9px', fontWeight: '600', color: '#0f172a', lineHeight: '1.2' }}>Schedule Parent Call</span>
                       </div>
                    </div>
                 </div>
              </div>

            </div>

            {/* Right Sidebar Column (25%) */}
            <div style={{ width: '280px', display: 'flex', flexDirection: 'column', gap: '20px', flexShrink: 0 }}>
              
              {/* Great Effort Alert */}
              <div style={{ backgroundColor: '#f0fdf4', padding: '20px', borderRadius: '16px', border: '1px solid #bbf7d0', display: 'flex', gap: '15px' }}>
                <i className="fas fa-trophy" style={{ fontSize: '30px', color: '#fbbf24' }}></i>
                <div>
                  <h4 style={{ margin: '0 0 5px', fontSize: '14px', fontWeight: '700', color: '#166534' }}>Great Effort!</h4>
                  <p style={{ margin: 0, fontSize: '11px', color: '#15803d', lineHeight: '1.4' }}>Pankaj has been consistent for 12 days. Keep encouraging him!</p>
                </div>
              </div>

              {/* Study Calendar */}
              <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
                  <h3 style={{ margin: 0, fontSize: '14px', fontWeight: '700', color: '#0f172a', display: 'flex', alignItems: 'center', gap: '8px' }}><i className="fas fa-calendar-alt" style={{ color: '#2563eb' }}></i> Study Calendar</h3>
                </div>
                
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px', fontSize: '12px', fontWeight: '700', color: '#0f172a' }}>
                  <i className="fas fa-chevron-left" style={{ color: '#94a3b8', cursor: 'pointer' }}></i>
                  <span>Aug 2026</span>
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
                  <div style={{ width: '22px', height: '22px', borderRadius: '50%', backgroundColor: '#22c55e', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0 auto', fontWeight: '600' }}>1</div>
                  <div style={{ width: '22px', height: '22px', borderRadius: '50%', backgroundColor: '#22c55e', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0 auto', fontWeight: '600' }}>2</div>
                  
                  <div style={{ width: '22px', height: '22px', borderRadius: '50%', backgroundColor: '#22c55e', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0 auto', fontWeight: '600' }}>3</div>
                  <div style={{ width: '22px', height: '22px', borderRadius: '50%', backgroundColor: '#22c55e', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0 auto', fontWeight: '600' }}>4</div>
                  <div style={{ width: '22px', height: '22px', borderRadius: '50%', backgroundColor: '#22c55e', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0 auto', fontWeight: '600' }}>5</div>
                  <div style={{ width: '22px', height: '22px', borderRadius: '50%', backgroundColor: '#22c55e', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0 auto', fontWeight: '600' }}>6</div>
                  <div style={{ width: '22px', height: '22px', borderRadius: '50%', backgroundColor: '#22c55e', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0 auto', fontWeight: '600' }}>7</div>
                  <div style={{ width: '22px', height: '22px', borderRadius: '50%', backgroundColor: '#22c55e', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0 auto', fontWeight: '600' }}>8</div>
                  <div style={{ width: '22px', height: '22px', borderRadius: '50%', backgroundColor: '#22c55e', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0 auto', fontWeight: '600' }}>9</div>

                  <div style={{ width: '22px', height: '22px', borderRadius: '50%', backgroundColor: '#22c55e', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0 auto', fontWeight: '600' }}>10</div>
                  <div style={{ width: '22px', height: '22px', borderRadius: '50%', backgroundColor: '#22c55e', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0 auto', fontWeight: '600' }}>11</div>
                  <div style={{ width: '22px', height: '22px', borderRadius: '50%', backgroundColor: '#22c55e', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0 auto', fontWeight: '600' }}>12</div>
                  <div style={{ width: '22px', height: '22px', borderRadius: '50%', backgroundColor: '#93c5fd', color: '#1e3a8a', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0 auto', fontWeight: '600' }}>13</div>
                  <div style={{ width: '22px', height: '22px', borderRadius: '50%', backgroundColor: '#93c5fd', color: '#1e3a8a', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0 auto', fontWeight: '600' }}>14</div>
                  <div style={{ width: '22px', height: '22px', borderRadius: '50%', border: '1px solid #cbd5e1', color: '#475569', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0 auto', fontWeight: '600' }}>15</div>
                  <div style={{ width: '22px', height: '22px', borderRadius: '50%', border: '1px solid #cbd5e1', color: '#475569', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0 auto', fontWeight: '600' }}>16</div>

                  <div>17</div><div>18</div><div>19</div><div>20</div><div>21</div><div>22</div><div>23</div>
                  <div>24</div><div>25</div><div>26</div><div>27</div><div>28</div><div>29</div><div>30</div>
                  <div>31</div><div style={{ color: '#cbd5e1' }}>1</div><div style={{ color: '#cbd5e1' }}>2</div><div style={{ color: '#cbd5e1' }}>3</div><div style={{ color: '#cbd5e1' }}>4</div><div style={{ color: '#cbd5e1' }}>5</div><div style={{ color: '#cbd5e1' }}>6</div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginTop: '20px', fontSize: '9px', color: '#475569' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><div style={{ width: '8px', height: '8px', backgroundColor: '#22c55e', borderRadius: '50%' }}></div> Studied</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><div style={{ width: '8px', height: '8px', backgroundColor: '#93c5fd', borderRadius: '50%' }}></div> Partial</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><div style={{ width: '8px', height: '8px', border: '1px solid #cbd5e1', borderRadius: '50%' }}></div> No Study</div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Footer */}
        <div style={{ padding: '20px 30px', backgroundColor: 'white', borderTop: '1px solid #e2e8f0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '12px', color: '#64748b' }}>
          <div>© 2026 CGLPrep AI. All rights reserved.</div>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '30px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <i className="fas fa-users" style={{ color: '#2563eb', fontSize: '20px' }}></i>
              <div style={{ lineHeight: '1.2' }}>
                <div style={{ fontWeight: '700', color: '#0f172a' }}>10,000+</div>
                <div style={{ fontSize: '10px' }}>Students Trust Us</div>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <i className="fas fa-trophy" style={{ color: '#fbbf24', fontSize: '20px' }}></i>
              <div style={{ lineHeight: '1.2' }}>
                <div style={{ fontWeight: '700', color: '#0f172a' }}>95%</div>
                <div style={{ fontSize: '10px' }}>Parent Satisfaction</div>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <i className="fas fa-star" style={{ color: '#3b82f6', fontSize: '20px' }}></i>
              <div style={{ lineHeight: '1.2' }}>
                <div style={{ fontWeight: '700', color: '#0f172a' }}>4.8/5</div>
                <div style={{ fontSize: '10px' }}>Platform Rating</div>
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <span style={{ fontWeight: '600', color: '#1e3a8a', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <i className="fas fa-flag" style={{ color: '#ff9933' }}></i> Made for India's Aspirants <i className="fas fa-heart" style={{ color: '#ef4444' }}></i>
            </span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ParentStudyActivityPage;
