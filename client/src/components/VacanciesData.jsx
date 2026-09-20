import React from 'react';

const VacanciesData = () => {
  return (
    <section className="data-section">
        <div className="container">
            <div className="data-grid">
                <div className="data-card">
                    <h3>Tentative Vacancies (Previous Year Trend)</h3>
                    <table className="data-table">
                        <thead>
                            <tr>
                                <th>Year</th>
                                <th>Total Vacancies</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td>2024</td><td><strong>17,727</strong></td></tr>
                            <tr><td>2023</td><td><strong>7,500</strong></td></tr>
                            <tr><td>2022</td><td><strong>37,409</strong></td></tr>
                            <tr><td>2021</td><td><strong>7,651</strong></td></tr>
                            <tr><td>2020</td><td><strong>7,035</strong></td></tr>
                            <tr className="highlight-row"><td>2026*</td><td><strong>12,256+ (Expected)</strong></td></tr>
                        </tbody>
                    </table>
                </div>

                <div className="data-card">
                    <h3>Popular Posts in SSC CGL 2026</h3>
                    <table className="data-table">
                        <thead>
                            <tr>
                                <th>Post</th>
                                <th>Department</th>
                                <th>Pay Level</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td>Income Tax Inspector</td><td>CBDT</td><td>Level 7</td></tr>
                            <tr><td>Assistant Section Officer (ASO)</td><td>MEA, CSS</td><td>Level 7</td></tr>
                            <tr><td>Central Excise Inspector</td><td>CBIC</td><td>Level 7</td></tr>
                            <tr><td>Divisional Accountant</td><td>CGA</td><td>Level 6</td></tr>
                            <tr><td>Auditor</td><td>C&AG</td><td>Level 6</td></tr>
                            <tr><td>Accountant</td><td>Various</td><td>Level 5</td></tr>
                            <tr><td>UDC / SSA</td><td>Various</td><td>Level 4</td></tr>
                        </tbody>
                    </table>
                    <a href="#" className="link-arrow">View Complete Post List →</a>
                </div>

                <div className="salary-card">
                    <div className="salary-header">
                        <div className="salary-icon"><i className="fas fa-rupee-sign"></i></div>
                        <h3>CGL Salary Structure</h3>
                        <p>Attractive salary, allowances and perks with great career growth.</p>
                    </div>
                    <div className="salary-range">
                        <span className="salary-amount">₹44,900 – ₹1,42,400</span>
                        <span className="salary-note">(Basic Pay Range for Level 7)</span>
                    </div>
                    <ul className="salary-components">
                        <li><i className="fas fa-check-circle"></i> Dearness Allowance (DA)</li>
                        <li><i className="fas fa-check-circle"></i> House Rent Allowance (HRA)</li>
                        <li><i className="fas fa-check-circle"></i> Transport Allowance (TA)</li>
                        <li><i className="fas fa-check-circle"></i> Other allowances & perks</li>
                    </ul>
                    <button className="btn-primary w-full">View Detailed Salary →</button>
                </div>
            </div>
        </div>
    </section>
  );
};

export default VacanciesData;
