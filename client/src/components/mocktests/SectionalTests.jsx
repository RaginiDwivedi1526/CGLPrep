import React, { useState } from 'react';

import QuizModal from '../QuizModal';

const SectionalTests = () => {
  const [openFaq, setOpenFaq] = useState(null);
  
  const [isGenerating, setIsGenerating] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [aiQuestions, setAiQuestions] = useState([]);

  const handleStartTest = async (topic, difficulty) => {
    setIsGenerating(true);
    try {
      const response = await fetch('http://localhost:5000/api/ai/generate-quiz', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ topic, difficulty, count: 10 })
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

  const sections = [
    { name: 'Quantitative Aptitude', tests: 86, active: true },
    { name: 'Reasoning', tests: 48, active: false, iconClass: 'purple' },
    { name: 'English Language', tests: 64, active: false, iconClass: 'blue' },
    { name: 'General Awareness', tests: 52, active: false, iconClass: 'green' }
  ];

  const popTests = [
    { icon: 'fa-file-invoice', title: 'Number System - Test 1', tags: ['Moderate'], questions: 10, minutes: 10, marks: 20, attempts: '1.2 Lakh', iconColor: 'blue' },
    { icon: 'fa-square-root-alt', title: 'Simplification - Test 1', tags: ['Easy'], questions: 10, minutes: 10, marks: 20, attempts: '98K', iconColor: 'green' },
    { icon: 'fa-superscript', title: 'Algebra - Test 1', tags: ['Moderate'], questions: 15, minutes: 15, marks: 30, attempts: '87K', iconColor: 'purple' },
    { icon: 'fa-percentage', title: 'Percentage - Test 1', tags: ['Moderate'], questions: 15, minutes: 15, marks: 30, attempts: '76K', iconColor: 'orange' },
    { icon: 'fa-chart-bar', title: 'Profit & Loss - Test 1', tags: ['Difficult'], questions: 15, minutes: 15, marks: 30, attempts: '64K', iconColor: 'purple' }
  ];

  const faqs = [
    "What are sectional tests and how are they different from full length tests?",
    "How many questions are there in a sectional test?",
    "Do sectional tests follow the latest SSC CGL pattern?",
    "Can I create a custom sectional test?",
    "How do sectional tests help in improving my score?"
  ];

  return (
    <div className="sect-container">
      <QuizModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} questions={aiQuestions} title="Sectional Test" />
      <div className="container">
        
        {/* ===== 3-Column Layout ===== */}
        <div className="sect-layout">
          
          {/* --- Left Column: Filters --- */}
          <div className="sect-left-col">
            <div className="flt-filters">
              <div className="flt-filters-header">
                <h3>Filters</h3>
                <button className="btn-reset">Reset All</button>
              </div>
              
              <div className="flt-filter-group">
                <h4>Section <i className="fas fa-chevron-up"></i></h4>
                <label className="custom-checkbox">
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                  <span className="label-text">General Intelligence</span>
                  <span className="count">48</span>
                </label>
                <label className="custom-checkbox">
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                  <span className="label-text">General Awareness</span>
                  <span className="count">52</span>
                </label>
                <label className="custom-checkbox">
                  <input type="checkbox" defaultChecked />
                  <span className="checkmark"></span>
                  <span className="label-text">Quantitative Aptitude</span>
                  <span className="count">86</span>
                </label>
                <label className="custom-checkbox">
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                  <span className="label-text">English Language</span>
                  <span className="count">64</span>
                </label>
              </div>

              <div className="flt-filter-group">
                <h4>Topic <i className="fas fa-chevron-up"></i></h4>
                <input type="text" className="sect-search-input" placeholder="Search topic..." />
                <div className="sect-topic-list">
                  <label className="custom-checkbox mt-2">
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                    <span className="label-text">Number System</span>
                    <span className="count">12</span>
                  </label>
                  <label className="custom-checkbox">
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                    <span className="label-text">Simplification</span>
                    <span className="count">10</span>
                  </label>
                  <label className="custom-checkbox">
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                    <span className="label-text">Algebra</span>
                    <span className="count">14</span>
                  </label>
                  <label className="custom-checkbox">
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                    <span className="label-text">Geometry</span>
                    <span className="count">12</span>
                  </label>
                  <label className="custom-checkbox">
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                    <span className="label-text">Trigonometry</span>
                    <span className="count">8</span>
                  </label>
                  <button className="sect-view-more">View More <i className="fas fa-chevron-down"></i></button>
                </div>
              </div>

              <div className="flt-filter-group">
                <h4>Difficulty Level <i className="fas fa-chevron-up"></i></h4>
                <label className="custom-checkbox">
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                  <span className="label-text">Easy</span>
                  <span className="count">48</span>
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
                  <span className="count">51</span>
                </label>
              </div>

              <div className="flt-filter-group">
                <h4>Test Duration <i className="fas fa-chevron-up"></i></h4>
                <label className="custom-checkbox">
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                  <span className="label-text">5 - 10 Minutes</span>
                  <span className="count">62</span>
                </label>
                <label className="custom-checkbox">
                  <input type="checkbox" defaultChecked />
                  <span className="checkmark"></span>
                  <span className="label-text">10 - 20 Minutes</span>
                  <span className="count">88</span>
                </label>
                <label className="custom-checkbox">
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                  <span className="label-text">20+ Minutes</span>
                  <span className="count">45</span>
                </label>
              </div>

              <button className="btn-primary flt-apply-filters">Apply Filters</button>
            </div>

            {/* AI Recommendation Card */}
            <div className="sect-ai-card">
              <h4>Not Sure What to Practice?</h4>
              <div className="sect-ai-inner">
                <div className="sect-ai-icon"><i className="fas fa-crosshairs"></i></div>
                <p>Get AI-based topic recommendations based on your performance.</p>
              </div>
              <button className="sect-ai-btn">Get AI Suggestions <i className="fas fa-arrow-right"></i></button>
            </div>
          </div>

          {/* --- Middle Column: Main Content --- */}
          <div className="sect-main-list">
            <div className="flt-list-header">
              <h2>Sectional Tests (260)</h2>
              <div className="flt-sort">
                <span>Sort by: Popularity</span>
                <i className="fas fa-chevron-down"></i>
              </div>
            </div>

            {/* 4 Section Cards */}
            <div className="sect-four-cards">
              {sections.map((sec, i) => (
                <div className={`sect-top-card ${sec.active ? 'active' : ''}`} key={i}>
                  <div className={`sect-tc-icon ${sec.iconClass || ''}`}>
                    <i className={i===0?'fas fa-calculator':i===1?'fas fa-brain':i===2?'fas fa-font':'fas fa-globe'}></i>
                  </div>
                  <h4>{sec.name}</h4>
                  <span>{sec.tests} Tests</span>
                </div>
              ))}
            </div>

            <div className="sect-pop-header">
              <h3>Popular Quantitative Aptitude Sectional Tests</h3>
              <button className="sect-view-all">View All <i className="fas fa-arrow-right"></i></button>
            </div>

            {/* Test Cards List */}
            <div className="flt-cards-container">
              {popTests.map((test, index) => (
                <div className="flt-test-card sect-card" key={index}>
                  <div className={`sect-card-icon bg-${test.iconColor}`}>
                    <i className={`fas ${test.icon}`}></i>
                  </div>
                  <div className="flt-card-mid">
                    <h3 className="sect-card-title">{test.title}</h3>
                    <div className="flt-card-tags mb-2">
                      <span className={`flt-tag ${test.tags[0] === 'Easy' ? 'green' : test.tags[0] === 'Difficult' ? 'red' : 'blue'}`}>
                        {test.tags[0]}
                      </span>
                      <span className="sect-q-tag">{test.questions} Questions</span>
                    </div>
                    <div className="flt-card-meta">
                      <span><i className="far fa-clock"></i> {test.minutes} Minutes</span>
                      <span><i className="fas fa-bullseye"></i> {test.marks} Marks</span>
                      <span><i className="fas fa-users"></i> {test.attempts} Attempts</span>
                    </div>
                  </div>
                  <div className="flt-card-right">
                    <button 
                      className="btn-primary flt-start-btn" 
                      onClick={() => handleStartTest(test.title, test.tags[0])}
                      disabled={isGenerating}
                    >
                      {isGenerating ? 'Loading...' : 'Start Test'} <i className="fas fa-arrow-right"></i>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* --- Right Column: Widgets --- */}
          <div className="flt-widgets">
            {/* Performance Widget */}
            <div className="flt-widget-card">
              <div className="flt-widget-header no-border">
                <h3><i className="fas fa-chart-bar"></i> Your Sectional Performance</h3>
              </div>
              <div className="sect-perf-dropdown">Last 30 Days <i className="fas fa-chevron-down"></i></div>
              
              <div className="sect-perf-list">
                <div className="sect-perf-item">
                  <div className="sect-perf-icon bg-blue"><i className="fas fa-calculator"></i></div>
                  <div className="sect-perf-bar-area">
                    <div className="sect-perf-title"><span>Quantitative Aptitude</span> <strong>72%</strong></div>
                    <div className="sect-perf-bar"><div className="sect-pb-fill green" style={{width:'72%'}}></div></div>
                  </div>
                </div>
                <div className="sect-perf-item">
                  <div className="sect-perf-icon bg-red"><i className="fas fa-brain"></i></div>
                  <div className="sect-perf-bar-area">
                    <div className="sect-perf-title"><span>Reasoning</span> <strong>68%</strong></div>
                    <div className="sect-perf-bar"><div className="sect-pb-fill blue" style={{width:'68%'}}></div></div>
                  </div>
                </div>
                <div className="sect-perf-item">
                  <div className="sect-perf-icon bg-purple"><i className="fas fa-font"></i></div>
                  <div className="sect-perf-bar-area">
                    <div className="sect-perf-title"><span>English Language</span> <strong>76%</strong></div>
                    <div className="sect-perf-bar"><div className="sect-pb-fill purple" style={{width:'76%'}}></div></div>
                  </div>
                </div>
                <div className="sect-perf-item">
                  <div className="sect-perf-icon bg-orange"><i className="fas fa-globe"></i></div>
                  <div className="sect-perf-bar-area">
                    <div className="sect-perf-title"><span>General Awareness</span> <strong>61%</strong></div>
                    <div className="sect-perf-bar"><div className="sect-pb-fill orange" style={{width:'61%'}}></div></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Weak Topics Widget */}
            <div className="flt-widget-card">
              <div className="flt-widget-header no-border">
                <h3>Identify & Improve Weak Topics</h3>
              </div>
              <p className="sect-weak-sub">Based on your recent performance</p>
              
              <div className="sect-weak-list">
                <div className="sect-weak-item">
                  <div className="sect-weak-icon"><i className="fas fa-exclamation-triangle"></i></div>
                  <div className="sect-weak-info">
                    <strong>Geometry</strong>
                    <span>Accuracy: 42%</span>
                  </div>
                  <button className="btn-outline-sm">Practice Now</button>
                </div>
                <div className="sect-weak-item">
                  <div className="sect-weak-icon"><i className="fas fa-lock"></i></div>
                  <div className="sect-weak-info">
                    <strong>Modern History</strong>
                    <span>Accuracy: 48%</span>
                  </div>
                  <button className="btn-outline-sm">Practice Now</button>
                </div>
                <div className="sect-weak-item">
                  <div className="sect-weak-icon"><i className="fas fa-times-circle"></i></div>
                  <div className="sect-weak-info">
                    <strong>Error Detection</strong>
                    <span>Accuracy: 52%</span>
                  </div>
                  <button className="btn-outline-sm">Practice Now</button>
                </div>
              </div>
              <button className="sect-view-detailed">View Detailed Analysis <i className="fas fa-arrow-right"></i></button>
            </div>

            {/* Custom Test Widget */}
            <div className="sect-custom-banner">
              <div className="sect-custom-icon"><i className="fas fa-cog"></i></div>
              <div className="sect-custom-text">
                <h4>Custom Sectional Test</h4>
                <p>Create your own sectional test with custom topics, number of questions and difficulty level.</p>
                <button className="btn-outline-sm sect-custom-btn">Create Custom Test <i className="fas fa-arrow-right"></i></button>
              </div>
            </div>
          </div>
        </div>

        {/* ===== Bottom Sections ===== */}
        
        {/* Row 1: Why Sectional Tests & Testimonial */}
        <div className="sect-bottom-row">
          <div className="sect-why-box">
            <h2>Why Take Sectional Tests?</h2>
            <div className="sect-why-icons">
              <div className="swi-item">
                <div className="swi-icon purple"><i className="fas fa-crosshairs"></i></div>
                <span>Focus on Weak Areas</span>
              </div>
              <div className="swi-item">
                <div className="swi-icon green"><i className="fas fa-check-double"></i></div>
                <span>Improve Accuracy</span>
              </div>
              <div className="swi-item">
                <div className="swi-icon blue"><i className="fas fa-bolt"></i></div>
                <span>Build Speed & Confidence</span>
              </div>
              <div className="swi-item">
                <div className="swi-icon blue-light"><i className="fas fa-clipboard-check"></i></div>
                <span>Master Concepts</span>
              </div>
              <div className="swi-item">
                <div className="swi-icon orange"><i className="fas fa-chart-line"></i></div>
                <span>Track Progress Topic-wise</span>
              </div>
            </div>
          </div>

          <div className="sect-testimonial">
            <div className="st-text">
              "I used sectional tests to improve my weak topics. Within 2 months my accuracy went from 45% to 78% in Quant!"
            </div>
            <div className="st-author">
              <strong>— Rohit Kumar</strong>
              <span>Selected as Auditor (CGL 2023)</span>
            </div>
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Rohit" alt="Rohit Kumar" className="st-img" />
            <div className="st-postit">
              Practice<br/>Analyze<br/>Improve<br/>Repeat!
            </div>
          </div>
        </div>

        {/* Row 2: FAQs & Next Level CTA */}
        <div className="sect-bottom-row align-start">
          <div className="flt-faq-left" style={{ width: '100%', flex: 1.5 }}>
            <h2>Frequently Asked Questions</h2>
            <div className="flt-faq-accordion">
              {faqs.map((faq, index) => (
                <div className={`flt-faq-item ${openFaq === index ? 'active' : ''}`} key={index}>
                  <button className="flt-faq-question" onClick={() => toggleFaq(index)}>
                    <i className={`fas ${openFaq === index ? 'fa-minus' : 'fa-plus'}`}></i> {faq}
                  </button>
                  {openFaq === index && (
                    <div className="flt-faq-answer">
                      <p>Sectional tests focus on a specific subject or topic, allowing you to build foundational strength before attempting full length mock tests.</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="sect-next-cta" style={{ flex: 1 }}>
            <div className="snc-icon"><i className="fas fa-trophy"></i></div>
            <div className="snc-content">
              <h3>Take Your Preparation to the Next Level</h3>
              <p>Combine sectional tests with full length tests, PYQs and AI analysis for maximum improvement.</p>
              <button className="btn-primary">Explore Full Test Series <i className="fas fa-arrow-right"></i></button>
            </div>
          </div>
        </div>

      </div>
      
      {/* Pre-Footer Banner */}
      <div className="sect-pre-footer">
        <div className="container">
          <div className="spf-content">
            <div className="spf-text">
              <h2>Practice Smart. Improve Faster.</h2>
              <p>Join thousands of SSC CGL aspirants who are mastering every section with CGLPrep AI.</p>
            </div>
            <button className="btn-yellow">Start Practicing Now <i className="fas fa-arrow-right"></i></button>
          </div>
          {/* Silhouettes can go here, using handwritten text for now */}
          <div className="spf-handwritten">
            <span>Some</span>
            <span>Aspirants</span>
            <span>Bigger Dreams</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionalTests;
