import React from 'react';

const MobileApp = () => {
  return (
    <section className="mobile-section">
        <div className="container">
            <div className="mobile-grid">
                <div className="mobile-info">
                    <h2>CGLPrep AI<br/>on Mobile</h2>
                    <p>Study anytime, anywhere.<br/>Notes, tests, current affairs –<br/>all in your pocket.</p>
                    <div className="app-badges">
                        <button className="app-badge"><i className="fab fa-google-play"></i> Google Play</button>
                        <button className="app-badge"><i className="fab fa-apple"></i> App Store</button>
                    </div>
                </div>
                <div className="mobile-phone">
                    <div className="phone-mockup">
                        <div className="phone-screen">
                            <i className="fas fa-graduation-cap phone-logo"></i>
                            <span>CGLPrep AI</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default MobileApp;
