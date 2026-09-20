import React from 'react';

const CADocs = () => {
  return (
    <section className="container ca-section">
      <div className="cadocs-layout">
        
        {/* --- Left Sidebar: Filters --- */}
        <div className="cadocs-sidebar-left">
          
          <div className="catopic-header-row">
            <h3 className="catopic-sb-title">Filters</h3>
            <span className="catopic-reset">Reset All</span>
          </div>

          <div className="catopic-filter-section">
            <h4 className="catopic-fs-title">Document Type</h4>
            <div className="catopic-cb-list">
              <label className="catopic-checkbox"><input type="checkbox" defaultChecked /><span className="cc-box"></span><span className="cc-label" style={{ fontWeight: 600 }}>All Documents</span></label>
              <label className="catopic-checkbox"><input type="checkbox" /><span className="cc-box"></span><span className="cc-label">Reports</span></label>
              <label className="catopic-checkbox"><input type="checkbox" /><span className="cc-box"></span><span className="cc-label">Government Schemes</span></label>
              <label className="catopic-checkbox"><input type="checkbox" /><span className="cc-box"></span><span className="cc-label">Policies</span></label>
              <label className="catopic-checkbox"><input type="checkbox" /><span className="cc-box"></span><span className="cc-label">Committees & Panels</span></label>
              <label className="catopic-checkbox"><input type="checkbox" /><span className="cc-box"></span><span className="cc-label">Indices & Rankings</span></label>
              <label className="catopic-checkbox"><input type="checkbox" /><span className="cc-box"></span><span className="cc-label">Budgets & Economic Survey</span></label>
              <label className="catopic-checkbox"><input type="checkbox" /><span className="cc-box"></span><span className="cc-label">Bills & Acts</span></label>
              <label className="catopic-checkbox"><input type="checkbox" /><span className="cc-box"></span><span className="cc-label">Constitutional Bodies</span></label>
              <label className="catopic-checkbox"><input type="checkbox" /><span className="cc-box"></span><span className="cc-label">International Organisations</span></label>
              <label className="catopic-checkbox"><input type="checkbox" /><span className="cc-box"></span><span className="cc-label">Year-wise Compilations</span></label>
            </div>
          </div>

          <div className="catopic-filter-section">
            <h4 className="catopic-fs-title">Exam Relevance</h4>
            <div className="catopic-cb-list">
              <label className="catopic-checkbox"><input type="checkbox" defaultChecked /><span className="cc-box"></span><span className="cc-label" style={{ fontWeight: 600 }}>All</span></label>
              <label className="catopic-checkbox"><input type="checkbox" /><span className="cc-box"></span><span className="cc-label">Highly Important</span></label>
              <label className="catopic-checkbox"><input type="checkbox" /><span className="cc-box"></span><span className="cc-label">Important</span></label>
              <label className="catopic-checkbox"><input type="checkbox" /><span className="cc-box"></span><span className="cc-label">Good to Read</span></label>
            </div>
          </div>

          <div className="catopic-filter-section">
            <h4 className="catopic-fs-title">Year</h4>
            <div className="catopic-cb-list">
              <label className="catopic-checkbox"><input type="checkbox" /><span className="cc-box"></span><span className="cc-label">2026</span></label>
              <label className="catopic-checkbox"><input type="checkbox" /><span className="cc-box"></span><span className="cc-label">2025</span></label>
              <label className="catopic-checkbox"><input type="checkbox" /><span className="cc-box"></span><span className="cc-label">2024</span></label>
              <label className="catopic-checkbox"><input type="checkbox" /><span className="cc-box"></span><span className="cc-label">2023</span></label>
              <label className="catopic-checkbox"><input type="checkbox" /><span className="cc-box"></span><span className="cc-label">2022</span></label>
              <label className="catopic-checkbox"><input type="checkbox" /><span className="cc-box"></span><span className="cc-label">Earlier Years</span></label>
            </div>
          </div>

          <div className="cadocs-promo-card">
            <div className="cdpc-icon"><i className="fas fa-download"></i></div>
            <p>One Stop Destination<br/>for all Important<br/>Government Documents</p>
            <div className="cdpc-flag">
              <span className="cdpcf orange"></span>
              <span className="cdpcf white"></span>
              <span className="cdpcf green"></span>
            </div>
          </div>

        </div>

        {/* --- Center Column: Main Content --- */}
        <div className="cadocs-main-col">
          
          <div className="ca-sec-header" style={{ marginBottom: '16px' }}>
            <div className="ca-sh-left">
              <h2>Explore Document Categories</h2>
              <p>Access and download important documents with summary, key points and exam relevance.</p>
            </div>
          </div>

          <div className="cadocs-cat-grid">
            <div className="cdc-card">
              <div className="cdc-icon red-light"><i className="fas fa-university text-red"></i></div>
              <h4>Government Schemes</h4>
              <p>Latest & important schemes by Central and State Government</p>
              <span><i className="far fa-file-pdf"></i> 124 Documents</span>
              <button className="btn-outline cdc-btn">View Documents <i className="fas fa-arrow-right"></i></button>
            </div>
            <div className="cdc-card">
              <div className="cdc-icon blue-light"><i className="fas fa-file-alt text-blue"></i></div>
              <h4>Reports</h4>
              <p>Key reports by national & international bodies</p>
              <span><i className="far fa-file-pdf"></i> 96 Documents</span>
              <button className="btn-outline cdc-btn">View Documents <i className="fas fa-arrow-right"></i></button>
            </div>
            <div className="cdc-card">
              <div className="cdc-icon orange-light"><i className="fas fa-coins text-orange"></i></div>
              <h4>Budgets & Economic Survey</h4>
              <p>Union Budget, State Budgets and Economic Survey</p>
              <span><i className="far fa-file-pdf"></i> 54 Documents</span>
              <button className="btn-outline cdc-btn">View Documents <i className="fas fa-arrow-right"></i></button>
            </div>
            <div className="cdc-card">
              <div className="cdc-icon purple-light"><i className="fas fa-file-signature text-purple"></i></div>
              <h4>Policies</h4>
              <p>Major policies and policy updates</p>
              <span><i className="far fa-file-pdf"></i> 78 Documents</span>
              <button className="btn-outline cdc-btn">View Documents <i className="fas fa-arrow-right"></i></button>
            </div>
            <div className="cdc-card">
              <div className="cdc-icon blue-light"><i className="fas fa-users text-blue"></i></div>
              <h4>Committees & Panels</h4>
              <p>Important committees, commissions and panels</p>
              <span><i className="far fa-file-pdf"></i> 62 Documents</span>
              <button className="btn-outline cdc-btn">View Documents <i className="fas fa-arrow-right"></i></button>
            </div>
            <div className="cdc-card">
              <div className="cdc-icon red-light"><i className="fas fa-chart-line text-red"></i></div>
              <h4>Indices & Rankings</h4>
              <p>Global and national indices with reports</p>
              <span><i className="far fa-file-pdf"></i> 48 Documents</span>
              <button className="btn-outline cdc-btn">View Documents <i className="fas fa-arrow-right"></i></button>
            </div>
            <div className="cdc-card">
              <div className="cdc-icon green-light"><i className="fas fa-gavel text-green"></i></div>
              <h4>Bills & Acts</h4>
              <p>Important bills, acts and amendments</p>
              <span><i className="far fa-file-pdf"></i> 36 Documents</span>
              <button className="btn-outline cdc-btn">View Documents <i className="fas fa-arrow-right"></i></button>
            </div>
            <div className="cdc-card">
              <div className="cdc-icon gold-light"><i className="fas fa-monument text-gold"></i></div>
              <h4>Constitutional Bodies</h4>
              <p>Constitutional and statutory bodies</p>
              <span><i className="far fa-file-pdf"></i> 44 Documents</span>
              <button className="btn-outline cdc-btn">View Documents <i className="fas fa-arrow-right"></i></button>
            </div>
            <div className="cdc-card">
              <div className="cdc-icon blue-light"><i className="fas fa-globe text-blue"></i></div>
              <h4>International Organisations</h4>
              <p>UN, WHO, World Bank, IMF and other organisations</p>
              <span><i className="far fa-file-pdf"></i> 40 Documents</span>
              <button className="btn-outline cdc-btn">View Documents <i className="fas fa-arrow-right"></i></button>
            </div>
            <div className="cdc-card">
              <div className="cdc-icon purple-light"><i className="far fa-calendar-alt text-purple"></i></div>
              <h4>Year-wise Compilations</h4>
              <p>Topic-wise yearly document collection</p>
              <span><i className="far fa-file-pdf"></i> 120 Documents</span>
              <button className="btn-outline cdc-btn">View Documents <i className="fas fa-arrow-right"></i></button>
            </div>
            <div className="cdc-card">
              <div className="cdc-icon green-light"><i className="fas fa-handshake text-green"></i></div>
              <h4>Summits & Conferences</h4>
              <p>Important global and national summits</p>
              <span><i className="far fa-file-pdf"></i> 58 Documents</span>
              <button className="btn-outline cdc-btn">View Documents <i className="fas fa-arrow-right"></i></button>
            </div>
            <div className="cdc-card">
              <div className="cdc-icon orange-light"><i className="fas fa-folder text-orange"></i></div>
              <h4>Miscellaneous</h4>
              <p>Other important documents for exams</p>
              <span><i className="far fa-file-pdf"></i> 35 Documents</span>
              <button className="btn-outline cdc-btn">View Documents <i className="fas fa-arrow-right"></i></button>
            </div>
          </div>

          <div className="ca-sec-header" style={{ marginTop: '32px', marginBottom: '16px' }}>
            <div className="ca-sh-left">
              <h2>Recently Added Documents</h2>
            </div>
            <div className="ca-view-all">View All <i className="fas fa-arrow-right"></i></div>
          </div>

          <div className="cadocs-table-wrapper">
            <table className="cadocs-table">
              <thead>
                <tr>
                  <th>Document Name</th>
                  <th>Category</th>
                  <th>Year</th>
                  <th>Size</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Union Budget 2026 – Complete Document</strong></td>
                  <td><span className="cat-tag purple">Budget</span></td>
                  <td>2026</td>
                  <td>12.4 MB</td>
                  <td><button className="cdt-btn text-blue"><i className="fas fa-file-pdf text-red"></i> Download</button></td>
                </tr>
                <tr>
                  <td><strong>Economic Survey 2025-26</strong></td>
                  <td><span className="cat-tag blue">Report</span></td>
                  <td>2026</td>
                  <td>8.7 MB</td>
                  <td><button className="cdt-btn text-blue"><i className="fas fa-file-pdf text-red"></i> Download</button></td>
                </tr>
                <tr>
                  <td><strong>Vision Viksit Bharat 2047</strong></td>
                  <td><span className="cat-tag pink">Policy</span></td>
                  <td>2025</td>
                  <td>5.2 MB</td>
                  <td><button className="cdt-btn text-blue"><i className="fas fa-file-pdf text-red"></i> Download</button></td>
                </tr>
                <tr>
                  <td><strong>National Education Policy (NEP) 2020</strong></td>
                  <td><span className="cat-tag pink">Policy</span></td>
                  <td>2020</td>
                  <td>4.8 MB</td>
                  <td><button className="cdt-btn text-blue"><i className="fas fa-file-pdf text-red"></i> Download</button></td>
                </tr>
                <tr>
                  <td><strong>NITI Aayog – SDG India Index 2024</strong></td>
                  <td><span className="cat-tag green">Index</span></td>
                  <td>2024</td>
                  <td>3.6 MB</td>
                  <td><button className="cdt-btn text-blue"><i className="fas fa-file-pdf text-red"></i> Download</button></td>
                </tr>
              </tbody>
            </table>
          </div>
          <button className="btn-outline" style={{ width: '100%', marginTop: '12px' }}>Load More Documents <i className="fas fa-arrow-down"></i></button>

        </div>

        {/* --- Right Sidebar: Stats & Widgets --- */}
        <div className="cadocs-sidebar-right">
          
          <div className="camag-widget">
            <div className="ca-sec-header" style={{ marginBottom: '16px' }}>
              <div className="ca-sh-left" style={{ gap: '8px' }}>
                <div className="ca-sh-icon blue-light" style={{ width: '28px', height: '28px', fontSize: '14px', borderRadius: '50%' }}><i className="fas fa-lightbulb"></i></div>
                <h2 style={{ fontSize: '15px' }}>Why These Documents?</h2>
              </div>
            </div>
            <ul className="cadocs-why-list">
              <li><i className="fas fa-check-circle text-green"></i> Highly relevant for SSC CGL & other exams</li>
              <li><i className="fas fa-check-circle text-green"></i> Authentic and updated sources</li>
              <li><i className="fas fa-check-circle text-green"></i> Summary & key points for quick revision</li>
              <li><i className="fas fa-check-circle text-green"></i> Helps in answer writing and descriptive exams</li>
              <li><i className="fas fa-check-circle text-green"></i> Useful for Current Affairs, GS and Essay</li>
            </ul>
          </div>

          <div className="cadocs-featured">
            <span className="cdf-tag bg-red text-white"><i className="fas fa-star"></i> Featured Document</span>
            <h3>Union Budget 2026</h3>
            <p>Complete Analysis & Key Highlights</p>
            <div className="cdf-body">
              <img src="/images/currentaffairs/cadocs-budget.jpg" alt="Budget 2026" className="cdf-img" />
              <ul className="cdf-list">
                <li><i className="fas fa-check-circle text-green"></i> Key Announcements</li>
                <li><i className="fas fa-check-circle text-green"></i> Important Schemes</li>
                <li><i className="fas fa-check-circle text-green"></i> Sector-wise Analysis</li>
                <li><i className="fas fa-check-circle text-green"></i> Exam-relevant Points</li>
              </ul>
            </div>
            <button className="btn-primary" style={{ width: '100%', marginTop: '16px' }}>Download PDF (12.4 MB) <i className="fas fa-download"></i></button>
          </div>

          <div className="camag-widget">
            <div className="ca-sec-header" style={{ marginBottom: '16px' }}>
              <div className="ca-sh-left" style={{ gap: '8px' }}>
                <div className="ca-sh-icon red-light" style={{ width: '24px', height: '24px', fontSize: '12px', borderRadius: '50%' }}><i className="fas fa-chart-bar"></i></div>
                <h2 style={{ fontSize: '15px' }}>Most Downloaded</h2>
              </div>
              <div className="ca-view-all">View All <i className="fas fa-arrow-right"></i></div>
            </div>
            <ul className="ca-mr-list">
              <li>
                <div className="ca-mr-rank red">1</div>
                <span className="ca-mr-title">Union Budget 2026</span>
                <span className="ca-mr-views text-blue"><i className="fas fa-download"></i> 24.8K</span>
              </li>
              <li>
                <div className="ca-mr-rank blue">2</div>
                <span className="ca-mr-title">Economic Survey 2025-26</span>
                <span className="ca-mr-views text-blue"><i className="fas fa-download"></i> 18.2K</span>
              </li>
              <li>
                <div className="ca-mr-rank blue">3</div>
                <span className="ca-mr-title">NEP 2020</span>
                <span className="ca-mr-views text-blue"><i className="fas fa-download"></i> 15.6K</span>
              </li>
              <li>
                <div className="ca-mr-rank blue">4</div>
                <span className="ca-mr-title">Viksit Bharat 2047</span>
                <span className="ca-mr-views text-blue"><i className="fas fa-download"></i> 12.4K</span>
              </li>
              <li>
                <div className="ca-mr-rank blue">5</div>
                <span className="ca-mr-title">NITI Aayog SDG Index 2024</span>
                <span className="ca-mr-views text-blue"><i className="fas fa-download"></i> 11.9K</span>
              </li>
            </ul>
          </div>

          <div className="camag-widget" style={{ background: '#f0fdf4', borderColor: '#bbf7d0' }}>
            <div className="ca-sec-header" style={{ marginBottom: '12px' }}>
              <div className="ca-sh-left" style={{ gap: '8px' }}>
                <div className="ca-sh-icon green" style={{ width: '28px', height: '28px', fontSize: '14px', borderRadius: '6px', color: 'white' }}><i className="fas fa-file-medical"></i></div>
                <h2 style={{ fontSize: '14px', color: '#166534' }}>Need a Specific Document?</h2>
              </div>
            </div>
            <p style={{ fontSize: '11px', color: '#166534', marginBottom: '12px', lineHeight: '1.4' }}>Tell us what document you are looking for. We'll try to add it for you.</p>
            <div className="cadocs-request-form">
              <input type="text" placeholder="Enter document name..." className="cadocs-req-input" />
              <button className="cadocs-req-btn"><i className="fas fa-paper-plane"></i></button>
            </div>
          </div>

          <div className="ca-quote-widget" style={{ padding: '24px', background: '#eff6ff', borderColor: '#bfdbfe' }}>
            <img src="/images/currentaffairs/ca-kalam.jpg" alt="Kalam" className="ca-quote-img" style={{ width: '60px', height: '60px' }} />
            <div className="ca-quote-content">
              <p style={{ fontSize: '18px', color: '#1e3a8a' }}>"Knowledge is of no value unless you put it into practice."</p>
              <strong style={{ color: '#1e40af' }}>— Dr. A.P.J. Abdul Kalam</strong>
            </div>
          </div>

        </div>

      </div>

      {/* --- Bottom Quick Access Row --- */}
      <div className="cadocs-quick-access">
        <div className="cdqa-header">
          <div className="cdqa-icon orange"><i className="fas fa-bolt"></i></div>
          <div>
            <h4>Quick Access</h4>
            <p>Jump to important document collections</p>
          </div>
        </div>
        <div className="cdqa-links">
          <div className="cdqa-item">
            <div className="cdqa-item-icon green-light"><i className="fas fa-university text-green"></i></div>
            <span>Latest Government Schemes <i className="fas fa-arrow-right"></i></span>
          </div>
          <div className="cdqa-item">
            <div className="cdqa-item-icon blue-light"><i className="fas fa-file-alt text-blue"></i></div>
            <span>Important Reports <i className="fas fa-arrow-right"></i></span>
          </div>
          <div className="cdqa-item">
            <div className="cdqa-item-icon red-light"><i className="fas fa-chart-bar text-red"></i></div>
            <span>Union Budget 2026 <i className="fas fa-arrow-right"></i></span>
          </div>
          <div className="cdqa-item">
            <div className="cdqa-item-icon green-light"><i className="fas fa-coins text-green"></i></div>
            <span>Economic Survey 2025-26 <i className="fas fa-arrow-right"></i></span>
          </div>
          <div className="cdqa-item">
            <div className="cdqa-item-icon purple-light"><i className="fas fa-file-signature text-purple"></i></div>
            <span>Policies & Initiatives <i className="fas fa-arrow-right"></i></span>
          </div>
          <div className="cdqa-item">
            <div className="cdqa-item-icon blue-light"><i className="fas fa-globe text-blue"></i></div>
            <span>International Organisations <i className="fas fa-arrow-right"></i></span>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default CADocs;
