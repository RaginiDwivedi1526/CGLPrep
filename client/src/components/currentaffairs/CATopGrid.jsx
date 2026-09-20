import React, { useState, useEffect } from 'react';

const CATEGORY_IMAGES = {
  'National':      'https://images.unsplash.com/photo-1532375810709-75b1da00537c?auto=format&fit=crop&w=80&q=80',
  'International': 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=80&q=80',
  'Economy':       'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=80&q=80',
  'Science & Tech':'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?auto=format&fit=crop&w=80&q=80',
  'Sports':        'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=80&q=80',
  'Environment':   'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=80&q=80',
  'Defence':       'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=80&q=80',
  'Awards':        'https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?auto=format&fit=crop&w=80&q=80',
  'Appointments':  'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=80&q=80',
  'Polity':        'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=80&q=80',
  'default':       'https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&w=80&q=80',
};

const BG_IMAGES = [
  'https://images.unsplash.com/photo-1532375810709-75b1da00537c?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1200&q=80',
];

const CATEGORY_COLORS = {
  'National': { bg: '#eff6ff', color: '#1d4ed8' },
  'International': { bg: '#f5f3ff', color: '#6d28d9' },
  'Economy': { bg: '#fefce8', color: '#a16207' },
  'Science & Tech': { bg: '#ecfdf5', color: '#065f46' },
  'Sports': { bg: '#fff1f2', color: '#be123c' },
  'Environment': { bg: '#f0fdf4', color: '#15803d' },
  'Defence': { bg: '#fff7ed', color: '#c2410c' },
  'Awards': { bg: '#faf5ff', color: '#7c3aed' },
  'Appointments': { bg: '#f0f9ff', color: '#0369a1' },
  'Polity': { bg: '#fdf2f8', color: '#9d174d' },
};

const CATopGrid = ({ setActiveTab }) => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeStory, setActiveStory] = useState(0);
  const [lastUpdated, setLastUpdated] = useState('');
  const [source, setSource] = useState('');

  const today = new Date().toISOString().split('T')[0];
  const todayDisplay = new Date().toLocaleDateString('en-IN', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });

  useEffect(() => {
    fetchDailyNews();
  }, []);

  // Auto-rotate top stories
  useEffect(() => {
    if (news.length <= 1) return;
    const interval = setInterval(() => {
      setActiveStory(prev => (prev + 1) % Math.min(news.length, 5));
    }, 4000);
    return () => clearInterval(interval);
  }, [news]);

  const fetchDailyNews = async () => {
    setLoading(true);
    try {
      const res = await fetch(`http://localhost:5000/api/ai/daily-update?date=${today}`);
      const result = await res.json();
      if (result.success && result.data && result.data.length > 0) {
        setNews(result.data);
        setSource(result.source === 'ai' ? '✨ AI Generated' : '🔄 Smart Engine');
        setLastUpdated(new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' }));
      }
    } catch (err) {
      console.error('Error fetching daily news:', err);
    } finally {
      setLoading(false);
    }
  };

  const topStory = news[activeStory] || null;
  const recentUpdates = news.filter((_, i) => i !== activeStory).slice(0, 4);

  return (
    <section className="container ca-section">

      {/* Live Update Banner */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px', padding: '12px 20px', background: 'linear-gradient(135deg, #1e40af11, #7c3aed11)', borderRadius: '12px', border: '1px solid #e2e8f0', flexWrap: 'wrap', gap: '10px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ display: 'inline-block', width: '10px', height: '10px', borderRadius: '50%', background: '#16a34a', animation: 'pulse 1.5s infinite', boxShadow: '0 0 0 4px rgba(22,163,74,0.15)' }}></span>
          <span style={{ fontWeight: '700', color: '#0f172a', fontSize: '14px' }}>LIVE • Today's Current Affairs</span>
          <span style={{ fontSize: '13px', color: '#64748b' }}>{todayDisplay}</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          {source && <span style={{ fontSize: '12px', fontWeight: '600', color: '#7c3aed', background: '#f5f3ff', padding: '4px 10px', borderRadius: '6px' }}>{source}</span>}
          {lastUpdated && <span style={{ fontSize: '12px', color: '#94a3b8' }}>Updated: {lastUpdated}</span>}
          <button onClick={fetchDailyNews} style={{ background: '#2563eb', color: 'white', border: 'none', borderRadius: '8px', padding: '6px 12px', fontSize: '12px', fontWeight: '700', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <i className={`fas fa-rotate-right ${loading ? 'fa-spin' : ''}`}></i> Refresh
          </button>
        </div>
      </div>

      <div className="ca-top-grid">
        
        {/* Left: Top Story Carousel */}
        <div className="ca-top-story">
          <div className="cats-bg" style={{ backgroundImage: `url('${BG_IMAGES[activeStory % BG_IMAGES.length]}')` }}></div>
          <div className="cats-overlay"></div>
          
          <div className="cats-header">
            <span className="flt-tag green">TOP STORY</span>
            <span className="cats-date"><i className="far fa-calendar"></i> {topStory ? topStory.date : today}</span>
          </div>

          <div className="cats-content">
            {loading ? (
              <>
                <div style={{ height: '28px', background: 'rgba(255,255,255,0.2)', borderRadius: '8px', marginBottom: '12px', animation: 'pulse 1.5s infinite' }}></div>
                <div style={{ height: '16px', background: 'rgba(255,255,255,0.15)', borderRadius: '6px', width: '80%', animation: 'pulse 1.5s infinite' }}></div>
              </>
            ) : (
              <>
                <span style={{ display: 'inline-block', fontSize: '11px', fontWeight: '700', padding: '3px 10px', borderRadius: '6px', background: 'rgba(255,255,255,0.2)', color: 'white', marginBottom: '10px' }}>
                  {topStory?.category}
                </span>
                <h2>{topStory?.title || 'Loading today\'s news...'}</h2>
                <p>{topStory?.summary || 'Please wait...'}</p>
              </>
            )}
          </div>

          <div className="cats-controls">
            <button className="cats-btn" onClick={() => setActiveStory(prev => (prev - 1 + Math.min(news.length, 5)) % Math.min(news.length, 5))}>
              <i className="fas fa-chevron-left"></i>
            </button>
            <div className="cats-dots">
              {Array.from({ length: Math.min(news.length, 5) }).map((_, i) => (
                <span key={i} className={`cats-dot ${i === activeStory ? 'active' : ''}`} onClick={() => setActiveStory(i)} style={{ cursor: 'pointer' }}></span>
              ))}
            </div>
            <button className="cats-btn" onClick={() => setActiveStory(prev => (prev + 1) % Math.min(news.length, 5))}>
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>

        {/* Center: Latest News List */}
        <div className="ca-latest-news">
          {loading ? (
            [1,2,3,4].map(i => (
              <div key={i} className="caln-item" style={{ opacity: 0.5 }}>
                <div style={{ width: '60px', height: '60px', borderRadius: '10px', background: '#f1f5f9', flexShrink: 0 }}></div>
                <div style={{ flex: 1 }}>
                  <div style={{ height: '16px', background: '#f1f5f9', borderRadius: '6px', marginBottom: '8px' }}></div>
                  <div style={{ height: '12px', background: '#f1f5f9', borderRadius: '4px', width: '60%' }}></div>
                </div>
              </div>
            ))
          ) : recentUpdates.map((item, idx) => {
            const catColor = CATEGORY_COLORS[item.category] || { bg: '#f1f5f9', color: '#475569' };
            const imgUrl = CATEGORY_IMAGES[item.category] || CATEGORY_IMAGES['default'];
            return (
              <div className="caln-item" key={idx} style={{ cursor: 'pointer', transition: 'all 0.2s' }}>
                <img src={imgUrl} alt={item.category} className="caln-img" />
                <div className="caln-content">
                  <h4 style={{ fontSize: '14px', lineHeight: '1.4', marginBottom: '6px' }}>{item.title}</h4>
                  <div className="caln-meta">
                    <span style={{ fontSize: '11px', color: '#94a3b8' }}>{item.date}</span>
                    <span className="caln-tag blue" style={{ background: catColor.bg, color: catColor.color, fontSize: '11px' }}>
                      {item.category} <i className="fas fa-arrow-right"></i>
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Sidebar: Quiz & Quote */}
        <div className="ca-top-sidebar">
          
          <div className="ca-quiz-widget">
            <div className="cqw-header">
              <div className="cqw-icon"><i className="fas fa-bullseye"></i></div>
              <div className="cqw-title">
                <h3>Daily Current Affairs Quiz</h3>
                <p>Test your knowledge with 10 new questions every day!</p>
              </div>
            </div>
            <div className="cqw-stats">
              <div className="cqws-item">
                <div className="cqws-icon purple"><i className="fas fa-clipboard-list"></i></div>
                <strong>10</strong>
                <span>Questions</span>
              </div>
              <div className="cqws-item">
                <div className="cqws-icon blue"><i className="far fa-clock"></i></div>
                <strong>10</strong>
                <span>Minutes</span>
              </div>
              <div className="cqws-item">
                <div className="cqws-icon red"><i className="fas fa-chart-bar"></i></div>
                <strong>Live</strong>
                <span>Score</span>
              </div>
            </div>
            <button className="btn-primary" style={{ width: '100%', marginBottom: '12px' }} onClick={() => setActiveTab && setActiveTab('quiz')}>Start Today's Quiz <i className="fas fa-arrow-right"></i></button>
            <div className="cqw-link" onClick={() => setActiveTab && setActiveTab('quiz')} style={{ cursor: 'pointer' }}>View Previous Quizzes <i className="fas fa-arrow-right"></i></div>
          </div>

          {/* Today's Stats */}
          <div style={{ background: 'linear-gradient(135deg, #1e40af, #7c3aed)', borderRadius: '16px', padding: '20px', color: 'white', marginTop: '16px' }}>
            <h4 style={{ margin: '0 0 14px', fontWeight: '800', fontSize: '15px' }}>📊 Today's Stats</h4>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
              {[
                { label: 'News Items', value: news.length || 8 },
                { label: 'Categories', value: [...new Set(news.map(n => n.category))].length || 6 },
                { label: 'MCQs Ready', value: '10' },
                { label: 'Updated', value: lastUpdated || 'Now' },
              ].map(stat => (
                <div key={stat.label} style={{ background: 'rgba(255,255,255,0.1)', borderRadius: '10px', padding: '10px', textAlign: 'center' }}>
                  <div style={{ fontSize: '18px', fontWeight: '900' }}>{stat.value}</div>
                  <div style={{ fontSize: '11px', opacity: 0.8 }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="ca-quote-widget" style={{ marginTop: '16px' }}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/A._P._J._Abdul_Kalam.jpg/240px-A._P._J._Abdul_Kalam.jpg" alt="A.P.J. Abdul Kalam" className="ca-quote-img" style={{ borderRadius: '50%', objectFit: 'cover' }} />
            <div className="ca-quote-content">
              <p>"Dream is not that which you see while sleeping, it is that which does not let you sleep."</p>
              <strong>— Dr. A.P.J. Abdul Kalam</strong>
            </div>
          </div>

        </div>

      </div>

      {/* Category Quick Filter Row */}
      {!loading && news.length > 0 && (
        <div style={{ marginTop: '24px', display: 'flex', gap: '10px', flexWrap: 'wrap', alignItems: 'center' }}>
          <span style={{ fontSize: '13px', fontWeight: '700', color: '#64748b' }}>Filter by:</span>
          {[...new Set(news.map(n => n.category))].map(cat => {
            const style = CATEGORY_COLORS[cat] || { bg: '#f1f5f9', color: '#475569' };
            return (
              <button key={cat} style={{ padding: '6px 14px', borderRadius: '8px', border: 'none', cursor: 'pointer', fontSize: '12px', fontWeight: '700', background: style.bg, color: style.color }}>
                {cat}
              </button>
            );
          })}
        </div>
      )}
    </section>
  );
};

export default CATopGrid;
