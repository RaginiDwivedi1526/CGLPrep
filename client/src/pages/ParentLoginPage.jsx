import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { useGoogleLogin } from '@react-oauth/google';

const ParentLoginPage = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [toast, setToast] = useState('');

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(''), 3500);
  };

  const handleSocialLogin = (provider) => {
    showToast(`${provider} login is coming soon! Please use email to sign in.`);
  };

  const loginWithGoogle = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        const res = await fetch('http://localhost:5000/api/auth/parent/google', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ token: tokenResponse.access_token })
        });
        const data = await res.json();
        if (!res.ok) {
          setError(data.message || 'Google Login failed');
        } else {
          login(data.user, data.token);
          navigate('/parent-dashboard');
        }
      } catch (err) {
        setError('Google Login Server Error');
      }
    },
    onError: () => {
      setError('Google Login Failed');
    }
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const res = await fetch('http://localhost:5000/api/auth/parent/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      
      if (!res.ok) {
        setError(data.message || 'Login failed');
      } else {
        login(data.user, data.token);
        navigate('/parent-dashboard');
      }
    } catch (err) {
      setError('Server error, please try again.');
    }
  };

  return (
    <>
    <div style={{ display: 'flex', minHeight: '100vh', fontFamily: "'Inter', sans-serif", backgroundColor: '#f8fafc' }}>
      
      {/* Left Side */}
      <div style={{ flex: 1, backgroundColor: 'white', display: 'flex', flexDirection: 'column', position: 'relative' }}>
        <div style={{ padding: '40px 60px' }}>
          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '40px' }}>
            <div style={{ width: '40px', height: '40px', backgroundColor: '#1e3a8a', borderRadius: '8px', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white', fontSize: '20px' }}>
              <i className="fas fa-graduation-cap"></i>
            </div>
            <div>
              <h1 style={{ margin: 0, fontSize: '20px', fontWeight: '800', color: '#1e3a8a' }}>CGLPrep AI</h1>
              <p style={{ margin: 0, fontSize: '11px', color: '#64748b', fontWeight: '500' }}>Plan • Practice • Crack CGL</p>
            </div>
          </div>

          <h2 style={{ fontSize: '36px', fontWeight: '800', color: '#1e3a8a', margin: '0 0 10px', lineHeight: '1.2' }}>Parent Portal</h2>
          <h2 style={{ fontSize: '28px', fontWeight: '700', color: '#0f172a', margin: '0 0 20px', lineHeight: '1.2' }}>Because their dreams<br/>matter to you too.</h2>
          
          <p style={{ fontSize: '15px', color: '#475569', lineHeight: '1.6', maxWidth: '450px', marginBottom: '40px' }}>
            Stay connected with your child's SSC CGL preparation journey. Track progress, celebrate milestones, and support them towards a brighter future.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '25px', maxWidth: '400px' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '15px' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#eff6ff', color: '#2563eb', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '18px', flexShrink: 0 }}>
                <i className="fas fa-chart-bar"></i>
              </div>
              <div>
                <h4 style={{ margin: '0 0 5px', fontSize: '15px', fontWeight: '700', color: '#0f172a' }}>Track Progress</h4>
                <p style={{ margin: 0, fontSize: '13px', color: '#64748b', lineHeight: '1.4' }}>See study activity, test scores and improvement.</p>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '15px' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#dcfce7', color: '#16a34a', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '18px', flexShrink: 0 }}>
                <i className="fas fa-users"></i>
              </div>
              <div>
                <h4 style={{ margin: '0 0 5px', fontSize: '15px', fontWeight: '700', color: '#0f172a' }}>Stay Informed</h4>
                <p style={{ margin: 0, fontSize: '13px', color: '#64748b', lineHeight: '1.4' }}>Get updates and performance reports regularly.</p>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '15px' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#f3e8ff', color: '#9333ea', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '18px', flexShrink: 0 }}>
                <i className="fas fa-bullseye"></i>
              </div>
              <div>
                <h4 style={{ margin: '0 0 5px', fontSize: '15px', fontWeight: '700', color: '#0f172a' }}>Encourage Growth</h4>
                <p style={{ margin: 0, fontSize: '13px', color: '#64748b', lineHeight: '1.4' }}>Support them at every step towards their goal.</p>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '15px' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#fef3c7', color: '#d97706', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '18px', flexShrink: 0 }}>
                <i className="fas fa-shield-alt"></i>
              </div>
              <div>
                <h4 style={{ margin: '0 0 5px', fontSize: '15px', fontWeight: '700', color: '#0f172a' }}>Secure & Read-Only</h4>
                <p style={{ margin: 0, fontSize: '13px', color: '#64748b', lineHeight: '1.4' }}>View only access. No changes to student account.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative elements and image placeholder */}
        <div style={{ position: 'absolute', right: '40px', top: '40px', textAlign: 'center', transform: 'rotate(-5deg)' }}>
          <p style={{ fontFamily: "'Caveat', cursive", fontSize: '20px', color: '#1e3a8a', margin: '0 0 5px', lineHeight: '1.1' }}>Same<br/>Aspiration<br/>Bigger<br/>Dreams!</p>
          <div style={{ height: '3px', width: '40px', background: 'linear-gradient(90deg, #ff9933 33.3%, #ffffff 33.3%, #ffffff 66.6%, #138808 66.6%)', borderRadius: '2px', margin: '0 auto' }}></div>
        </div>

        <div style={{ position: 'absolute', left: '40px', bottom: '100px', textAlign: 'center', transform: 'rotate(-5deg)', zIndex: 10 }}>
          <p style={{ fontFamily: "'Caveat', cursive", fontSize: '22px', color: '#1e3a8a', margin: '0 0 5px', lineHeight: '1.1' }}>"A supportive<br/>family builds<br/>greater success."</p>
          <div style={{ height: '3px', width: '50px', background: 'linear-gradient(90deg, #ff9933 33.3%, #ffffff 33.3%, #ffffff 66.6%, #138808 66.6%)', borderRadius: '2px', margin: '0 auto' }}></div>
        </div>

        {/* Since we can't reliably load the local image, we'll use a placeholder representing the father/son image area */}
        <div style={{ position: 'absolute', bottom: 0, right: 0, width: '60%', height: '50%', background: 'linear-gradient(135deg, #bae6fd, #e0f2fe)', borderTopLeftRadius: '100px', display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden' }}>
            <i className="fas fa-users" style={{ fontSize: '80px', color: '#38bdf8', opacity: 0.5 }}></i>
            <div style={{ position: 'absolute', bottom: '20px', right: '40px', backgroundColor: 'white', padding: '15px 25px', borderRadius: '12px', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}>
                <p style={{ fontFamily: "'Caveat', cursive", fontSize: '18px', color: '#1e3a8a', margin: 0, lineHeight: '1.2', textAlign: 'center' }}>Proud<br/>Parents<br/>Brighter<br/>Futures <i className="fas fa-heart" style={{ color: '#2563eb' }}></i></p>
            </div>
        </div>
        
        {/* Left Side Footer */}
        <div style={{ padding: '20px 60px', marginTop: 'auto', borderTop: '1px solid #f1f5f9', fontSize: '12px', color: '#94a3b8' }}>
          © 2026 CGLPrep AI. All rights reserved.
        </div>
      </div>

      {/* Right Side */}
      <div style={{ flex: 1, padding: '40px', display: 'flex', flexDirection: 'column' }}>
        <div style={{ textAlign: 'right', marginBottom: '40px' }}>
          <Link to="/" style={{ color: '#475569', textDecoration: 'none', fontSize: '14px', fontWeight: '600' }}><i className="fas fa-arrow-left"></i> Back to Website</Link>
        </div>

        <div style={{ maxWidth: '500px', margin: '0 auto', width: '100%' }}>
          
          {/* Login Card */}
          <div style={{ backgroundColor: 'white', padding: '40px', borderRadius: '20px', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.05)', marginBottom: '30px' }}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px', marginBottom: '30px' }}>
              <div style={{ width: '32px', height: '32px', backgroundColor: '#1e3a8a', borderRadius: '6px', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white', fontSize: '16px' }}>
                <i className="fas fa-graduation-cap"></i>
              </div>
              <div>
                <h1 style={{ margin: 0, fontSize: '18px', fontWeight: '800', color: '#1e3a8a' }}>CGLPrep AI</h1>
                <p style={{ margin: 0, fontSize: '9px', color: '#64748b', fontWeight: '500' }}>Plan • Practice • Crack CGL</p>
              </div>
            </div>

            <div style={{ textAlign: 'center', marginBottom: '30px' }}>
              <h2 style={{ margin: '0 0 10px', fontSize: '24px', fontWeight: '800', color: '#0f172a' }}>Welcome to Parent Portal</h2>
              <p style={{ margin: 0, fontSize: '14px', color: '#64748b' }}>Login to access your child's preparation progress</p>
            </div>

            {error && <div style={{padding: '10px', backgroundColor: '#fee2e2', color: '#ef4444', borderRadius: '8px', marginBottom: '15px', fontSize: '13px', textAlign: 'center'}}>{error}</div>}

            <form onSubmit={handleLoginSubmit}>
              <div style={{ marginBottom: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', border: '1px solid #cbd5e1', borderRadius: '8px', padding: '12px 15px', backgroundColor: 'white' }}>
                  <i className="far fa-user" style={{ color: '#64748b', marginRight: '12px', fontSize: '16px' }}></i>
                  <input name="email" value={formData.email} onChange={handleChange} type="email" placeholder="Email Address (e.g. parent@test.com)" required style={{ border: 'none', outline: 'none', width: '100%', fontSize: '14px', color: '#0f172a', fontFamily: "'Inter', sans-serif" }} />
                </div>
              </div>

              <div style={{ marginBottom: '30px' }}>
                <div style={{ display: 'flex', alignItems: 'center', border: '1px solid #cbd5e1', borderRadius: '8px', padding: '12px 15px', backgroundColor: 'white' }}>
                  <i className="fas fa-lock" style={{ color: '#64748b', marginRight: '12px', fontSize: '16px' }}></i>
                  <input name="password" value={formData.password} onChange={handleChange} type={showPassword ? "text" : "password"} placeholder="Password (e.g. password)" required style={{ border: 'none', outline: 'none', width: '100%', fontSize: '14px', color: '#0f172a', fontFamily: "'Inter', sans-serif" }} />
                  <i className={showPassword ? "far fa-eye" : "far fa-eye-slash"} onClick={() => setShowPassword(!showPassword)} style={{ color: '#64748b', marginLeft: '10px', cursor: 'pointer' }}></i>
                  <a href="#" style={{ marginLeft: '15px', fontSize: '12px', color: '#2563eb', textDecoration: 'none', fontWeight: '600', whiteSpace: 'nowrap' }}>Forgot Password?</a>
                </div>
              </div>

              <button type="submit" style={{ width: '100%', padding: '14px', backgroundColor: '#2563eb', color: 'white', border: 'none', borderRadius: '8px', fontSize: '15px', fontWeight: '600', cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px', marginBottom: '25px', boxShadow: '0 4px 6px -1px rgba(37, 99, 235, 0.2)' }}>
                Login to Parent Portal <i className="fas fa-arrow-right"></i>
              </button>

              <div style={{ display: 'flex', alignItems: 'center', margin: '20px 0', color: '#94a3b8', fontSize: '12px', fontWeight: '600' }}>
                <div style={{ flex: 1, height: '1px', backgroundColor: '#e2e8f0' }}></div>
                <span style={{ padding: '0 15px' }}>OR</span>
                <div style={{ flex: 1, height: '1px', backgroundColor: '#e2e8f0' }}></div>
              </div>

              <button type="button" onClick={() => loginWithGoogle()} style={{ width: '100%', padding: '12px', backgroundColor: 'white', color: '#334155', border: '1px solid #cbd5e1', borderRadius: '8px', fontSize: '15px', fontWeight: '600', cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" />
                Continue with Google
              </button>
              <p style={{ textAlign: 'center', margin: '15px 0 0', fontSize: '12px', color: '#64748b' }}>Use the same email invited by your child</p>
            </form>
          </div>

          {/* Read Only Access Warning */}
          <div style={{ backgroundColor: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '12px', padding: '20px', display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '40px' }}>
             <div style={{ width: '40px', height: '40px', backgroundColor: '#22c55e', color: 'white', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '18px', flexShrink: 0 }}>
               <i className="fas fa-shield-alt"></i>
             </div>
             <div>
               <h4 style={{ margin: '0 0 5px', fontSize: '15px', fontWeight: '700', color: '#166534' }}>Read-Only Parent Access</h4>
               <p style={{ margin: 0, fontSize: '13px', color: '#15803d', lineHeight: '1.4' }}>You can view your child's progress, test performance and reports. You cannot make any changes to their account.</p>
             </div>
          </div>

          {/* Support Section */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '30px', borderBottom: '1px solid #e2e8f0' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <i className="fas fa-headset" style={{ fontSize: '24px', color: '#1e3a8a' }}></i>
              <div>
                <h4 style={{ margin: '0 0 3px', fontSize: '14px', fontWeight: '700', color: '#0f172a' }}>Need Help?</h4>
                <p style={{ margin: 0, fontSize: '12px', color: '#64748b' }}>Contact our support team</p>
              </div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <p style={{ margin: '0 0 5px', fontSize: '13px', color: '#475569', display: 'flex', alignItems: 'center', gap: '8px', justifyContent: 'flex-end' }}>
                <i className="fas fa-envelope"></i> support@cglprepai.com
              </p>
              <p style={{ margin: 0, fontSize: '13px', color: '#475569', display: 'flex', alignItems: 'center', gap: '8px', justifyContent: 'flex-end' }}>
                <i className="fas fa-phone-alt"></i> +91 1800 123 4567 <span style={{ fontSize: '11px' }}>(Mon - Sat, 9 AM - 6 PM)</span>
              </p>
            </div>
          </div>

          {/* Stats Section */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '30px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <i className="fas fa-users" style={{ color: '#3b82f6', fontSize: '20px' }}></i>
              <div>
                <h4 style={{ margin: 0, fontSize: '13px', fontWeight: '700', color: '#0f172a' }}>10,000+</h4>
                <p style={{ margin: 0, fontSize: '10px', color: '#64748b' }}>Students Trust Us</p>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <i className="fas fa-trophy" style={{ color: '#fbbf24', fontSize: '20px' }}></i>
              <div>
                <h4 style={{ margin: 0, fontSize: '13px', fontWeight: '700', color: '#0f172a' }}>95%</h4>
                <p style={{ margin: 0, fontSize: '10px', color: '#64748b' }}>Satisfaction Rate</p>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <i className="fas fa-star" style={{ color: '#2563eb', fontSize: '20px' }}></i>
              <div>
                <h4 style={{ margin: 0, fontSize: '13px', fontWeight: '700', color: '#0f172a' }}>4.8/5</h4>
                <p style={{ margin: 0, fontSize: '10px', color: '#64748b' }}>User Rating</p>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', borderLeft: '1px solid #e2e8f0', paddingLeft: '15px' }}>
              <div style={{ width: '20px', height: '12px', display: 'flex', flexDirection: 'column' }}>
                <div style={{ flex: 1, backgroundColor: '#ff9933' }}></div>
                <div style={{ flex: 1, backgroundColor: '#ffffff' }}></div>
                <div style={{ flex: 1, backgroundColor: '#138808' }}></div>
              </div>
              <p style={{ margin: 0, fontSize: '11px', fontWeight: '600', color: '#475569', lineHeight: '1.2' }}>Made for<br/>India's Aspirants <i className="fas fa-heart" style={{ color: '#ef4444' }}></i></p>
            </div>
          </div>

        </div>

        {/* Right Side Footer Links */}
        <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'flex-end', gap: '20px', fontSize: '12px' }}>
          <a href="#" style={{ color: '#64748b', textDecoration: 'none' }}>Privacy Policy</a>
          <span style={{ color: '#cbd5e1' }}>|</span>
          <a href="#" style={{ color: '#64748b', textDecoration: 'none' }}>Terms of Service</a>
          <span style={{ color: '#cbd5e1' }}>|</span>
          <a href="#" style={{ color: '#64748b', textDecoration: 'none' }}>Help</a>
        </div>
      </div>

    </div>

      {/* Toast Notification */}
      {toast && (
        <div style={{
          position: 'fixed', bottom: '30px', left: '50%', transform: 'translateX(-50%)',
          background: '#1e293b', color: '#fff', padding: '14px 28px', borderRadius: '12px',
          boxShadow: '0 8px 32px rgba(0,0,0,0.25)', zIndex: 9999, fontSize: '15px',
          display: 'flex', alignItems: 'center', gap: '10px', maxWidth: '90vw', textAlign: 'center'
        }}>
          <i className="fas fa-info-circle" style={{color: '#60a5fa', fontSize: '18px'}}></i>
          {toast}
        </div>
      )}
    </>
  );
};

export default ParentLoginPage;
