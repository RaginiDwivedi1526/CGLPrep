import React from 'react';
import { Link } from 'react-router-dom';

const WhyItMatters = () => {
  return (
    <div className="why-features-wrapper">

      {/* ===== SECTION 1: Hero Banner ===== */}
      <section className="why-hero">
        <div className="container why-hero-inner">
          <div className="why-hero-content">
            <div className="why-hero-breadcrumb">
              <Link to="/">Home</Link>
              <i className="fas fa-chevron-right"></i>
              <Link to="/features">Features</Link>
              <i className="fas fa-chevron-right"></i>
              <span>Why It Matters</span>
            </div>

            <div className="why-hero-badge">
              <i className="fas fa-star"></i> WHY IT MATTERS
            </div>

            <h1 className="why-hero-title">
              It's Not Just Preparation.<br/>It's a <span>Better Future.</span>
            </h1>
            <p className="why-hero-desc">
              CGLPrep AI is more than a test platform — it's a complete ecosystem that helps aspirants make informed decisions, stay consistent, and achieve a secure government career.
            </p>

            <div className="why-hero-btns">
              <button className="btn-primary why-hero-cta">
                Start Your Journey Today <i className="fas fa-arrow-right"></i>
              </button>
              <button className="btn-outline why-hero-watch">
                <i className="fas fa-play-circle"></i> Watch Video
              </button>
            </div>
          </div>

          <div className="why-hero-image-side">
            <div className="why-hero-img-wrapper">
              <img src="/images/why/why-hero.jpg" alt="Aspirant preparing for CGL with government building in background" />
              <div className="why-hero-handwritten">
                <span>"Right</span>
                <span>Guidance</span>
                <span>Changes</span>
                <span>Everything!"</span>
              </div>
              <div className="why-hero-sticker-bottom">
                <span>Same</span>
                <span>Aspirants</span>
                <span className="sticker-hl-blue">Bigger Dreams</span>
                <span className="sticker-hl-blue">Let's Crack CGL!</span>
              </div>
            </div>
            <div className="why-hero-quote-card">
              <p>"A Government Job is not just a job, it's a better life for you and your family."</p>
              <span className="quote-dash">— Parent of a CGL Aspirant</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 2: Value Icons Strip ===== */}
      <section className="why-value-strip">
        <div className="container">
          <div className="why-value-row">
            <div className="why-value-item">
              <div className="why-value-icon green"><i className="fas fa-briefcase"></i></div>
              <span>Better Career<br/>Opportunities</span>
            </div>
            <div className="why-value-item">
              <div className="why-value-icon blue"><i className="fas fa-shield-alt"></i></div>
              <span>Financial<br/>Stability</span>
            </div>
            <div className="why-value-item">
              <div className="why-value-icon green"><i className="fas fa-award"></i></div>
              <span>Social Respect<br/>& Recognition</span>
            </div>
            <div className="why-value-item">
              <div className="why-value-icon blue"><i className="fas fa-building"></i></div>
              <span>Job Security<br/>for Life</span>
            </div>
            <div className="why-value-item">
              <div className="why-value-icon blue"><i className="fas fa-user-tie"></i></div>
              <span>Personal<br/>Growth</span>
            </div>
            <div className="why-value-item">
              <div className="why-value-icon green"><i className="fas fa-users"></i></div>
              <span>A Brighter Future<br/>for Your Family</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 3: Why CGLPrep AI Matters – 3-Column ===== */}
      <section className="why-matters-sec">
        <div className="container">
          <div className="why-matters-header">
            <div>
              <h2>Why CGLPrep AI Matters?</h2>
              <p>Because your goals are bigger than just clearing an exam.</p>
            </div>
            <div className="why-matters-tabs">
              <button className="tab-inactive">For Students</button>
              <button className="tab-inactive">For Parents</button>
              <button className="tab-active">Why It Matters</button>
            </div>
          </div>

          <div className="why-matters-grid">
            {/* For Students Column */}
            <div className="why-matters-col">
              <div className="wm-col-header blue">
                <i className="fas fa-user-graduate"></i>
                <div>
                  <h3>For Students</h3>
                  <p>A Clear Path to Your Dream Career</p>
                </div>
              </div>
              <ul className="wm-list">
                <li><i className="fas fa-check"></i> Get structured guidance in one place</li>
                <li><i className="fas fa-check"></i> Know your real strengths and weaknesses</li>
                <li><i className="fas fa-check"></i> Save time with AI-powered study plans</li>
                <li><i className="fas fa-check"></i> Practice with real exam-level tests</li>
                <li><i className="fas fa-check"></i> Get post predictions and career insights</li>
                <li><i className="fas fa-check"></i> Stay motivated with progress tracking</li>
                <li><i className="fas fa-check"></i> Turn your government job dream into reality</li>
              </ul>
              <div className="wm-col-deco">
                <span className="wm-handwritten">"Discipline<br/>Today,<br/>Selection<br/>Tomorrow!"</span>
              </div>
              <button className="btn-outline wm-cta">Explore Student Benefits <i className="fas fa-arrow-right"></i></button>
            </div>

            {/* For Parents Column */}
            <div className="why-matters-col">
              <div className="wm-col-header green">
                <i className="fas fa-heart"></i>
                <div>
                  <h3>For Parents</h3>
                  <p>Peace of Mind, Measurable Progress</p>
                </div>
              </div>
              <ul className="wm-list">
                <li><i className="fas fa-check"></i> Track your child's study activity and progress</li>
                <li><i className="fas fa-check"></i> Get detailed performance reports</li>
                <li><i className="fas fa-check"></i> Understand strengths, weaknesses and gap</li>
                <li><i className="fas fa-check"></i> Ensure consistent study with AI guidance</li>
                <li><i className="fas fa-check"></i> Know their career chances and best post options</li>
                <li><i className="fas fa-check"></i> Be part of their success journey</li>
              </ul>
              <div className="wm-col-center-img">
                <img src="/images/why/why-family.jpg" alt="Family celebrating government job selection" />
                <div className="wm-img-overlay">
                  <span>"A secure future for ones we love"</span>
                  <span className="wm-heart">❤️</span>
                </div>
              </div>
              <button className="btn-outline wm-cta">See Parent Features <i className="fas fa-arrow-right"></i></button>
            </div>

            {/* For a Better Society Column */}
            <div className="why-matters-col">
              <div className="wm-col-header purple">
                <i className="fas fa-globe-asia"></i>
                <div>
                  <h3>For a Better Society</h3>
                  <p>Empowered Youth, Stronger India</p>
                </div>
              </div>
              <ul className="wm-list">
                <li><i className="fas fa-check"></i> Helps create a more efficient government workforce</li>
                <li><i className="fas fa-check"></i> Guides talent to the right departments</li>
                <li><i className="fas fa-check"></i> Supports transparency with data-driven insights</li>
                <li><i className="fas fa-check"></i> Reduces misinformation and confusion</li>
                <li><i className="fas fa-check"></i> Builds a well-informed, capable self-reliant India</li>
                <li><i className="fas fa-check"></i> Contributes to a stronger, self-reliant India</li>
              </ul>
              <div className="wm-col-deco-flag">
                <div className="wm-flag-sticker">
                  <span className="flag-text-same">Same</span>
                  <span className="flag-text-asp">Aspirants</span>
                  <span className="flag-text-hl">A Stronger</span>
                  <span className="flag-text-hl">India</span>
                </div>
              </div>
              <button className="btn-outline wm-cta">Our Larger Impact <i className="fas fa-arrow-right"></i></button>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 4: More Than a Job + CGL Advantage ===== */}
      <section className="why-job-sec">
        <div className="container">
          <div className="why-job-grid">
            {/* Left: More Than a Job */}
            <div className="why-job-card">
              <h2>More Than a Job — A Better Life</h2>
              <p>A government job through SSC CGL brings stability, respect and growth — for you and your family.</p>
              <div className="why-job-icons">
                <div className="wj-icon-item">
                  <div className="wj-icon blue"><i className="fas fa-rupee-sign"></i></div>
                  <span>Attractive Salary<br/>& Allowances</span>
                </div>
                <div className="wj-icon-item">
                  <div className="wj-icon blue"><i className="fas fa-home"></i></div>
                  <span>Job Security<br/>for Life</span>
                </div>
                <div className="wj-icon-item">
                  <div className="wj-icon blue"><i className="fas fa-chart-line"></i></div>
                  <span>Career Growth<br/>& Promotions</span>
                </div>
                <div className="wj-icon-item">
                  <div className="wj-icon blue"><i className="fas fa-award"></i></div>
                  <span>Respect<br/>in Society</span>
                </div>
                <div className="wj-icon-item">
                  <div className="wj-icon blue"><i className="fas fa-balance-scale"></i></div>
                  <span>Work-Life<br/>Balance</span>
                </div>
              </div>
            </div>

            {/* Right: The CGL Advantage */}
            <div className="why-advantage-card">
              <h2>The CGL Advantage</h2>
              <p>Why lakhs of aspirants choose SSC CGL every year.</p>
              <div className="why-adv-stats">
                <div className="adv-stat">
                  <strong>12,000+</strong>
                  <span>Expected Vacancies<br/>(CGL 2026)</span>
                </div>
                <div className="adv-stat">
                  <strong>20+</strong>
                  <span>Ministries &<br/>Departments</span>
                </div>
                <div className="adv-stat">
                  <strong>Group B & C</strong>
                  <span>Prestigious Posts</span>
                </div>
                <div className="adv-stat">
                  <strong>Pan India</strong>
                  <span>Job Locations</span>
                </div>
                <div className="adv-stat">
                  <strong>Level 4 – 8</strong>
                  <span>Pay Levels</span>
                </div>
                <div className="adv-stat">
                  <strong>₹44,900 – ₹1,42,400</strong>
                  <span>Salary Range (Basic Pay)</span>
                </div>
                <div className="adv-stat">
                  <strong>High</strong>
                  <span>Career Growth</span>
                </div>
                <div className="adv-stat">
                  <strong>A Stable Future</strong>
                  <span>For You & Your Family</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 5: Real Guidance, Real Results ===== */}
      <section className="why-real-sec">
        <div className="container">
          <div className="why-real-inner">
            <div className="why-real-left">
              <h2>Real Guidance. Real Results. Real Impact.</h2>
              <p>CGLPrep AI doesn't just help you study — it helps you make smarter decisions at every step of your journey.</p>
              <div className="why-real-features">
                <div className="wrf-item">
                  <div className="wrf-icon green"><i className="fas fa-brain"></i></div>
                  <div>
                    <strong>AStudy Smarter<br/>with AI</strong>
                  </div>
                </div>
                <div className="wrf-item">
                  <div className="wrf-icon blue"><i className="fas fa-bullseye"></i></div>
                  <div>
                    <strong>Know Your Best<br/>Post Options</strong>
                  </div>
                </div>
                <div className="wrf-item">
                  <div className="wrf-icon orange"><i className="fas fa-chart-bar"></i></div>
                  <div>
                    <strong>Track Progress<br/>and Improve</strong>
                  </div>
                </div>
              </div>
            </div>

            <div className="why-real-center">
              <div className="why-kalam-card">
                <div className="kalam-avatar">
                  <i className="fas fa-user-tie"></i>
                </div>
                <div className="kalam-quote">
                  <p>"Dream is not that which you see while sleeping, dream is that which does not let you sleep."</p>
                  <span>— Dr. A.P.J. Abdul Kalam</span>
                </div>
              </div>
            </div>

            <div className="why-real-sticker">
              <span>Same</span>
              <span>Aspirants</span>
              <span className="sticker-hl-blue">Bigger Dreams</span>
              <span className="sticker-hl-blue">Let's Build a</span>
              <span className="sticker-hl-blue">Stronger India</span>
              <span className="sticker-hl-blue">Together!</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 6: Ripple Effect ===== */}
      <section className="why-ripple-sec">
        <div className="container">
          <div className="why-ripple-header">
            <h2>Success Creates a Ripple Effect</h2>
            <p>When you succeed, your family grows, your community is inspired, and the nation becomes stronger.</p>
          </div>

          <div className="why-ripple-content">
            <div className="ripple-flow">
              <div className="ripple-step">
                <div className="ripple-icon blue"><i className="fas fa-user-check"></i></div>
                <span>You Get<br/>Selected</span>
              </div>
              <div className="ripple-arrow"><i className="fas fa-long-arrow-alt-right"></i></div>
              <div className="ripple-step">
                <div className="ripple-icon green"><i className="fas fa-home"></i></div>
                <span>Your Family<br/>Feels Proud</span>
              </div>
              <div className="ripple-arrow"><i className="fas fa-long-arrow-alt-right"></i></div>
              <div className="ripple-step">
                <div className="ripple-icon orange"><i className="fas fa-lightbulb"></i></div>
                <span>You Inspire<br/>Others</span>
              </div>
              <div className="ripple-arrow"><i className="fas fa-long-arrow-alt-right"></i></div>
              <div className="ripple-step">
                <div className="ripple-icon purple"><i className="fas fa-flag"></i></div>
                <span>A Stronger<br/>India</span>
              </div>
            </div>

            <div className="ripple-quote-card">
              <p className="ripple-handwritten">"It matters because it's not just about me, it's about a better future for my family."</p>
              <span className="ripple-author">— CGL Aspirant</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 7: Pre-Footer CTA ===== */}
      <section className="why-prefooter">
        <div className="container why-prefooter-inner">
          <div className="why-prefooter-content">
            <h2>Be a Part of a Brighter Future</h2>
            <p>Join thousands of aspirants who are preparing smarter with CGLPrep AI.</p>
          </div>
          <button className="btn-white why-prefooter-btn">Get Started for Free <i className="fas fa-arrow-right"></i></button>
        </div>
        <div className="why-prefooter-handwritten">
          <span>Bigger</span>
          <span>Aspirants</span>
          <span>Stronger</span>
          <span>India</span>
        </div>
      </section>

    </div>
  );
};

export default WhyItMatters;
