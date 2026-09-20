import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ParentSidebar from '../components/ParentSidebar';

const ParentHelpSupportPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ display: 'flex', minHeight: '100vh', fontFamily: "'Inter', sans-serif", backgroundColor: '#f1f5f9' }}>
      
      {/* Sidebar */}
      <ParentSidebar activeTab="help-support" />

      {/* Main Content Area */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        
        {/* Top Navbar */}
        <div style={{ height: '60px', backgroundColor: 'white', borderBottom: '1px solid #e2e8f0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 30px', position: 'sticky', top: 0, zIndex: 50 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <i className="fas fa-users" style={{ color: '#2563eb', fontSize: '20px' }}></i>
            <div>
              <h2 style={{ margin: 0, fontSize: '15px', fontWeight: '700', color: '#0f172a' }}>Parent Portal</h2>
              <p style={{ margin: 0, fontSize: '11px', color: '#64748b' }}>Supporting their dreams, together.</p>
            </div>
          </div>

          <div style={{ transform: 'rotate(-5deg)' }}>
            <p style={{ fontFamily: "'Caveat', cursive", fontSize: '18px', color: '#1e3a8a', margin: '0 0 2px', lineHeight: '1.1' }}>Same Aspiration<br/>Bigger Dreams!</p>
            <div style={{ height: '2px', width: '40px', background: 'linear-gradient(90deg, #ff9933 33.3%, #ffffff 33.3%, #ffffff 66.6%, #138808 66.6%)', borderRadius: '2px', marginLeft: 'auto' }}></div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <div style={{ position: 'relative', cursor: 'pointer' }}>
              <i className="far fa-bell" style={{ fontSize: '20px', color: '#475569' }}></i>
              <div style={{ position: 'absolute', top: '-4px', right: '-4px', width: '8px', height: '8px', backgroundColor: '#ef4444', borderRadius: '50%', border: '2px solid white' }}></div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
              <div style={{ width: '32px', height: '32px', backgroundColor: '#64748b', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white', fontSize: '12px', fontWeight: '700' }}>
                RK
              </div>
              <div style={{ textAlign: 'left' }}>
                <p style={{ margin: 0, fontSize: '10px', color: '#64748b' }}>Welcome,</p>
                <h4 style={{ margin: 0, fontSize: '13px', fontWeight: '700', color: '#0f172a' }}>Rakesh Kumar Thakur</h4>
                <p style={{ margin: 0, fontSize: '10px', color: '#94a3b8' }}>(Pankaj's Father)</p>
              </div>
              <i className="fas fa-chevron-down" style={{ fontSize: '12px', color: '#94a3b8' }}></i>
            </div>
          </div>
        </div>

        {/* Dashboard Content */}
        <div style={{ padding: '30px', flex: 1, overflowY: 'auto' }}>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '12px', color: '#64748b', marginBottom: '15px' }}>
            <Link to="/parent-dashboard" style={{ color: '#2563eb', textDecoration: 'none' }}><i className="fas fa-chevron-left" style={{ fontSize: '10px', marginRight: '5px' }}></i> Dashboard</Link>
            <i className="fas fa-chevron-right" style={{ fontSize: '10px', margin: '0 5px' }}></i> Help & Support
          </div>

          {/* Header Row */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '25px' }}>
            <div>
              <h1 style={{ margin: '0 0 5px', fontSize: '28px', fontWeight: '800', color: '#1e3a8a', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ backgroundColor: '#1e3a8a', color: 'white', width: '36px', height: '36px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '20px' }}>
                  <i className="fas fa-question"></i>
                </div>
                Help & Support
              </h1>
              <p style={{ margin: 0, fontSize: '15px', color: '#475569' }}>We're here to help you at every step of your SSC CGL journey.</p>
            </div>
            
            <div style={{ backgroundColor: '#f0f9ff', padding: '12px 20px', borderRadius: '12px', border: '1px solid #bae6fd', textAlign: 'center', transform: 'rotate(-2deg)' }}>
               <p style={{ fontFamily: "'Caveat', cursive", fontSize: '18px', color: '#1e40af', margin: '0 0 5px', lineHeight: '1.2' }}>"Your Success<br/>is Our Support."</p>
               <div style={{ height: '2px', width: '30px', background: 'linear-gradient(90deg, #ff9933 33.3%, #ffffff 33.3%, #ffffff 66.6%, #138808 66.6%)', borderRadius: '2px', margin: '0 auto' }}></div>
            </div>
          </div>

          {/* Contact Options Row */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '15px', marginBottom: '25px' }}>
            {/* Live Chat */}
            <div style={{ backgroundColor: '#eff6ff', padding: '20px', borderRadius: '16px', border: '1px solid #bfdbfe', display: 'flex', flexDirection: 'column' }}>
               <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '10px' }}>
                 <div style={{ width: '40px', height: '40px', borderRadius: '12px', backgroundColor: '#bfdbfe', color: '#2563eb', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '20px' }}><i className="fas fa-comment-dots"></i></div>
                 <h3 style={{ margin: 0, fontSize: '14px', fontWeight: '700', color: '#1e3a8a' }}>Live Chat</h3>
               </div>
               <p style={{ margin: '0 0 15px', fontSize: '11px', color: '#475569', lineHeight: '1.4' }}>Chat with our support team in real-time.</p>
               <button style={{ marginTop: 'auto', padding: '8px', backgroundColor: 'white', border: '1px solid #93c5fd', borderRadius: '8px', fontSize: '11px', fontWeight: '600', color: '#2563eb', cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '5px' }}>
                 Start Chat <i className="fas fa-arrow-right"></i>
               </button>
            </div>

            {/* Email Support */}
            <div style={{ backgroundColor: '#f0fdf4', padding: '20px', borderRadius: '16px', border: '1px solid #bbf7d0', display: 'flex', flexDirection: 'column' }}>
               <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '10px' }}>
                 <div style={{ width: '40px', height: '40px', borderRadius: '12px', backgroundColor: '#bbf7d0', color: '#16a34a', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '20px' }}><i className="fas fa-envelope"></i></div>
                 <h3 style={{ margin: 0, fontSize: '14px', fontWeight: '700', color: '#166534' }}>Email Support</h3>
               </div>
               <p style={{ margin: '0 0 15px', fontSize: '11px', color: '#475569', lineHeight: '1.4' }}>Get detailed help via email. We usually respond within 24 hours.</p>
               <button style={{ marginTop: 'auto', padding: '8px', backgroundColor: 'white', border: '1px solid #86efac', borderRadius: '8px', fontSize: '11px', fontWeight: '600', color: '#16a34a', cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '5px' }}>
                 Send Email <i className="fas fa-arrow-right"></i>
               </button>
            </div>

            {/* Call Support */}
            <div style={{ backgroundColor: '#fff1f2', padding: '20px', borderRadius: '16px', border: '1px solid #fecdd3', display: 'flex', flexDirection: 'column' }}>
               <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '10px' }}>
                 <div style={{ width: '40px', height: '40px', borderRadius: '12px', backgroundColor: '#fecdd3', color: '#e11d48', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '20px' }}><i className="fas fa-phone-alt"></i></div>
                 <h3 style={{ margin: 0, fontSize: '14px', fontWeight: '700', color: '#be123c' }}>Call Support</h3>
               </div>
               <p style={{ margin: '0 0 15px', fontSize: '11px', color: '#475569', lineHeight: '1.4' }}>Talk to our experts directly.</p>
               <button style={{ marginTop: 'auto', padding: '8px', backgroundColor: 'white', border: '1px solid #fda4af', borderRadius: '8px', fontSize: '12px', fontWeight: '700', color: '#e11d48', cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '5px' }}>
                 <i className="fas fa-phone-alt"></i> +91 1800 309 0026
               </button>
               <div style={{ textAlign: 'center', marginTop: '5px', fontSize: '9px', color: '#64748b' }}>(Mon - Sat, 9 AM - 7 PM)</div>
            </div>

            {/* Raise a Ticket */}
            <div style={{ backgroundColor: '#f5f3ff', padding: '20px', borderRadius: '16px', border: '1px solid #ddd6fe', display: 'flex', flexDirection: 'column' }}>
               <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '10px' }}>
                 <div style={{ width: '40px', height: '40px', borderRadius: '12px', backgroundColor: '#ddd6fe', color: '#9333ea', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '20px' }}><i className="fas fa-ticket-alt"></i></div>
                 <h3 style={{ margin: 0, fontSize: '14px', fontWeight: '700', color: '#7e22ce' }}>Raise a Ticket</h3>
               </div>
               <p style={{ margin: '0 0 15px', fontSize: '11px', color: '#475569', lineHeight: '1.4' }}>Report your issue and track its status.</p>
               <button style={{ marginTop: 'auto', padding: '8px', backgroundColor: 'white', border: '1px solid #c4b5fd', borderRadius: '8px', fontSize: '11px', fontWeight: '600', color: '#9333ea', cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '5px' }}>
                 Create Ticket <i className="fas fa-arrow-right"></i>
               </button>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '25px' }}>
            
            {/* Left Content Area (FAQs) */}
            <div style={{ flex: 1.2, backgroundColor: 'white', padding: '25px', borderRadius: '16px', border: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '20px' }}>
                 <div style={{ width: '32px', height: '32px', borderRadius: '8px', backgroundColor: '#eff6ff', color: '#2563eb', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '16px' }}><i className="fas fa-question-circle"></i></div>
                 <h3 style={{ margin: 0, fontSize: '16px', fontWeight: '700', color: '#0f172a' }}>Frequently Asked Questions (FAQs)</h3>
              </div>

              <div style={{ position: 'relative', marginBottom: '20px' }}>
                <i className="fas fa-search" style={{ position: 'absolute', left: '15px', top: '50%', transform: 'translateY(-50%)', color: '#2563eb' }}></i>
                <input type="text" placeholder="Search for a question... (e.g. test, result, payment)" style={{ width: '100%', padding: '12px 15px 12px 40px', border: '1px solid #cbd5e1', borderRadius: '8px', fontSize: '12px', color: '#0f172a', boxSizing: 'border-box', outline: 'none' }} />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {[
                  'How do I access mock tests?',
                  'How is the overall score calculated?',
                  'Can I change my study plan?',
                  'Where can I download test reports?',
                  'I am facing login issues. What should I do?',
                  'How can I update my profile information?',
                  'Is there a mobile app available?',
                  'How do I contact my mentor or teacher?',
                ].map((q, idx) => (
                  <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px 0', borderBottom: '1px solid #f1f5f9', cursor: 'pointer' }}>
                    <span style={{ fontSize: '12px', fontWeight: '500', color: '#0f172a' }}>{q}</span>
                    <i className="fas fa-chevron-right" style={{ color: '#2563eb', fontSize: '12px' }}></i>
                  </div>
                ))}
              </div>
            </div>

            {/* Middle Content Area (Submit Ticket) */}
            <div style={{ flex: 1, backgroundColor: 'white', padding: '25px', borderRadius: '16px', border: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column' }}>
               <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '5px' }}>
                 <div style={{ width: '32px', height: '32px', borderRadius: '8px', backgroundColor: '#eff6ff', color: '#2563eb', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '16px' }}><i className="fas fa-clipboard-list"></i></div>
                 <h3 style={{ margin: 0, fontSize: '16px', fontWeight: '700', color: '#0f172a' }}>Submit a Support Request</h3>
               </div>
               <p style={{ margin: '0 0 20px', fontSize: '11px', color: '#64748b' }}>Fill in the details and our team will get back to you.</p>

               <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', flex: 1 }}>
                 <div>
                   <label style={{ display: 'block', marginBottom: '5px', fontSize: '11px', fontWeight: '600', color: '#0f172a' }}>Issue Category</label>
                   <div style={{ position: 'relative' }}>
                     <select style={{ width: '100%', padding: '10px 15px', border: '1px solid #cbd5e1', borderRadius: '8px', fontSize: '12px', color: '#64748b', boxSizing: 'border-box', outline: 'none', appearance: 'none', cursor: 'pointer' }}>
                       <option>Select Category</option>
                       <option>Technical Issue</option>
                       <option>Payment/Billing</option>
                       <option>Course Content</option>
                       <option>Other</option>
                     </select>
                     <i className="fas fa-chevron-down" style={{ position: 'absolute', right: '15px', top: '50%', transform: 'translateY(-50%)', color: '#2563eb', pointerEvents: 'none' }}></i>
                   </div>
                 </div>

                 <div>
                   <label style={{ display: 'block', marginBottom: '5px', fontSize: '11px', fontWeight: '600', color: '#0f172a' }}>Subject</label>
                   <input type="text" placeholder="Enter subject" style={{ width: '100%', padding: '10px 15px', border: '1px solid #cbd5e1', borderRadius: '8px', fontSize: '12px', color: '#0f172a', boxSizing: 'border-box', outline: 'none' }} />
                 </div>

                 <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                   <label style={{ display: 'block', marginBottom: '5px', fontSize: '11px', fontWeight: '600', color: '#0f172a' }}>Description</label>
                   <textarea placeholder="Please describe your issue..." style={{ width: '100%', padding: '12px 15px', border: '1px solid #cbd5e1', borderRadius: '8px', fontSize: '12px', color: '#0f172a', boxSizing: 'border-box', outline: 'none', flex: 1, resize: 'none' }}></textarea>
                 </div>

                 <div>
                   <label style={{ display: 'block', marginBottom: '5px', fontSize: '11px', fontWeight: '600', color: '#0f172a' }}>Attach Screenshot <span style={{ color: '#64748b', fontWeight: '400' }}>(Optional)</span></label>
                   <div style={{ display: 'flex', alignItems: 'center', border: '1px solid #cbd5e1', borderRadius: '8px', padding: '5px', gap: '10px' }}>
                      <button style={{ padding: '6px 12px', backgroundColor: '#f8fafc', border: '1px solid #cbd5e1', borderRadius: '6px', fontSize: '11px', color: '#2563eb', fontWeight: '600', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '5px' }}>
                        <i className="fas fa-paperclip"></i> Choose File
                      </button>
                      <span style={{ fontSize: '11px', color: '#64748b' }}>No file chosen</span>
                   </div>
                 </div>

                 <button style={{ width: '100%', padding: '12px', backgroundColor: '#2563eb', color: 'white', border: 'none', borderRadius: '8px', fontSize: '13px', fontWeight: '600', cursor: 'pointer', marginTop: '10px' }}>
                   Submit Request
                 </button>
               </div>
            </div>

            {/* Right Sidebar Column (approx 0.8fr) */}
            <div style={{ flex: 0.8, display: 'flex', flexDirection: 'column', gap: '20px' }}>
              
              {/* Support Hours */}
              <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '15px' }}>
                  <i className="far fa-clock" style={{ color: '#2563eb', fontSize: '16px' }}></i>
                  <div>
                    <h3 style={{ margin: '0 0 2px', fontSize: '13px', fontWeight: '700', color: '#0f172a' }}>Support Hours</h3>
                    <p style={{ margin: 0, fontSize: '10px', color: '#64748b' }}>Our support team is available:</p>
                  </div>
                </div>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                    <i className="far fa-calendar-alt" style={{ color: '#64748b', marginTop: '2px' }}></i>
                    <div>
                      <h4 style={{ margin: '0 0 2px', fontSize: '11px', fontWeight: '700', color: '#0f172a' }}>Monday - Saturday</h4>
                      <p style={{ margin: 0, fontSize: '10px', color: '#475569' }}>9:00 AM - 7:00 PM</p>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                    <i className="far fa-calendar-alt" style={{ color: '#64748b', marginTop: '2px' }}></i>
                    <div>
                      <h4 style={{ margin: '0 0 2px', fontSize: '11px', fontWeight: '700', color: '#0f172a' }}>Sunday</h4>
                      <p style={{ margin: 0, fontSize: '10px', color: '#475569' }}>10:00 AM - 2:00 PM</p>
                      <p style={{ margin: 0, fontSize: '9px', color: '#94a3b8' }}>(Limited Support)</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Help Links */}
              <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '16px', border: '1px solid #e2e8f0', flex: 1 }}>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '15px' }}>
                  <i className="fas fa-link" style={{ color: '#2563eb', fontSize: '16px' }}></i>
                  <h3 style={{ margin: 0, fontSize: '13px', fontWeight: '700', color: '#0f172a' }}>Quick Help Links</h3>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {[
                    { label: 'User Guide / How to Use', icon: 'fa-file-alt' },
                    { label: 'Video Tutorials', icon: 'fa-play-circle' },
                    { label: 'Exam Information (SSC CGL)', icon: 'fa-info-circle' },
                    { label: 'Payment & Subscription Help', icon: 'fa-credit-card' },
                    { label: 'Technical Issues', icon: 'fa-wrench' },
                    { label: 'Feature Requests', icon: 'fa-lightbulb' },
                    { label: 'Give Feedback', icon: 'fa-comment-alt' },
                  ].map((link, idx) => (
                    <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}>
                      <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                        <i className={`far ${link.icon}`} style={{ color: '#2563eb', width: '14px', textAlign: 'center', fontSize: '12px' }}></i>
                        <span style={{ fontSize: '11px', fontWeight: '500', color: '#1e293b' }}>{link.label}</span>
                      </div>
                      <i className="fas fa-chevron-right" style={{ color: '#cbd5e1', fontSize: '10px' }}></i>
                    </div>
                  ))}
                </div>
              </div>

              {/* Still Need Help */}
              <div style={{ backgroundColor: '#f0fdf4', padding: '20px', borderRadius: '16px', border: '1px solid #bbf7d0' }}>
                 <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '10px' }}>
                   <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: '#16a34a', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '16px' }}><i className="fas fa-headset"></i></div>
                   <h3 style={{ margin: 0, fontSize: '13px', fontWeight: '700', color: '#166534' }}>Still Need Help?</h3>
                 </div>
                 <p style={{ margin: '0 0 15px', fontSize: '10px', color: '#15803d', lineHeight: '1.4' }}>Our team is always happy to assist you. Your queries matter to us!</p>
                 <button style={{ width: '100%', padding: '10px', backgroundColor: '#16a34a', color: 'white', border: 'none', borderRadius: '8px', fontSize: '11px', fontWeight: '600', cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '5px' }}>
                   Chat with Support Now <i className="fas fa-arrow-right"></i>
                 </button>
              </div>

            </div>

          </div>

        </div>

        {/* Bottom Footer */}
        <div style={{ padding: '20px 30px', backgroundColor: 'white', borderTop: '1px solid #e2e8f0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '12px', color: '#64748b' }}>
          <div>© 2026 CGLPrep AI. All rights reserved.</div>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '30px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <i className="fas fa-users" style={{ color: '#2563eb', fontSize: '20px' }}></i>
              <div style={{ lineHeight: '1.2' }}>
                <div style={{ fontWeight: '700', color: '#0f172a' }}>10,000+</div>
                <div style={{ fontSize: '10px' }}>Students Trust Us</div>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <i className="fas fa-trophy" style={{ color: '#fbbf24', fontSize: '20px' }}></i>
              <div style={{ lineHeight: '1.2' }}>
                <div style={{ fontWeight: '700', color: '#0f172a' }}>95%</div>
                <div style={{ fontSize: '10px' }}>Parent Satisfaction</div>
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <span style={{ fontWeight: '600', color: '#1e3a8a', display: 'flex', alignItems: 'center', gap: '8px' }}>
              Together for a Brighter Tomorrow <div style={{ width: '20px', height: '3px', display: 'flex', borderRadius: '2px', overflow: 'hidden' }}><div style={{ flex: 1, backgroundColor: '#ff9933' }}></div><div style={{ flex: 1, backgroundColor: '#ffffff' }}></div><div style={{ flex: 1, backgroundColor: '#138808' }}></div></div>
            </span>
            <span>|</span>
            <span style={{ fontWeight: '600', color: '#475569', display: 'flex', alignItems: 'center', gap: '5px' }}>
               Made for India's Aspirants <i className="fas fa-heart" style={{ color: '#ef4444' }}></i>
            </span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ParentHelpSupportPage;
