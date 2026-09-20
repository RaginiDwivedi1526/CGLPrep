import React, { useState, useEffect, useContext } from 'react';
import DashboardLayout from '../components/DashboardLayout';
import { AuthContext } from '../context/AuthContext';
import { Link } from 'react-router-dom';

const DashboardAnalysisPage = () => {
  const { user } = useContext(AuthContext);
  const [showParentModal, setShowParentModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [progressData, setProgressData] = useState(null);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Fetch real progress data
    const fetchProgress = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/progress/summary?userId=${user?._id || 'guest'}`);
        const result = await response.json();
        if (result.success) {
          setProgressData(result.data);
        }
      } catch (err) {
        console.error('Failed to fetch progress data', err);
      }
    };
    fetchProgress();
  }, [user]);

  return (
    <DashboardLayout>
      <div className="db-main-container" style={{ padding: '30px' }}>
        
        {/* Center Content Area */}
        <div style={{ flex: 1 }}>
          
          {/* Welcome Row */}
          <div className="db-welcome-row">
            <div>
              <h2 style={{ color: '#0f172a', fontSize: '32px', fontWeight: '800', margin: '0 0 8px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                Welcome Back, {user?.name || 'Student'}! <span style={{ fontSize: '28px' }}>👋</span>
              </h2>
              <p style={{ color: '#334155', fontSize: '15px', margin: 0 }}>
                Discipline today. Results tomorrow.
              </p>
            </div>
            
            <div className="db-welcome-decorator">
               <h3 style={{ fontFamily: "'Caveat', cursive", fontSize: '24px', color: '#1e3a8a', margin: 0, lineHeight: '1.1' }}>
                 Same<br/>Aspiration<br/>Bigger<br/>Dreams!
               </h3>
               <div style={{ height: '3px', width: '40px', background: 'linear-gradient(90deg, #ff9933 33.3%, #ffffff 33.3%, #ffffff 66.6%, #138808 66.6%)', borderRadius: '2px', margin: '8px auto 0' }}></div>
            </div>
          </div>

          {/* Top Section: Readiness & Goal */}
          <div className="db-analysis-grid-2-1">
             {/* CGL Readiness */}
             <div style={{ backgroundColor: 'white', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '25px', display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ margin: '0 0 20px', fontSize: '16px', fontWeight: '800', color: '#0f172a', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  Your CGL Preparation Readiness <i className="far fa-question-circle" style={{ color: '#94a3b8', fontSize: '14px', fontWeight: '400' }}></i>
                </h3>
                
                <div style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
                   <div style={{ display: 'flex', alignItems: 'center', gap: '25px', paddingRight: '25px', borderRight: '1px solid #f1f5f9' }}>
                     {/* Circular Progress */}
                     <div style={{ width: '100px', height: '100px', borderRadius: '50%', border: '8px solid #f1f5f9', borderTopColor: '#10b981', borderRightColor: '#10b981', borderBottomColor: '#10b981', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', transform: 'rotate(-45deg)' }}>
                        <div style={{ transform: 'rotate(45deg)', textAlign: 'center' }}>
                           <span style={{ fontSize: '28px', fontWeight: '800', color: '#0f172a', display: 'block', lineHeight: '1' }}>68</span>
                           <span style={{ fontSize: '12px', color: '#64748b' }}>/100</span>
                        </div>
                     </div>
                     <div>
                       <h4 style={{ margin: '0 0 5px', fontSize: '18px', fontWeight: '700', color: '#166534' }}>Good Progress!</h4>
                       <p style={{ margin: '0 0 10px', fontSize: '12px', color: '#64748b', maxWidth: '180px', lineHeight: '1.4' }}>You are on the right track. Keep practicing to reach your goal.</p>
                       <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#10b981', fontSize: '14px', fontWeight: '700' }}>
                          <i className="fas fa-arrow-trend-up"></i> +12% <span style={{ color: '#94a3b8', fontSize: '11px', fontWeight: '400' }}>vs last month</span>
                       </div>
                     </div>
                   </div>
                   
                   {/* Subject Progress Bars */}
                   <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                     <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                       <span style={{ width: '130px', fontSize: '12px', color: '#475569' }}>Quantitative Aptitude</span>
                       <div style={{ flex: 1, height: '8px', backgroundColor: '#f1f5f9', borderRadius: '4px', overflow: 'hidden' }}>
                         <div style={{ width: '72%', height: '100%', backgroundColor: '#2563eb', borderRadius: '4px' }}></div>
                       </div>
                       <span style={{ fontSize: '13px', fontWeight: '700', color: '#0f172a', width: '20px' }}>72</span>
                     </div>
                     <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                       <span style={{ width: '130px', fontSize: '12px', color: '#475569' }}>Reasoning</span>
                       <div style={{ flex: 1, height: '8px', backgroundColor: '#f1f5f9', borderRadius: '4px', overflow: 'hidden' }}>
                         <div style={{ width: '66%', height: '100%', backgroundColor: '#0ea5e9', borderRadius: '4px' }}></div>
                       </div>
                       <span style={{ fontSize: '13px', fontWeight: '700', color: '#0f172a', width: '20px' }}>66</span>
                     </div>
                     <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                       <span style={{ width: '130px', fontSize: '12px', color: '#475569' }}>English Language</span>
                       <div style={{ flex: 1, height: '8px', backgroundColor: '#f1f5f9', borderRadius: '4px', overflow: 'hidden' }}>
                         <div style={{ width: '61%', height: '100%', backgroundColor: '#8b5cf6', borderRadius: '4px' }}></div>
                       </div>
                       <span style={{ fontSize: '13px', fontWeight: '700', color: '#0f172a', width: '20px' }}>61</span>
                     </div>
                     <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                       <span style={{ width: '130px', fontSize: '12px', color: '#475569' }}>General Awareness</span>
                       <div style={{ flex: 1, height: '8px', backgroundColor: '#f1f5f9', borderRadius: '4px', overflow: 'hidden' }}>
                         <div style={{ width: '58%', height: '100%', backgroundColor: '#f97316', borderRadius: '4px' }}></div>
                       </div>
                       <span style={{ fontSize: '13px', fontWeight: '700', color: '#0f172a', width: '20px' }}>58</span>
                     </div>
                   </div>
                </div>
             </div>
             
             {/* Your Goal */}
             <div style={{ backgroundColor: 'white', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '25px', display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                  <h3 style={{ margin: 0, fontSize: '16px', fontWeight: '800', color: '#0f172a' }}>Your Goal</h3>
                  <i className="far fa-edit" style={{ color: '#2563eb', cursor: 'pointer' }}></i>
                </div>
                
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '25px' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#2563eb', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '18px' }}><i className="fas fa-bullseye"></i></div>
                  <div>
                    <h4 style={{ margin: '0 0 2px', fontSize: '16px', fontWeight: '800', color: '#0f172a' }}>SSC CGL 2026</h4>
                    <p style={{ margin: 0, fontSize: '12px', color: '#64748b' }}>Tier I + Tier II + Tier III</p>
                  </div>
                </div>
                
                <div style={{ display: 'flex', gap: '15px', marginTop: 'auto' }}>
                  <div style={{ flex: 1, border: '1px solid #f1f5f9', borderRadius: '8px', padding: '12px', textAlign: 'center' }}>
                     <p style={{ margin: '0 0 5px', fontSize: '11px', color: '#64748b' }}>Target Exam Date</p>
                     <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                       <i className="far fa-calendar-alt" style={{ color: '#475569' }}></i>
                       <span style={{ fontSize: '14px', fontWeight: '700', color: '#0f172a' }}>Aug 2026</span>
                     </div>
                  </div>
                  <div style={{ flex: 1, border: '1px solid #f1f5f9', borderRadius: '8px', padding: '12px', textAlign: 'center' }}>
                     <p style={{ margin: '0 0 5px', fontSize: '11px', color: '#64748b' }}>Days Left</p>
                     <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                       <i className="fas fa-hourglass-half" style={{ color: '#475569' }}></i>
                       <span style={{ fontSize: '14px', fontWeight: '700', color: '#0f172a' }}>348 Days</span>
                     </div>
                  </div>
                </div>
             </div>
          </div>

          {/* Topic Wise Mastery */}
          <div className="db-analysis-grid-1-1">
             <div style={{ backgroundColor: 'white', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '20px', display: 'flex', alignItems: 'center', gap: '15px' }}>
               <div style={{ width: '46px', height: '46px', borderRadius: '10px', backgroundColor: '#f3e8ff', color: '#9333ea', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '20px', flexShrink: 0 }}><i className="fas fa-file-signature"></i></div>
               <div>
                 <p style={{ margin: '0 0 2px', fontSize: '12px', color: '#64748b' }}>Tests Attempted</p>
                 <h4 style={{ margin: '0 0 2px', fontSize: '22px', fontWeight: '800', color: '#0f172a' }}>
                   {progressData ? progressData.overallStats.totalTests : '0'}
                 </h4>
                 <p style={{ margin: 0, fontSize: '11px', color: '#10b981', fontWeight: '600' }}>Overall</p>
               </div>
             </div>
             
             <div style={{ backgroundColor: 'white', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '20px', display: 'flex', alignItems: 'center', gap: '15px' }}>
               <div style={{ width: '46px', height: '46px', borderRadius: '10px', backgroundColor: '#f0fdf4', color: '#16a34a', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '20px', flexShrink: 0 }}><i className="fas fa-check-circle"></i></div>
               <div>
                 <p style={{ margin: '0 0 2px', fontSize: '12px', color: '#64748b' }}>Total Questions Solved</p>
                 <h4 style={{ margin: '0 0 2px', fontSize: '22px', fontWeight: '800', color: '#0f172a' }}>
                   {progressData ? progressData.overallStats.totalQuestions : '0'}
                 </h4>
                 <p style={{ margin: 0, fontSize: '11px', color: '#10b981', fontWeight: '600' }}>In all tests</p>
               </div>
             </div>

             <div style={{ backgroundColor: 'white', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '20px', display: 'flex', alignItems: 'center', gap: '15px' }}>
               <div style={{ width: '46px', height: '46px', borderRadius: '10px', backgroundColor: '#ffe4e6', color: '#e11d48', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '20px', flexShrink: 0 }}><i className="fas fa-bullseye"></i></div>
               <div>
                 <p style={{ margin: '0 0 2px', fontSize: '12px', color: '#64748b' }}>Accuracy Rate</p>
                 <h4 style={{ margin: '0 0 2px', fontSize: '22px', fontWeight: '800', color: '#0f172a' }}>
                   {progressData ? progressData.overallStats.accuracy : '0'}%
                 </h4>
                 <p style={{ margin: 0, fontSize: '11px', color: '#10b981', fontWeight: '600' }}>Overall</p>
               </div>
             </div>

             <div style={{ backgroundColor: 'white', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '20px', display: 'flex', alignItems: 'center', gap: '15px' }}>
               <div style={{ width: '46px', height: '46px', borderRadius: '10px', backgroundColor: '#ffedd5', color: '#f97316', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '20px', flexShrink: 0 }}><i className="fas fa-fire"></i></div>
               <div>
                 <p style={{ margin: '0 0 2px', fontSize: '12px', color: '#64748b' }}>Study Streak</p>
                 <h4 style={{ margin: '0 0 2px', fontSize: '22px', fontWeight: '800', color: '#0f172a' }}>12 Days</h4>
                 <p style={{ margin: 0, fontSize: '11px', color: '#10b981', fontWeight: '600' }}>Keep going!</p>
               </div>
             </div>

             <div style={{ backgroundColor: 'white', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '20px', display: 'flex', alignItems: 'center', gap: '15px' }}>
               <div style={{ width: '46px', height: '46px', borderRadius: '10px', backgroundColor: '#dbeafe', color: '#2563eb', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '20px', flexShrink: 0 }}><i className="far fa-clock"></i></div>
               <div>
                 <p style={{ margin: '0 0 2px', fontSize: '12px', color: '#64748b' }}>Total Study Time</p>
                 <h4 style={{ margin: '0 0 2px', fontSize: '22px', fontWeight: '800', color: '#0f172a' }}>36 Hours</h4>
                 <p style={{ margin: 0, fontSize: '11px', color: '#10b981', fontWeight: '600' }}>+8 this week</p>
               </div>
             </div>
          </div>

          {/* Middle Section: Weak Areas & Strengths */}
          <div className="db-analysis-grid-1-1">
             
             {/* Today's Study Plan Detailed */}
             <div style={{ backgroundColor: 'white', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '25px' }}>
               <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                 <h3 style={{ margin: 0, fontSize: '16px', fontWeight: '800', color: '#0f172a', display: 'flex', alignItems: 'center', gap: '10px' }}>
                   <i className="far fa-calendar-alt" style={{ color: '#2563eb' }}></i> Today's Study Plan
                 </h3>
                 <a href="#" style={{ color: '#2563eb', fontSize: '13px', fontWeight: '600', textDecoration: 'none' }}>View Full Plan <i className="fas fa-arrow-right"></i></a>
               </div>
               
               <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                 <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                   <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                     <input type="checkbox" style={{ width: '16px', height: '16px', cursor: 'pointer' }} />
                     <span style={{ fontSize: '14px', color: '#334155', fontWeight: '500' }}>Number System - Practice Questions</span>
                     <span style={{ backgroundColor: '#eff6ff', color: '#2563eb', fontSize: '10px', padding: '3px 8px', borderRadius: '4px', fontWeight: '600' }}>Quant</span>
                   </div>
                   <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                     <span style={{ fontSize: '13px', color: '#64748b' }}>0/30</span>
                     <button style={{ backgroundColor: 'white', border: '1px solid #2563eb', color: '#2563eb', padding: '5px 12px', borderRadius: '6px', fontSize: '12px', fontWeight: '600', cursor: 'pointer' }}>Start</button>
                   </div>
                 </div>

                 <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                   <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                     <input type="checkbox" style={{ width: '16px', height: '16px', cursor: 'pointer' }} />
                     <span style={{ fontSize: '14px', color: '#334155', fontWeight: '500' }}>Puzzles - Mixed Set</span>
                     <span style={{ backgroundColor: '#dcfce7', color: '#16a34a', fontSize: '10px', padding: '3px 8px', borderRadius: '4px', fontWeight: '600' }}>Reasoning</span>
                   </div>
                   <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                     <span style={{ fontSize: '13px', color: '#64748b' }}>0/25</span>
                     <button style={{ backgroundColor: 'white', border: '1px solid #2563eb', color: '#2563eb', padding: '5px 12px', borderRadius: '6px', fontSize: '12px', fontWeight: '600', cursor: 'pointer' }}>Start</button>
                   </div>
                 </div>

                 <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                   <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                     <input type="checkbox" style={{ width: '16px', height: '16px', cursor: 'pointer' }} />
                     <span style={{ fontSize: '14px', color: '#334155', fontWeight: '500' }}>Reading Comprehension</span>
                     <span style={{ backgroundColor: '#f3e8ff', color: '#9333ea', fontSize: '10px', padding: '3px 8px', borderRadius: '4px', fontWeight: '600' }}>English</span>
                   </div>
                   <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                     <span style={{ fontSize: '13px', color: '#64748b' }}>0/20</span>
                     <button style={{ backgroundColor: 'white', border: '1px solid #2563eb', color: '#2563eb', padding: '5px 12px', borderRadius: '6px', fontSize: '12px', fontWeight: '600', cursor: 'pointer' }}>Start</button>
                   </div>
                 </div>

                 <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                   <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                     <input type="checkbox" style={{ width: '16px', height: '16px', cursor: 'pointer' }} />
                     <span style={{ fontSize: '14px', color: '#334155', fontWeight: '500' }}>Current Affairs - August 2026</span>
                     <span style={{ backgroundColor: '#ffedd5', color: '#ea580c', fontSize: '10px', padding: '3px 8px', borderRadius: '4px', fontWeight: '600' }}>GA</span>
                   </div>
                   <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                     <span style={{ fontSize: '13px', color: '#64748b' }}>0/1</span>
                     <button style={{ backgroundColor: 'white', border: '1px solid #2563eb', color: '#2563eb', padding: '5px 12px', borderRadius: '6px', fontSize: '12px', fontWeight: '600', cursor: 'pointer' }}>Start</button>
                   </div>
                 </div>
               </div>
             </div>

             {/* Subject-wise Performance */}
             <div style={{ backgroundColor: 'white', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '25px' }}>
               <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                 <h3 style={{ margin: 0, fontSize: '16px', fontWeight: '800', color: '#0f172a', display: 'flex', alignItems: 'center', gap: '10px' }}>
                   <i className="fas fa-chart-bar" style={{ color: '#2563eb' }}></i> Subject-wise Performance
                 </h3>
                 <a href="#" style={{ color: '#2563eb', fontSize: '13px', fontWeight: '600', textDecoration: 'none' }}>View Detailed Analysis <i className="fas fa-arrow-right"></i></a>
               </div>
               
               <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '15px' }}>
                 <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                   <div style={{ width: '12px', height: '12px', backgroundColor: '#2563eb', borderRadius: '2px' }}></div>
                   <span style={{ fontSize: '12px', color: '#475569' }}>Your Score</span>
                 </div>
                 <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                   <div style={{ width: '12px', height: '12px', backgroundColor: '#e2e8f0', borderRadius: '2px' }}></div>
                   <span style={{ fontSize: '12px', color: '#475569' }}>Target Score</span>
                 </div>
               </div>

               <div style={{ height: '160px', borderBottom: '1px solid #e2e8f0', position: 'relative', display: 'flex', justifyContent: 'space-around', alignItems: 'flex-end', paddingBottom: '5px' }}>
                  {/* Y Axis */}
                  <div style={{ position: 'absolute', left: '0', top: '0', bottom: '0', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', fontSize: '10px', color: '#94a3b8' }}>
                    <span>100</span><span>80</span><span>60</span><span>40</span><span>20</span><span>0</span>
                  </div>
                  
                  {/* Grid lines */}
                  <div style={{ position: 'absolute', left: '25px', right: '0', top: '0', height: '1px', backgroundColor: '#f1f5f9' }}></div>
                  <div style={{ position: 'absolute', left: '25px', right: '0', top: '20%', height: '1px', backgroundColor: '#f1f5f9' }}></div>
                  <div style={{ position: 'absolute', left: '25px', right: '0', top: '40%', height: '1px', backgroundColor: '#f1f5f9' }}></div>
                  <div style={{ position: 'absolute', left: '25px', right: '0', top: '60%', height: '1px', backgroundColor: '#f1f5f9' }}></div>
                  <div style={{ position: 'absolute', left: '25px', right: '0', top: '80%', height: '1px', backgroundColor: '#f1f5f9' }}></div>

                  {/* Bars Container */}
                  <div style={{ display: 'flex', gap: '30px', paddingLeft: '30px', width: '100%', justifyContent: 'space-around', zIndex: 1 }}>
                    {progressData && progressData.subjects ? progressData.subjects.map((sub, idx) => (
                      <div key={idx} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                        <div style={{ display: 'flex', alignItems: 'flex-end', gap: '5px', height: '120px' }}>
                          <div style={{ width: '25px', height: `${Math.max(sub.progress, 5)}%`, backgroundColor: sub.color, borderRadius: '2px 2px 0 0', position: 'relative' }}>
                            <span style={{ position: 'absolute', top: '-18px', left: '50%', transform: 'translateX(-50%)', fontSize: '10px', fontWeight: '700', color: '#0f172a' }}>{sub.progress}</span>
                          </div>
                          <div style={{ width: '25px', height: '85%', backgroundColor: '#e2e8f0', borderRadius: '2px 2px 0 0', position: 'relative' }}>
                            <span style={{ position: 'absolute', top: '-18px', left: '50%', transform: 'translateX(-50%)', fontSize: '10px', fontWeight: '600', color: '#64748b' }}>85</span>
                          </div>
                        </div>
                        <span style={{ fontSize: '10px', color: '#64748b', fontWeight: '600', textAlign: 'center', width: '50px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                          {sub.name.split(' ')[0]}
                        </span>
                      </div>
                    )) : (
                      <div style={{ alignSelf: 'center', color: '#64748b', fontSize: '13px' }}>Loading subject performance...</div>
                    )}
                  </div>
               </div>
             </div>
          </div>

          {/* Recent Performance Log */}
          <div className="db-analysis-grid-2-1">
            
             {/* Recent Activity */}
             <div style={{ backgroundColor: 'white', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '25px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                  <h3 style={{ margin: 0, fontSize: '16px', fontWeight: '800', color: '#0f172a', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <i className="fas fa-history" style={{ color: '#2563eb' }}></i> Recent Activity
                  </h3>
                  <a href="#" style={{ color: '#2563eb', fontSize: '13px', fontWeight: '600', textDecoration: 'none' }}>View All <i className="fas fa-arrow-right"></i></a>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  {progressData && progressData.recentTests && progressData.recentTests.length > 0 ? (
                    progressData.recentTests.slice(0, 4).map((test, idx) => (
                      <div key={idx} style={{ display: 'flex', gap: '15px' }}>
                        <div style={{ width: '28px', height: '28px', borderRadius: '50%', backgroundColor: '#dcfce7', color: '#16a34a', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '12px', flexShrink: 0 }}><i className="fas fa-check"></i></div>
                        <div style={{ flex: 1 }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '2px' }}>
                            <h4 style={{ margin: 0, fontSize: '13px', fontWeight: '600', color: '#334155' }}>Attempted {test.topic}</h4>
                            <span style={{ fontSize: '11px', color: '#94a3b8' }}>{new Date(test.createdAt).toLocaleDateString()}</span>
                          </div>
                          <p style={{ margin: 0, fontSize: '12px', color: '#64748b' }}>Scored {test.score}/{test.maxScore} ({test.subject})</p>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div style={{ fontSize: '13px', color: '#64748b', textAlign: 'center', padding: '20px 0' }}>
                      Take a mock test to see your recent activity here!
                    </div>
                  )}
                </div>
             </div>

            {/* AI Insights */}
            <div style={{ backgroundColor: 'white', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '25px' }}>
               <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                 <h3 style={{ margin: 0, fontSize: '16px', fontWeight: '800', color: '#0f172a', display: 'flex', alignItems: 'center', gap: '10px' }}>
                   <i className="fas fa-robot" style={{ color: '#2563eb' }}></i> AI Insights for You
                 </h3>
                 <a href="#" style={{ color: '#2563eb', fontSize: '13px', fontWeight: '600', textDecoration: 'none' }}>View All <i className="fas fa-arrow-right"></i></a>
               </div>

               <div style={{ backgroundColor: '#eff6ff', borderRadius: '8px', padding: '15px', display: 'flex', alignItems: 'flex-start', gap: '15px', marginBottom: '20px' }}>
                 <i className="fas fa-robot" style={{ fontSize: '24px', color: '#1e3a8a', marginTop: '5px' }}></i>
                 <p style={{ margin: 0, fontSize: '13px', color: '#1e3a8a', lineHeight: '1.5', fontStyle: 'italic', fontWeight: '500' }}>
                   "You are strong in Reasoning. Focus more on General Awareness to improve your overall score."
                 </p>
               </div>

               <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                 <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '13px', color: '#334155' }}>
                   <i className="fas fa-check-circle" style={{ color: '#10b981', marginTop: '3px' }}></i> Practice 20 GA questions daily.
                 </li>
                 <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '13px', color: '#334155' }}>
                   <i className="fas fa-check-circle" style={{ color: '#10b981', marginTop: '3px' }}></i> Your accuracy in Quant has improved by 12%.
                 </li>
                 <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '13px', color: '#334155' }}>
                   <i className="fas fa-check-circle" style={{ color: '#10b981', marginTop: '3px' }}></i> Try 1 full-length mock test this week.
                 </li>
                 <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '13px', color: '#334155' }}>
                   <i className="fas fa-check-circle" style={{ color: '#10b981', marginTop: '3px' }}></i> Revise important static GK topics.
                 </li>
               </ul>
            </div>
          </div>
          
          {/* Footer */}
          <footer style={{ marginTop: '40px', paddingTop: '20px', borderTop: '1px solid #e2e8f0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <i className="fas fa-graduation-cap" style={{ fontSize: '20px', color: '#1e3a8a' }}></i>
              <div>
                <h3 style={{ margin: 0, fontSize: '14px', fontWeight: '800', color: '#0f172a' }}>CGLPrep AI</h3>
                <p style={{ margin: 0, fontSize: '9px', color: '#1e3a8a', fontWeight: '600' }}>Plan • Practice • Crack CGL</p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '30px' }}>
               <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                 <i className="fas fa-trophy text-yellow" style={{ fontSize: '20px', color: '#fbbf24' }}></i>
                 <div>
                   <strong style={{ display: 'block', fontSize: '14px', color: '#0f172a' }}>95%</strong>
                   <span style={{ fontSize: '10px', color: '#64748b' }}>Satisfaction Rate</span>
                 </div>
               </div>
               <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                 <i className="fas fa-star text-blue" style={{ fontSize: '20px', color: '#3b82f6' }}></i>
                 <div>
                   <strong style={{ display: 'block', fontSize: '14px', color: '#0f172a' }}>4.8/5</strong>
                   <span style={{ fontSize: '10px', color: '#64748b' }}>User Rating</span>
                 </div>
               </div>
             </div>
             
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', fontWeight: '600', color: '#475569' }}>
               <div style={{ display: 'flex', gap: '2px' }}>
                 <div style={{ width: '10px', height: '6px', backgroundColor: '#ff9933' }}></div>
                 <div style={{ width: '10px', height: '6px', backgroundColor: '#ffffff', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}></div>
                 <div style={{ width: '10px', height: '6px', backgroundColor: '#138808' }}></div>
               </div>
               Made for India's Aspirants <i className="fas fa-heart" style={{ color: '#ef4444' }}></i>
            </div>
          </footer>
         </div>

         {/* Right Sidebar */}
        <aside style={{ width: '280px', backgroundColor: '#ffffff', borderLeft: '1px solid #e2e8f0', padding: '25px', display: 'flex', flexDirection: 'column', gap: '20px', overflowY: 'auto' }}>
           
           {/* Date Widget */}
           <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '5px' }}>
              <i className="far fa-calendar-alt" style={{ color: '#2563eb', fontSize: '16px' }}></i>
              <span style={{ fontSize: '14px', fontWeight: '700', color: '#0f172a' }}>Tue, 12 Aug 2026</span>
           </div>

           {/* Quote Widget */}
           <div style={{ padding: '15px', backgroundColor: '#f8fafc', border: '1px dashed #cbd5e1', borderRadius: '8px', textAlign: 'center' }}>
              <p style={{ fontFamily: "'Caveat', cursive", fontSize: '20px', color: '#1e3a8a', margin: '0 0 10px', lineHeight: '1.2' }}>"A small step today, a big result tomorrow."</p>
              <div style={{ height: '2px', width: '30px', background: 'linear-gradient(90deg, #ff9933 33.3%, #ffffff 33.3%, #ffffff 66.6%, #138808 66.6%)', borderRadius: '1px', margin: '0 auto' }}></div>
           </div>

           {/* Parent Access */}
           <div style={{ backgroundColor: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '12px', padding: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                 <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: '#dcfce7', color: '#166534', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '16px' }}><i className="fas fa-user-friends"></i></div>
                    <h3 style={{ margin: 0, fontSize: '14px', fontWeight: '800', color: '#166534' }}>Parent Access</h3>
                 </div>
                 <span style={{ backgroundColor: '#10b981', color: 'white', fontSize: '10px', padding: '2px 6px', borderRadius: '10px' }}>New</span>
              </div>
              <p style={{ margin: '0 0 15px', fontSize: '11px', color: '#15803d', lineHeight: '1.4' }}>Let your parents track your progress and stay informed.</p>
              
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 15px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                 <li style={{ fontSize: '11px', color: '#166534', display: 'flex', alignItems: 'center', gap: '8px' }}><i className="fas fa-check-circle" style={{ color: '#10b981' }}></i> Share your progress</li>
                 <li style={{ fontSize: '11px', color: '#166534', display: 'flex', alignItems: 'center', gap: '8px' }}><i className="fas fa-check-circle" style={{ color: '#10b981' }}></i> Build accountability</li>
                 <li style={{ fontSize: '11px', color: '#166534', display: 'flex', alignItems: 'center', gap: '8px' }}><i className="fas fa-check-circle" style={{ color: '#10b981' }}></i> Read-only access</li>
                 <li style={{ fontSize: '11px', color: '#166534', display: 'flex', alignItems: 'center', gap: '8px' }}><i className="fas fa-check-circle" style={{ color: '#10b981' }}></i> Easy & secure setup</li>
              </ul>
              <button onClick={() => setShowParentModal(true)} style={{ backgroundColor: '#2563eb', color: 'white', border: 'none', width: '100%', padding: '10px', borderRadius: '8px', fontSize: '12px', fontWeight: '600', cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '5px' }}>Setup Parent Access <i className="fas fa-arrow-right"></i></button>
           </div>

           {/* Quick Actions */}
           <div style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '15px' }}>
                <i className="far fa-copy" style={{ color: '#2563eb', fontSize: '16px' }}></i>
                <h3 style={{ margin: 0, fontSize: '14px', fontWeight: '700', color: '#0f172a' }}>Quick Actions</h3>
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <a href="#" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 0', borderBottom: '1px solid #f1f5f9', color: '#475569', textDecoration: 'none', fontSize: '13px', fontWeight: '500' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><i className="fas fa-file-alt" style={{ color: '#ec4899' }}></i> Take a Mock Test</span>
                  <i className="fas fa-chevron-right" style={{ fontSize: '10px', color: '#94a3b8' }}></i>
                </a>
                <a href="#" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 0', borderBottom: '1px solid #f1f5f9', color: '#475569', textDecoration: 'none', fontSize: '13px', fontWeight: '500' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><i className="fas fa-list-ul" style={{ color: '#10b981' }}></i> Practice by Topic</span>
                  <i className="fas fa-chevron-right" style={{ fontSize: '10px', color: '#94a3b8' }}></i>
                </a>
                <a href="#" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 0', borderBottom: '1px solid #f1f5f9', color: '#475569', textDecoration: 'none', fontSize: '13px', fontWeight: '500' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><i className="far fa-newspaper" style={{ color: '#f59e0b' }}></i> Read Current Affairs</span>
                  <i className="fas fa-chevron-right" style={{ fontSize: '10px', color: '#94a3b8' }}></i>
                </a>
                <a href="#" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 0', borderBottom: '1px solid #f1f5f9', color: '#475569', textDecoration: 'none', fontSize: '13px', fontWeight: '500' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><i className="fas fa-download" style={{ color: '#3b82f6' }}></i> Download Notes</span>
                  <i className="fas fa-chevron-right" style={{ fontSize: '10px', color: '#94a3b8' }}></i>
                </a>
                <a href="#" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 0', borderBottom: '1px solid #f1f5f9', color: '#475569', textDecoration: 'none', fontSize: '13px', fontWeight: '500' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><i className="fas fa-chart-line" style={{ color: '#8b5cf6' }}></i> View Performance Report</span>
                  <i className="fas fa-chevron-right" style={{ fontSize: '10px', color: '#94a3b8' }}></i>
                </a>
                <a href="#" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 0', color: '#475569', textDecoration: 'none', fontSize: '13px', fontWeight: '500' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><i className="fas fa-comment-dots" style={{ color: '#0ea5e9' }}></i> Ask AI Doubt Solver</span>
                  <i className="fas fa-chevron-right" style={{ fontSize: '10px', color: '#94a3b8' }}></i>
                </a>
              </div>
           </div>
           
           {/* Keep Going */}
           <div style={{ backgroundColor: '#fffbeb', border: '1px solid #fde68a', borderRadius: '12px', padding: '20px', display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
             <i className="fas fa-trophy" style={{ color: '#f59e0b', fontSize: '24px', marginTop: '5px' }}></i>
             <div>
               <h4 style={{ margin: '0 0 5px', fontSize: '14px', fontWeight: '800', color: '#92400e' }}>Keep Going, {user?.name || 'Student'}!</h4>
               <p style={{ margin: 0, fontSize: '11px', color: '#b45309', lineHeight: '1.4' }}>Success is the sum of small efforts, repeated daily.</p>
               <div style={{ height: '3px', width: '30px', background: 'linear-gradient(90deg, #ff9933 33.3%, #ffffff 33.3%, #ffffff 66.6%, #138808 66.6%)', borderRadius: '2px', marginTop: '10px' }}></div>
             </div>
           </div>

        </aside>

      </div>

      {/* Parent Access Modal */}
      {showParentModal && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(15, 23, 42, 0.6)', backdropFilter: 'blur(4px)', zIndex: 100, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ backgroundColor: 'white', borderRadius: '20px', width: '900px', maxWidth: '95vw', display: 'flex', overflow: 'hidden', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}>
            
            {/* Left Panel - Illustration & Benefits */}
            <div style={{ width: '38%', backgroundColor: '#f0f9ff', padding: '40px 30px', position: 'relative' }}>
               <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '30px' }}>
                 <i className="fas fa-graduation-cap" style={{ fontSize: '24px', color: '#1e3a8a' }}></i>
                 <div>
                   <h1 style={{ margin: 0, fontSize: '18px', fontWeight: '800', color: '#0f172a' }}>CGLPrep AI</h1>
                   <p style={{ margin: 0, fontSize: '8px', color: '#1e3a8a', fontWeight: '600' }}>Plan • Practice • Crack CGL</p>
                 </div>
               </div>

               <h2 style={{ fontSize: '32px', fontWeight: '800', color: '#1e3a8a', margin: '0 0 10px', lineHeight: '1.2' }}>Parent Access</h2>
               <p style={{ fontSize: '15px', color: '#334155', margin: '0 0 30px', lineHeight: '1.4' }}>Because every great journey has a stronger support system.</p>

               <div style={{ position: 'relative', height: '160px', marginBottom: '30px' }}>
                  {/* Placeholder for family illustration */}
                  <div style={{ width: '100%', height: '100%', backgroundColor: '#bae6fd', borderRadius: '12px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                     <i className="fas fa-users" style={{ fontSize: '60px', color: '#38bdf8' }}></i>
                  </div>
                  <div style={{ position: 'absolute', top: '-10px', right: '-20px', transform: 'rotate(-5deg)', textAlign: 'center' }}>
                     <h3 style={{ fontFamily: "'Caveat', cursive", fontSize: '18px', color: '#1e3a8a', margin: 0, lineHeight: '1.1' }}>
                       Same<br/>Aspiration<br/>Bigger<br/>Dreams!
                     </h3>
                     <div style={{ height: '2px', width: '30px', background: 'linear-gradient(90deg, #ff9933 33.3%, #ffffff 33.3%, #ffffff 66.6%, #138808 66.6%)', borderRadius: '2px', margin: '5px auto 0' }}></div>
                  </div>
               </div>

               <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                 <div style={{ display: 'flex', gap: '15px' }}>
                   <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: '#dcfce7', color: '#16a34a', display: 'flex', justifyContent: 'center', alignItems: 'center', flexShrink: 0 }}><i className="far fa-eye"></i></div>
                   <div>
                     <h4 style={{ margin: '0 0 2px', fontSize: '13px', fontWeight: '700', color: '#1e3a8a' }}>Stay Informed</h4>
                     <p style={{ margin: 0, fontSize: '12px', color: '#475569', lineHeight: '1.4' }}>Let your parents track your progress and achievements.</p>
                   </div>
                 </div>
                 <div style={{ display: 'flex', gap: '15px' }}>
                   <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: '#f3e8ff', color: '#9333ea', display: 'flex', justifyContent: 'center', alignItems: 'center', flexShrink: 0 }}><i className="fas fa-chart-bar"></i></div>
                   <div>
                     <h4 style={{ margin: '0 0 2px', fontSize: '13px', fontWeight: '700', color: '#1e3a8a' }}>Build Accountability</h4>
                     <p style={{ margin: 0, fontSize: '12px', color: '#475569', lineHeight: '1.4' }}>Extra motivation to keep going every day.</p>
                   </div>
                 </div>
                 <div style={{ display: 'flex', gap: '15px' }}>
                   <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: '#ffedd5', color: '#ea580c', display: 'flex', justifyContent: 'center', alignItems: 'center', flexShrink: 0 }}><i className="fas fa-shield-alt"></i></div>
                   <div>
                     <h4 style={{ margin: '0 0 2px', fontSize: '13px', fontWeight: '700', color: '#1e3a8a' }}>Read-Only Access</h4>
                     <p style={{ margin: 0, fontSize: '12px', color: '#475569', lineHeight: '1.4' }}>Your parents can only view your progress (no changes).</p>
                   </div>
                 </div>
                 <div style={{ display: 'flex', gap: '15px' }}>
                   <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: '#ffe4e6', color: '#e11d48', display: 'flex', justifyContent: 'center', alignItems: 'center', flexShrink: 0 }}><i className="fas fa-heart"></i></div>
                   <div>
                     <h4 style={{ margin: '0 0 2px', fontSize: '13px', fontWeight: '700', color: '#1e3a8a' }}>Achieve Together</h4>
                     <p style={{ margin: 0, fontSize: '12px', color: '#475569', lineHeight: '1.4' }}>Turn your goals into a family success story.</p>
                   </div>
                 </div>
               </div>

               <div style={{ marginTop: '30px' }}>
                 <p style={{ fontFamily: "'Caveat', cursive", fontSize: '20px', color: '#1e3a8a', margin: '0 0 10px', lineHeight: '1.2' }}>"A small step today,<br/>a big result tomorrow."</p>
                 <div style={{ height: '3px', width: '40px', background: 'linear-gradient(90deg, #ff9933 33.3%, #ffffff 33.3%, #ffffff 66.6%, #138808 66.6%)', borderRadius: '2px' }}></div>
               </div>
            </div>

            {/* Right Panel - Forms */}
            <div style={{ width: '62%', padding: '40px', display: 'flex', flexDirection: 'column' }}>
               <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '30px' }}>
                 <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                   <div style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: '#eff6ff', color: '#2563eb', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '24px' }}><i className="fas fa-user-friends"></i></div>
                   <div>
                     <h2 style={{ margin: '0 0 5px', fontSize: '24px', fontWeight: '800', color: '#0f172a' }}>Setup Parent Access</h2>
                     <p style={{ margin: 0, fontSize: '13px', color: '#475569', lineHeight: '1.4' }}>Add your parent's details and generate login credentials.<br/>We'll send them an invitation email to access your progress.</p>
                   </div>
                 </div>
                 <button onClick={() => setShowParentModal(false)} style={{ background: 'none', border: 'none', fontSize: '20px', color: '#64748b', cursor: 'pointer', padding: '5px' }}><i className="fas fa-times"></i></button>
               </div>

               {/* Section 1 */}
               <div style={{ marginBottom: '25px' }}>
                 <h3 style={{ margin: '0 0 15px', fontSize: '15px', fontWeight: '700', color: '#0f172a', display: 'flex', alignItems: 'center', gap: '10px' }}>
                   <span style={{ backgroundColor: '#2563eb', color: 'white', width: '20px', height: '20px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '11px' }}>1</span>
                   Parent Details
                 </h3>
                 <div style={{ display: 'flex', gap: '15px', marginBottom: '15px' }}>
                   <div style={{ flex: 2 }}>
                     <label style={{ display: 'block', fontSize: '12px', fontWeight: '600', color: '#334155', marginBottom: '5px' }}>Parent's Full Name <span style={{ color: '#ef4444' }}>*</span></label>
                     <div style={{ position: 'relative' }}>
                       <i className="far fa-user" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }}></i>
                       <input type="text" value="Rakesh Kumar Thakur" readOnly style={{ width: '100%', padding: '10px 10px 10px 35px', border: '1px solid #e2e8f0', borderRadius: '6px', fontSize: '13px', color: '#0f172a' }} />
                     </div>
                   </div>
                   <div style={{ flex: 1 }}>
                     <label style={{ display: 'block', fontSize: '12px', fontWeight: '600', color: '#334155', marginBottom: '5px' }}>Relationship <span style={{ color: '#ef4444' }}>*</span></label>
                     <div style={{ position: 'relative' }}>
                       <i className="far fa-user" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }}></i>
                       <select style={{ width: '100%', padding: '10px 10px 10px 35px', border: '1px solid #e2e8f0', borderRadius: '6px', fontSize: '13px', color: '#0f172a', appearance: 'none' }}>
                         <option>Father</option>
                       </select>
                       <i className="fas fa-chevron-down" style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8', fontSize: '10px', pointerEvents: 'none' }}></i>
                     </div>
                   </div>
                 </div>
                 <div>
                   <label style={{ display: 'block', fontSize: '12px', fontWeight: '600', color: '#334155', marginBottom: '5px' }}>Parent's Email Address <span style={{ color: '#ef4444' }}>*</span></label>
                   <div style={{ position: 'relative' }}>
                     <i className="far fa-envelope" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }}></i>
                     <input type="email" value="rakesh.thakur@gmail.com" readOnly style={{ width: '100%', padding: '10px 10px 10px 35px', border: '1px solid #e2e8f0', borderRadius: '6px', fontSize: '13px', color: '#0f172a' }} />
                   </div>
                 </div>
               </div>

               {/* Section 2 */}
               <div style={{ marginBottom: '25px', backgroundColor: '#f8fafc', padding: '15px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                 <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
                   <h3 style={{ margin: 0, fontSize: '15px', fontWeight: '700', color: '#0f172a', display: 'flex', alignItems: 'center', gap: '10px' }}>
                     <span style={{ backgroundColor: '#2563eb', color: 'white', width: '20px', height: '20px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '11px' }}>2</span>
                     Login Credentials (Auto Generated)
                   </h3>
                   <button style={{ background: 'none', border: 'none', color: '#2563eb', fontSize: '13px', fontWeight: '600', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '5px' }}>
                     <i className="fas fa-sync-alt"></i> Generate New
                   </button>
                 </div>
                 
                 <div style={{ display: 'flex', gap: '15px', marginBottom: '15px' }}>
                   <div style={{ flex: 1 }}>
                     <label style={{ display: 'block', fontSize: '12px', fontWeight: '600', color: '#475569', marginBottom: '5px' }}>Username</label>
                     <div style={{ position: 'relative', display: 'flex' }}>
                       <div style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#64748b' }}><i className="far fa-user"></i></div>
                       <input type="text" value="rakesh.thakur" readOnly style={{ width: '100%', padding: '10px 35px', border: '1px solid #cbd5e1', borderRadius: '6px 0 0 6px', fontSize: '13px', backgroundColor: 'white', color: '#0f172a' }} />
                       <button style={{ padding: '0 12px', backgroundColor: '#eff6ff', border: '1px solid #cbd5e1', borderLeft: 'none', borderRadius: '0 6px 6px 0', color: '#2563eb', cursor: 'pointer' }}><i className="far fa-copy"></i></button>
                     </div>
                   </div>
                   <div style={{ flex: 1 }}>
                     <label style={{ display: 'block', fontSize: '12px', fontWeight: '600', color: '#475569', marginBottom: '5px' }}>Temporary Password</label>
                     <div style={{ position: 'relative', display: 'flex' }}>
                       <div style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#64748b' }}><i className="fas fa-lock"></i></div>
                       <input type="text" value="xK9pL7mQ" readOnly style={{ width: '100%', padding: '10px 35px', border: '1px solid #cbd5e1', borderRadius: '6px 0 0 6px', fontSize: '13px', backgroundColor: 'white', color: '#0f172a' }} />
                       <div style={{ position: 'absolute', right: '40px', top: '50%', transform: 'translateY(-50%)', color: '#64748b', cursor: 'pointer' }}><i className="far fa-eye"></i></div>
                       <button style={{ padding: '0 12px', backgroundColor: '#eff6ff', border: '1px solid #cbd5e1', borderLeft: 'none', borderRadius: '0 6px 6px 0', color: '#2563eb', cursor: 'pointer' }}><i className="far fa-copy"></i></button>
                     </div>
                   </div>
                 </div>

                 <div style={{ display: 'flex', alignItems: 'center', gap: '8px', backgroundColor: '#eff6ff', padding: '10px', borderRadius: '6px', fontSize: '12px', color: '#1e3a8a' }}>
                   <i className="fas fa-info-circle" style={{ color: '#2563eb' }}></i> This is a secure, system-generated password. Your parent can change it after first login.
                 </div>
               </div>

               {/* Section 3 */}
               <div style={{ marginBottom: '25px' }}>
                 <h3 style={{ margin: '0 0 15px', fontSize: '15px', fontWeight: '700', color: '#0f172a', display: 'flex', alignItems: 'center', gap: '10px' }}>
                   <span style={{ backgroundColor: '#2563eb', color: 'white', width: '20px', height: '20px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '11px' }}>3</span>
                   Permissions & Access
                 </h3>
                 <div style={{ backgroundColor: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '8px', padding: '15px', marginBottom: '15px' }}>
                   <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                     <li style={{ fontSize: '13px', color: '#0f172a', display: 'flex', alignItems: 'center', gap: '10px' }}><i className="fas fa-check-circle" style={{ color: '#16a34a' }}></i> Parents can view your study progress, test performance, and reports.</li>
                     <li style={{ fontSize: '13px', color: '#0f172a', display: 'flex', alignItems: 'center', gap: '10px' }}><i className="fas fa-check-circle" style={{ color: '#16a34a' }}></i> Parents cannot make any changes to your account.</li>
                     <li style={{ fontSize: '13px', color: '#0f172a', display: 'flex', alignItems: 'center', gap: '10px' }}><i className="fas fa-check-circle" style={{ color: '#16a34a' }}></i> You can revoke access anytime.</li>
                     <li style={{ fontSize: '13px', color: '#0f172a', display: 'flex', alignItems: 'center', gap: '10px' }}><i className="fas fa-check-circle" style={{ color: '#16a34a' }}></i> A secure invitation email will be sent with login instructions.</li>
                   </ul>
                 </div>
                 
                 <label style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer', fontSize: '13px', color: '#334155', fontWeight: '500' }}>
                   <input type="checkbox" defaultChecked style={{ width: '16px', height: '16px', cursor: 'pointer', accentColor: '#2563eb' }} /> I confirm that I have my parent's permission to share this access.
                 </label>
               </div>

               {/* Actions */}
               <div style={{ display: 'flex', gap: '15px', marginTop: 'auto' }}>
                 <button onClick={() => setShowParentModal(false)} style={{ flex: 1, padding: '12px', backgroundColor: 'white', border: '1px solid #cbd5e1', borderRadius: '8px', color: '#0f172a', fontSize: '14px', fontWeight: '600', cursor: 'pointer' }}>Cancel</button>
                 <button onClick={() => { setShowParentModal(false); setShowSuccessModal(true); }} style={{ flex: 2, padding: '12px', backgroundColor: '#2563eb', border: 'none', borderRadius: '8px', color: 'white', fontSize: '14px', fontWeight: '600', cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px' }}>
                   <i className="fas fa-paper-plane"></i> Send Parent Invitation <i className="fas fa-arrow-right"></i>
                 </button>
               </div>

               <div style={{ textAlign: 'center', marginTop: '15px', fontSize: '11px', color: '#64748b', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '6px' }}>
                 <i className="fas fa-lock"></i> Your data is safe with us. | <span style={{ fontWeight: '600' }}>Secure. Private. Trusted.</span>
               </div>
            </div>
            
          </div>
        </div>
      )}

      {/* Parent Success Modal */}
      {showSuccessModal && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(15, 23, 42, 0.6)', backdropFilter: 'blur(4px)', zIndex: 100, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ backgroundColor: 'white', borderRadius: '20px', width: '650px', maxWidth: '95vw', display: 'flex', flexDirection: 'column', position: 'relative', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}>
            
            <button onClick={() => setShowSuccessModal(false)} style={{ position: 'absolute', top: '20px', right: '20px', background: 'none', border: 'none', fontSize: '20px', color: '#64748b', cursor: 'pointer', zIndex: 10 }}><i className="fas fa-times"></i></button>

            {/* Top Glow & Icon */}
            <div style={{ position: 'relative', height: '140px', display: 'flex', justifyContent: 'center', alignItems: 'flex-end', paddingBottom: '10px', overflow: 'hidden', borderTopLeftRadius: '20px', borderTopRightRadius: '20px' }}>
               {/* Glowing Background */}
               <div style={{ position: 'absolute', top: '-100px', left: '50%', transform: 'translateX(-50%)', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(56, 189, 248, 0.2) 0%, rgba(255,255,255,0) 70%)', zIndex: 0 }}></div>
               
               {/* Envelope Icon */}
               <div style={{ position: 'relative', zIndex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                 {/* Decorative elements around envelope */}
                 <div style={{ position: 'absolute', top: '10px', left: '-30px', width: '8px', height: '8px', backgroundColor: '#fbbf24', borderRadius: '50%' }}></div>
                 <div style={{ position: 'absolute', top: '-20px', left: '-10px', width: '6px', height: '20px', backgroundColor: '#34d399', borderRadius: '3px', transform: 'rotate(-30deg)' }}></div>
                 <div style={{ position: 'absolute', top: '-25px', right: '10px', width: '6px', height: '20px', backgroundColor: '#fbbf24', borderRadius: '3px', transform: 'rotate(20deg)' }}></div>
                 <div style={{ position: 'absolute', top: '20px', right: '-35px', width: '8px', height: '8px', backgroundColor: '#38bdf8', borderRadius: '50%' }}></div>

                 <div style={{ fontSize: '80px', color: '#93c5fd', textShadow: '0 10px 15px rgba(0,0,0,0.1)' }}>
                    <i className="fas fa-envelope-open-text"></i>
                 </div>
                 <div style={{ position: 'absolute', bottom: '0', right: '-10px', width: '36px', height: '36px', backgroundColor: '#10b981', borderRadius: '50%', border: '4px solid white', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white', fontSize: '18px' }}>
                    <i className="fas fa-check"></i>
                 </div>
               </div>
            </div>

            <div style={{ padding: '0 40px 40px', display: 'flex', flexDirection: 'column' }}>
               {/* Headers */}
               <div style={{ textAlign: 'center', marginBottom: '25px' }}>
                 <h2 style={{ fontSize: '28px', fontWeight: '800', color: '#1e3a8a', margin: '0 0 10px' }}>Parent Invitation Sent!</h2>
                 <p style={{ fontSize: '14px', color: '#475569', margin: 0, lineHeight: '1.5', maxWidth: '400px', marginLeft: 'auto', marginRight: 'auto' }}>
                   We've sent the login details to your parent's email address. They can now access your progress on CGLPrep AI.
                 </p>
               </div>

               {/* Email Confirmation Box */}
               <div style={{ backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
                 <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                   <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#eff6ff', color: '#2563eb', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '16px' }}><i className="fas fa-envelope"></i></div>
                   <div>
                     <p style={{ margin: '0 0 3px', fontSize: '12px', color: '#64748b' }}>Email Sent To</p>
                     <h4 style={{ margin: '0 0 5px', fontSize: '15px', fontWeight: '700', color: '#0f172a' }}>rakesh.thakur@gmail.com</h4>
                     <p style={{ margin: 0, fontSize: '11px', color: '#94a3b8' }}>Please ask your parent to check their inbox (and spam folder).</p>
                   </div>
                 </div>
                 <div style={{ textAlign: 'right' }}>
                   <div style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', backgroundColor: '#dcfce7', color: '#166534', padding: '6px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: '600', marginBottom: '5px' }}>
                     <i className="fas fa-check"></i> Sent Successfully
                   </div>
                   <p style={{ margin: 0, fontSize: '11px', color: '#94a3b8' }}>12 Aug 2026, 10:24 AM</p>
                 </div>
               </div>

               {/* What happens next */}
               <div style={{ backgroundColor: '#f0f9ff', borderRadius: '12px', padding: '25px', display: 'flex', gap: '20px', marginBottom: '25px' }}>
                 <div style={{ flex: 1 }}>
                   <h3 style={{ margin: '0 0 20px', fontSize: '16px', fontWeight: '800', color: '#0f172a' }}>What happens next?</h3>
                   
                   <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                     <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                       <div style={{ width: '24px', height: '24px', borderRadius: '50%', backgroundColor: '#2563eb', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '12px', fontWeight: '700', flexShrink: 0 }}>1</div>
                       <div>
                         <h4 style={{ margin: '0 0 3px', fontSize: '13px', fontWeight: '700', color: '#1e3a8a' }}>Parent checks email</h4>
                         <p style={{ margin: 0, fontSize: '11px', color: '#475569', lineHeight: '1.4' }}>They will receive a welcome email with login credentials and instructions.</p>
                       </div>
                     </div>
                     <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                       <div style={{ width: '24px', height: '24px', borderRadius: '50%', backgroundColor: '#2563eb', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '12px', fontWeight: '700', flexShrink: 0 }}>2</div>
                       <div>
                         <h4 style={{ margin: '0 0 3px', fontSize: '13px', fontWeight: '700', color: '#1e3a8a' }}>Parent logs in</h4>
                         <p style={{ margin: 0, fontSize: '11px', color: '#475569', lineHeight: '1.4' }}>They can log in using the provided username and temporary password.</p>
                       </div>
                     </div>
                     <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                       <div style={{ width: '24px', height: '24px', borderRadius: '50%', backgroundColor: '#2563eb', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '12px', fontWeight: '700', flexShrink: 0 }}>3</div>
                       <div>
                         <h4 style={{ margin: '0 0 3px', fontSize: '13px', fontWeight: '700', color: '#1e3a8a' }}>Parent sets a new password</h4>
                         <p style={{ margin: 0, fontSize: '11px', color: '#475569', lineHeight: '1.4' }}>For better security, they will be asked to create a new password on first login.</p>
                       </div>
                     </div>
                     <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                       <div style={{ width: '24px', height: '24px', borderRadius: '50%', backgroundColor: '#2563eb', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '12px', fontWeight: '700', flexShrink: 0 }}>4</div>
                       <div>
                         <h4 style={{ margin: '0 0 3px', fontSize: '13px', fontWeight: '700', color: '#1e3a8a' }}>Start tracking your progress together!</h4>
                         <p style={{ margin: 0, fontSize: '11px', color: '#475569', lineHeight: '1.4' }}>Your parent will get read-only access to your study progress, test performance and reports.</p>
                       </div>
                     </div>
                   </div>
                 </div>

                 {/* Illustration Area */}
                 <div style={{ width: '160px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                   <div style={{ width: '100%', height: '120px', backgroundColor: '#bae6fd', borderRadius: '12px', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '15px' }}>
                     <i className="fas fa-users" style={{ fontSize: '50px', color: '#38bdf8' }}></i>
                   </div>
                   <div style={{ textAlign: 'center', transform: 'rotate(-5deg)' }}>
                     <p style={{ fontFamily: "'Caveat', cursive", fontSize: '18px', color: '#1e3a8a', margin: '0 0 5px', lineHeight: '1.1' }}>"Stronger<br/>Support<br/>Brighter<br/>Results!"</p>
                     <div style={{ height: '2px', width: '30px', background: 'linear-gradient(90deg, #ff9933 33.3%, #ffffff 33.3%, #ffffff 66.6%, #138808 66.6%)', borderRadius: '2px', margin: '0 auto' }}></div>
                   </div>
                 </div>
               </div>

               {/* Read Only Alert */}
               <div style={{ backgroundColor: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '8px', padding: '12px 15px', display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '30px' }}>
                 <i className="fas fa-shield-alt" style={{ fontSize: '20px', color: '#16a34a' }}></i>
                 <div>
                   <h4 style={{ margin: '0 0 2px', fontSize: '12px', fontWeight: '700', color: '#166534' }}>Your parent will have read-only access.</h4>
                   <p style={{ margin: 0, fontSize: '11px', color: '#15803d' }}>They cannot make any changes to your account or data.</p>
                 </div>
               </div>

               {/* Buttons */}
               <div style={{ display: 'flex', gap: '15px' }}>
                 <button onClick={() => setShowSuccessModal(false)} style={{ flex: 1, padding: '12px', backgroundColor: 'white', border: '1px solid #cbd5e1', borderRadius: '8px', color: '#0f172a', fontSize: '14px', fontWeight: '600', cursor: 'pointer' }}>Back to Dashboard</button>
                 <button onClick={() => { setShowSuccessModal(false); setShowParentModal(true); }} style={{ flex: 1, padding: '12px', backgroundColor: '#2563eb', border: 'none', borderRadius: '8px', color: 'white', fontSize: '14px', fontWeight: '600', cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px' }}>
                   <i className="fas fa-paper-plane"></i> Send Another Invitation
                 </button>
               </div>
            </div>

          </div>
        </div>
      )}
    </DashboardLayout>
  );
};

export default DashboardAnalysisPage;
