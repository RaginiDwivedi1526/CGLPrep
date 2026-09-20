import React, { useState } from 'react';

const Success = () => {
  const [activeTab, setActiveTab] = useState('Home For Aspirants');
  const tabs = ['Home For Aspirants', 'CGL Selected', 'Expert Views', 'Authors'];

  return (
    <section className="success-section" id="success">
        <div className="container">
            <h2 className="section-title">Success Stories</h2>
            <div className="success-tabs">
                {tabs.map(tab => (
                    <button 
                        key={tab}
                        className={`stab ${activeTab === tab ? 'active' : ''}`}
                        onClick={() => setActiveTab(tab)}
                    >
                        {tab}
                    </button>
                ))}
            </div>
            <div className="success-grid">
                <div className="success-card">
                    <div className="sc-avatar"><i className="fas fa-user-circle"></i></div>
                    <div className="sc-info">
                        <h4>Amit Sharma</h4>
                        <span className="sc-role">Tax Assistant, CGL 2024</span>
                        <p>"CGLPrep AI's mock tests and analysis helped me improve over 30% in 3 months. The AI study plan is amazing!"</p>
                    </div>
                    <div className="sc-rating">
                        <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
                    </div>
                </div>
                <div className="success-card">
                    <div className="sc-avatar"><i className="fas fa-user-circle"></i></div>
                    <div className="sc-info">
                        <h4>Priya Kumari</h4>
                        <span className="sc-role">Auditor, CGL 2024</span>
                        <p>"The post prediction feature gave me clarity. I could plan my preparation & target post & confidence."</p>
                    </div>
                    <div className="sc-rating">
                        <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
                    </div>
                </div>
                <div className="success-card">
                    <div className="sc-avatar"><i className="fas fa-user-circle"></i></div>
                    <div className="sc-info">
                        <h4>Rahul Verma</h4>
                        <span className="sc-role">Inspector, CGL 2024</span>
                        <p>"Best platform for the serious aspirants. Notes, tests, current affairs – everything in one place."</p>
                    </div>
                    <div className="sc-rating">
                        <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star-half-alt"></i>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Success;
