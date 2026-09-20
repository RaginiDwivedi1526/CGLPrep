import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import ParentSidebar from '../components/ParentSidebar';
import { AuthContext } from '../context/AuthContext';

const ParentDashboardPage = () => {
  const { user } = useContext(AuthContext);
  const studentName = user?.studentName || 'your child';
  const parentName = user?.name || 'Parent';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ display: 'flex', minHeight: '100vh', fontFamily: "'Inter', sans-serif", backgroundColor: '#f1f5f9' }}>
      
      {/* Sidebar */}
      <ParentSidebar activeTab="dashboard" />

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
          
          {/* Header Row */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '25px' }}>
            <div>
              <h2 style={{ color: '#0f172a', fontSize: '28px', fontWeight: '800', margin: '0 0 5px' }}>Overview Dashboard</h2>
              <p style={{ margin: 0, fontSize: '15px', color: '#475569' }}>Here's how {studentName} is progressing in their SSC CGL journey.</p>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
               <div style={{ backgroundColor: '#f0f9ff', padding: '12px 20px', borderRadius: '12px', border: '1px solid #bae6fd', textAlign: 'center', transform: 'rotate(-2deg)' }}>
                  <p style={{ fontFamily: "'Caveat', cursive", fontSize: '18px', color: '#1e3a8a', margin: '0 0 5px', lineHeight: '1.2' }}>"Discipline today,<br/>a brighter tomorrow."</p>
                  <p style={{ margin: 0, fontSize: '11px', color: '#475569', fontWeight: '600' }}>- For a better future</p>
               </div>
               <div style={{ display: 'flex', alignItems: 'center', gap: '10px', backgroundColor: 'white', padding: '10px 15px', borderRadius: '10px', border: '1px solid #e2e8f0', color: '#0f172a', fontWeight: '600', fontSize: '14px' }}>
                 <i className="far fa-calendar-alt" style={{ color: '#2563eb' }}></i> Tue, 12 Aug 2026
               </div>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '25px' }}>
            
            {/* Left Main Column (70%) */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '25px' }}>
              
              {/* Top Cards Row */}
              <div style={{ display: 'flex', gap: '25px' }}>
                {/* Readiness Card */}
                <div style={{ flex: 2, backgroundColor: 'white', padding: '25px', borderRadius: '16px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)', border: '1px solid #e2e8f0' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                    <h3 style={{ margin: 0, fontSize: '16px', fontWeight: '700', color: '#0f172a', display: 'flex', alignItems: 'center', gap: '8px' }}>Your Child's CGL Preparation Readiness <i className="far fa-question-circle" style={{ color: '#94a3b8', fontSize: '14px' }}></i></h3>
                    <div style={{ fontSize: '12px', fontWeight: '600', color: '#475569', display: 'flex', alignItems: 'center', gap: '5px' }}>
                      <i className="fas fa-bullseye" style={{ color: '#ef4444' }}></i> Target: 85+ by Dec 2026
                    </div>
                  </div>
                  
                  <div style={{ display: 'flex', alignItems: 'center', gap: '30px' }}>
                    <div style={{ position: 'relative', width: '120px', height: '120px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '50%', background: 'conic-gradient(#10b981 68%, #f1f5f9 0)' }}>
                      <div style={{ position: 'absolute', width: '100px', height: '100px', backgroundColor: 'white', borderRadius: '50%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <span style={{ fontSize: '32px', fontWeight: '800', color: '#0f172a', lineHeight: '1' }}>68</span>
                        <span style={{ fontSize: '12px', color: '#64748b' }}>/100</span>
                      </div>
                    </div>
                    
                    <div style={{ flex: 1 }}>
                      <h4 style={{ margin: '0 0 5px', fontSize: '16px', fontWeight: '700', color: '#166534' }}>Good Progress!</h4>
                      <p style={{ margin: '0 0 10px', fontSize: '13px', color: '#475569', lineHeight: '1.4' }}>{studentName} is on the right track. Keep supporting their journey!</p>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#16a34a', fontSize: '14px', fontWeight: '700' }}>
                        <i className="fas fa-arrow-up"></i> 12% <span style={{ color: '#94a3b8', fontSize: '11px', fontWeight: '500' }}>vs last month</span>
                      </div>
                    </div>

                    <div style={{ flex: 1.2, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                      {[{n: 'Quantitative Aptitude', v: 72, c: '#2563eb'}, {n: 'Reasoning', v: 66, c: '#0284c7'}, {n: 'English Language', v: 61, c: '#9333ea'}, {n: 'General Awareness', v: 58, c: '#f59e0b'}].map(s => (
                        <div key={s.n} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                          <span style={{ width: '110px', fontSize: '11px', color: '#475569' }}>{s.n}</span>
                          <div style={{ flex: 1, height: '6px', backgroundColor: '#f1f5f9', borderRadius: '3px', overflow: 'hidden' }}>
                            <div style={{ width: `${s.v}%`, height: '100%', backgroundColor: s.c, borderRadius: '3px' }}></div>
                          </div>
                          <span style={{ fontSize: '12px', fontWeight: '700', color: '#0f172a', width: '20px' }}>{s.v}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Exam Goal Card */}
                <div style={{ flex: 1, backgroundColor: 'white', padding: '25px', borderRadius: '16px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)', border: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                    <h3 style={{ margin: 0, fontSize: '16px', fontWeight: '700', color: '#0f172a', display: 'flex', alignItems: 'center', gap: '8px' }}><i className="fas fa-cog" style={{ color: '#2563eb' }}></i> Exam Goal</h3>
                    <i className="far fa-edit" style={{ color: '#2563eb', cursor: 'pointer' }}></i>
                  </div>
                  
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '15px', marginBottom: '25px' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#eff6ff', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#2563eb', fontSize: '20px' }}>
                      <i className="fas fa-bullseye"></i>
                    </div>
                    <div>
                      <h4 style={{ margin: '0 0 5px', fontSize: '16px', fontWeight: '800', color: '#0f172a' }}>SSC CGL 2026</h4>
                      <p style={{ margin: 0, fontSize: '12px', color: '#64748b' }}>Tier I + Tier II + Tier III</p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '15px', marginTop: 'auto' }}>
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
              </div>

              {/* Stats Row */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '15px' }}>
                <div style={{ backgroundColor: 'white', padding: '15px', borderRadius: '12px', border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', gap: '15px' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '8px', backgroundColor: '#f3e8ff', color: '#9333ea', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '18px' }}><i className="far fa-file-alt"></i></div>
                  <div>
                    <p style={{ margin: '0 0 3px', fontSize: '11px', color: '#64748b' }}>Tests Attempted</p>
                    <h4 style={{ margin: '0 0 3px', fontSize: '18px', fontWeight: '800', color: '#0f172a' }}>24</h4>
                    <p style={{ margin: 0, fontSize: '10px', color: '#16a34a', fontWeight: '600' }}>+6 this week</p>
                  </div>
                </div>
                <div style={{ backgroundColor: 'white', padding: '15px', borderRadius: '12px', border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', gap: '15px' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '8px', backgroundColor: '#dcfce7', color: '#16a34a', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '18px' }}><i className="fas fa-list-ul"></i></div>
                  <div>
                    <p style={{ margin: '0 0 3px', fontSize: '11px', color: '#64748b' }}>Questions Solved</p>
                    <h4 style={{ margin: '0 0 3px', fontSize: '18px', fontWeight: '800', color: '#0f172a' }}>1,250</h4>
                    <p style={{ margin: 0, fontSize: '10px', color: '#16a34a', fontWeight: '600' }}>+320 this week</p>
                  </div>
                </div>
                <div style={{ backgroundColor: 'white', padding: '15px', borderRadius: '12px', border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', gap: '15px' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '8px', backgroundColor: '#ffe4e6', color: '#e11d48', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '18px' }}><i className="fas fa-bullseye"></i></div>
                  <div>
                    <p style={{ margin: '0 0 3px', fontSize: '11px', color: '#64748b' }}>Accuracy Rate</p>
                    <h4 style={{ margin: '0 0 3px', fontSize: '18px', fontWeight: '800', color: '#0f172a' }}>78%</h4>
                    <p style={{ margin: 0, fontSize: '10px', color: '#16a34a', fontWeight: '600' }}>+5% this week</p>
                  </div>
                </div>
                <div style={{ backgroundColor: 'white', padding: '15px', borderRadius: '12px', border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', gap: '15px' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '8px', backgroundColor: '#ffedd5', color: '#ea580c', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '18px' }}><i className="fas fa-fire"></i></div>
                  <div>
                    <p style={{ margin: '0 0 3px', fontSize: '11px', color: '#64748b' }}>Study Streak</p>
                    <h4 style={{ margin: '0 0 3px', fontSize: '18px', fontWeight: '800', color: '#0f172a' }}>12 Days</h4>
                    <p style={{ margin: 0, fontSize: '10px', color: '#16a34a', fontWeight: '600' }}>Keep going!</p>
                  </div>
                </div>
                <div style={{ backgroundColor: 'white', padding: '15px', borderRadius: '12px', border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', gap: '15px' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '8px', backgroundColor: '#e0f2fe', color: '#0284c7', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '18px' }}><i className="fas fa-clock"></i></div>
                  <div>
                    <p style={{ margin: '0 0 3px', fontSize: '11px', color: '#64748b' }}>Total Study Time</p>
                    <h4 style={{ margin: '0 0 3px', fontSize: '18px', fontWeight: '800', color: '#0f172a' }}>36 Hours</h4>
                    <p style={{ margin: 0, fontSize: '10px', color: '#16a34a', fontWeight: '600' }}>+8 this week</p>
                  </div>
                </div>
              </div>

              {/* Charts Row */}
              <div style={{ display: 'flex', gap: '25px' }}>
                <div style={{ flex: 1, backgroundColor: 'white', padding: '20px', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                    <h3 style={{ margin: 0, fontSize: '15px', fontWeight: '700', color: '#0f172a', display: 'flex', alignItems: 'center', gap: '8px' }}><i className="fas fa-chart-line" style={{ color: '#2563eb' }}></i> Preparation Progress Trend</h3>
                    <div style={{ display: 'flex', gap: '5px' }}>
                      <button style={{ padding: '4px 10px', fontSize: '11px', border: '1px solid #e2e8f0', backgroundColor: 'white', borderRadius: '4px', color: '#64748b', cursor: 'pointer' }}>Last 7 Days</button>
                      <button style={{ padding: '4px 10px', fontSize: '11px', border: 'none', backgroundColor: '#eff6ff', borderRadius: '4px', color: '#2563eb', fontWeight: '600', cursor: 'pointer' }}>Last 30 Days</button>
                      <button style={{ padding: '4px 10px', fontSize: '11px', border: 'none', backgroundColor: 'transparent', borderRadius: '4px', color: '#64748b', cursor: 'pointer' }}>Last 3 Months</button>
                    </div>
                  </div>
                  {/* Mock Line Chart */}
                  <div style={{ height: '180px', position: 'relative', borderBottom: '1px solid #e2e8f0', borderLeft: '1px solid #e2e8f0', padding: '10px 0 0 10px' }}>
                    <div style={{ position: 'absolute', bottom: '0', left: '10px', right: '10px', height: '100%', background: 'linear-gradient(to top, rgba(37,99,235,0.2) 0%, rgba(255,255,255,0) 100%)', clipPath: 'polygon(0% 60%, 15% 58%, 30% 55%, 45% 50%, 60% 45%, 75% 45%, 90% 48%, 100% 42%, 100% 100%, 0% 100%)' }}></div>
                    <svg viewBox="0 0 400 100" style={{ width: '100%', height: '100%', overflow: 'visible', position: 'relative', zIndex: 2 }}>
                       <polyline fill="none" stroke="#2563eb" strokeWidth="3" points="0,60 60,58 120,55 180,50 240,45 300,45 360,48 400,42" />
                       {[0, 60, 120, 180, 240, 300, 360, 400].map((x, i) => (
                         <circle key={i} cx={x} cy={[60, 58, 55, 50, 45, 45, 48, 42][i]} r="4" fill="white" stroke="#2563eb" strokeWidth="2" />
                       ))}
                    </svg>
                    {/* Y Axis Labels */}
                    <div style={{ position: 'absolute', left: '-25px', top: 0, bottom: 0, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', fontSize: '10px', color: '#94a3b8' }}>
                      <span>100</span><span>80</span><span>60</span><span>40</span><span>20</span><span>0</span>
                    </div>
                  </div>
                  {/* X Axis Labels */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', paddingLeft: '10px', marginTop: '10px', fontSize: '10px', color: '#94a3b8' }}>
                    <span>14 Jul</span><span>21 Jul</span><span>28 Jul</span><span>4 Aug</span><span>12 Aug</span>
                  </div>
                </div>

                <div style={{ flex: 1, backgroundColor: 'white', padding: '20px', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                    <h3 style={{ margin: 0, fontSize: '15px', fontWeight: '700', color: '#0f172a', display: 'flex', alignItems: 'center', gap: '8px' }}><i className="fas fa-chart-bar" style={{ color: '#2563eb' }}></i> Subject-wise Performance</h3>
                    <a href="#" style={{ fontSize: '12px', color: '#2563eb', textDecoration: 'none', fontWeight: '600' }}>View Detailed Analysis <i className="fas fa-arrow-right"></i></a>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '15px', fontSize: '11px', color: '#64748b' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><div style={{ width: '10px', height: '10px', backgroundColor: '#2563eb', borderRadius: '2px' }}></div> Your Child's Score</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><div style={{ width: '10px', height: '10px', backgroundColor: '#cbd5e1', borderRadius: '2px' }}></div> Target Score</div>
                  </div>
                  
                  {/* Mock Bar Chart */}
                  <div style={{ height: '150px', position: 'relative', borderBottom: '1px solid #e2e8f0', borderLeft: '1px solid #e2e8f0', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-around', paddingLeft: '10px' }}>
                     {/* Y Axis Labels */}
                     <div style={{ position: 'absolute', left: '-25px', top: 0, bottom: 0, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', fontSize: '10px', color: '#94a3b8' }}>
                      <span>100</span><span>80</span><span>60</span><span>40</span><span>20</span><span>0</span>
                     </div>
                     
                     {/* Bars */}
                     {[{name: 'Quant', s: 72, t: 85}, {name: 'Reasoning', s: 66, t: 85}, {name: 'English', s: 61, t: 80}, {name: 'GA', s: 58, t: 80}].map(sub => (
                       <div key={sub.name} style={{ display: 'flex', gap: '2px', alignItems: 'flex-end', height: '100%', paddingBottom: '1px' }}>
                         <div style={{ width: '25px', height: `${sub.s}%`, backgroundColor: '#2563eb', borderTopLeftRadius: '3px', borderTopRightRadius: '3px', position: 'relative', display: 'flex', justifyContent: 'center' }}>
                            <span style={{ position: 'absolute', top: '-18px', fontSize: '10px', fontWeight: '600', color: '#0f172a' }}>{sub.s}</span>
                         </div>
                         <div style={{ width: '25px', height: `${sub.t}%`, backgroundColor: '#cbd5e1', borderTopLeftRadius: '3px', borderTopRightRadius: '3px', position: 'relative', display: 'flex', justifyContent: 'center' }}>
                            <span style={{ position: 'absolute', top: '-18px', fontSize: '10px', fontWeight: '600', color: '#64748b' }}>{sub.t}</span>
                         </div>
                       </div>
                     ))}
                  </div>
                  {/* X Axis Labels */}
                  <div style={{ display: 'flex', justifyContent: 'space-around', paddingLeft: '10px', marginTop: '10px', fontSize: '11px', color: '#475569', fontWeight: '500' }}>
                    <span style={{ width: '52px', textAlign: 'center' }}>Quant</span>
                    <span style={{ width: '52px', textAlign: 'center' }}>Reasoning</span>
                    <span style={{ width: '52px', textAlign: 'center' }}>English</span>
                    <span style={{ width: '52px', textAlign: 'center' }}>GA</span>
                  </div>
                </div>
              </div>

              {/* Bottom Row */}
              <div style={{ display: 'flex', gap: '25px' }}>
                <div style={{ flex: 1, backgroundColor: 'white', padding: '20px', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                    <h3 style={{ margin: 0, fontSize: '15px', fontWeight: '700', color: '#0f172a', display: 'flex', alignItems: 'center', gap: '8px' }}><i className="fas fa-clipboard-list" style={{ color: '#ef4444' }}></i> Latest Test Results</h3>
                    <a href="#" style={{ fontSize: '12px', color: '#2563eb', textDecoration: 'none', fontWeight: '600' }}>View All <i className="fas fa-arrow-right"></i></a>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '10px', borderBottom: '1px solid #f1f5f9' }}>
                      <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                        <div style={{ width: '36px', height: '36px', backgroundColor: '#eff6ff', color: '#2563eb', borderRadius: '8px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}><i className="fas fa-calculator"></i></div>
                        <div>
                          <h4 style={{ margin: '0 0 3px', fontSize: '13px', fontWeight: '600', color: '#0f172a' }}>Quantitative Aptitude Mock Test</h4>
                          <p style={{ margin: 0, fontSize: '11px', color: '#64748b' }}>Score: <span style={{ color: '#0f172a', fontWeight: '600' }}>72/100</span> <span style={{ color: '#16a34a' }}>(Good)</span></p>
                        </div>
                      </div>
                      <span style={{ fontSize: '11px', color: '#94a3b8' }}>12 Aug 2026</span>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '10px', borderBottom: '1px solid #f1f5f9' }}>
                      <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                        <div style={{ width: '36px', height: '36px', backgroundColor: '#dcfce7', color: '#16a34a', borderRadius: '8px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}><i className="fas fa-file-alt"></i></div>
                        <div>
                          <h4 style={{ margin: '0 0 3px', fontSize: '13px', fontWeight: '600', color: '#0f172a' }}>Current Affairs Quiz</h4>
                          <p style={{ margin: 0, fontSize: '11px', color: '#64748b' }}>Score: <span style={{ color: '#0f172a', fontWeight: '600' }}>8/10</span> <span style={{ color: '#16a34a' }}>(Great)</span></p>
                        </div>
                      </div>
                      <span style={{ fontSize: '11px', color: '#94a3b8' }}>10 Aug 2026</span>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '10px', borderBottom: '1px solid #f1f5f9' }}>
                      <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                        <div style={{ width: '36px', height: '36px', backgroundColor: '#fef3c7', color: '#d97706', borderRadius: '8px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}><i className="fas fa-brain"></i></div>
                        <div>
                          <h4 style={{ margin: '0 0 3px', fontSize: '13px', fontWeight: '600', color: '#0f172a' }}>Reasoning - Mixed Set</h4>
                          <p style={{ margin: 0, fontSize: '11px', color: '#64748b' }}>Score: <span style={{ color: '#0f172a', fontWeight: '600' }}>66/100</span> <span style={{ color: '#d97706' }}>(Needs Improvement)</span></p>
                        </div>
                      </div>
                      <span style={{ fontSize: '11px', color: '#94a3b8' }}>8 Aug 2026</span>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                        <div style={{ width: '36px', height: '36px', backgroundColor: '#f3e8ff', color: '#9333ea', borderRadius: '8px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}><i className="fas fa-book"></i></div>
                        <div>
                          <h4 style={{ margin: '0 0 3px', fontSize: '13px', fontWeight: '600', color: '#0f172a' }}>English - Comprehension</h4>
                          <p style={{ margin: 0, fontSize: '11px', color: '#64748b' }}>Score: <span style={{ color: '#0f172a', fontWeight: '600' }}>61/100</span> <span style={{ color: '#64748b' }}>(Average)</span></p>
                        </div>
                      </div>
                      <span style={{ fontSize: '11px', color: '#94a3b8' }}>6 Aug 2026</span>
                    </div>
                  </div>
                </div>

                <div style={{ flex: 1, backgroundColor: 'white', padding: '20px', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                    <h3 style={{ margin: 0, fontSize: '15px', fontWeight: '700', color: '#0f172a', display: 'flex', alignItems: 'center', gap: '8px' }}><i className="fas fa-shield-alt" style={{ color: '#2563eb' }}></i> AI Insights</h3>
                  </div>

                  <div style={{ display: 'flex', gap: '15px', backgroundColor: '#f0f9ff', padding: '15px', borderRadius: '12px', border: '1px solid #bae6fd', marginBottom: '20px' }}>
                    <i className="fas fa-robot" style={{ fontSize: '24px', color: '#1e3a8a', marginTop: '5px' }}></i>
                    <div>
                      <h4 style={{ margin: '0 0 5px', fontSize: '16px', fontWeight: '800', color: '#1e3a8a' }}>AI Insight</h4>
                      <p style={{ margin: 0, fontSize: '13px', color: '#1e3a8a', lineHeight: '1.5' }}>{studentName} is showing consistent improvement. Focus more on General Awareness and English to boost overall score.</p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                      <i className="fas fa-check-circle" style={{ color: '#16a34a', marginTop: '2px', fontSize: '14px' }}></i>
                      <p style={{ margin: 0, fontSize: '13px', color: '#475569' }}>Strong in Quantitative Aptitude (Top 30% among peers)</p>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                      <i className="fas fa-check-circle" style={{ color: '#16a34a', marginTop: '2px', fontSize: '14px' }}></i>
                      <p style={{ margin: 0, fontSize: '13px', color: '#475569' }}>Reasoning accuracy improved by 15% this month</p>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                      <i className="fas fa-exclamation-triangle" style={{ color: '#eab308', marginTop: '2px', fontSize: '14px' }}></i>
                      <p style={{ margin: 0, fontSize: '13px', color: '#475569' }}>Needs more practice in General Awareness</p>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                      <i className="fas fa-exclamation-triangle" style={{ color: '#eab308', marginTop: '2px', fontSize: '14px' }}></i>
                      <p style={{ margin: 0, fontSize: '13px', color: '#475569' }}>English comprehension can be improved</p>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                      <i className="fas fa-check-circle" style={{ color: '#16a34a', marginTop: '2px', fontSize: '14px' }}></i>
                      <p style={{ margin: 0, fontSize: '13px', color: '#475569' }}>Maintaining a good study streak. Keep it up!</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Dashboard Footer */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px', backgroundColor: 'white', borderRadius: '16px', border: '1px solid #e2e8f0', marginTop: '10px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '30px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <i className="fas fa-trophy" style={{ color: '#fbbf24', fontSize: '24px' }}></i>
                    <div>
                      <h4 style={{ margin: 0, fontSize: '14px', fontWeight: '700', color: '#0f172a' }}>95%</h4>
                      <p style={{ margin: 0, fontSize: '11px', color: '#64748b' }}>Parent Satisfaction</p>
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <i className="fas fa-users" style={{ color: '#3b82f6', fontSize: '24px' }}></i>
                    <div>
                      <h4 style={{ margin: 0, fontSize: '14px', fontWeight: '700', color: '#0f172a' }}>10,000+</h4>
                      <p style={{ margin: 0, fontSize: '11px', color: '#64748b' }}>Students Trust Us</p>
                    </div>
                  </div>
                </div>
                
                <h3 style={{ margin: 0, fontSize: '14px', fontWeight: '700', color: '#1e3a8a', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  Together for a Brighter Tomorrow <div style={{ width: '30px', height: '4px', display: 'flex', borderRadius: '2px', overflow: 'hidden' }}><div style={{ flex: 1, backgroundColor: '#ff9933' }}></div><div style={{ flex: 1, backgroundColor: '#ffffff' }}></div><div style={{ flex: 1, backgroundColor: '#138808' }}></div></div>
                </h3>

                <div style={{ fontSize: '11px', fontWeight: '600', color: '#475569', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{ width: '20px', height: '14px', display: 'flex', flexDirection: 'column', borderRadius: '2px', overflow: 'hidden' }}><div style={{ flex: 1, backgroundColor: '#ff9933' }}></div><div style={{ flex: 1, backgroundColor: '#ffffff' }}></div><div style={{ flex: 1, backgroundColor: '#138808' }}></div></div>
                  Made for India's Aspirants <i className="fas fa-heart" style={{ color: '#ef4444' }}></i>
                </div>
              </div>

            </div>

            {/* Right Sidebar Column (30%) */}
            <div style={{ width: '320px', display: 'flex', flexDirection: 'column', gap: '25px', flexShrink: 0 }}>
              
              {/* Graphic Card */}
              <div style={{ backgroundColor: 'white', borderRadius: '16px', border: '1px solid #e2e8f0', overflow: 'hidden', position: 'relative', height: '220px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(to bottom, #e0f2fe, #f0f9ff)', zIndex: 0 }}></div>
                
                {/* SVG Mountains Placeholder */}
                <svg viewBox="0 0 100 100" preserveAspectRatio="none" style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '70%', zIndex: 1 }}>
                  <path d="M0,100 L0,40 L25,70 L50,20 L75,60 L100,30 L100,100 Z" fill="#94a3b8" opacity="0.5" />
                  <path d="M0,100 L0,50 L30,80 L60,30 L80,50 L100,10 L100,100 Z" fill="#64748b" opacity="0.8" />
                  <circle cx="60" cy="30" r="3" fill="#fbbf24" />
                  <path d="M60,30 L60,10 L70,15 L60,20 Z" fill="#2563eb" />
                </svg>

                <div style={{ position: 'relative', zIndex: 2, padding: '30px' }}>
                  <p style={{ fontFamily: "'Caveat', cursive", fontSize: '32px', color: '#1e3a8a', margin: 0, lineHeight: '1.1', transform: 'rotate(-5deg)' }}>Proud<br/>Parents<br/>Brighter<br/>Futures <i className="fas fa-heart" style={{ color: '#1e3a8a', fontSize: '20px' }}></i></p>
                </div>
              </div>

              {/* Notifications */}
              <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                  <h3 style={{ margin: 0, fontSize: '15px', fontWeight: '700', color: '#0f172a', display: 'flex', alignItems: 'center', gap: '8px' }}><i className="far fa-bell" style={{ color: '#ef4444' }}></i> Recent Notifications</h3>
                  <a href="#" style={{ fontSize: '12px', color: '#2563eb', textDecoration: 'none', fontWeight: '600' }}>View All</a>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                  <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: '#dcfce7', color: '#16a34a', display: 'flex', justifyContent: 'center', alignItems: 'center', flexShrink: 0, fontSize: '14px' }}><i className="fas fa-check"></i></div>
                    <div>
                      <p style={{ margin: '0 0 3px', fontSize: '13px', color: '#0f172a', fontWeight: '500' }}>Completed Current Affairs Quiz</p>
                      <p style={{ margin: 0, fontSize: '11px', color: '#64748b' }}>2 hours ago</p>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: '#f3e8ff', color: '#9333ea', display: 'flex', justifyContent: 'center', alignItems: 'center', flexShrink: 0, fontSize: '14px' }}><i className="fas fa-clipboard-list"></i></div>
                    <div>
                      <p style={{ margin: '0 0 3px', fontSize: '13px', color: '#0f172a', fontWeight: '500' }}>Attempted Quant Mock Test</p>
                      <p style={{ margin: '0 0 3px', fontSize: '12px', color: '#475569' }}>Scored 72/100</p>
                      <p style={{ margin: 0, fontSize: '11px', color: '#64748b' }}>5 hours ago</p>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: '#ffe4e6', color: '#e11d48', display: 'flex', justifyContent: 'center', alignItems: 'center', flexShrink: 0, fontSize: '14px' }}><i className="fas fa-chart-pie"></i></div>
                    <div>
                      <p style={{ margin: '0 0 3px', fontSize: '13px', color: '#0f172a', fontWeight: '500' }}>Study Plan 80% Completed</p>
                      <p style={{ margin: '0 0 3px', fontSize: '12px', color: '#475569' }}>Great progress!</p>
                      <p style={{ margin: 0, fontSize: '11px', color: '#64748b' }}>1 day ago</p>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: '#ffedd5', color: '#ea580c', display: 'flex', justifyContent: 'center', alignItems: 'center', flexShrink: 0, fontSize: '14px' }}><i className="far fa-file-alt"></i></div>
                    <div>
                      <p style={{ margin: '0 0 3px', fontSize: '13px', color: '#0f172a', fontWeight: '500' }}>New Current Affairs Notes Viewed</p>
                      <p style={{ margin: 0, fontSize: '11px', color: '#64748b' }}>1 day ago</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Upcoming Study Plan */}
              <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                  <h3 style={{ margin: 0, fontSize: '15px', fontWeight: '700', color: '#0f172a', display: 'flex', alignItems: 'center', gap: '8px' }}><i className="far fa-calendar-check" style={{ color: '#2563eb' }}></i> Upcoming Study Plan</h3>
                  <a href="#" style={{ fontSize: '12px', color: '#2563eb', textDecoration: 'none', fontWeight: '600' }}>View All</a>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                      <input type="checkbox" style={{ width: '16px', height: '16px', cursor: 'pointer' }} />
                      <span style={{ fontSize: '13px', color: '#0f172a' }}>Number System Practice</span>
                    </div>
                    <span style={{ fontSize: '11px', color: '#16a34a', fontWeight: '600' }}>Today</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                      <input type="checkbox" style={{ width: '16px', height: '16px', cursor: 'pointer' }} />
                      <span style={{ fontSize: '13px', color: '#0f172a' }}>Current Affairs Quiz</span>
                    </div>
                    <span style={{ fontSize: '11px', color: '#16a34a', fontWeight: '600' }}>Today</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                      <input type="checkbox" style={{ width: '16px', height: '16px', cursor: 'pointer' }} />
                      <span style={{ fontSize: '13px', color: '#0f172a' }}>English Vocab Revision</span>
                    </div>
                    <span style={{ fontSize: '11px', color: '#2563eb', fontWeight: '600' }}>Tomorrow</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                      <input type="checkbox" style={{ width: '16px', height: '16px', cursor: 'pointer' }} />
                      <span style={{ fontSize: '13px', color: '#0f172a' }}>Reasoning Mock Test</span>
                    </div>
                    <span style={{ fontSize: '11px', color: '#2563eb', fontWeight: '600' }}>Tomorrow</span>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
                <h3 style={{ margin: '0 0 20px', fontSize: '15px', fontWeight: '700', color: '#0f172a', display: 'flex', alignItems: 'center', gap: '8px' }}><i className="fas fa-bolt" style={{ color: '#2563eb' }}></i> Quick Actions</h3>
                
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '10px', padding: '15px', border: '1px solid #e2e8f0', borderRadius: '12px', cursor: 'pointer', backgroundColor: '#f8fafc' }}>
                    <i className="fas fa-file-download" style={{ fontSize: '20px', color: '#2563eb' }}></i>
                    <span style={{ fontSize: '11px', color: '#0f172a', fontWeight: '600', textAlign: 'center' }}>Download<br/>Progress Report</span>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '10px', padding: '15px', border: '1px solid #e2e8f0', borderRadius: '12px', cursor: 'pointer', backgroundColor: '#f8fafc' }}>
                    <i className="fas fa-calendar-alt" style={{ fontSize: '20px', color: '#2563eb' }}></i>
                    <span style={{ fontSize: '11px', color: '#0f172a', fontWeight: '600', textAlign: 'center' }}>View Study Plan</span>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '10px', padding: '15px', border: '1px solid #e2e8f0', borderRadius: '12px', cursor: 'pointer', backgroundColor: '#f8fafc' }}>
                    <i className="fas fa-headset" style={{ fontSize: '20px', color: '#2563eb' }}></i>
                    <span style={{ fontSize: '11px', color: '#0f172a', fontWeight: '600', textAlign: 'center' }}>Contact Support</span>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '10px', padding: '15px', border: '1px solid #e2e8f0', borderRadius: '12px', cursor: 'pointer', backgroundColor: '#f8fafc' }}>
                    <i className="fas fa-cog" style={{ fontSize: '20px', color: '#2563eb' }}></i>
                    <span style={{ fontSize: '11px', color: '#0f172a', fontWeight: '600', textAlign: 'center' }}>Update Notification<br/>Preferences</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ParentDashboardPage;
