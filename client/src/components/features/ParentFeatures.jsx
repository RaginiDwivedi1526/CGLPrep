import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const ParentFeatures = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const navigate = useNavigate();

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const faqData = [
    { q: 'Can parents create a separate account?', a: 'Yes! Parents get their own dedicated account linked to their child\'s profile. You can log in separately, track progress, and receive reports without interfering with your child\'s study flow.' },
    { q: 'Will my child know that I can see their progress?', a: 'Yes, transparency is key. Your child will know you have access to their progress data. This encourages accountability and open communication about their preparation journey.' },
    { q: 'What information can parents see?', a: 'Parents can view study activity, mock test scores, subject-wise performance, daily study hours, topic completion progress, strengths, weaknesses, and AI-generated improvement suggestions.' },
    { q: 'Can I get notifications and reports on email?', a: 'Absolutely! You can opt-in for daily, weekly, or monthly progress reports delivered directly to your email. You also get instant notifications for important milestones and alerts.' },
    { q: 'Is my child\'s data secure and private?', a: 'Yes, we take data privacy very seriously. All data is encrypted and stored securely. Parent access is limited to preparation-related metrics only, ensuring your child\'s privacy is fully respected.' },
    { q: 'Can I talk to an expert if needed?', a: 'Yes! Our expert support team is available to assist parents with any questions about their child\'s preparation, understanding reports, or guidance on how to best support their aspirant.' },
  ];

  return (
    <div className="parent-features-wrapper">

      {/* ===== SECTION 1: Parent Hero Banner ===== */}
      <section className="parent-hero">
        <div className="container parent-hero-inner">
          <div className="parent-hero-content">
            <div className="parent-hero-breadcrumb">
              <Link to="/">Home</Link>
              <i className="fas fa-chevron-right"></i>
              <Link to="/features">Features</Link>
              <i className="fas fa-chevron-right"></i>
              <span>For Parents</span>
            </div>

            <div className="parent-hero-badge">
              <i className="fas fa-users"></i> FOR PARENTS
            </div>

            <h1 className="parent-hero-title">
              Your Child's CGL Dream,<br/>Now in <span>Safer Hands</span>
            </h1>
            <p className="parent-hero-desc">
              Stay informed, involved and confident. CGLPrep AI gives parents complete visibility into their child's preparation, progress and future career opportunities.
            </p>

            <button className="btn-primary parent-hero-cta" onClick={() => navigate('/parent-login')}>
              View Sample Parent Dashboard <i className="fas fa-arrow-right"></i>
            </button>
          </div>

          <div className="parent-hero-image-side">
            <div className="parent-hero-img-wrapper">
              <img src="/images/parents/parent-hero.jpg" alt="Parents supporting their child's CGL preparation" />
              <div className="parent-hero-handwritten">
                <span className="hw-proud">Proud</span>
                <span className="hw-parents">Parents,</span>
                <span className="hw-brighter">Brighter</span>
                <span className="hw-futures">Futures <span className="hw-check">✓</span></span>
              </div>
            </div>
            <div className="parent-hero-quote-card">
              <div className="quote-marks">"</div>
              <p>"Now I can track my child's preparation and know that he is on the right track. CGLPrep AI gives me peace of mind."</p>
              <span className="quote-author">— Parent of a CGL Aspirant</span>
            </div>
            <div className="parent-hero-sticker">
              <span>Same</span>
              <span>Aspirants</span>
              <span className="sticker-highlight">Bigger Dreams</span>
              <span className="sticker-highlight">Stronger Families</span>
              <span className="sticker-heart">❤️</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 2: Trust Strip ===== */}
      <section className="parent-trust-strip">
        <div className="container">
          <div className="trust-icons-row">
            <div className="trust-icon-item">
              <div className="trust-icon blue"><i className="fas fa-chart-line"></i></div>
              <span>Track Progress<br/>in Real-Time</span>
            </div>
            <div className="trust-icon-item">
              <div className="trust-icon blue"><i className="fas fa-chart-bar"></i></div>
              <span>Know Strengths<br/>& Weaknesses</span>
            </div>
            <div className="trust-icon-item">
              <div className="trust-icon green"><i className="fas fa-check-circle"></i></div>
              <span>Ensure Consistent<br/>Study</span>
            </div>
            <div className="trust-icon-item">
              <div className="trust-icon blue"><i className="fas fa-user-graduate"></i></div>
              <span>Get Expert Guidance<br/>& Reports</span>
            </div>
            <div className="trust-icon-item">
              <div className="trust-icon red"><i className="fas fa-heart"></i></div>
              <span>Better Investment<br/>in Your Child's Future</span>
            </div>
            <div className="trust-icon-item">
              <div className="trust-icon purple"><i className="fas fa-users"></i></div>
              <span>Trusted by Thousands<br/>of Parents</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 3: How CGLPrep AI Helps Parents ===== */}
      <section className="parent-helps-sec">
        <div className="container">
          <div className="parent-helps-header">
            <div>
              <h2>How CGLPrep AI Helps Parents</h2>
              <p>Powerful tools to keep you connected with your child's CGL preparation journey.</p>
            </div>
            <div className="parent-helps-tabs">
              <button className="tab-inactive">For Students</button>
              <button className="tab-active">For Parents</button>
              <button className="tab-inactive">Why It Matters</button>
            </div>
          </div>

          <div className="parent-helps-content">
            {/* Left side: 6 feature cards */}
            <div className="parent-feature-cards">
              <div className="pf-card">
                <div className="pf-card-icon blue"><i className="fas fa-chart-line"></i></div>
                <div>
                  <h4>Live Progress Tracking</h4>
                  <p>See daily study activity, mock test scores, topic completion and overall CGL readiness.</p>
                </div>
              </div>
              <div className="pf-card">
                <div className="pf-card-icon blue"><i className="fas fa-file-alt"></i></div>
                <div>
                  <h4>Detailed Performance Reports</h4>
                  <p>Get subject-wise analysis, accuracy, speed, weak areas and improvement suggestions.</p>
                </div>
              </div>
              <div className="pf-card">
                <div className="pf-card-icon orange"><i className="fas fa-calendar-check"></i></div>
                <div>
                  <h4>Study Routine & Consistency</h4>
                  <p>Know how much time your child is studying, active days, streaks and daily goals.</p>
                </div>
              </div>
              <div className="pf-card">
                <div className="pf-card-icon orange"><i className="fas fa-search"></i></div>
                <div>
                  <h4>Exam Readiness & Gap Analysis</h4>
                  <p>Understand where your child stands and what they need to improve to crack CGL.</p>
                </div>
              </div>
              <div className="pf-card">
                <div className="pf-card-icon green"><i className="fas fa-briefcase"></i></div>
                <div>
                  <h4>Post & Career Guidance</h4>
                  <p>Help your child make informed decisions with AI-powered post predictions and career insights.</p>
                </div>
              </div>
              <div className="pf-card">
                <div className="pf-card-icon green"><i className="fas fa-comments"></i></div>
                <div>
                  <h4>Direct Communication</h4>
                  <p>Get important updates, notifications and guidance from our expert team.</p>
                </div>
              </div>
            </div>

            {/* Right side: Dashboard Preview */}
            <div className="parent-dashboard-preview">
              <div className="pd-card">
                <div className="pd-header">
                  <div className="pd-logo">
                    <i className="fas fa-graduation-cap"></i>
                    <span><strong>CGLPrep AI</strong></span>
                  </div>
                  <span className="pd-period">Last 30 Days</span>
                </div>

                <div className="pd-body">
                  {/* Sidebar */}
                  <div className="pd-sidebar">
                    <div className="pd-nav-item active"><i className="fas fa-th-large"></i> Parent Dashboard</div>
                    <div className="pd-nav-item"><i className="fas fa-user"></i> Child's Progress</div>
                    <div className="pd-nav-item"><i className="fas fa-chart-bar"></i> Performance Reports</div>
                    <div className="pd-nav-item"><i className="fas fa-clock"></i> Study Activity</div>
                    <div className="pd-nav-item"><i className="fas fa-file-alt"></i> Mock Test Reports</div>
                    <div className="pd-nav-item"><i className="fas fa-exclamation-triangle"></i> Weak Areas</div>
                    <div className="pd-nav-item"><i className="fas fa-check-circle"></i> CGL Readiness</div>
                    <div className="pd-nav-item"><i className="fas fa-bullseye"></i> Career Prediction</div>
                    <div className="pd-nav-item"><i className="fas fa-bell"></i> Notifications</div>
                    <div className="pd-nav-item"><i className="fas fa-envelope"></i> Messages</div>
                    <div className="pd-nav-item"><i className="fas fa-cog"></i> Account Settings</div>
                  </div>

                  {/* Main Content */}
                  <div className="pd-main">
                    <div className="pd-profile">
                      <div className="pd-avatar">
                        <div className="pd-avatar-circle">R</div>
                        <div>
                          <strong>Rahul Verma</strong>
                          <span>SSC CGL, 2025 Aspirant</span>
                        </div>
                      </div>
                      <div className="pd-streak">
                        <i className="fas fa-fire"></i>
                        <div>
                          <span>Studying Consistently</span>
                          <strong>12 day streak</strong>
                        </div>
                      </div>
                    </div>

                    {/* Stats Row */}
                    <div className="pd-stats-row">
                      <div className="pd-stat">
                        <div className="pd-stat-circle">
                          <svg viewBox="0 0 36 36" className="pd-progress-ring">
                            <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#e5e7eb" strokeWidth="3" />
                            <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#2563eb" strokeWidth="3" strokeDasharray="72, 100" />
                          </svg>
                          <div className="pd-stat-value">72%</div>
                        </div>
                      </div>
                      <div className="pd-stat-item">
                        <span className="pd-stat-num blue">158</span>
                        <span className="pd-stat-label">Best Mock Score<br/><small>out of 200</small></span>
                      </div>
                      <div className="pd-stat-item">
                        <span className="pd-stat-num green">4.2<small>hrs</small></span>
                        <span className="pd-stat-label">Daily Average<br/>Study Time</span>
                      </div>
                      <div className="pd-stat-item">
                        <span className="pd-stat-num orange">78%</span>
                        <span className="pd-stat-label">Topic Completion</span>
                      </div>
                    </div>

                    {/* Subject-wise Performance */}
                    <div className="pd-subjects">
                      <h5>Subject-wise Performance</h5>
                      <div className="pd-subject-list">
                        <div className="pd-subject">
                          <span>Maths</span>
                          <div className="pd-bar"><div className="pd-bar-fill blue" style={{width: '68%'}}></div></div>
                          <span>68%</span>
                        </div>
                        <div className="pd-subject">
                          <span>Reasoning</span>
                          <div className="pd-bar"><div className="pd-bar-fill green" style={{width: '82%'}}></div></div>
                          <span>82%</span>
                        </div>
                        <div className="pd-subject">
                          <span>English</span>
                          <div className="pd-bar"><div className="pd-bar-fill purple" style={{width: '74%'}}></div></div>
                          <span>74%</span>
                        </div>
                        <div className="pd-subject">
                          <span>General<br/>Awareness</span>
                          <div className="pd-bar"><div className="pd-bar-fill orange" style={{width: '61%'}}></div></div>
                          <span>61%</span>
                        </div>
                      </div>
                    </div>

                    {/* Improvement Trend */}
                    <div className="pd-trend">
                      <div className="pd-trend-header">
                        <h5>Improvement Trend</h5>
                        <span className="pd-trend-badge">+28%</span>
                      </div>
                      <div className="pd-trend-chart">
                        <div className="pd-trend-label">Performance improved</div>
                        <svg viewBox="0 0 200 60" className="pd-trend-svg">
                          <polyline fill="none" stroke="#2563eb" strokeWidth="2" points="0,50 30,45 60,40 90,35 120,25 150,20 180,15 200,10" />
                          <polyline fill="rgba(37,99,235,0.1)" stroke="none" points="0,60 0,50 30,45 60,40 90,35 120,25 150,20 180,15 200,10 200,60" />
                        </svg>
                        <div className="pd-trend-months">
                          <span>Jul</span><span>Aug</span><span>Sep</span><span>Oct</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 4: CTA Banner ===== */}
      <section className="parent-cta-banner">
        <div className="container parent-cta-inner">
          <div className="parent-cta-content">
            <h2>Give Your Child the<br/><strong>Right Support at the Right Time</strong></h2>
            <p>A small step from you can make a big difference in their journey. Stay connected, stay informed, and be a part of their success.</p>
            <button className="btn-primary parent-cta-btn" onClick={() => navigate('/parent-login')}>See How It Works <i className="fas fa-arrow-right"></i></button>
          </div>
          <div className="parent-cta-quote">
            <p className="handwritten-quote">"Behind every successful aspirant, there is a supportive family."</p>
          </div>
          <div className="parent-cta-sticker">
            <span className="sticker-same">Same</span>
            <span className="sticker-asp">Aspirants</span>
            <span className="sticker-big">Bigger Dreams</span>
            <span className="sticker-str">Stronger Families</span>
            <span className="sticker-heart-lg">❤️</span>
          </div>
        </div>
      </section>

      {/* ===== SECTION 5: Testimonials ===== */}
      <section className="parent-testimonials">
        <div className="container">
          <div className="parent-test-header">
            <div>
              <h2>What Parents Say</h2>
              <p>Real experiences from parents of CGL aspirants.</p>
            </div>
            <a href="#" className="view-more-link">View More Stories <i className="fas fa-arrow-right"></i></a>
          </div>

          <div className="parent-test-grid">
            <div className="parent-test-card">
              <div className="test-quote-icon"><i className="fas fa-quote-left"></i></div>
              <p>"CGLPrep AI has been a game-changer for our family. The detailed reports help us understand our son's progress and keep him motivated."</p>
              <div className="test-author">
                <img src="/images/parents/avatar-neha.jpg" alt="Mrs. Neha Sharma" />
                <div>
                  <strong>Mrs. Neha Sharma</strong>
                  <span>Parent of CGL Aspirant (Delhi)</span>
                </div>
              </div>
            </div>
            <div className="parent-test-card">
              <div className="test-quote-icon"><i className="fas fa-quote-left"></i></div>
              <p>"I can now see exactly where my daughter needs to improve. The platform is very well designed and easy to use for parents too."</p>
              <div className="test-author">
                <img src="/images/parents/avatar-rajesh.jpg" alt="Mr. Rajesh Kumar" />
                <div>
                  <strong>Mr. Rajesh Kumar</strong>
                  <span>Parent of CGL Aspirant (Lucknow)</span>
                </div>
              </div>
            </div>
            <div className="parent-test-card">
              <div className="test-quote-icon"><i className="fas fa-quote-left"></i></div>
              <p>"The parent dashboard gives me peace of mind. I know my child is studying consistently and on the right path."</p>
              <div className="test-author">
                <img src="/images/parents/avatar-pooja.jpg" alt="Mrs. Pooja Singh" />
                <div>
                  <strong>Mrs. Pooja Singh</strong>
                  <span>Parent of CGL Aspirant (Bhopal)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 6: FAQ ===== */}
      <section className="parent-faq-sec">
        <div className="container">
          <div className="parent-faq-header">
            <h2>Frequently Asked Questions</h2>
            <p>Common questions from parents.</p>
          </div>

          <div className="parent-faq-layout">
            <div className="parent-faq-grid">
              {faqData.map((faq, idx) => (
                <div key={idx} className={`parent-faq-item ${openFaq === idx ? 'open' : ''}`} onClick={() => toggleFaq(idx)}>
                  <div className="faq-question">
                    <span>{faq.q}</span>
                    <i className={`fas ${openFaq === idx ? 'fa-minus' : 'fa-plus'}`}></i>
                  </div>
                  {openFaq === idx && (
                    <div className="faq-answer">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="parent-faq-help-card">
              <h4>Need Help?</h4>
              <p>Our support team is here to assist you.</p>
              <div className="faq-help-btns">
                <button className="btn-primary">Contact Support</button>
                <button className="btn-outline">FAQ</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 7: Pre-Footer CTA ===== */}
      <section className="parent-prefooter">
        <div className="container parent-prefooter-inner">
          <div className="parent-prefooter-content">
            <h2>Invest in Their Dream. Be a Part of Their Success.</h2>
            <p>Join thousands of parents who trust CGLPrep AI.</p>
          </div>
          <button className="btn-white parent-prefooter-btn" onClick={() => navigate('/parent-login')}>Create Parent Account <i className="fas fa-arrow-right"></i></button>
        </div>
        <div className="parent-prefooter-trust">
          <div className="container">
            <div className="prefooter-trust-row">
              <span><i className="fas fa-lock"></i> Safe & Secure</span>
              <span><i className="fas fa-users"></i> Trusted by 1,000,000+ Families</span>
              <span><i className="fas fa-check-circle"></i> Easy to Use</span>
            </div>
          </div>
        </div>
        <div className="parent-prefooter-handwritten">
          A Brighter<br/>Future Together!
        </div>
      </section>

    </div>
  );
};

export default ParentFeatures;
