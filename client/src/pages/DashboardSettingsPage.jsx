import React, { useEffect, useContext, useState } from 'react';
import DashboardLayout from '../components/DashboardLayout';
import { AuthContext } from '../context/AuthContext';

const DashboardSettingsPage = () => {
  const { user } = useContext(AuthContext);
  const [activeTab, setActiveTab] = useState('Profile');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <DashboardLayout>
      <div className="settings-container">
        <div style={{ marginBottom: '30px' }}>
          <h2 style={{ color: '#0f172a', fontSize: '28px', fontWeight: '800', margin: '0 0 8px' }}>Settings</h2>
          <p style={{ color: '#475569', fontSize: '15px', margin: 0 }}>Manage your account settings and preferences.</p>
        </div>

        <div style={{ display: 'flex', gap: '30px' }}>
          {/* Settings Sidebar */}
          <div style={{ width: '220px', display: 'flex', flexDirection: 'column', gap: '5px', flexShrink: 0 }}>
            {['Profile', 'Account', 'Notifications', 'Subscription', 'Parent Access'].map(tab => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab)}
                style={{ padding: '12px 15px', textAlign: 'left', background: 'none', border: 'none', borderRadius: '8px', backgroundColor: activeTab === tab ? '#e0e7ff' : 'transparent', color: activeTab === tab ? '#4338ca' : '#475569', fontSize: '14px', fontWeight: activeTab === tab ? '700' : '500', cursor: 'pointer', transition: 'all 0.2s' }}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Settings Content */}
          <div style={{ flex: 1, backgroundColor: 'white', borderRadius: '12px', padding: '30px', border: '1px solid #e2e8f0' }}>
            
            {activeTab === 'Profile' && (
              <div>
                <h3 style={{ margin: '0 0 20px', fontSize: '18px', fontWeight: '700', color: '#0f172a', borderBottom: '1px solid #e2e8f0', paddingBottom: '15px' }}>Profile Information</h3>
                
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '30px' }}>
                  <div style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: '#475569', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '28px', fontWeight: '700' }}>
                    {user?.name ? user.name.charAt(0).toUpperCase() : 'U'}
                  </div>
                  <div>
                    <button style={{ backgroundColor: '#f1f5f9', color: '#0f172a', border: '1px solid #cbd5e1', padding: '8px 16px', borderRadius: '6px', fontSize: '13px', fontWeight: '600', cursor: 'pointer', marginRight: '10px' }}>Change Photo</button>
                    <button style={{ background: 'none', border: 'none', color: '#ef4444', fontSize: '13px', fontWeight: '600', cursor: 'pointer' }}>Remove</button>
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <label style={{ fontSize: '13px', fontWeight: '600', color: '#475569' }}>Full Name</label>
                    <input type="text" defaultValue={user?.name || 'User Name'} style={{ padding: '12px', border: '1px solid #cbd5e1', borderRadius: '6px', fontSize: '14px', outline: 'none' }} />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <label style={{ fontSize: '13px', fontWeight: '600', color: '#475569' }}>Email Address</label>
                    <input type="email" defaultValue={user?.email || 'user@example.com'} style={{ padding: '12px', border: '1px solid #cbd5e1', borderRadius: '6px', fontSize: '14px', outline: 'none' }} disabled />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <label style={{ fontSize: '13px', fontWeight: '600', color: '#475569' }}>Phone Number</label>
                    <input type="tel" defaultValue="+91 9876543210" style={{ padding: '12px', border: '1px solid #cbd5e1', borderRadius: '6px', fontSize: '14px', outline: 'none' }} />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <label style={{ fontSize: '13px', fontWeight: '600', color: '#475569' }}>Target Exam Year</label>
                    <select style={{ padding: '12px', border: '1px solid #cbd5e1', borderRadius: '6px', fontSize: '14px', outline: 'none' }}>
                      <option>SSC CGL 2026</option>
                      <option>SSC CGL 2025</option>
                    </select>
                  </div>
                </div>

                <div style={{ marginTop: '30px', display: 'flex', justifyContent: 'flex-end' }}>
                  <button style={{ backgroundColor: '#2563eb', color: 'white', border: 'none', padding: '10px 24px', borderRadius: '6px', fontSize: '14px', fontWeight: '600', cursor: 'pointer' }}>Save Changes</button>
                </div>
              </div>
            )}

            {activeTab !== 'Profile' && (
              <div style={{ padding: '40px 0', textAlign: 'center' }}>
                <i className="fas fa-tools" style={{ fontSize: '40px', color: '#94a3b8', marginBottom: '15px' }}></i>
                <h3 style={{ fontSize: '18px', color: '#334155', margin: '0 0 10px' }}>{activeTab} Settings</h3>
                <p style={{ color: '#64748b', fontSize: '14px' }}>This section is currently under development.</p>
              </div>
            )}

          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DashboardSettingsPage;
