import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ParentSidebar from '../components/ParentSidebar';

const ParentAiInsightsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ display: 'flex', minHeight: '100vh', fontFamily: "'Inter', sans-serif", backgroundColor: '#f1f5f9' }}>
      
      {/* Sidebar */}
      <ParentSidebar activeTab="ai-insights" />

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
            <i className="fas fa-chevron-right" style={{ fontSize: '10px', margin: '0 5px' }}></i> AI Insights
          </div>

          {/* Header Row */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '25px' }}>
            <div>
              <h1 style={{ margin: '0 0 5px', fontSize: '28px', fontWeight: '800', color: '#1e3a8a', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ backgroundColor: '#1e3a8a', color: 'white', width: '36px', height: '36px', borderRadius: '8px', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '20px' }}>
                  <i className="fas fa-robot"></i>
                </div>
                AI Insights
              </h1>
              <p style={{ margin: 0, fontSize: '15px', color: '#475569' }}>Smart analysis. Personalized guidance. Better results.</p>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
               <div style={{ display: 'flex', alignItems: 'center', gap: '10px', backgroundColor: 'white', padding: '10px 15px', borderRadius: '8px', border: '1px solid #cbd5e1', color: '#0f172a', fontWeight: '600', fontSize: '14px', cursor: 'pointer' }}>
                 <i className="far fa-calendar-alt" style={{ color: '#64748b' }}></i> Last 30 Days <i className="fas fa-chevron-down" style={{ color: '#2563eb', marginLeft: '10px' }}></i>
               </div>
               <div style={{ backgroundColor: '#f0f9ff', padding: '12px 20px', borderRadius: '12px', border: '1px solid #bae6fd', textAlign: 'center', transform: 'rotate(-2deg)' }}>
                  <p style={{ fontFamily: "'Caveat', cursive", fontSize: '18px', color: '#1e40af', margin: '0 0 5px', lineHeight: '1.2' }}>"Smarter insights.<br/>Stronger preparation."</p>
                  <div style={{ height: '2px', width: '30px', background: 'linear-gradient(90deg, #ff9933 33.3%, #ffffff 33.3%, #ffffff 66.6%, #138808 66.6%)', borderRadius: '2px', margin: '0 auto' }}></div>
               </div>
            </div>
          </div>

          {/* KPI Row */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '15px', marginBottom: '20px' }}>
            
            {/* KPI 1 */}
            <div style={{ backgroundColor: '#f8fafc', padding: '20px', borderRadius: '16px', border: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative' }}>
              <div style={{ display: 'flex', gap: '12px' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '10px', backgroundColor: '#e0e7ff', color: '#4f46e5', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '20px', flexShrink: 0 }}><i className="fas fa-brain"></i></div>
                <div>
                  <h4 style={{ margin: '0 0 4px', fontSize: '13px', fontWeight: '700', color: '#1e3a8a' }}>AI Performance Overview</h4>
                  <p style={{ margin: 0, fontSize: '11px', color: '#475569', lineHeight: '1.4' }}>Your child's overall preparation is on track with good consistency.</p>
                </div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginTop: '15px' }}>
                <div>
                  <h2 style={{ margin: 0, fontSize: '28px', fontWeight: '800', color: '#0f172a' }}>72%</h2>
                  <p style={{ margin: 0, fontSize: '11px', color: '#64748b' }}>Overall Readiness</p>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <p style={{ margin: 0, fontSize: '12px', color: '#16a34a', fontWeight: '700' }}><i className="fas fa-arrow-trend-up"></i> +12%</p>
                  <p style={{ margin: 0, fontSize: '10px', color: '#94a3b8' }}>(last 30 days)</p>
                </div>
              </div>
              <i className="fas fa-chevron-right" style={{ position: 'absolute', right: '15px', bottom: '15px', color: '#94a3b8', fontSize: '12px' }}></i>
            </div>

            {/* KPI 2 */}
            <div style={{ backgroundColor: '#f0fdf4', padding: '20px', borderRadius: '16px', border: '1px solid #bbf7d0', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative' }}>
              <div style={{ display: 'flex', gap: '12px' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '10px', backgroundColor: '#16a34a', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '20px', flexShrink: 0 }}><i className="fas fa-bullseye"></i></div>
                <div>
                  <h4 style={{ margin: '0 0 4px', fontSize: '13px', fontWeight: '700', color: '#166534' }}>Key Strength</h4>
                  <p style={{ margin: 0, fontSize: '13px', fontWeight: '700', color: '#0f172a' }}>Quantitative Aptitude</p>
                  <p style={{ margin: 0, fontSize: '11px', color: '#475569' }}>Highest Score Area</p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginTop: '15px' }}>
                <h2 style={{ margin: 0, fontSize: '28px', fontWeight: '800', color: '#166534' }}>82%</h2>
                <div style={{ backgroundColor: '#dcfce7', color: '#16a34a', padding: '4px 12px', borderRadius: '12px', fontSize: '11px', fontWeight: '700', border: '1px solid #86efac' }}>Strong</div>
              </div>
              <i className="fas fa-chevron-right" style={{ position: 'absolute', right: '15px', bottom: '15px', color: '#94a3b8', fontSize: '12px' }}></i>
            </div>

            {/* KPI 3 */}
            <div style={{ backgroundColor: '#fff1f2', padding: '20px', borderRadius: '16px', border: '1px solid #fecdd3', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative' }}>
              <div style={{ display: 'flex', gap: '12px' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '10px', backgroundColor: '#e11d48', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '20px', flexShrink: 0 }}><i className="fas fa-exclamation-triangle"></i></div>
                <div>
                  <h4 style={{ margin: '0 0 4px', fontSize: '13px', fontWeight: '700', color: '#be123c' }}>Area to Improve</h4>
                  <p style={{ margin: 0, fontSize: '13px', fontWeight: '700', color: '#0f172a' }}>General Awareness</p>
                  <p style={{ margin: 0, fontSize: '11px', color: '#475569' }}>Lowest Score Area</p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginTop: '15px' }}>
                <h2 style={{ margin: 0, fontSize: '28px', fontWeight: '800', color: '#be123c' }}>45%</h2>
                <div style={{ backgroundColor: '#ffe4e6', color: '#e11d48', padding: '4px 12px', borderRadius: '12px', fontSize: '11px', fontWeight: '700', border: '1px solid #fda4af' }}>Needs Focus</div>
              </div>
              <i className="fas fa-chevron-right" style={{ position: 'absolute', right: '15px', bottom: '15px', color: '#94a3b8', fontSize: '12px' }}></i>
            </div>

            {/* KPI 4 */}
            <div style={{ backgroundColor: '#eff6ff', padding: '20px', borderRadius: '16px', border: '1px solid #bfdbfe', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', gap: '12px' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '10px', backgroundColor: '#e0e7ff', color: '#2563eb', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '20px', flexShrink: 0 }}><i className="fas fa-sparkles"></i></div>
                <div>
                  <h4 style={{ margin: '0 0 4px', fontSize: '13px', fontWeight: '700', color: '#1e3a8a' }}>AI Recommendation</h4>
                  <p style={{ margin: 0, fontSize: '12px', color: '#1e40af', lineHeight: '1.4', fontWeight: '500' }}>Focus more on Current Affairs and General Awareness.</p>
                </div>
              </div>
              <button style={{ width: 'max-content', padding: '8px 16px', backgroundColor: '#2563eb', color: 'white', border: 'none', borderRadius: '8px', fontSize: '11px', fontWeight: '600', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '5px', marginTop: '15px' }}>
                View Detailed Plan <i className="fas fa-arrow-right"></i>
              </button>
            </div>

          </div>

          {/* Middle Row (Charts & Suggestion) */}
          <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1.2fr 0.8fr', gap: '15px', marginBottom: '20px' }}>
             
             {/* AI Subject-wise Bar Chart */}
             <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '16px', border: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
                  <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                    <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: '#1e3a8a', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: '700', fontSize: '12px' }}>AI</div>
                    <div>
                      <h3 style={{ margin: '0 0 2px', fontSize: '14px', fontWeight: '700', color: '#0f172a' }}>AI Subject-wise Performance Analysis</h3>
                      <p style={{ margin: 0, fontSize: '11px', color: '#64748b' }}>Based on last 30 days of test data and study pattern.</p>
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '11px', color: '#2563eb', fontWeight: '600', cursor: 'pointer', border: '1px solid #e2e8f0', padding: '6px 12px', borderRadius: '8px' }}>
                    View Full Analysis <i className="fas fa-chevron-down"></i>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '20px', fontSize: '10px', color: '#64748b', fontWeight: '600', marginBottom: '15px', paddingLeft: '40px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><div style={{ width: '8px', height: '8px', backgroundColor: '#2563eb', borderRadius: '50%' }}></div> Your Child</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><div style={{ width: '8px', height: '8px', backgroundColor: '#93c5fd', borderRadius: '50%' }}></div> Target</div>
                </div>

                <div style={{ flex: 1, position: 'relative', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-around', paddingBottom: '30px', marginTop: '20px' }}>
                  {/* Y-axis labels */}
                  <div style={{ position: 'absolute', left: 0, top: '-10px', bottom: '30px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', fontSize: '10px', color: '#94a3b8' }}>
                    <span>100</span><span>80</span><span>60</span><span>40</span><span>20</span><span>0</span>
                  </div>
                  {/* Grid lines */}
                  {[20, 40, 60, 80, 100].map(val => (
                    <div key={val} style={{ position: 'absolute', left: '30px', right: 0, bottom: `calc(30px + ${val}%)`, borderTop: '1px solid #f1f5f9', zIndex: 1 }}></div>
                  ))}
                  
                  {/* Bar Groups */}
                  {[
                    { label: 'Quantitative\nAptitude', val: 82, target: 70 },
                    { label: 'Reasoning', val: 78, target: 70 },
                    { label: 'English\nLanguage', val: 68, target: 70 },
                    { label: 'General\nAwareness', val: 45, target: 70 },
                    { label: 'Static GK', val: 72, target: 70 },
                  ].map((group, i) => (
                    <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 2, height: '100%', justifyContent: 'flex-end', gap: '5px' }}>
                      <div style={{ display: 'flex', gap: '4px', alignItems: 'flex-end', height: '100%' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
                          <span style={{ fontSize: '10px', fontWeight: '700', color: '#0f172a' }}>{group.val}%</span>
                          <div style={{ width: '22px', height: `${group.val}%`, backgroundColor: '#2563eb', borderTopLeftRadius: '3px', borderTopRightRadius: '3px' }}></div>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
                          <span style={{ fontSize: '10px', fontWeight: '600', color: '#64748b' }}>{group.target}%</span>
                          <div style={{ width: '22px', height: `${group.target}%`, backgroundColor: '#93c5fd', borderTopLeftRadius: '3px', borderTopRightRadius: '3px' }}></div>
                        </div>
                      </div>
                      <div style={{ position: 'absolute', bottom: 0, width: '60px', textAlign: 'center', fontSize: '9px', color: '#475569', fontWeight: '600', lineHeight: '1.2' }}>
                        {group.label.split('\n').map((l, j) => <div key={j}>{l}</div>)}
                      </div>
                    </div>
                  ))}
                </div>
             </div>

             {/* AI Learning Path Suggestion */}
             <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
               <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '20px' }}>
                  <div style={{ width: '32px', height: '32px', borderRadius: '8px', backgroundColor: '#f0f9ff', color: '#0f172a', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '18px' }}><i className="fas fa-robot"></i></div>
                  <div>
                    <h3 style={{ margin: '0 0 2px', fontSize: '14px', fontWeight: '700', color: '#0f172a' }}>AI Learning Path Suggestion</h3>
                    <p style={{ margin: 0, fontSize: '11px', color: '#64748b' }}>Personalized next steps for better results.</p>
                  </div>
               </div>
               
               <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                 {[
                   { id: 1, title: 'Current Affairs', desc: 'You are missing important national & international events. Study 2-3 hours daily.', tag: 'High Priority', color: '#16a34a', bg: '#dcfce7', iconColor: '#e11d48', iconBg: '#ffe4e6' },
                   { id: 2, title: 'General Awareness', desc: 'Focus on economy, polity and static GK topics.', tag: 'High Priority', color: '#16a34a', bg: '#dcfce7', iconColor: '#e11d48', iconBg: '#ffe4e6' },
                   { id: 3, title: 'Quantitative Aptitude', desc: 'Maintain your current pace. Try advanced level questions.', tag: 'Keep Going', color: '#16a34a', bg: '#dcfce7', iconColor: '#16a34a', iconBg: '#dcfce7' },
                   { id: 4, title: 'English Language', desc: 'Focus on reading comprehension and vocabulary.', tag: 'Keep Going', color: '#16a34a', bg: '#dcfce7', iconColor: '#9333ea', iconBg: '#f3e8ff' },
                 ].map(item => (
                   <div key={item.id} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', paddingBottom: '12px', borderBottom: item.id !== 4 ? '1px solid #f1f5f9' : 'none' }}>
                     <div style={{ width: '22px', height: '22px', borderRadius: '50%', backgroundColor: item.id <= 2 ? '#22c55e' : (item.id === 3 ? '#0284c7' : '#9333ea'), color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '11px', fontWeight: '700', flexShrink: 0, marginTop: '2px' }}>{item.id}</div>
                     <div style={{ flex: 1 }}>
                       <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                         <h4 style={{ margin: 0, fontSize: '12px', fontWeight: '700', color: '#0f172a' }}>{item.title}</h4>
                         <span style={{ fontSize: '9px', fontWeight: '600', color: item.id <= 2 ? '#e11d48' : '#16a34a', backgroundColor: item.id <= 2 ? '#ffe4e6' : '#dcfce7', padding: '2px 6px', borderRadius: '8px' }}>{item.tag}</span>
                       </div>
                       <p style={{ margin: 0, fontSize: '10px', color: '#475569', lineHeight: '1.4' }}>{item.desc}</p>
                     </div>
                     <i className="fas fa-chevron-right" style={{ color: '#cbd5e1', fontSize: '10px', marginTop: '6px' }}></i>
                   </div>
                 ))}
               </div>
             </div>

             {/* AI Assistant Chat Box */}
             <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '16px', border: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', marginBottom: '15px' }}>
                  <div style={{ width: '45px', height: '45px', borderRadius: '50%', backgroundColor: '#f0f9ff', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '30px', border: '2px solid #bae6fd', flexShrink: 0 }}>🤖</div>
                  <div>
                    <h4 style={{ margin: '0 0 4px', fontSize: '13px', fontWeight: '700', color: '#1e3a8a' }}>Hi Pankaj's Parent!</h4>
                    <p style={{ margin: 0, fontSize: '10px', color: '#475569', lineHeight: '1.4' }}>I'm your AI Study Assistant. I've analyzed the latest data and here are my insights just for you.</p>
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', flex: 1, marginBottom: '20px' }}>
                  <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                    <i className="fas fa-check-circle" style={{ color: '#16a34a', marginTop: '2px', fontSize: '12px' }}></i>
                    <span style={{ fontSize: '11px', color: '#0f172a' }}>Your child is showing steady improvement in most subjects.</span>
                  </div>
                  <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                    <i className="fas fa-check-circle" style={{ color: '#16a34a', marginTop: '2px', fontSize: '12px' }}></i>
                    <span style={{ fontSize: '11px', color: '#0f172a' }}>Current Affairs needs more attention.</span>
                  </div>
                  <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                    <i className="fas fa-check-circle" style={{ color: '#16a34a', marginTop: '2px', fontSize: '12px' }}></i>
                    <span style={{ fontSize: '11px', color: '#0f172a' }}>Quantitative Aptitude is a strong area.</span>
                  </div>
                  <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                    <i className="fas fa-check-circle" style={{ color: '#16a34a', marginTop: '2px', fontSize: '12px' }}></i>
                    <span style={{ fontSize: '11px', color: '#0f172a' }}>Follow the suggested plan for better results.</span>
                  </div>
                </div>

                <button style={{ width: '100%', padding: '12px', backgroundColor: '#1e3a8a', color: 'white', border: 'none', borderRadius: '8px', fontSize: '12px', fontWeight: '600', cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px' }}>
                  Chat with AI Assistant <i className="fas fa-arrow-right"></i>
                </button>
             </div>

          </div>

          {/* Bottom Row */}
          <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr', gap: '15px', marginBottom: '20px' }}>
            
            {/* Trend Analysis */}
            <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '16px', border: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column' }}>
               <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
                 <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                    <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: '#eff6ff', color: '#2563eb', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '16px' }}><i className="fas fa-chart-line"></i></div>
                    <div>
                      <h3 style={{ margin: '0 0 2px', fontSize: '14px', fontWeight: '700', color: '#0f172a' }}>Trend Analysis</h3>
                      <p style={{ margin: 0, fontSize: '11px', color: '#64748b' }}>How your child's performance is changing over time.</p>
                    </div>
                  </div>
                 <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '11px', color: '#475569', fontWeight: '600', cursor: 'pointer', border: '1px solid #e2e8f0', padding: '6px 12px', borderRadius: '8px' }}>
                   Last 3 Months <i className="fas fa-chevron-down"></i>
                 </div>
               </div>

               <div style={{ display: 'flex', gap: '20px', height: '180px' }}>
                 {/* Chart Area (Mocked Line Chart) */}
                 <div style={{ flex: 1, position: 'relative' }}>
                    {/* Y-axis */}
                    <div style={{ position: 'absolute', left: 0, top: 0, bottom: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', fontSize: '9px', color: '#94a3b8' }}>
                      <span>100</span><span>75</span><span>50</span><span>25</span><span>0</span>
                    </div>
                    {/* Grid */}
                    {[25, 50, 75, 100].map(val => (
                      <div key={val} style={{ position: 'absolute', left: '20px', right: 0, bottom: `calc(20px + ${val}% - ${val/100*20}px)`, borderTop: '1px solid #f1f5f9' }}></div>
                    ))}
                    
                    {/* SVG Line Chart */}
                    <svg style={{ position: 'absolute', left: '20px', right: 0, top: 0, bottom: '20px', width: 'calc(100% - 20px)', height: '100%', overflow: 'visible' }}>
                      {/* Quant Line (Blue) */}
                      <path d="M 0 100 Q 50 80, 100 70 T 200 60 T 300 50" fill="none" stroke="#2563eb" strokeWidth="2" />
                      <circle cx="0" cy="100" r="3" fill="#2563eb" /> <circle cx="75" cy="85" r="3" fill="#2563eb" /> <circle cx="150" cy="72" r="3" fill="#2563eb" /> <circle cx="225" cy="63" r="3" fill="#2563eb" /> <circle cx="300" cy="50" r="3" fill="#2563eb" />
                      
                      {/* Reasoning Line (Green) */}
                      <path d="M 0 115 Q 50 100, 100 90 T 200 85 T 300 75" fill="none" stroke="#16a34a" strokeWidth="2" />
                      <circle cx="0" cy="115" r="3" fill="#16a34a" /> <circle cx="75" cy="103" r="3" fill="#16a34a" /> <circle cx="150" cy="92" r="3" fill="#16a34a" /> <circle cx="225" cy="87" r="3" fill="#16a34a" /> <circle cx="300" cy="75" r="3" fill="#16a34a" />

                      {/* English Line (Yellow/Orange) */}
                      <path d="M 0 130 Q 50 120, 100 110 T 200 105 T 300 95" fill="none" stroke="#f59e0b" strokeWidth="2" />
                      <circle cx="0" cy="130" r="3" fill="#f59e0b" /> <circle cx="75" cy="120" r="3" fill="#f59e0b" /> <circle cx="150" cy="112" r="3" fill="#f59e0b" /> <circle cx="225" cy="107" r="3" fill="#f59e0b" /> <circle cx="300" cy="95" r="3" fill="#f59e0b" />

                      {/* GA Line (Red) */}
                      <path d="M 0 145 Q 50 135, 100 125 T 200 120 T 300 115" fill="none" stroke="#e11d48" strokeWidth="2" />
                      <circle cx="0" cy="145" r="3" fill="#e11d48" /> <circle cx="75" cy="135" r="3" fill="#e11d48" /> <circle cx="150" cy="127" r="3" fill="#e11d48" /> <circle cx="225" cy="122" r="3" fill="#e11d48" /> <circle cx="300" cy="115" r="3" fill="#e11d48" />
                    </svg>

                    {/* X-axis */}
                    <div style={{ position: 'absolute', left: '20px', right: 0, bottom: 0, display: 'flex', justifyContent: 'space-between', fontSize: '9px', color: '#94a3b8' }}>
                      <span>10 Jul</span><span>17 Jul</span><span>24 Jul</span><span>31 Jul</span><span>7 Aug</span><span>14 Aug</span>
                    </div>
                 </div>

                 {/* Legend */}
                 <div style={{ width: '130px', display: 'flex', flexDirection: 'column', gap: '15px', justifyContent: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#2563eb' }}></div>
                      <span style={{ fontSize: '10px', color: '#475569', fontWeight: '500' }}>Quantitative Aptitude</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#16a34a' }}></div>
                      <span style={{ fontSize: '10px', color: '#475569', fontWeight: '500' }}>Reasoning</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#f59e0b' }}></div>
                      <span style={{ fontSize: '10px', color: '#475569', fontWeight: '500' }}>English Language</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#e11d48' }}></div>
                      <span style={{ fontSize: '10px', color: '#475569', fontWeight: '500' }}>General Awareness</span>
                    </div>
                 </div>
               </div>
            </div>

            {/* AI Insights Summary */}
            <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '16px', border: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column' }}>
               <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '15px' }}>
                  <div style={{ width: '32px', height: '32px', borderRadius: '8px', backgroundColor: '#f0f9ff', color: '#2563eb', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '16px' }}><i className="fas fa-lightbulb"></i></div>
                  <div>
                    <h3 style={{ margin: '0 0 2px', fontSize: '14px', fontWeight: '700', color: '#0f172a' }}>AI Insights Summary</h3>
                    <p style={{ margin: 0, fontSize: '10px', color: '#64748b' }}>Top insights from your child's performance.</p>
                  </div>
               </div>
               
               <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', flex: 1 }}>
                 <div style={{ display: 'flex', gap: '10px', padding: '10px', backgroundColor: '#f8fafc', borderRadius: '8px' }}>
                   <div style={{ width: '24px', height: '24px', borderRadius: '50%', backgroundColor: '#22c55e', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '12px', flexShrink: 0 }}><i className="fas fa-arrow-up"></i></div>
                   <div>
                     <h4 style={{ margin: '0 0 2px', fontSize: '11px', fontWeight: '700', color: '#1e3a8a' }}>Consistent Improvement</h4>
                     <p style={{ margin: 0, fontSize: '10px', color: '#475569' }}>Overall score increased by 12% in last 30 days.</p>
                   </div>
                 </div>
                 <div style={{ display: 'flex', gap: '10px', padding: '10px', backgroundColor: '#f8fafc', borderRadius: '8px' }}>
                   <div style={{ width: '24px', height: '24px', borderRadius: '50%', backgroundColor: '#3b82f6', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '12px', flexShrink: 0 }}><i className="fas fa-bullseye"></i></div>
                   <div>
                     <h4 style={{ margin: '0 0 2px', fontSize: '11px', fontWeight: '700', color: '#1e3a8a' }}>Best Performance</h4>
                     <p style={{ margin: 0, fontSize: '10px', color: '#475569' }}>Quantitative Aptitude (82%)</p>
                   </div>
                 </div>
                 <div style={{ display: 'flex', gap: '10px', padding: '10px', backgroundColor: '#fff7ed', borderRadius: '8px' }}>
                   <div style={{ width: '24px', height: '24px', borderRadius: '50%', backgroundColor: '#f59e0b', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '12px', flexShrink: 0 }}><i className="fas fa-exclamation"></i></div>
                   <div>
                     <h4 style={{ margin: '0 0 2px', fontSize: '11px', fontWeight: '700', color: '#b45309' }}>Needs Attention</h4>
                     <p style={{ margin: 0, fontSize: '10px', color: '#78350f' }}>General Awareness (45%)</p>
                   </div>
                 </div>
                 <div style={{ display: 'flex', gap: '10px', padding: '10px', backgroundColor: '#faf5ff', borderRadius: '8px' }}>
                   <div style={{ width: '24px', height: '24px', borderRadius: '50%', backgroundColor: '#a855f7', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '12px', flexShrink: 0 }}><i className="fas fa-lightbulb"></i></div>
                   <div>
                     <h4 style={{ margin: '0 0 2px', fontSize: '11px', fontWeight: '700', color: '#7e22ce' }}>Opportunity</h4>
                     <p style={{ margin: 0, fontSize: '10px', color: '#581c87', lineHeight: '1.3' }}>If Current Affairs focus is increased, overall score can improve by 8-10%.</p>
                   </div>
                 </div>
               </div>
            </div>

            {/* Subject-wise Focus Time */}
            <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '16px', border: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column' }}>
               <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '15px' }}>
                  <div style={{ width: '32px', height: '32px', borderRadius: '8px', backgroundColor: '#eff6ff', color: '#2563eb', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '16px' }}><i className="fas fa-clock"></i></div>
                  <div>
                    <h3 style={{ margin: '0 0 2px', fontSize: '14px', fontWeight: '700', color: '#0f172a' }}>Subject-wise Focus Time</h3>
                    <p style={{ margin: 0, fontSize: '10px', color: '#64748b' }}>Recommended study time for next 7 days.</p>
                  </div>
               </div>

               <div style={{ display: 'flex', alignItems: 'center', gap: '15px', flex: 1 }}>
                  {/* Donut Chart */}
                  <div style={{ position: 'relative', width: '110px', height: '110px', borderRadius: '50%', background: 'conic-gradient(#2563eb 0 24%, #16a34a 24% 43%, #f59e0b 43% 62%, #e11d48 62% 86%, #9333ea 86% 100%)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                     <div style={{ width: '70px', height: '70px', backgroundColor: 'white', borderRadius: '50%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                       <span style={{ fontSize: '10px', color: '#64748b' }}>Total</span>
                       <span style={{ fontSize: '16px', fontWeight: '800', color: '#0f172a', lineHeight: '1' }}>21 hrs</span>
                     </div>
                  </div>

                  {/* Legend */}
                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                     <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                       <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><div style={{ width: '8px', height: '8px', backgroundColor: '#2563eb', borderRadius: '50%' }}></div><span style={{ fontSize: '10px', color: '#475569' }}>Quantitative Aptitude</span></div>
                       <span style={{ fontSize: '9px', fontWeight: '700', color: '#0f172a' }}>5 hrs (24%)</span>
                     </div>
                     <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                       <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><div style={{ width: '8px', height: '8px', backgroundColor: '#16a34a', borderRadius: '50%' }}></div><span style={{ fontSize: '10px', color: '#475569' }}>Reasoning</span></div>
                       <span style={{ fontSize: '9px', fontWeight: '700', color: '#0f172a' }}>4 hrs (19%)</span>
                     </div>
                     <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                       <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><div style={{ width: '8px', height: '8px', backgroundColor: '#f59e0b', borderRadius: '50%' }}></div><span style={{ fontSize: '10px', color: '#475569' }}>English Language</span></div>
                       <span style={{ fontSize: '9px', fontWeight: '700', color: '#0f172a' }}>4 hrs (19%)</span>
                     </div>
                     <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                       <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><div style={{ width: '8px', height: '8px', backgroundColor: '#e11d48', borderRadius: '50%' }}></div><span style={{ fontSize: '10px', color: '#475569' }}>General Awareness</span></div>
                       <span style={{ fontSize: '9px', fontWeight: '700', color: '#0f172a' }}>5 hrs (24%)</span>
                     </div>
                     <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                       <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><div style={{ width: '8px', height: '8px', backgroundColor: '#9333ea', borderRadius: '50%' }}></div><span style={{ fontSize: '10px', color: '#475569' }}>Static GK</span></div>
                       <span style={{ fontSize: '9px', fontWeight: '700', color: '#0f172a' }}>3 hrs (14%)</span>
                     </div>
                  </div>
               </div>
            </div>

          </div>

          {/* Quick AI Actions Row */}
          <div style={{ backgroundColor: '#f0f9ff', padding: '20px', borderRadius: '16px', border: '1px solid #bae6fd', display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '20px' }}>
             <div style={{ display: 'flex', gap: '10px', alignItems: 'center', minWidth: '200px' }}>
               <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: '#2563eb', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '16px' }}><i className="fas fa-bolt"></i></div>
               <div>
                 <h3 style={{ margin: '0 0 2px', fontSize: '14px', fontWeight: '700', color: '#1e3a8a' }}>Quick AI Actions</h3>
                 <p style={{ margin: 0, fontSize: '10px', color: '#1e40af' }}>Take these actions for faster improvement.</p>
               </div>
             </div>
             
             <div style={{ display: 'flex', gap: '10px', flex: 1, overflowX: 'auto' }}>
               <button style={{ padding: '10px 15px', backgroundColor: 'white', border: '1px solid #bfdbfe', borderRadius: '8px', fontSize: '11px', fontWeight: '600', color: '#1e3a8a', display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', whiteSpace: 'nowrap' }}>
                 <i className="far fa-calendar-alt"></i> Generate Daily Study Plan <i className="fas fa-chevron-right" style={{ color: '#94a3b8' }}></i>
               </button>
               <button style={{ padding: '10px 15px', backgroundColor: 'white', border: '1px solid #bfdbfe', borderRadius: '8px', fontSize: '11px', fontWeight: '600', color: '#1e3a8a', display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', whiteSpace: 'nowrap' }}>
                 <i className="fas fa-bullseye"></i> View Weak Topics <i className="fas fa-chevron-right" style={{ color: '#94a3b8' }}></i>
               </button>
               <button style={{ padding: '10px 15px', backgroundColor: 'white', border: '1px solid #bfdbfe', borderRadius: '8px', fontSize: '11px', fontWeight: '600', color: '#1e3a8a', display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', whiteSpace: 'nowrap' }}>
                 <i className="fas fa-file-pdf"></i> Download AI Report (PDF) <i className="fas fa-chevron-right" style={{ color: '#94a3b8' }}></i>
               </button>
               <button style={{ padding: '10px 15px', backgroundColor: 'white', border: '1px solid #bfdbfe', borderRadius: '8px', fontSize: '11px', fontWeight: '600', color: '#1e3a8a', display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', whiteSpace: 'nowrap' }}>
                 <i className="fas fa-comment-dots"></i> Ask Question to AI <i className="fas fa-chevron-right" style={{ color: '#94a3b8' }}></i>
               </button>
               <button style={{ padding: '10px 15px', backgroundColor: 'white', border: '1px solid #bfdbfe', borderRadius: '8px', fontSize: '11px', fontWeight: '600', color: '#1e3a8a', display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', whiteSpace: 'nowrap' }}>
                 <i className="fas fa-tasks"></i> Set Study Goals <i className="fas fa-chevron-right" style={{ color: '#94a3b8' }}></i>
               </button>
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

export default ParentAiInsightsPage;
