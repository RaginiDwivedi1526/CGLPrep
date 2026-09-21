import React from 'react';
import { useNavigate } from 'react-router-dom';

const CTABanner = () => {
  const navigate = useNavigate();
  return (
    <section className="cta-banner">
        <div className="container cta-inner">
            <div>
                <h2>Take the First Step Towards Your Government Job</h2>
                <p>Join thousands of SSC CGL aspirants who are learning smarter with CGLPrep AI.</p>
            </div>
            <button className="btn-white btn-lg" onClick={() => navigate('/signup')}>Get Started For Free →</button>
        </div>
    </section>
  );
};

export default CTABanner;
