import React, { useState } from 'react';

const CAMagazine = () => {
  const [openYear, setOpenYear] = useState('2026');

  return (
    <section className="container ca-section">
      <div className="camag-layout">
        
        {/* --- Left Sidebar: Filters --- */}
        <div className="camag-sidebar-left">
          
          <div className="camag-filter-box">
            <h3 className="camag-fb-title">Years</h3>
            <div className="camag-accordion">
              <div className="camag-acc-item">
                <div className={`camag-acc-header ${openYear === '2026' ? 'active' : ''}`} onClick={() => setOpenYear('2026')}>
                  <span>2026</span>
                  <i className="fas fa-chevron-down"></i>
                </div>
              </div>
              <div className="camag-acc-item">
                <div className={`camag-acc-header ${openYear === '2025' ? 'active' : ''}`} onClick={() => setOpenYear('2025')}>
                  <span>2025</span>
                  <i className="fas fa-chevron-down"></i>
                </div>
              </div>
              <div className="camag-acc-item">
                <div className={`camag-acc-header ${openYear === '2024' ? 'active' : ''}`} onClick={() => setOpenYear('2024')}>
                  <span>2024</span>
                  <i className="fas fa-chevron-down"></i>
                </div>
              </div>
              <div className="camag-acc-item">
                <div className="camag-acc-header"><span>2023</span><i className="fas fa-chevron-down"></i></div>
              </div>
              <div className="camag-acc-item">
                <div className="camag-acc-header"><span>2022</span><i className="fas fa-chevron-down"></i></div>
              </div>
              <div className="camag-acc-item">
                <div className="camag-acc-header"><span>2021</span><i className="fas fa-chevron-down"></i></div>
              </div>
              <div className="camag-acc-item">
                <div className="camag-acc-header"><span>2020</span><i className="fas fa-chevron-down"></i></div>
              </div>
              <div className="camag-acc-item">
                <div className="camag-acc-header"><span>2019</span><i className="fas fa-chevron-down"></i></div>
              </div>
            </div>
          </div>

          <div className="camag-filter-box">
            <h3 className="camag-fb-title">Quick Filters</h3>
            <div className="camag-qf-list">
              <label className="camag-qf-item active">
                <div className="cqf-checkbox"><i className="fas fa-check"></i></div>
                <span className="cqf-label">All Months</span>
              </label>
              <label className="camag-qf-item">
                <div className="cqf-icon blue"><i className="fas fa-download"></i></div>
                <span className="cqf-label">Downloaded</span>
              </label>
              <label className="camag-qf-item">
                <div className="cqf-icon red"><i className="fas fa-cloud-download-alt"></i></div>
                <span className="cqf-label">Not Downloaded</span>
              </label>
              <label className="camag-qf-item">
                <div className="cqf-icon orange"><i className="fas fa-fire"></i></div>
                <span className="cqf-label">Most Popular</span>
              </label>
              <label className="camag-qf-item">
                <div className="cqf-icon blue-light"><i className="far fa-clock"></i></div>
                <span className="cqf-label">Latest</span>
              </label>
            </div>
          </div>

          <div className="camag-filter-box">
            <h3 className="camag-fb-title">Categories</h3>
            <ul className="camag-cat-list">
              <li><i className="fas fa-map-marker-alt text-orange"></i> National</li>
              <li><i className="fas fa-globe-americas text-blue"></i> International</li>
              <li><i className="fas fa-coins text-green"></i> Economy</li>
              <li><i className="fas fa-university text-purple"></i> Polity & Governance</li>
              <li><i className="fas fa-seedling text-blue"></i> Schemes & Initiatives</li>
              <li><i className="fas fa-flask text-pink"></i> Science & Technology</li>
              <li><i className="fas fa-leaf text-green"></i> Environment & Climate</li>
              <li><i className="fas fa-shield-alt text-red"></i> Defence & Security</li>
              <li><i className="fas fa-running text-red"></i> Sports</li>
              <li><i className="fas fa-trophy text-gold"></i> Awards & Honours</li>
              <li><i className="fas fa-users text-blue"></i> Summits & Conferences</li>
              <li><i className="fas fa-list text-gray"></i> Miscellaneous</li>
            </ul>
          </div>

          <div className="camag-quote-box">
            <div className="cmq-icon"><i className="fas fa-quote-left"></i></div>
            <p>"A well-read mind is always a step ahead in the exam."</p>
            <span>— CGLPrep AI</span>
          </div>

        </div>

        {/* --- Center Column: Main Content --- */}
        <div className="camag-main-col">
          
          <div className="camag-main-header">
            <div>
              <h2 className="camag-mh-title">Magazine Issues (2026)</h2>
              <p className="camag-mh-sub">Click on any month to read online or download the magazine.</p>
            </div>
            <div className="camag-sort">
              Sort by: Latest First <i className="fas fa-chevron-down"></i>
            </div>
          </div>

          <div className="camag-grid">
            {/* Mag 1 */}
            <div className="camag-card">
              <img src="/images/currentaffairs/camag-cover-sep.jpg" alt="September 2026" className="camag-cover" />
              <div className="camag-card-body">
                <h4>September 2026</h4>
                <p>A month of big decisions and global milestones.</p>
                <div className="camag-actions">
                  <button className="btn-primary camag-btn-read">Read Online</button>
                  <button className="btn-outline camag-btn-dl"><i className="fas fa-download"></i></button>
                </div>
                <div className="camag-meta">PDF • 12 MB • 68 Pages</div>
              </div>
            </div>
            {/* Mag 2 */}
            <div className="camag-card">
              <img src="/images/currentaffairs/camag-cover-aug.jpg" alt="August 2026" className="camag-cover" />
              <div className="camag-card-body">
                <h4>August 2026</h4>
                <p>Policy shifts and key developments.</p>
                <div className="camag-actions">
                  <button className="btn-primary camag-btn-read">Read Online</button>
                  <button className="btn-outline camag-btn-dl"><i className="fas fa-download"></i></button>
                </div>
                <div className="camag-meta">PDF • 11 MB • 64 Pages</div>
              </div>
            </div>
            {/* Mag 3 */}
            <div className="camag-card">
              <img src="/images/currentaffairs/camag-cover-jul.jpg" alt="July 2026" className="camag-cover" />
              <div className="camag-card-body">
                <h4>July 2026</h4>
                <p>From Chandrayaan to Change-makers.</p>
                <div className="camag-actions">
                  <button className="btn-primary camag-btn-read">Read Online</button>
                  <button className="btn-outline camag-btn-dl"><i className="fas fa-download"></i></button>
                </div>
                <div className="camag-meta">PDF • 10 MB • 60 Pages</div>
              </div>
            </div>
            {/* Mag 4 */}
            <div className="camag-card">
              <img src="/images/currentaffairs/camag-cover-jun.jpg" alt="June 2026" className="camag-cover" />
              <div className="camag-card-body">
                <h4>June 2026</h4>
                <p>A greener and safer tomorrow.</p>
                <div className="camag-actions">
                  <button className="btn-primary camag-btn-read">Read Online</button>
                  <button className="btn-outline camag-btn-dl"><i className="fas fa-download"></i></button>
                </div>
                <div className="camag-meta">PDF • 12 MB • 68 Pages</div>
              </div>
            </div>
            {/* Mag 5 */}
            <div className="camag-card">
              <img src="/images/currentaffairs/camag-cover-may.jpg" alt="May 2026" className="camag-cover" />
              <div className="camag-card-body">
                <h4>May 2026</h4>
                <p>Trade, ties and transformation.</p>
                <div className="camag-actions">
                  <button className="btn-primary camag-btn-read">Read Online</button>
                  <button className="btn-outline camag-btn-dl"><i className="fas fa-download"></i></button>
                </div>
                <div className="camag-meta">PDF • 9 MB • 68 Pages</div>
              </div>
            </div>
            {/* Mag 6 */}
            <div className="camag-card">
              <img src="/images/currentaffairs/camag-cover-apr.jpg" alt="April 2026" className="camag-cover" />
              <div className="camag-card-body">
                <h4>April 2026</h4>
                <p>Reforms, resilience and new opportunities.</p>
                <div className="camag-actions">
                  <button className="btn-primary camag-btn-read">Read Online</button>
                  <button className="btn-outline camag-btn-dl"><i className="fas fa-download"></i></button>
                </div>
                <div className="camag-meta">PDF • 10 MB • 60 Pages</div>
              </div>
            </div>
          </div>

          <div className="camag-load-more">
            <button className="btn-outline">Load More Months <i className="fas fa-chevron-down"></i></button>
          </div>

          {/* Also Explore */}
          <div className="camag-explore-sec">
            <h3 className="camag-explore-title">Also Explore</h3>
            <div className="camag-explore-grid">
              <div className="ca-exp-card">
                <div className="ca-exp-icon purple"><i className="fas fa-calendar-day"></i></div>
                <h4>Today's Update</h4>
                <p>Latest news with quick analysis</p>
              </div>
              <div className="ca-exp-card">
                <div className="ca-exp-icon green"><i className="fas fa-book-open"></i></div>
                <h4>Topic-wise</h4>
                <p>Read by subjects and categories</p>
              </div>
              <div className="ca-exp-card">
                <div className="ca-exp-icon blue"><i className="fas fa-list-ul"></i></div>
                <h4>MCQs & Quizzes</h4>
                <p>Test what you read with practice questions</p>
              </div>
              <div className="ca-exp-card">
                <div className="ca-exp-icon red"><i className="fas fa-history"></i></div>
                <h4>Year-wise Papers</h4>
                <p>Access past year current affairs</p>
              </div>
              <div className="ca-exp-card">
                <div className="ca-exp-icon orange"><i className="fas fa-folder-open"></i></div>
                <h4>Important Documents</h4>
                <p>Reports, schemes, committees, etc.</p>
              </div>
              <div className="ca-exp-card">
                <div className="ca-exp-icon blue-light"><i className="fas fa-search-plus"></i></div>
                <h4>News Analysis</h4>
                <p>In-depth insights and editorials</p>
              </div>
            </div>
          </div>

        </div>

        {/* --- Right Sidebar: Stats & Widgets --- */}
        <div className="camag-sidebar-right">
          
          <div className="camag-widget">
            <h3 className="camag-widget-title">This Month at a Glance</h3>
            <p className="camag-widget-sub">September 2026</p>
            <div className="camag-stats-grid">
              <div className="cmsg-box">
                <div className="cmsg-icon blue"><i className="fas fa-file-alt"></i></div>
                <strong>68</strong>
                <span>Pages</span>
              </div>
              <div className="cmsg-box">
                <div className="cmsg-icon purple"><i className="fas fa-list-ul"></i></div>
                <strong>12</strong>
                <span>Major Topics</span>
              </div>
              <div className="cmsg-box">
                <div className="cmsg-icon orange"><i className="fas fa-chart-pie"></i></div>
                <strong>25</strong>
                <span>Infographics</span>
              </div>
              <div className="cmsg-box">
                <div className="cmsg-icon pink"><i className="fas fa-question-circle"></i></div>
                <strong>40</strong>
                <span>MCQs</span>
              </div>
            </div>
            <button className="btn-primary camag-sw-btn">Read September 2026 <i className="fas fa-arrow-right"></i></button>
          </div>

          <div className="camag-widget">
            <div className="ca-sec-header" style={{ marginBottom: '16px' }}>
              <div className="ca-sh-left" style={{ gap: '12px' }}>
                <div className="ca-sh-icon pink" style={{ width: '28px', height: '28px', fontSize: '14px', borderRadius: '50%' }}><i className="fas fa-fire"></i></div>
                <h2 style={{ fontSize: '15px' }}>Top Read Magazines</h2>
              </div>
            </div>

            <ul className="ca-mr-list">
              <li>
                <div className="ca-mr-rank orange">1</div>
                <span className="ca-mr-title">September 2026</span>
                <span className="ca-mr-views"><i className="far fa-eye"></i> 12.4K</span>
              </li>
              <li>
                <div className="ca-mr-rank blue">2</div>
                <span className="ca-mr-title">August 2026</span>
                <span className="ca-mr-views"><i className="far fa-eye"></i> 10.8K</span>
              </li>
              <li>
                <div className="ca-mr-rank blue">3</div>
                <span className="ca-mr-title">July 2026</span>
                <span className="ca-mr-views"><i className="far fa-eye"></i> 9.6K</span>
              </li>
              <li>
                <div className="ca-mr-rank blue">4</div>
                <span className="ca-mr-title">June 2026</span>
                <span className="ca-mr-views"><i className="far fa-eye"></i> 8.9K</span>
              </li>
              <li>
                <div className="ca-mr-rank blue">5</div>
                <span className="ca-mr-title">May 2026</span>
                <span className="ca-mr-views"><i className="far fa-eye"></i> 7.4K</span>
              </li>
            </ul>
          </div>

          <div className="camag-widget" style={{ background: '#f0fdf4', borderColor: '#bbf7d0' }}>
            <h3 className="camag-widget-title">Why Read Our Monthly Magazine?</h3>
            <ul className="camag-why-list">
              <li><i className="fas fa-check-circle text-green"></i> Complete coverage of exam-relevant news</li>
              <li><i className="fas fa-check-circle text-green"></i> Structured and easy to revise</li>
              <li><i className="fas fa-check-circle text-green"></i> Topic-wise analysis with expert insights</li>
              <li><i className="fas fa-check-circle text-green"></i> MCQs for practice</li>
              <li><i className="fas fa-check-circle text-green"></i> Infographics, charts and mind maps</li>
              <li><i className="fas fa-check-circle text-green"></i> Useful for SSC CGL, CHSL, MTS and other exams</li>
            </ul>
          </div>

          <div className="camag-student-img">
            <img src="/images/currentaffairs/camag-student.jpg" alt="Student" />
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
