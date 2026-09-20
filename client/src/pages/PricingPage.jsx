import React, { useState } from 'react';
import '../pricing.css';
import { Link } from 'react-router-dom';

const PricingPage = () => {
  const [currency, setCurrency] = useState('INR');
  
  return (
    <div className="pricing-page">
      {/* Hero Section */}
      <section className="pricing-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">Home</Link> &gt; <span>Pricing</span>
          </div>
          <div className="pricing-hero-content">
            <div className="pricing-hero-text">
              <h1 className="pricing-title">Prepare Smarter.<br/><span className="text-primary">Pay Only for What You Need.</span></h1>
              <p className="pricing-subtitle">Complete SSC CGL preparation with AI-powered learning, mocks, PYQs, current affairs, analytics and Post Predictor — without expensive coaching fees.</p>
              
              <div className="pricing-feature-pills">
                <span className="pill"><i className="fas fa-bullseye text-primary"></i> CGL-only Platform</span>
                <span className="pill"><i className="fas fa-robot text-purple"></i> AI-powered Learning</span>
                <span className="pill"><i className="fas fa-lock text-blue"></i> No long-term lock-in</span>
                <span className="pill"><i className="fas fa-undo text-green"></i> Cancel anytime</span>
              </div>
            </div>
            <div className="pricing-hero-image">
              <img src="https://via.placeholder.com/500x300?text=Hero+Image" alt="Prepare Smarter" />
            </div>
          </div>
        </div>
      </section>

      {/* Free Trial Banner */}
      <section className="free-trial-banner">
        <div className="container banner-inner">
          <div className="banner-left">
            <div className="banner-icon">
              <i className="fas fa-gift"></i>
            </div>
            <div>
              <h3>1 DAY FREE — FULL ACCESS</h3>
              <p>Try every feature before you pay. Experience the complete CGLPrep AI platform.</p>
            </div>
          </div>
          <div className="banner-middle">
            <ul>
              <li><i className="fas fa-check-circle text-green"></i> No payment required</li>
              <li><i className="fas fa-check-circle text-green"></i> Free access for 24 hours</li>
            </ul>
          </div>
          <div className="banner-right">
            <button className="btn-primary">Start 1-Day Free Trial &rarr;</button>
            <div className="banner-quote">"Plan Today,<br/>Crack Tomorrow!"</div>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="pricing-plans-section">
        <div className="container">
          <div className="plans-header">
            <div>
              <h2>Choose Your Plan</h2>
              <p>Simple. Transparent. Affordable. Pick a plan that fits your preparation journey.</p>
            </div>
            <div className="plans-toggle-container">
               <span className="plans-note">All plans include the complete feature set. No hidden charges.</span>
               <div className="currency-toggle">
                 <button className={currency === 'INR' ? 'active' : ''} onClick={() => setCurrency('INR')}>INR</button>
                 <button className={currency === 'USD' ? 'active' : ''} onClick={() => setCurrency('USD')}>USD</button>
               </div>
            </div>
          </div>

          <div className="pricing-cards">
            {/* Card 1 */}
            <div className="pricing-card">
              <div className="card-header">
                <div className="icon-wrapper bg-green-light"><i className="fas fa-flask text-green"></i></div>
                <div>
                  <h4>1 DAY FREE TRIAL</h4>
                  <p>Explore Without Limits</p>
                </div>
              </div>
              <div className="price-display">
                <h2>₹0</h2>
              </div>
              <div className="duration-tag">
                1 Day - <span className="tag-green">FULL ACCESS</span>
              </div>
              <ul className="plan-features">
                <li><i className="fas fa-check-circle text-green"></i> All features included</li>
                <li><i className="fas fa-check-circle text-green"></i> No payment required</li>
                <li><i className="fas fa-check-circle text-green"></i> Experience the full platform</li>
                <li><i className="fas fa-check-circle text-green"></i> Perfect to explore & decide</li>
              </ul>
              <button className="btn-primary btn-block">Start Free Trial &rarr;</button>
            </div>

            {/* Card 2 */}
            <div className="pricing-card">
              <div className="card-header">
                <div className="icon-wrapper bg-blue-light"><i className="far fa-calendar-alt text-blue"></i></div>
                <div>
                  <h4>30 DAYS</h4>
                  <p>Best for trying CGLPrep AI</p>
                </div>
              </div>
              <div className="price-display">
                <h2>₹399</h2>
                <span className="per-day bg-orange-light">₹13/day</span>
              </div>
              <ul className="plan-features mt-auto">
                <li><i className="fas fa-check-circle text-green"></i> Full access to all features</li>
                <li><i className="fas fa-check-circle text-green"></i> Ideal for a 1-month sprint</li>
                <li><i className="fas fa-check-circle text-green"></i> Build your study routine</li>
                <li><i className="fas fa-check-circle text-green"></i> Great for new aspirants</li>
              </ul>
              <button className="btn-outline-primary btn-block">Start 30 Days &rarr;</button>
            </div>

            {/* Card 3 */}
            <div className="pricing-card">
              <div className="card-header">
                <div className="icon-wrapper bg-blue-light"><i className="far fa-calendar-check text-blue"></i></div>
                <div>
                  <h4>60 DAYS</h4>
                  <p>Best for focused preparation</p>
                </div>
              </div>
              <div className="price-display">
                <h2>₹599</h2>
                <span className="per-day bg-orange-light">₹10/day</span>
              </div>
              <ul className="plan-features mt-auto">
                <li><i className="fas fa-check-circle text-green"></i> Full access to all features</li>
                <li><i className="fas fa-check-circle text-green"></i> More time for practice & analysis</li>
                <li><i className="fas fa-check-circle text-green"></i> Complete major syllabus</li>
                <li><i className="fas fa-check-circle text-green"></i> Ideal for serious preparation</li>
              </ul>
              <button className="btn-outline-primary btn-block">Start 60 Days &rarr;</button>
            </div>

            {/* Card 4 - Most Popular */}
            <div className="pricing-card highlighted">
              <div className="card-badge bg-primary text-white">MOST POPULAR</div>
              <div className="card-header">
                <div className="icon-wrapper bg-orange-light"><i className="fas fa-crown text-orange"></i></div>
                <div>
                  <h4>6 MONTHS</h4>
                  <p>Best value for CGL 2026</p>
                </div>
              </div>
              <div className="price-display">
                <h2>₹1,499</h2>
                <span className="per-day bg-orange-light">₹8.22/day</span>
              </div>
              <ul className="plan-features mt-auto">
                <li><i className="fas fa-check-circle text-green"></i> Full access to all features</li>
                <li><i className="fas fa-check-circle text-green"></i> Enough time for complete prep</li>
                <li><i className="fas fa-check-circle text-green"></i> Practice, revise and improve</li>
                <li><i className="fas fa-check-circle text-green"></i> Most chosen by serious aspirants</li>
              </ul>
              <button className="btn-primary btn-block">Get 6 Months &rarr;</button>
            </div>

            {/* Card 5 - Best Value */}
            <div className="pricing-card best-value">
              <div className="card-badge bg-green text-white">BEST LONG-TERM VALUE</div>
              <div className="card-header">
                <div className="icon-wrapper bg-green-light"><i className="fas fa-crown text-green"></i></div>
                <div>
                  <h4>12 MONTHS</h4>
                  <p>Complete CGL Journey</p>
                </div>
              </div>
              <div className="price-display">
                <h2>₹2,499</h2>
                <span className="per-day bg-green-light text-green">₹6.85/day</span>
              </div>
              <ul className="plan-features mt-auto">
                <li><i className="fas fa-check-circle text-green"></i> Full access to all features</li>
                <li><i className="fas fa-check-circle text-green"></i> Ideal for complete preparation</li>
                <li><i className="fas fa-check-circle text-green"></i> Revision + extra practice time</li>
                <li><i className="fas fa-check-circle text-green"></i> Best for 2026 and beyond</li>
              </ul>
              <button className="btn-primary btn-block" style={{backgroundColor: '#10b981', borderColor: '#10b981'}}>Get 12 Months &rarr;</button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="everything-included">
        <div className="container">
          <div className="ei-header">
            <h2>Everything Included</h2>
            <p>All plans (including 1-day free trial) give you full access to every feature.</p>
          </div>
          
          <div className="features-grid">
            <div className="f-item"><i className="fas fa-file-alt text-blue"></i> Full-length Tier-I & Tier-II Mocks</div>
            <div className="f-item"><i className="fas fa-puzzle-piece text-blue"></i> Sectional & Topic-wise Tests</div>
            <div className="f-item"><i className="fas fa-history text-green"></i> Previous Year Papers (PYQs)</div>
            <div className="f-item"><i className="fas fa-edit text-blue"></i> Custom Tests</div>
            <div className="f-item"><i className="fas fa-robot text-purple"></i> AI Tutor & AI Doubt Solver</div>
            <div className="f-item"><i className="fas fa-calendar-alt text-orange"></i> Adaptive AI Study Plan</div>
            <div className="f-item"><i className="fas fa-chart-line text-green"></i> CGL Readiness Score</div>
            <div className="f-item"><i className="fas fa-chart-bar text-orange"></i> My Gap Analysis</div>
            <div className="f-item"><i className="fas fa-book text-red"></i> Topic Mastery & Mistake Book</div>
            
            <div className="f-item"><i className="fas fa-chart-pie text-purple"></i> Performance Analytics</div>
            <div className="f-item"><i className="fas fa-trophy text-orange"></i> All India Rank & Percentile</div>
            <div className="f-item"><i className="far fa-newspaper text-blue"></i> Daily Current Affairs</div>
            <div className="f-item"><i className="fas fa-book-open text-red"></i> Monthly Magazines</div>
            <div className="f-item"><i className="fas fa-list-ul text-orange"></i> Topic-wise Current Affairs</div>
            <div className="f-item"><i className="fas fa-tasks text-blue"></i> MCQs & Quizzes</div>
            <div className="f-item"><i className="fas fa-file-pdf text-purple"></i> Important Documents</div>
            <div className="f-item"><i className="far fa-calendar-check text-green"></i> Year-wise Current Affairs</div>
            <div className="f-item"><i className="fas fa-newspaper text-blue"></i> News Analysis</div>
            
            <div className="f-item"><i className="fas fa-bookmark text-red"></i> Bookmarks</div>
            <div className="f-item"><i className="fas fa-bullseye text-green"></i> SSC CGL 2026 Syllabus & Exam Intelligence</div>
            <div className="f-item"><i className="fas fa-chart-area text-green"></i> Post Predictor</div>
            <div className="f-item"><i className="fas fa-cut text-purple"></i> Cutoff Intelligence</div>
            <div className="f-item"><i className="fas fa-star text-orange"></i> Dream / Target / Safe Posts</div>
            <div className="f-item"><i className="fas fa-check-square text-blue"></i> Post Match Score</div>
            <div className="f-item"><i className="fas fa-sliders-h text-orange"></i> Preference Optimizer</div>
            <div className="f-item"><i className="fas fa-users text-blue"></i> Parent Progress Reporting</div>
            <div className="f-item"><i className="fas fa-tools text-blue"></i> Revision Tools</div>
            <div className="f-item"><i className="fas fa-magic text-purple"></i> Personalized Recommendations</div>
          </div>
        </div>
      </section>

      {/* Value Comparison */}
      <section className="value-comparison">
        <div className="container value-grid">
          <div className="value-box">
            <h3>Why CGLPrep AI Costs Less Than Traditional Coaching?</h3>
            <ul className="value-list">
              <li><i className="fas fa-check-circle text-green"></i> No classroom overhead or physical infrastructure costs</li>
              <li><i className="fas fa-check-circle text-green"></i> Focused only on SSC CGL (no unrelated exams)</li>
              <li><i className="fas fa-check-circle text-green"></i> AI-powered learning instead of large faculty costs</li>
              <li><i className="fas fa-check-circle text-green"></i> All resources in one platform — mocks, notes, current affairs, Post Predictor</li>
              <li><i className="fas fa-check-circle text-green"></i> Learn anytime, anywhere at your own pace</li>
            </ul>
            <div className="handwriting-note">Quality Preparation Without the High Cost!</div>
          </div>
          
          <div className="value-box plan-choices-box">
            <h3>Which Plan is Right for You?</h3>
            <div className="plan-choices">
              <div className="plan-choice">
                <div className="pc-icon"><i className="fas fa-flask text-green"></i></div>
                <div className="pc-text">
                  <h5>Just exploring?</h5>
                  <p>Try the platform risk-free.</p>
                </div>
                <div className="choice-tag">1 Day Free</div>
              </div>
              <div className="plan-choice">
                <div className="pc-icon"><i className="far fa-calendar-alt text-blue"></i></div>
                <div className="pc-text">
                  <h5>Need a 1 month sprint?</h5>
                  <p>Kickstart your preparation.</p>
                </div>
                <div className="choice-tag">30 Days</div>
              </div>
              <div className="plan-choice">
                <div className="pc-icon"><i className="far fa-calendar-check text-blue"></i></div>
                <div className="pc-text">
                  <h5>Focused revision?</h5>
                  <p>Strengthen practice and analysis.</p>
                </div>
                <div className="choice-tag">60 Days</div>
              </div>
              <div className="plan-choice">
                <div className="pc-icon"><i className="fas fa-crown text-orange"></i></div>
                <div className="pc-text">
                  <h5>Serious 2026 preparation?</h5>
                  <p>Most popular choice.</p>
                </div>
                <div className="choice-tag">6 Months</div>
              </div>
              <div className="plan-choice">
                <div className="pc-icon"><i className="fas fa-crown text-green"></i></div>
                <div className="pc-text">
                  <h5>Full CGL journey + revision?</h5>
                  <p>Maximum value & flexibility.</p>
                </div>
                <div className="choice-tag">12 Months</div>
              </div>
            </div>
          </div>

          <div className="value-box">
            <h3>A Smarter Investment in Your Child's Future</h3>
            <ul className="value-list">
              <li><i className="fas fa-check-circle text-green"></i> Track study activity & progress</li>
              <li><i className="fas fa-check-circle text-green"></i> View CGL Readiness Score</li>
              <li><i className="fas fa-check-circle text-green"></i> Identify strengths & weak areas</li>
              <li><i className="fas fa-check-circle text-green"></i> Detailed performance analytics</li>
              <li><i className="fas fa-check-circle text-green"></i> Stay informed, stay confident</li>
            </ul>
            <button className="btn-outline-primary btn-block mt-4">See What Parents Get &rarr;</button>
          </div>
        </div>
      </section>

      {/* Daily Cost Banner */}
      <section className="daily-cost-banner">
        <div className="container dcb-inner">
          <div className="dcb-left">
            <div className="cup-icon">🍵</div>
            <div>
              <h3>₹6.85/day on the 12-month plan</h3>
              <p>One focused preparation platform, one transparent annual price.</p>
            </div>
          </div>
          <div className="dcb-middle">
            Invest in your preparation.<br/>Build a brighter future.
          </div>
          <div className="dcb-right">
             <div className="dcb-quote">Same Aspirants,<br/>Bigger Dreams</div>
             <button className="btn-yellow">Choose Your Plan &rarr;</button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="pricing-faq">
        <div className="container">
          <div className="faq-layout">
            <div className="faq-left">
              <h2>Frequently<br/>Asked Questions</h2>
              <p>Everything you need to know about our plans and pricing.</p>
              <div className="faq-help">
                <div className="help-avatar">
                   <img src="https://via.placeholder.com/80x80" alt="Help" style={{borderRadius: '50%', width: '80px', height: '80px'}} />
                </div>
                <div className="help-box">
                  <p>Still have questions?</p>
                  <strong>We're here to help!</strong>
                </div>
              </div>
            </div>
            <div className="faq-right">
               <div className="faq-item">
                 <div className="faq-q">Is the 1-day trial really full access? <span>+</span></div>
               </div>
               <div className="faq-item">
                 <div className="faq-q">What happens after the free trial? <span>+</span></div>
               </div>
               <div className="faq-item">
                 <div className="faq-q">Can I switch or upgrade my plan later? <span>+</span></div>
               </div>
               <div className="faq-item">
                 <div className="faq-q">Do paid plans include Tier-I and Tier-II mocks? <span>+</span></div>
               </div>
            </div>
            <div className="faq-right">
               <div className="faq-item">
                 <div className="faq-q">Are AI Tutor and Post Predictor included in all plans? <span>+</span></div>
               </div>
               <div className="faq-item">
                 <div className="faq-q">Is there any auto-renewal? <span>+</span></div>
               </div>
               <div className="faq-item">
                 <div className="faq-q">Can parents track my progress? <span>+</span></div>
               </div>
               <div className="faq-item">
                 <div className="faq-q">Do you offer refunds? <span>+</span></div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="trust-badges">
        <div className="container badges-grid">
           <div className="badge-item main-badge">
             <i className="fas fa-shield-alt text-green badge-icon"></i>
             <div>
               <strong>Secure & Trusted Payments</strong>
               <p>Your payments are safe with industry-standard encryption.</p>
             </div>
           </div>
           <div className="badge-item payment-icons">
              <span className="p-icon"><strong>UPI</strong></span>
              <span className="p-icon"><strong>VISA</strong></span>
              <span className="p-icon"><strong>MasterCard</strong></span>
              <span className="p-icon"><strong>RuPay</strong></span>
              <span className="p-icon"><strong>Paytm</strong></span>
           </div>
           <div className="badge-item sm-badge">
             <i className="fas fa-bolt text-green badge-icon"></i>
             <div>
               <strong>Instant Access</strong>
               <p>Start learning immediately</p>
             </div>
           </div>
           <div className="badge-item sm-badge">
             <i className="fas fa-sync text-green badge-icon"></i>
             <div>
               <strong>Transparent Pricing</strong>
               <p>No hidden charges</p>
             </div>
           </div>
           <div className="badge-item sm-badge">
             <i className="fas fa-headset text-green badge-icon"></i>
             <div>
               <strong>24x7 Support</strong>
               <p>We're here to help</p>
             </div>
           </div>
           <div className="badge-item sm-badge">
             <i className="fas fa-lock text-green badge-icon"></i>
             <div>
               <strong>Your Privacy</strong>
               <p>Your data is always safe</p>
             </div>
           </div>
        </div>
      </section>

      {/* Pre-Footer CTA */}
      <section className="prefooter-cta">
        <div className="container pf-inner">
           <div className="pf-text">
             <h2>Your CGL Dream Deserves a Smarter Plan.</h2>
             <p>Join CGLPrep AI and take a confident step towards your government job.</p>
           </div>
           <div className="pf-actions">
             <button className="btn-yellow">Start 1-Day Free Trial &rarr;</button>
             <button className="btn-outline-light">Compare Plans</button>
           </div>
           <div className="pf-quote">
             "Plan. Practice. Crack CGL."
           </div>
        </div>
      </section>
      
    </div>
  );
};

export default PricingPage;
