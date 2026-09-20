import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ParentSidebar from '../components/ParentSidebar';

const ParentTestPerformancePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ display: 'flex', minHeight: '100vh', fontFamily: "'Inter', sans-serif", backgroundColor: '#f1f5f9' }}>
      
      {/* Sidebar */}
      <ParentSidebar activeTab="test-performance" />

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
            <i className="fas fa-chevron-right" style={{ fontSize: '10px', margin: '0 5px' }}></i> Test Performance
          </div>

          {/* Header Row */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '25px' }}>
            <div>
              <h1 style={{ margin: '0 0 5px', fontSize: '28px', fontWeight: '800', color: '#1e3a8a' }}>Test Performance</h1>
              <p style={{ margin: 0, fontSize: '15px', color: '#475569' }}>Detailed analysis of all mock tests, sectionals and quizzes to track improvement over time.</p>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
               <div style={{ display: 'flex', alignItems: 'center', gap: '10px', backgroundColor: 'white', padding: '10px 15px', borderRadius: '8px', border: '1px solid #cbd5e1', color: '#0f172a', fontWeight: '600', fontSize: '14px', cursor: 'pointer' }}>
                 <i className="far fa-calendar-alt" style={{ color: '#64748b' }}></i> Last 3 Months <i className="fas fa-chevron-down" style={{ color: '#2563eb', marginLeft: '10px' }}></i>
               </div>
               <div style={{ backgroundColor: '#f0fdf4', padding: '12px 20px', borderRadius: '12px', border: '1px solid #bbf7d0', textAlign: 'center', transform: 'rotate(-2deg)' }}>
                  <p style={{ fontFamily: "'Caveat', cursive", fontSize: '18px', color: '#166534', margin: '0 0 5px', lineHeight: '1.2' }}>"Practice today,<br/>higher rank tomorrow."</p>
                  <div style={{ height: '2px', width: '30px', background: 'linear-gradient(90deg, #ff9933 33.3%, #ffffff 33.3%, #ffffff 66.6%, #138808 66.6%)', borderRadius: '2px', margin: '0 auto' }}></div>
               </div>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '25px' }}>
            
            {/* Left Main Column (75%) */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '20px' }}>
              
              {/* Test KPI Row */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '15px' }}>
                <div style={{ backgroundColor: 'white', padding: '15px', borderRadius: '12px', border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', gap: '15px' }}>
                  <div style={{ width: '45px', height: '45px', borderRadius: '10px', backgroundColor: '#f3e8ff', color: '#a855f7', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '20px' }}><i className="fas fa-list-alt"></i></div>
                  <div>
                    <p style={{ margin: '0 0 3px', fontSize: '11px', color: '#64748b', fontWeight: '500' }}>Total Tests Attempted</p>
                    <h4 style={{ margin: '0 0 3px', fontSize: '20px', fontWeight: '800', color: '#0f172a' }}>24</h4>
                    <p style={{ margin: 0, fontSize: '11px', color: '#16a34a', fontWeight: '600' }}><i className="fas fa-arrow-up"></i> +6 this month</p>
                  </div>
                </div>

                <div style={{ backgroundColor: 'white', padding: '15px', borderRadius: '12px', border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', gap: '15px' }}>
                  <div style={{ width: '45px', height: '45px', borderRadius: '10px', backgroundColor: '#dcfce7', color: '#16a34a', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '20px' }}><i className="fas fa-trophy"></i></div>
                  <div>
                    <p style={{ margin: '0 0 3px', fontSize: '11px', color: '#64748b', fontWeight: '500' }}>Average Score</p>
                    <h4 style={{ margin: '0 0 3px', fontSize: '20px', fontWeight: '800', color: '#0f172a' }}>72 <span style={{ fontSize: '12px', color: '#64748b', fontWeight: '500' }}>/ 200</span></h4>
                    <p style={{ margin: 0, fontSize: '11px', color: '#16a34a', fontWeight: '600' }}><i className="fas fa-arrow-up"></i> +12% improvement</p>
                  </div>
                </div>

                <div style={{ backgroundColor: 'white', padding: '15px', borderRadius: '12px', border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', gap: '15px' }}>
                  <div style={{ width: '45px', height: '45px', borderRadius: '10px', backgroundColor: '#ffe4e6', color: '#e11d48', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '20px' }}><i className="fas fa-bullseye"></i></div>
                  <div>
                    <p style={{ margin: '0 0 3px', fontSize: '11px', color: '#64748b', fontWeight: '500' }}>Best Score</p>
                    <h4 style={{ margin: '0 0 3px', fontSize: '20px', fontWeight: '800', color: '#0f172a' }}>142 <span style={{ fontSize: '12px', color: '#64748b', fontWeight: '500' }}>/ 200</span></h4>
                    <p style={{ margin: 0, fontSize: '10px', color: '#64748b' }}>(Test 12 - 10 Aug 2026)</p>
                  </div>
                </div>

                <div style={{ backgroundColor: 'white', padding: '15px', borderRadius: '12px', border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', gap: '15px' }}>
                  <div style={{ width: '45px', height: '45px', borderRadius: '10px', backgroundColor: '#eff6ff', color: '#2563eb', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '20px' }}><i className="fas fa-chart-bar"></i></div>
                  <div>
                    <p style={{ margin: '0 0 3px', fontSize: '11px', color: '#64748b', fontWeight: '500' }}>Current Percentile</p>
                    <h4 style={{ margin: '0 0 3px', fontSize: '20px', fontWeight: '800', color: '#0f172a' }}>78%</h4>
                    <p style={{ margin: 0, fontSize: '11px', color: '#16a34a', fontWeight: '600' }}><i className="fas fa-arrow-up"></i> +18% from last month</p>
                  </div>
                </div>
              </div>

              {/* Main Charts Row */}
              <div style={{ display: 'flex', gap: '20px' }}>
                {/* Score Trend (Line + Bar) */}
                <div style={{ flex: 1.5, backgroundColor: 'white', padding: '20px', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                    <h3 style={{ margin: 0, fontSize: '15px', fontWeight: '700', color: '#0f172a', display: 'flex', alignItems: 'center', gap: '8px' }}><i className="fas fa-chart-line" style={{ color: '#2563eb' }}></i> Score Trend</h3>
                    <p style={{ margin: 0, fontSize: '11px', color: '#64748b' }}>Your performance trend in mock tests over time</p>
                    <div style={{ display: 'flex', gap: '15px', fontSize: '11px', color: '#475569', fontWeight: '500' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><div style={{ width: '10px', height: '10px', backgroundColor: '#2563eb', borderRadius: '2px' }}></div> Score (out of 200)</div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><div style={{ width: '10px', height: '10px', backgroundColor: '#22c55e', borderRadius: '2px' }}></div> Percentile</div>
                    </div>
                  </div>
                  
                  {/* Mock Combined Chart */}
                  <div style={{ height: '220px', position: 'relative', borderBottom: '1px solid #e2e8f0', display: 'flex', padding: '10px 0 0' }}>
                    {/* Y Axis Left (Score) */}
                    <div style={{ position: 'absolute', left: '0', top: 0, bottom: 0, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', fontSize: '10px', color: '#94a3b8', width: '25px', textAlign: 'right', paddingRight: '5px' }}>
                      <span>200</span><span>150</span><span>100</span><span>50</span><span>0</span>
                    </div>
                    {/* Y Axis Right (Percentile) */}
                    <div style={{ position: 'absolute', right: '0', top: 0, bottom: 0, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', fontSize: '10px', color: '#94a3b8', width: '30px', paddingLeft: '5px' }}>
                      <span>100%</span><span>80%</span><span>60%</span><span>40%</span><span>0%</span>
                    </div>

                    <div style={{ flex: 1, marginLeft: '30px', marginRight: '35px', position: 'relative', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-around' }}>
                       {/* Grid lines */}
                       <div style={{ position: 'absolute', top: '25%', left: 0, right: 0, borderTop: '1px dashed #f1f5f9' }}></div>
                       <div style={{ position: 'absolute', top: '50%', left: 0, right: 0, borderTop: '1px dashed #f1f5f9' }}></div>
                       <div style={{ position: 'absolute', top: '75%', left: 0, right: 0, borderTop: '1px dashed #f1f5f9' }}></div>

                       {/* Data Points */}
                       {[{d: '10 Jul', s: 62, p: 28}, {d: '17 Jul', s: 78, p: 36}, {d: '24 Jul', s: 96, p: 52}, {d: '31 Jul', s: 110, p: 61}, {d: '7 Aug', s: 130, p: 72}, {d: '14 Aug', s: 142, p: 78}].map((dp, i, arr) => (
                         <div key={dp.d} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%', position: 'relative', width: '30px' }}>
                           {/* Bar for Percentile */}
                           <div style={{ position: 'absolute', bottom: 0, width: '16px', height: `${dp.p}%`, backgroundColor: '#22c55e', borderTopLeftRadius: '3px', borderTopRightRadius: '3px', opacity: 0.85 }}>
                              <span style={{ position: 'absolute', top: '-18px', left: '50%', transform: 'translateX(-50%)', fontSize: '10px', fontWeight: '700', color: '#166534' }}>{dp.p}%</span>
                           </div>
                           
                           {/* SVG Line for Score overlay */}
                           {i > 0 && (
                             <svg style={{ position: 'absolute', top: 0, left: '-100%', width: '100%', height: '100%', pointerEvents: 'none', overflow: 'visible' }}>
                               <line x1="0" y1={`${100 - (arr[i-1].s / 2)}%`} x2="100%" y2={`${100 - (dp.s / 2)}%`} stroke="#2563eb" strokeWidth="2" />
                             </svg>
                           )}
                           
                           {/* Point for Score */}
                           <div style={{ position: 'absolute', bottom: `${dp.s / 2}%`, width: '8px', height: '8px', backgroundColor: 'white', border: '2px solid #2563eb', borderRadius: '50%', zIndex: 10, transform: 'translateY(50%)' }}></div>
                           <span style={{ position: 'absolute', bottom: `calc(${dp.s / 2}% + 10px)`, fontSize: '11px', fontWeight: '700', color: '#1e3a8a' }}>{dp.s}</span>
                         </div>
                       ))}
                    </div>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-around', marginLeft: '30px', marginRight: '35px', marginTop: '10px', fontSize: '11px', color: '#475569' }}>
                    <span>10 Jul</span><span>17 Jul</span><span>24 Jul</span><span>31 Jul</span><span>7 Aug</span><span>14 Aug</span>
                  </div>
                </div>

                {/* Subject-wise Average Score */}
                <div style={{ flex: 1, backgroundColor: 'white', padding: '20px', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
                   <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                    <h3 style={{ margin: 0, fontSize: '15px', fontWeight: '700', color: '#0f172a', display: 'flex', alignItems: 'center', gap: '8px' }}><i className="fas fa-list-alt" style={{ color: '#2563eb' }}></i> Subject-wise Average Score</h3>
                    <span style={{ fontSize: '10px', color: '#64748b' }}>Out of 50 Marks</span>
                  </div>

                  {/* Mock Bar Chart */}
                  <div style={{ height: '180px', position: 'relative', borderBottom: '1px solid #e2e8f0', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-around', paddingLeft: '20px' }}>
                     {/* Y Axis */}
                     <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', fontSize: '10px', color: '#94a3b8' }}>
                      <span>50</span><span>40</span><span>30</span><span>20</span><span>10</span><span>0</span>
                     </div>
                     {/* Grid lines */}
                     <div style={{ position: 'absolute', top: '20%', left: '25px', right: 0, borderTop: '1px dashed #f1f5f9' }}></div>
                     <div style={{ position: 'absolute', top: '40%', left: '25px', right: 0, borderTop: '1px dashed #f1f5f9' }}></div>
                     <div style={{ position: 'absolute', top: '60%', left: '25px', right: 0, borderTop: '1px dashed #f1f5f9' }}></div>
                     <div style={{ position: 'absolute', top: '80%', left: '25px', right: 0, borderTop: '1px dashed #f1f5f9' }}></div>

                     {[{n: 'Quant', s: 36, c: '#2563eb'}, {n: 'Reasoning', s: 32, c: '#e11d48'}, {n: 'English', s: 30, c: '#16a34a'}, {n: 'GA', s: 28, c: '#a855f7'}].map(sub => (
                       <div key={sub.n} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%', paddingBottom: '1px', position: 'relative', zIndex: 5, width: '30px' }}>
                         <div style={{ width: '100%', height: `${(sub.s / 50) * 100}%`, backgroundColor: sub.c, borderTopLeftRadius: '4px', borderTopRightRadius: '4px', display: 'flex', justifyContent: 'center' }}>
                            <span style={{ position: 'absolute', top: '-20px', fontSize: '12px', fontWeight: '700', color: '#0f172a' }}>{sub.s}</span>
                         </div>
                       </div>
                     ))}
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-around', paddingLeft: '20px', marginTop: '10px', fontSize: '11px', color: '#475569', fontWeight: '600' }}>
                    <div style={{ textAlign: 'center' }}><span>Quant</span><div style={{ fontSize: '10px', color: '#16a34a', fontWeight: '700', marginTop: '2px' }}>(72%)</div></div>
                    <div style={{ textAlign: 'center' }}><span>Reasoning</span><div style={{ fontSize: '10px', color: '#16a34a', fontWeight: '700', marginTop: '2px' }}>(64%)</div></div>
                    <div style={{ textAlign: 'center' }}><span>English</span><div style={{ fontSize: '10px', color: '#16a34a', fontWeight: '700', marginTop: '2px' }}>(60%)</div></div>
                    <div style={{ textAlign: 'center' }}><span>GA</span><div style={{ fontSize: '10px', color: '#16a34a', fontWeight: '700', marginTop: '2px' }}>(56%)</div></div>
                  </div>
                </div>
              </div>

              {/* Table Section */}
              <div style={{ backgroundColor: 'white', borderRadius: '16px', border: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
                
                {/* Tabs & Filters */}
                <div style={{ padding: '15px 20px', borderBottom: '1px solid #e2e8f0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'flex', gap: '5px' }}>
                    <button style={{ padding: '8px 16px', border: 'none', backgroundColor: '#2563eb', color: 'white', borderRadius: '6px', fontSize: '12px', fontWeight: '600', cursor: 'pointer' }}>All Tests</button>
                    <button style={{ padding: '8px 16px', border: 'none', backgroundColor: 'transparent', color: '#64748b', borderRadius: '6px', fontSize: '12px', fontWeight: '500', cursor: 'pointer' }}>Mock Tests</button>
                    <button style={{ padding: '8px 16px', border: 'none', backgroundColor: 'transparent', color: '#64748b', borderRadius: '6px', fontSize: '12px', fontWeight: '500', cursor: 'pointer' }}>Sectional Tests</button>
                    <button style={{ padding: '8px 16px', border: 'none', backgroundColor: 'transparent', color: '#64748b', borderRadius: '6px', fontSize: '12px', fontWeight: '500', cursor: 'pointer' }}>Topic Tests</button>
                    <button style={{ padding: '8px 16px', border: 'none', backgroundColor: 'transparent', color: '#64748b', borderRadius: '6px', fontSize: '12px', fontWeight: '500', cursor: 'pointer' }}>Previous Year Papers</button>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', backgroundColor: 'white', padding: '8px 15px', borderRadius: '6px', border: '1px solid #cbd5e1', color: '#0f172a', fontSize: '12px', fontWeight: '500', cursor: 'pointer' }}>
                    All Subjects <i className="fas fa-chevron-down" style={{ color: '#64748b', marginLeft: '10px' }}></i>
                  </div>
                </div>

                {/* Table */}
                <div style={{ overflowX: 'auto' }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '12px', textAlign: 'left' }}>
                    <thead>
                      <tr style={{ backgroundColor: '#f8fafc', color: '#475569', borderBottom: '1px solid #e2e8f0' }}>
                        <th style={{ padding: '12px 20px', fontWeight: '600' }}>#</th>
                        <th style={{ padding: '12px 20px', fontWeight: '600' }}>Test Name</th>
                        <th style={{ padding: '12px 20px', fontWeight: '600' }}>Date</th>
                        <th style={{ padding: '12px 20px', fontWeight: '600' }}>Score</th>
                        <th style={{ padding: '12px 20px', fontWeight: '600' }}>Percentile</th>
                        <th style={{ padding: '12px 20px', fontWeight: '600' }}>Accuracy</th>
                        <th style={{ padding: '12px 20px', fontWeight: '600' }}>Time Taken</th>
                        <th style={{ padding: '12px 20px', fontWeight: '600', textAlign: 'center' }}>Status</th>
                        <th style={{ padding: '12px 20px', fontWeight: '600', textAlign: 'center' }}>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        {id: 1, name: 'SSC CGL Full Mock Test - 12', date: '10 Aug 2026', s: '142', tot: '200', p: '78%', a: '76%', t: '2h 15m', stat: 'Excellent', c: '#16a34a', bg: '#dcfce7'},
                        {id: 2, name: 'SSC CGL Full Mock Test - 11', date: '3 Aug 2026', s: '130', tot: '200', p: '72%', a: '72%', t: '2h 10m', stat: 'Good', c: '#16a34a', bg: '#dcfce7'},
                        {id: 3, name: 'Quantitative Aptitude Sectional', date: '28 Jul 2026', s: '38', tot: '50', p: '68%', a: '80%', t: '42m', stat: 'Good', c: '#16a34a', bg: '#dcfce7'},
                        {id: 4, name: 'Reasoning Sectional Test', date: '24 Jul 2026', s: '34', tot: '50', p: '64%', a: '68%', t: '45m', stat: 'Good', c: '#16a34a', bg: '#dcfce7'},
                        {id: 5, name: 'SSC CGL Full Mock Test - 10', date: '17 Jul 2026', s: '96', tot: '200', p: '52%', a: '60%', t: '2h 5m', stat: 'Average', c: '#f59e0b', bg: '#fef3c7'},
                        {id: 6, name: 'English Sectional Test', date: '14 Jul 2026', s: '32', tot: '50', p: '58%', a: '64%', t: '40m', stat: 'Average', c: '#f59e0b', bg: '#fef3c7'},
                        {id: 7, name: 'General Awareness Test', date: '10 Jul 2026', s: '28', tot: '50', p: '50%', a: '56%', t: '38m', stat: 'Needs Improvement', c: '#e11d48', bg: '#ffe4e6'},
                      ].map((row, index) => (
                        <tr key={row.id} style={{ borderBottom: index < 6 ? '1px solid #f1f5f9' : 'none', color: '#0f172a' }}>
                          <td style={{ padding: '12px 20px', color: '#64748b' }}>{row.id}</td>
                          <td style={{ padding: '12px 20px', fontWeight: '500' }}>{row.name}</td>
                          <td style={{ padding: '12px 20px', color: '#475569' }}>{row.date}</td>
                          <td style={{ padding: '12px 20px', fontWeight: '700' }}>{row.s} <span style={{ fontSize: '10px', color: '#64748b', fontWeight: '400' }}>/ {row.tot}</span></td>
                          <td style={{ padding: '12px 20px', fontWeight: '600' }}>{row.p}</td>
                          <td style={{ padding: '12px 20px', color: '#475569' }}>{row.a}</td>
                          <td style={{ padding: '12px 20px', color: '#475569' }}>{row.t}</td>
                          <td style={{ padding: '12px 20px', textAlign: 'center' }}>
                            <span style={{ backgroundColor: row.bg, color: row.c, padding: '4px 10px', borderRadius: '12px', fontSize: '10px', fontWeight: '600', display: 'inline-block' }}>{row.stat}</span>
                          </td>
                          <td style={{ padding: '12px 20px', textAlign: 'center' }}>
                            <button style={{ padding: '6px 12px', backgroundColor: '#2563eb', color: 'white', border: 'none', borderRadius: '6px', fontSize: '11px', fontWeight: '600', cursor: 'pointer' }}>View Analysis</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Pagination */}
                <div style={{ padding: '15px 20px', borderTop: '1px solid #e2e8f0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '12px', color: '#64748b' }}>
                  <span>Showing 1 - 7 of 24 tests</span>
                  <div style={{ display: 'flex', gap: '5px' }}>
                    <button style={{ width: '28px', height: '28px', border: 'none', backgroundColor: '#eff6ff', color: '#2563eb', borderRadius: '4px', fontWeight: '600', cursor: 'pointer' }}>1</button>
                    <button style={{ width: '28px', height: '28px', border: '1px solid #e2e8f0', backgroundColor: 'white', color: '#475569', borderRadius: '4px', cursor: 'pointer' }}>2</button>
                    <button style={{ width: '28px', height: '28px', border: '1px solid #e2e8f0', backgroundColor: 'white', color: '#475569', borderRadius: '4px', cursor: 'pointer' }}>3</button>
                    <button style={{ width: '28px', height: '28px', border: '1px solid #e2e8f0', backgroundColor: 'white', color: '#475569', borderRadius: '4px', cursor: 'pointer' }}>4</button>
                    <button style={{ width: '28px', height: '28px', border: '1px solid #e2e8f0', backgroundColor: 'white', color: '#475569', borderRadius: '4px', cursor: 'pointer' }}>&gt;</button>
                  </div>
                </div>

              </div>

              {/* Quick Action Boxes Bottom */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '15px' }}>
                <div style={{ backgroundColor: 'white', padding: '15px', borderRadius: '12px', border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', gap: '15px', cursor: 'pointer' }}>
                  <i className="fas fa-file-pdf" style={{ fontSize: '24px', color: '#e11d48' }}></i>
                  <div>
                    <h4 style={{ margin: '0 0 2px', fontSize: '12px', fontWeight: '700', color: '#0f172a' }}>Download Test Report</h4>
                    <p style={{ margin: 0, fontSize: '10px', color: '#64748b' }}>(Selected Period)</p>
                  </div>
                </div>
                <div style={{ backgroundColor: 'white', padding: '15px', borderRadius: '12px', border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', gap: '15px', cursor: 'pointer' }}>
                  <i className="fas fa-chart-bar" style={{ fontSize: '24px', color: '#2563eb' }}></i>
                  <div>
                    <h4 style={{ margin: '0 0 2px', fontSize: '12px', fontWeight: '700', color: '#0f172a' }}>Compare Performance</h4>
                    <p style={{ margin: 0, fontSize: '10px', color: '#64748b' }}>With Top Rankers</p>
                  </div>
                </div>
                <div style={{ backgroundColor: 'white', padding: '15px', borderRadius: '12px', border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', gap: '15px', cursor: 'pointer' }}>
                  <i className="fas fa-chart-pie" style={{ fontSize: '24px', color: '#16a34a' }}></i>
                  <h4 style={{ margin: 0, fontSize: '12px', fontWeight: '700', color: '#0f172a' }}>Subject-wise Detailed Analysis</h4>
                </div>
                <div style={{ backgroundColor: 'white', padding: '15px', borderRadius: '12px', border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', gap: '15px', cursor: 'pointer' }}>
                  <i className="fas fa-lightbulb" style={{ fontSize: '24px', color: '#fbbf24' }}></i>
                  <h4 style={{ margin: 0, fontSize: '12px', fontWeight: '700', color: '#0f172a' }}>Get Personalized<br/>Study Recommendations</h4>
                </div>
              </div>

            </div>

            {/* Right Sidebar Column (25%) */}
            <div style={{ width: '280px', display: 'flex', flexDirection: 'column', gap: '20px', flexShrink: 0 }}>
              
              {/* Latest Test Performance */}
              <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
                <h3 style={{ margin: '0 0 15px', fontSize: '14px', fontWeight: '700', color: '#0f172a', display: 'flex', alignItems: 'center', gap: '8px' }}><i className="fas fa-trophy" style={{ color: '#fbbf24' }}></i> Latest Test Performance</h3>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', borderLeft: '3px solid #2563eb', paddingLeft: '12px' }}>
                  <h4 style={{ margin: 0, fontSize: '13px', fontWeight: '700', color: '#1e3a8a' }}>SSC CGL Full Mock Test - 12</h4>
                  <p style={{ margin: 0, fontSize: '10px', color: '#64748b' }}>10 Aug 2026</p>
                  
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '10px' }}>
                    <div>
                      <h2 style={{ margin: '0 0 2px', fontSize: '22px', fontWeight: '800', color: '#0f172a' }}>142 <span style={{ fontSize: '12px', color: '#64748b', fontWeight: '500' }}>/ 200</span></h2>
                      <p style={{ margin: 0, fontSize: '11px', color: '#475569' }}>Percentile: <span style={{ fontWeight: '700', color: '#0f172a' }}>78%</span></p>
                    </div>
                    <div style={{ width: '24px', height: '24px', borderRadius: '50%', backgroundColor: '#f1f5f9', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer' }}>
                      <i className="fas fa-chevron-right" style={{ color: '#2563eb', fontSize: '12px' }}></i>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginTop: '10px' }}>
                    <div style={{ backgroundColor: '#dcfce7', color: '#166534', padding: '4px 10px', borderRadius: '12px', fontSize: '10px', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '5px' }}>
                      <i className="fas fa-check-circle"></i> Excellent Progress!
                    </div>
                  </div>
                </div>
              </div>

              {/* Performance Comparison Bar Chart */}
              <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
                <h3 style={{ margin: '0 0 15px', fontSize: '14px', fontWeight: '700', color: '#0f172a', display: 'flex', alignItems: 'center', gap: '8px' }}><i className="fas fa-chart-bar" style={{ color: '#2563eb' }}></i> Performance Comparison</h3>
                
                <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', fontSize: '10px', color: '#64748b', fontWeight: '600', marginBottom: '15px' }}>
                     <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><div style={{ width: '8px', height: '8px', backgroundColor: '#2563eb', borderRadius: '2px' }}></div> Your Score</div>
                     <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><div style={{ width: '8px', height: '8px', backgroundColor: '#cbd5e1', borderRadius: '2px' }}></div> All India Average</div>
                </div>

                <div style={{ height: '140px', position: 'relative', borderBottom: '1px solid #e2e8f0', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-around', padding: '0 5px' }}>
                     {[{n: 'Quant', s: 36, a: 28}, {n: 'Reasoning', s: 32, a: 24}, {n: 'English', s: 30, a: 26}, {n: 'GA', s: 28, a: 20}].map(sub => (
                       <div key={sub.n} style={{ display: 'flex', gap: '4px', alignItems: 'flex-end', height: '100%', paddingBottom: '1px' }}>
                         <div style={{ width: '20px', height: `${(sub.s/50)*100}%`, backgroundColor: '#2563eb', borderTopLeftRadius: '3px', borderTopRightRadius: '3px', position: 'relative', display: 'flex', justifyContent: 'center' }}>
                            <span style={{ position: 'absolute', top: '-18px', fontSize: '10px', fontWeight: '700', color: '#0f172a' }}>{sub.s}</span>
                         </div>
                         <div style={{ width: '20px', height: `${(sub.a/50)*100}%`, backgroundColor: '#cbd5e1', borderTopLeftRadius: '3px', borderTopRightRadius: '3px', position: 'relative', display: 'flex', justifyContent: 'center' }}>
                            <span style={{ position: 'absolute', top: '-18px', fontSize: '10px', fontWeight: '600', color: '#64748b' }}>{sub.a}</span>
                         </div>
                       </div>
                     ))}
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-around', padding: '0 5px', marginTop: '10px', fontSize: '11px', color: '#475569', fontWeight: '600' }}>
                    <span style={{ width: '48px', textAlign: 'center' }}>Quant</span>
                    <span style={{ width: '48px', textAlign: 'center' }}>Reasoning</span>
                    <span style={{ width: '48px', textAlign: 'center' }}>English</span>
                    <span style={{ width: '48px', textAlign: 'center' }}>GA</span>
                  </div>
              </div>

              {/* AI Insights Summary */}
              <div style={{ backgroundColor: '#f0f9ff', padding: '20px', borderRadius: '16px', border: '1px solid #bae6fd' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
                  <h3 style={{ margin: 0, fontSize: '15px', fontWeight: '700', color: '#1e3a8a', display: 'flex', alignItems: 'center', gap: '8px' }}><i className="fas fa-robot"></i> AI Insights</h3>
                  <a href="#" style={{ fontSize: '11px', color: '#2563eb', fontWeight: '600', textDecoration: 'none' }}>View All</a>
                </div>
                
                <p style={{ margin: '0 0 15px', fontSize: '12px', color: '#334155', lineHeight: '1.5' }}>Your child's test performance shows a consistent upward trend. Quantitative Aptitude and Reasoning are strong areas. Focus more on English and General Awareness to improve overall score.</p>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                    <i className="fas fa-check-circle" style={{ color: '#16a34a', marginTop: '2px', fontSize: '14px' }}></i>
                    <p style={{ margin: 0, fontSize: '11px', color: '#475569' }}>Score improved by 46% in last 2 months</p>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                    <i className="fas fa-check-circle" style={{ color: '#16a34a', marginTop: '2px', fontSize: '14px' }}></i>
                    <p style={{ margin: 0, fontSize: '11px', color: '#475569' }}>Accuracy increased from 58% to 76%</p>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                    <i className="fas fa-check-circle" style={{ color: '#16a34a', marginTop: '2px', fontSize: '14px' }}></i>
                    <p style={{ margin: 0, fontSize: '11px', color: '#475569' }}>Performing above average in Quantitative Aptitude</p>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                    <i className="fas fa-exclamation-triangle" style={{ color: '#f59e0b', marginTop: '2px', fontSize: '14px' }}></i>
                    <p style={{ margin: 0, fontSize: '11px', color: '#475569' }}>Focus on English - attempt more practice tests</p>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                    <i className="fas fa-exclamation-triangle" style={{ color: '#f59e0b', marginTop: '2px', fontSize: '14px' }}></i>
                    <p style={{ margin: 0, fontSize: '11px', color: '#475569' }}>Improve speed to complete within time limit</p>
                  </div>
                </div>
              </div>

              {/* Graphic Card */}
              <div style={{ backgroundColor: 'white', borderRadius: '16px', border: '1px solid #e2e8f0', overflow: 'hidden', position: 'relative', height: '150px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
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
                  <p style={{ fontFamily: "'Caveat', cursive", fontSize: '20px', color: '#1e3a8a', margin: 0, lineHeight: '1.2', transform: 'rotate(-5deg)' }}>"Every test is a step<br/>closer to success."</p>
                  <div style={{ height: '3px', width: '30px', background: 'linear-gradient(90deg, #ff9933 33.3%, #ffffff 33.3%, #ffffff 66.6%, #138808 66.6%)', borderRadius: '2px', transform: 'rotate(-5deg)' }}></div>
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
                <div style={{ fontSize: '10px' }}>Parents Trust Us</div>
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

export default ParentTestPerformancePage;
