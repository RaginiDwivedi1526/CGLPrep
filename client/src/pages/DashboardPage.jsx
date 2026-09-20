import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import DashboardLayout from '../components/DashboardLayout';
import '../dashboard.css';

const DashboardPage = () => {
  const { user } = useContext(AuthContext);
  const [progress, setProgress] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const token = localStorage.getItem('token');
    if (token) {
      fetch('http://localhost:5000/api/dashboard/progress', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      .then(res => res.json())
      .then(data => setProgress(data))
      .catch(err => console.error('Error fetching dashboard data:', err));
    }
  }, []);

  return (
    <DashboardLayout>
      <div className="db-main-container">
        
        {/* Center Content Area */}
        <div style={{ flex: 1, padding: '15px 0' }}>    
          {/* Welcome Row */}
          <div className="db-welcome-row">
            <div>
              <p style={{ color: '#64748b', fontSize: '16px', margin: '0 0 5px' }}>Welcome Back,</p>
              <h2 style={{ color: '#0f172a', fontSize: '32px', fontWeight: '800', margin: '0 0 8px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                {user?.name || 'Student'}! <span style={{ fontSize: '28px' }}>👋</span>
              </h2>
              <p style={{ color: '#334155', fontSize: '15px', margin: 0 }}>
                Stay consistent. You're one step closer to your <span style={{ color: '#1e3a8a', fontWeight: '600' }}>Government Job.</span>
              </p>
            </div>
            
            <div className="db-welcome-decorator">
               <h3 style={{ fontFamily: "'Caveat', cursive", fontSize: '24px', color: '#1e3a8a', margin: 0, lineHeight: '1.1' }}>
                 Same<br/>Aspiration<br/>Bigger<br/>Dreams!
               </h3>
               <div style={{ height: '3px', width: '40px', background: 'linear-gradient(90deg, #ff9933 33.3%, #ffffff 33.3%, #ffffff 66.6%, #138808 66.6%)', borderRadius: '2px', margin: '8px auto 0' }}></div>
            </div>

            {/* Free Trial Banner */}
            <div className="db-free-trial-banner">
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '5px' }}>
                  <i className="fas fa-crown" style={{ color: '#fbbf24', fontSize: '20px' }}></i>
                  <h4 style={{ margin: 0, color: '#166534', fontSize: '15px', fontWeight: '700' }}>You're on Free Trial</h4>
                </div>
                <p style={{ margin: '0 0 10px', color: '#15803d', fontSize: '12px', lineHeight: '1.4' }}>
                  Full access for 1 day. Upgrade to continue your preparation without limits.
                </p>
                <button style={{ backgroundColor: '#16a34a', color: 'white', border: 'none', padding: '6px 12px', borderRadius: '6px', fontSize: '12px', fontWeight: '600', alignSelf: 'flex-start', cursor: 'pointer' }}>
                  View Plans <i className="fas fa-arrow-right"></i>
                </button>
              </div>
              <div style={{ width: '70px', height: '70px', borderRadius: '50%', border: '4px dashed #86efac', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', flexShrink: 0 }}>
                <span style={{ fontSize: '10px', color: '#15803d', fontWeight: '600' }}>Trial Ends In</span>
                <strong style={{ fontSize: '14px', color: '#166534' }}>23:58:12</strong>
              </div>
            </div>
          </div>

          {/* 5 Quick Actions */}
          <div className="db-quick-actions animate-fade-in delay-100">
            <Link to="/dashboard-practice" className="quick-action-card" style={{ textDecoration: 'none', backgroundColor: 'white', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '20px 15px', display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer', transition: 'box-shadow 0.2s', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '10px', backgroundColor: '#2563eb', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '18px', flexShrink: 0 }}><i className="fas fa-file-alt"></i></div>
              <div style={{ flex: 1 }}>
                <h4 style={{ margin: '0 0 2px', fontSize: '13px', fontWeight: '700', color: '#0f172a' }}>Start Practice</h4>
                <p style={{ margin: 0, fontSize: '10px', color: '#64748b' }}>Topic-wise questions</p>
              </div>
              <i className="fas fa-arrow-right" style={{ color: '#2563eb', fontSize: '12px' }}></i>
            </Link>
            
            <Link to="/mock-tests" className="quick-action-card" style={{ textDecoration: 'none', backgroundColor: 'white', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '20px 15px', display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer', transition: 'box-shadow 0.2s', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '10px', backgroundColor: '#9333ea', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '18px', flexShrink: 0 }}><i className="fas fa-stopwatch"></i></div>
              <div style={{ flex: 1 }}>
                <h4 style={{ margin: '0 0 2px', fontSize: '13px', fontWeight: '700', color: '#0f172a' }}>Take a Mock Test</h4>
                <p style={{ margin: 0, fontSize: '10px', color: '#64748b' }}>Full-length test</p>
              </div>
              <i className="fas fa-arrow-right" style={{ color: '#9333ea', fontSize: '12px' }}></i>
            </Link>

            <Link to="/dashboard-analysis" className="quick-action-card" style={{ textDecoration: 'none', backgroundColor: 'white', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '20px 15px', display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer', transition: 'box-shadow 0.2s', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '10px', backgroundColor: '#16a34a', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '18px', flexShrink: 0 }}><i className="fas fa-chart-line"></i></div>
              <div style={{ flex: 1 }}>
                <h4 style={{ margin: '0 0 2px', fontSize: '13px', fontWeight: '700', color: '#0f172a' }}>View My Analysis</h4>
                <p style={{ margin: 0, fontSize: '10px', color: '#64748b' }}>Check performance</p>
              </div>
              <i className="fas fa-arrow-right" style={{ color: '#16a34a', fontSize: '12px' }}></i>
            </Link>

            <Link to="/current-affairs" className="quick-action-card" style={{ textDecoration: 'none', backgroundColor: 'white', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '20px 15px', display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer', transition: 'box-shadow 0.2s', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '10px', backgroundColor: '#f97316', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '18px', flexShrink: 0 }}><i className="far fa-newspaper"></i></div>
              <div style={{ flex: 1 }}>
                <h4 style={{ margin: '0 0 2px', fontSize: '13px', fontWeight: '700', color: '#0f172a' }}>Read Current Affairs</h4>
                <p style={{ margin: 0, fontSize: '10px', color: '#64748b' }}>Daily updates</p>
              </div>
              <i className="fas fa-arrow-right" style={{ color: '#f97316', fontSize: '12px' }}></i>
            </Link>

            <Link to="/post-predictor" className="quick-action-card" style={{ textDecoration: 'none', backgroundColor: 'white', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '20px 15px', display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer', transition: 'box-shadow 0.2s', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '10px', backgroundColor: '#e11d48', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '18px', flexShrink: 0 }}><i className="fas fa-bullseye"></i></div>
              <div style={{ flex: 1 }}>
                <h4 style={{ margin: '0 0 2px', fontSize: '13px', fontWeight: '700', color: '#0f172a' }}>Post Predictor</h4>
                <p style={{ margin: 0, fontSize: '10px', color: '#64748b' }}>Check your chances</p>
              </div>
              <i className="fas fa-arrow-right" style={{ color: '#e11d48', fontSize: '12px' }}></i>
            </Link>
          </div>

          {/* Prep Overview */}
          <div className="animate-fade-in delay-200" style={{ backgroundColor: 'white', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '25px', marginBottom: '30px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <h3 style={{ margin: 0, fontSize: '18px', fontWeight: '800', color: '#0f172a', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <i className="fas fa-chart-pie" style={{ color: '#2563eb' }}></i> Your Preparation Overview
              </h3>
              <span style={{ fontSize: '13px', color: '#64748b' }}>Let's get started! Your journey begins now.</span>
            </div>
            
            <div className="db-overview-grid">
              <div className="stat-card" style={{ flex: 1, border: '1px solid #e2e8f0', borderRadius: '10px', padding: '20px 15px', display: 'flex', alignItems: 'center', gap: '15px' }}>
                <div className="stat-card-icon-wrapper" style={{ width: '46px', height: '46px', borderRadius: '50%', backgroundColor: '#eff6ff', color: '#2563eb', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '20px' }}><i className="fas fa-file-signature"></i></div>
                <div>
                  <h4 style={{ margin: '0 0 2px', fontSize: '22px', fontWeight: '800', color: '#0f172a' }}>{progress ? progress.testsTaken : '0'}</h4>
                  <p style={{ margin: 0, fontSize: '12px', color: '#64748b' }}>Tests Attempted</p>
                </div>
              </div>
              <div className="stat-card" style={{ flex: 1, border: '1px solid #e2e8f0', borderRadius: '10px', padding: '20px 15px', display: 'flex', alignItems: 'center', gap: '15px' }}>
                <div className="stat-card-icon-wrapper" style={{ width: '46px', height: '46px', borderRadius: '50%', backgroundColor: '#dcfce7', color: '#16a34a', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '20px' }}><i className="fas fa-list-ul"></i></div>
                <div>
                  <h4 style={{ margin: '0 0 2px', fontSize: '22px', fontWeight: '800', color: '#0f172a' }}>{progress ? progress.avgScore : '0/200'}</h4>
                  <p style={{ margin: 0, fontSize: '12px', color: '#64748b' }}>Average Score</p>
                </div>
              </div>
              <div className="stat-card" style={{ flex: 1, border: '1px solid #e2e8f0', borderRadius: '10px', padding: '20px 15px', display: 'flex', alignItems: 'center', gap: '15px' }}>
                <div className="stat-card-icon-wrapper" style={{ width: '46px', height: '46px', borderRadius: '50%', backgroundColor: '#ffe4e6', color: '#e11d48', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '20px' }}><i className="fas fa-bullseye"></i></div>
                <div>
                  <h4 style={{ margin: '0 0 2px', fontSize: '22px', fontWeight: '800', color: '#0f172a' }}>{progress ? progress.accuracy : '0%'}</h4>
                  <p style={{ margin: 0, fontSize: '12px', color: '#64748b' }}>Accuracy Rate</p>
                </div>
              </div>
              <div className="stat-card" style={{ flex: 1, border: '1px solid #e2e8f0', borderRadius: '10px', padding: '20px 15px', display: 'flex', alignItems: 'center', gap: '15px' }}>
                <div className="stat-card-icon-wrapper" style={{ width: '46px', height: '46px', borderRadius: '50%', backgroundColor: '#ffedd5', color: '#f97316', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '20px' }}><i className="fas fa-fire"></i></div>
                <div>
                  <h4 style={{ margin: '0 0 2px', fontSize: '22px', fontWeight: '800', color: '#0f172a' }}>{progress ? progress.timeSpent : '0'}</h4>
                  <p style={{ margin: 0, fontSize: '12px', color: '#64748b' }}>Time Spent</p>
                </div>
              </div>
              <div className="stat-card" style={{ flex: 1, border: '1px solid #e2e8f0', borderRadius: '10px', padding: '20px 15px', display: 'flex', alignItems: 'center', gap: '15px' }}>
                <div className="stat-card-icon-wrapper" style={{ width: '46px', height: '46px', borderRadius: '50%', backgroundColor: '#fef3c7', color: '#d97706', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '20px' }}><i className="fas fa-crown"></i></div>
                <div>
                  <h4 style={{ margin: '0 0 2px', fontSize: '22px', fontWeight: '800', color: '#0f172a' }}>{progress ? `#${progress.overallRank}` : 'N/A'}</h4>
                  <p style={{ margin: 0, fontSize: '12px', color: '#64748b' }}>Overall Rank</p>
                </div>
              </div>
            </div>
          </div>

          {/* Recommended for You */}
          <div style={{ backgroundColor: 'white', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '25px', marginBottom: '30px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <div>
                <h3 style={{ margin: '0 0 5px', fontSize: '18px', fontWeight: '800', color: '#0f172a', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <i className="fas fa-rocket" style={{ color: '#2563eb' }}></i> Recommended for You
                </h3>
                <p style={{ margin: 0, fontSize: '13px', color: '#64748b', paddingLeft: '28px' }}>Based on your selected exam and level</p>
              </div>
              <a href="#" style={{ color: '#2563eb', fontSize: '14px', fontWeight: '600', textDecoration: 'none' }}>View All <i className="fas fa-arrow-right"></i></a>
            </div>
            
            <div className="db-recommended-grid">
              <div style={{ border: '1px solid #e2e8f0', borderRadius: '10px', padding: '15px', display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', gap: '12px', marginBottom: '15px' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '8px', backgroundColor: '#eff6ff', color: '#2563eb', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '16px', flexShrink: 0 }}><i className="fas fa-book"></i></div>
                  <div>
                    <h4 style={{ margin: '0 0 4px', fontSize: '13px', fontWeight: '700', color: '#0f172a' }}>Quantitative Aptitude Basics</h4>
                    <p style={{ margin: 0, fontSize: '11px', color: '#64748b' }}>Start with fundamentals</p>
                  </div>
                </div>
                <button style={{ backgroundColor: '#2563eb', color: 'white', border: 'none', padding: '8px', borderRadius: '6px', fontSize: '12px', fontWeight: '600', cursor: 'pointer', marginTop: 'auto' }}>Start Now <i className="fas fa-arrow-right"></i></button>
              </div>

              <div style={{ border: '1px solid #e2e8f0', borderRadius: '10px', padding: '15px', display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', gap: '12px', marginBottom: '15px' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '8px', backgroundColor: '#f3e8ff', color: '#9333ea', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '16px', flexShrink: 0 }}><i className="fas fa-brain"></i></div>
                  <div>
                    <h4 style={{ margin: '0 0 4px', fontSize: '13px', fontWeight: '700', color: '#0f172a' }}>General Awareness Current Affairs</h4>
                    <p style={{ margin: 0, fontSize: '11px', color: '#64748b' }}>Latest questions & analysis</p>
                  </div>
                </div>
                <button style={{ backgroundColor: '#2563eb', color: 'white', border: 'none', padding: '8px', borderRadius: '6px', fontSize: '12px', fontWeight: '600', cursor: 'pointer', marginTop: 'auto' }}>Explore <i className="fas fa-arrow-right"></i></button>
              </div>

              <div style={{ border: '1px solid #e2e8f0', borderRadius: '10px', padding: '15px', display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', gap: '12px', marginBottom: '15px' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '8px', backgroundColor: '#eff6ff', color: '#2563eb', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '16px', flexShrink: 0 }}><i className="fas fa-file-invoice"></i></div>
                  <div>
                    <h4 style={{ margin: '0 0 4px', fontSize: '13px', fontWeight: '700', color: '#0f172a' }}>SSC CGL Previous Year Papers</h4>
                    <p style={{ margin: 0, fontSize: '11px', color: '#64748b' }}>Analyze pattern & PYQs</p>
                  </div>
                </div>
                <button style={{ backgroundColor: '#2563eb', color: 'white', border: 'none', padding: '8px', borderRadius: '6px', fontSize: '12px', fontWeight: '600', cursor: 'pointer', marginTop: 'auto' }}>Solve Now <i className="fas fa-arrow-right"></i></button>
              </div>

              <div style={{ border: '1px solid #e2e8f0', borderRadius: '10px', padding: '15px', display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', gap: '12px', marginBottom: '15px' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '8px', backgroundColor: '#ffe4e6', color: '#e11d48', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '16px', flexShrink: 0 }}><i className="fas fa-bullseye"></i></div>
                  <div>
                    <h4 style={{ margin: '0 0 4px', fontSize: '13px', fontWeight: '700', color: '#0f172a' }}>Full Length Mock Test</h4>
                    <p style={{ margin: 0, fontSize: '11px', color: '#64748b' }}>Simulate real exam</p>
                  </div>
                </div>
                <button style={{ backgroundColor: '#2563eb', color: 'white', border: 'none', padding: '8px', borderRadius: '6px', fontSize: '12px', fontWeight: '600', cursor: 'pointer', marginTop: 'auto' }}>Attempt <i className="fas fa-arrow-right"></i></button>
              </div>
            </div>
          </div>

          {/* Bottom Row: Updates & Trend */}
          <div className="db-bottom-row">
            {/* Latest Updates */}
            <div style={{ backgroundColor: 'white', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '25px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <div>
                  <h3 style={{ margin: '0 0 5px', fontSize: '16px', fontWeight: '800', color: '#0f172a', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <i className="fas fa-bullhorn" style={{ color: '#2563eb' }}></i> Latest Updates
                  </h3>
                  <p style={{ margin: 0, fontSize: '12px', color: '#64748b', paddingLeft: '26px' }}>Stay informed with important notifications</p>
                </div>
                <a href="#" style={{ color: '#2563eb', fontSize: '13px', fontWeight: '600', textDecoration: 'none' }}>View All <i className="fas fa-arrow-right"></i></a>
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <div style={{ display: 'flex', gap: '15px', paddingBottom: '15px', borderBottom: '1px solid #f1f5f9' }}>
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#2563eb', marginTop: '5px' }}></div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '5px' }}>
                      <h4 style={{ margin: 0, fontSize: '13px', fontWeight: '700', color: '#0f172a' }}>SSC CGL 2026 Notification Expected Soon <span style={{ backgroundColor: '#ef4444', color: 'white', fontSize: '9px', padding: '2px 6px', borderRadius: '4px', marginLeft: '5px' }}>New</span></h4>
                      <span style={{ fontSize: '11px', color: '#94a3b8' }}>2 days ago</span>
                    </div>
                    <p style={{ margin: 0, fontSize: '12px', color: '#64748b' }}>Keep an eye on the official website for updates.</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '15px', paddingBottom: '15px', borderBottom: '1px solid #f1f5f9' }}>
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#10b981', marginTop: '5px' }}></div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '5px' }}>
                      <h4 style={{ margin: 0, fontSize: '13px', fontWeight: '700', color: '#0f172a' }}>Monthly Current Affairs PDF - July 2026</h4>
                      <span style={{ fontSize: '11px', color: '#94a3b8' }}>4 days ago</span>
                    </div>
                    <p style={{ margin: 0, fontSize: '12px', color: '#64748b' }}>Download the latest monthly compilation.</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '15px' }}>
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#9333ea', marginTop: '5px' }}></div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '5px' }}>
                      <h4 style={{ margin: 0, fontSize: '13px', fontWeight: '700', color: '#0f172a' }}>New Mock Tests Added</h4>
                      <span style={{ fontSize: '11px', color: '#94a3b8' }}>5 days ago</span>
                    </div>
                    <p style={{ margin: 0, fontSize: '12px', color: '#64748b' }}>5 full-length mocks now available based on latest pattern.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Performance Trend */}
            <div style={{ backgroundColor: 'white', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '25px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <div>
                  <h3 style={{ margin: '0 0 5px', fontSize: '16px', fontWeight: '800', color: '#0f172a', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <i className="fas fa-chart-line" style={{ color: '#2563eb' }}></i> Your Performance Trend
                  </h3>
                  <p style={{ margin: 0, fontSize: '12px', color: '#64748b', paddingLeft: '26px' }}>Track your progress over time</p>
                </div>
                <select style={{ border: '1px solid #e2e8f0', borderRadius: '6px', padding: '5px 10px', fontSize: '12px', color: '#475569', outline: 'none' }}>
                  <option>Last 7 Days</option>
                  <option>Last 30 Days</option>
                </select>
              </div>
              
              <div style={{ height: '180px', borderLeft: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0', position: 'relative', display: 'flex', alignItems: 'flex-end', paddingBottom: '10px', paddingLeft: '10px' }}>
                 {/* Y Axis Labels */}
                 <div style={{ position: 'absolute', left: '-25px', top: '0', bottom: '0', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', fontSize: '10px', color: '#94a3b8' }}>
                    <span>100</span><span>80</span><span>60</span><span>40</span><span>20</span><span>0</span>
                 </div>
                 
                 {/* Populated State line from mock backend data */}
                 {progress ? (
                   <div style={{ width: '100%', height: '1px', position: 'absolute', bottom: '10px', left: '10px' }}>
                      {progress.recentScores.map((score, index) => {
                        const maxScore = 200;
                        const percentage = (score / maxScore) * 100;
                        const leftPos = (index / (progress.recentScores.length - 1)) * 100;
                        return (
                          <div key={index} style={{ 
                            position: 'absolute', 
                            width: '6px', 
                            height: '6px', 
                            borderRadius: '50%', 
                            backgroundColor: '#2563eb', 
                            left: `${leftPos}%`, 
                            bottom: `${percentage}%` 
                          }}></div>
                        )
                      })}
                   </div>
                 ) : (
                   <div style={{ width: '100%', height: '1px', backgroundColor: '#2563eb', position: 'absolute', bottom: '10px', left: '10px' }}>
                      <div style={{ position: 'absolute', width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#2563eb', left: '0', top: '-3px' }}></div>
                   </div>
                 )}

                 {/* X Axis Labels */}
                 <div style={{ position: 'absolute', bottom: '-20px', left: '10px', right: '0', display: 'flex', justifyContent: 'space-between', fontSize: '10px', color: '#94a3b8' }}>
                    <span>Aug 5</span><span>Aug 6</span><span>Aug 7</span><span>Aug 8</span><span>Aug 9</span><span>Aug 10</span><span>Aug 11</span>
                 </div>
              </div>
            </div>
          </div>
          
          {/* Footer inside main content to align with sidebar correctly */}
          <footer style={{ marginTop: '40px', paddingTop: '20px', borderTop: '1px solid #e2e8f0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <i className="fas fa-graduation-cap" style={{ fontSize: '20px', color: '#1e3a8a' }}></i>
              <div>
                <h3 style={{ margin: 0, fontSize: '14px', fontWeight: '800', color: '#0f172a' }}>CGLPrep AI</h3>
                <p style={{ margin: 0, fontSize: '9px', color: '#1e3a8a', fontWeight: '600' }}>Plan • Practice • Crack CGL</p>
              </div>
            </div>
            
            <div style={{ fontStyle: 'italic', color: '#334155', fontSize: '13px', fontWeight: '500' }}>
               "A Better You. A Brighter India."
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
        <aside className="db-right-sidebar">
           {/* Goal */}
           <div style={{ backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '20px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
                <h3 style={{ margin: 0, fontSize: '14px', fontWeight: '700', color: '#0f172a', display: 'flex', alignItems: 'center', gap: '8px' }}><i className="far fa-clock" style={{ color: '#2563eb' }}></i> My Goal</h3>
                <a href="#" style={{ fontSize: '12px', color: '#2563eb', textDecoration: 'none' }}>Edit</a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#2563eb', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '18px' }}><i className="fas fa-bullseye"></i></div>
                <div>
                  <h4 style={{ margin: '0 0 2px', fontSize: '14px', fontWeight: '800', color: '#0f172a' }}>SSC CGL 2026</h4>
                  <p style={{ margin: 0, fontSize: '11px', color: '#64748b' }}>Tier I + Tier II + Tier III</p>
                </div>
              </div>
              
              <div style={{ padding: '15px', backgroundColor: 'white', border: '1px dashed #cbd5e1', borderRadius: '8px', textAlign: 'center' }}>
                 <p style={{ fontFamily: "'Caveat', cursive", fontSize: '18px', color: '#1e3a8a', margin: '0 0 10px', lineHeight: '1.2' }}>"A small step today, a big result tomorrow."</p>
                 <div style={{ height: '2px', width: '30px', background: 'linear-gradient(90deg, #ff9933 33.3%, #ffffff 33.3%, #ffffff 66.6%, #138808 66.6%)', borderRadius: '1px', margin: '0 auto' }}></div>
              </div>
           </div>

           {/* Today's Study Plan */}
           <div style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '20px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
                <h3 style={{ margin: 0, fontSize: '14px', fontWeight: '700', color: '#0f172a', display: 'flex', alignItems: 'center', gap: '8px' }}><i className="far fa-calendar-alt" style={{ color: '#2563eb' }}></i> Today's Study Plan</h3>
                <a href="#" style={{ fontSize: '12px', color: '#2563eb', textDecoration: 'none' }}>View Plan</a>
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                 <label style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer', fontSize: '13px', color: '#334155' }}>
                   <input type="checkbox" style={{ width: '16px', height: '16px', cursor: 'pointer' }} /> Quantitative Aptitude (1 hr)
                 </label>
                 <label style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer', fontSize: '13px', color: '#334155' }}>
                   <input type="checkbox" style={{ width: '16px', height: '16px', cursor: 'pointer' }} /> Current Affairs (30 mins)
                 </label>
                 <label style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer', fontSize: '13px', color: '#334155' }}>
                   <input type="checkbox" style={{ width: '16px', height: '16px', cursor: 'pointer' }} /> English Vocabulary (30 mins)
                 </label>
                 <label style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer', fontSize: '13px', color: '#334155' }}>
                   <input type="checkbox" style={{ width: '16px', height: '16px', cursor: 'pointer' }} /> Attempt 1 Sectional Test
                 </label>
                 <label style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer', fontSize: '13px', color: '#334155' }}>
                   <input type="checkbox" style={{ width: '16px', height: '16px', cursor: 'pointer' }} /> Analyze Performance
                 </label>
              </div>
           </div>

           {/* Quick Resources */}
           <div style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '15px' }}>
                <i className="far fa-folder-open" style={{ color: '#2563eb', fontSize: '16px' }}></i>
                <h3 style={{ margin: 0, fontSize: '14px', fontWeight: '700', color: '#0f172a' }}>Quick Resources</h3>
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <a href="#" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 0', borderBottom: '1px solid #f1f5f9', color: '#475569', textDecoration: 'none', fontSize: '13px', fontWeight: '500' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><i className="fas fa-book-open" style={{ color: '#8b5cf6' }}></i> Syllabus</span>
                  <i className="fas fa-chevron-right" style={{ fontSize: '10px', color: '#94a3b8' }}></i>
                </a>
                <a href="#" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 0', borderBottom: '1px solid #f1f5f9', color: '#475569', textDecoration: 'none', fontSize: '13px', fontWeight: '500' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><i className="fas fa-file-invoice" style={{ color: '#ef4444' }}></i> Exam Pattern</span>
                  <i className="fas fa-chevron-right" style={{ fontSize: '10px', color: '#94a3b8' }}></i>
                </a>
                <a href="#" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 0', borderBottom: '1px solid #f1f5f9', color: '#475569', textDecoration: 'none', fontSize: '13px', fontWeight: '500' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><i className="fas fa-bookmark" style={{ color: '#ec4899' }}></i> Important Books</span>
                  <i className="fas fa-chevron-right" style={{ fontSize: '10px', color: '#94a3b8' }}></i>
                </a>
                <a href="#" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 0', borderBottom: '1px solid #f1f5f9', color: '#475569', textDecoration: 'none', fontSize: '13px', fontWeight: '500' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><i className="fas fa-lightbulb" style={{ color: '#f59e0b' }}></i> Strategy Guide</span>
                  <i className="fas fa-chevron-right" style={{ fontSize: '10px', color: '#94a3b8' }}></i>
                </a>
                <a href="#" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 0', color: '#475569', textDecoration: 'none', fontSize: '13px', fontWeight: '500' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><i className="fas fa-question-circle" style={{ color: '#10b981' }}></i> FAQ</span>
                  <i className="fas fa-chevron-right" style={{ fontSize: '10px', color: '#94a3b8' }}></i>
                </a>
              </div>
           </div>
        </aside>
      </div>
    </DashboardLayout>
  );
};

export default DashboardPage;
