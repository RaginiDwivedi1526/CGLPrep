import React, { useState, useEffect, useMemo } from 'react';

// ─── Data ──────────────────────────────────────────────────────────────────────
const ALL_MAGAZINES = {
  2026: [
    { month: 'Sep 2026', label: 'September 2026', img: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=300&q=80', desc: 'UN General Assembly, India GDP data, ISRO launches, Climate summits.', articles: 92, mcqs: 210, pages: 72, views: 12400, downloaded: false, categories: ['National','International','Economy','Science & Tech'] },
    { month: 'Aug 2026', label: 'August 2026',    img: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=300&q=80', desc: 'Independence Day, BRICS summit, Policy reforms and sporting events.', articles: 88, mcqs: 195, pages: 68, views: 10800, downloaded: true,  categories: ['National','Sports','Polity & Governance'] },
    { month: 'Jul 2026', label: 'July 2026',      img: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=300&q=80', desc: 'Chandrayaan updates, Kargil Vijay Diwas, Global AI agreements.', articles: 84, mcqs: 188, pages: 64, views: 9600, downloaded: false, categories: ['Science & Tech','National','Defence & Security'] },
    { month: 'Jun 2026', label: 'June 2026',      img: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=300&q=80', desc: 'World Environment Day, Yoga Day, Monsoon and green policies.', articles: 80, mcqs: 176, pages: 60, views: 8900, downloaded: false, categories: ['Environment & Climate','National','International'] },
    { month: 'May 2026', label: 'May 2026',       img: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=300&q=80', desc: 'Labour Day, Buddha Purnima, Agricultural reforms, Defence deals.', articles: 78, mcqs: 168, pages: 58, views: 7400, downloaded: true,  categories: ['Economy','Defence & Security','Schemes & Initiatives'] },
    { month: 'Apr 2026', label: 'April 2026',     img: 'https://images.unsplash.com/photo-1491841573634-28140fc7ced7?auto=format&fit=crop&w=300&q=80', desc: 'Election results, Earth Day, New economic policies, Sports season.', articles: 75, mcqs: 160, pages: 55, views: 6800, downloaded: false, categories: ['Polity & Governance','Environment & Climate','Sports'] },
    { month: 'Mar 2026', label: 'March 2026',     img: 'https://images.unsplash.com/photo-1532375810709-75b1da00537c?auto=format&fit=crop&w=300&q=80', desc: 'Women\'s Day awards, IPL begins, NEP implementation, Science events.', articles: 72, mcqs: 155, pages: 52, views: 6200, downloaded: false, categories: ['National','Sports','Science & Tech'] },
    { month: 'Feb 2026', label: 'February 2026',  img: 'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?auto=format&fit=crop&w=300&q=80', desc: 'Budget 2026-27 analysis, State elections, Diplomatic visits.', articles: 70, mcqs: 148, pages: 50, views: 5900, downloaded: true,  categories: ['Economy','Polity & Governance','International'] },
    { month: 'Jan 2026', label: 'January 2026',   img: 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=300&q=80', desc: 'Republic Day, Padma Awards, New government schemes, Diplomatic ties.', articles: 68, mcqs: 142, pages: 48, views: 5400, downloaded: false, categories: ['National','Awards & Honours','Schemes & Initiatives'] },
  ],
  2025: [
    { month: 'Dec 2025', label: 'December 2025', img: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=300&q=80', desc: 'Year-end review, COP30 outcomes, G20 legacy, RBI rate decisions.', articles: 95, mcqs: 220, pages: 74, views: 18200, downloaded: true, categories: ['Economy','International','Environment & Climate'] },
    { month: 'Nov 2025', label: 'November 2025', img: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=300&q=80', desc: 'State elections, India-China border diplomacy, new appointments.', articles: 90, mcqs: 210, pages: 70, views: 16000, downloaded: false, categories: ['Polity & Governance','International','Appointments'] },
    { month: 'Oct 2025', label: 'October 2025',  img: 'https://images.unsplash.com/photo-1445375011782-2384686778a0?auto=format&fit=crop&w=300&q=80', desc: 'Gandhi Jayanti, Nobel Prizes 2025, Dussehra events, Space missions.', articles: 86, mcqs: 196, pages: 65, views: 14600, downloaded: false, categories: ['National','Awards & Honours','Science & Tech'] },
    { month: 'Sep 2025', label: 'September 2025', img: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=300&q=80', desc: 'UNGA 80, India\'s digital economy push, Sports events, Farmer schemes.', articles: 84, mcqs: 190, pages: 63, views: 13200, downloaded: true, categories: ['International','Economy','Sports','Schemes & Initiatives'] },
    { month: 'Aug 2025', label: 'August 2025',   img: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=300&q=80', desc: 'Independence Day 78, New defence deals, Space mission updates.', articles: 80, mcqs: 178, pages: 60, views: 12000, downloaded: false, categories: ['National','Defence & Security','Science & Tech'] },
    { month: 'Jul 2025', label: 'July 2025',     img: 'https://images.unsplash.com/photo-1458419948946-19fb2cc296af?auto=format&fit=crop&w=300&q=80', desc: 'Kargil Vijay Diwas, Olympics 2028 qualifiers, Monsoon agriculture.', articles: 78, mcqs: 172, pages: 57, views: 11000, downloaded: true, categories: ['National','Sports','Economy'] },
  ],
  2024: [
    { month: 'Dec 2024', label: 'December 2024', img: 'https://images.unsplash.com/photo-1491841573634-28140fc7ced7?auto=format&fit=crop&w=300&q=80', desc: 'Year in review 2024: Elections, economy, space, diplomacy.', articles: 102, mcqs: 240, pages: 80, views: 24000, downloaded: true, categories: ['National','International','Economy'] },
    { month: 'Nov 2024', label: 'November 2024', img: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=300&q=80', desc: 'US Elections 2024, India\'s G20 outcomes, Diwali economy boost.', articles: 98, mcqs: 225, pages: 76, views: 22000, downloaded: true, categories: ['International','Economy','National'] },
    { month: 'Oct 2024', label: 'October 2024',  img: 'https://images.unsplash.com/photo-1532375810709-75b1da00537c?auto=format&fit=crop&w=300&q=80', desc: 'Nobel Prize 2024, Gandhi Jayanti, India cricket success.', articles: 94, mcqs: 215, pages: 72, views: 19500, downloaded: false, categories: ['Awards & Honours','National','Sports'] },
    { month: 'Sep 2024', label: 'September 2024', img: 'https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?auto=format&fit=crop&w=300&q=80', desc: 'India at UNGA, RBI policy, Space milestones, National Games.', articles: 90, mcqs: 205, pages: 68, views: 18000, downloaded: true, categories: ['International','Economy','Science & Tech','Sports'] },
  ],
  2023: [
    { month: 'Dec 2023', label: 'December 2023', img: 'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?auto=format&fit=crop&w=300&q=80', desc: 'COP28, India\'s G20 Presidency ends, Chandrayaan-3 legacy.', articles: 105, mcqs: 250, pages: 82, views: 28000, downloaded: true, categories: ['Environment & Climate','International','Science & Tech'] },
    { month: 'Nov 2023', label: 'November 2023', img: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=300&q=80', desc: 'Five state elections, India-Israel conflict updates, Sports events.', articles: 100, mcqs: 232, pages: 78, views: 25000, downloaded: false, categories: ['Polity & Governance','International','Sports'] },
    { month: 'Oct 2023', label: 'October 2023',  img: 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=300&q=80', desc: 'Nobel Prize 2023, Cricket World Cup India, Gandhi Jayanti.', articles: 96, mcqs: 222, pages: 74, views: 22500, downloaded: true, categories: ['Awards & Honours','Sports','National'] },
    { month: 'Sep 2023', label: 'September 2023', img: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=300&q=80', desc: 'G20 India, UNGA outcomes, Chandrayaan-3 Vikram landing.', articles: 92, mcqs: 212, pages: 70, views: 21000, downloaded: true, categories: ['International','Science & Tech','National'] },
  ],
};

const CATEGORIES_LIST = ['National','International','Economy','Polity & Governance','Schemes & Initiatives','Science & Tech','Environment & Climate','Defence & Security','Sports','Awards & Honours','Summits & Conferences','Miscellaneous'];

const EXPLORE_LINKS = [
  { icon: 'fa-calendar-check', color: 'blue',       label: "Today's Update",    sub: 'Latest news with quick analysis',     tab: 'today' },
  { icon: 'fa-layer-group',    color: 'purple',      label: 'Topic-wise',        sub: 'Read by subjects and categories',      tab: 'topic' },
  { icon: 'fa-plus-square',    color: 'green',       label: 'MCQs & Quizzes',   sub: 'Test what you read with practice',     tab: 'quiz' },
  { icon: 'fa-calendar',       color: 'orange',      label: 'Year-wise Papers',  sub: 'Access past year current affairs',     tab: 'year' },
  { icon: 'fa-file-alt',       color: 'red',         label: 'Important Documents', sub: 'Reports, schemes, committees, etc.', tab: 'docs' },
  { icon: 'fa-search-plus',    color: 'blue-light',  label: 'News Analysis',     sub: 'In-depth insights and editorials',     tab: 'today' },
];

// ─── Component ─────────────────────────────────────────────────────────────────
const CAMagazine = ({ setActiveTab }) => {
  const [openYear, setOpenYear] = useState('2026');
  const [quickFilter, setQuickFilter] = useState('all');       // all | downloaded | not-downloaded | popular | latest
  const [activeCategory, setActiveCategory] = useState('');    // '' = all categories
  const [sortBy, setSortBy] = useState('latest');              // latest | popular | oldest
  const [showAll, setShowAll] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [monthTopics, setMonthTopics] = useState([]);
  const [topicsLoading, setTopicsLoading] = useState(false);
  const [readingMag, setReadingMag] = useState(null);          // modal

  // Pick the magazine pool for the active year
  const yearData = ALL_MAGAZINES[openYear] || ALL_MAGAZINES[2026];

  useEffect(() => {
    // Default select first magazine of newly selected year
    setSelectedMonth(yearData[0]);
    setShowAll(false);
    setActiveCategory('');
    setQuickFilter('all');
  }, [openYear]);

  useEffect(() => {
    if (selectedMonth) fetchMonthTopics(selectedMonth.month);
  }, [selectedMonth]);

  const fetchMonthTopics = async (month) => {
    setTopicsLoading(true);
    try {
      const res = await fetch(`http://localhost:5000/api/ai/monthly-summary?month=${encodeURIComponent(month)}`);
      const data = await res.json();
      if (data.success && data.data?.topics) {
        setMonthTopics(data.data.topics);
      } else throw new Error();
    } catch {
      setMonthTopics(['Key policies', 'International events', 'Economic updates', 'Sports', 'Appointments']);
    } finally {
      setTopicsLoading(false);
    }
  };

  // ── Filtering & sorting ──────────────────────────────────────────────────────
  const displayed = useMemo(() => {
    let list = [...yearData];

    // Quick filter
    if (quickFilter === 'downloaded')     list = list.filter(m => m.downloaded);
    if (quickFilter === 'not-downloaded') list = list.filter(m => !m.downloaded);
    if (quickFilter === 'popular')        list = [...list].sort((a, b) => b.views - a.views);
    if (quickFilter === 'latest')         list = list; // already sorted latest-first in data

    // Category filter
    if (activeCategory) {
      list = list.filter(m => m.categories.some(c => c.toLowerCase().includes(activeCategory.toLowerCase())));
    }

    // Sort
    if (sortBy === 'popular') list = [...list].sort((a, b) => b.views - a.views);
    if (sortBy === 'oldest')  list = [...list].reverse();

    return list;
  }, [yearData, quickFilter, activeCategory, sortBy]);

  const visibleMags = showAll ? displayed : displayed.slice(0, 6);

  // ── Glance stats for right sidebar ──────────────────────────────────────────
  const currentGlance = selectedMonth || yearData[0];

  const handleMarkDownloaded = (month) => {
    // toggle downloaded state locally (in real app this would call backend)
    const idx = yearData.findIndex(m => m.month === month);
    if (idx !== -1) yearData[idx].downloaded = !yearData[idx].downloaded;
  };

  // ── Reading Modal ────────────────────────────────────────────────────────────
  const ReadingModal = ({ mag, onClose }) => (
    <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.7)', zIndex: 2000, display: 'flex', alignItems: 'center', justifyContent: 'center', backdropFilter: 'blur(6px)' }}>
      <div style={{ background: 'white', borderRadius: '24px', width: '90%', maxWidth: '700px', maxHeight: '85vh', overflow: 'auto', boxShadow: '0 30px 80px rgba(0,0,0,0.3)' }}>
        <div style={{ padding: '28px 32px', borderBottom: '1px solid #f1f5f9', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h2 style={{ margin: 0, fontWeight: '900', color: '#0f172a', fontSize: '22px' }}>{mag.label}</h2>
            <p style={{ margin: '4px 0 0', color: '#64748b', fontSize: '14px' }}>{mag.articles} Articles • {mag.mcqs} MCQs • {mag.pages} Pages</p>
          </div>
          <button onClick={onClose} style={{ background: '#f1f5f9', border: 'none', borderRadius: '10px', padding: '10px 14px', cursor: 'pointer', fontSize: '16px', color: '#475569' }}>✕</button>
        </div>
        <div style={{ padding: '28px 32px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '16px', marginBottom: '24px' }}>
            {[['📄', mag.pages, 'Pages'], ['📰', mag.articles, 'Articles'], ['❓', mag.mcqs, 'MCQs'], ['👁', (mag.views/1000).toFixed(1)+'K', 'Views'], ['📁', mag.downloaded ? 'Yes' : 'No', 'Downloaded'], ['🗂', mag.categories.length, 'Categories']].map(([icon, val, label]) => (
              <div key={label} style={{ background: '#f8fafc', borderRadius: '12px', padding: '16px', textAlign: 'center' }}>
                <div style={{ fontSize: '22px', marginBottom: '6px' }}>{icon}</div>
                <div style={{ fontWeight: '900', fontSize: '18px', color: '#1e293b' }}>{val}</div>
                <div style={{ fontSize: '12px', color: '#94a3b8' }}>{label}</div>
              </div>
            ))}
          </div>
          <h4 style={{ margin: '0 0 12px', fontWeight: '800', color: '#1e293b' }}>Categories Covered</h4>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '24px' }}>
            {mag.categories.map(cat => (
              <span key={cat} style={{ fontSize: '12px', fontWeight: '700', padding: '5px 14px', borderRadius: '20px', background: '#eff6ff', color: '#2563eb' }}>{cat}</span>
            ))}
          </div>
          <p style={{ color: '#64748b', fontSize: '14px', lineHeight: '1.6', marginBottom: '24px' }}>{mag.desc}</p>
          <div style={{ display: 'flex', gap: '12px' }}>
            <button onClick={() => { window.open(`http://localhost:5000/api/ai/magazine-reader?month=${encodeURIComponent(mag.month)}`, '_blank'); onClose(); }} style={{ flex: 2, padding: '14px', background: 'linear-gradient(135deg, #2563eb, #7c3aed)', color: 'white', border: 'none', borderRadius: '12px', fontWeight: '800', fontSize: '15px', cursor: 'pointer' }}>
              <i className="fas fa-book-open" style={{ marginRight: '8px' }}></i> Read Online
            </button>
            <button onClick={() => window.open(`http://localhost:5000/api/ai/magazine-reader?month=${encodeURIComponent(mag.month)}&download=true`, '_blank')} style={{ flex: 1, padding: '14px', background: '#f1f5f9', color: '#475569', border: 'none', borderRadius: '12px', fontWeight: '700', fontSize: '14px', cursor: 'pointer' }}>
              <i className="fas fa-download" style={{ marginRight: '8px' }}></i> Download PDF
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section className="container ca-section">
      {readingMag && <ReadingModal mag={readingMag} onClose={() => setReadingMag(null)} />}

      <div className="camag-layout">

        {/* ─── Left Sidebar ─────────────────────────────────────────────────── */}
        <div className="camag-sidebar-left">

          {/* Year Filter */}
          <div className="camag-filter-box">
            <h3 className="camag-fb-title">Years</h3>
            <div className="camag-accordion">
              {Object.keys(ALL_MAGAZINES).sort((a,b) => b-a).map(year => (
                <div key={year} className="camag-acc-item">
                  <div className={`camag-acc-header ${openYear === year ? 'active' : ''}`} onClick={() => setOpenYear(year)} style={{ cursor: 'pointer' }}>
                    <span>{year}</span>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ fontSize: '11px', color: '#94a3b8' }}>{ALL_MAGAZINES[year].length} issues</span>
                      <i className={`fas fa-chevron-${openYear === year ? 'down' : 'right'}`} style={{ fontSize: '11px' }}></i>
                    </div>
                  </div>
                  {openYear === year && (
                    <div style={{ paddingLeft: '14px', paddingBottom: '8px' }}>
                      {ALL_MAGAZINES[year].map(m => (
                        <div key={m.month} onClick={() => setSelectedMonth(m)} style={{ padding: '6px 10px', fontSize: '13px', cursor: 'pointer', borderRadius: '6px', fontWeight: selectedMonth?.month === m.month ? '700' : '500', color: selectedMonth?.month === m.month ? '#2563eb' : '#475569', background: selectedMonth?.month === m.month ? '#eff6ff' : 'transparent', marginBottom: '2px' }}>
                          {m.label.replace(` ${year}`, '')} {year}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Quick Filters */}
          <div className="camag-filter-box">
            <h3 className="camag-fb-title">Quick Filters</h3>
            <div className="camag-qf-list">
              {[
                { id: 'all',           icon: 'fa-check',              iconClass: 'cqf-checkbox', label: 'All Months' },
                { id: 'downloaded',    icon: 'fa-download',           iconClass: 'cqf-icon blue', label: 'Downloaded' },
                { id: 'not-downloaded',icon: 'fa-cloud-download-alt', iconClass: 'cqf-icon red',  label: 'Not Downloaded' },
                { id: 'popular',       icon: 'fa-fire',               iconClass: 'cqf-icon orange', label: 'Most Popular' },
                { id: 'latest',        icon: 'fa-clock',              iconClass: 'cqf-icon blue-light', label: 'Latest' },
              ].map(f => (
                <label key={f.id} className={`camag-qf-item ${quickFilter === f.id ? 'active' : ''}`} onClick={() => setQuickFilter(f.id)} style={{ cursor: 'pointer' }}>
                  <div className={f.iconClass}><i className={`fas ${f.icon}`}></i></div>
                  <span className="cqf-label">{f.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Category Filter */}
          <div className="camag-filter-box">
            <h3 className="camag-fb-title">Categories</h3>
            <ul className="camag-cat-list">
              {[
                { label: 'National',               icon: 'fa-map-marker-alt', cls: 'text-orange' },
                { label: 'International',           icon: 'fa-globe-americas', cls: 'text-blue' },
                { label: 'Economy',                 icon: 'fa-coins',          cls: 'text-green' },
                { label: 'Polity & Governance',     icon: 'fa-university',     cls: 'text-purple' },
                { label: 'Schemes & Initiatives',   icon: 'fa-seedling',       cls: 'text-blue' },
                { label: 'Science & Tech',          icon: 'fa-flask',          cls: 'text-pink' },
                { label: 'Environment & Climate',   icon: 'fa-leaf',           cls: 'text-green' },
                { label: 'Defence & Security',      icon: 'fa-shield-alt',     cls: 'text-red' },
                { label: 'Sports',                  icon: 'fa-running',        cls: 'text-red' },
                { label: 'Awards & Honours',        icon: 'fa-trophy',         cls: 'text-gold' },
                { label: 'Summits & Conferences',   icon: 'fa-users',          cls: 'text-blue' },
                { label: 'Miscellaneous',           icon: 'fa-list',           cls: 'text-gray' },
              ].map(cat => (
                <li key={cat.label}
                  onClick={() => setActiveCategory(activeCategory === cat.label ? '' : cat.label)}
                  style={{ cursor: 'pointer', fontWeight: activeCategory === cat.label ? '700' : '400', background: activeCategory === cat.label ? '#eff6ff' : 'transparent', borderRadius: '6px', padding: '4px 8px', transition: 'all 0.15s', color: activeCategory === cat.label ? '#2563eb' : 'inherit' }}>
                  <i className={`fas ${cat.icon} ${cat.cls}`}></i> {cat.label}
                </li>
              ))}
            </ul>
            {activeCategory && (
              <button onClick={() => setActiveCategory('')} style={{ marginTop: '8px', width: '100%', padding: '6px', borderRadius: '8px', border: '1px solid #e2e8f0', background: 'white', color: '#64748b', cursor: 'pointer', fontSize: '12px', fontWeight: '600' }}>
                ✕ Clear filter
              </button>
            )}
          </div>

          <div className="camag-quote-box">
            <div className="cmq-icon"><i className="fas fa-quote-left"></i></div>
            <p>"A well-read mind is always a step ahead in the exam."</p>
            <span>— CGLPrep AI</span>
          </div>

        </div>

        {/* ─── Main Content ──────────────────────────────────────────────────── */}
        <div className="camag-main-col">

          {/* Header */}
          <div className="camag-main-header">
            <div>
              <h2 className="camag-mh-title">
                Magazine Issues ({openYear})
                {activeCategory && <span style={{ fontSize: '14px', fontWeight: '600', color: '#2563eb', marginLeft: '10px' }}>— {activeCategory}</span>}
              </h2>
              <p className="camag-mh-sub">
                {displayed.length} issue{displayed.length !== 1 ? 's' : ''} found
                {quickFilter !== 'all' && ` • Filter: ${quickFilter}`}
                {activeCategory && ` • Category: ${activeCategory}`}
              </p>
            </div>
            <div className="camag-sort" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '13px', color: '#64748b' }}>Sort by:</span>
              <select value={sortBy} onChange={e => setSortBy(e.target.value)} style={{ border: '1.5px solid #e2e8f0', borderRadius: '8px', padding: '6px 10px', fontSize: '13px', fontWeight: '600', cursor: 'pointer', color: '#1e293b' }}>
                <option value="latest">Latest First</option>
                <option value="popular">Most Popular</option>
                <option value="oldest">Oldest First</option>
              </select>
            </div>
          </div>

          {/* Selected Month Topics Panel */}
          {selectedMonth && (
            <div style={{ background: 'linear-gradient(135deg, #eff6ff, #f5f3ff)', borderRadius: '16px', padding: '20px 24px', marginBottom: '24px', border: '1px solid #ddd6fe' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '12px' }}>
                <div>
                  <h3 style={{ margin: '0 0 10px', fontWeight: '800', fontSize: '16px', color: '#1e293b' }}>
                    📋 {selectedMonth.label} — Key Topics
                  </h3>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {topicsLoading ? (
                      <span style={{ color: '#94a3b8', fontSize: '13px' }}>
                        <i className="fas fa-spinner fa-spin" style={{ marginRight: '6px' }}></i>Loading topics...
                      </span>
                    ) : monthTopics.map((topic, i) => (
                      <span key={i} style={{ fontSize: '12px', fontWeight: '600', padding: '4px 12px', borderRadius: '20px',
                        background: ['#eff6ff','#f5f3ff','#fef3c7','#ecfdf5','#fff1f2'][i % 5],
                        color:      ['#1d4ed8','#6d28d9','#a16207','#065f46','#be123c'][i % 5] }}>
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '12px', flexShrink: 0 }}>
                  {[['📄', selectedMonth.articles, 'Articles'], ['❓', selectedMonth.mcqs, 'MCQs'], ['📃', selectedMonth.pages, 'Pages']].map(([icon, val, label]) => (
                    <div key={label} style={{ textAlign: 'center', background: 'white', borderRadius: '10px', padding: '10px 14px', minWidth: '60px' }}>
                      <div style={{ fontWeight: '900', color: '#2563eb', fontSize: '18px' }}>{icon} {val}</div>
                      <div style={{ fontSize: '11px', color: '#94a3b8' }}>{label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* No results */}
          {displayed.length === 0 && (
            <div style={{ textAlign: 'center', padding: '60px 20px', background: '#f8fafc', borderRadius: '16px', border: '2px dashed #e2e8f0' }}>
              <div style={{ fontSize: '48px', marginBottom: '12px' }}>🔍</div>
              <h4 style={{ color: '#475569', fontWeight: '800' }}>No magazines match your filter</h4>
              <button onClick={() => { setActiveCategory(''); setQuickFilter('all'); }} style={{ marginTop: '12px', padding: '10px 20px', background: '#2563eb', color: 'white', border: 'none', borderRadius: '10px', cursor: 'pointer', fontWeight: '700' }}>
                Clear Filters
              </button>
            </div>
          )}

          {/* Magazine Grid */}
          <div className="camag-grid">
            {visibleMags.map((mag, idx) => (
              <div key={mag.month} className="camag-card"
                onClick={() => setSelectedMonth(mag)}
                style={{ cursor: 'pointer', outline: selectedMonth?.month === mag.month ? '2px solid #2563eb' : 'none', outlineOffset: '2px', position: 'relative' }}>
                {idx === 0 && displayed[0].month === mag.month && openYear === '2026' && (
                  <span style={{ position: 'absolute', top: '10px', left: '10px', background: '#2563eb', color: 'white', fontSize: '10px', fontWeight: '800', padding: '3px 8px', borderRadius: '6px', zIndex: 2 }}>LATEST</span>
                )}
                {mag.downloaded && (
                  <span style={{ position: 'absolute', top: '10px', right: '10px', background: '#16a34a', color: 'white', fontSize: '10px', fontWeight: '800', padding: '3px 8px', borderRadius: '6px', zIndex: 2 }}>
                    <i className="fas fa-check"></i> Saved
                  </span>
                )}
                <img src={mag.img} alt={mag.label} className="camag-cover" />
                <div className="camag-card-body">
                  <h4>{mag.label}</h4>
                  <p style={{ fontSize: '12px', color: '#64748b', lineHeight: '1.4' }}>{mag.desc}</p>
                  <div style={{ display: 'flex', gap: '10px', fontSize: '11px', color: '#94a3b8', marginBottom: '10px', flexWrap: 'wrap' }}>
                    <span>📄 {mag.articles}</span>
                    <span>❓ {mag.mcqs}</span>
                    <span>👁 {(mag.views/1000).toFixed(1)}K</span>
                  </div>
                  <div className="camag-actions" onClick={e => e.stopPropagation()}>
                    <button className="btn-primary camag-btn-read" onClick={() => setReadingMag(mag)}>Read Online</button>
                    <button className="btn-outline camag-btn-dl" title="Download PDF" onClick={() => window.open(`http://localhost:5000/api/ai/magazine-reader?month=${encodeURIComponent(mag.month)}&download=true`, '_blank')}><i className="fas fa-download"></i></button>
                  </div>
                  <div className="camag-meta">PDF • {Math.ceil(mag.articles / 8)} MB • {mag.pages} Pages</div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More */}
          {displayed.length > 6 && (
            <div className="camag-load-more">
              <button className="btn-outline" onClick={() => setShowAll(!showAll)}>
                {showAll ? 'Show Less' : `Load More Months (${displayed.length - 6} more)`}
                <i className={`fas ${showAll ? 'fa-chevron-up' : 'fa-chevron-down'}`} style={{ marginLeft: '8px' }}></i>
              </button>
            </div>
          )}

          {/* Also Explore */}
          <div className="camag-explore">
            <h3>Also Explore</h3>
            <div className="camag-exp-grid">
              {EXPLORE_LINKS.map(link => (
                <div key={link.label} className="ca-exp-card"
                  onClick={() => setActiveTab && setActiveTab(link.tab)}
                  style={{ cursor: 'pointer', transition: 'all 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-3px)'}
                  onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}>
                  <div className={`ca-exp-icon ${link.color}`}><i className={`fas ${link.icon}`}></i></div>
                  <h4>{link.label}</h4>
                  <p>{link.sub}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* ─── Right Sidebar ─────────────────────────────────────────────────── */}
        <div className="camag-sidebar-right">

          {/* This Month at a Glance */}
          <div className="camag-widget">
            <h3 className="camag-widget-title">
              {selectedMonth ? selectedMonth.label : currentGlance.label} — Glance
            </h3>
            <p className="camag-widget-sub">{currentGlance.label}</p>
            <div className="camag-stats-grid">
              {[
                { icon: 'fa-file-alt', cls: 'blue',   val: currentGlance.pages, label: 'Pages' },
                { icon: 'fa-list-ul',  cls: 'purple', val: currentGlance.categories.length, label: 'Categories' },
                { icon: 'fa-chart-pie',cls: 'orange', val: Math.round(currentGlance.articles * 0.27), label: 'Infographics' },
                { icon: 'fa-question-circle', cls: 'pink', val: currentGlance.mcqs, label: 'MCQs' },
              ].map(s => (
                <div key={s.label} className="cmsg-box">
                  <div className={`cmsg-icon ${s.cls}`}><i className={`fas ${s.icon}`}></i></div>
                  <strong>{s.val}</strong>
                  <span>{s.label}</span>
                </div>
              ))}
            </div>
            <button className="btn-primary camag-sw-btn" onClick={() => setReadingMag(currentGlance)}>
              Read {currentGlance.label} <i className="fas fa-arrow-right"></i>
            </button>
          </div>

          {/* Top Read Magazines */}
          <div className="camag-widget">
            <div className="ca-sec-header" style={{ marginBottom: '16px' }}>
              <div className="ca-sh-left" style={{ gap: '12px' }}>
                <div className="ca-sh-icon pink" style={{ width: '28px', height: '28px', fontSize: '14px', borderRadius: '50%' }}>
                  <i className="fas fa-fire"></i>
                </div>
                <h2 style={{ fontSize: '15px' }}>Top Read Magazines</h2>
              </div>
            </div>
            <ul className="ca-mr-list">
              {[...yearData].sort((a, b) => b.views - a.views).slice(0, 5).map((mag, i) => (
                <li key={mag.month} onClick={() => setSelectedMonth(mag)} style={{ cursor: 'pointer' }}>
                  <div className={`ca-mr-rank ${i === 0 ? 'orange' : 'blue'}`}>{i + 1}</div>
                  <span className="ca-mr-title">{mag.label}</span>
                  <span className="ca-mr-views"><i className="far fa-eye"></i> {(mag.views/1000).toFixed(1)}K</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Why Read */}
          <div className="camag-widget" style={{ background: '#f0fdf4', borderColor: '#bbf7d0' }}>
            <h3 className="camag-widget-title">Why Read Our Monthly Magazine?</h3>
            <ul className="camag-why-list">
              {['Complete coverage of exam-relevant news', 'Structured and easy to revise', 'Topic-wise analysis with expert insights', 'MCQs for practice', 'Infographics, charts and mind maps', 'Useful for SSC CGL, CHSL, MTS and other exams'].map(item => (
                <li key={item}><i className="fas fa-check-circle text-green"></i> {item}</li>
              ))}
            </ul>
          </div>

          <div className="camag-student-img">
            <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=200&q=80" alt="Student" />
            <div className="ca-post-it" style={{ top: '20px', right: '-20px', transform: 'rotate(-5deg)', background: '#fef9c3', padding: '12px' }}>
              <span className="cpi-text" style={{ fontSize: '18px' }}>Read</span>
              <span className="cpi-text" style={{ fontSize: '18px' }}>Current Affairs</span>
              <span className="cpi-text" style={{ fontSize: '18px' }}>Build Perspective</span>
              <span className="cpi-text hl-green" style={{ fontSize: '18px' }}>Stay Ahead!</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default CAMagazine;
