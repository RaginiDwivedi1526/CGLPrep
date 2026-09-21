import React, { useState } from 'react';

const Success = ({ reviews }) => {
  const [activeTab, setActiveTab] = useState('CGL Selected');
  const tabs = ['Home For Aspirants', 'CGL Selected', 'Expert Views', 'Authors'];

  // Default mock reviews if none provided
  const displayReviews = (reviews && reviews.length > 0) ? reviews : [
    { id: 1, tab: 'CGL Selected', name: 'Amit Sharma', role: 'Tax Assistant, CGL 2024', text: '"CGLPrep AI\'s mock tests and analysis helped me improve over 30% in 3 months. The AI study plan is amazing!"', rating: 5 },
    { id: 2, tab: 'CGL Selected', name: 'Priya Kumari', role: 'Auditor, CGL 2024', text: '"The post prediction feature gave me clarity. I could plan my preparation & target post & confidence."', rating: 5 },
    { id: 3, tab: 'CGL Selected', name: 'Rahul Verma', role: 'Inspector, CGL 2024', text: '"Best platform for the serious aspirants. Notes, tests, current affairs – everything in one place."', rating: 4.5 }
  ];

  const filteredReviews = displayReviews.filter(r => r.tab === activeTab);

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
                {filteredReviews.length > 0 ? filteredReviews.map((review) => (
                    <div className="success-card" key={review.id}>
                        <div className="sc-avatar"><i className="fas fa-user-circle"></i></div>
                        <div className="sc-info">
                            <h4>{review.name}</h4>
                            <span className="sc-role">{review.role}</span>
                            <p>{review.text}</p>
                        </div>
                        <div className="sc-rating">
                            {[...Array(Math.floor(review.rating))].map((_, i) => <i key={i} className="fas fa-star"></i>)}
                            {review.rating % 1 !== 0 && <i className="fas fa-star-half-alt"></i>}
                        </div>
                    </div>
                )) : (
                    <p style={{textAlign: 'center', color: '#64748b'}}>No reviews found for this category yet.</p>
                )}
            </div>
        </div>
    </section>
  );
};

export default Success;
