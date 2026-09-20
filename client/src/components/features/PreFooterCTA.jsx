import React from 'react';

const PreFooterCTA = () => {
  return (
    <section className="feat-prefooter">
        <div className="container feat-prefooter-inner">
            <div className="feat-prefooter-content">
                <h2>Ready to Experience All Features?</h2>
                <p>Join thousands of SSC CGL aspirants who are already preparing smarter with CGLPrep AI.</p>
            </div>
            <button className="btn-yellow">Get Started for Free <i className="fas fa-arrow-right"></i></button>
        </div>
        <div className="feat-prefooter-art">
            {/* Visual placeholder for the mountain illustration */}
            <div style={{width: '300px', height: '100%', opacity: 0.5, textAlign: 'right', position: 'relative'}}>
                <div style={{position: 'absolute', right: 0, bottom: 0, background: '#1e293b', width: '200px', height: '100px', clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'}}></div>
                <div style={{position: 'absolute', right: '150px', bottom: 0, background: '#0f172a', width: '150px', height: '150px', clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'}}></div>
                <div style={{position: 'absolute', right: '40px', bottom: '110px', color: 'white', fontFamily: 'Caveat, cursive', transform: 'rotate(-10deg)', fontSize: '20px'}}>Same<br/>Aspirants<br/>Bigger Dreams</div>
            </div>
        </div>
    </section>
  );
};

export default PreFooterCTA;
