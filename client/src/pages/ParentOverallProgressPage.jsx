import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import ParentSidebar from '../components/ParentSidebar';
import { AuthContext } from '../context/AuthContext';

const ParentOverallProgressPage = () => {
  const { user } = useContext(AuthContext);
  const studentName = user?.studentName || 'your child';
  const parentName = user?.name || 'Parent';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ display: 'flex', minHeight: '100vh', fontFamily: "'Inter', sans-serif", backgroundColor: '#f1f5f9' }}>
      
      {/* Sidebar */}
      <ParentSidebar activeTab="overall-progress" />

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
                <h3 style={{ margin: 0, fontSize: '14px', fontWeight: '800', color: '#1e3a8a' }}>{parentName}</h3>
                <p style={{ margin: 0, fontSize: '10px', color: '#94a3b8' }}>({studentName}'s Parent)</p>
              </div>
              <i className="fas fa-chevron-down" style={{ fontSize: '12px', color: '#94a3b8' }}></i>
            </div>
          </div>
        </div>

        {/* Dashboard Content */}
        <div style={{ padding: '30px', flex: 1, overflowY: 'auto' }}>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '12px', color: '#64748b', marginBottom: '15px' }}>
            <Link to="/parent-dashboard" style={{ color: '#2563eb', textDecoration: 'none' }}><i className="fas fa-chevron-left" style={{ fontSize: '10px', marginRight: '5px' }}></i> Dashboard</Link>
            <i className="fas fa-chevron-right" style={{ fontSize: '10px', margin: '0 5px' }}></i> Overall Progress
          </div>

          {/* Header Row */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '25px' }}>
            <div>
              <h2 style={{ margin: '0 0 5px', fontSize: '28px', fontWeight: '800', color: '#0f172a' }}>Overall Progress</h2>
              <p style={{ margin: 0, fontSize: '15px', color: '#475569' }}>A complete view of {studentName}'s SSC CGL preparation journey.</p>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
               <div style={{ display: 'flex', alignItems: 'center', gap: '10px', backgroundColor: 'white', padding: '10px 15px', borderRadius: '8px', border: '1px solid #cbd5e1', color: '#0f172a', fontWeight: '600', fontSize: '14px', cursor: 'pointer' }}>
                 <i className="far fa-calendar-alt" style={{ color: '#64748b' }}></i> Last 3 Months <i className="fas fa-chevron-down" style={{ color: '#2563eb', marginLeft: '10px' }}></i>
               </div>
               <div style={{ backgroundColor: '#f0fdf4', padding: '12px 20px', borderRadius: '12px', border: '1px solid #bbf7d0', textAlign: 'center', transform: 'rotate(-2deg)' }}>
                  <p style={{ fontFamily: "'Caveat', cursive", fontSize: '18px', color: '#166534', margin: '0 0 5px', lineHeight: '1.2' }}>"Progress today.<br/>Success tomorrow."</p>
                  <div style={{ height: '2px', width: '30px', background: 'linear-gradient(90deg, #ff9933 33.3%, #ffffff 33.3%, #ffffff 66.6%, #138808 66.6%)', borderRadius: '2px', margin: '0 auto' }}></div>
               </div>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '25px' }}>
            
            {/* Left Main Column (70%) */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '20px' }}>
              
              {/* Stats Row */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '15px' }}>
                <div style={{ backgroundColor: 'white', padding: '15px', borderRadius: '12px', border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', gap: '15px' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '8px', backgroundColor: '#eff6ff', color: '#2563eb', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '18px' }}><i className="fas fa-bullseye"></i></div>
                  <div>
                    <p style={{ margin: '0 0 3px', fontSize: '11px', color: '#64748b' }}>CGL Readiness Score <i className="far fa-question-circle"></i></p>
                    <h4 style={{ margin: '0 0 3px', fontSize: '18px', fontWeight: '800', color: '#0f172a' }}>68 <span style={{ fontSize: '12px', color: '#64748b', fontWeight: '500' }}>/100</span></h4>
                    <p style={{ margin: 0, fontSize: '10px', color: '#16a34a', fontWeight: '600' }}><i className="fas fa-arrow-up"></i> 12% <span style={{ color: '#94a3b8' }}>vs last month</span></p>
                  </div>
                </div>
                <div style={{ backgroundColor: 'white', padding: '15px', borderRadius: '12px', border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', gap: '15px' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '8px', backgroundColor: '#f3e8ff', color: '#a855f7', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '18px' }}><i className="fas fa-chart-bar"></i></div>
                  <div>
                    <p style={{ margin: '0 0 3px', fontSize: '11px', color: '#64748b' }}>Tests Attempted</p>
                    <h4 style={{ margin: '0 0 3px', fontSize: '18px', fontWeight: '800', color: '#0f172a' }}>24</h4>
                    <p style={{ margin: 0, fontSize: '10px', color: '#16a34a', fontWeight: '600' }}>+6 this month</p>
                  </div>
                </div>
                <div style={{ backgroundColor: 'white', padding: '15px', borderRadius: '12px', border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', gap: '15px' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '8px', backgroundColor: '#dcfce7', color: '#16a34a', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '18px' }}><i className="fas fa-list-ul"></i></div>
                  <div>
                    <p style={{ margin: '0 0 3px', fontSize: '11px', color: '#64748b' }}>Questions Solved</p>
                    <h4 style={{ margin: '0 0 3px', fontSize: '18px', fontWeight: '800', color: '#0f172a' }}>1,250</h4>
                    <p style={{ margin: 0, fontSize: '10px', color: '#16a34a', fontWeight: '600' }}>+320 this month</p>
                  </div>
                </div>
                <div style={{ backgroundColor: 'white', padding: '15px', borderRadius: '12px', border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', gap: '15px' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '8px', backgroundColor: '#ffe4e6', color: '#e11d48', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '18px' }}><i className="fas fa-crosshairs"></i></div>
                  <div>
                    <p style={{ margin: '0 0 3px', fontSize: '11px', color: '#64748b' }}>Accuracy Rate</p>
                    <h4 style={{ margin: '0 0 3px', fontSize: '18px', fontWeight: '800', color: '#0f172a' }}>78%</h4>
                    <p style={{ margin: 0, fontSize: '10px', color: '#16a34a', fontWeight: '600' }}>+5% this month</p>
                  </div>
                </div>
                <div style={{ backgroundColor: 'white', padding: '15px', borderRadius: '12px', border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', gap: '15px' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '8px', backgroundColor: '#ffedd5', color: '#f97316', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '18px' }}><i className="fas fa-fire"></i></div>
                  <div>
                    <p style={{ margin: '0 0 3px', fontSize: '11px', color: '#64748b' }}>Study Streak</p>
                    <h4 style={{ margin: '0 0 3px', fontSize: '18px', fontWeight: '800', color: '#0f172a' }}>12 Days</h4>
                    <p style={{ margin: 0, fontSize: '10px', color: '#64748b' }}>Best: 18 Days</p>
                  </div>
                </div>
              </div>

              {/* Main Chart Card */}
              <div style={{ backgroundColor: 'white', padding: '25px', borderRadius: '16px', border: '1px solid #e2e8f0', display: 'flex', gap: '20px' }}>
                <div style={{ flex: 2 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '25px' }}>
                    <h3 style={{ margin: 0, fontSize: '16px', fontWeight: '700', color: '#0f172a', display: 'flex', alignItems: 'center', gap: '8px' }}><i className="fas fa-chart-area" style={{ color: '#2563eb' }}></i> Readiness Progress Trend</h3>
                    <div style={{ display: 'flex', gap: '5px', backgroundColor: '#f1f5f9', padding: '4px', borderRadius: '6px' }}>
                      <button style={{ padding: '6px 12px', fontSize: '11px', border: 'none', backgroundColor: 'transparent', borderRadius: '4px', color: '#64748b', cursor: 'pointer' }}>Last 7 Days</button>
                      <button style={{ padding: '6px 12px', fontSize: '11px', border: 'none', backgroundColor: 'transparent', borderRadius: '4px', color: '#64748b', cursor: 'pointer' }}>Last 30 Days</button>
                      <button style={{ padding: '6px 12px', fontSize: '11px', border: 'none', backgroundColor: '#bfdbfe', borderRadius: '4px', color: '#1e3a8a', fontWeight: '600', cursor: 'pointer' }}>Last 3 Months</button>
                      <button style={{ padding: '6px 12px', fontSize: '11px', border: 'none', backgroundColor: 'transparent', borderRadius: '4px', color: '#64748b', cursor: 'pointer' }}>Last 6 Months</button>
                    </div>
                  </div>
                  
                  <div style={{ display: 'flex', gap: '20px', marginBottom: '15px', fontSize: '11px', color: '#64748b' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><div style={{ width: '10px', height: '10px', backgroundColor: '#2563eb', borderRadius: '2px' }}></div> Your Child's Score</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><div style={{ width: '10px', height: '10px', border: '1px dashed #cbd5e1', borderRadius: '2px' }}></div> Target Score</div>
                  </div>

                  {/* Mock Area Chart */}
                  <div style={{ height: '220px', position: 'relative', borderBottom: '1px solid #e2e8f0', borderLeft: '1px solid #e2e8f0', padding: '10px 0 0 10px' }}>
                    {/* Y Axis Labels */}
                    <div style={{ position: 'absolute', left: '-25px', top: 0, bottom: 0, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', fontSize: '10px', color: '#94a3b8' }}>
                      <span>100</span><span>80</span><span>60</span><span>40</span><span>20</span><span>0</span>
                    </div>

                    <div style={{ position: 'absolute', bottom: '0', left: '10px', right: '10px', height: '100%', background: 'linear-gradient(to top, rgba(37,99,235,0.2) 0%, rgba(255,255,255,0) 100%)', clipPath: 'polygon(0% 60%, 25% 55%, 50% 45%, 75% 42%, 100% 32%, 100% 100%, 0% 100%)' }}></div>
                    
                    <svg viewBox="0 0 500 100" style={{ width: '100%', height: '100%', overflow: 'visible', position: 'relative', zIndex: 2 }}>
                       {/* Target Line */}
                       <line x1="0" y1="15" x2="500" y2="15" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="5,5" />
                       {/* Target Points */}
                       {[0, 125, 250, 375, 500].map((x, i) => <circle key={i} cx={x} cy="15" r="3" fill="#cbd5e1" />)}

                       {/* Actual Line */}
                       <polyline fill="none" stroke="#2563eb" strokeWidth="3" points="0,60 125,55 250,45 375,42 500,32" />
                       {[0, 125, 250, 375].map((x, i) => (
                         <circle key={i} cx={x} cy={[60, 55, 45, 42][i]} r="4" fill="white" stroke="#2563eb" strokeWidth="2" />
                       ))}
                       {/* Last Point with Tooltip */}
                       <circle cx="500" cy="32" r="5" fill="#2563eb" stroke="white" strokeWidth="2" />
                       
                       <foreignObject x="400" y="5" width="100" height="60">
                         <div style={{ backgroundColor: 'white', border: '1px solid #cbd5e1', borderRadius: '8px', padding: '8px', fontSize: '10px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}>
                           <p style={{ margin: '0 0 5px', fontWeight: '600', color: '#0f172a' }}>12 Aug 2026</p>
                           <div style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#1e3a8a', marginBottom: '2px' }}><div style={{ width: '6px', height: '6px', backgroundColor: '#2563eb', borderRadius: '50%' }}></div> Score: 68</div>
                           <div style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#64748b' }}><div style={{ width: '6px', height: '6px', border: '1px solid #cbd5e1', borderRadius: '50%' }}></div> Target: 85</div>
                         </div>
                       </foreignObject>
                    </svg>
                  </div>
                  {/* X Axis Labels */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', paddingLeft: '10px', marginTop: '10px', fontSize: '11px', color: '#475569' }}>
                    <span>May '26</span><span>Jun '26</span><span>Jul '26</span><span>Aug '26</span>
                  </div>
                </div>

                {/* Right side Info panels */}
                <div style={{ flex: 0.8, display: 'flex', flexDirection: 'column', gap: '15px' }}>
                   <div style={{ flex: 1, backgroundColor: '#f0fdf4', borderRadius: '12px', border: '1px solid #bbf7d0', padding: '20px', display: 'flex', gap: '15px' }}>
                     <i className="fas fa-trophy" style={{ fontSize: '32px', color: '#fbbf24' }}></i>
                     <div style={{ flex: 1 }}>
                       <h4 style={{ margin: '0 0 5px', fontSize: '16px', fontWeight: '700', color: '#15803d' }}>Excellent Growth</h4>
                       <p style={{ margin: 0, fontSize: '12px', color: '#15803d', lineHeight: '1.4' }}>{studentName}'s readiness score has improved by 12% in the last month. Keep supporting their journey!</p>
                     </div>
                   </div>
                   <div style={{ backgroundColor: '#f8fafc', borderRadius: '12px', border: '1px solid #e2e8f0', padding: '20px', display: 'flex', gap: '15px', alignItems: 'center' }}>
                     <i className="fas fa-chart-bar" style={{ fontSize: '32px', color: '#22c55e' }}></i>
                     <div>
                        <p style={{ fontFamily: "'Caveat', cursive", fontSize: '20px', color: '#1e3a8a', margin: '0 0 5px', lineHeight: '1.2', transform: 'rotate(-2deg)' }}>"Discipline today,<br/>a brighter tomorrow."</p>
                        <div style={{ height: '2px', width: '30px', background: 'linear-gradient(90deg, #ff9933 33.3%, #ffffff 33.3%, #ffffff 66.6%, #138808 66.6%)', borderRadius: '2px' }}></div>
                     </div>
                   </div>
                </div>
              </div>

              {/* Middle Row */}
              <div style={{ display: 'flex', gap: '20px' }}>
                {/* Subject-wise Progress */}
                <div style={{ flex: 1.5, backgroundColor: 'white', padding: '20px', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
                  <h3 style={{ margin: '0 0 20px', fontSize: '15px', fontWeight: '700', color: '#0f172a', display: 'flex', alignItems: 'center', gap: '8px' }}><i className="fas fa-tasks" style={{ color: '#2563eb' }}></i> Subject-wise Progress</h3>
                  
                  <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '15px', fontSize: '11px', color: '#64748b' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><div style={{ width: '10px', height: '10px', backgroundColor: '#2563eb', borderRadius: '2px' }}></div> Current Score</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><div style={{ width: '10px', height: '10px', backgroundColor: '#e2e8f0', borderRadius: '2px' }}></div> Target Score</div>
                  </div>
                  
                  {/* Mock Bar Chart */}
                  <div style={{ height: '140px', position: 'relative', borderBottom: '1px solid #e2e8f0', borderLeft: '1px solid #e2e8f0', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-around', paddingLeft: '10px' }}>
                     {/* Y Axis Labels */}
                     <div style={{ position: 'absolute', left: '-25px', top: 0, bottom: 0, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', fontSize: '10px', color: '#94a3b8' }}>
                      <span>100</span><span>80</span><span>60</span><span>40</span><span>20</span><span>0</span>
                     </div>
                     
                     {/* Bars */}
                     {[{name: 'Quant', s: 72, t: 85}, {name: 'Reasoning', s: 66, t: 85}, {name: 'English', s: 61, t: 80}, {name: 'GA', s: 58, t: 80}].map(sub => (
                       <div key={sub.name} style={{ display: 'flex', gap: '5px', alignItems: 'flex-end', height: '100%', paddingBottom: '1px' }}>
                         <div style={{ width: '25px', height: `${sub.s}%`, backgroundColor: '#2563eb', borderTopLeftRadius: '4px', borderTopRightRadius: '4px', position: 'relative', display: 'flex', justifyContent: 'center' }}>
                            <span style={{ position: 'absolute', top: '-18px', fontSize: '11px', fontWeight: '700', color: '#0f172a' }}>{sub.s}</span>
                         </div>
                         <div style={{ width: '25px', height: `${sub.t}%`, backgroundColor: '#e2e8f0', borderTopLeftRadius: '4px', borderTopRightRadius: '4px', position: 'relative', display: 'flex', justifyContent: 'center' }}>
                            <span style={{ position: 'absolute', top: '-18px', fontSize: '11px', fontWeight: '600', color: '#64748b' }}>{sub.t}</span>
                         </div>
                       </div>
                     ))}
                  </div>
                  {/* X Axis Labels */}
                  <div style={{ display: 'flex', justifyContent: 'space-around', paddingLeft: '10px', marginTop: '10px', fontSize: '11px', color: '#475569', fontWeight: '600' }}>
                    <span style={{ width: '55px', textAlign: 'center' }}>Quant</span>
                    <span style={{ width: '55px', textAlign: 'center' }}>Reasoning</span>
                    <span style={{ width: '55px', textAlign: 'center' }}>English</span>
                    <span style={{ width: '55px', textAlign: 'center' }}>GA</span>
                  </div>
                </div>

                {/* Topic Completion */}
                <div style={{ flex: 1, backgroundColor: 'white', padding: '20px', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
                   <h3 style={{ margin: '0 0 20px', fontSize: '15px', fontWeight: '700', color: '#0f172a', display: 'flex', alignItems: 'center', gap: '8px' }}><i className="fas fa-graduation-cap" style={{ color: '#2563eb' }}></i> Topic Completion</h3>
                   
                   <div style={{ display: 'flex', alignItems: 'center', gap: '20px', height: '150px' }}>
                     {/* Donut Chart */}
                     <div style={{ position: 'relative', width: '120px', height: '120px', borderRadius: '50%', background: 'conic-gradient(#16a34a 62%, #2563eb 62% 86%, #fbbf24 86% 100%)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                       <div style={{ width: '90px', height: '90px', backgroundColor: 'white', borderRadius: '50%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                         <span style={{ fontSize: '24px', fontWeight: '800', color: '#0f172a', lineHeight: '1' }}>62%</span>
                         <span style={{ fontSize: '10px', color: '#64748b' }}>Completed</span>
                       </div>
                     </div>

                     {/* Legend */}
                     <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '15px' }}>
                       <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                         <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><div style={{ width: '10px', height: '10px', backgroundColor: '#16a34a', borderRadius: '50%' }}></div><span style={{ fontSize: '12px', color: '#475569' }}>Completed</span></div>
                         <span style={{ fontSize: '13px', fontWeight: '700', color: '#0f172a' }}>124</span>
                       </div>
                       <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                         <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><div style={{ width: '10px', height: '10px', backgroundColor: '#2563eb', borderRadius: '50%' }}></div><span style={{ fontSize: '12px', color: '#475569' }}>In Progress</span></div>
                         <span style={{ fontSize: '13px', fontWeight: '700', color: '#0f172a' }}>48</span>
                       </div>
                       <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                         <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><div style={{ width: '10px', height: '10px', backgroundColor: '#fbbf24', borderRadius: '50%' }}></div><span style={{ fontSize: '12px', color: '#475569' }}>Not Started</span></div>
                         <span style={{ fontSize: '13px', fontWeight: '700', color: '#0f172a' }}>28</span>
                       </div>
                     </div>
                   </div>
                   <div style={{ textAlign: 'center', marginTop: '10px', fontSize: '12px', color: '#64748b', fontWeight: '500' }}>
                     124 / 200 Topics Completed
                   </div>
                </div>
              </div>

              {/* Bottom AI Summary Row */}
              <div style={{ display: 'flex', gap: '20px' }}>
                <div style={{ flex: 1.2, backgroundColor: 'white', padding: '20px', borderRadius: '16px', border: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column' }}>
                  <h3 style={{ margin: '0 0 15px', fontSize: '15px', fontWeight: '700', color: '#0f172a', display: 'flex', alignItems: 'center', gap: '8px' }}><i className="fas fa-shield-alt" style={{ color: '#2563eb' }}></i> AI Summary</h3>
                  <div style={{ flex: 1, backgroundColor: '#f0f9ff', padding: '15px 20px', borderRadius: '12px', border: '1px solid #bae6fd', display: 'flex', alignItems: 'center', gap: '15px' }}>
                    <div style={{ display: 'flex', gap: '15px', alignItems: 'flex-start', flex: 1 }}>
                      <i className="fas fa-robot" style={{ fontSize: '24px', color: '#1e3a8a', marginTop: '5px' }}></i>
                      <p style={{ margin: 0, fontSize: '13px', color: '#1e3a8a', lineHeight: '1.5', flex: 1 }}>{studentName} is showing consistent improvement. Their strong performance in Quantitative Aptitude is a positive sign. Focus more on General Awareness and English to reach the target score.</p>
                    </div>
                    <i className="fas fa-chevron-right" style={{ color: '#38bdf8' }}></i>
                  </div>
                </div>

                <div style={{ flex: 1, backgroundColor: 'white', padding: '20px', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
                  <h3 style={{ margin: '0 0 15px', fontSize: '15px', fontWeight: '700', color: '#0f172a', display: 'flex', alignItems: 'center', gap: '8px' }}><i className="fas fa-bullseye" style={{ color: '#ef4444' }}></i> Next Focus Areas</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                      <i className="fas fa-bullseye" style={{ color: '#fbbf24', marginTop: '2px', fontSize: '14px' }}></i>
                      <p style={{ margin: 0, fontSize: '12px', color: '#475569' }}>Improve accuracy in General Awareness</p>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                      <i className="fas fa-bullseye" style={{ color: '#fbbf24', marginTop: '2px', fontSize: '14px' }}></i>
                      <p style={{ margin: 0, fontSize: '12px', color: '#475569' }}>Practice more Previous Year Papers</p>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                      <i className="fas fa-bullseye" style={{ color: '#fbbf24', marginTop: '2px', fontSize: '14px' }}></i>
                      <p style={{ margin: 0, fontSize: '12px', color: '#475569' }}>Revise English vocabulary and grammar</p>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                      <i className="fas fa-bullseye" style={{ color: '#fbbf24', marginTop: '2px', fontSize: '14px' }}></i>
                      <p style={{ margin: 0, fontSize: '12px', color: '#475569' }}>Attempt full-length mock tests regularly</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Sidebar Column (30%) */}
            <div style={{ width: '320px', display: 'flex', flexDirection: 'column', gap: '20px', flexShrink: 0 }}>
              
              {/* Exam Goal */}
              <div style={{ backgroundColor: 'white', padding: '25px', borderRadius: '16px', border: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ margin: '0 0 20px', fontSize: '16px', fontWeight: '700', color: '#0f172a', display: 'flex', alignItems: 'center', gap: '8px' }}><i className="fas fa-cog" style={{ color: '#2563eb' }}></i> Exam Goal</h3>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '15px', marginBottom: '25px' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#eff6ff', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#2563eb', fontSize: '20px' }}>
                    <i className="fas fa-bullseye"></i>
                  </div>
                  <div>
                    <h4 style={{ margin: '0 0 5px', fontSize: '16px', fontWeight: '800', color: '#0f172a' }}>SSC CGL 2026</h4>
                    <p style={{ margin: 0, fontSize: '12px', color: '#64748b' }}>Tier I + Tier II + Tier III</p>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '15px' }}>
                  <div style={{ flex: 1, borderRight: '1px solid #e2e8f0' }}>
                    <p style={{ margin: '0 0 5px', fontSize: '11px', color: '#64748b' }}>Target Exam Date</p>
                    <p style={{ margin: 0, fontSize: '14px', fontWeight: '700', color: '#0f172a', display: 'flex', alignItems: 'center', gap: '5px' }}><i className="far fa-calendar-alt"></i> Aug 2026</p>
                  </div>
                  <div style={{ flex: 1 }}>
                    <p style={{ margin: '0 0 5px', fontSize: '11px', color: '#64748b' }}>Days Left</p>
                    <p style={{ margin: 0, fontSize: '14px', fontWeight: '700', color: '#0f172a', display: 'flex', alignItems: 'center', gap: '5px' }}><i className="fas fa-hourglass-half"></i> 348 Days</p>
                  </div>
                </div>
              </div>

              {/* Graphic Card */}
              <div style={{ backgroundColor: 'white', borderRadius: '16px', border: '1px solid #e2e8f0', overflow: 'hidden', position: 'relative', height: '180px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(to bottom, #e0f2fe, #f0f9ff)', zIndex: 0 }}></div>
                
                {/* SVG Mountains Placeholder */}
                <svg viewBox="0 0 100 100" preserveAspectRatio="none" style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '80%', zIndex: 1 }}>
                  <path d="M0,100 L0,40 L25,70 L50,20 L75,60 L100,30 L100,100 Z" fill="#94a3b8" opacity="0.5" />
                  <path d="M0,100 L0,50 L30,80 L60,30 L80,50 L100,10 L100,100 Z" fill="#2563eb" opacity="0.8" />
                  <circle cx="80" cy="20" r="8" fill="#fbbf24" opacity="0.5"/>
                  <circle cx="80" cy="20" r="5" fill="#fbbf24" />
                  <path d="M60,30 L60,10 L70,15 L60,20 Z" fill="#1e3a8a" />
                </svg>

                <div style={{ position: 'relative', zIndex: 2, padding: '20px', marginTop: '-30px' }}>
                  <p style={{ fontFamily: "'Caveat', cursive", fontSize: '24px', color: '#1e3a8a', margin: 0, lineHeight: '1.2', transform: 'rotate(-5deg)' }}>"Big dreams<br/>need consistent<br/>effort."</p>
                  <div style={{ height: '3px', width: '40px', background: 'linear-gradient(90deg, #ff9933 33.3%, #ffffff 33.3%, #ffffff 66.6%, #138808 66.6%)', borderRadius: '2px', transform: 'rotate(-5deg)' }}></div>
                </div>
              </div>

              {/* Recent Milestones */}
              <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                  <h3 style={{ margin: 0, fontSize: '15px', fontWeight: '700', color: '#0f172a', display: 'flex', alignItems: 'center', gap: '8px' }}><i className="fas fa-medal" style={{ color: '#2563eb' }}></i> Recent Milestones</h3>
                  <a href="#" style={{ fontSize: '12px', color: '#2563eb', textDecoration: 'none', fontWeight: '600' }}>View All</a>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                  <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: '#dcfce7', color: '#16a34a', display: 'flex', justifyContent: 'center', alignItems: 'center', flexShrink: 0, fontSize: '14px' }}><i className="fas fa-chart-line"></i></div>
                    <div>
                      <p style={{ margin: '0 0 3px', fontSize: '13px', color: '#0f172a', fontWeight: '500' }}>Readiness score improved to 68</p>
                      <p style={{ margin: 0, fontSize: '11px', color: '#64748b' }}>2 days ago</p>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: '#f3e8ff', color: '#9333ea', display: 'flex', justifyContent: 'center', alignItems: 'center', flexShrink: 0, fontSize: '14px' }}><i className="fas fa-trophy"></i></div>
                    <div>
                      <p style={{ margin: '0 0 3px', fontSize: '13px', color: '#0f172a', fontWeight: '500' }}>Completed 5 mock tests</p>
                      <p style={{ margin: 0, fontSize: '11px', color: '#64748b' }}>4 days ago</p>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: '#ffedd5', color: '#ea580c', display: 'flex', justifyContent: 'center', alignItems: 'center', flexShrink: 0, fontSize: '14px' }}><i className="fas fa-award"></i></div>
                    <div>
                      <p style={{ margin: '0 0 3px', fontSize: '13px', color: '#0f172a', fontWeight: '500' }}>Finished Static GK module</p>
                      <p style={{ margin: 0, fontSize: '11px', color: '#64748b' }}>6 days ago</p>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: '#ffe4e6', color: '#e11d48', display: 'flex', justifyContent: 'center', alignItems: 'center', flexShrink: 0, fontSize: '14px' }}><i className="fas fa-bullseye"></i></div>
                    <div>
                      <p style={{ margin: '0 0 3px', fontSize: '13px', color: '#0f172a', fontWeight: '500' }}>Accuracy improved to 78%</p>
                      <p style={{ margin: 0, fontSize: '11px', color: '#64748b' }}>1 week ago</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
                <h3 style={{ margin: '0 0 15px', fontSize: '15px', fontWeight: '700', color: '#0f172a', display: 'flex', alignItems: 'center', gap: '8px' }}><i className="fas fa-bolt" style={{ color: '#2563eb' }}></i> Quick Actions</h3>
                
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', gap: '8px', padding: '12px 5px', border: '1px solid #e2e8f0', borderRadius: '12px', cursor: 'pointer', backgroundColor: '#f8fafc' }}>
                    <i className="fas fa-file-download" style={{ fontSize: '18px', color: '#2563eb' }}></i>
                    <span style={{ fontSize: '10px', color: '#0f172a', fontWeight: '600', textAlign: 'center', lineHeight: '1.2' }}>Download<br/>Progress Report</span>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', gap: '8px', padding: '12px 5px', border: '1px solid #e2e8f0', borderRadius: '12px', cursor: 'pointer', backgroundColor: '#f8fafc' }}>
                    <i className="fas fa-calendar-alt" style={{ fontSize: '18px', color: '#2563eb' }}></i>
                    <span style={{ fontSize: '10px', color: '#0f172a', fontWeight: '600', textAlign: 'center', lineHeight: '1.2' }}>View Study<br/>Plan</span>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', gap: '8px', padding: '12px 5px', border: '1px solid #e2e8f0', borderRadius: '12px', cursor: 'pointer', backgroundColor: '#f8fafc' }}>
                    <i className="fas fa-video" style={{ fontSize: '18px', color: '#2563eb' }}></i>
                    <span style={{ fontSize: '10px', color: '#0f172a', fontWeight: '600', textAlign: 'center', lineHeight: '1.2' }}>Schedule<br/>Parent-Teacher Call</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Footer */}
        <div style={{ padding: '20px 30px', backgroundColor: 'white', borderTop: '1px solid #e2e8f0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '12px', color: '#64748b' }}>
          <div>© 2026 CGLPrep AI. All rights reserved.</div>
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

export default ParentOverallProgressPage;
