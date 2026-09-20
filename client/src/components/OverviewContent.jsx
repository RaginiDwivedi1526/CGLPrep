import React from 'react';

const OverviewContent = () => {
  return (
    <section className="overview-section" id="overview">
        <div className="container">
            <div className="overview-grid">
                <div className="about-card">
                    <h2>About SSC CGL</h2>
                    <p>The Staff Selection Commission Combined Graduate Level (SSC CGL) exam is one of the most prestigious and popular government exams in India. It recruits graduates for various Group B and Group C posts in different Ministries, Departments and Organizations of the Government of India.</p>
                    <div className="benefits-row">
                        <div className="benefit-item">
                            <div className="benefit-icon"><i className="fas fa-landmark"></i></div>
                            <strong>Central Govt Jobs</strong>
                            <span>Multiple departments</span>
                        </div>
                        <div className="benefit-item">
                            <div className="benefit-icon"><i className="fas fa-rupee-sign"></i></div>
                            <strong>Attractive Salary</strong>
                            <span>Pay Level 4 to 8</span>
                        </div>
                        <div className="benefit-item">
                            <div className="benefit-icon"><i className="fas fa-shield-alt"></i></div>
                            <strong>Job Security</strong>
                            <span>Stable career</span>
                        </div>
                        <div className="benefit-item">
                            <div className="benefit-icon"><i className="fas fa-chart-line"></i></div>
                            <strong>Growth Opportunities</strong>
                            <span>Promotions & career growth</span>
                        </div>
                    </div>
                </div>

                <div className="dept-card">
                    <h3>Participating Departments</h3>
                    <ul className="dept-list">
                        <li><span className="dept-dot blue"></span> Ministry of Finance (CBDT, CBIC)</li>
                        <li><span className="dept-dot green"></span> Ministry of Home Affairs (CBI, NIA)</li>
                        <li><span className="dept-dot purple"></span> Ministry of External Affairs</li>
                        <li><span className="dept-dot orange"></span> Ministry of Personnel, Public Grievances & Pensions</li>
                        <li><span className="dept-dot red"></span> Central Bureau of Investigation (CBI)</li>
                        <li><span className="dept-dot teal"></span> Central Vigilance Commission (CVC)</li>
                        <li><span className="dept-dot indigo"></span> Comptroller General of Accounts (CGA)</li>
                        <li><span className="dept-dot gray"></span> And many more...</li>
                    </ul>
                </div>

                <div className="links-card">
                    <h3>Official Links</h3>
                    <ul className="official-links">
                        <li>
                            <i className="fas fa-globe"></i>
                            <a href="#">SSC Official Website</a>
                        </li>
                        <li>
                            <i className="fas fa-file-alt"></i>
                            <a href="#">CGL 2026 Notification (Soon)</a>
                        </li>
                        <li>
                            <i className="fas fa-edit"></i>
                            <a href="#">Apply Online (Soon)</a>
                        </li>
                        <li>
                            <i className="fas fa-id-card"></i>
                            <a href="#">Admit Card (Soon)</a>
                        </li>
                        <li>
                            <i className="fas fa-key"></i>
                            <a href="#">Answer Key (Soon)</a>
                        </li>
                        <li>
                            <i className="fas fa-trophy"></i>
                            <a href="#">Result (Soon)</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
  );
};

export default OverviewContent;
