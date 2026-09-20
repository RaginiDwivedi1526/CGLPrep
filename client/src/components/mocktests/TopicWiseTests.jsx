import React, { useState } from 'react';

const TopicWiseTests = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const topics = [
    { icon: 'fa-file-invoice', title: 'Number System - Basic Concepts', tags: ['Easy', 'Concept Building'], questions: 20, minutes: 15, marks: 50, attempts: '85K' },
    { icon: 'fa-square-root-alt', title: 'Divisibility Rules and Factors', tags: ['Easy', 'Concept Building'], questions: 25, minutes: 20, marks: 50, attempts: '72K' },
    { icon: 'fa-superscript', title: 'HCF and LCM', tags: ['Moderate', 'Important Topic'], questions: 30, minutes: 25, marks: 50, attempts: '68K' },
    { icon: 'fa-percentage', title: 'Remainder Theorem', tags: ['Moderate', 'Exam Focused'], questions: 25, minutes: 20, marks: 50, attempts: '54K' },
    { icon: 'fa-chart-bar', title: 'Prime Numbers', tags: ['Moderate', 'Concept + Practice'], questions: 30, minutes: 25, marks: 50, attempts: '48K' },
    { icon: 'fa-calculator', title: 'Number of Factors', tags: ['Difficult', 'Advanced Level'], questions: 25, minutes: 25, marks: 50, attempts: '36K' },
    { icon: 'fa-subscript', title: 'Unit Digit and Last Digit', tags: ['Moderate', 'Frequently Asked'], questions: 25, minutes: 20, marks: 50, attempts: '42K' },
    { icon: 'fa-sort-numeric-up', title: 'Smallest & Greatest Number', tags: ['Easy', 'Practice Set'], questions: 20, minutes: 15, marks: 50, attempts: '38K' }
  ];

  const faqs1 = [
    "How are topic-wise tests different from sectional tests?",
    "How many questions are there in each topic test?",
    "Do you provide explanations for all questions?"
  ];
  
  const faqs2 = [
    "Can I retry the same topic test?",
    "Will topic-wise tests help in the actual SSC CGL exam?",
    "How does AI recommend topics for me?"
  ];

  return (
    <div className="sect-container topic-container">
      <div className="container">
        
        {/* ===== 3-Column Layout ===== */}
        <div className="sect-layout topic-layout">
          
          {/* --- Left Column: Filters --- */}
          <div className="sect-left-col">
            <div className="flt-filters">
              
              <div className="flt-filter-group">
                <h4>Subjects</h4>
                <label className="custom-checkbox tw-subject-item">
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                  <div className="tw-subj-info"><i className="fas fa-layer-group text-blue"></i> All Subjects</div>
                  <span className="count">642</span>
                </label>
                <label className="custom-checkbox tw-subject-item">
                  <input type="checkbox" defaultChecked />
                  <span className="checkmark"></span>
                  <div className="tw-subj-info"><i className="fas fa-calculator text-purple"></i> Quantitative Aptitude</div>
                  <span className="count">210</span>
                </label>
                <label className="custom-checkbox tw-subject-item">
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                  <div className="tw-subj-info"><i className="fas fa-brain text-orange"></i> Reasoning</div>
                  <span className="count">160</span>
                </label>
                <label className="custom-checkbox tw-subject-item">
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                  <div className="tw-subj-info"><i className="fas fa-font text-blue-light"></i> English Language</div>
                  <span className="count">140</span>
                </label>
                <label className="custom-checkbox tw-subject-item">
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                  <div className="tw-subj-info"><i className="fas fa-globe text-green"></i> General Awareness</div>
                  <span className="count">132</span>
                </label>
              </div>

              <div className="flt-filter-group">
                <h4>Topics (Quant) <i className="fas fa-chevron-up"></i></h4>
                <input type="text" className="sect-search-input" placeholder="Search topic..." />
                <div className="sect-topic-list tw-topic-list">
                  <label className="custom-checkbox mt-2">
                    <input type="checkbox" defaultChecked />
                    <span className="checkmark"></span>
                    <span className="label-text">Number System</span>
                    <span className="count">24</span>
                  </label>
                  <label className="custom-checkbox">
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                    <span className="label-text">Simplification</span>
                    <span className="count">18</span>
                  </label>
                  <label className="custom-checkbox">
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                    <span className="label-text">Algebra</span>
                    <span className="count">22</span>
                  </label>
                  <label className="custom-checkbox">
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                    <span className="label-text">Geometry</span>
                    <span className="count">28</span>
                  </label>
                  <label className="custom-checkbox">
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                    <span className="label-text">Trigonometry</span>
                    <span className="count">18</span>
                  </label>
                  <label className="custom-checkbox">
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                    <span className="label-text">Mensuration</span>
                    <span className="count">16</span>
                  </label>
                  <label className="custom-checkbox">
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                    <span className="label-text">Data Interpretation</span>
                    <span className="count">26</span>
                  </label>
                  <label className="custom-checkbox">
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                    <span className="label-text">Profit & Loss</span>
                    <span className="count">16</span>
                  </label>
                  <label className="custom-checkbox">
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                    <span className="label-text">Percentage</span>
                    <span className="count">18</span>
                  </label>
                  <label className="custom-checkbox">
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                    <span className="label-text">Ratio & Proportion</span>
                    <span className="count">14</span>
                  </label>
                  <button className="sect-view-more">Show More <i className="fas fa-chevron-down"></i></button>
                </div>
              </div>

              <div className="flt-filter-group">
                <h4>Difficulty Level <i className="fas fa-chevron-up"></i></h4>
                <label className="custom-checkbox">
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                  <span className="label-text">Easy</span>
                  <span className="count">84</span>
                </label>
                <label className="custom-checkbox">
                  <input type="checkbox" defaultChecked />
                  <span className="checkmark"></span>
                  <span className="label-text">Moderate</span>
                  <span className="count">96</span>
                </label>
                <label className="custom-checkbox">
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                  <span className="label-text">Difficult</span>
                  <span className="count">30</span>
                </label>
              </div>

              <div className="flt-filter-group">
                <h4>Question Type <i className="fas fa-chevron-up"></i></h4>
                <label className="custom-checkbox">
                  <input type="checkbox" defaultChecked />
                  <span className="checkmark"></span>
                  <span className="label-text">MCQ</span>
                  <span className="count">200</span>
                </label>
                <label className="custom-checkbox">
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                  <span className="label-text">Non-MCQ</span>
                  <span className="count">10</span>
                </label>
              </div>

              <button className="btn-primary flt-apply-filters">Apply Filters</button>
              <button className="btn-reset tw-reset-btn">Reset All</button>
            </div>
          </div>

          {/* --- Middle Column: Main Content --- */}
          <div className="sect-main-list">
            
            {/* AI Recommendation Banner */}
            <div className="tw-ai-banner">
              <div className="tw-ai-icon"><i className="fas fa-bullseye"></i></div>
              <div className="tw-ai-content">
                <h4>Not sure where to start?</h4>
                <p>Take a short diagnostic test and get AI recommendations for topics you should focus on.</p>
              </div>
              <button className="btn-outline-sm tw-ai-btn">Get Topic Suggestions <i className="fas fa-arrow-right"></i></button>
            </div>

            <div className="tw-list-header">
              <div>
                <h2>Number System - Topic Tests</h2>
                <p>24 Tests • 1,200+ Questions</p>
              </div>
              <div className="flt-sort">
                <span>Sort by: Recommended</span>
                <i className="fas fa-chevron-down"></i>
              </div>
            </div>

            {/* Test Cards List */}
            <div className="flt-cards-container">
              {topics.map((test, index) => (
                <div className="flt-test-card tw-card" key={index}>
                  <div className="tw-card-icon">
                    <i className="fas fa-clipboard-list"></i>
                  </div>
                  <div className="flt-card-mid">
                    <h3 className="sect-card-title">{test.title}</h3>
                    <div className="flt-card-tags mb-2">
                      <span className={`flt-tag ${test.tags[0] === 'Easy' ? 'green' : test.tags[0] === 'Difficult' ? 'red' : 'blue'}`}>
                        {test.tags[0]}
                      </span>
                      <span className="flt-tag purple-outline">{test.tags[1]}</span>
                    </div>
                    <div className="flt-card-meta">
                      <span><i className="fas fa-question-circle"></i> {test.questions} Questions</span>
                      <span><i className="far fa-clock"></i> {test.minutes} Minutes</span>
                      <span><i className="fas fa-bullseye"></i> {test.marks} Marks</span>
                    </div>
                  </div>
                  <div className="flt-card-right">
                    <button className="btn-primary flt-start-btn">Start Test <i className="fas fa-arrow-right"></i></button>
                    <span className="flt-attempts">{test.attempts} Attempts</span>
                  </div>
                </div>
              ))}
            </div>

            <button className="tw-show-more-btn">Show More Tests <i className="fas fa-chevron-down"></i></button>

          </div>

          {/* --- Right Column: Widgets --- */}
          <div className="flt-widgets">
            {/* Topic Performance Widget */}
            <div className="flt-widget-card">
              <div className="flt-widget-header no-border">
                <h3>Your Topic Performance</h3>
                <div className="tw-topic-select">Number System <i className="fas fa-chevron-down"></i></div>
              </div>
              
              <div className="tw-perf-body">
                <div className="tw-circ-chart">
                  <div className="flt-circular-progress" style={{ width: '100px', height: '100px' }}>
                    <div className="flt-circle-inner">
                      <span className="flt-pct" style={{ fontSize: '24px' }}>78%</span>
                      <span className="flt-pct-label">Accuracy</span>
                    </div>
                    <svg viewBox="0 0 36 36" className="circular-chart green">
                      <path className="circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                      <path className="circle" strokeDasharray="78, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                    </svg>
                  </div>
                </div>
                <div className="tw-perf-stats">
                  <div className="tw-stat-item">
                    <div className="tw-stat-icon blue"><i className="fas fa-file-alt"></i></div>
                    <div className="tw-stat-info"><strong>12</strong><span>Tests Attempted</span></div>
                  </div>
                  <div className="tw-stat-item">
                    <div className="tw-stat-icon purple"><i className="fas fa-question-circle"></i></div>
                    <div className="tw-stat-info"><strong>180</strong><span>Questions Attempted</span></div>
                  </div>
                  <div className="tw-stat-item">
                    <div className="tw-stat-icon green"><i className="fas fa-check-circle"></i></div>
                    <div className="tw-stat-info"><strong>142</strong><span>Correct Answers</span></div>
                  </div>
                  <div className="tw-stat-item">
                    <div className="tw-stat-icon red"><i className="fas fa-times-circle"></i></div>
                    <div className="tw-stat-info"><strong>38</strong><span>Incorrect Answers</span></div>
                  </div>
                </div>
              </div>

              <div className="tw-success-alert">
                <i className="fas fa-check-circle"></i>
                <div>
                  <strong>You are doing great!</strong>
                  <p>Your accuracy in Number System is 12% higher than your previous attempts.</p>
                </div>
              </div>
            </div>

            {/* Accuracy Trend Widget */}
            <div className="flt-widget-card">
              <div className="flt-widget-header no-border">
                <h3>Accuracy Trend</h3>
                <div className="tw-topic-select" style={{ fontSize: '11px', padding: '4px 8px' }}>Last 10 Tests <i className="fas fa-chevron-down"></i></div>
              </div>
              <div className="tw-trend-chart">
                <img src="/images/mocktests/trend-chart-placeholder.svg" alt="Trend Chart" style={{ width: '100%', height: 'auto', display: 'block' }} />
                {/* Fallback if image doesn't exist */}
                <div className="tw-css-chart">
                  <div className="tw-y-axis"><span>100</span><span>75</span><span>50</span><span>25</span><span>0</span></div>
                  <div className="tw-graph-area">
                    <div className="tw-line" style={{ clipPath: 'polygon(0% 75%, 10% 70%, 20% 65%, 30% 60%, 40% 58%, 50% 50%, 60% 48%, 70% 40%, 80% 30%, 90% 20%, 100% 25%, 100% 100%, 0% 100%)' }}></div>
                  </div>
                  <div className="tw-x-axis">
                    <span>Test 1</span><span>Test 2</span><span>Test 3</span><span>Test 4</span><span>Test 5</span><span>Test 6</span><span>Test 7</span><span>Test 8</span><span>Test 9</span><span>Test 10</span>
                  </div>
                </div>
              </div>
            </div>

            {/* AI Insights Widget */}
            <div className="flt-widget-card">
              <div className="flt-widget-header no-border">
                <h3><i className="fas fa-lightbulb text-yellow"></i> AI Insights</h3>
                <button className="sect-view-more">View Details <i className="fas fa-arrow-right"></i></button>
              </div>
              <ul className="tw-insights-list">
                <li><i className="fas fa-check-circle text-green"></i> Strong in basic calculations</li>
                <li><i className="fas fa-check-circle text-green"></i> Good accuracy in divisibility rules</li>
                <li><i className="fas fa-exclamation-triangle text-red"></i> Need more practice on advanced questions</li>
                <li><i className="fas fa-clock text-red"></i> Time management can be improved</li>
                <li><i className="fas fa-exclamation-circle text-orange"></i> Try more moderate and difficult level tests</li>
              </ul>
            </div>

            {/* Personalized Practice Plan Widget */}
            <div className="tw-plan-card">
              <div className="tw-plan-icon"><i className="fas fa-calendar-alt"></i></div>
              <div className="tw-plan-text">
                <h4>Personalized Practice Plan</h4>
                <p>Get a customized topic-wise practice plan based on your performance.</p>
                <button className="btn-outline-sm tw-custom-btn">Get My Plan <i className="fas fa-arrow-right"></i></button>
              </div>
            </div>

            {/* Recommended Next Topics Widget */}
            <div className="flt-widget-card">
              <div className="flt-widget-header no-border" style={{ marginBottom: '8px' }}>
                <h3><i className="fas fa-bolt text-orange"></i> Recommended Next Topics</h3>
              </div>
              <p className="sect-weak-sub">Based on your performance</p>
              
              <div className="tw-rec-list">
                <div className="tw-rec-item">
                  <div className="tw-rec-icon green"><i className="fas fa-square-root-alt"></i></div>
                  <strong>Simplification</strong>
                  <button className="btn-outline-sm">Practice Now</button>
                </div>
                <div className="tw-rec-item">
                  <div className="tw-rec-icon blue"><i className="fas fa-superscript"></i></div>
                  <strong>HCF & LCM</strong>
                  <button className="btn-outline-sm">Practice Now</button>
                </div>
                <div className="tw-rec-item">
                  <div className="tw-rec-icon purple"><i className="fas fa-percentage"></i></div>
                  <strong>Remainder Theorem</strong>
                  <button className="btn-outline-sm">Practice Now</button>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* ===== Bottom Sections ===== */}
        
        {/* Why Topic-wise Tests? */}
        <div className="sect-why-box tw-why-full">
          <h2>Why Topic-wise Tests?</h2>
          <div className="tw-why-grid">
            <div className="swi-item">
              <div className="swi-icon blue"><i className="fas fa-graduation-cap"></i></div>
              <span>Build Strong Concepts</span>
            </div>
            <div className="swi-item">
              <div className="swi-icon red"><i className="fas fa-bullseye"></i></div>
              <span>Improve Accuracy & Speed</span>
            </div>
            <div className="swi-item">
              <div className="swi-icon purple"><i className="fas fa-chart-bar"></i></div>
              <span>Focus on Weak Areas</span>
            </div>
            <div className="swi-item">
              <div className="swi-icon blue-light"><i className="far fa-clock"></i></div>
              <span>Practice at Your Pace</span>
            </div>
            <div className="swi-item">
              <div className="swi-icon purple-light"><i className="fas fa-brain"></i></div>
              <span>AI-driven Insights</span>
            </div>
            <div className="swi-item">
              <div className="swi-icon yellow"><i className="fas fa-trophy"></i></div>
              <span>Score Higher in Exams</span>
            </div>
          </div>
        </div>

        {/* FAQs & Contact Support */}
        <div className="tw-faq-contact-row">
          <div className="tw-faq-col">
            <h2>Frequently Asked Questions</h2>
            <div className="tw-faq-grid">
              <div className="tw-faq-col-inner">
                {faqs1.map((faq, index) => (
                  <div className={`flt-faq-item ${openFaq === index ? 'active' : ''}`} key={index}>
                    <button className="flt-faq-question" onClick={() => toggleFaq(index)}>
                      <i className={`fas ${openFaq === index ? 'fa-minus' : 'fa-plus'}`}></i> {faq}
                    </button>
                    {openFaq === index && (
                      <div className="flt-faq-answer"><p>Topic-wise tests are designed to help you master specific concepts.</p></div>
                    )}
                  </div>
                ))}
              </div>
              <div className="tw-faq-col-inner">
                {faqs2.map((faq, index) => (
                  <div className={`flt-faq-item ${openFaq === index + 3 ? 'active' : ''}`} key={index + 3}>
                    <button className="flt-faq-question" onClick={() => toggleFaq(index + 3)}>
                      <i className={`fas ${openFaq === index + 3 ? 'fa-minus' : 'fa-plus'}`}></i> {faq}
                    </button>
                    {openFaq === index + 3 && (
                      <div className="flt-faq-answer"><p>Topic-wise tests are designed to help you master specific concepts.</p></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="tw-contact-card">
            <div className="tw-cc-icon"><i className="fas fa-headset"></i></div>
            <div className="tw-cc-content">
              <h3>Still have questions?</h3>
              <p>Our support team is here to help you.</p>
              <div className="tw-cc-btns">
                <button className="btn-primary">Contact Support</button>
                <button className="btn-outline">View Help Center</button>
              </div>
            </div>
          </div>
        </div>

      </div>
      
      {/* Pre-Footer Banner */}
      <div className="sect-pre-footer tw-pre-footer">
        <div className="container">
          <div className="spf-content">
            <div className="spf-text">
              <h2>Turn Your Weak Topics Into Strong Scores.</h2>
              <p>Practice topic-wise tests and build conceptual clarity with CGLPrep AI.</p>
            </div>
            <button className="btn-yellow">Start Practicing Now <i className="fas fa-arrow-right"></i></button>
          </div>
          <div className="spf-handwritten">
            <span>Same</span>
            <span>Aspirants</span>
            <span>Bigger Dreams</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopicWiseTests;
