import React, { useState } from 'react';
import QuizModal from '../QuizModal';

const CustomTests = () => {
  const [openSubject, setOpenSubject] = useState('gi'); // 'gi' is general intelligence
  
  const [isGenerating, setIsGenerating] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [aiQuestions, setAiQuestions] = useState([]);
  
  // Configuration State
  const [numQuestions, setNumQuestions] = useState(50);
  const [difficulty, setDifficulty] = useState('Moderate');
  const [timePerQuestion, setTimePerQuestion] = useState(60); // seconds
  const [testMode, setTestMode] = useState('Timed Test');
  const [shuffleQuestions, setShuffleQuestions] = useState(true);
  const [negativeMarking, setNegativeMarking] = useState(true);
  const [showSolutionImmediately, setShowSolutionImmediately] = useState(false);
  const [showTopicAnalysis, setShowTopicAnalysis] = useState(true);
  const [includePyq, setIncludePyq] = useState(true);

  const handleGenerateTest = async () => {
    setIsGenerating(true);
    try {
      const response = await fetch('http://localhost:5000/api/ai/generate-quiz', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          topic: 'Custom Mock Test',
          difficulty: difficulty,
          count: numQuestions === 'Custom' ? 10 : parseInt(numQuestions, 10)
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

  const toggleSubject = (id) => {
    setOpenSubject(openSubject === id ? null : id);
  };

  return (
    <div className="sect-container cust-container">
      <div className="container">
        
        {/* ===== 3-Column Layout ===== */}
        <div className="cust-layout">
          
          {/* --- Left Column: Selection --- */}
          <div className="cust-col-left">
            
            <div className="cust-card">
              <div className="cust-card-header">
                <h3>1. Select Subjects</h3>
                <button className="btn-reset">Reset</button>
              </div>
              <div className="cust-subj-list">
                <label className="cust-checkbox-item">
                  <input type="checkbox" defaultChecked />
                  <span className="cust-chkbox"></span>
                  <div className="cust-subj-icon purple-light"><i className="fas fa-brain"></i></div>
                  <span className="cust-subj-name">General Intelligence</span>
                </label>
                <label className="cust-checkbox-item">
                  <input type="checkbox" defaultChecked />
                  <span className="cust-chkbox"></span>
                  <div className="cust-subj-icon green-light"><i className="fas fa-globe"></i></div>
                  <span className="cust-subj-name">General Awareness</span>
                </label>
                <label className="cust-checkbox-item">
                  <input type="checkbox" defaultChecked />
                  <span className="cust-chkbox"></span>
                  <div className="cust-subj-icon blue-light"><i className="fas fa-calculator"></i></div>
                  <span className="cust-subj-name">Quantitative Aptitude</span>
                </label>
                <label className="cust-checkbox-item">
                  <input type="checkbox" />
                  <span className="cust-chkbox"></span>
                  <div className="cust-subj-icon red-light"><i className="fas fa-font"></i></div>
                  <span className="cust-subj-name">English Language</span>
                </label>
              </div>
            </div>

            <div className="cust-card" style={{ marginTop: '20px' }}>
              <div className="cust-card-header">
                <h3>2. Select Topics</h3>
              </div>
              
              <div className="cust-search">
                <i className="fas fa-search"></i>
                <input type="text" placeholder="Search topics..." />
              </div>

              <div className="cust-accordion">
                {/* General Intelligence */}
                <div className="cust-acc-item">
                  <div className={`cust-acc-header ${openSubject === 'gi' ? 'active' : ''}`} onClick={() => toggleSubject('gi')}>
                    <div className="cust-subj-icon purple-light"><i className="fas fa-brain"></i></div>
                    <span className="cust-acc-title">General Intelligence</span>
                    <span className="cust-acc-count">(8/12)</span>
                    <i className="fas fa-chevron-down cust-acc-arrow"></i>
                  </div>
                  {openSubject === 'gi' && (
                    <div className="cust-acc-body">
                      <label className="cust-sm-checkbox"><input type="checkbox" defaultChecked /><span className="cust-chkbox"></span> Number Series</label>
                      <label className="cust-sm-checkbox"><input type="checkbox" defaultChecked /><span className="cust-chkbox"></span> Coding Decoding</label>
                      <label className="cust-sm-checkbox"><input type="checkbox" /><span className="cust-chkbox"></span> Blood Relations</label>
                      <label className="cust-sm-checkbox"><input type="checkbox" defaultChecked /><span className="cust-chkbox"></span> Direction & Distance</label>
                      <label className="cust-sm-checkbox"><input type="checkbox" /><span className="cust-chkbox"></span> Syllogism</label>
                      <label className="cust-sm-checkbox"><input type="checkbox" /><span className="cust-chkbox"></span> Seating Arrangement</label>
                      <div className="cust-show-more">Show More <i className="fas fa-chevron-down"></i></div>
                    </div>
                  )}
                </div>

                {/* General Awareness */}
                <div className="cust-acc-item">
                  <div className={`cust-acc-header ${openSubject === 'ga' ? 'active' : ''}`} onClick={() => toggleSubject('ga')}>
                    <div className="cust-subj-icon green-light"><i className="fas fa-globe"></i></div>
                    <span className="cust-acc-title">General Awareness</span>
                    <span className="cust-acc-count">(3/15)</span>
                    <i className="fas fa-chevron-down cust-acc-arrow"></i>
                  </div>
                  {openSubject === 'ga' && (
                    <div className="cust-acc-body">
                      <label className="cust-sm-checkbox"><input type="checkbox" defaultChecked /><span className="cust-chkbox"></span> History</label>
                      <label className="cust-sm-checkbox"><input type="checkbox" defaultChecked /><span className="cust-chkbox"></span> Polity</label>
                      <label className="cust-sm-checkbox"><input type="checkbox" /><span className="cust-chkbox"></span> Geography</label>
                      <label className="cust-sm-checkbox"><input type="checkbox" /><span className="cust-chkbox"></span> Economy</label>
                      <label className="cust-sm-checkbox"><input type="checkbox" /><span className="cust-chkbox"></span> Science</label>
                      <div className="cust-show-more">Show More <i className="fas fa-chevron-down"></i></div>
                    </div>
                  )}
                </div>

                {/* Quant */}
                <div className="cust-acc-item">
                  <div className="cust-acc-header" onClick={() => toggleSubject('qa')}>
                    <div className="cust-subj-icon blue-light"><i className="fas fa-calculator"></i></div>
                    <span className="cust-acc-title">Quantitative Aptitude</span>
                    <i className="fas fa-chevron-down cust-acc-arrow"></i>
                  </div>
                </div>

                {/* English */}
                <div className="cust-acc-item">
                  <div className="cust-acc-header" onClick={() => toggleSubject('eng')}>
                    <div className="cust-subj-icon red-light"><i className="fas fa-font"></i></div>
                    <span className="cust-acc-title">English Language</span>
                    <i className="fas fa-chevron-down cust-acc-arrow"></i>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* --- Middle Column: Configuration --- */}
          <div className="cust-col-mid">
            <div className="cust-card">
              <h2 className="cust-card-title">3. Configure Your Test</h2>

              {/* Stats Row */}
              <div className="cust-stats-row">
                <div className="cust-stat-box">
                  <div className="cust-stat-icon green-light"><i className="fas fa-layer-group"></i></div>
                  <span className="cust-stat-label">Selected Subjects</span>
                  <strong className="cust-stat-val">3</strong>
                </div>
                <div className="cust-stat-box">
                  <div className="cust-stat-icon blue-light"><i className="fas fa-layer-group"></i></div>
                  <span className="cust-stat-label">Selected Topics</span>
                  <strong className="cust-stat-val">8</strong>
                </div>
                <div className="cust-stat-box">
                  <div className="cust-stat-icon purple-light"><i className="fas fa-question-circle"></i></div>
                  <span className="cust-stat-label">Total Questions</span>
                  <strong className="cust-stat-val">{numQuestions}</strong>
                </div>
                <div className="cust-stat-box">
                  <div className="cust-stat-icon orange-light"><i className="far fa-clock"></i></div>
                  <span className="cust-stat-label">Total Duration</span>
                  <strong className="cust-stat-val">{testMode === 'Practice Mode' ? 'None' : numQuestions === 'Custom' ? 'Custom' : `${(numQuestions * timePerQuestion) / 60} Min`}</strong>
                </div>
              </div>

              <div className="cust-form-group">
                <label className="cust-form-label">Number of Questions</label>
                <div className="cust-chips-grid">
                  {[10, 25, 50, 75, 100, 'Custom'].map(num => (
                    <div 
                      key={num} 
                      className={`cust-chip ${numQuestions === num ? 'active' : ''}`}
                      onClick={() => setNumQuestions(num)}
                    >
                      {num}
                    </div>
                  ))}
                </div>
              </div>

              <div className="cust-form-group">
                <label className="cust-form-label">Difficulty Level <i className="fas fa-info-circle cust-info"></i></label>
                <div className="cust-chips-grid diff-grid">
                  {[
                    { label: 'Easy', icon: 'fa-check-circle', color: 'text-green' },
                    { label: 'Moderate', icon: 'fa-check-square', color: 'text-blue' },
                    { label: 'Difficult', icon: 'fa-exclamation-triangle', color: 'text-red' },
                    { label: 'Mixed', icon: 'fa-adjust', color: 'text-orange' }
                  ].map(diff => (
                    <div 
                      key={diff.label}
                      className={`cust-chip with-icon ${difficulty === diff.label ? 'active' : ''}`}
                      onClick={() => setDifficulty(diff.label)}
                    >
                      <i className={`fas ${diff.icon} ${diff.color}`}></i> {diff.label}
                    </div>
                  ))}
                </div>
              </div>

              <div className="cust-form-group">
                <label className="cust-form-label">Time per Question (Optional)</label>
                <div className="cust-chips-grid time-grid">
                  <div 
                    className={`cust-chip ${timePerQuestion === 60 ? 'active with-icon' : ''}`} 
                    style={{ flexDirection: 'column', alignItems: 'center', padding: '12px' }}
                    onClick={() => setTimePerQuestion(60)}
                  >
                    <div>{timePerQuestion === 60 && <i className="fas fa-check-circle text-blue"></i>} <strong>Default</strong></div>
                    <span style={{ fontSize: '10px', color: timePerQuestion === 60 ? 'var(--blue-600)' : 'inherit' }}>(As per exam)</span>
                  </div>
                  <div className={`cust-chip ${timePerQuestion === 60 ? 'active' : ''}`} style={{ justifyContent: 'center' }} onClick={() => setTimePerQuestion(60)}>1 Minute</div>
                  <div className="cust-chip" style={{ flexDirection: 'column', justifyContent: 'center', padding: 0 }}>
                    <div className={timePerQuestion === 90 ? 'active-sub' : ''} style={{padding: '8px', textAlign: 'center', borderBottom: '1px solid var(--gray-200)', background: timePerQuestion === 90 ? '#eff6ff' : 'transparent', color: timePerQuestion === 90 ? '#2563eb' : 'inherit', cursor: 'pointer'}} onClick={() => setTimePerQuestion(90)}>1.5 Minutes</div>
                    <div className={timePerQuestion === 120 ? 'active-sub' : ''} style={{padding: '8px', textAlign: 'center', background: timePerQuestion === 120 ? '#eff6ff' : 'transparent', color: timePerQuestion === 120 ? '#2563eb' : 'inherit', cursor: 'pointer'}} onClick={() => setTimePerQuestion(120)}>2 Minutes</div>
                  </div>
                  <div className="cust-chip" style={{ flexDirection: 'column', justifyContent: 'center', textAlign: 'center' }}>
                    <i className="fas fa-info-circle text-gray-400"></i>
                    <span style={{ fontSize: '10px' }}>SSC CGL Exam Pattern:<br/>Avg. 60 sec per question</span>
                  </div>
                </div>
              </div>

              <div className="cust-form-group">
                <label className="cust-form-label">Test Mode</label>
                <div className="cust-mode-grid">
                  <label className={`cust-mode-card ${testMode === 'Timed Test' ? 'active' : ''}`}>
                    <input type="radio" name="testMode" checked={testMode === 'Timed Test'} onChange={() => setTestMode('Timed Test')} />
                    <div className="cust-mode-icon blue-light"><i className="far fa-clock"></i></div>
                    <span className="cust-mode-title">Timed Test</span>
                  </label>
                  <label className={`cust-mode-card ${testMode === 'Practice Mode' ? 'active' : ''}`}>
                    <input type="radio" name="testMode" checked={testMode === 'Practice Mode'} onChange={() => setTestMode('Practice Mode')} />
                    <div className="cust-mode-icon"><i className="fas fa-file-alt"></i></div>
                    <div className="cust-mode-text">
                      <span className="cust-mode-title">Practice Mode</span>
                      <span className="cust-mode-desc">(No time limit)</span>
                    </div>
                  </label>
                </div>
              </div>

              <div className="cust-form-group">
                <label className="cust-form-label">Additional Options</label>
                <div className="cust-opts-grid">
                  <label className="cust-sm-checkbox">
                    <input type="checkbox" checked={shuffleQuestions} onChange={(e) => setShuffleQuestions(e.target.checked)} />
                    <span className="cust-chkbox"></span> Shuffle Questions
                  </label>
                  <label className="cust-sm-checkbox">
                    <input type="checkbox" checked={negativeMarking} onChange={(e) => setNegativeMarking(e.target.checked)} />
                    <span className="cust-chkbox"></span> Negative Marking <span className="cust-opt-sub">(As per SSC CGL)</span>
                  </label>
                  <label className="cust-sm-checkbox">
                    <input type="checkbox" checked={showSolutionImmediately} onChange={(e) => setShowSolutionImmediately(e.target.checked)} />
                    <span className="cust-chkbox"></span> Show Solution Immediately
                  </label>
                  <label className="cust-sm-checkbox">
                    <input type="checkbox" checked={showTopicAnalysis} onChange={(e) => setShowTopicAnalysis(e.target.checked)} />
                    <span className="cust-chkbox"></span> Show Topic-wise Analysis
                  </label>
                  <label className="cust-sm-checkbox">
                    <input type="checkbox" checked={includePyq} onChange={(e) => setIncludePyq(e.target.checked)} />
                    <span className="cust-chkbox"></span> Include Previous Year Questions
                  </label>
                </div>
              </div>

              <button 
                className="btn-primary cust-gen-btn" 
                onClick={handleGenerateTest}
                disabled={isGenerating}
              >
                {isGenerating ? (
                  <><i className="fas fa-spinner fa-spin"></i> Generating...</>
                ) : (
                  <>Generate Custom Test <i className="fas fa-arrow-right"></i></>
                )}
              </button>

            </div>
          </div>

          {/* --- Right Column: Preview --- */}
          <div className="cust-col-right">
            
            <div className="cust-card cust-preview-card">
              <div className="cust-card-header" style={{ marginBottom: '16px', borderBottom: 'none', paddingBottom: 0 }}>
                <h3>Test Preview</h3>
                <span className="cust-edit-link">Edit</span>
              </div>
              <div className="cust-preview-list">
                <div className="cp-item">
                  <div className="cp-icon red-light"><i className="fas fa-layer-group"></i></div>
                  <div className="cp-content">
                    <span className="cp-label">Subjects</span>
                    <ul className="cp-subj-list">
                      <li><i className="fas fa-brain text-purple"></i> General Intelligence,</li>
                      <li><i className="fas fa-globe text-green"></i> General Awareness,</li>
                      <li><i className="fas fa-calculator text-blue"></i> Quantitative Aptitude</li>
                    </ul>
                  </div>
                </div>
                <div className="cp-item">
                  <div className="cp-icon green-light"><i className="fas fa-book-open"></i></div>
                  <div className="cp-content">
                    <span className="cp-label">Topics</span>
                    <div className="cp-val">8 topics selected <span className="cp-link">View Topics <i className="fas fa-arrow-right"></i></span></div>
                  </div>
                </div>
                <div className="cp-item">
                  <div className="cp-icon blue-light"><i className="fas fa-question-circle"></i></div>
                  <div className="cp-content">
                    <span className="cp-label">Questions</span>
                    <div className="cp-val"><strong>{numQuestions} Questions</strong></div>
                  </div>
                </div>
                <div className="cp-item">
                  <div className="cp-icon orange-light"><i className="fas fa-chart-line"></i></div>
                  <div className="cp-content">
                    <span className="cp-label">Difficulty</span>
                    <div className="cp-val"><span className="flt-tag blue-outline">{difficulty}</span></div>
                  </div>
                </div>
                <div className="cp-item">
                  <div className="cp-icon blue-light"><i className="far fa-clock"></i></div>
                  <div className="cp-content">
                    <span className="cp-label">Duration</span>
                    <div className="cp-val"><strong>{testMode === 'Practice Mode' ? 'No Limit' : numQuestions === 'Custom' ? 'Custom' : `${(numQuestions * timePerQuestion) / 60} Minutes`}</strong> <span className="cp-sub">({timePerQuestion / 60} min per question)</span></div>
                  </div>
                </div>
                <div className="cp-item">
                  <div className="cp-icon red-light"><i className="fas fa-minus-circle"></i></div>
                  <div className="cp-content">
                    <span className="cp-label">Negative Marking</span>
                    <div className="cp-val"><strong>{negativeMarking ? 'Yes' : 'No'}</strong> {negativeMarking && <span className="cp-sub">(As per SSC CGL)</span>}</div>
                  </div>
                </div>
                <div className="cp-item">
                  <div className="cp-icon green-light"><i className="fas fa-laptop"></i></div>
                  <div className="cp-content">
                    <span className="cp-label">Mode</span>
                    <div className="cp-val"><strong>{testMode}</strong></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="cust-ai-card">
              <div className="cai-header">
                <div className="cai-icon"><i className="fas fa-lightbulb"></i></div>
                <h3>AI Recommendation</h3>
                <span className="flt-tag pink" style={{ fontSize: '10px' }}>Beta</span>
              </div>
              <p className="cai-desc">Based on your recent performance, we suggest focusing more on:</p>
              <ul className="cai-list">
                <li><i className="fas fa-arrow-circle-right text-purple"></i> Mixed topics of General Awareness</li>
                <li><i className="fas fa-arrow-circle-right text-purple"></i> Practice more questions on Number Series</li>
                <li><i className="fas fa-arrow-circle-right text-purple"></i> Add some previous year questions for better exam readiness</li>
              </ul>
              <button className="btn-outline-sm cai-btn">Apply These Suggestions</button>
            </div>

            <div className="cust-save-card">
              <div className="csc-icon"><i className="fas fa-bookmark"></i></div>
              <div className="csc-content">
                <h4>Save This Test</h4>
                <p>Save your test configuration for future practice.</p>
                <button className="btn-outline-sm csc-btn">Save Test Setup</button>
              </div>
            </div>

          </div>

        </div>

        {/* ===== Popular Templates ===== */}
        <div className="cust-templates-sec">
          <div className="ct-header">
            <div>
              <h2>Popular Custom Test Templates</h2>
              <p>Use ready-made templates or create your own.</p>
            </div>
            <span className="sect-view-more">View All Templates <i className="fas fa-arrow-right"></i></span>
          </div>

          <div className="ct-grid">
            <div className="ct-card">
              <div className="ct-icon red-light"><i className="fas fa-bullseye"></i></div>
              <h4>Weak Areas Practice</h4>
              <p>Focus on your weak topics</p>
              <div className="ct-meta"><span><i className="far fa-clock"></i> 50 Questions</span> | <span>60 Min</span></div>
              <button className="btn-outline-sm ct-btn">Use Template</button>
            </div>
            <div className="ct-card">
              <div className="ct-icon green-light"><i className="fas fa-globe"></i></div>
              <h4>GK Booster Test</h4>
              <p>Current affairs + Static GK</p>
              <div className="ct-meta"><span><i className="far fa-clock"></i> 50 Questions</span> | <span>60 Min</span></div>
              <button className="btn-outline-sm ct-btn">Use Template</button>
            </div>
            <div className="ct-card">
              <div className="ct-icon blue-light"><i className="fas fa-calculator"></i></div>
              <h4>Maths Practice Test</h4>
              <p>Quantitative Aptitude Focus</p>
              <div className="ct-meta"><span><i className="far fa-clock"></i> 50 Questions</span> | <span>60 Min</span></div>
              <button className="btn-outline-sm ct-btn">Use Template</button>
            </div>
            <div className="ct-card">
              <div className="ct-icon purple-light"><i className="fas fa-brain"></i></div>
              <h4>Reasoning Special</h4>
              <p>All key reasoning topics</p>
              <div className="ct-meta"><span><i className="far fa-clock"></i> 50 Questions</span> | <span>60 Min</span></div>
              <button className="btn-outline-sm ct-btn">Use Template</button>
            </div>
            <div className="ct-card">
              <div className="ct-icon blue-light"><i className="fas fa-layer-group"></i></div>
              <h4>Mixed Practice Test</h4>
              <p>Balanced mix of all subjects</p>
              <div className="ct-meta"><span><i className="far fa-clock"></i> 50 Questions</span> | <span>60 Min</span></div>
              <button className="btn-outline-sm ct-btn">Use Template</button>
            </div>
          </div>
        </div>

      </div>
      
      {/* Pre-Footer Banner */}
      <div className="sect-pre-footer pyq-pre-footer" style={{ background: '#0f172a' }}>
        <div className="container">
          <div className="spf-content" style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <div className="spf-text">
              <h2>Your Success. Your Strategy.</h2>
              <p style={{ color: '#94a3b8' }}>Create custom tests, practice smart and get closer to your CGL dream.</p>
            </div>
            <button className="btn-yellow">Start Your Custom Test <i className="fas fa-arrow-right"></i></button>
          </div>
          <div className="spf-handwritten">
            <span>Same</span>
            <span>Aspirants</span>
            <span>Bigger Dreams</span>
          </div>
        </div>
      </div>

      <QuizModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        title="Custom AI Mock Test" 
        questions={aiQuestions} 
        config={{
          timePerQuestion,
          testMode,
          negativeMarking,
          showSolutionImmediately,
          shuffleQuestions
        }}
      />
    </div>
  );
};

export default CustomTests;
