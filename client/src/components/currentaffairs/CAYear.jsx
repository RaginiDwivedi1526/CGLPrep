import React from 'react';

const CAYear = () => {
  return (
    <section className="container ca-section">
      <div className="cayear-layout">
        
        {/* --- Left Sidebar: Filters --- */}
        <div className="cayear-sidebar-left">
          
          <div className="catopic-header-row">
            <h3 className="catopic-sb-title">Filters</h3>
            <span className="catopic-reset">Reset All</span>
          </div>

          <div className="catopic-filter-section">
            <h4 className="catopic-fs-title">Select Years</h4>
            <div className="catopic-cb-list">
              <label className="catopic-checkbox"><input type="checkbox" defaultChecked /><span className="cc-box"></span><span className="cc-label" style={{ fontWeight: 600 }}>2026</span></label>
              <label className="catopic-checkbox"><input type="checkbox" /><span className="cc-box"></span><span className="cc-label">2025</span></label>
              <label className="catopic-checkbox"><input type="checkbox" /><span className="cc-box"></span><span className="cc-label">2024</span></label>
              <label className="catopic-checkbox"><input type="checkbox" /><span className="cc-box"></span><span className="cc-label">2023</span></label>
              <label className="catopic-checkbox"><input type="checkbox" /><span className="cc-box"></span><span className="cc-label">2022</span></label>
              <label className="catopic-checkbox"><input type="checkbox" /><span className="cc-box"></span><span className="cc-label">2021</span></label>
              <label className="catopic-checkbox"><input type="checkbox" /><span className="cc-box"></span><span className="cc-label">2020</span></label>
              <label className="catopic-checkbox"><input type="checkbox" /><span className="cc-box"></span><span className="cc-label">2019</span></label>
              <label className="catopic-checkbox"><input type="checkbox" /><span className="cc-box"></span><span className="cc-label">2017</span></label>
              <label className="catopic-checkbox" style={{ marginTop: '8px' }}>
                <span className="cc-label" style={{ color: '#3b82f6', cursor: 'pointer' }}>Earlier Years <i className="fas fa-chevron-down" style={{ fontSize: '10px' }}></i></span>
              </label>
            </div>
          </div>

          <div className="catopic-filter-section">
            <h4 className="catopic-fs-title">Content Type</h4>
            <div className="catopic-cb-list">
              <label className="catopic-checkbox"><input type="checkbox" defaultChecked /><span className="cc-box"></span><span className="cc-label" style={{ fontWeight: 600 }}>All</span></label>
              <label className="catopic-checkbox"><input type="checkbox" /><span className="cc-box"></span><span className="cc-label">News & Articles</span></label>
              <label className="catopic-checkbox"><input type="checkbox" /><span className="cc-box"></span><span className="cc-label">PDF Notes</span></label>
              <label className="catopic-checkbox"><input type="checkbox" /><span className="cc-box"></span><span className="cc-label">Infographics</span></label>
              <label className="catopic-checkbox"><input type="checkbox" /><span className="cc-box"></span><span className="cc-label">MCQs</span></label>
              <label className="catopic-checkbox"><input type="checkbox" /><span className="cc-box"></span><span className="cc-label">Summary Sheets</span></label>
              <label className="catopic-checkbox"><input type="checkbox" /><span className="cc-box"></span><span className="cc-label">Important Documents</span></label>
            </div>
          </div>

          <div className="catopic-filter-section">
            <h4 className="catopic-fs-title">Exam Focus</h4>
            <div className="catopic-cb-list">
              <label className="catopic-checkbox"><input type="checkbox" defaultChecked /><span className="cc-box"></span><span className="cc-label" style={{ fontWeight: 600 }}>SSC CGL</span></label>
              <label className="catopic-checkbox"><input type="checkbox" /><span className="cc-box"></span><span className="cc-label">SSC CHSL</span></label>
              <label className="catopic-checkbox"><input type="checkbox" /><span className="cc-box"></span><span className="cc-label">SSC MTS</span></label>
              <label className="catopic-checkbox"><input type="checkbox" /><span className="cc-box"></span><span className="cc-label">Banking</span></label>
              <label className="catopic-checkbox"><input type="checkbox" /><span className="cc-box"></span><span className="cc-label">State Exams</span></label>
              <label className="catopic-checkbox"><input type="checkbox" /><span className="cc-box"></span><span className="cc-label">General Awareness</span></label>
            </div>
          </div>

          <div className="cadocs-promo-card" style={{ background: '#f0fdf4', borderColor: '#bbf7d0' }}>
            <div className="cdpc-icon"><i className="far fa-calendar-alt text-green"></i></div>
            <p style={{ fontSize: '16px', fontWeight: '700', color: '#166534', marginTop: '8px' }}>Revise the Past.<br/>Crack the Future.</p>
            <div className="cdpc-flag" style={{ transform: 'skewX(-15deg)', marginTop: '24px', width: '60px' }}>
              <span className="cdpcf orange"></span>
              <span className="cdpcf white"></span>
              <span className="cdpcf green"></span>
            </div>
          </div>

        </div>

        {/* --- Center Column: Main Content --- */}
        <div className="cayear-main-col">
          
          <div className="ca-sec-header" style={{ marginBottom: '24px' }}>
            <div className="ca-sh-left">
              <h2>Select a Year</h2>
              <p>Click on a year to explore all important current affairs from that period.</p>
            </div>
            <div className="cayear-sort">
              <select className="catopic-sort-select" style={{ padding: '8px 12px', background: 'white' }}>
                <option>Latest Year First</option>
                <option>Oldest Year First</option>
              </select>
            </div>
          </div>

          <div className="cayear-grid">
            <div className="cyg-card active">
              <div className="cygc-img-wrap">
                <span className="cygc-tag"><i className="fas fa-star text-white"></i> Current Year</span>
                <img src="/images/currentaffairs/cayear-2026.jpg" alt="2026" />
                <div className="cygc-overlay"><h3>2026</h3></div>
              </div>
              <div className="cygc-body">
                <h4>1,240 Articles</h4>
                <p>Latest updates, ongoing events, and exam-focused coverage.</p>
                <button className="btn-outline">Explore 2026 <i className="fas fa-arrow-right"></i></button>
              </div>
            </div>
            
            <div className="cyg-card">
              <div className="cygc-img-wrap">
                <img src="/images/currentaffairs/cayear-2025.jpg" alt="2025" />
                <div className="cygc-overlay"><h3>2025</h3></div>
              </div>
              <div className="cygc-body">
                <h4>2,180 Articles</h4>
                <p>Major events, policies, schemes and appointments of 2025.</p>
                <button className="btn-outline">Explore 2025 <i className="fas fa-arrow-right"></i></button>
              </div>
            </div>

            <div className="cyg-card">
              <div className="cygc-img-wrap">
                <img src="/images/currentaffairs/cayear-2024.jpg" alt="2024" />
                <div className="cygc-overlay"><h3>2024</h3></div>
              </div>
              <div className="cygc-body">
                <h4>2,050 Articles</h4>
                <p>Important national and global developments of 2024.</p>
                <button className="btn-outline">Explore 2024 <i className="fas fa-arrow-right"></i></button>
              </div>
            </div>

            <div className="cyg-card">
              <div className="cygc-img-wrap">
                <img src="/images/currentaffairs/cayear-2023.jpg" alt="2023" />
                <div className="cygc-overlay"><h3>2023</h3></div>
              </div>
              <div className="cygc-body">
                <h4>1,980 Articles</h4>
                <p>G20, economic reforms, key policies and more from 2023.</p>
                <button className="btn-outline">Explore 2023 <i className="fas fa-arrow-right"></i></button>
              </div>
            </div>

            <div className="cyg-card">
              <div className="cygc-img-wrap">
                <img src="/images/currentaffairs/cayear-2022.jpg" alt="2022" />
                <div className="cygc-overlay"><h3>2022</h3></div>
              </div>
              <div className="cygc-body">
                <h4>1,760 Articles</h4>
                <p>Schemes, national events and major decisions of 2022.</p>
                <button className="btn-outline">Explore 2022 <i className="fas fa-arrow-right"></i></button>
              </div>
            </div>

            <div className="cyg-card">
              <div className="cygc-img-wrap">
                <img src="/images/currentaffairs/cayear-2021.jpg" alt="2021" />
                <div className="cygc-overlay"><h3>2021</h3></div>
              </div>
              <div className="cygc-body">
                <h4>1,620 Articles</h4>
                <p>Pandemic response, policies and key developments of 2021.</p>
                <button className="btn-outline">Explore 2021 <i className="fas fa-arrow-right"></i></button>
              </div>
            </div>

            <div className="cyg-card">
              <div className="cygc-img-wrap">
                <img src="/images/currentaffairs/cayear-2020.jpg" alt="2020" />
                <div className="cygc-overlay"><h3>2020</h3></div>
              </div>
              <div className="cygc-body">
                <h4>1,540 Articles</h4>
                <p>COVID-19, economic measures and global changes in 2020.</p>
                <button className="btn-outline">Explore 2020 <i className="fas fa-arrow-right"></i></button>
              </div>
            </div>

            <div className="cyg-card">
              <div className="cygc-img-wrap">
                <img src="/images/currentaffairs/cayear-2019.jpg" alt="2019" />
                <div className="cygc-overlay"><h3>2019</h3></div>
              </div>
              <div className="cygc-body">
                <h4>1,420 Articles</h4>
                <p>Elections, new schemes and important events of 2019.</p>
                <button className="btn-outline">Explore 2019 <i className="fas fa-arrow-right"></i></button>
              </div>
            </div>
          </div>

          <div className="ca-sec-header" style={{ marginTop: '32px', marginBottom: '16px' }}>
            <div className="ca-sh-left">
              <h2>What You'll Get in Each Year</h2>
            </div>
          </div>

          <div className="cayear-features-row">
            <div className="cyf-item">
              <div className="cyf-icon blue-light"><i className="fas fa-newspaper text-blue"></i></div>
              <h4>Major News & Events</h4>
              <p>National & International</p>
            </div>
            <div className="cyf-item">
              <div className="cyf-icon green-light"><i className="fas fa-university text-green"></i></div>
              <h4>Government Schemes</h4>
              <p>Launches & Updates</p>
            </div>
            <div className="cyf-item">
              <div className="cyf-icon purple-light"><i className="fas fa-user-tie text-purple"></i></div>
              <h4>Appointments</h4>
              <p>Key Personalities</p>
            </div>
            <div className="cyf-item">
              <div className="cyf-icon orange-light"><i className="fas fa-trophy text-orange"></i></div>
              <h4>Awards & Honours</h4>
              <p>National & International</p>
            </div>
            <div className="cyf-item">
              <div className="cyf-icon pink-light"><i className="fas fa-chart-bar text-pink"></i></div>
              <h4>Reports & Indices</h4>
              <p>Important Rankings</p>
            </div>
            <div className="cyf-item">
              <div className="cyf-icon blue-light"><i className="fas fa-users text-blue"></i></div>
              <h4>Summits & Conferences</h4>
              <p>Global & National</p>
            </div>
          </div>

          <div className="cayear-split-bottom" style={{ marginTop: '40px' }}>
            <div className="cysb-left">
              <div className="ca-sec-header" style={{ marginBottom: '16px' }}>
                <div className="ca-sh-left">
                  <h2>Recent Additions (2026)</h2>
                </div>
                <div className="ca-view-all">View All <i className="fas fa-arrow-right"></i></div>
              </div>
              <ul className="cysb-list">
                <li>
                  <img src="/images/currentaffairs/cayear-add1.jpg" alt="News" />
                  <div className="cysbl-info">
                    <h4>India to Host G20 Education Working Group Meet in 2026</h4>
                  </div>
                  <span className="cysbl-date">12 Sep 2026</span>
                </li>
                <li>
                  <img src="/images/currentaffairs/cayear-add2.jpg" alt="News" />
                  <div className="cysbl-info">
                    <h4>RBI Keeps Repo Rate Unchanged at 6.50%</h4>
                  </div>
                  <span className="cysbl-date">12 Sep 2026</span>
                </li>
                <li>
                  <img src="/images/currentaffairs/cayear-add3.jpg" alt="News" />
                  <div className="cysbl-info">
                    <h4>Rajasthan Becomes 1st State to Implement 'Green Budgeting'</h4>
                  </div>
                  <span className="cysbl-date">11 Sep 2026</span>
                </li>
                <li>
                  <img src="/images/currentaffairs/cayear-add4.jpg" alt="News" />
                  <div className="cysbl-info">
                    <h4>UN Adopts Global Pact on AI Governance</h4>
                  </div>
                  <span className="cysbl-date">11 Sep 2026</span>
                </li>
                <li>
                  <img src="/images/currentaffairs/cayear-add5.jpg" alt="News" />
                  <div className="cysbl-info">
                    <h4>ISRO Launches INSAT-3DS Weather Satellite</h4>
                  </div>
                  <span className="cysbl-date">10 Sep 2026</span>
                </li>
              </ul>
            </div>

            <div className="cysb-right">
              <div className="cayear-revision-card">
                <div className="cyrc-header">
                  <div className="cyrc-icon"><i className="fas fa-book-open"></i></div>
                  <div>
                    <h3>Quick Revision</h3>
                    <p>Use year-wise notes for last-minute revision before your exam.</p>
                  </div>
                </div>
                <ul className="cyrc-list">
                  <li><i className="fas fa-check-circle"></i> Chapter-wise segmentation</li>
                  <li><i className="fas fa-check-circle"></i> Exam-oriented highlights</li>
                  <li><i className="fas fa-check-circle"></i> Downloadable PDFs</li>
                  <li><i className="fas fa-check-circle"></i> Useful for revision & mock tests</li>
                </ul>
                <button className="btn-primary" style={{ width: '100%', background: '#16a34a', border: 'none', marginTop: '16px' }}>Start Revising Now <i className="fas fa-arrow-right"></i></button>
              </div>
            </div>
          </div>

        </div>

        {/* --- Right Sidebar: Stats & Widgets --- */}
        <div className="cayear-sidebar-right">
          
          <div className="camag-widget">
            <div className="ca-sec-header" style={{ marginBottom: '16px' }}>
              <div className="ca-sh-left" style={{ gap: '8px' }}>
                <div className="ca-sh-icon blue-light" style={{ width: '28px', height: '28px', fontSize: '14px', borderRadius: '50%' }}><i className="fas fa-chart-bar"></i></div>
                <h2 style={{ fontSize: '15px' }}>Quick Stats</h2>
              </div>
            </div>
            
            <div className="cayear-stats-grid">
              <div className="cysg-item">
                <div className="cysg-icon text-blue"><i className="fas fa-layer-group"></i> 10+</div>
                <span>Years Covered</span>
              </div>
              <div className="cysg-item">
                <div className="cysg-icon text-blue">15,000+</div>
                <span>Articles</span>
              </div>
              <div className="cysg-item">
                <div className="cysg-icon text-purple"><i className="fas fa-file-pdf"></i> 200+</div>
                <span>PDFs & Notes</span>
              </div>
              <div className="cysg-item">
                <div className="cysg-icon text-orange">1000+</div>
                <span>MCQs</span>
              </div>
            </div>
          </div>

          <div className="ca-quote-widget" style={{ padding: '24px', background: '#fffbeb', borderColor: '#fde68a' }}>
            <div className="ca-quote-content">
              <p style={{ fontSize: '16px', color: '#1e3a8a', fontStyle: 'italic', textAlign: 'center', marginBottom: '16px' }}>"Those who do not remember the past are condemned to repeat it."</p>
              <strong style={{ color: '#1e40af', display: 'block', textAlign: 'right' }}>— George Santayana</strong>
            </div>
          </div>

          <div className="camag-widget">
            <div className="ca-sec-header" style={{ marginBottom: '16px' }}>
              <div className="ca-sh-left" style={{ gap: '8px' }}>
                <div className="ca-sh-icon red-light" style={{ width: '24px', height: '24px', fontSize: '12px', borderRadius: '50%' }}><i className="fas fa-eye"></i></div>
                <h2 style={{ fontSize: '15px' }}>Most Viewed Years</h2>
              </div>
            </div>
            <ul className="ca-mr-list">
              <li>
                <div className="ca-mr-rank red">1</div>
                <span className="ca-mr-title">2025</span>
                <span className="ca-mr-views text-blue">125K views</span>
              </li>
              <li>
                <div className="ca-mr-rank blue">2</div>
                <span className="ca-mr-title">2024</span>
                <span className="ca-mr-views text-blue">98K views</span>
              </li>
              <li>
                <div className="ca-mr-rank blue">3</div>
                <span className="ca-mr-title">2023</span>
                <span className="ca-mr-views text-blue">76K views</span>
              </li>
              <li>
                <div className="ca-mr-rank blue">4</div>
                <span className="ca-mr-title">2022</span>
                <span className="ca-mr-views text-blue">62K views</span>
              </li>
              <li>
                <div className="ca-mr-rank blue">5</div>
                <span className="ca-mr-title">2021</span>
                <span className="ca-mr-views text-blue">58K views</span>
              </li>
            </ul>
          </div>

          <div className="camag-widget">
            <div className="ca-sec-header" style={{ marginBottom: '12px' }}>
              <div className="ca-sh-left" style={{ gap: '8px' }}>
                <div className="ca-sh-icon red" style={{ width: '28px', height: '28px', fontSize: '14px', borderRadius: '6px', color: 'white' }}><i className="fas fa-file-pdf"></i></div>
                <h2 style={{ fontSize: '14px', color: '#1e3a8a' }}>Download Year-wise PDFs</h2>
              </div>
            </div>
            <p style={{ fontSize: '11px', color: 'var(--gray-600)', marginBottom: '16px', lineHeight: '1.4' }}>Get consolidated year-wise current affairs PDFs for quick revision.</p>
            <div className="cayear-dl-widget">
              <select className="catopic-sort-select" style={{ width: '100%', marginBottom: '12px', padding: '10px' }}>
                <option>Select Year</option>
                <option>2026</option>
                <option>2025</option>
                <option>2024</option>
                <option>2023</option>
                <option>2022</option>
              </select>
              <button className="btn-primary" style={{ width: '100%' }}>Download PDF <i className="fas fa-arrow-right"></i></button>
            </div>
          </div>

          <div className="ca-quote-widget" style={{ padding: '24px', background: '#eff6ff', borderColor: '#bfdbfe' }}>
            <img src="/images/currentaffairs/ca-kalam.jpg" alt="Kalam" className="ca-quote-img" style={{ width: '60px', height: '60px' }} />
            <div className="ca-quote-content">
              <p style={{ fontSize: '16px', color: '#1e3a8a' }}>"Failure will never overtake me if my determination to succeed is strong enough."</p>
              <strong style={{ color: '#1e40af' }}>— Dr. A.P.J. Abdul Kalam</strong>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default CAYear;
