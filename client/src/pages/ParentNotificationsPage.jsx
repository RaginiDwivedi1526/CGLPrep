import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ParentSidebar from '../components/ParentSidebar';

const ParentNotificationsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ display: 'flex', minHeight: '100vh', fontFamily: "'Inter', sans-serif", backgroundColor: '#f1f5f9' }}>
      
      {/* Sidebar */}
      <ParentSidebar activeTab="notifications" />

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
              <div style={{ position: 'absolute', top: '-8px', right: '-8px', backgroundColor: '#ef4444', color: 'white', fontSize: '8px', padding: '2px 4px', borderRadius: '10px', fontWeight: '700' }}>12</div>
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
            <i className="fas fa-chevron-right" style={{ fontSize: '10px', margin: '0 5px' }}></i> Notifications
          </div>

          {/* Header Row */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '25px' }}>
            <div>
              <h1 style={{ margin: '0 0 5px', fontSize: '28px', fontWeight: '800', color: '#1e3a8a', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <i className="fas fa-bell"></i> Notifications
              </h1>
              <p style={{ margin: 0, fontSize: '15px', color: '#475569' }}>Stay updated with important updates, test alerts, study reminders and personalized insights.</p>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
               <button style={{ display: 'flex', alignItems: 'center', gap: '8px', backgroundColor: 'white', padding: '10px 15px', borderRadius: '8px', border: '1px solid #cbd5e1', color: '#0f172a', fontWeight: '600', fontSize: '14px', cursor: 'pointer' }}>
                 <i className="far fa-check-circle" style={{ color: '#2563eb' }}></i> Mark All as Read
               </button>
               <div style={{ backgroundColor: '#f0f9ff', padding: '12px 20px', borderRadius: '12px', border: '1px solid #bae6fd', textAlign: 'center', transform: 'rotate(-2deg)' }}>
                  <p style={{ fontFamily: "'Caveat', cursive", fontSize: '18px', color: '#1e40af', margin: '0 0 5px', lineHeight: '1.2' }}>"Small steps<br/>every day lead to big results."</p>
                  <div style={{ height: '2px', width: '30px', background: 'linear-gradient(90deg, #ff9933 33.3%, #ffffff 33.3%, #ffffff 66.6%, #138808 66.6%)', borderRadius: '2px', margin: '0 auto' }}></div>
               </div>
            </div>
          </div>

          {/* Filter Tabs */}
          <div style={{ display: 'flex', gap: '10px', marginBottom: '25px', overflowX: 'auto', paddingBottom: '5px' }}>
            {[
              { label: 'All Notifications (12)', active: true },
              { label: 'Important (3)', active: false },
              { label: 'Tests (2)', active: false },
              { label: 'Study Plan (2)', active: false },
              { label: 'Current Affairs (2)', active: false },
              { label: 'Achievements (1)', active: false },
              { label: 'System (2)', active: false },
            ].map((tab, i) => (
              <button key={i} style={{ padding: '10px 20px', backgroundColor: tab.active ? '#2563eb' : 'white', color: tab.active ? 'white' : '#475569', border: tab.active ? 'none' : '1px solid #e2e8f0', borderRadius: '8px', fontSize: '13px', fontWeight: tab.active ? '600' : '500', cursor: 'pointer', whiteSpace: 'nowrap' }}>
                {tab.label}
              </button>
            ))}
          </div>

          <div style={{ display: 'flex', gap: '25px' }}>
            
            {/* Left Content Area (Notification List) */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <div style={{ backgroundColor: 'white', borderRadius: '16px', border: '1px solid #e2e8f0', overflow: 'hidden' }}>
                
                {/* Notification Items */}
                {[
                  { icon: 'fa-trophy', iconBg: '#ffe4e6', iconColor: '#e11d48', title: 'New Test Result Available', desc: 'Your SSC CGL Mock Test 12 result is ready. You scored 78/200 (69 percentile). Click to view detailed analysis.', time: '10 minutes ago', isNew: true },
                  { icon: 'fa-calendar-alt', iconBg: '#eff6ff', iconColor: '#2563eb', title: 'Upcoming Test: Full Length Mock 13', desc: 'Your next mock test is scheduled for tomorrow at 10:00 AM. Be prepared!', time: '1 hour ago', isNew: true },
                  { icon: 'fa-book-open', iconBg: '#dcfce7', iconColor: '#16a34a', title: 'Current Affairs Update', desc: "Today's top 10 current affairs topics are available. Don't miss the daily quiz!", time: '3 hours ago', isNew: true },
                  { icon: 'fa-chart-simple', iconBg: '#f3e8ff', iconColor: '#9333ea', title: 'Weekly Progress Report', desc: 'Your weekly study report (2 Sep - 8 Sep) is ready. You studied for 18 hours and completed 4 mock tests.', time: '5 hours ago', isNew: false },
                  { icon: 'fa-star', iconBg: '#fef3c7', iconColor: '#d97706', title: 'Great Job! 🎉', desc: 'You have completed 1000 practice questions! Keep up the amazing work.', time: '1 day ago', isNew: false },
                  { icon: 'fa-bullseye', iconBg: '#dcfce7', iconColor: '#16a34a', title: 'Study Plan Update', desc: 'Your study plan has been updated based on your latest performance. Check your new targets.', time: '1 day ago', isNew: false },
                  { icon: 'fa-file-alt', iconBg: '#ffe4e6', iconColor: '#e11d48', title: 'Important: SSC CGL Exam Notification', desc: 'SSC CGL 2026 official notification is expected soon. Stay tuned for updates.', time: '2 days ago', isNew: false },
                  { icon: 'fa-lightbulb', iconBg: '#eff6ff', iconColor: '#3b82f6', title: 'AI Insight for You', desc: 'You are strong in Reasoning but need to focus more on General Awareness. Check detailed suggestions.', time: '2 days ago', isNew: false },
                  { icon: 'fa-bell', iconBg: '#fef3c7', iconColor: '#d97706', title: 'Daily Study Reminder', desc: "You have not completed today's study goal. Let's get back on track!", time: '3 days ago', isNew: false },
                  { icon: 'fa-users', iconBg: '#f3e8ff', iconColor: '#a855f7', title: 'Parent Update', desc: "Pankaj has completed 75% of this week's study targets. Well done!", time: '3 days ago', isNew: false },
                ].map((notif, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', padding: '20px', borderBottom: idx !== 9 ? '1px solid #f1f5f9' : 'none', cursor: 'pointer', transition: 'background-color 0.2s', ':hover': { backgroundColor: '#f8fafc' } }}>
                    <div style={{ width: '45px', height: '45px', borderRadius: '12px', backgroundColor: notif.iconBg, color: notif.iconColor, display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '20px', flexShrink: 0, marginRight: '20px' }}>
                      <i className={`fas ${notif.icon}`}></i>
                    </div>
                    <div style={{ flex: 1, paddingRight: '20px' }}>
                      <h4 style={{ margin: '0 0 4px', fontSize: '13px', fontWeight: '700', color: '#0f172a' }}>{notif.title}</h4>
                      <p style={{ margin: 0, fontSize: '11px', color: '#475569', lineHeight: '1.4' }}>{notif.desc}</p>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px', flexShrink: 0 }}>
                      <span style={{ fontSize: '11px', color: '#94a3b8' }}>{notif.time}</span>
                      {notif.isNew && <div style={{ backgroundColor: '#ef4444', color: 'white', padding: '4px 10px', borderRadius: '12px', fontSize: '10px', fontWeight: '700' }}>New</div>}
                      {!notif.isNew && <div style={{ width: '38px' }}></div> /* placeholder for alignment */}
                      <i className="fas fa-chevron-right" style={{ color: '#cbd5e1', fontSize: '14px' }}></i>
                    </div>
                  </div>
                ))}
              </div>

              {/* Load More Area */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 20px' }}>
                 <span style={{ fontSize: '12px', color: '#64748b', fontWeight: '500' }}>Showing 10 of 12 notifications</span>
                 <button style={{ padding: '8px 16px', backgroundColor: 'white', border: '1px solid #cbd5e1', borderRadius: '8px', fontSize: '12px', fontWeight: '600', color: '#0f172a', display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                   Load More <i className="fas fa-chevron-down" style={{ color: '#2563eb' }}></i>
                 </button>
              </div>
            </div>

            {/* Right Sidebar Column (30%) */}
            <div style={{ width: '280px', display: 'flex', flexDirection: 'column', gap: '20px', flexShrink: 0 }}>
              
              {/* Notification Filters */}
              <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '20px' }}>
                  <i className="fas fa-filter" style={{ color: '#2563eb', fontSize: '16px' }}></i>
                  <h3 style={{ margin: 0, fontSize: '14px', fontWeight: '700', color: '#0f172a' }}>Notification Filters</h3>
                </div>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                  {[
                    { label: 'All Notifications', count: 12, checked: true },
                    { label: 'Important', count: 3, checked: false },
                    { label: 'Tests & Results', count: 2, checked: false },
                    { label: 'Study Plan', count: 2, checked: false },
                    { label: 'Current Affairs', count: 2, checked: false },
                    { label: 'Achievements', count: 1, checked: false },
                    { label: 'System Updates', count: 2, checked: false },
                  ].map((filter, i) => (
                    <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}>
                      <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                        <div style={{ width: '18px', height: '18px', borderRadius: '4px', border: filter.checked ? 'none' : '1px solid #cbd5e1', backgroundColor: filter.checked ? '#2563eb' : 'white', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                          {filter.checked && <i className="fas fa-check" style={{ color: 'white', fontSize: '10px' }}></i>}
                        </div>
                        <span style={{ fontSize: '12px', fontWeight: filter.checked ? '700' : '500', color: filter.checked ? '#0f172a' : '#475569' }}>{filter.label}</span>
                      </div>
                      <span style={{ fontSize: '11px', color: '#64748b', backgroundColor: '#f8fafc', padding: '2px 8px', borderRadius: '12px', border: '1px solid #f1f5f9' }}>{filter.count}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '20px' }}>
                  <i className="fas fa-cog" style={{ color: '#2563eb', fontSize: '16px' }}></i>
                  <h3 style={{ margin: 0, fontSize: '14px', fontWeight: '700', color: '#0f172a' }}>Quick Actions</h3>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                  <div style={{ display: 'flex', gap: '12px', alignItems: 'center', cursor: 'pointer', color: '#475569' }}>
                    <i className="far fa-check-circle" style={{ width: '16px', textAlign: 'center', color: '#1e3a8a' }}></i>
                    <span style={{ fontSize: '12px', fontWeight: '500' }}>Mark All as Read</span>
                  </div>
                  <div style={{ display: 'flex', gap: '12px', alignItems: 'center', cursor: 'pointer', color: '#475569' }}>
                    <i className="fas fa-sliders-h" style={{ width: '16px', textAlign: 'center', color: '#1e3a8a' }}></i>
                    <span style={{ fontSize: '12px', fontWeight: '500' }}>Notification Settings</span>
                  </div>
                  <div style={{ display: 'flex', gap: '12px', alignItems: 'center', cursor: 'pointer', color: '#475569' }}>
                    <i className="far fa-envelope" style={{ width: '16px', textAlign: 'center', color: '#1e3a8a' }}></i>
                    <span style={{ fontSize: '12px', fontWeight: '500' }}>Email Preferences</span>
                  </div>
                  <div style={{ display: 'flex', gap: '12px', alignItems: 'center', cursor: 'pointer', color: '#475569' }}>
                    <i className="fas fa-mobile-alt" style={{ width: '16px', textAlign: 'center', color: '#1e3a8a' }}></i>
                    <span style={{ fontSize: '12px', fontWeight: '500' }}>Mobile App Notifications</span>
                  </div>
                </div>
              </div>

              {/* Stay Updated Anywhere */}
              <div style={{ backgroundColor: '#f0fdf4', padding: '20px', borderRadius: '16px', border: '1px solid #bbf7d0', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                 <i className="fas fa-mobile-alt" style={{ fontSize: '24px', color: '#16a34a', marginBottom: '10px' }}></i>
                 <h3 style={{ margin: '0 0 5px', fontSize: '14px', fontWeight: '700', color: '#166534' }}>Stay Updated Anywhere</h3>
                 <p style={{ margin: '0 0 15px', fontSize: '10px', color: '#166534', lineHeight: '1.4' }}>Enable mobile notifications to never miss an important update.</p>
                 <button style={{ width: '100%', padding: '10px', backgroundColor: '#1e3a8a', color: 'white', border: 'none', borderRadius: '8px', fontSize: '12px', fontWeight: '600', cursor: 'pointer' }}>Enable Notifications</button>
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

export default ParentNotificationsPage;
