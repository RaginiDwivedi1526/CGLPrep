import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ParentSidebar from '../components/ParentSidebar';

const ParentStrengthsWeaknessesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ display: 'flex', minHeight: '100vh', fontFamily: "'Inter', sans-serif", backgroundColor: '#f1f5f9' }}>
      
      {/* Sidebar */}
      <ParentSidebar activeTab="strengths-weaknesses" />

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
            <i className="fas fa-chevron-right" style={{ fontSize: '10px', margin: '0 5px' }}></i> Strengths & Weaknesses
          </div>

          {/* Header Row */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '25px' }}>
            <div>
              <h1 style={{ margin: '0 0 5px', fontSize: '28px', fontWeight: '800', color: '#1e3a8a' }}>Strengths & Weaknesses</h1>
              <p style={{ margin: 0, fontSize: '15px', color: '#475569' }}>A detailed analysis to understand what your child is doing well and where they need to improve.</p>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
               <div style={{ display: 'flex', alignItems: 'center', gap: '10px', backgroundColor: 'white', padding: '10px 15px', borderRadius: '8px', border: '1px solid #cbd5e1', color: '#0f172a', fontWeight: '600', fontSize: '14px', cursor: 'pointer' }}>
                 <i className="far fa-calendar-alt" style={{ color: '#64748b' }}></i> Last 3 Months <i className="fas fa-chevron-down" style={{ color: '#2563eb', marginLeft: '10px' }}></i>
               </div>
               <div style={{ backgroundColor: '#eff6ff', padding: '12px 20px', borderRadius: '12px', border: '1px solid #bfdbfe', textAlign: 'center', transform: 'rotate(-2deg)' }}>
                  <p style={{ fontFamily: "'Caveat', cursive", fontSize: '18px', color: '#1e40af', margin: '0 0 5px', lineHeight: '1.2' }}>"Know today.<br/>Improve tomorrow."</p>
                  <div style={{ height: '2px', width: '30px', background: 'linear-gradient(90deg, #ff9933 33.3%, #ffffff 33.3%, #ffffff 66.6%, #138808 66.6%)', borderRadius: '2px', margin: '0 auto' }}></div>
               </div>
            </div>
          </div>

          {/* KPI Row */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', marginBottom: '20px' }}>
            <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '16px', border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', gap: '20px' }}>
              <div style={{ width: '50px', height: '50px', borderRadius: '12px', backgroundColor: '#dcfce7', color: '#16a34a', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '24px' }}><i className="fas fa-trophy"></i></div>
              <div>
                <p style={{ margin: '0 0 5px', fontSize: '13px', color: '#1e293b', fontWeight: '600' }}>Overall Strength Index</p>
                <h4 style={{ margin: '0 0 5px', fontSize: '28px', fontWeight: '800', color: '#0f172a' }}>72%</h4>
                <p style={{ margin: 0, fontSize: '12px', color: '#16a34a', fontWeight: '600' }}><i className="fas fa-check-circle"></i> Above Average</p>
              </div>
            </div>

            <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '16px', border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', gap: '20px' }}>
              <div style={{ width: '50px', height: '50px', borderRadius: '12px', backgroundColor: '#ffe4e6', color: '#e11d48', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '24px' }}><i className="fas fa-bullseye"></i></div>
              <div>
                <p style={{ margin: '0 0 5px', fontSize: '13px', color: '#1e293b', fontWeight: '600' }}>Areas to Improve</p>
                <h4 style={{ margin: '0 0 5px', fontSize: '28px', fontWeight: '800', color: '#0f172a' }}>4</h4>
                <p style={{ margin: 0, fontSize: '12px', color: '#ea580c', fontWeight: '600' }}><i className="fas fa-exclamation-circle"></i> Need Focus</p>
              </div>
            </div>

            <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '16px', border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', gap: '20px' }}>
              <div style={{ width: '50px', height: '50px', borderRadius: '12px', backgroundColor: '#eff6ff', color: '#2563eb', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '24px' }}><i className="fas fa-chart-bar"></i></div>
              <div>
                <p style={{ margin: '0 0 5px', fontSize: '13px', color: '#1e293b', fontWeight: '600' }}>Consistent Strengths</p>
                <h4 style={{ margin: '0 0 5px', fontSize: '28px', fontWeight: '800', color: '#0f172a' }}>5</h4>
                <p style={{ margin: 0, fontSize: '12px', color: '#16a34a', fontWeight: '600' }}><i className="fas fa-shield-alt"></i> Keep It Up!</p>
              </div>
            </div>

            <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '16px', border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', gap: '20px' }}>
              <div style={{ width: '50px', height: '50px', borderRadius: '12px', backgroundColor: '#f3e8ff', color: '#9333ea', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '24px' }}><i className="fas fa-chart-line"></i></div>
              <div>
                <p style={{ margin: '0 0 5px', fontSize: '13px', color: '#1e293b', fontWeight: '600' }}>Improvement Trend</p>
                <h4 style={{ margin: '0 0 5px', fontSize: '28px', fontWeight: '800', color: '#0f172a' }}>+18%</h4>
                <p style={{ margin: 0, fontSize: '12px', color: '#475569', fontWeight: '500' }}><i className="fas fa-arrow-trend-up"></i> in last 3 months</p>
              </div>
            </div>
          </div>

          {/* Middle Row (Charts & Lists) */}
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr 1fr', gap: '20px', marginBottom: '20px' }}>
             
             {/* Bar Chart */}
             <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
                  <div>
                    <h3 style={{ margin: '0 0 5px', fontSize: '15px', fontWeight: '700', color: '#0f172a', display: 'flex', alignItems: 'center', gap: '8px' }}><i className="fas fa-chart-column" style={{ color: '#2563eb' }}></i> Subject-wise Strength vs Weakness</h3>
                    <p style={{ margin: 0, fontSize: '11px', color: '#64748b' }}>Performance level based on recent tests and practice</p>
                  </div>
                  <div style={{ display: 'flex', gap: '15px', fontSize: '10px', color: '#64748b', fontWeight: '600' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><div style={{ width: '8px', height: '8px', backgroundColor: '#22c55e', borderRadius: '2px' }}></div> Strength</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><div style={{ width: '8px', height: '8px', backgroundColor: '#f43f5e', borderRadius: '2px' }}></div> Weakness</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><div style={{ width: '8px', height: '8px', backgroundColor: '#cbd5e1', borderRadius: '2px' }}></div> Balanced</div>
                  </div>
                </div>

                <div style={{ height: '220px', position: 'relative', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-around', paddingBottom: '30px' }}>
                  {/* Y-axis labels */}
                  <div style={{ position: 'absolute', left: 0, top: 0, bottom: '30px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', fontSize: '10px', color: '#94a3b8' }}>
                    <span>100%</span><span>80%</span><span>60%</span><span>40%</span><span>20%</span><span>0%</span>
                  </div>
                  {/* Grid lines */}
                  {[20, 40, 60, 80, 100].map(val => (
                    <div key={val} style={{ position: 'absolute', left: '35px', right: 0, bottom: `calc(30px + ${val}%)`, borderTop: '1px solid #f1f5f9', zIndex: 1 }}></div>
                  ))}
                  
                  {/* Bars */}
                  {[
                    { label: 'Quantitative Aptitude', value: 80, color: '#22c55e' },
                    { label: 'Reasoning', value: 75, color: '#22c55e' },
                    { label: 'English Language', value: 65, color: '#22c55e' },
                    { label: 'General Awareness', value: 45, color: '#f43f5e' },
                    { label: 'Static GK', value: 40, color: '#f43f5e' },
                  ].map((bar, i) => (
                    <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', zIndex: 2 }}>
                      <span style={{ fontSize: '11px', fontWeight: '700', color: bar.color }}>{bar.value}%</span>
                      <div style={{ width: '30px', height: `${bar.value}%`, backgroundColor: bar.color, borderTopLeftRadius: '4px', borderTopRightRadius: '4px', transition: 'height 0.3s ease' }}></div>
                      <div style={{ width: '60px', textAlign: 'center', fontSize: '10px', color: '#475569', fontWeight: '500', lineHeight: '1.2' }}>{bar.label.split(' ').map((w, j) => <div key={j}>{w}</div>)}</div>
                    </div>
                  ))}
                </div>
             </div>

             {/* Key Strengths */}
             <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
               <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
                  <h3 style={{ margin: 0, fontSize: '15px', fontWeight: '700', color: '#0f172a', display: 'flex', alignItems: 'center', gap: '8px' }}><i className="fas fa-trophy" style={{ color: '#16a34a' }}></i> Key Strengths</h3>
                  <a href="#" style={{ fontSize: '11px', color: '#2563eb', fontWeight: '600', textDecoration: 'none' }}>View Details <i className="fas fa-arrow-right"></i></a>
               </div>
               
               <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                 {[
                   { id: 1, title: 'Arithmetic (Speed & Accuracy)', desc: 'Solves questions faster with high accuracy', score: '82%' },
                   { id: 2, title: 'Number System', desc: 'Strong conceptual understanding', score: '78%' },
                   { id: 3, title: 'Logical Reasoning', desc: 'Good at pattern recognition', score: '75%' },
                   { id: 4, title: 'Reading Comprehension', desc: 'Scores consistently above average', score: '72%' },
                   { id: 5, title: 'Data Interpretation', desc: 'Good accuracy in charts and tables', score: '70%' },
                 ].map(item => (
                   <div key={item.id} style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                     <div style={{ width: '24px', height: '24px', borderRadius: '50%', backgroundColor: '#22c55e', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '12px', fontWeight: '700', flexShrink: 0 }}>{item.id}</div>
                     <div style={{ flex: 1 }}>
                       <h4 style={{ margin: '0 0 3px', fontSize: '12px', fontWeight: '700', color: '#0f172a' }}>{item.title}</h4>
                       <p style={{ margin: 0, fontSize: '10px', color: '#64748b' }}>{item.desc}</p>
                     </div>
                     <div style={{ fontSize: '13px', fontWeight: '700', color: '#16a34a' }}>{item.score}</div>
                   </div>
                 ))}
               </div>
             </div>

             {/* Key Weaknesses */}
             <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
               <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
                  <h3 style={{ margin: 0, fontSize: '15px', fontWeight: '700', color: '#0f172a', display: 'flex', alignItems: 'center', gap: '8px' }}><i className="fas fa-exclamation-circle" style={{ color: '#e11d48' }}></i> Key Weaknesses</h3>
                  <a href="#" style={{ fontSize: '11px', color: '#2563eb', fontWeight: '600', textDecoration: 'none' }}>View Details <i className="fas fa-arrow-right"></i></a>
               </div>
               
               <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                 {[
                   { id: 1, title: 'Static GK', desc: 'Needs regular revision', score: '40%' },
                   { id: 2, title: 'Current Affairs', desc: 'Low retention rate', score: '42%' },
                   { id: 3, title: 'Economy & Budget', desc: 'Concepts not yet clear', score: '45%' },
                   { id: 4, title: 'Polity & Constitution', desc: 'Needs more practice', score: '48%' },
                   { id: 5, title: 'Vocabulary', desc: 'Needs improvement in word power', score: '52%' },
                 ].map(item => (
                   <div key={item.id} style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                     <div style={{ width: '24px', height: '24px', borderRadius: '50%', backgroundColor: '#f43f5e', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '12px', fontWeight: '700', flexShrink: 0 }}>{item.id}</div>
                     <div style={{ flex: 1 }}>
                       <h4 style={{ margin: '0 0 3px', fontSize: '12px', fontWeight: '700', color: '#0f172a' }}>{item.title}</h4>
                       <p style={{ margin: 0, fontSize: '10px', color: '#64748b' }}>{item.desc}</p>
                     </div>
                     <div style={{ fontSize: '13px', fontWeight: '700', color: '#e11d48' }}>{item.score}</div>
                   </div>
                 ))}
               </div>
             </div>

          </div>

          {/* Bottom Row */}
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr 1fr', gap: '20px', marginBottom: '20px' }}>
            
            {/* Topic-wise Analysis Table */}
            <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '16px', border: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column' }}>
               <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
                 <h3 style={{ margin: 0, fontSize: '15px', fontWeight: '700', color: '#0f172a', display: 'flex', alignItems: 'center', gap: '8px' }}><i className="fas fa-bullseye" style={{ color: '#e11d48' }}></i> Topic-wise Analysis</h3>
                 <div style={{ display: 'flex', fontSize: '10px', gap: '10px', alignItems: 'center', backgroundColor: '#f8fafc', padding: '4px', borderRadius: '8px' }}>
                   <span style={{ backgroundColor: '#2563eb', color: 'white', padding: '4px 10px', borderRadius: '6px', fontWeight: '600' }}>All Topics</span>
                   <span style={{ color: '#475569', padding: '4px 10px', fontWeight: '500' }}>Strengths</span>
                   <span style={{ color: '#475569', padding: '4px 10px', fontWeight: '500' }}>Weaknesses</span>
                   <span style={{ color: '#475569', padding: '4px 10px', fontWeight: '500' }}>Neutral</span>
                 </div>
               </div>

               <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '11px', textAlign: 'center' }}>
                 <thead>
                   <tr style={{ color: '#475569', borderBottom: '1px solid #e2e8f0' }}>
                     <th style={{ padding: '10px 5px', fontWeight: '600', textAlign: 'left' }}>Topic</th>
                     <th style={{ padding: '10px 5px', fontWeight: '600' }}>Accuracy</th>
                     <th style={{ padding: '10px 5px', fontWeight: '600' }}>Your Status</th>
                     <th style={{ padding: '10px 5px', fontWeight: '600' }}>Action</th>
                   </tr>
                 </thead>
                 <tbody>
                   {[
                     { topic: 'Simplification', acc: '88%', status: 'Strong', statusColor: '#16a34a', bg: '#dcfce7', action: 'Keep Practicing', actionColor: '#1e3a8a' },
                     { topic: 'Algebra', acc: '82%', status: 'Strong', statusColor: '#16a34a', bg: '#dcfce7', action: 'Maintain', actionColor: '#16a34a' },
                     { topic: 'Blood Relations', acc: '78%', status: 'Strong', statusColor: '#16a34a', bg: '#dcfce7', action: 'Advance Level', actionColor: '#2563eb' },
                     { topic: 'Grammar', acc: '62%', status: 'Moderate', statusColor: '#d97706', bg: '#fef3c7', action: 'More Practice', actionColor: '#d97706' },
                     { topic: 'Cloze Test', acc: '58%', status: 'Moderate', statusColor: '#d97706', bg: '#fef3c7', action: 'Practice Regularly', actionColor: '#ea580c' },
                     { topic: 'Static GK (Polity)', acc: '42%', status: 'Weak', statusColor: '#e11d48', bg: '#ffe4e6', action: 'Revise Notes', actionColor: '#9333ea' },
                     { topic: 'Current Affairs (National)', acc: '38%', status: 'Weak', statusColor: '#e11d48', bg: '#ffe4e6', action: 'Daily Reading', actionColor: '#e11d48' },
                     { topic: 'Economy & Budget', acc: '45%', status: 'Weak', statusColor: '#e11d48', bg: '#ffe4e6', action: 'Watch Video Lessons', actionColor: '#e11d48' },
                     { topic: 'Environment', acc: '50%', status: 'Moderate', statusColor: '#d97706', bg: '#fef3c7', action: 'Solve More Questions', actionColor: '#d97706' },
                     { topic: 'Science & Tech', acc: '55%', status: 'Moderate', statusColor: '#d97706', bg: '#fef3c7', action: 'Short Notes + MCQs', actionColor: '#d97706' },
                   ].map((row, idx) => (
                     <tr key={idx} style={{ borderBottom: '1px solid #f1f5f9' }}>
                       <td style={{ padding: '8px 5px', textAlign: 'left', color: '#0f172a', fontWeight: '500' }}>{row.topic}</td>
                       <td style={{ padding: '8px 5px', color: '#475569' }}>{row.acc}</td>
                       <td style={{ padding: '8px 5px' }}><span style={{ color: row.statusColor, fontWeight: '600' }}>{row.status}</span></td>
                       <td style={{ padding: '8px 5px' }}><span style={{ color: row.actionColor, fontWeight: '500' }}>{row.action}</span></td>
                     </tr>
                   ))}
                 </tbody>
               </table>
            </div>

            {/* Performance Radar */}
            <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '16px', border: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column' }}>
               <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
                 <h3 style={{ margin: 0, fontSize: '15px', fontWeight: '700', color: '#0f172a', display: 'flex', alignItems: 'center', gap: '8px' }}><i className="fas fa-satellite-dish" style={{ color: '#2563eb' }}></i> Performance Radar (Skill Wise)</h3>
               </div>
               
               <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', fontSize: '10px', color: '#64748b', fontWeight: '600', marginBottom: '20px' }}>
                 <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><div style={{ width: '8px', height: '8px', backgroundColor: '#3b82f6', borderRadius: '50%' }}></div> Your Score</div>
                 <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><div style={{ width: '12px', height: '2px', backgroundColor: '#cbd5e1', borderTop: '2px dashed #94a3b8' }}></div> Average Student</div>
               </div>

               <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
                  {/* Mock Radar Chart with SVG */}
                  <svg width="220" height="220" viewBox="0 0 220 220">
                    <polygon points="110,20 190,65 190,155 110,200 30,155 30,65" fill="none" stroke="#e2e8f0" strokeWidth="1" />
                    <polygon points="110,50 160,80 160,140 110,170 60,140 60,80" fill="none" stroke="#e2e8f0" strokeWidth="1" />
                    <polygon points="110,80 135,95 135,125 110,140 85,125 85,95" fill="none" stroke="#e2e8f0" strokeWidth="1" />
                    
                    {/* Axes */}
                    <line x1="110" y1="110" x2="110" y2="20" stroke="#e2e8f0" strokeWidth="1" />
                    <line x1="110" y1="110" x2="190" y2="65" stroke="#e2e8f0" strokeWidth="1" />
                    <line x1="110" y1="110" x2="190" y2="155" stroke="#e2e8f0" strokeWidth="1" />
                    <line x1="110" y1="110" x2="110" y2="200" stroke="#e2e8f0" strokeWidth="1" />
                    <line x1="110" y1="110" x2="30" y2="155" stroke="#e2e8f0" strokeWidth="1" />
                    <line x1="110" y1="110" x2="30" y2="65" stroke="#e2e8f0" strokeWidth="1" />

                    {/* Labels */}
                    <text x="110" y="10" fontSize="9" textAnchor="middle" fill="#475569">Arithmetic</text>
                    <text x="110" y="30" fontSize="8" textAnchor="middle" fill="#94a3b8">100</text>
                    <text x="110" y="60" fontSize="8" textAnchor="middle" fill="#94a3b8">75</text>
                    <text x="110" y="90" fontSize="8" textAnchor="middle" fill="#94a3b8">50</text>
                    <text x="110" y="120" fontSize="8" textAnchor="middle" fill="#94a3b8">25</text>

                    <text x="210" y="70" fontSize="9" textAnchor="end" fill="#475569">Reasoning</text>
                    <text x="210" y="160" fontSize="9" textAnchor="end" fill="#475569">English</text>
                    <text x="110" y="215" fontSize="9" textAnchor="middle" fill="#475569">General Awareness</text>
                    <text x="10" y="160" fontSize="9" textAnchor="start" fill="#475569">Current Affairs</text>
                    <text x="10" y="70" fontSize="9" textAnchor="start" fill="#475569">Static GK</text>

                    {/* Average Polygon */}
                    <polygon points="110,65 150,85 150,125 110,155 70,125 70,85" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="4 2" />
                    
                    {/* Your Score Polygon */}
                    <polygon points="110,40 165,75 140,140 110,165 50,135 65,75" fill="rgba(59, 130, 246, 0.2)" stroke="#3b82f6" strokeWidth="2" />
                    
                    {/* Points */}
                    <circle cx="110" cy="40" r="3" fill="#3b82f6" />
                    <circle cx="165" cy="75" r="3" fill="#3b82f6" />
                    <circle cx="140" cy="140" r="3" fill="#3b82f6" />
                    <circle cx="110" cy="165" r="3" fill="#3b82f6" />
                    <circle cx="50" cy="135" r="3" fill="#3b82f6" />
                    <circle cx="65" cy="75" r="3" fill="#3b82f6" />
                  </svg>
               </div>
            </div>

            {/* Personalized Recommendations & AI */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              
              <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '16px', border: '1px solid #e2e8f0', flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
                   <h3 style={{ margin: 0, fontSize: '14px', fontWeight: '700', color: '#0f172a', display: 'flex', alignItems: 'center', gap: '8px' }}><i className="fas fa-trophy" style={{ color: '#fbbf24' }}></i> Personalized Recommendations</h3>
                </div>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {[
                    { id: 1, text: 'Revise Static GK for 20 mins daily.', color: '#16a34a' },
                    { id: 2, text: 'Follow a curated Current Affairs digest.', color: '#16a34a' },
                    { id: 3, text: 'Solve previous year questions for Polity.', color: '#16a34a' },
                    { id: 4, text: 'Improve vocabulary with daily word list.', color: '#16a34a' },
                    { id: 5, text: 'Attempt sectional tests for weak topics.', color: '#16a34a' },
                    { id: 6, text: 'Maintain your strength areas with advanced level questions.', color: '#fbbf24' },
                  ].map(item => (
                    <div key={item.id} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                      <div style={{ width: '18px', height: '18px', borderRadius: '50%', backgroundColor: item.color, color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '10px', fontWeight: '700', flexShrink: 0, marginTop: '2px' }}>{item.id}</div>
                      <p style={{ margin: 0, fontSize: '11px', color: '#334155', lineHeight: '1.4' }}>{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ backgroundColor: '#f0f9ff', padding: '20px', borderRadius: '16px', border: '1px solid #bae6fd' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                    <h3 style={{ margin: 0, fontSize: '14px', fontWeight: '700', color: '#1e3a8a', display: 'flex', alignItems: 'center', gap: '8px' }}><i className="fas fa-robot"></i> AI Insight</h3>
                    <a href="#" style={{ fontSize: '10px', color: '#2563eb', fontWeight: '600', textDecoration: 'none' }}>View Full Report <i className="fas fa-arrow-right"></i></a>
                  </div>
                  <p style={{ margin: 0, fontSize: '11px', color: '#1e3a8a', lineHeight: '1.5' }}>Pankaj is strong in Quantitative Aptitude and Reasoning, but needs consistent effort in General Awareness and Static GK. With focused practice, he can improve overall score by 20-30%.</p>
              </div>

            </div>

          </div>

          {/* Action Buttons Row */}
          <div style={{ display: 'flex', gap: '15px', marginBottom: '20px' }}>
             <button style={{ flex: 1, padding: '12px', backgroundColor: 'white', border: '1px solid #e2e8f0', borderRadius: '8px', fontSize: '12px', fontWeight: '600', color: '#0f172a', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }}>
               <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><i className="fas fa-file-pdf" style={{ color: '#ef4444', fontSize: '16px' }}></i> Download Detailed Report (PDF)</span>
               <i className="fas fa-chevron-down" style={{ color: '#94a3b8' }}></i>
             </button>
             <button style={{ flex: 1, padding: '12px', backgroundColor: 'white', border: '1px solid #e2e8f0', borderRadius: '8px', fontSize: '12px', fontWeight: '600', color: '#0f172a', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }}>
               <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><i className="fas fa-chart-line" style={{ color: '#2563eb', fontSize: '16px' }}></i> Compare with Previous Period</span>
               <i className="fas fa-chevron-down" style={{ color: '#94a3b8' }}></i>
             </button>
             <button style={{ flex: 1, padding: '12px', backgroundColor: 'white', border: '1px solid #e2e8f0', borderRadius: '8px', fontSize: '12px', fontWeight: '600', color: '#0f172a', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }}>
               <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><i className="fas fa-calendar-alt" style={{ color: '#8b5cf6', fontSize: '16px' }}></i> View Study Plan for Weak Topics</span>
               <i className="fas fa-chevron-down" style={{ color: '#94a3b8' }}></i>
             </button>
             <button style={{ flex: 1, padding: '12px', backgroundColor: 'white', border: '1px solid #e2e8f0', borderRadius: '8px', fontSize: '12px', fontWeight: '600', color: '#0f172a', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }}>
               <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><i className="fas fa-video" style={{ color: '#10b981', fontSize: '16px' }}></i> Schedule Parent-Teacher Call</span>
               <i className="fas fa-chevron-right" style={{ color: '#94a3b8' }}></i>
             </button>
          </div>

        </div>

        {/* Bottom Footer */}
        <div style={{ padding: '20px 30px', backgroundColor: 'white', borderTop: '1px solid #e2e8f0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '12px', color: '#64748b' }}>
          <div>
            <i className="fas fa-users" style={{ color: '#2563eb', marginRight: '8px', fontSize: '16px' }}></i>
            <span style={{ fontWeight: '700', color: '#0f172a' }}>10,000+</span> Students Trust Us
          </div>
          <div>
            <i className="fas fa-trophy" style={{ color: '#fbbf24', marginRight: '8px', fontSize: '16px' }}></i>
            <span style={{ fontWeight: '700', color: '#0f172a' }}>95%</span> Parent Satisfaction
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

export default ParentStrengthsWeaknessesPage;
