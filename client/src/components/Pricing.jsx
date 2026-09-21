import React from 'react';
import { useNavigate } from 'react-router-dom';

const Pricing = () => {
  const navigate = useNavigate();
  return (
    <section className="pricing-section" id="pricing">
        <div className="container">
            <h2 className="section-title">Simple & Affordable Pricing</h2>
            <p className="section-sub">Choose a plan and start your journey today.</p>
            <div className="pricing-grid">
                <div className="price-card">
                    <div className="price-header">
                        <h3>Free Plan</h3>
                        <div className="price-amount">₹0</div>
                        <span className="price-period">Forever Free</span>
                    </div>
                    <ul className="price-features">
                        <li><i className="fas fa-check"></i> Basic study material</li>
                        <li><i className="fas fa-check"></i> Daily news & current affairs</li>
                        <li><i className="fas fa-check"></i> Current affairs (2 / day)</li>
                        <li><i className="fas fa-check"></i> Community support</li>
                    </ul>
                    <button className="btn-outline w-full" onClick={() => navigate('/signup?plan=free')}>Get Started Free</button>
                </div>
                <div className="price-card featured">
                    <div className="price-badge">Most Popular</div>
                    <div className="price-header">
                        <h3>Pro Plan</h3>
                        <div className="price-amount">₹299<span>/month</span></div>
                        <span className="price-period">Everything in Free, plus:</span>
                    </div>
                    <ul className="price-features">
                        <li><i className="fas fa-check"></i> All Mock tests</li>
                        <li><i className="fas fa-check"></i> PYQ (2018 – 2025)</li>
                        <li><i className="fas fa-check"></i> AI study plan</li>
                        <li><i className="fas fa-check"></i> Performance analytics</li>
                        <li><i className="fas fa-check"></i> Current affairs – none</li>
                    </ul>
                    <button className="btn-primary w-full" onClick={() => navigate('/signup?plan=pro')}>Start Pro Plan →</button>
                </div>
                <div className="price-card">
                    <div className="price-header">
                        <h3>Ultimate Plan</h3>
                        <div className="price-amount">₹499<span>/month</span></div>
                        <span className="price-period">Everything in Pro, plus:</span>
                    </div>
                    <ul className="price-features">
                        <li><i className="fas fa-check"></i> Everything in Pro</li>
                        <li><i className="fas fa-check"></i> Exclusive AI tutor (24x7 AI)</li>
                        <li><i className="fas fa-check"></i> Post predictor (advanced)</li>
                        <li><i className="fas fa-check"></i> Priority support</li>
                        <li><i className="fas fa-check"></i> Performance analytics</li>
                    </ul>
                    <button className="btn-outline w-full" onClick={() => navigate('/signup?plan=ultimate')}>Get Ultimate Plan →</button>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Pricing;
