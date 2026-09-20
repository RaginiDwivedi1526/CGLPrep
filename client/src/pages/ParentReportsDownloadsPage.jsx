import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ParentSidebar from '../components/ParentSidebar';

const ParentReportsDownloadsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ display: 'flex', minHeight: '100vh', fontFamily: "'Inter', sans-serif", backgroundColor: '#f1f5f9' }}>
      
      {/* Sidebar */}
      <ParentSidebar activeTab="reports-downloads" />

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
            <i className="fas fa-chevron-right" style={{ fontSize: '10px', margin: '0 5px' }}></i> Reports & Downloads
          </div>

          {/* Header Row */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '25px' }}>
            <div>
              <h1 style={{ margin: '0 0 5px', fontSize: '28px', fontWeight: '800', color: '#1e3a8a' }}>Reports & Downloads</h1>
              <p style={{ margin: 0, fontSize: '15px', color: '#475569' }}>Access detailed reports, performance summaries and important documents for Pankaj's SSC CGL preparation.</p>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
               <div style={{ display: 'flex', alignItems: 'center', gap: '10px', backgroundColor: 'white', padding: '10px 15px', borderRadius: '8px', border: '1px solid #cbd5e1', color: '#0f172a', fontWeight: '600', fontSize: '14px', cursor: 'pointer' }}>
                 <i className="far fa-calendar-alt" style={{ color: '#64748b' }}></i> Last 3 Months <i className="fas fa-chevron-down" style={{ color: '#2563eb', marginLeft: '10px' }}></i>
               </div>
               <div style={{ backgroundColor: '#f0f9ff', padding: '12px 20px', borderRadius: '12px', border: '1px solid #bae6fd', textAlign: 'center', transform: 'rotate(-2deg)' }}>
                  <p style={{ fontFamily: "'Caveat', cursive", fontSize: '18px', color: '#1e40af', margin: '0 0 5px', lineHeight: '1.2' }}>"Track today,<br/>build a brighter tomorrow."</p>
                  <div style={{ height: '2px', width: '30px', background: 'linear-gradient(90deg, #ff9933 33.3%, #ffffff 33.3%, #ffffff 66.6%, #138808 66.6%)', borderRadius: '2px', margin: '0 auto' }}></div>
               </div>
            </div>
          </div>

          {/* KPI Row */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '15px', marginBottom: '25px' }}>
            <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '16px', border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', gap: '15px' }}>
              <div style={{ width: '45px', height: '45px', borderRadius: '12px', backgroundColor: '#ffe4e6', color: '#e11d48', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '20px' }}><i className="fas fa-file-pdf"></i></div>
              <div>
                <h4 style={{ margin: '0 0 2px', fontSize: '24px', fontWeight: '800', color: '#0f172a' }}>12</h4>
                <p style={{ margin: 0, fontSize: '12px', color: '#64748b', fontWeight: '500' }}>Reports Generated</p>
              </div>
            </div>

            <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '16px', border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', gap: '15px' }}>
              <div style={{ width: '45px', height: '45px', borderRadius: '12px', backgroundColor: '#dcfce7', color: '#16a34a', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '20px' }}><i className="fas fa-download"></i></div>
              <div>
                <h4 style={{ margin: '0 0 2px', fontSize: '24px', fontWeight: '800', color: '#0f172a' }}>8</h4>
                <p style={{ margin: 0, fontSize: '12px', color: '#64748b', fontWeight: '500' }}>Files Downloaded</p>
              </div>
            </div>

            <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '16px', border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', gap: '15px' }}>
              <div style={{ width: '45px', height: '45px', borderRadius: '12px', backgroundColor: '#f3e8ff', color: '#9333ea', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '20px' }}><i className="fas fa-chart-pie"></i></div>
              <div>
                <h4 style={{ margin: '0 0 2px', fontSize: '24px', fontWeight: '800', color: '#0f172a' }}>5</h4>
                <p style={{ margin: 0, fontSize: '12px', color: '#64748b', fontWeight: '500' }}>Report Types</p>
              </div>
            </div>

            <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '16px', border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', gap: '15px' }}>
              <div style={{ width: '45px', height: '45px', borderRadius: '12px', backgroundColor: '#fef3c7', color: '#d97706', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '20px' }}><i className="far fa-calendar-check"></i></div>
              <div>
                <p style={{ margin: '0 0 2px', fontSize: '11px', color: '#64748b', fontWeight: '500' }}>Auto Reports</p>
                <h4 style={{ margin: '0 0 2px', fontSize: '18px', fontWeight: '800', color: '#0f172a' }}>Monthly</h4>
                <p style={{ margin: 0, fontSize: '10px', color: '#64748b' }}>(Next: 1 Sep 2026)</p>
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '25px' }}>
            
            {/* Left Content Area (70%) */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '20px' }}>
              
              {/* Download Reports Grid */}
              <div style={{ backgroundColor: 'white', padding: '25px', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
                 <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '20px' }}>
                    <div style={{ width: '32px', height: '32px', borderRadius: '8px', backgroundColor: '#eff6ff', color: '#2563eb', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '16px' }}><i className="fas fa-file-alt"></i></div>
                    <div>
                      <h3 style={{ margin: '0 0 2px', fontSize: '15px', fontWeight: '700', color: '#0f172a' }}>Download Reports</h3>
                      <p style={{ margin: 0, fontSize: '11px', color: '#64748b' }}>Get detailed reports and analysis in PDF format.</p>
                    </div>
                 </div>

                 <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '15px' }}>
                    {/* Report Cards */}
                    {[
                      { icon: 'fa-chart-simple', color: '#ef4444', bg: '#fee2e2', title: 'Overall Progress Report', desc: 'Complete performance summary with subject-wise analysis' },
                      { icon: 'fa-book-open', color: '#10b981', bg: '#d1fae5', title: 'Subject-wise Report', desc: 'Detailed analysis for each subject' },
                      { icon: 'fa-clipboard-check', color: '#a855f7', bg: '#f3e8ff', title: 'Test Performance Report', desc: 'All mock tests, section scores and rankings' },
                      { icon: 'fa-clock', color: '#f59e0b', bg: '#fef3c7', title: 'Study Activity Report', desc: 'Study hours, topics covered and learning pattern' },
                      { icon: 'fa-lightbulb', color: '#3b82f6', bg: '#eff6ff', title: 'AI Insights Report', desc: 'Personalized insights and recommendations' },
                      { icon: 'fa-newspaper', color: '#f43f5e', bg: '#ffe4e6', title: 'Current Affairs Report', desc: 'Topics covered and performance in CA quizzes' },
                      { icon: 'fa-calendar-alt', color: '#22c55e', bg: '#dcfce7', title: 'Study Plan Report', desc: 'Planned vs actual progress and upcoming targets' },
                      { icon: 'fa-star', color: '#8b5cf6', bg: '#ede9fe', title: 'Strengths & Weaknesses Report', desc: 'Detailed assessment and improvement areas' },
                      { icon: 'fa-trophy', color: '#eab308', bg: '#fef9c3', title: 'Monthly Summary Report', desc: 'Complete monthly performance snapshot' },
                    ].map((report, idx) => (
                      <div key={idx} style={{ border: '1px solid #e2e8f0', borderRadius: '12px', padding: '15px', display: 'flex', flexDirection: 'column' }}>
                         <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
                           <div style={{ width: '36px', height: '36px', borderRadius: '8px', backgroundColor: report.bg, color: report.color, display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '16px', flexShrink: 0 }}>
                             <i className={`fas ${report.icon}`}></i>
                           </div>
                           <div>
                             <h4 style={{ margin: '0 0 4px', fontSize: '12px', fontWeight: '700', color: '#0f172a', lineHeight: '1.2' }}>{report.title}</h4>
                             <p style={{ margin: 0, fontSize: '10px', color: '#64748b', lineHeight: '1.3' }}>{report.desc}</p>
                           </div>
                         </div>
                         <button style={{ marginTop: 'auto', width: '100%', padding: '8px', backgroundColor: 'transparent', border: 'none', color: '#2563eb', fontSize: '11px', fontWeight: '600', cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '5px' }}>
                           <i className="fas fa-download"></i> Download PDF
                         </button>
                      </div>
                    ))}
                 </div>
              </div>

              {/* Previews Row */}
              <div style={{ display: 'flex', gap: '20px' }}>
                 
                 {/* Report Preview */}
                 <div style={{ flex: 1, backgroundColor: 'white', padding: '20px', borderRadius: '16px', border: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column' }}>
                   <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '15px' }}>
                      <div style={{ width: '32px', height: '32px', borderRadius: '8px', backgroundColor: '#eff6ff', color: '#2563eb', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '16px' }}><i className="fas fa-eye"></i></div>
                      <div>
                        <h3 style={{ margin: '0 0 2px', fontSize: '14px', fontWeight: '700', color: '#0f172a' }}>Report Preview</h3>
                        <p style={{ margin: 0, fontSize: '10px', color: '#64748b' }}>Preview a sample report before downloading.</p>
                      </div>
                   </div>

                   <div style={{ display: 'flex', gap: '15px', flex: 1 }}>
                     {/* Mock Document Cover */}
                     <div style={{ width: '120px', backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '15px 10px', display: 'flex', flexDirection: 'column', alignItems: 'center', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginBottom: '15px' }}>
                          <i className="fas fa-graduation-cap" style={{ color: '#1e3a8a', fontSize: '12px' }}></i>
                          <div style={{ fontSize: '8px', fontWeight: '800', color: '#1e3a8a' }}>CGLPrep AI<br/><span style={{ fontSize: '5px', color: '#64748b' }}>Plan • Practice • Crack CGL</span></div>
                        </div>
                        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                          <div style={{ fontSize: '10px', fontWeight: '700', color: '#0f172a' }}>Monthly Progress Report</div>
                          <div style={{ fontSize: '8px', color: '#475569' }}>July 2026</div>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: 'auto', width: '100%', borderTop: '1px solid #e2e8f0', paddingTop: '10px' }}>
                          <div style={{ width: '20px', height: '20px', borderRadius: '50%', backgroundColor: '#3b82f6' }}></div>
                          <div style={{ fontSize: '8px', color: '#0f172a', fontWeight: '600' }}>Pankaj Thakur<br/><span style={{ color: '#64748b', fontWeight: '400', fontSize: '7px' }}>SSC CGL 2026</span></div>
                        </div>
                     </div>

                     <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                       <div>
                         <p style={{ margin: '0 0 8px', fontSize: '11px', fontWeight: '700', color: '#0f172a' }}>This report includes:</p>
                         <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                           <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><i className="fas fa-check-circle" style={{ color: '#16a34a', fontSize: '10px' }}></i> <span style={{ fontSize: '10px', color: '#475569' }}>Overall performance summary</span></div>
                           <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><i className="fas fa-check-circle" style={{ color: '#16a34a', fontSize: '10px' }}></i> <span style={{ fontSize: '10px', color: '#475569' }}>Subject-wise analysis</span></div>
                           <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><i className="fas fa-check-circle" style={{ color: '#16a34a', fontSize: '10px' }}></i> <span style={{ fontSize: '10px', color: '#475569' }}>Test scores and rankings</span></div>
                           <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><i className="fas fa-check-circle" style={{ color: '#16a34a', fontSize: '10px' }}></i> <span style={{ fontSize: '10px', color: '#475569' }}>Study hours and activity</span></div>
                           <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><i className="fas fa-check-circle" style={{ color: '#16a34a', fontSize: '10px' }}></i> <span style={{ fontSize: '10px', color: '#475569' }}>Strengths and weaknesses</span></div>
                           <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><i className="fas fa-check-circle" style={{ color: '#16a34a', fontSize: '10px' }}></i> <span style={{ fontSize: '10px', color: '#475569' }}>AI recommendations</span></div>
                           <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><i className="fas fa-check-circle" style={{ color: '#16a34a', fontSize: '10px' }}></i> <span style={{ fontSize: '10px', color: '#475569' }}>Next month's study plan</span></div>
                         </div>
                       </div>
                       <button style={{ width: '100%', padding: '10px', backgroundColor: '#2563eb', color: 'white', border: 'none', borderRadius: '8px', fontSize: '11px', fontWeight: '600', cursor: 'pointer', marginTop: '15px' }}>
                         View Sample Report <i className="fas fa-arrow-right"></i>
                       </button>
                     </div>
                   </div>
                 </div>

                 {/* Report Insights Preview */}
                 <div style={{ flex: 1, backgroundColor: 'white', padding: '20px', borderRadius: '16px', border: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column' }}>
                   <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '15px' }}>
                      <div style={{ width: '32px', height: '32px', borderRadius: '8px', backgroundColor: '#eff6ff', color: '#2563eb', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '16px' }}><i className="fas fa-chart-column"></i></div>
                      <div>
                        <h3 style={{ margin: '0 0 2px', fontSize: '14px', fontWeight: '700', color: '#0f172a' }}>Report Insights Preview</h3>
                        <p style={{ margin: 0, fontSize: '10px', color: '#64748b' }}>A quick look at your child's latest progress.</p>
                      </div>
                   </div>

                   <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', fontSize: '10px', color: '#64748b', fontWeight: '600', marginBottom: '10px' }}>
                     <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><div style={{ width: '8px', height: '8px', backgroundColor: '#93c5fd', borderRadius: '50%' }}></div> June 2026</div>
                     <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><div style={{ width: '8px', height: '8px', backgroundColor: '#2563eb', borderRadius: '50%' }}></div> July 2026</div>
                   </div>

                   <div style={{ flex: 1, position: 'relative', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-around', paddingBottom: '20px', paddingLeft: '25px', paddingTop: '20px' }}>
                      {/* Y-axis */}
                      <div style={{ position: 'absolute', left: 0, top: '20px', bottom: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', fontSize: '9px', color: '#94a3b8' }}>
                        <span>100</span><span>80</span><span>60</span><span>40</span><span>20</span><span>0</span>
                      </div>
                      {/* Grid */}
                      {[20, 40, 60, 80, 100].map(val => (
                        <div key={val} style={{ position: 'absolute', left: '25px', right: 0, bottom: `calc(20px + ${val}% - ${val/100*20}px)`, borderTop: '1px solid #f1f5f9' }}></div>
                      ))}

                      {/* Grouped Bars */}
                      {[
                        { label: 'Quant', v1: 62, v2: 78 },
                        { label: 'Reasoning', v1: 58, v2: 71 },
                        { label: 'English', v1: 65, v2: 72 },
                        { label: 'GA', v1: 48, v2: 60 },
                        { label: 'CA', v1: 55, v2: 68 },
                      ].map((grp, i) => (
                        <div key={i} style={{ display: 'flex', alignItems: 'flex-end', gap: '2px', zIndex: 2, height: '100%', position: 'relative' }}>
                          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <span style={{ fontSize: '9px', fontWeight: '600', color: '#475569', marginBottom: '2px' }}>{grp.v1}</span>
                            <div style={{ width: '16px', height: `${grp.v1}%`, backgroundColor: '#93c5fd', borderTopLeftRadius: '2px', borderTopRightRadius: '2px' }}></div>
                          </div>
                          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <span style={{ fontSize: '9px', fontWeight: '700', color: '#0f172a', marginBottom: '2px' }}>{grp.v2}</span>
                            <div style={{ width: '16px', height: `${grp.v2}%`, backgroundColor: '#2563eb', borderTopLeftRadius: '2px', borderTopRightRadius: '2px' }}></div>
                          </div>
                          <div style={{ position: 'absolute', bottom: '-20px', width: '100%', textAlign: 'center', fontSize: '10px', color: '#475569', fontWeight: '500' }}>{grp.label}</div>
                        </div>
                      ))}
                   </div>
                 </div>

              </div>
            </div>

            {/* Right Sidebar Column (30%) */}
            <div style={{ width: '320px', display: 'flex', flexDirection: 'column', gap: '20px', flexShrink: 0 }}>
              
              {/* Recent Downloads */}
              <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                  <h3 style={{ margin: 0, fontSize: '14px', fontWeight: '700', color: '#0f172a', display: 'flex', alignItems: 'center', gap: '8px' }}><i className="far fa-clock" style={{ color: '#2563eb' }}></i> Recent Downloads</h3>
                  <a href="#" style={{ fontSize: '11px', color: '#2563eb', fontWeight: '600', textDecoration: 'none' }}>View All <i className="fas fa-arrow-right"></i></a>
                </div>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                  {[
                    { title: 'July 2026 - Monthly Report', date: '01 Aug 2026', size: '2.4 MB' },
                    { title: 'Mock Test 12 - Performance Report', date: '28 Jul 2026', size: '1.8 MB' },
                    { title: 'Subject Analysis - Quantitative Aptitude', date: '25 Jul 2026', size: '1.2 MB' },
                    { title: 'Study Activity Report (Last 30 Days)', date: '20 Jul 2026', size: '1.6 MB' },
                    { title: 'AI Insights Report', date: '15 Jul 2026', size: '1.4 MB' },
                  ].map((file, i) => (
                    <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '12px', borderBottom: i !== 4 ? '1px solid #f1f5f9' : 'none' }}>
                      <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                        <div style={{ width: '28px', height: '28px', borderRadius: '6px', backgroundColor: '#ffe4e6', color: '#e11d48', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '12px', flexShrink: 0 }}>PDF</div>
                        <div>
                          <h4 style={{ margin: '0 0 2px', fontSize: '11px', fontWeight: '700', color: '#0f172a' }}>{file.title}</h4>
                          <p style={{ margin: 0, fontSize: '9px', color: '#64748b' }}>Generated on {file.date}</p>
                        </div>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <span style={{ fontSize: '10px', color: '#64748b', fontWeight: '500' }}>{file.size}</span>
                        <i className="fas fa-download" style={{ color: '#2563eb', cursor: 'pointer' }}></i>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Schedule Automatic Reports */}
              <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
                  <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                    <div style={{ width: '32px', height: '32px', borderRadius: '8px', backgroundColor: '#eff6ff', color: '#2563eb', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '16px' }}><i className="fas fa-bell"></i></div>
                    <div>
                      <h3 style={{ margin: '0 0 2px', fontSize: '14px', fontWeight: '700', color: '#0f172a' }}>Schedule Automatic Reports</h3>
                      <p style={{ margin: 0, fontSize: '10px', color: '#64748b' }}>Get reports delivered to your email automatically.</p>
                    </div>
                  </div>
                  <i className="fas fa-cog" style={{ color: '#1e3a8a', cursor: 'pointer' }}></i>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginBottom: '20px' }}>
                  {[
                    { id: 'chk1', title: 'Weekly Progress Report', desc: 'Every Monday', checked: false },
                    { id: 'chk2', title: 'Monthly Summary Report', desc: '1st day of every month', checked: true },
                    { id: 'chk3', title: 'Test Performance Report', desc: 'After each test', checked: true },
                    { id: 'chk4', title: 'Study Plan Update', desc: 'Every Sunday', checked: false },
                    { id: 'chk5', title: 'Current Affairs Summary', desc: 'Every Sunday', checked: false },
                  ].map(opt => (
                    <div key={opt.id} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                      <div style={{ width: '16px', height: '16px', borderRadius: '4px', border: opt.checked ? 'none' : '1px solid #cbd5e1', backgroundColor: opt.checked ? '#2563eb' : 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '2px', cursor: 'pointer' }}>
                        {opt.checked && <i className="fas fa-check" style={{ color: 'white', fontSize: '10px' }}></i>}
                      </div>
                      <div>
                        <label style={{ fontSize: '12px', fontWeight: '600', color: '#0f172a', cursor: 'pointer' }}>{opt.title}</label>
                        <p style={{ margin: 0, fontSize: '10px', color: '#64748b' }}>{opt.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div style={{ display: 'flex', gap: '10px' }}>
                  <div style={{ flex: 1, position: 'relative' }}>
                    <i className="far fa-envelope" style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', color: '#64748b', fontSize: '12px' }}></i>
                    <input type="email" defaultValue="rakesh.thakur@gmail.com" style={{ width: '100%', padding: '10px 10px 10px 30px', border: '1px solid #cbd5e1', borderRadius: '8px', fontSize: '11px', color: '#0f172a', boxSizing: 'border-box', outline: 'none' }} />
                  </div>
                  <button style={{ padding: '0 15px', backgroundColor: '#2563eb', color: 'white', border: 'none', borderRadius: '8px', fontSize: '11px', fontWeight: '600', cursor: 'pointer' }}>Save Preferences</button>
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

export default ParentReportsDownloadsPage;
