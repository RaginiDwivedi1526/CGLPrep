import React, { useState } from 'react';
import PyqDetailsModal from './PyqDetailsModal';
import QuizModal from '../QuizModal';

const PyqTests = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [selectedPaper, setSelectedPaper] = useState(null);
  
  const [isGenerating, setIsGenerating] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [aiQuestions, setAiQuestions] = useState([]);
  
  const [progressData, setProgressData] = useState(null);
  
  React.useEffect(() => {
    // Fetch progress data on mount
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

  const handleStartTest = async (topic, difficulty) => {
    setIsGenerating(true);
    try {
      const response = await fetch('http://localhost:5000/api/ai/generate-quiz', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ topic, difficulty, count: 25 })
      });
      const result = await response.json();
      if (result.success) {
        setAiQuestions(result.data);
        setIsModalOpen(true);
      } else {
        alert(result.message);
      }
    } catch (error) {
      console.error(error);
      alert('Failed to start test.');
    } finally {
      setIsGenerating(false);
    }
  };

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const openModal = (paper) => {
    setSelectedPaper(paper);
  };

  const closeModal = () => {
    setSelectedPaper(null);
  };

const TreeNode = ({ node, onStartTest, defaultExpanded = false }) => {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);
  
  const isLeaf = !node.children || node.children.length === 0;
  
  return (
    <div className="pyq-tree-node" style={{ marginLeft: '20px', position: 'relative' }}>
      {/* Subtle border for tree line */}
      <div style={{ position: 'absolute', left: '-12px', top: '15px', bottom: '-5px', width: '1px', backgroundColor: '#e2e8f0' }}></div>
      
      <div 
        className="pyq-tree-item" 
        style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between',
          padding: '8px 12px', 
          cursor: isLeaf ? 'default' : 'pointer',
          borderRadius: '6px',
          backgroundColor: isExpanded && !isLeaf ? '#f8fafc' : 'transparent',
          position: 'relative'
        }}
        onClick={() => !isLeaf && setIsExpanded(!isExpanded)}
      >
        {/* Horizontal tree branch line */}
        <div style={{ position: 'absolute', left: '-12px', top: '20px', width: '12px', height: '1px', backgroundColor: '#e2e8f0' }}></div>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          {!isLeaf ? (
            <i className={`fas ${isExpanded ? 'fa-folder-open' : 'fa-folder'}`} style={{ color: '#3b82f6', fontSize: '14px', width: '16px' }}></i>
          ) : (
            <i className="far fa-file-alt" style={{ color: '#64748b', fontSize: '14px', width: '16px' }}></i>
          )}
          <span style={{ fontSize: '14px', fontWeight: isLeaf ? '500' : '600', color: '#1e293b' }}>{node.title}</span>
        </div>
        
        {isLeaf && (
          <button 
            className="btn-outline-sm" 
            style={{ padding: '4px 10px', fontSize: '11px', color: '#2563eb', borderColor: '#2563eb' }}
            onClick={() => onStartTest(node.title, 'Moderate')}
          >
            Start Practice
          </button>
        )}
      </div>
      
      {isExpanded && !isLeaf && (
        <div className="pyq-tree-children" style={{ marginTop: '4px' }}>
          {node.children.map((child, idx) => (
            <TreeNode key={idx} node={child} onStartTest={onStartTest} />
          ))}
        </div>
      )}
    </div>
  );
};

const treeData = [
  {
    title: "SSC CGL",
    children: [
      {
        title: "Previous Year Papers",
        children: [
          {
            title: "2024",
            children: [
              { title: "09 September - Shift 1", type: "paper" },
              { title: "09 September - Shift 2", type: "paper" },
              { title: "10 September - Shift 1", type: "paper" }
            ]
          },
          {
            title: "2023",
            children: [
              { title: "14 July - Shift 1", type: "paper" },
              { title: "14 July - Shift 2", type: "paper" }
            ]
          },
          {
            title: "2022",
            children: [
              { title: "01 December - Shift 1", type: "paper" }
            ]
          }
        ]
      },
      {
        title: "Practice Test",
        children: [
          { title: "Quantitative Aptitude", type: "test" },
          { title: "Reasoning", type: "test" },
          { title: "English", type: "test" },
          { title: "General Awareness", type: "test" }
        ]
      }
    ]
  }
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
      <QuizModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} questions={aiQuestions} title="Previous Year Paper" />
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

            {/* Tree View Container */}
            <div className="pyq-tree-container" style={{ backgroundColor: 'white', borderRadius: '12px', padding: '20px', border: '1px solid #e2e8f0', minHeight: '400px' }}>
              {treeData.map((node, idx) => (
                <TreeNode key={idx} node={node} onStartTest={handleStartTest} defaultExpanded={true} />
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
                      <span className="flt-pct" style={{ fontSize: '24px' }}>{progressData ? progressData.overallStats.accuracy : 0}%</span>
                      <span className="flt-pct-label">Accuracy Rate</span>
                    </div>
                    <svg viewBox="0 0 36 36" className="circular-chart green">
                      <path className="circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                      <path className="circle" strokeDasharray={`${progressData ? progressData.overallStats.accuracy : 0}, 100`} d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                    </svg>
                  </div>
                </div>
                <div className="tw-perf-stats">
                  <div className="tw-stat-item">
                    <div className="tw-stat-icon blue"><i className="fas fa-layer-group"></i></div>
                    <div className="tw-stat-info"><strong>{progressData ? progressData.overallStats.totalTests : 0}</strong><span>Total Tests</span></div>
                  </div>
                  <div className="tw-stat-item">
                    <div className="tw-stat-icon green"><i className="fas fa-check-circle"></i></div>
                    <div className="tw-stat-info"><strong>{progressData ? progressData.overallStats.totalQuestions : 0}</strong><span>Questions Done</span></div>
                  </div>
                  <div className="tw-stat-item">
                    <div className="tw-stat-icon orange"><i className="fas fa-clock"></i></div>
                    <div className="tw-stat-info"><strong>{progressData && progressData.recentTests ? progressData.recentTests.length : 0}</strong><span>Recent Log</span></div>
                  </div>
                  <div className="tw-stat-item">
                    <div className="tw-stat-icon red"><i className="fas fa-fire"></i></div>
                    <div className="tw-stat-info"><strong>Active</strong><span>Status</span></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Subject-wise Performance Widget */}
            <div className="flt-widget-card">
              <div className="flt-widget-header no-border">
                <h3>Subject-wise Performance</h3>
              </div>
              
              <div className="pyq-bar-chart" style={{ height: '180px', display: 'flex', alignItems: 'flex-end', gap: '15px', justifyContent: 'center' }}>
                {progressData && progressData.subjects ? (
                  progressData.subjects.map((sub, idx) => (
                    <div key={idx} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', flex: 1 }}>
                      <div style={{ width: '100%', maxWidth: '30px', height: '120px', position: 'relative', backgroundColor: '#e2e8f0', borderRadius: '4px 4px 0 0' }}>
                        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: `${Math.max(sub.progress, 5)}%`, backgroundColor: sub.color, borderRadius: '4px 4px 0 0' }}></div>
                        <span style={{ position: 'absolute', top: '-20px', left: '50%', transform: 'translateX(-50%)', fontSize: '10px', fontWeight: '700', color: '#0f172a' }}>{sub.progress}%</span>
                      </div>
                      <span style={{ fontSize: '10px', color: '#64748b', fontWeight: '600', textAlign: 'center', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', width: '100%' }}>
                        {sub.name.split(' ')[0]}
                      </span>
                    </div>
                  ))
                ) : (
                  <div style={{ alignSelf: 'center', color: '#64748b', fontSize: '13px', width: '100%', textAlign: 'center' }}>Take tests to see subject stats...</div>
                )}
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
