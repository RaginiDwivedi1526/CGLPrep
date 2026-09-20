import React, { useState } from 'react';
import PyqDetailsModal from './PyqDetailsModal';

const PyqTests = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [selectedPaper, setSelectedPaper] = useState(null);

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const openModal = (paper) => {
    setSelectedPaper(paper);
  };

  const closeModal = () => {
    setSelectedPaper(null);
  };

  const papers = [
    { title: 'SSC CGL 2024 - Tier I (All Shifts)', questions: 100, minutes: 60, marks: 200, isLatest: true },
    { title: 'SSC CGL 2024 - Tier II (All Papers)', questions: 'Varies', minutes: 180, marks: 'Varies' },
    { title: 'SSC CGL 2023 - Tier I (All Shifts)', questions: 100, minutes: 60, marks: 200 },
    { title: 'SSC CGL 2023 - Tier II (All Papers)', questions: 'Varies', minutes: 180, marks: 'Varies' },
    { title: 'SSC CGL 2022 - Tier I (All Shifts)', questions: 100, minutes: 60, marks: 200 },
    { title: 'SSC CGL 2022 - Tier II (All Papers)', questions: 'Varies', minutes: 180, marks: 'Varies' },
    { title: 'SSC CGL 2021 - Tier I (All Shifts)', questions: 100, minutes: 60, marks: 200 },
    { title: 'SSC CGL 2021 - Tier II (All Papers)', questions: 'Varies', minutes: 180, marks: 'Varies' }
  ];

  const faqs1 = [
    "Are the previous year papers available with solutions?",
    "Which years' papers are most important?",
    "How can previous year papers help in my preparation?",
    "Are Tier II previous year papers also available?"
  ];

  
  const faqs2 = [
    "Can I download the papers as PDFs?",
    "Are the papers arranged shift-wise?",
    "Do you provide topic-wise analysis of previous year papers?",
    "How many years of papers should I solve?"
  ];

  const years = [2025, 2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016];

  return (
    <div className="sect-container pyq-container">
      <div className="container">
        
        {/* ===== 3-Column Layout ===== */}
        <div className="sect-layout pyq-layout">
          
          {/* --- Left Column: Filters --- */}
          <div className="sect-left-col">
            <div className="flt-filters">
              <div className="flt-filters-header">
                <h3>Filters</h3>
                <button className="btn-reset">Reset All</button>
              </div>
              
              <div className="flt-filter-group">
                <h4>Year <i className="fas fa-chevron-up"></i></h4>
                {years.map((year, i) => (
                  <label className="custom-checkbox" key={year}>
                    <input type="checkbox" defaultChecked={year === 2024} />
                    <span className="checkmark"></span>
                    <span className="label-text">{year}</span>
                    <span className="count">4</span>
                  </label>
                ))}
              </div>

              <div className="flt-filter-group">
                <h4>Tier <i className="fas fa-chevron-up"></i></h4>
                <label className="custom-checkbox">
                  <input type="checkbox" defaultChecked />
                  <span className="checkmark"></span>
                  <span className="label-text">Tier - I</span>
                  <span className="count">40</span>
                </label>
                <label className="custom-checkbox">
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                  <span className="label-text">Tier - II</span>
                  <span className="count">40</span>
                </label>
              </div>

              <div className="flt-filter-group">
                <h4>Subject <i className="fas fa-chevron-up"></i></h4>
                <label className="custom-checkbox">
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                  <span className="label-text">General Intelligence</span>
                  <span className="count">40</span>
                </label>
                <label className="custom-checkbox">
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                  <span className="label-text">General Awareness</span>
                  <span className="count">40</span>
                </label>
                <label className="custom-checkbox">
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                  <span className="label-text">Quantitative Aptitude</span>
                  <span className="count">40</span>
                </label>
                <label className="custom-checkbox">
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                  <span className="label-text">English Language</span>
                  <span className="count">40</span>
                </label>
              </div>

              <div className="flt-filter-group">
                <h4>Exam Mode <i className="fas fa-chevron-up"></i></h4>
                <label className="custom-checkbox">
                  <input type="checkbox" defaultChecked />
                  <span className="checkmark"></span>
                  <span className="label-text">CBT (Online)</span>
                  <span className="count">80</span>
                </label>
                <label className="custom-checkbox">
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                  <span className="label-text">Paper Based (Old)</span>
                  <span className="count">0</span>
                </label>
              </div>

              <button className="btn-primary flt-apply-filters">Apply Filters</button>
            </div>
          </div>

          {/* --- Middle Column: Main Content --- */}
          <div className="sect-main-list">
            
            <div className="tw-list-header" style={{ marginBottom: '16px' }}>
              <div>
                <h2>Previous Year Papers (40)</h2>
              </div>
              <div className="flt-sort" style={{ padding: '6px 12px' }}>
                <span>Sort by: Latest Year</span>
                <i className="fas fa-chevron-down"></i>
              </div>
            </div>

            {/* Test Cards List */}
            <div className="flt-cards-container">
              {papers.map((test, index) => (
                <div className="flt-test-card pyq-card" key={index}>
                  <div className="pyq-card-icon">
                    <i className="fas fa-clipboard-list"></i>
                  </div>
                  <div className="flt-card-mid" style={{ flex: 1 }}>
                    <div className="pyq-title-row">
                      <h3 className="sect-card-title">{test.title}</h3>
                      {test.isLatest && <span className="flt-tag green" style={{ fontSize: '10px' }}>Latest</span>}
                    </div>
                    <div className="pyq-sub">Actual Questions | With Detailed Solutions</div>
                    <div className="flt-card-meta">
                      <span><i className="fas fa-question-circle"></i> {test.questions} {test.questions !== 'Varies' ? 'Questions' : ''}</span>
                      <span><i className="far fa-clock"></i> {test.minutes} Minutes</span>
                      <span><i className="fas fa-bullseye"></i> {test.marks} {test.marks !== 'Varies' ? 'Marks' : ''}</span>
                      <span><i className="fas fa-laptop"></i> CBT (Online)</span>
                    </div>
                  </div>
                  <div className="pyq-card-actions">
                    <button className="btn-outline-sm pyq-btn" onClick={() => openModal(test)}>View Details</button>
                    <button className="btn-primary pyq-btn">Start Practice <i className="fas fa-arrow-right"></i></button>
                  </div>
                </div>
              ))}
            </div>

            <button className="tw-show-more-btn" style={{ background: 'white', border: '1px solid var(--gray-200)', borderRadius: '8px', padding: '12px' }}>
              Load More Papers <i className="fas fa-chevron-down"></i>
            </button>

          </div>

          {/* --- Right Column: Widgets --- */}
          <div className="flt-widgets">
            {/* Practice Summary Widget */}
            <div className="flt-widget-card">
              <div className="flt-widget-header no-border">
                <h3><i className="fas fa-chart-bar"></i> Your Practice Summary</h3>
                <button className="sect-view-more" style={{ marginTop: 0 }}>View All Stats <i className="fas fa-arrow-right"></i></button>
              </div>
              
              <div className="tw-perf-body">
                <div className="tw-circ-chart">
                  <div className="flt-circular-progress" style={{ width: '100px', height: '100px' }}>
                    <div className="flt-circle-inner">
                      <span className="flt-pct" style={{ fontSize: '24px' }}>68%</span>
                      <span className="flt-pct-label">Papers Practiced</span>
                    </div>
                    <svg viewBox="0 0 36 36" className="circular-chart green">
                      <path className="circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                      <path className="circle" strokeDasharray="68, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                    </svg>
                  </div>
                </div>
                <div className="tw-perf-stats">
                  <div className="tw-stat-item">
                    <div className="tw-stat-icon blue"><i className="fas fa-layer-group"></i></div>
                    <div className="tw-stat-info"><strong>27</strong><span>Total Papers</span></div>
                  </div>
                  <div className="tw-stat-item">
                    <div className="tw-stat-icon green"><i className="fas fa-check-circle"></i></div>
                    <div className="tw-stat-info"><strong>18</strong><span>Completed</span></div>
                  </div>
                  <div className="tw-stat-item">
                    <div className="tw-stat-icon orange"><i className="fas fa-clock"></i></div>
                    <div className="tw-stat-info"><strong>6</strong><span>In Progress</span></div>
                  </div>
                  <div className="tw-stat-item">
                    <div className="tw-stat-icon red"><i className="fas fa-times-circle"></i></div>
                    <div className="tw-stat-info"><strong>3</strong><span>Not Attempted</span></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Year-wise Trend Widget */}
            <div className="flt-widget-card">
              <div className="flt-widget-header no-border">
                <h3>Year-wise Paper Trend</h3>
                <div className="tw-topic-select" style={{ fontSize: '11px', padding: '4px 8px' }}>Tier I <i className="fas fa-chevron-down"></i></div>
              </div>
              
              <div className="pyq-bar-chart">
                <div className="pbc-y-axis"><span>100</span><span>75</span><span>50</span><span>25</span><span>0</span></div>
                <div className="pbc-bars">
                  <div className="pbc-col"><div className="pbc-bar remaining" style={{ height: '50%' }}></div><div className="pbc-bar attempted" style={{ height: '30%' }}></div><span>2016</span></div>
                  <div className="pbc-col"><div className="pbc-bar remaining" style={{ height: '40%' }}></div><div className="pbc-bar attempted" style={{ height: '35%' }}></div><span>2017</span></div>
                  <div className="pbc-col"><div className="pbc-bar remaining" style={{ height: '30%' }}></div><div className="pbc-bar attempted" style={{ height: '40%' }}></div><span>2018</span></div>
                  <div className="pbc-col"><div className="pbc-bar remaining" style={{ height: '45%' }}></div><div className="pbc-bar attempted" style={{ height: '30%' }}></div><span>2019</span></div>
                  <div className="pbc-col"><div className="pbc-bar remaining" style={{ height: '40%' }}></div><div className="pbc-bar attempted" style={{ height: '35%' }}></div><span>2020</span></div>
                  <div className="pbc-col"><div className="pbc-bar remaining" style={{ height: '35%' }}></div><div className="pbc-bar attempted" style={{ height: '45%' }}></div><span>2021</span></div>
                  <div className="pbc-col"><div className="pbc-bar remaining" style={{ height: '35%' }}></div><div className="pbc-bar attempted" style={{ height: '50%' }}></div><span>2022</span></div>
                  <div className="pbc-col"><div className="pbc-bar remaining" style={{ height: '25%' }}></div><div className="pbc-bar attempted" style={{ height: '60%' }}></div><span>2023</span></div>
                  <div className="pbc-col"><div className="pbc-bar remaining" style={{ height: '30%' }}></div><div className="pbc-bar attempted" style={{ height: '55%' }}></div><span>2024</span></div>
                  <div className="pbc-col"><div className="pbc-bar remaining" style={{ height: '40%' }}></div><div className="pbc-bar attempted" style={{ height: '20%' }}></div><span>2025</span></div>
                </div>
              </div>
              <div className="pbc-legend">
                <span><span className="pbc-dot green"></span> Attempted</span>
                <span><span className="pbc-dot blue-light"></span> Remaining</span>
              </div>
            </div>

            {/* Popular Years */}
            <div className="flt-widget-card pyq-popular">
              <div className="flt-widget-header no-border" style={{ marginBottom: '12px' }}>
                <h3>Popular Years</h3>
              </div>
              <ul className="pyq-pop-list">
                <li><div className="pyq-rank gold">1</div> <strong><i className="fas fa-fire text-red" style={{ marginRight: '4px'}}></i> SSC CGL 2024</strong> <span className="pyq-subtext">(Most Practiced)</span></li>
                <li><div className="pyq-rank silver">2</div> <strong>SSC CGL 2023</strong></li>
                <li><div className="pyq-rank bronze">3</div> <strong>SSC CGL 2022</strong></li>
                <li><div className="pyq-rank normal">4</div> <strong>SSC CGL 2021</strong></li>
                <li><div className="pyq-rank normal">5</div> <strong>SSC CGL 2020</strong></li>
              </ul>
            </div>

            {/* AI Insights Widget */}
            <div className="flt-widget-card" style={{ background: '#fdfbf7', border: '1px solid #fef3c7' }}>
              <div className="flt-widget-header no-border">
                <h3><i className="fas fa-lightbulb text-orange"></i> Get the Best Out of Past Papers</h3>
              </div>
              <ul className="tw-insights-list pyq-tips">
                <li><i className="fas fa-check-circle text-green"></i> Understand real exam pattern & difficulty</li>
                <li><i className="fas fa-check-circle text-green"></i> Identify high-weightage topics</li>
                <li><i className="fas fa-check-circle text-green"></i> Practice time management</li>
                <li><i className="fas fa-check-circle text-green"></i> Analyze your mistakes</li>
                <li><i className="fas fa-check-circle text-green"></i> Boost accuracy with repeated practice</li>
              </ul>
            </div>

            {/* Need Help Choosing */}
            <div className="tw-plan-card" style={{ background: '#fff1f2', borderColor: '#ffe4e6' }}>
              <div className="tw-plan-icon" style={{ color: '#e11d48' }}><i className="fas fa-bullseye"></i></div>
              <div className="tw-plan-text">
                <h4>Need Help Choosing?</h4>
                <p>Not sure which year or paper to start with? Get AI-based recommendations.</p>
                <button className="btn-outline-sm tw-custom-btn" style={{ color: '#2563eb' }}>Get Suggestions <i className="fas fa-arrow-right"></i></button>
              </div>
            </div>

          </div>
        </div>

        {/* ===== Bottom Sections ===== */}
        
        {/* Why Practice & Testimonial Row */}
        <div className="sect-bottom-row" style={{ alignItems: 'center' }}>
          <div className="sect-why-box tw-why-full" style={{ flex: 1.5, margin: 0 }}>
            <h2 style={{ textAlign: 'left', marginBottom: '24px' }}>Why Practice Previous Year Papers?</h2>
            <div className="tw-why-grid" style={{ marginTop: 0, justifyContent: 'flex-start', gap: '20px' }}>
              <div className="swi-item">
                <div className="swi-icon green"><i className="fas fa-bullseye"></i></div>
                <span>Understand Exam Pattern</span>
              </div>
              <div className="swi-item">
                <div className="swi-icon purple"><i className="fas fa-users"></i></div>
                <span>Know Question Trends</span>
              </div>
              <div className="swi-item">
                <div className="swi-icon purple-light"><i className="fas fa-brain"></i></div>
                <span>Identify Important Topics</span>
              </div>
              <div className="swi-item">
                <div className="swi-icon blue"><i className="far fa-clock"></i></div>
                <span>Improve Time Management</span>
              </div>
              <div className="swi-item">
                <div className="swi-icon orange"><i className="fas fa-trophy"></i></div>
                <span>Boost Confidence for the Real Exam</span>
              </div>
            </div>
          </div>

          <div className="pyq-testimonial-box" style={{ flex: 1 }}>
            <div className="pyq-t-content">
              <div className="pyq-t-text">
                "Previous year papers showed me the real pattern. It helped me focus better and improved my score drastically!"
              </div>
              <div className="pyq-t-author">
                <strong>— Neha Verma</strong>
                <span>Selected as Tax Assistant (CGL 2022)</span>
              </div>
            </div>
            <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80" alt="Neha Verma" className="pyq-t-img" />
            <div className="pyq-t-postit">
              Real<br/>Questions.<br/>Real Practice.<br/>Real Results!
            </div>
          </div>
        </div>

        {/* FAQs & Contact Support */}
        <div className="tw-faq-contact-row" style={{ marginTop: '40px', gridTemplateColumns: '1fr' }}>
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
                      <div className="flt-faq-answer"><p>Previous year papers are the most authentic source of practice material.</p></div>
                    )}
                  </div>
                ))}
              </div>
              <div className="tw-faq-col-inner">
                {faqs2.map((faq, index) => (
                  <div className={`flt-faq-item ${openFaq === index + 4 ? 'active' : ''}`} key={index + 4}>
                    <button className="flt-faq-question" onClick={() => toggleFaq(index + 4)}>
                      <i className={`fas ${openFaq === index + 4 ? 'fa-minus' : 'fa-plus'}`}></i> {faq}
                    </button>
                    {openFaq === index + 4 && (
                      <div className="flt-faq-answer"><p>Previous year papers are the most authentic source of practice material.</p></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
      
      {/* Pre-Footer Banner */}
      <div className="sect-pre-footer pyq-pre-footer">
        <div className="container">
          <div className="spf-content">
            <div className="spf-text">
              <h2>Real Questions. Real Preparation. Real Success.</h2>
              <p>Start practicing previous year papers today and stay ahead in your CGL journey.</p>
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

      {/* View Details Modal */}
      <PyqDetailsModal paper={selectedPaper} onClose={closeModal} />
    </div>
  );
};

export default PyqTests;
