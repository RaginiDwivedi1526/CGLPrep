import React, { useState } from 'react';
import QuizModal from '../QuizModal';

const CAQuiz = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [aiQuestions, setAiQuestions] = useState([]);
  const [progressData, setProgressData] = useState(null);

  React.useEffect(() => {
    const fetchProgress = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/progress/summary?userId=123');
        const data = await res.json();
        if (data.success) {
          setProgressData(data.data);
        }
      } catch (err) {
        console.error('Failed to fetch progress summary:', err);
      }
    };
    fetchProgress();
  }, []);

  const handleGenerateCAQuiz = async () => {
    setIsGenerating(true);
    try {
      const response = await fetch('http://localhost:5000/api/ai/generate-quiz', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          topic: `Daily Current Affairs for ${new Date().toISOString().split('T')[0]}`,
          difficulty: 'Moderate',
          count: 10
        })
      });
      const result = await response.json();
      if (result.success) {
        setAiQuestions(result.data);
        setIsModalOpen(true);
      } else {
        alert(result.message);
      }
    } catch (err) {
      console.error(err);
      alert('Failed to generate test. Make sure backend is running.');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <section className="container ca-section">
      <div className="caquiz-layout">
        
        {/* --- Left Sidebar: Filters --- */}
        <div className="caquiz-sidebar-left">
          
          <div className="catopic-header-row">
            <h3 className="catopic-sb-title">Filters</h3>
            <span className="catopic-reset">Reset All</span>
          </div>

          <div className="catopic-filter-section">
            <h4 className="catopic-fs-title">Question Type</h4>
            <div className="catopic-cb-list">
              <label className="catopic-checkbox"><input type="checkbox" defaultChecked /><span className="cc-box"></span><span className="cc-label" style={{ fontWeight: 600 }}>All Types</span></label>
              <label className="catopic-checkbox"><input type="checkbox" /><span className="cc-box"></span><span className="cc-label">Daily Quiz</span></label>
              <label className="catopic-checkbox"><input type="checkbox" /><span className="cc-box"></span><span className="cc-label">Topic-wise Quiz</span></label>
              <label className="catopic-checkbox"><input type="checkbox" /><span className="cc-box"></span><span className="cc-label">Subject-wise MCQs</span></label>
              <label className="catopic-checkbox"><input type="checkbox" /><span className="cc-box"></span><span className="cc-label">Mixed Quiz</span></label>
              <label className="catopic-checkbox"><input type="checkbox" /><span className="cc-box"></span><span className="cc-label">Previous Year Based</span></label>
              <label className="catopic-checkbox"><input type="checkbox" /><span className="cc-box"></span><span className="cc-label">Challenge Quiz</span></label>
              <label className="catopic-checkbox"><input type="checkbox" /><span className="cc-box"></span><span className="cc-label">Quick 10</span></label>
              <label className="catopic-checkbox"><input type="checkbox" /><span className="cc-box"></span><span className="cc-label">Error Finder</span></label>
              <label className="catopic-checkbox"><input type="checkbox" /><span className="cc-box"></span><span className="cc-label">Assertion & Reason</span></label>
            </div>
          </div>

          <div className="catopic-filter-section">
            <h4 className="catopic-fs-title">Category</h4>
            <ul className="camag-cat-list">
              <li><i className="fas fa-map-marker-alt text-orange"></i> National</li>
              <li><i className="fas fa-globe-americas text-blue"></i> International</li>
              <li><i className="fas fa-coins text-green"></i> Economy</li>
              <li><i className="fas fa-university text-purple"></i> Polity & Governance</li>
              <li><i className="fas fa-flask text-pink"></i> Science & Technology</li>
              <li><i className="fas fa-leaf text-green"></i> Environment & Climate</li>
              <li><i className="fas fa-shield-alt text-red"></i> Defence & Security</li>
              <li><i className="fas fa-seedling text-blue"></i> Schemes & Initiatives</li>
              <li><i className="fas fa-running text-red"></i> Sports</li>
              <li><i className="fas fa-trophy text-gold"></i> Awards & Honours</li>
              <li><i className="fas fa-users text-blue"></i> Summits & Conferences</li>
              <li><i className="fas fa-list text-gray"></i> Reports & Index</li>
              <li><i className="fas fa-user-tie text-purple"></i> Appointments</li>
              <li><i className="fas fa-th-large text-gray"></i> Miscellaneous</li>
            </ul>
          </div>

          <div className="catopic-filter-section">
            <h4 className="catopic-fs-title">Difficulty Level</h4>
            <div className="catopic-cb-list">
              <label className="catopic-checkbox"><input type="checkbox" defaultChecked /><span className="cc-box"></span><span className="cc-label" style={{ fontWeight: 600 }}>All Levels</span></label>
              <label className="catopic-checkbox"><input type="checkbox" defaultChecked /><span className="cc-box" style={{ borderRadius: '50%' }}></span><span className="cc-label"><i className="fas fa-circle text-green" style={{ fontSize: '10px', marginRight: '6px' }}></i> Easy</span></label>
              <label className="catopic-checkbox"><input type="checkbox" defaultChecked /><span className="cc-box" style={{ borderRadius: '50%' }}></span><span className="cc-label"><i className="fas fa-circle text-blue" style={{ fontSize: '10px', marginRight: '6px' }}></i> Moderate</span></label>
              <label className="catopic-checkbox"><input type="checkbox" defaultChecked /><span className="cc-box" style={{ borderRadius: '50%' }}></span><span className="cc-label"><i className="fas fa-circle text-orange" style={{ fontSize: '10px', marginRight: '6px' }}></i> Difficult</span></label>
            </div>
          </div>

          <div className="catopic-filter-section">
            <h4 className="catopic-fs-title">Number of Questions</h4>
            <div className="catopic-cb-list">
              <label className="catopic-checkbox"><input type="checkbox" /><span className="cc-box"></span><span className="cc-label">10 Questions</span></label>
              <label className="catopic-checkbox"><input type="checkbox" /><span className="cc-box"></span><span className="cc-label">20 Questions</span></label>
              <label className="catopic-checkbox"><input type="checkbox" /><span className="cc-box"></span><span className="cc-label">30 Questions</span></label>
              <label className="catopic-checkbox"><input type="checkbox" /><span className="cc-box"></span><span className="cc-label">50 Questions</span></label>
              <label className="catopic-checkbox"><input type="checkbox" /><span className="cc-box"></span><span className="cc-label">100 Questions</span></label>
            </div>
          </div>

        </div>

        {/* --- Center Column: Main Content --- */}
        <div className="caquiz-main-col">
          
          <div className="caquiz-banner">
            <div className="caq-banner-bg"></div>
            <div className="caq-banner-content">
              <span className="caq-tag bg-red text-white"><i className="fas fa-fire"></i> AI Powered</span>
              <h2>AI Custom Current Affairs Quiz</h2>
              <p>Generate fresh questions on the latest topics</p>
              <span className="caq-desc">Test your knowledge with today's most important current affairs questions dynamically generated by AI.</span>
              <button 
                className="btn-white" 
                onClick={handleGenerateCAQuiz}
                disabled={isGenerating}
              >
                {isGenerating ? <><i className="fas fa-spinner fa-spin"></i> Generating...</> : <>Generate AI Quiz <i className="fas fa-arrow-right"></i></>}
              </button>
            </div>
            <div className="caq-banner-img">
              <img src="https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?auto=format&fit=crop&w=200&q=80" alt="Trophy" />
              <div className="ca-post-it" style={{ position: 'absolute', bottom: '20px', right: '-10px', transform: 'rotate(-5deg)', padding: '12px', background: '#fef9c3', zIndex: 10 }}>
                <span className="cpi-text">Consistency</span>
                <span className="cpi-text">Today</span>
                <span className="cpi-text">Success</span>
                <span className="cpi-text hl-red">Tomorrow!</span>
              </div>
            </div>
            <div className="caq-banner-footer">
              <span><i className="fas fa-list-ol"></i> 10 Questions</span>
              <span><i className="far fa-clock"></i> 5 Minutes</span>
              <span><i className="fas fa-chart-line"></i> Instant Results</span>
              <span><i className="fas fa-file-alt"></i> Detailed Explanations</span>
            </div>
          </div>

          <div className="ca-sec-header" style={{ marginTop: '32px' }}>
            <div className="ca-sh-left">
              <h2>Explore Quizzes</h2>
              <p>Choose from a variety of quizzes designed for your preparation needs.</p>
            </div>
            <div className="ca-view-all">View All Quizzes <i className="fas fa-arrow-right"></i></div>
          </div>

          <div className="caquiz-explore-grid">
            <div className="cqe-card">
              <div className="cqe-icon blue"><i className="far fa-calendar-alt"></i></div>
              <h4>Daily Quiz</h4>
              <span>10 Questions</span>
              <p>Latest current affairs (Updated daily)</p>
              <button className="btn-outline cqe-btn">Attempt Now <i className="fas fa-arrow-right"></i></button>
            </div>
            <div className="cqe-card">
              <div className="cqe-icon green"><i className="far fa-calendar-check"></i></div>
              <h4>Weekly Quiz</h4>
              <span>50 Questions</span>
              <p>Complete week current affairs</p>
              <button className="btn-outline cqe-btn">Attempt Now <i className="fas fa-arrow-right"></i></button>
            </div>
            <div className="cqe-card">
              <div className="cqe-icon purple"><i className="fas fa-layer-group"></i></div>
              <h4>Topic-wise Quiz</h4>
              <span>Custom Questions</span>
              <p>Select topic & practice</p>
              <button className="btn-outline cqe-btn">Attempt Now <i className="fas fa-arrow-right"></i></button>
            </div>
            <div className="cqe-card">
              <div className="cqe-icon blue-light"><i className="fas fa-book"></i></div>
              <h4>Subject-wise Quiz</h4>
              <span>20 Questions</span>
              <p>Focus on specific subject</p>
              <button className="btn-outline cqe-btn">Attempt Now <i className="fas fa-arrow-right"></i></button>
            </div>
            <div className="cqe-card">
              <div className="cqe-icon purple"><i className="fas fa-random"></i></div>
              <h4>Mixed Quiz</h4>
              <span>50 Questions</span>
              <p>Questions from all topics</p>
              <button className="btn-outline cqe-btn">Attempt Now <i className="fas fa-arrow-right"></i></button>
            </div>
            <div className="cqe-card">
              <div className="cqe-icon blue"><i className="fas fa-history"></i></div>
              <h4>Previous Year Based</h4>
              <span>50 Questions</span>
              <p>Past year current affairs questions</p>
              <button className="btn-outline cqe-btn">Attempt Now <i className="fas fa-arrow-right"></i></button>
            </div>
            <div className="cqe-card">
              <div className="cqe-icon orange"><i className="fas fa-trophy"></i></div>
              <h4>Challenge Quiz</h4>
              <span>30 Questions</span>
              <p>For advanced learners</p>
              <button className="btn-outline cqe-btn">Attempt Now <i className="fas fa-arrow-right"></i></button>
            </div>
            <div className="cqe-card">
              <div className="cqe-icon red"><i className="fas fa-bolt"></i></div>
              <h4>Quick 10</h4>
              <span>10 Questions</span>
              <p>Quick practice, big impact</p>
              <button className="btn-outline cqe-btn">Attempt Now <i className="fas fa-arrow-right"></i></button>
            </div>
          </div>

          <div className="ca-sec-header" style={{ marginTop: '32px' }}>
            <div className="ca-sh-left">
              <h2>Recent Quizzes</h2>
              <p>Practice from the latest and most relevant quizzes.</p>
            </div>
            <div className="ca-view-all">View All <i className="fas fa-arrow-right"></i></div>
          </div>

          <div className="caquiz-recent-list">
            {progressData && progressData.recentTests && progressData.recentTests.length > 0 ? (
              progressData.recentTests.slice(0, 5).map((test, idx) => (
                <div className="cqr-item" key={idx}>
                  <img src={[
                    'https://images.unsplash.com/photo-1532375810709-75b1da00537c?auto=format&fit=crop&w=200&q=80',
                    'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=200&q=80',
                    'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?auto=format&fit=crop&w=200&q=80',
                    'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=200&q=80',
                    'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=200&q=80'
                  ][idx % 5]} alt="Quiz" className="cqr-img" />
                  <div className="cqr-body">
                    <h4>{test.topic}</h4>
                    <div className="cqr-meta">
                      <span><i className="fas fa-list-ol text-gray"></i> {test.totalQuestions || 10} Questions</span>
                      <span><i className="fas fa-circle text-blue"></i> {test.score}/{test.maxScore} Scored</span>
                      <span>{new Date(test.createdAt).toLocaleDateString()}</span>
                    </div>
                  </div>
                  <button className="btn-outline cqr-btn">Review</button>
                </div>
              ))
            ) : (
              <div style={{ textAlign: 'center', padding: '30px', color: '#64748b' }}>
                No recent quizzes found. Generate one above to start!
              </div>
            )}
          </div>

        </div>

        {/* --- Right Sidebar: Stats & Widgets --- */}
        <div className="caquiz-sidebar-right">
          
          <div className="camag-widget">
            <div className="ca-sec-header" style={{ marginBottom: '16px' }}>
              <div className="ca-sh-left">
                <h2 style={{ fontSize: '15px' }}>Your Quiz Performance</h2>
              </div>
              <div className="ca-view-all">View Details <i className="fas fa-arrow-right"></i></div>
            </div>
            <div className="camag-stats-grid">
              <div className="cmsg-box">
                <div className="cmsg-icon green"><i className="fas fa-check-circle"></i></div>
                <strong>{progressData ? progressData.overallStats.totalQuestions : 0}</strong>
                <span>Questions Attempted</span>
              </div>
              <div className="cmsg-box">
                <div className="cmsg-icon blue"><i className="fas fa-tachometer-alt"></i></div>
                <strong>{progressData ? progressData.overallStats.accuracy : 0}%</strong>
                <span>Average Accuracy</span>
              </div>
              <div className="cmsg-box">
                <div className="cmsg-icon purple"><i className="fas fa-chart-bar"></i></div>
                <strong>12</strong>
                <span>Day Streak</span>
              </div>
              <div className="cmsg-box">
                <div className="cmsg-icon orange"><i className="fas fa-lightbulb"></i></div>
                <strong>Top 10%</strong>
                <span>Among Learners</span>
              </div>
            </div>
          </div>

          <div className="caquiz-leaderboard">
            <div className="caql-header">
              <div className="caql-icon purple"><i className="fas fa-medal"></i></div>
              <h3>Leaderboard</h3>
              <div className="caql-sort">This Week <i className="fas fa-chevron-down"></i></div>
            </div>
            <div className="caql-tabs">
              <button className="caql-tab active"><i className="fas fa-trophy"></i> Top Learners</button>
              <button className="caql-tab">My Rank</button>
            </div>
            <ul className="caql-list">
              <li>
                <span className="caql-rank gold">1</span>
                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Priya" alt="User" className="caql-av" />
                <span className="caql-name">Ananya Sharma</span>
                <span className="caql-score">980</span>
              </li>
              <li>
                <span className="caql-rank silver">2</span>
                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Rahul" alt="User" className="caql-av" />
                <span className="caql-name">Rohit Verma</span>
                <span className="caql-score">960</span>
              </li>
              <li>
                <span className="caql-rank bronze">3</span>
                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Anita" alt="User" className="caql-av" />
                <span className="caql-name">Priya Singh</span>
                <span className="caql-score">940</span>
              </li>
              <li>
                <span className="caql-rank">4</span>
                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Vijay" alt="User" className="caql-av" />
                <span className="caql-name">Karan Mehta</span>
                <span className="caql-score">920</span>
              </li>
              <li>
                <span className="caql-rank">5</span>
                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sonal" alt="User" className="caql-av" />
                <span className="caql-name">Sneha Gupta</span>
                <span className="caql-score">900</span>
              </li>
            </ul>
            <div className="caql-you">
              <span className="caql-rank text-blue">You</span>
              <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=You" alt="You" className="caql-av" />
              <span className="caql-name text-blue" style={{ fontWeight: 800 }}>#18</span>
              <span className="caql-score text-blue" style={{ fontWeight: 800 }}>720</span>
            </div>
          </div>

          <div className="caquiz-streak">
            <div className="ca-sec-header" style={{ marginBottom: '16px' }}>
              <div className="ca-sh-left" style={{ gap: '8px' }}>
                <div className="ca-sh-icon red-light" style={{ width: '24px', height: '24px', fontSize: '12px', borderRadius: '50%' }}><i className="fas fa-fire"></i></div>
                <h2 style={{ fontSize: '15px' }}>Streak Rewards</h2>
              </div>
              <div className="ca-view-all">View All <i className="fas fa-arrow-right"></i></div>
            </div>
            
            <div className="caqs-info">
              <div className="caqs-fire"><i className="fas fa-fire"></i></div>
              <div className="caqs-text">
                <p>Keep your streak alive!</p>
                <span>Current Streak</span>
                <strong>12 Days</strong>
              </div>
            </div>

            <div className="caqs-days">
              <div className="caqsd-item active">
                <div className="caqsd-circle"><i className="fas fa-check"></i></div>
                <span>Mon</span>
              </div>
              <div className="caqsd-item active">
                <div className="caqsd-circle"><i className="fas fa-check"></i></div>
                <span>Tue</span>
              </div>
              <div className="caqsd-item active">
                <div className="caqsd-circle"><i className="fas fa-check"></i></div>
                <span>Wed</span>
              </div>
              <div className="caqsd-item active">
                <div className="caqsd-circle"><i className="fas fa-check"></i></div>
                <span>Thu</span>
              </div>
              <div className="caqsd-item">
                <div className="caqsd-circle"></div>
                <span>Fri</span>
              </div>
              <div className="caqsd-item">
                <div className="caqsd-circle"></div>
                <span>Sat</span>
              </div>
              <div className="caqsd-item">
                <div className="caqsd-circle"></div>
                <span>Sun</span>
              </div>
            </div>

            <div className="caqs-progress-box">
              <div className="caqs-gift"><i className="fas fa-gift"></i></div>
              <p>7 more days to unlock "Current Affairs Champion" badge!</p>
            </div>
            <div className="caqs-bar-container">
              <div className="caqs-bar" style={{ width: '50%' }}></div>
            </div>
            <div className="caqs-progress-text">5/7 days</div>
          </div>

          <div className="caquiz-mega">
            <div className="caqm-header">
              <div className="caqm-icon gold"><i className="fas fa-crown"></i></div>
              <div>
                <h4>Quiz of the Month</h4>
                <h3>September 2026 Mega Quiz</h3>
              </div>
            </div>
            <div className="caqm-body">
              <img src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=200&q=80" alt="Mega Quiz" />
              <div className="caqm-info">
                <strong>100 Questions</strong>
                <p>Covering all major current affairs of September 2026</p>
              </div>
            </div>
            <button className="btn-primary" style={{ width: '100%' }}>Attempt Now <i className="fas fa-arrow-right"></i></button>
          </div>

        </div>

      </div>

      {/* --- Bottom Feature Highlights --- */}
      <div className="caquiz-features-row">
        <div className="cqfr-card">
          <div className="cqfr-icon orange"><i className="fas fa-lightbulb"></i></div>
          <div className="cqfr-text">
            <h4>Detailed Explanations</h4>
            <p>Learn the why behind every answer.</p>
          </div>
        </div>
        <div className="cqfr-card">
          <div className="cqfr-icon green"><i className="fas fa-chart-bar"></i></div>
          <div className="cqfr-text">
            <h4>Performance Analysis</h4>
            <p>Identify your strengths and weak areas.</p>
          </div>
        </div>
        <div className="cqfr-card">
          <div className="cqfr-icon purple"><i className="fas fa-bookmark"></i></div>
          <div className="cqfr-text">
            <h4>Bookmark Questions</h4>
            <p>Save important questions for revision.</p>
          </div>
        </div>
        <div className="cqfr-card">
          <div className="cqfr-icon blue"><i className="fas fa-mobile-alt"></i></div>
          <div className="cqfr-text">
            <h4>Mobile Friendly</h4>
            <p>Practice anytime, anywhere on any device.</p>
          </div>
        </div>
      </div>

      <QuizModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        title="AI Current Affairs Quiz" 
        questions={aiQuestions} 
      />
    </section>
  );
};

export default CAQuiz;
