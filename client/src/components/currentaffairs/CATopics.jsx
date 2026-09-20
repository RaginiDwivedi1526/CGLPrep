import React from 'react';

const CATopics = () => {
  return (
    <section className="container ca-section">
      <div className="catopic-layout">
        
        {/* --- Left Sidebar: Filters --- */}
        <div className="catopic-sidebar-left">
          
          <div className="catopic-header-row">
            <h3 className="catopic-sb-title">Filters</h3>
            <span className="catopic-reset">Reset All</span>
          </div>

          <div className="catopic-filter-section">
            <h4 className="catopic-fs-title">Search Topics</h4>
            <input type="text" className="catopic-search-input" placeholder="Search topic..." />
          </div>

          <div className="catopic-filter-section">
            <h4 className="catopic-fs-title">Category</h4>
            <label className="catopic-checkbox">
              <input type="checkbox" defaultChecked />
              <span className="cc-box"></span>
              <span className="cc-label">Select All</span>
            </label>
            <div className="catopic-cb-list">
              <label className="catopic-checkbox">
                <input type="checkbox" />
                <span className="cc-box"></span>
                <span className="cc-label">National</span>
                <span className="cc-count">120</span>
              </label>
              <label className="catopic-checkbox">
                <input type="checkbox" />
                <span className="cc-box"></span>
                <span className="cc-label">International</span>
                <span className="cc-count">98</span>
              </label>
              <label className="catopic-checkbox">
                <input type="checkbox" />
                <span className="cc-box"></span>
                <span className="cc-label">Economy</span>
                <span className="cc-count">86</span>
              </label>
              <label className="catopic-checkbox">
                <input type="checkbox" />
                <span className="cc-box"></span>
                <span className="cc-label">Polity & Governance</span>
                <span className="cc-count">102</span>
              </label>
              <label className="catopic-checkbox">
                <input type="checkbox" />
                <span className="cc-box"></span>
                <span className="cc-label">Science & Technology</span>
                <span className="cc-count">76</span>
              </label>
              <label className="catopic-checkbox">
                <input type="checkbox" />
                <span className="cc-box"></span>
                <span className="cc-label">Environment & Climate</span>
                <span className="cc-count">64</span>
              </label>
              <label className="catopic-checkbox">
                <input type="checkbox" />
                <span className="cc-box"></span>
                <span className="cc-label">Defence & Security</span>
                <span className="cc-count">58</span>
              </label>
              <label className="catopic-checkbox">
                <input type="checkbox" />
                <span className="cc-box"></span>
                <span className="cc-label">Schemes & Initiatives</span>
                <span className="cc-count">52</span>
              </label>
              <label className="catopic-checkbox">
                <input type="checkbox" />
                <span className="cc-box"></span>
                <span className="cc-label">Sports</span>
                <span className="cc-count">48</span>
              </label>
              <label className="catopic-checkbox">
                <input type="checkbox" />
                <span className="cc-box"></span>
                <span className="cc-label">Awards & Honours</span>
                <span className="cc-count">40</span>
              </label>
              <label className="catopic-checkbox">
                <input type="checkbox" />
                <span className="cc-box"></span>
                <span className="cc-label">Summits & Conferences</span>
                <span className="cc-count">44</span>
              </label>
              <label className="catopic-checkbox">
                <input type="checkbox" />
                <span className="cc-box"></span>
                <span className="cc-label">Reports & Index</span>
                <span className="cc-count">36</span>
              </label>
              <label className="catopic-checkbox">
                <input type="checkbox" />
                <span className="cc-box"></span>
                <span className="cc-label">Appointments</span>
                <span className="cc-count">50</span>
              </label>
              <label className="catopic-checkbox">
                <input type="checkbox" />
                <span className="cc-box"></span>
                <span className="cc-label">Miscellaneous</span>
                <span className="cc-count">30</span>
              </label>
            </div>
          </div>

          <div className="catopic-filter-section">
            <h4 className="catopic-fs-title">Content Type</h4>
            <div className="catopic-cb-list">
              <label className="catopic-checkbox"><input type="checkbox" defaultChecked /><span className="cc-box"></span><span className="cc-label">All</span></label>
              <label className="catopic-checkbox"><input type="checkbox" /><span className="cc-box"></span><span className="cc-label">News & Articles</span></label>
              <label className="catopic-checkbox"><input type="checkbox" /><span className="cc-box"></span><span className="cc-label">Study Notes</span></label>
              <label className="catopic-checkbox"><input type="checkbox" /><span className="cc-box"></span><span className="cc-label">Infographics</span></label>
              <label className="catopic-checkbox"><input type="checkbox" /><span className="cc-box"></span><span className="cc-label">MCQs</span></label>
              <label className="catopic-checkbox"><input type="checkbox" /><span className="cc-box"></span><span className="cc-label">Previous Year Questions</span></label>
              <label className="catopic-checkbox"><input type="checkbox" /><span className="cc-box"></span><span className="cc-label">PDFs</span></label>
            </div>
          </div>

          <div className="catopic-filter-section">
            <h4 className="catopic-fs-title">Sort By</h4>
            <div className="catopic-cb-list">
              <label className="catopic-radio"><input type="radio" name="sort" defaultChecked /><span className="cr-circle"></span><span className="cc-label">Latest First</span></label>
              <label className="catopic-radio"><input type="radio" name="sort" /><span className="cr-circle"></span><span className="cc-label">Most Viewed</span></label>
              <label className="catopic-radio"><input type="radio" name="sort" /><span className="cr-circle"></span><span className="cc-label">A to Z</span></label>
            </div>
          </div>

          <div className="catopic-promo-card">
            <div className="cpc-icon"><i className="fas fa-bullseye"></i></div>
            <p>Focused Topics.<br/>Stronger Preparation.<br/>Higher Confidence.</p>
            <div className="cpc-dots">
              <span className="cpcd bg-orange"></span>
              <span className="cpcd bg-green"></span>
              <span className="cpcd bg-blue"></span>
            </div>
          </div>

        </div>

        {/* --- Center Column: Main Content --- */}
        <div className="catopic-main-col">
          
          <div className="camag-main-header">
            <div>
              <h2 className="camag-mh-title">Current Affairs Topics (14)</h2>
              <p className="camag-mh-sub">Explore all topics with latest updates, notes, quizzes and more.</p>
            </div>
            <div className="camag-sort">
              Sort by: Most Relevant <i className="fas fa-chevron-down"></i>
            </div>
          </div>

          <div className="catopic-grid">
            {/* Card 1 */}
            <div className="catopic-card">
              <img src="https://images.unsplash.com/photo-1532375810709-75b1da00537c?auto=format&fit=crop&w=400&q=80" alt="National" className="catc-img" />
              <div className="catc-body">
                <h4>National</h4>
                <p>Government policies, initiatives, important decisions and events from India.</p>
                <div className="catc-meta">
                  <span><i className="far fa-file-alt"></i> 120 Articles</span>
                  <span className="catc-div">|</span>
                  <span><i className="fas fa-tasks"></i> 250 MCQs</span>
                </div>
                <button className="btn-outline catc-btn">View Topic <i className="fas fa-arrow-right"></i></button>
              </div>
            </div>
            {/* Card 2 */}
            <div className="catopic-card">
              <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=400&q=80" alt="International" className="catc-img" />
              <div className="catc-body">
                <h4>International</h4>
                <p>Global events, international relations, summits and important developments.</p>
                <div className="catc-meta">
                  <span><i className="far fa-file-alt"></i> 98 Articles</span>
                  <span className="catc-div">|</span>
                  <span><i className="fas fa-tasks"></i> 210 MCQs</span>
                </div>
                <button className="btn-outline catc-btn">View Topic <i className="fas fa-arrow-right"></i></button>
              </div>
            </div>
            {/* Card 3 */}
            <div className="catopic-card">
              <img src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=400&q=80" alt="Economy" className="catc-img" />
              <div className="catc-body">
                <h4>Economy</h4>
                <p>Budget, RBI, banking, inflation, economic surveys and more.</p>
                <div className="catc-meta">
                  <span><i className="far fa-file-alt"></i> 86 Articles</span>
                  <span className="catc-div">|</span>
                  <span><i className="fas fa-tasks"></i> 220 MCQs</span>
                </div>
                <button className="btn-outline catc-btn">View Topic <i className="fas fa-arrow-right"></i></button>
              </div>
            </div>
            {/* Card 4 */}
            <div className="catopic-card">
              <img src="https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=400&q=80" alt="Polity" className="catc-img" />
              <div className="catc-body">
                <h4>Polity & Governance</h4>
                <p>Constitution, government schemes, committees, bills and policies.</p>
                <div className="catc-meta">
                  <span><i className="far fa-file-alt"></i> 102 Articles</span>
                  <span className="catc-div">|</span>
                  <span><i className="fas fa-tasks"></i> 230 MCQs</span>
                </div>
                <button className="btn-outline catc-btn">View Topic <i className="fas fa-arrow-right"></i></button>
              </div>
            </div>
            {/* Card 5 */}
            <div className="catopic-card">
              <img src="https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?auto=format&fit=crop&w=400&q=80" alt="Science" className="catc-img" />
              <div className="catc-body">
                <h4>Science & Technology</h4>
                <p>Space, ISRO, AI, new inventions and technological advancements.</p>
                <div className="catc-meta">
                  <span><i className="far fa-file-alt"></i> 76 Articles</span>
                  <span className="catc-div">|</span>
                  <span><i className="fas fa-tasks"></i> 180 MCQs</span>
                </div>
                <button className="btn-outline catc-btn">View Topic <i className="fas fa-arrow-right"></i></button>
              </div>
            </div>
            {/* Card 6 */}
            <div className="catopic-card">
              <img src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=400&q=80" alt="Environment" className="catc-img" />
              <div className="catc-body">
                <h4>Environment & Climate</h4>
                <p>Climate change, COP, biodiversity, conservation and initiatives.</p>
                <div className="catc-meta">
                  <span><i className="far fa-file-alt"></i> 64 Articles</span>
                  <span className="catc-div">|</span>
                  <span><i className="fas fa-tasks"></i> 160 MCQs</span>
                </div>
                <button className="btn-outline catc-btn">View Topic <i className="fas fa-arrow-right"></i></button>
              </div>
            </div>
            {/* Card 7 */}
            <div className="catopic-card">
              <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=400&q=80" alt="Defence" className="catc-img" />
              <div className="catc-body">
                <h4>Defence & Security</h4>
                <p>Defence deals, military exercises, internal security developments.</p>
                <div className="catc-meta">
                  <span><i className="far fa-file-alt"></i> 58 Articles</span>
                  <span className="catc-div">|</span>
                  <span><i className="fas fa-tasks"></i> 170 MCQs</span>
                </div>
                <button className="btn-outline catc-btn">View Topic <i className="fas fa-arrow-right"></i></button>
              </div>
            </div>
            {/* Card 8 */}
            <div className="catopic-card">
              <img src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?auto=format&fit=crop&w=400&q=80" alt="Schemes" className="catc-img" />
              <div className="catc-body">
                <h4>Schemes & Initiatives</h4>
                <p>Government schemes, welfare programs and social initiatives.</p>
                <div className="catc-meta">
                  <span><i className="far fa-file-alt"></i> 52 Articles</span>
                  <span className="catc-div">|</span>
                  <span><i className="fas fa-tasks"></i> 160 MCQs</span>
                </div>
                <button className="btn-outline catc-btn">View Topic <i className="fas fa-arrow-right"></i></button>
              </div>
            </div>
            {/* Card 9 */}
            <div className="catopic-card">
              <img src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=400&q=80" alt="Sports" className="catc-img" />
              <div className="catc-body">
                <h4>Sports</h4>
                <p>Major sports events, tournaments, records and personalities.</p>
                <div className="catc-meta">
                  <span><i className="far fa-file-alt"></i> 48 Articles</span>
                  <span className="catc-div">|</span>
                  <span><i className="fas fa-tasks"></i> 140 MCQs</span>
                </div>
                <button className="btn-outline catc-btn">View Topic <i className="fas fa-arrow-right"></i></button>
              </div>
            </div>
            {/* Card 10 */}
            <div className="catopic-card">
              <img src="https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?auto=format&fit=crop&w=400&q=80" alt="Awards" className="catc-img" />
              <div className="catc-body">
                <h4>Awards & Honours</h4>
                <p>National and international awards, important recognitions.</p>
                <div className="catc-meta">
                  <span><i className="far fa-file-alt"></i> 40 Articles</span>
                  <span className="catc-div">|</span>
                  <span><i className="fas fa-tasks"></i> 120 MCQs</span>
                </div>
                <button className="btn-outline catc-btn">View Topic <i className="fas fa-arrow-right"></i></button>
              </div>
            </div>
            {/* Card 11 */}
            <div className="catopic-card">
              <img src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=400&q=80" alt="Summits" className="catc-img" />
              <div className="catc-body">
                <h4>Summits & Conferences</h4>
                <p>Important summits, conferences and global meetings.</p>
                <div className="catc-meta">
                  <span><i className="far fa-file-alt"></i> 44 Articles</span>
                  <span className="catc-div">|</span>
                  <span><i className="fas fa-tasks"></i> 130 MCQs</span>
                </div>
                <button className="btn-outline catc-btn">View Topic <i className="fas fa-arrow-right"></i></button>
              </div>
            </div>
            {/* Card 12 */}
            <div className="catopic-card">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80" alt="Reports" className="catc-img" />
              <div className="catc-body">
                <h4>Reports & Index</h4>
                <p>Important reports, ranking indexes and global studies.</p>
                <div className="catc-meta">
                  <span><i className="far fa-file-alt"></i> 36 Articles</span>
                  <span className="catc-div">|</span>
                  <span><i className="fas fa-tasks"></i> 120 MCQs</span>
                </div>
                <button className="btn-outline catc-btn">View Topic <i className="fas fa-arrow-right"></i></button>
              </div>
            </div>
            {/* Card 13 */}
            <div className="catopic-card">
              <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=400&q=80" alt="Appointments" className="catc-img" />
              <div className="catc-body">
                <h4>Appointments</h4>
                <p>Key appointments in government, organizations and institutions.</p>
                <div className="catc-meta">
                  <span><i className="far fa-file-alt"></i> 50 Articles</span>
                  <span className="catc-div">|</span>
                  <span><i className="fas fa-tasks"></i> 140 MCQs</span>
                </div>
                <button className="btn-outline catc-btn">View Topic <i className="fas fa-arrow-right"></i></button>
              </div>
            </div>
            {/* Card 14 */}
            <div className="catopic-card">
              <img src="https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&w=400&q=80" alt="Miscellaneous" className="catc-img" />
              <div className="catc-body">
                <h4>Miscellaneous</h4>
                <p>Important and diverse topics from current affairs.</p>
                <div className="catc-meta">
                  <span><i className="far fa-file-alt"></i> 30 Articles</span>
                  <span className="catc-div">|</span>
                  <span><i className="fas fa-tasks"></i> 100 MCQs</span>
                </div>
                <button className="btn-outline catc-btn">View Topic <i className="fas fa-arrow-right"></i></button>
              </div>
            </div>
          </div>
          
        </div>

        {/* --- Right Sidebar: Stats & Widgets --- */}
        <div className="catopic-sidebar-right">
          
          <div className="camag-widget">
            <h3 className="camag-widget-title">Current Affairs Highlights</h3>
            <p className="camag-widget-sub">Key topics you should not miss</p>
            <ul className="cat-hl-list">
              <li>
                <div className="cat-hl-icon blue"><i className="fas fa-landmark"></i></div>
                <span>Union Budget 2026 - Key Takeaways</span>
              </li>
              <li>
                <div className="cat-hl-icon orange"><i className="fas fa-globe"></i></div>
                <span>India at G20: Major Outcomes</span>
              </li>
              <li>
                <div className="cat-hl-icon green"><i className="fas fa-rocket"></i></div>
                <span>ISRO's Latest Space Mission</span>
              </li>
              <li>
                <div className="cat-hl-icon purple"><i className="fas fa-gavel"></i></div>
                <span>New Criminal Laws Implementation</span>
              </li>
              <li>
                <div className="cat-hl-icon pink"><i className="fas fa-user-tie"></i></div>
                <span>Major Appointments (August 2026)</span>
              </li>
            </ul>
          </div>

          <div className="camag-widget">
            <div className="ca-sec-header" style={{ marginBottom: '16px' }}>
              <div className="ca-sh-left">
                <h2 style={{ fontSize: '15px' }}>Most Viewed Topics</h2>
              </div>
              <div className="ca-view-all" style={{ border: '1px solid #e2e8f0', padding: '4px 8px', borderRadius: '4px', color: '#64748b', fontSize: '10px' }}>This Month <i className="fas fa-chevron-down"></i></div>
            </div>

            <ul className="ca-mr-list">
              <li>
                <div className="ca-mr-rank orange">1</div>
                <span className="ca-mr-title">Economy</span>
                <span className="ca-mr-views"><i className="far fa-eye"></i> 12.4K</span>
              </li>
              <li>
                <div className="ca-mr-rank blue">2</div>
                <span className="ca-mr-title">National</span>
                <span className="ca-mr-views"><i className="far fa-eye"></i> 10.8K</span>
              </li>
              <li>
                <div className="ca-mr-rank blue">3</div>
                <span className="ca-mr-title">Science & Technology</span>
                <span className="ca-mr-views"><i className="far fa-eye"></i> 9.6K</span>
              </li>
              <li>
                <div className="ca-mr-rank blue">4</div>
                <span className="ca-mr-title">International</span>
                <span className="ca-mr-views"><i className="far fa-eye"></i> 8.9K</span>
              </li>
              <li>
                <div className="ca-mr-rank blue">5</div>
                <span className="ca-mr-title">Schemes & Initiatives</span>
                <span className="ca-mr-views"><i className="far fa-eye"></i> 7.4K</span>
              </li>
            </ul>
          </div>

          <div className="camag-widget">
            <div className="ca-sec-header" style={{ marginBottom: '16px' }}>
              <div className="ca-sh-left">
                <h2 style={{ fontSize: '15px' }}>Latest Topic Updates</h2>
              </div>
              <div className="ca-view-all">View All <i className="fas fa-arrow-right"></i></div>
            </div>

            <div className="cat-ltu-list">
              <div className="cat-ltu-item">
                <img src="https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?auto=format&fit=crop&w=80&q=80" alt="News" className="cat-ltu-img" />
                <div className="cat-ltu-body">
                  <h4>India to Host G20 Education Working Group Meet in 2026</h4>
                  <div className="cat-ltu-meta"><span className="cat-tag blue">International</span> | 12 Sep 2026</div>
                </div>
              </div>
              <div className="cat-ltu-item">
                <img src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=80&q=80" alt="News" className="cat-ltu-img" />
                <div className="cat-ltu-body">
                  <h4>RBI Keeps Repo Rate Unchanged at 6.50%</h4>
                  <div className="cat-ltu-meta"><span className="cat-tag green">Economy</span> | 12 Sep 2026</div>
                </div>
              </div>
              <div className="cat-ltu-item">
                <img src="https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?auto=format&fit=crop&w=80&q=80" alt="News" className="cat-ltu-img" />
                <div className="cat-ltu-body">
                  <h4>ISRO Launches INSAT-3DS Weather Satellite</h4>
                  <div className="cat-ltu-meta"><span className="cat-tag purple">Science & Tech</span> | 11 Sep 2026</div>
                </div>
              </div>
              <div className="cat-ltu-item">
                <img src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=80&q=80" alt="News" className="cat-ltu-img" />
                <div className="cat-ltu-body">
                  <h4>Rajasthan Implements Green Budgeting</h4>
                  <div className="cat-ltu-meta"><span className="cat-tag orange">Environment</span> | 11 Sep 2026</div>
                </div>
              </div>
              <div className="cat-ltu-item">
                <img src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=80&q=80" alt="News" className="cat-ltu-img" />
                <div className="cat-ltu-body">
                  <h4>Khelo India Youth Games 2026 Announced</h4>
                  <div className="cat-ltu-meta"><span className="cat-tag pink">Sports</span> | 10 Sep 2026</div>
                </div>
              </div>
            </div>
          </div>

          <div className="ca-quote-widget" style={{ padding: '24px', background: '#e0f2fe', borderColor: '#bae6fd' }}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/A._P._J._Abdul_Kalam.jpg/240px-A._P._J._Abdul_Kalam.jpg" alt="Kalam" className="ca-quote-img" style={{ width: '50px', height: '50px', borderRadius: '50%', objectFit: 'cover' }} />
            <div className="ca-quote-content">
              <p style={{ fontSize: '18px', color: '#0369a1' }}>"If you want to shine like a sun, first burn like a sun."</p>
              <strong style={{ color: '#0284c7' }}>— Dr. A.P.J. Abdul Kalam</strong>
            </div>
          </div>

          <div className="catopic-suggest-widget">
            <div className="csw-icon"><i className="fas fa-lightbulb"></i></div>
            <div className="csw-content">
              <h4>Can't find a topic?</h4>
              <p>Suggest a topic and we will add it for you.</p>
              <button className="btn-outline csw-btn">Suggest a Topic <i className="fas fa-arrow-right"></i></button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default CATopics;
