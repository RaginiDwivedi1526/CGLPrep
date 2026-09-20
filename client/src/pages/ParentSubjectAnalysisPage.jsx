import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ParentSidebar from '../components/ParentSidebar';

const ParentSubjectAnalysisPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ display: 'flex', minHeight: '100vh', fontFamily: "'Inter', sans-serif", backgroundColor: '#f1f5f9' }}>
      
      {/* Sidebar */}
      <ParentSidebar activeTab="subject-analysis" />

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
            <i className="fas fa-chevron-right" style={{ fontSize: '10px', margin: '0 5px' }}></i> Subject Analysis
          </div>

          {/* Header Row */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '25px' }}>
            <div>
              <h1 style={{ margin: '0 0 5px', fontSize: '28px', fontWeight: '800', color: '#1e3a8a' }}>Subject Analysis</h1>
              <p style={{ margin: 0, fontSize: '15px', color: '#475569' }}>Detailed performance analysis across all subjects to understand strengths and improvement areas.</p>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
               <div style={{ display: 'flex', alignItems: 'center', gap: '10px', backgroundColor: 'white', padding: '10px 15px', borderRadius: '8px', border: '1px solid #cbd5e1', color: '#0f172a', fontWeight: '600', fontSize: '14px', cursor: 'pointer' }}>
                 <i className="far fa-calendar-alt" style={{ color: '#64748b' }}></i> Last 3 Months <i className="fas fa-chevron-down" style={{ color: '#2563eb', marginLeft: '10px' }}></i>
               </div>
               <div style={{ backgroundColor: '#f0fdf4', padding: '12px 20px', borderRadius: '12px', border: '1px solid #bbf7d0', textAlign: 'center', transform: 'rotate(-2deg)' }}>
                  <p style={{ fontFamily: "'Caveat', cursive", fontSize: '18px', color: '#166534', margin: '0 0 5px', lineHeight: '1.2' }}>"Small steps<br/>create big results."</p>
                  <div style={{ height: '2px', width: '30px', background: 'linear-gradient(90deg, #ff9933 33.3%, #ffffff 33.3%, #ffffff 66.6%, #138808 66.6%)', borderRadius: '2px', margin: '0 auto' }}></div>
               </div>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '25px' }}>
            
            {/* Left Main Column (75%) */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '20px' }}>
              
              {/* Subject KPI Row */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '15px' }}>
                <div style={{ backgroundColor: '#f0f9ff', padding: '15px', borderRadius: '12px', border: '1px solid #bae6fd' }}>
                  <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '10px' }}>
                    <div style={{ width: '36px', height: '36px', backgroundColor: '#2563eb', color: 'white', borderRadius: '8px', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '16px' }}><i className="fas fa-calculator"></i></div>
                    <h4 style={{ margin: 0, fontSize: '13px', fontWeight: '700', color: '#1e3a8a' }}>Quantitative Aptitude</h4>
                  </div>
                  <h2 style={{ margin: '0 0 5px', fontSize: '24px', fontWeight: '800', color: '#0f172a' }}>72 <span style={{ fontSize: '14px', color: '#64748b', fontWeight: '500' }}>/100</span></h2>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '11px', color: '#16a34a', fontWeight: '600', marginBottom: '10px' }}>
                    <i className="fas fa-arrow-up"></i> +12% <span style={{ color: '#64748b', fontWeight: '500' }}>vs last month</span>
                  </div>
                  <div style={{ textAlign: 'center', backgroundColor: '#dcfce7', color: '#166534', padding: '6px', borderRadius: '6px', fontSize: '11px', fontWeight: '700' }}>Good Progress</div>
                </div>

                <div style={{ backgroundColor: '#fff1f2', padding: '15px', borderRadius: '12px', border: '1px solid #fecdd3' }}>
                  <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '10px' }}>
                    <div style={{ width: '36px', height: '36px', backgroundColor: '#e11d48', color: 'white', borderRadius: '8px', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '16px' }}><i className="fas fa-brain"></i></div>
                    <h4 style={{ margin: 0, fontSize: '13px', fontWeight: '700', color: '#881337' }}>Reasoning</h4>
                  </div>
                  <h2 style={{ margin: '0 0 5px', fontSize: '24px', fontWeight: '800', color: '#0f172a' }}>66 <span style={{ fontSize: '14px', color: '#64748b', fontWeight: '500' }}>/100</span></h2>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '11px', color: '#16a34a', fontWeight: '600', marginBottom: '10px' }}>
                    <i className="fas fa-arrow-up"></i> +8% <span style={{ color: '#64748b', fontWeight: '500' }}>vs last month</span>
                  </div>
                  <div style={{ textAlign: 'center', backgroundColor: '#ffe4e6', color: '#be123c', padding: '6px', borderRadius: '6px', fontSize: '11px', fontWeight: '700' }}>Needs Practice</div>
                </div>

                <div style={{ backgroundColor: '#f0fdf4', padding: '15px', borderRadius: '12px', border: '1px solid #bbf7d0' }}>
                  <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '10px' }}>
                    <div style={{ width: '36px', height: '36px', backgroundColor: '#16a34a', color: 'white', borderRadius: '8px', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '16px' }}><i className="fas fa-book"></i></div>
                    <h4 style={{ margin: 0, fontSize: '13px', fontWeight: '700', color: '#14532d' }}>English Language</h4>
                  </div>
                  <h2 style={{ margin: '0 0 5px', fontSize: '24px', fontWeight: '800', color: '#0f172a' }}>61 <span style={{ fontSize: '14px', color: '#64748b', fontWeight: '500' }}>/100</span></h2>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '11px', color: '#16a34a', fontWeight: '600', marginBottom: '10px' }}>
                    <i className="fas fa-arrow-up"></i> +15% <span style={{ color: '#64748b', fontWeight: '500' }}>vs last month</span>
                  </div>
                  <div style={{ textAlign: 'center', backgroundColor: '#dcfce7', color: '#166534', padding: '6px', borderRadius: '6px', fontSize: '11px', fontWeight: '700' }}>Improving</div>
                </div>

                <div style={{ backgroundColor: '#fdf4ff', padding: '15px', borderRadius: '12px', border: '1px solid #f3e8ff' }}>
                  <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '10px' }}>
                    <div style={{ width: '36px', height: '36px', backgroundColor: '#9333ea', color: 'white', borderRadius: '8px', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '16px' }}><i className="fas fa-globe"></i></div>
                    <h4 style={{ margin: 0, fontSize: '13px', fontWeight: '700', color: '#581c87' }}>General Awareness</h4>
                  </div>
                  <h2 style={{ margin: '0 0 5px', fontSize: '24px', fontWeight: '800', color: '#0f172a' }}>58 <span style={{ fontSize: '14px', color: '#64748b', fontWeight: '500' }}>/100</span></h2>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '11px', color: '#16a34a', fontWeight: '600', marginBottom: '10px' }}>
                    <i className="fas fa-arrow-up"></i> +10% <span style={{ color: '#64748b', fontWeight: '500' }}>vs last month</span>
                  </div>
                  <div style={{ textAlign: 'center', backgroundColor: '#f3e8ff', color: '#7e22ce', padding: '6px', borderRadius: '6px', fontSize: '11px', fontWeight: '700' }}>Needs More Focus</div>
                </div>
              </div>

              {/* Main Charts Row */}
              <div style={{ display: 'flex', gap: '20px' }}>
                <div style={{ flex: 1.5, backgroundColor: 'white', padding: '20px', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                    <h3 style={{ margin: 0, fontSize: '15px', fontWeight: '700', color: '#0f172a', display: 'flex', alignItems: 'center', gap: '8px' }}><i className="fas fa-chart-line" style={{ color: '#2563eb' }}></i> Subject-wise Performance Trend</h3>
                    <div style={{ display: 'flex', gap: '15px', fontSize: '10px', color: '#64748b', fontWeight: '600' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><div style={{ width: '8px', height: '8px', backgroundColor: '#2563eb', borderRadius: '2px' }}></div> Quant</div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><div style={{ width: '8px', height: '8px', backgroundColor: '#e11d48', borderRadius: '2px' }}></div> Reasoning</div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><div style={{ width: '8px', height: '8px', backgroundColor: '#16a34a', borderRadius: '2px' }}></div> English</div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><div style={{ width: '8px', height: '8px', backgroundColor: '#9333ea', borderRadius: '2px' }}></div> GA</div>
                    </div>
                  </div>
                  
                  {/* Mock Line Chart */}
                  <div style={{ height: '180px', position: 'relative', borderBottom: '1px solid #e2e8f0', borderLeft: '1px solid #e2e8f0', padding: '10px 0 0 10px' }}>
                    <div style={{ position: 'absolute', left: '-25px', top: 0, bottom: 0, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', fontSize: '10px', color: '#94a3b8' }}>
                      <span>100</span><span>80</span><span>60</span><span>40</span><span>20</span><span>0</span>
                    </div>
                    <svg viewBox="0 0 500 100" style={{ width: '100%', height: '100%', overflow: 'visible', position: 'relative', zIndex: 2 }}>
                       {/* Quant (Blue) */}
                       <polyline fill="none" stroke="#2563eb" strokeWidth="2" points="0,40 125,30 250,25 375,20 500,15" />
                       {[0, 125, 250, 375, 500].map((x, i) => <circle key={`q${i}`} cx={x} cy={[40, 30, 25, 20, 15][i]} r="3" fill="#2563eb" />)}
                       
                       {/* Reasoning (Red) */}
                       <polyline fill="none" stroke="#e11d48" strokeWidth="2" points="0,55 125,45 250,40 375,35 500,30" />
                       {[0, 125, 250, 375, 500].map((x, i) => <circle key={`r${i}`} cx={x} cy={[55, 45, 40, 35, 30][i]} r="3" fill="#e11d48" />)}

                       {/* English (Green) */}
                       <polyline fill="none" stroke="#16a34a" strokeWidth="2" points="0,70 125,60 250,55 375,45 500,40" />
                       {[0, 125, 250, 375, 500].map((x, i) => <circle key={`e${i}`} cx={x} cy={[70, 60, 55, 45, 40][i]} r="3" fill="#16a34a" />)}

                       {/* GA (Purple) */}
                       <polyline fill="none" stroke="#9333ea" strokeWidth="2" points="0,85 125,75 250,65 375,60 500,55" />
                       {[0, 125, 250, 375, 500].map((x, i) => <circle key={`g${i}`} cx={x} cy={[85, 75, 65, 60, 55][i]} r="3" fill="#9333ea" />)}
                    </svg>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', paddingLeft: '10px', marginTop: '10px', fontSize: '11px', color: '#475569' }}>
                    <span>May '26</span><span>Jun '26</span><span>Jul '26</span><span>Aug '26</span>
                  </div>
                </div>

                <div style={{ flex: 1, backgroundColor: 'white', padding: '20px', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
                   <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                    <h3 style={{ margin: 0, fontSize: '15px', fontWeight: '700', color: '#0f172a', display: 'flex', alignItems: 'center', gap: '8px' }}><i className="fas fa-shield-alt" style={{ color: '#2563eb' }}></i> Subject-wise Accuracy</h3>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', fontSize: '10px', color: '#64748b', fontWeight: '600', marginBottom: '15px' }}>
                     <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><div style={{ width: '8px', height: '8px', backgroundColor: '#16a34a', borderRadius: '2px' }}></div> Correct</div>
                     <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><div style={{ width: '8px', height: '8px', backgroundColor: '#ef4444', borderRadius: '2px' }}></div> Incorrect</div>
                  </div>

                  {/* Mock Accuracy Bar Chart */}
                  <div style={{ height: '140px', position: 'relative', borderBottom: '1px solid #e2e8f0', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-around', padding: '0 10px' }}>
                     {[{n: 'Quant', c: 78, i: 22}, {n: 'Reasoning', c: 72, i: 28}, {n: 'English', c: 68, i: 32}, {n: 'GA', c: 64, i: 36}].map(sub => (
                       <div key={sub.n} style={{ display: 'flex', gap: '4px', alignItems: 'flex-end', height: '100%', paddingBottom: '1px' }}>
                         <div style={{ width: '25px', height: `${sub.c}%`, backgroundColor: '#16a34a', borderTopLeftRadius: '3px', borderTopRightRadius: '3px', position: 'relative', display: 'flex', justifyContent: 'center' }}>
                            <span style={{ position: 'absolute', top: '-18px', fontSize: '10px', fontWeight: '700', color: '#0f172a' }}>{sub.c}%</span>
                         </div>
                         <div style={{ width: '25px', height: `${sub.i}%`, backgroundColor: '#ef4444', borderTopLeftRadius: '3px', borderTopRightRadius: '3px', position: 'relative', display: 'flex', justifyContent: 'center' }}>
                            <span style={{ position: 'absolute', top: '-18px', fontSize: '10px', fontWeight: '600', color: '#ef4444' }}>{sub.i}%</span>
                         </div>
                       </div>
                     ))}
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-around', padding: '0 10px', marginTop: '10px', fontSize: '11px', color: '#475569', fontWeight: '600' }}>
                    <span style={{ width: '54px', textAlign: 'center' }}>Quant</span>
                    <span style={{ width: '54px', textAlign: 'center' }}>Reasoning</span>
                    <span style={{ width: '54px', textAlign: 'center' }}>English</span>
                    <span style={{ width: '54px', textAlign: 'center' }}>GA</span>
                  </div>
                </div>
              </div>

              {/* Subject Detailed Cards Row */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '15px' }}>
                
                {/* Quant */}
                <div style={{ backgroundColor: 'white', borderRadius: '12px', border: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
                  <div style={{ padding: '15px', borderBottom: '1px solid #f1f5f9', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{ width: '28px', height: '28px', backgroundColor: '#2563eb', color: 'white', borderRadius: '6px', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '12px' }}><i className="fas fa-calculator"></i></div>
                    <h4 style={{ margin: 0, fontSize: '13px', fontWeight: '700', color: '#1e3a8a' }}>Quantitative Aptitude</h4>
                  </div>
                  <div style={{ padding: '15px', display: 'flex', gap: '15px', alignItems: 'center' }}>
                    <div style={{ position: 'relative', width: '60px', height: '60px', borderRadius: '50%', background: 'conic-gradient(#2563eb 72%, #f1f5f9 0)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                       <div style={{ width: '50px', height: '50px', backgroundColor: 'white', borderRadius: '50%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                         <span style={{ fontSize: '16px', fontWeight: '800', color: '#0f172a', lineHeight: '1' }}>72</span>
                         <span style={{ fontSize: '8px', color: '#64748b' }}>/100</span>
                       </div>
                    </div>
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10px', borderBottom: '1px solid #f1f5f9', paddingBottom: '4px' }}><span style={{ color: '#64748b' }}>Questions Solved</span><span style={{ fontWeight: '700', color: '#0f172a' }}>420</span></div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10px', borderBottom: '1px solid #f1f5f9', paddingBottom: '4px' }}><span style={{ color: '#64748b' }}>Accuracy</span><span style={{ fontWeight: '700', color: '#0f172a' }}>78%</span></div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10px' }}><span style={{ color: '#64748b' }}>Time per Question</span><span style={{ fontWeight: '700', color: '#0f172a' }}>1m 12s</span></div>
                    </div>
                  </div>
                  <div style={{ backgroundColor: '#f0fdf4', padding: '12px', borderTop: '1px solid #bbf7d0', display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                    <i className="far fa-check-circle" style={{ color: '#16a34a', marginTop: '2px', fontSize: '12px' }}></i>
                    <p style={{ margin: 0, fontSize: '10px', color: '#14532d', lineHeight: '1.4' }}>Strong in Arithmetic & Number System. Keep practicing Geometry & DI.</p>
                  </div>
                </div>

                {/* Reasoning */}
                <div style={{ backgroundColor: 'white', borderRadius: '12px', border: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
                  <div style={{ padding: '15px', borderBottom: '1px solid #f1f5f9', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{ width: '28px', height: '28px', backgroundColor: '#e11d48', color: 'white', borderRadius: '6px', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '12px' }}><i className="fas fa-brain"></i></div>
                    <h4 style={{ margin: 0, fontSize: '13px', fontWeight: '700', color: '#881337' }}>Reasoning</h4>
                  </div>
                  <div style={{ padding: '15px', display: 'flex', gap: '15px', alignItems: 'center' }}>
                    <div style={{ position: 'relative', width: '60px', height: '60px', borderRadius: '50%', background: 'conic-gradient(#e11d48 66%, #f1f5f9 0)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                       <div style={{ width: '50px', height: '50px', backgroundColor: 'white', borderRadius: '50%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                         <span style={{ fontSize: '16px', fontWeight: '800', color: '#0f172a', lineHeight: '1' }}>66</span>
                         <span style={{ fontSize: '8px', color: '#64748b' }}>/100</span>
                       </div>
                    </div>
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10px', borderBottom: '1px solid #f1f5f9', paddingBottom: '4px' }}><span style={{ color: '#64748b' }}>Questions Solved</span><span style={{ fontWeight: '700', color: '#0f172a' }}>380</span></div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10px', borderBottom: '1px solid #f1f5f9', paddingBottom: '4px' }}><span style={{ color: '#64748b' }}>Accuracy</span><span style={{ fontWeight: '700', color: '#0f172a' }}>72%</span></div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10px' }}><span style={{ color: '#64748b' }}>Time per Question</span><span style={{ fontWeight: '700', color: '#0f172a' }}>1m 28s</span></div>
                    </div>
                  </div>
                  <div style={{ backgroundColor: '#fff1f2', padding: '12px', borderTop: '1px solid #fecdd3', display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                    <i className="far fa-check-circle" style={{ color: '#e11d48', marginTop: '2px', fontSize: '12px' }}></i>
                    <p style={{ margin: 0, fontSize: '10px', color: '#881337', lineHeight: '1.4' }}>Good in Coding-Decoding. Work more on Puzzles & Syllogism.</p>
                  </div>
                </div>

                {/* English */}
                <div style={{ backgroundColor: 'white', borderRadius: '12px', border: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
                  <div style={{ padding: '15px', borderBottom: '1px solid #f1f5f9', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{ width: '28px', height: '28px', backgroundColor: '#16a34a', color: 'white', borderRadius: '6px', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '12px' }}><i className="fas fa-book"></i></div>
                    <h4 style={{ margin: 0, fontSize: '13px', fontWeight: '700', color: '#14532d' }}>English Language</h4>
                  </div>
                  <div style={{ padding: '15px', display: 'flex', gap: '15px', alignItems: 'center' }}>
                    <div style={{ position: 'relative', width: '60px', height: '60px', borderRadius: '50%', background: 'conic-gradient(#16a34a 61%, #f1f5f9 0)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                       <div style={{ width: '50px', height: '50px', backgroundColor: 'white', borderRadius: '50%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                         <span style={{ fontSize: '16px', fontWeight: '800', color: '#0f172a', lineHeight: '1' }}>61</span>
                         <span style={{ fontSize: '8px', color: '#64748b' }}>/100</span>
                       </div>
                    </div>
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10px', borderBottom: '1px solid #f1f5f9', paddingBottom: '4px' }}><span style={{ color: '#64748b' }}>Questions Solved</span><span style={{ fontWeight: '700', color: '#0f172a' }}>310</span></div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10px', borderBottom: '1px solid #f1f5f9', paddingBottom: '4px' }}><span style={{ color: '#64748b' }}>Accuracy</span><span style={{ fontWeight: '700', color: '#0f172a' }}>68%</span></div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10px' }}><span style={{ color: '#64748b' }}>Time per Question</span><span style={{ fontWeight: '700', color: '#0f172a' }}>1m 20s</span></div>
                    </div>
                  </div>
                  <div style={{ backgroundColor: '#f0fdf4', padding: '12px', borderTop: '1px solid #bbf7d0', display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                    <i className="fas fa-chart-bar" style={{ color: '#16a34a', marginTop: '2px', fontSize: '12px' }}></i>
                    <p style={{ margin: 0, fontSize: '10px', color: '#14532d', lineHeight: '1.4' }}>Improved Grammar & Vocabulary. Focus more on Reading Comprehension.</p>
                  </div>
                </div>

                {/* GA */}
                <div style={{ backgroundColor: 'white', borderRadius: '12px', border: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
                  <div style={{ padding: '15px', borderBottom: '1px solid #f1f5f9', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{ width: '28px', height: '28px', backgroundColor: '#9333ea', color: 'white', borderRadius: '6px', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '12px' }}><i className="fas fa-globe"></i></div>
                    <h4 style={{ margin: 0, fontSize: '13px', fontWeight: '700', color: '#581c87' }}>General Awareness</h4>
                  </div>
                  <div style={{ padding: '15px', display: 'flex', gap: '15px', alignItems: 'center' }}>
                    <div style={{ position: 'relative', width: '60px', height: '60px', borderRadius: '50%', background: 'conic-gradient(#9333ea 58%, #f1f5f9 0)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                       <div style={{ width: '50px', height: '50px', backgroundColor: 'white', borderRadius: '50%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                         <span style={{ fontSize: '16px', fontWeight: '800', color: '#0f172a', lineHeight: '1' }}>58</span>
                         <span style={{ fontSize: '8px', color: '#64748b' }}>/100</span>
                       </div>
                    </div>
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10px', borderBottom: '1px solid #f1f5f9', paddingBottom: '4px' }}><span style={{ color: '#64748b' }}>Questions Solved</span><span style={{ fontWeight: '700', color: '#0f172a' }}>290</span></div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10px', borderBottom: '1px solid #f1f5f9', paddingBottom: '4px' }}><span style={{ color: '#64748b' }}>Accuracy</span><span style={{ fontWeight: '700', color: '#0f172a' }}>64%</span></div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10px' }}><span style={{ color: '#64748b' }}>Time per Question</span><span style={{ fontWeight: '700', color: '#0f172a' }}>1m 35s</span></div>
                    </div>
                  </div>
                  <div style={{ backgroundColor: '#fdf4ff', padding: '12px', borderTop: '1px solid #f3e8ff', display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                    <i className="far fa-check-circle" style={{ color: '#e11d48', marginTop: '2px', fontSize: '12px' }}></i>
                    <p style={{ margin: 0, fontSize: '10px', color: '#7e22ce', lineHeight: '1.4' }}>Current Affairs is improving. Revise Static GK Regularly.</p>
                  </div>
                </div>

              </div>

              {/* Bottom Row: Topics & Study Time */}
              <div style={{ display: 'flex', gap: '20px' }}>
                {/* Top Performing Topics */}
                <div style={{ flex: 1, backgroundColor: 'white', padding: '20px', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
                  <h3 style={{ margin: '0 0 20px', fontSize: '15px', fontWeight: '700', color: '#0f172a', display: 'flex', alignItems: 'center', gap: '8px' }}><i className="fas fa-trophy" style={{ color: '#16a34a' }}></i> Top Performing Topics</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {[{n: 'Simplification', v: '92%'}, {n: 'Number System', v: '88%'}, {n: 'Percentage', v: '84%'}, {n: 'Blood Relations', v: '82%'}, {n: 'Error Detection', v: '78%'}].map((t, i) => (
                      <div key={t.n} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                          <div style={{ width: '20px', height: '20px', backgroundColor: '#dcfce7', color: '#16a34a', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '10px', fontWeight: '700' }}>{i + 1}</div>
                          <span style={{ fontSize: '13px', color: '#475569' }}>{t.n}</span>
                        </div>
                        <span style={{ fontSize: '13px', fontWeight: '700', color: '#0f172a' }}>{t.v}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Topics Needing Improvement */}
                <div style={{ flex: 1, backgroundColor: 'white', padding: '20px', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
                  <h3 style={{ margin: '0 0 20px', fontSize: '15px', fontWeight: '700', color: '#0f172a', display: 'flex', alignItems: 'center', gap: '8px' }}><i className="fas fa-exclamation-circle" style={{ color: '#ef4444' }}></i> Topics Needing Improvement</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {[{n: 'Static GK (Polity)', v: '42%'}, {n: 'Economy & Budget', v: '46%'}, {n: 'Reading Comprehension', v: '50%'}, {n: 'Puzzles', v: '52%'}, {n: 'Mensuration', v: '54%'}].map((t, i) => (
                      <div key={t.n} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                          <div style={{ width: '20px', height: '20px', backgroundColor: '#ffe4e6', color: '#e11d48', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '10px', fontWeight: '700' }}>{i + 1}</div>
                          <span style={{ fontSize: '13px', color: '#475569' }}>{t.n}</span>
                        </div>
                        <span style={{ fontSize: '13px', fontWeight: '700', color: '#ef4444' }}>{t.v}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Subject-wise Study Time */}
                <div style={{ flex: 1.2, backgroundColor: 'white', padding: '20px', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
                  <h3 style={{ margin: '0 0 20px', fontSize: '15px', fontWeight: '700', color: '#0f172a', display: 'flex', alignItems: 'center', gap: '8px' }}><i className="far fa-clock" style={{ color: '#2563eb' }}></i> Subject-wise Study Time</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                    {[{n: 'Quant', v: '12h 20m', p: 80, c: '#2563eb'}, {n: 'Reasoning', v: '10h 15m', p: 65, c: '#e11d48'}, {n: 'English', v: '8h 40m', p: 55, c: '#16a34a'}, {n: 'GA', v: '7h 25m', p: 45, c: '#9333ea'}].map(s => (
                      <div key={s.n} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <span style={{ width: '60px', fontSize: '12px', color: '#475569' }}>{s.n}</span>
                        <div style={{ flex: 1, height: '10px', backgroundColor: '#f1f5f9', borderRadius: '5px', overflow: 'hidden' }}>
                          <div style={{ width: `${s.p}%`, height: '100%', backgroundColor: s.c, borderRadius: '5px' }}></div>
                        </div>
                        <span style={{ width: '55px', textAlign: 'right', fontSize: '12px', fontWeight: '700', color: '#0f172a' }}>{s.v}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>

            {/* Right Sidebar Column (25%) */}
            <div style={{ width: '280px', display: 'flex', flexDirection: 'column', gap: '20px', flexShrink: 0 }}>
              
              {/* Overall Subject Rank */}
              <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
                <h3 style={{ margin: '0 0 5px', fontSize: '15px', fontWeight: '700', color: '#0f172a', display: 'flex', alignItems: 'center', gap: '8px' }}><i className="fas fa-trophy" style={{ color: '#fbbf24' }}></i> Overall Subject Rank</h3>
                <p style={{ margin: '0 0 15px 25px', fontSize: '10px', color: '#64748b' }}>(Among CGLPrep Students)</p>
                
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '12px' }}>
                  <thead>
                    <tr style={{ borderBottom: '1px solid #e2e8f0', color: '#64748b' }}>
                      <th style={{ textAlign: 'left', paddingBottom: '8px', fontWeight: '500' }}></th>
                      <th style={{ textAlign: 'center', paddingBottom: '8px', fontWeight: '500' }}>Score</th>
                      <th style={{ textAlign: 'right', paddingBottom: '8px', fontWeight: '500' }}>Percentile</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style={{ padding: '10px 0', color: '#0f172a' }}><div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#2563eb' }}></div>Quantitative Aptitude</div></td>
                      <td style={{ textAlign: 'center', fontWeight: '700', color: '#0f172a' }}>72</td>
                      <td style={{ textAlign: 'right', fontWeight: '700', color: '#0f172a' }}>62%</td>
                    </tr>
                    <tr>
                      <td style={{ padding: '10px 0', color: '#0f172a' }}><div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#e11d48' }}></div>Reasoning</div></td>
                      <td style={{ textAlign: 'center', fontWeight: '700', color: '#0f172a' }}>66</td>
                      <td style={{ textAlign: 'right', fontWeight: '700', color: '#0f172a' }}>58%</td>
                    </tr>
                    <tr>
                      <td style={{ padding: '10px 0', color: '#0f172a' }}><div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#16a34a' }}></div>English Language</div></td>
                      <td style={{ textAlign: 'center', fontWeight: '700', color: '#0f172a' }}>61</td>
                      <td style={{ textAlign: 'right', fontWeight: '700', color: '#0f172a' }}>55%</td>
                    </tr>
                    <tr>
                      <td style={{ padding: '10px 0', color: '#0f172a' }}><div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#9333ea' }}></div>General Awareness</div></td>
                      <td style={{ textAlign: 'center', fontWeight: '700', color: '#0f172a' }}>58</td>
                      <td style={{ textAlign: 'right', fontWeight: '700', color: '#0f172a' }}>49%</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* AI Insight */}
              <div style={{ backgroundColor: '#f0f9ff', padding: '20px', borderRadius: '16px', border: '1px solid #bae6fd' }}>
                <h3 style={{ margin: '0 0 10px', fontSize: '15px', fontWeight: '700', color: '#1e3a8a', display: 'flex', alignItems: 'center', gap: '8px' }}><i className="fas fa-robot"></i> AI Insight</h3>
                <p style={{ margin: 0, fontSize: '12px', color: '#334155', lineHeight: '1.5' }}>Pankaj is strong in Quantitative Aptitude. Focus more on General Awareness and English to improve overall score.</p>
              </div>

              {/* Quick Actions */}
              <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
                <h3 style={{ margin: '0 0 15px', fontSize: '15px', fontWeight: '700', color: '#0f172a', display: 'flex', alignItems: 'center', gap: '8px' }}><i className="fas fa-bolt" style={{ color: '#2563eb' }}></i> Quick Actions</h3>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0', borderBottom: '1px solid #f1f5f9', cursor: 'pointer', fontSize: '12px', color: '#0f172a', fontWeight: '500' }}>
                    <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}><i className="fas fa-file-alt" style={{ color: '#2563eb', width: '16px' }}></i> View Detailed Topic Analysis</div>
                    <i className="fas fa-chevron-right" style={{ color: '#94a3b8' }}></i>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0', borderBottom: '1px solid #f1f5f9', cursor: 'pointer', fontSize: '12px', color: '#0f172a', fontWeight: '500' }}>
                    <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}><i className="fas fa-file-pdf" style={{ color: '#2563eb', width: '16px' }}></i> Download Subject Report (PDF)</div>
                    <i className="fas fa-chevron-right" style={{ color: '#94a3b8' }}></i>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0', borderBottom: '1px solid #f1f5f9', cursor: 'pointer', fontSize: '12px', color: '#0f172a', fontWeight: '500' }}>
                    <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}><i className="fas fa-balance-scale" style={{ color: '#2563eb', width: '16px' }}></i> Compare with Previous Period</div>
                    <i className="fas fa-chevron-right" style={{ color: '#94a3b8' }}></i>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0', borderBottom: '1px solid #f1f5f9', cursor: 'pointer', fontSize: '12px', color: '#0f172a', fontWeight: '500' }}>
                    <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}><i className="fas fa-list-ul" style={{ color: '#2563eb', width: '16px' }}></i> View Recommended Practice</div>
                    <i className="fas fa-chevron-right" style={{ color: '#94a3b8' }}></i>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0', cursor: 'pointer', fontSize: '12px', color: '#0f172a', fontWeight: '500' }}>
                    <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}><i className="fas fa-video" style={{ color: '#2563eb', width: '16px' }}></i> Schedule Parent-Teacher Call</div>
                    <i className="fas fa-chevron-right" style={{ color: '#94a3b8' }}></i>
                  </div>
                </div>
              </div>

              {/* Graphic Card */}
              <div style={{ backgroundColor: 'white', borderRadius: '16px', border: '1px solid #e2e8f0', overflow: 'hidden', position: 'relative', height: '160px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
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
                  <p style={{ fontFamily: "'Caveat', cursive", fontSize: '20px', color: '#1e3a8a', margin: 0, lineHeight: '1.2', transform: 'rotate(-5deg)' }}>"Consistent effort<br/>today, a brighter<br/>tomorrow."</p>
                  <div style={{ height: '3px', width: '30px', background: 'linear-gradient(90deg, #ff9933 33.3%, #ffffff 33.3%, #ffffff 66.6%, #138808 66.6%)', borderRadius: '2px', transform: 'rotate(-5deg)' }}></div>
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

export default ParentSubjectAnalysisPage;
