import React from 'react';
import { useNavigate } from 'react-router-dom';

const ExamAffairs = ({ topNews }) => {
  const navigate = useNavigate();
  return (
    <section className="exam-affairs-section">
        <div className="container">
            <div className="ea-grid">
                <div className="exam-card">
                    <h3>Real SSC Exam Experience</h3>
                    <div className="exam-features">
                        <div className="ef-item"><i className="fas fa-layer-group"></i> Latest pattern & difficulty level</div>
                        <div className="ef-item"><i className="fas fa-chart-bar"></i> All India Ranking & Percentile</div>
                        <div className="ef-item"><i className="fas fa-analytics"></i> Detailed performance analysis</div>
                        <div className="ef-item"><i className="fas fa-users"></i> Compare with topper's attempts</div>
                    </div>
                    <button className="btn-primary btn-sm" onClick={() => navigate('/dashboard-mock-tests')}>Take a Free Mock Test →</button>
                </div>
                <div className="affairs-card">
                    <h3>Current Affairs – Stay Ahead</h3>
                    <div className="affairs-grid">
                        {topNews && topNews.length > 0 ? topNews.slice(0, 3).map((news, i) => (
                            <div className="affair-item" key={news.id || i}>
                                <div className="affair-img"><i className={`fas ${news.category === 'Economy' ? 'fa-chart-line' : news.category === 'Science' ? 'fa-satellite' : news.category === 'Sports' ? 'fa-trophy' : 'fa-landmark'}`}></i></div>
                                <p>{news.title}</p>
                            </div>
                        )) : (
                            <>
                                <div className="affair-item">
                                    <div className="affair-img"><i className="fas fa-landmark"></i></div>
                                    <p>Budget 2026 Key Highlights for SSC</p>
                                </div>
                                <div className="affair-item">
                                    <div className="affair-img"><i className="fas fa-satellite"></i></div>
                                    <p>ISRO's Gaganyaan SSC+H with crew</p>
                                </div>
                                <div className="affair-item">
                                    <div className="affair-img"><i className="fas fa-trophy"></i></div>
                                    <p>India wins Asia Cup 2026</p>
                                </div>
                            </>
                        )}
                    </div>
                    <button className="btn-outline btn-sm" onClick={() => navigate('/current-affairs')}>More Current Affairs →</button>
                </div>
            </div>
        </div>
    </section>
  );
};

export default ExamAffairs;
