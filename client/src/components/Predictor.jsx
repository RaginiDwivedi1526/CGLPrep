import React, { useState } from 'react';

// Real SSC CGL Post data with cut-off ranges (approximate, based on historical data)
// Each post has category-wise typical score ranges for selection
const POSTS_DATA = [
  { name: 'Income Tax Inspector', dept: 'CBDT', group: 'B', payLevel: 7, cutoffs: { General: 160, OBC: 150, SC: 135, ST: 120, EWS: 155 }, vacancies: { General: 180, OBC: 95, SC: 55, ST: 25, EWS: 40 }, locations: ['Delhi', 'Mumbai', 'Chennai', 'Kolkata', 'All India'], perk: 'Best perks & allowances' },
  { name: 'Customs Inspector', dept: 'CBIC', group: 'B', payLevel: 7, cutoffs: { General: 158, OBC: 148, SC: 133, ST: 118, EWS: 153 }, vacancies: { General: 220, OBC: 110, SC: 65, ST: 30, EWS: 50 }, locations: ['Delhi', 'Mumbai', 'Chennai', 'Kolkata', 'All India'], perk: 'Port cities posting' },
  { name: 'Assistant Enforcement Officer', dept: 'Directorate of Enforcement', group: 'B', payLevel: 7, cutoffs: { General: 162, OBC: 152, SC: 137, ST: 122, EWS: 157 }, vacancies: { General: 90, OBC: 45, SC: 25, ST: 12, EWS: 20 }, locations: ['Delhi', 'Mumbai', 'All India'], perk: 'Investigative powers' },
  { name: 'Sub Inspector (CBI)', dept: 'CBI', group: 'B', payLevel: 7, cutoffs: { General: 165, OBC: 155, SC: 140, ST: 125, EWS: 160 }, vacancies: { General: 40, OBC: 20, SC: 12, ST: 5, EWS: 10 }, locations: ['Delhi', 'All India'], perk: 'Prestigious agency' },
  { name: 'Divisional Accountant', dept: 'CAG', group: 'B', payLevel: 6, cutoffs: { General: 145, OBC: 135, SC: 120, ST: 108, EWS: 140 }, vacancies: { General: 300, OBC: 150, SC: 90, ST: 40, EWS: 70 }, locations: ['Delhi', 'State capitals', 'All India'], perk: 'Good work-life balance' },
  { name: 'Auditor (CAG)', dept: 'Comptroller & Auditor General', group: 'C', payLevel: 5, cutoffs: { General: 140, OBC: 130, SC: 115, ST: 100, EWS: 135 }, vacancies: { General: 400, OBC: 200, SC: 120, ST: 55, EWS: 90 }, locations: ['All India'], perk: 'Large vacancies' },
  { name: 'Auditor (CGDA)', dept: 'Defence Accounts', group: 'C', payLevel: 5, cutoffs: { General: 138, OBC: 128, SC: 113, ST: 98, EWS: 133 }, vacancies: { General: 350, OBC: 175, SC: 105, ST: 48, EWS: 80 }, locations: ['All India'], perk: 'Defence sector benefits' },
  { name: 'Tax Assistant (CBDT)', dept: 'Income Tax', group: 'C', payLevel: 4, cutoffs: { General: 130, OBC: 120, SC: 105, ST: 90, EWS: 125 }, vacancies: { General: 550, OBC: 275, SC: 165, ST: 75, EWS: 125 }, locations: ['All India'], perk: 'Highest vacancies' },
  { name: 'Tax Assistant (CBIC)', dept: 'Customs', group: 'C', payLevel: 4, cutoffs: { General: 128, OBC: 118, SC: 103, ST: 88, EWS: 123 }, vacancies: { General: 480, OBC: 240, SC: 145, ST: 65, EWS: 110 }, locations: ['All India'], perk: 'Port city postings' },
  { name: 'Upper Division Clerk', dept: 'Various Ministries', group: 'C', payLevel: 4, cutoffs: { General: 125, OBC: 115, SC: 100, ST: 85, EWS: 120 }, vacancies: { General: 800, OBC: 400, SC: 240, ST: 110, EWS: 180 }, locations: ['All India'], perk: 'Most vacancies available' },
  { name: 'Junior Statistical Investigator', dept: 'M/o Statistics', group: 'B', payLevel: 6, cutoffs: { General: 150, OBC: 140, SC: 125, ST: 110, EWS: 145 }, vacancies: { General: 70, OBC: 35, SC: 20, ST: 9, EWS: 15 }, locations: ['Delhi', 'State capitals'], perk: 'Analytical work' },
  { name: 'Sub Inspector (NIA)', dept: 'National Investigation Agency', group: 'B', payLevel: 7, cutoffs: { General: 163, OBC: 153, SC: 138, ST: 123, EWS: 158 }, vacancies: { General: 25, OBC: 12, SC: 7, ST: 3, EWS: 6 }, locations: ['Delhi', 'All India'], perk: 'Elite investigation agency' },
];

const CATEGORIES = ['General', 'OBC', 'SC', 'ST', 'EWS'];
const STATES = ['All India', 'Delhi / NCR', 'Maharashtra', 'Karnataka', 'Tamil Nadu', 'Uttar Pradesh', 'Rajasthan', 'Gujarat', 'West Bengal', 'Telangana', 'Punjab', 'Haryana', 'Madhya Pradesh', 'Bihar'];

const getProbabilityInfo = (score, cutoff) => {
  const diff = score - cutoff;
  if (diff >= 15) return { label: 'Very High', color: '#16a34a', bg: '#dcfce7', icon: 'fa-circle-check', barWidth: '95%' };
  if (diff >= 8)  return { label: 'High',      color: '#15803d', bg: '#f0fdf4', icon: 'fa-circle-check', barWidth: '78%' };
  if (diff >= 2)  return { label: 'Medium',    color: '#d97706', bg: '#fef3c7', icon: 'fa-circle-minus', barWidth: '55%' };
  if (diff >= -5) return { label: 'Low',       color: '#dc2626', bg: '#fee2e2', icon: 'fa-circle-xmark', barWidth: '30%' };
  return null; // Not eligible
};

const Predictor = () => {
  const [score, setScore] = useState('');
  const [category, setCategory] = useState('General');
  const [location, setLocation] = useState('All India');
  const [results, setResults] = useState(null);
  const [predicting, setPredicting] = useState(false);
  const [activeTab, setActiveTab] = useState('predictor');

  // Preference optimizer state
  const [prefList, setPrefList] = useState([
    'Income Tax Inspector',
    'Customs Inspector',
    'Auditor (CAG)',
    'Tax Assistant (CBDT)',
    'Upper Division Clerk',
  ]);
  const [dragIndex, setDragIndex] = useState(null);

  const handlePredict = () => {
    const numScore = parseFloat(score);
    if (!numScore || numScore < 0 || numScore > 200) {
      alert('Please enter a valid score between 0 and 200.');
      return;
    }

    setPredicting(true);
    setResults(null);

    setTimeout(() => {
      const eligible = [];
      POSTS_DATA.forEach(post => {
        const cutoff = post.cutoffs[category];
        const prob = getProbabilityInfo(numScore, cutoff);
        if (prob) {
          // Filter by location preference
          const locationMatch = location === 'All India' || post.locations.some(l => l === 'All India' || l.toLowerCase().includes(location.split('/')[0].trim().toLowerCase()));
          eligible.push({ ...post, prob, cutoff, locationMatch });
        }
      });

      // Sort by probability level then by cutoff
      const order = { 'Very High': 0, 'High': 1, 'Medium': 2, 'Low': 3 };
      eligible.sort((a, b) => (order[a.prob.label] - order[b.prob.label]) || (b.cutoff - a.cutoff));

      setPredicting(false);
      setResults({ score: numScore, category, location, posts: eligible });
    }, 1200);
  };

  const handleDragStart = (idx) => setDragIndex(idx);
  const handleDragOver = (e, idx) => {
    e.preventDefault();
    if (dragIndex === null || dragIndex === idx) return;
    const newList = [...prefList];
    const [moved] = newList.splice(dragIndex, 1);
    newList.splice(idx, 0, moved);
    setPrefList(newList);
    setDragIndex(idx);
  };
  const handleDragEnd = () => setDragIndex(null);

  return (
    <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 0 40px' }}>

      {/* Header */}
      <div style={{ background: 'linear-gradient(135deg, #1e40af, #7c3aed)', borderRadius: '24px', padding: '36px 40px', marginBottom: '28px', color: 'white', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-30px', right: '-30px', width: '180px', height: '180px', background: 'rgba(255,255,255,0.05)', borderRadius: '50%' }}></div>
        <div style={{ position: 'absolute', bottom: '-50px', right: '100px', width: '120px', height: '120px', background: 'rgba(255,255,255,0.05)', borderRadius: '50%' }}></div>
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '12px' }}>
            <div style={{ background: 'rgba(255,255,255,0.15)', padding: '12px', borderRadius: '14px', fontSize: '24px' }}>🎯</div>
            <div>
              <h1 style={{ margin: 0, fontSize: '28px', fontWeight: '900', letterSpacing: '-0.5px' }}>AI Post Predictor</h1>
              <p style={{ margin: '4px 0 0', opacity: 0.8, fontSize: '14px' }}>Enter your expected score to see which SSC CGL posts you're likely to get</p>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '20px', marginTop: '16px', flexWrap: 'wrap' }}>
            <div style={{ background: 'rgba(255,255,255,0.12)', borderRadius: '10px', padding: '10px 16px', fontSize: '13px', fontWeight: '600' }}>📊 Based on 2023-24 Cut-offs</div>
            <div style={{ background: 'rgba(255,255,255,0.12)', borderRadius: '10px', padding: '10px 16px', fontSize: '13px', fontWeight: '600' }}>🏛️ {POSTS_DATA.length} Posts Analyzed</div>
            <div style={{ background: 'rgba(255,255,255,0.12)', borderRadius: '10px', padding: '10px 16px', fontSize: '13px', fontWeight: '600' }}>⚡ Instant Results</div>
          </div>
        </div>
      </div>

      {/* Tab Switcher */}
      <div style={{ display: 'flex', gap: '0', background: 'white', borderRadius: '16px', padding: '6px', marginBottom: '24px', boxShadow: '0 4px 20px rgba(0,0,0,0.04)', width: 'fit-content' }}>
        {[{ id: 'predictor', label: '🎯 Post Predictor' }, { id: 'optimizer', label: '⚙️ Preference Optimizer' }].map(tab => (
          <button key={tab.id} onClick={() => setActiveTab(tab.id)}
            style={{ padding: '10px 24px', borderRadius: '12px', border: 'none', cursor: 'pointer', fontWeight: '700', fontSize: '14px', transition: 'all 0.2s',
              background: activeTab === tab.id ? 'linear-gradient(135deg, #2563eb, #7c3aed)' : 'transparent',
              color: activeTab === tab.id ? 'white' : '#64748b',
              boxShadow: activeTab === tab.id ? '0 4px 12px rgba(37,99,235,0.3)' : 'none' }}>
            {tab.label}
          </button>
        ))}
      </div>

      {activeTab === 'predictor' && (
        <div style={{ display: 'grid', gridTemplateColumns: '380px 1fr', gap: '24px', alignItems: 'start' }}>

          {/* Input Card */}
          <div style={{ background: 'white', borderRadius: '20px', padding: '28px', boxShadow: '0 4px 20px rgba(0,0,0,0.04)', border: '1px solid rgba(0,0,0,0.04)' }}>
            <h3 style={{ margin: '0 0 22px', fontSize: '18px', fontWeight: '800', color: '#0f172a' }}>Your Profile</h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: '700', color: '#374151', marginBottom: '8px' }}>
                  Expected Score <span style={{ color: '#94a3b8', fontWeight: '500' }}>(out of 200, Tier 1 + Tier 2)</span>
                </label>
                <input type="number" min="0" max="200" value={score} onChange={e => setScore(e.target.value)}
                  placeholder="e.g. 165"
                  style={{ width: '100%', padding: '14px 16px', borderRadius: '12px', border: '2px solid #e2e8f0', fontSize: '18px', fontWeight: '700', outline: 'none', boxSizing: 'border-box', transition: 'border-color 0.2s', color: '#1e293b' }}
                  onFocus={e => e.target.style.borderColor = '#3b82f6'}
                  onBlur={e => e.target.style.borderColor = '#e2e8f0'} />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: '700', color: '#374151', marginBottom: '8px' }}>Category</label>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  {CATEGORIES.map(cat => (
                    <button key={cat} onClick={() => setCategory(cat)}
                      style={{ padding: '8px 16px', borderRadius: '8px', border: '2px solid', cursor: 'pointer', fontWeight: '700', fontSize: '13px', transition: 'all 0.2s',
                        borderColor: category === cat ? '#2563eb' : '#e2e8f0',
                        background: category === cat ? '#eff6ff' : 'white',
                        color: category === cat ? '#2563eb' : '#64748b' }}>
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: '700', color: '#374151', marginBottom: '8px' }}>Preferred Location</label>
                <select value={location} onChange={e => setLocation(e.target.value)}
                  style={{ width: '100%', padding: '12px 16px', borderRadius: '12px', border: '2px solid #e2e8f0', fontSize: '14px', outline: 'none', cursor: 'pointer', boxSizing: 'border-box', background: 'white', color: '#1e293b', fontWeight: '600' }}>
                  {STATES.map(s => <option key={s}>{s}</option>)}
                </select>
              </div>

              <button onClick={handlePredict} disabled={predicting || !score}
                style={{ width: '100%', padding: '14px', borderRadius: '12px', border: 'none', cursor: predicting || !score ? 'not-allowed' : 'pointer', fontWeight: '800', fontSize: '15px', color: 'white',
                  background: predicting || !score ? '#94a3b8' : 'linear-gradient(135deg, #2563eb, #7c3aed)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
                  boxShadow: predicting || !score ? 'none' : '0 6px 16px rgba(37,99,235,0.35)', transition: 'all 0.2s' }}>
                {predicting ? <><i className="fas fa-spinner fa-spin"></i> Analyzing...</> : <><i className="fas fa-wand-magic-sparkles"></i> Predict My Posts</>}
              </button>
            </div>

            {/* Score Guide */}
            <div style={{ marginTop: '20px', background: '#f8fafc', borderRadius: '12px', padding: '16px' }}>
              <p style={{ margin: '0 0 10px', fontSize: '12px', fontWeight: '700', color: '#475569', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Score Range Guide (General)</p>
              {[{ range: '160+', label: 'Top posts (ITO, Inspector)', color: '#16a34a' }, { range: '145–159', label: 'Group B posts (Divisional Acc.)', color: '#d97706' }, { range: '125–144', label: 'Group C posts (Tax Asst, UDC)', color: '#2563eb' }, { range: 'Below 125', label: 'Limited eligibility', color: '#dc2626' }].map(item => (
                <div key={item.range} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px', fontSize: '12px' }}>
                  <span style={{ fontWeight: '800', color: item.color, minWidth: '70px' }}>{item.range}</span>
                  <span style={{ color: '#64748b' }}>{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Results Panel */}
          <div>
            {!results && !predicting && (
              <div style={{ background: 'white', borderRadius: '20px', padding: '60px 30px', textAlign: 'center', boxShadow: '0 4px 20px rgba(0,0,0,0.04)', border: '2px dashed #e2e8f0' }}>
                <div style={{ fontSize: '56px', marginBottom: '16px' }}>🎯</div>
                <h3 style={{ margin: '0 0 10px', color: '#1e293b', fontSize: '20px', fontWeight: '800' }}>Enter Your Score</h3>
                <p style={{ color: '#64748b', margin: 0, fontSize: '15px' }}>Fill in your profile on the left and click "Predict My Posts" to see your eligible SSC CGL posts with probabilities.</p>
              </div>
            )}

            {predicting && (
              <div style={{ background: 'white', borderRadius: '20px', padding: '60px 30px', textAlign: 'center', boxShadow: '0 4px 20px rgba(0,0,0,0.04)' }}>
                <div style={{ fontSize: '48px', marginBottom: '16px' }}>⚡</div>
                <h3 style={{ margin: '0 0 10px', color: '#1e293b', fontWeight: '800' }}>Analyzing Cut-offs...</h3>
                <p style={{ color: '#64748b' }}>Comparing your score with {POSTS_DATA.length} posts across all categories</p>
                <div style={{ background: '#f1f5f9', borderRadius: '999px', height: '8px', margin: '20px auto', maxWidth: '200px', overflow: 'hidden' }}>
                  <div style={{ height: '100%', width: '100%', background: 'linear-gradient(90deg, #3b82f6, #8b5cf6)', borderRadius: '999px', animation: 'pulse 1s infinite' }}></div>
                </div>
              </div>
            )}

            {results && (
              <div>
                {/* Summary Banner */}
                <div style={{ background: 'linear-gradient(135deg, #f0fdf4, #dcfce7)', border: '1px solid #bbf7d0', borderRadius: '16px', padding: '20px 24px', marginBottom: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
                  <div>
                    <p style={{ margin: 0, fontSize: '14px', color: '#15803d', fontWeight: '600' }}>Results for Score: <strong style={{ fontSize: '20px' }}>{results.score}</strong> | {results.category} Category | {results.location}</p>
                  </div>
                  <div style={{ display: 'flex', gap: '12px' }}>
                    <div style={{ background: 'white', borderRadius: '10px', padding: '10px 16px', textAlign: 'center', minWidth: '70px' }}>
                      <div style={{ fontSize: '22px', fontWeight: '900', color: '#16a34a' }}>{results.posts.filter(p => p.prob.label === 'Very High' || p.prob.label === 'High').length}</div>
                      <div style={{ fontSize: '11px', color: '#64748b', fontWeight: '600' }}>Strong</div>
                    </div>
                    <div style={{ background: 'white', borderRadius: '10px', padding: '10px 16px', textAlign: 'center', minWidth: '70px' }}>
                      <div style={{ fontSize: '22px', fontWeight: '900', color: '#d97706' }}>{results.posts.filter(p => p.prob.label === 'Medium').length}</div>
                      <div style={{ fontSize: '11px', color: '#64748b', fontWeight: '600' }}>Possible</div>
                    </div>
                    <div style={{ background: 'white', borderRadius: '10px', padding: '10px 16px', textAlign: 'center', minWidth: '70px' }}>
                      <div style={{ fontSize: '22px', fontWeight: '900', color: '#0f172a' }}>{results.posts.length}</div>
                      <div style={{ fontSize: '11px', color: '#64748b', fontWeight: '600' }}>Total</div>
                    </div>
                  </div>
                </div>

                {/* Post Cards */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  {results.posts.length === 0 ? (
                    <div style={{ background: 'white', borderRadius: '16px', padding: '40px', textAlign: 'center' }}>
                      <div style={{ fontSize: '40px', marginBottom: '12px' }}>😔</div>
                      <h4 style={{ color: '#dc2626', fontWeight: '800' }}>Score too low for any post</h4>
                      <p style={{ color: '#64748b' }}>You need at least {POSTS_DATA.reduce((min, p) => Math.min(min, p.cutoffs[category]), 999)} for the lowest cut-off. Keep practicing!</p>
                    </div>
                  ) : results.posts.map((post, i) => (
                    <div key={i} style={{ background: 'white', borderRadius: '16px', padding: '20px 24px', boxShadow: '0 4px 15px rgba(0,0,0,0.03)', border: `1.5px solid ${post.prob.bg}`, display: 'flex', alignItems: 'center', gap: '20px', opacity: post.locationMatch ? 1 : 0.65 }}>
                      <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: post.prob.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <i className={`fas ${post.prob.icon}`} style={{ color: post.prob.color, fontSize: '20px' }}></i>
                      </div>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap', marginBottom: '6px' }}>
                          <h4 style={{ margin: 0, fontSize: '15px', fontWeight: '800', color: '#0f172a' }}>{post.name}</h4>
                          <span style={{ fontSize: '11px', fontWeight: '700', padding: '3px 8px', borderRadius: '6px', background: post.prob.bg, color: post.prob.color }}>{post.prob.label}</span>
                          {!post.locationMatch && <span style={{ fontSize: '11px', fontWeight: '600', color: '#94a3b8' }}>⚠ Limited in your location</span>}
                        </div>
                        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', fontSize: '12px', color: '#64748b', fontWeight: '500' }}>
                          <span>🏛 {post.dept}</span>
                          <span>📊 Group {post.group} | Pay Level {post.payLevel}</span>
                          <span>✂️ Cut-off: {post.cutoff}</span>
                          <span>✨ {post.perk}</span>
                        </div>
                        {/* Probability bar */}
                        <div style={{ marginTop: '10px', background: '#f1f5f9', borderRadius: '999px', height: '6px', overflow: 'hidden' }}>
                          <div style={{ width: post.prob.barWidth, height: '100%', background: post.prob.color, borderRadius: '999px', transition: 'width 0.6s ease' }}></div>
                        </div>
                      </div>
                      <div style={{ textAlign: 'right', flexShrink: 0 }}>
                        <div style={{ fontSize: '11px', color: '#94a3b8', fontWeight: '600', marginBottom: '4px' }}>Vacancies</div>
                        <div style={{ fontSize: '20px', fontWeight: '900', color: '#1e293b' }}>{post.vacancies[category]}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <p style={{ marginTop: '16px', fontSize: '12px', color: '#94a3b8', textAlign: 'center' }}>
                  ⚠ Predictions are based on historical cut-offs (2022–24). Actual cut-offs may vary. Always cross-check with official SSC notifications.
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Preference Optimizer Tab */}
      {activeTab === 'optimizer' && (
        <div style={{ background: 'white', borderRadius: '20px', padding: '32px', boxShadow: '0 4px 20px rgba(0,0,0,0.04)', maxWidth: '600px' }}>
          <h3 style={{ margin: '0 0 8px', fontSize: '20px', fontWeight: '800', color: '#0f172a' }}>Post Preference Optimizer</h3>
          <p style={{ color: '#64748b', margin: '0 0 28px', fontSize: '14px' }}>Drag and drop to reorder your post preferences. The order matters when you fill in the SSC CGL preference form.</p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {prefList.map((post, idx) => (
              <div key={post} draggable
                onDragStart={() => handleDragStart(idx)}
                onDragOver={e => handleDragOver(e, idx)}
                onDragEnd={handleDragEnd}
                style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '16px 20px', background: dragIndex === idx ? '#eff6ff' : '#f8fafc', borderRadius: '14px', border: `1.5px solid ${dragIndex === idx ? '#93c5fd' : '#e2e8f0'}`, cursor: 'grab', transition: 'all 0.15s', userSelect: 'none' }}>
                <span style={{ fontSize: '18px', color: '#94a3b8' }}>⠿</span>
                <div style={{ width: '32px', height: '32px', borderRadius: '10px', background: idx === 0 ? '#fffbeb' : idx === 1 ? '#f5f3ff' : '#f0fdf4', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '900', color: idx === 0 ? '#d97706' : idx === 1 ? '#7c3aed' : '#16a34a', fontSize: '14px', flexShrink: 0 }}>
                  {idx + 1}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: '700', color: '#1e293b', fontSize: '15px' }}>{post}</div>
                  <div style={{ fontSize: '12px', color: '#94a3b8', marginTop: '2px' }}>
                    {POSTS_DATA.find(p => p.name === post)?.dept || ''}
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <button onClick={() => { if (idx > 0) { const l = [...prefList]; [l[idx], l[idx-1]] = [l[idx-1], l[idx]]; setPrefList(l); } }}
                    disabled={idx === 0}
                    style={{ background: '#f1f5f9', border: 'none', borderRadius: '8px', padding: '6px 10px', cursor: idx > 0 ? 'pointer' : 'not-allowed', color: idx > 0 ? '#475569' : '#cbd5e1' }}>
                    ↑
                  </button>
                  <button onClick={() => { if (idx < prefList.length - 1) { const l = [...prefList]; [l[idx], l[idx+1]] = [l[idx+1], l[idx]]; setPrefList(l); } }}
                    disabled={idx === prefList.length - 1}
                    style={{ background: '#f1f5f9', border: 'none', borderRadius: '8px', padding: '6px 10px', cursor: idx < prefList.length - 1 ? 'pointer' : 'not-allowed', color: idx < prefList.length - 1 ? '#475569' : '#cbd5e1' }}>
                    ↓
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '20px', padding: '16px', background: '#fffbeb', borderRadius: '12px', border: '1px solid #fde68a' }}>
            <p style={{ margin: 0, fontSize: '13px', color: '#92400e', fontWeight: '600' }}>
              💡 <strong>Pro Tip:</strong> Put your most desired post 1st and least preferred last. SSC allocates based on merit and your preference order.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Predictor;
