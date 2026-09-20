import React, { useState } from 'react';
import QuizModal from '../QuizModal';

const FullLengthTests = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [aiQuestions, setAiQuestions] = useState([]);
  const [currentTestTitle, setCurrentTestTitle] = useState('Full Length Test');

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const handleStartTest = async (testTitle) => {
    setIsGenerating(true);
    setCurrentTestTitle(testTitle);
    try {
      const response = await fetch('http://localhost:5000/api/ai/generate-quiz', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          topic: testTitle,
          difficulty: 'Moderate',
          count: 10 // Simulating a smaller set for quick testing
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

  const tests = [
    { id: '01', title: 'SSC CGL 2026 - Full Test 1', tags: ['Latest Pattern', 'Moderate'], type: 'Complete Syllabus | Based on latest pattern', questions: 100, minutes: 60, marks: 200, attempts: '1.2 Lakh+', isPopular: true },
    { id: '02', title: 'SSC CGL 2026 - Full Test 2', tags: ['Latest Pattern', 'Moderate'], type: 'Exam Level | Balanced Mix', questions: 100, minutes: 60, marks: 200, attempts: '98K' },
    { id: '03', title: 'SSC CGL 2026 - Full Test 3', tags: ['Latest Pattern', 'Difficult'], type: 'For High Scorers', questions: 100, minutes: 60, marks: 200, attempts: '76K' },
    { id: '04', title: 'SSC CGL 2026 - Full Test 4', tags: ['Mixed Pattern', 'Moderate'], type: 'Based on Previous Year Trend', questions: 100, minutes: 60, marks: 200, attempts: '64K' },
    { id: '05', title: 'SSC CGL 2026 - Full Test 5', tags: ['Latest Pattern', 'Moderate'], type: 'Focus on Conceptual Questions', questions: 100, minutes: 60, marks: 200, attempts: '58K' },
    { id: '06', title: 'SSC CGL 2026 - Full Test 6', tags: ['Previous Year Based', 'Moderate'], type: 'Based on 2024 Paper Analysis', questions: 100, minutes: 60, marks: 200, attempts: '51K' },
  ];

  const faqs = [
    "Are these full length tests based on the latest SSC CGL pattern?",
    "What is the time duration and marking scheme?",
    "Will I get All India Rank after attempting the test?",
    "Are detailed solutions provided?",
    "Can I attempt the test on mobile?",
    "How many full length tests should I attempt before the exam?"
  ];

  return (
    <div className="flt-container">
      <div className="container">
        
        {/* ===== 3-Column Layout ===== */}
        <div className="flt-layout">
          
          {/* --- Left Column: Filters --- */}
          <div className="flt-filters">
            <div className="flt-filters-header">
              <h3>Filters</h3>
              <button className="btn-reset">Reset All</button>
            </div>
            
            <div className="flt-filter-group">
              <h4>Test Type <i className="fas fa-chevron-up"></i></h4>
              <label className="custom-checkbox">
                <input type="checkbox" defaultChecked />
                <span className="checkmark"></span>
                <span className="label-text">Latest Pattern (2026)</span>
                <span className="count">10</span>
              </label>
              <label className="custom-checkbox">
                <input type="checkbox" />
                <span className="checkmark"></span>
                <span className="label-text">Previous Year Based</span>
                <span className="count">8</span>
              </label>
              <label className="custom-checkbox">
                <input type="checkbox" />
                <span className="checkmark"></span>
                <span className="label-text">Mixed Level</span>
                <span className="count">6</span>
              </label>
            </div>

            <div className="flt-filter-group">
              <h4>Difficulty Level <i className="fas fa-chevron-up"></i></h4>
              <label className="custom-checkbox">
                <input type="checkbox" />
                <span className="checkmark"></span>
                <span className="label-text">Easy</span>
                <span className="count">2</span>
              </label>
              <label className="custom-checkbox">
                <input type="checkbox" defaultChecked />
                <span className="checkmark"></span>
                <span className="label-text">Moderate</span>
                <span className="count">6</span>
              </label>
              <label className="custom-checkbox">
                <input type="checkbox" />
                <span className="checkmark"></span>
                <span className="label-text">Difficult</span>
                <span className="count">6</span>
              </label>
            </div>

            <div className="flt-filter-group">
              <h4>Language <i className="fas fa-chevron-up"></i></h4>
              <label className="custom-checkbox">
                <input type="checkbox" defaultChecked />
                <span className="checkmark"></span>
                <span className="label-text">English</span>
                <span className="count">10</span>
              </label>
              <label className="custom-checkbox">
                <input type="checkbox" />
                <span className="checkmark"></span>
                <span className="label-text">Hindi</span>
                <span className="count">10</span>
              </label>
              <label className="custom-checkbox">
                <input type="checkbox" />
                <span className="checkmark"></span>
                <span className="label-text">Bilingual</span>
                <span className="count">10</span>
              </label>
            </div>

            <div className="flt-filter-group">
              <h4>Tier <i className="fas fa-chevron-up"></i></h4>
              <label className="custom-checkbox">
                <input type="checkbox" defaultChecked />
                <span className="checkmark"></span>
                <span className="label-text">Tier-I (2026)</span>
                <span className="count">10</span>
              </label>
              <label className="custom-checkbox">
                <input type="checkbox" />
                <span className="checkmark"></span>
                <span className="label-text">Tier-II (Upcoming)</span>
                <span className="count">0</span>
              </label>
            </div>

            <div className="flt-filter-group">
              <h4>Features <i className="fas fa-chevron-up"></i></h4>
              <label className="custom-checkbox">
                <input type="checkbox" defaultChecked />
                <span className="checkmark"></span>
                <span className="label-text">AI Analysis</span>
                <span className="count">10</span>
              </label>
              <label className="custom-checkbox">
                <input type="checkbox" defaultChecked />
                <span className="checkmark"></span>
                <span className="label-text">All India Ranking</span>
                <span className="count">10</span>
              </label>
              <label className="custom-checkbox">
                <input type="checkbox" defaultChecked />
                <span className="checkmark"></span>
                <span className="label-text">Detailed Solutions</span>
                <span className="count">10</span>
              </label>
              <label className="custom-checkbox">
                <input type="checkbox" />
                <span className="checkmark"></span>
                <span className="label-text">Video Solutions</span>
                <span className="count">6</span>
              </label>
              <label className="custom-checkbox">
                <input type="checkbox" />
                <span className="checkmark"></span>
                <span className="label-text">Performance Certificate</span>
                <span className="count">10</span>
              </label>
            </div>

            <button className="btn-outline flt-apply-filters">Apply Filters</button>
          </div>

          {/* --- Middle Column: Test List --- */}
          <div className="flt-main-list">
            <div className="flt-list-header">
              <h2>Full Length Tests (10)</h2>
              <div className="flt-sort">
                <span>Sort by: Newest First</span>
                <i className="fas fa-chevron-down"></i>
              </div>
            </div>

            <div className="flt-cards-container">
              {tests.map((test, index) => (
                <div className="flt-test-card" key={index}>
                  <div className="flt-card-left">
                    <span className="flt-test-num">{test.id}</span>
                    <div className="flt-test-icon"><i className="fas fa-clipboard-list"></i></div>
                  </div>
                  <div className="flt-card-mid">
                    <div className="flt-card-title-row">
                      <h3>{test.title}</h3>
                      {test.isPopular && <span className="flt-badge-popular"><i className="fas fa-fire"></i> Most Popular</span>}
                    </div>
                    <div className="flt-card-tags">
                      {test.tags.map((tag, i) => (
                        <span key={i} className={`flt-tag ${tag.includes('Difficult') ? 'red' : tag.includes('Previous') ? 'purple' : tag.includes('Mixed') ? 'orange' : 'green'}`}>
                          {tag}
                        </span>
                      ))}
                    </div>
                    <p className="flt-card-type">{test.type}</p>
                    <div className="flt-card-meta">
                      <span><i className="fas fa-question-circle"></i> {test.questions} Questions</span>
                      <span><i className="far fa-clock"></i> {test.minutes} Minutes</span>
                      <span><i className="fas fa-bullseye"></i> {test.marks} Marks</span>
                      <span><i className="fas fa-brain"></i> AI Analysis</span>
                    </div>
                  </div>
                  <div className="flt-card-right">
                    <button 
                      className="btn-primary flt-start-btn"
                      onClick={() => handleStartTest(test.title)}
                      disabled={isGenerating && currentTestTitle === test.title}
                    >
                      {isGenerating && currentTestTitle === test.title ? (
                        <><i className="fas fa-spinner fa-spin"></i> Loading...</>
                      ) : (
                        <>Start Test <i className="fas fa-arrow-right"></i></>
                      )}
                    </button>
                    <span className="flt-attempts">{test.attempts} Attempts</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* --- Right Column: Widgets --- */}
          <div className="flt-widgets">
            {/* Exam Readiness Widget */}
            <div className="flt-widget-card flt-readiness">
              <div className="flt-widget-header">
                <h3><i className="fas fa-chart-pie"></i> Your Exam Readiness</h3>
                <button className="btn-outline-sm">Take a Test Now</button>
              </div>
              <div className="flt-readiness-body">
                <div className="flt-circular-progress">
                  <div className="flt-circle-inner">
                    <span className="flt-pct">72%</span>
                    <span className="flt-pct-label">CGL Ready</span>
                  </div>
                  <svg viewBox="0 0 36 36" className="circular-chart green">
                    <path className="circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                    <path className="circle" strokeDasharray="72, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                  </svg>
                </div>
                <div className="flt-subject-scores">
                  <div className="flt-ss-item"><span className="dot green"></span> Quant <strong>68%</strong></div>
                  <div className="flt-ss-item"><span className="dot green"></span> Reasoning <strong>74%</strong></div>
                  <div className="flt-ss-item"><span className="dot green"></span> English <strong>78%</strong></div>
                  <div className="flt-ss-item"><span className="dot orange"></span> General Awareness <strong>66%</strong></div>
                </div>
              </div>
              <p className="flt-readiness-note">Take a full length test to get detailed analysis and know your exact preparation level.</p>
            </div>

            {/* Test Features Widget */}
            <div className="flt-widget-card">
              <div className="flt-widget-header no-border">
                <h3>Test Features</h3>
              </div>
              <ul className="flt-features-list">
                <li><i className="fas fa-file-alt text-blue"></i> Latest SSC CGL pattern</li>
                <li><i className="fas fa-laptop-code text-orange"></i> Real exam interface</li>
                <li><i className="fas fa-stopwatch text-green"></i> Section-wise timing</li>
                <li><i className="fas fa-brain text-purple"></i> AI-powered performance analysis</li>
                <li><i className="fas fa-trophy text-red"></i> All India ranking</li>
                <li><i className="fas fa-book-open text-blue"></i> Detailed solutions with explanations</li>
                <li><i className="fas fa-users text-yellow"></i> Compare with toppers</li>
                <li><i className="fas fa-certificate text-orange"></i> Performance certificate</li>
              </ul>
            </div>

            {/* Mobile App Banner */}
            <div className="flt-app-banner">
              <div className="flt-app-icon"><i className="fas fa-mobile-alt"></i></div>
              <div className="flt-app-text">
                <h4>Attempt on Mobile App</h4>
                <p>Take tests anytime, anywhere with our mobile app.</p>
                <div className="flt-app-stores">
                  <img src="/images/google-play-badge.svg" alt="Google Play" className="store-badge" />
                  <img src="/images/app-store-badge.svg" alt="App Store" className="store-badge" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ===== Why Take Full Length Tests? ===== */}
        <section className="flt-why-section">
          <h2>Why Take Full Length Tests?</h2>
          <div className="flt-why-grid">
            <div className="flt-why-card">
              <div className="flt-why-icon green"><i className="fas fa-bullseye"></i></div>
              <h4>Build Exam Temperament</h4>
              <p>Get comfortable with 60-minute exam pressure.</p>
            </div>
            <div className="flt-why-card">
              <div className="flt-why-icon blue"><i className="fas fa-clock"></i></div>
              <h4>Improve Time Management</h4>
              <p>Learn to allocate time effectively across sections.</p>
            </div>
            <div className="flt-why-card">
              <div className="flt-why-icon purple"><i className="fas fa-chart-bar"></i></div>
              <h4>Know Your Actual Preparation Level</h4>
              <p>Compare with All India aspirants.</p>
            </div>
            <div className="flt-why-card">
              <div className="flt-why-icon orange"><i className="fas fa-clipboard-list"></i></div>
              <h4>Identify Strengths & Weaknesses</h4>
              <p>Detailed section-wise analysis.</p>
            </div>
            <div className="flt-why-card">
              <div className="flt-why-icon red"><i className="fas fa-crosshairs"></i></div>
              <h4>Track Your Progress</h4>
              <p>See improvement over time.</p>
            </div>
            <div className="flt-why-card">
              <div className="flt-why-icon yellow"><i className="fas fa-trophy"></i></div>
              <h4>Boost Confidence</h4>
              <p>Be exam-ready on the actual day.</p>
            </div>
          </div>
        </section>

        {/* ===== Frequently Asked Questions ===== */}
        <section className="flt-faq-section">
          <div className="flt-faq-left">
            <h2>Frequently Asked Questions</h2>
            <div className="flt-faq-accordion">
              {faqs.map((faq, index) => (
                <div className={`flt-faq-item ${openFaq === index ? 'active' : ''}`} key={index}>
                  <button className="flt-faq-question" onClick={() => toggleFaq(index)}>
                    <i className={`fas ${openFaq === index ? 'fa-minus' : 'fa-plus'}`}></i> {faq}
                  </button>
                  {openFaq === index && (
                    <div className="flt-faq-answer">
                      <p>Yes, all our mock tests are strictly based on the latest SSC CGL examination pattern and syllabus provided by the official notification. We update them regularly.</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          <div className="flt-faq-right">
            {/* Testimonial */}
            <div className="flt-testimonial-card">
              <div className="flt-quote-icon"><i className="fas fa-quote-left"></i></div>
              <p className="flt-testimonial-text">"Mock tests gave me the confidence to face the real exam. The analysis helped me improve my weak areas."</p>
              <div className="flt-testimonial-author">
                <div className="flt-author-info">
                  <strong>— Ankit Sharma</strong>
                  <span>Selected as Income Tax Inspector (CGL 2023)</span>
                </div>
                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Ankit" alt="Ankit Sharma" className="flt-author-img" />
              </div>
            </div>

            {/* CTA Card */}
            <div className="flt-cta-card">
              <div className="flt-cta-content">
                <h3>Ready to Test Your Preparation?</h3>
                <p>Join thousands of aspirants who are improving their scores with regular mock tests.</p>
                <button className="btn-primary">Start a Full Test Now <i className="fas fa-arrow-right"></i></button>
              </div>
              <div className="flt-cta-icon">
                <i className="fas fa-bullseye"></i>
              </div>
            </div>
          </div>
        </section>

      </div>

      <QuizModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        title={currentTestTitle}
        questions={aiQuestions} 
      />
    </div>
  );
};

export default FullLengthTests;
