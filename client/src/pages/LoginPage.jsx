import React, { useEffect, useState, useContext } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import '../auth.css';

const LoginPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useContext(AuthContext);

  const [loginMethod, setLoginMethod] = useState('email'); // 'email' or 'mobile'
  const [role, setRole] = useState('student'); // 'student', 'parent', 'admin'
  const [isLogin, setIsLogin] = useState(location.pathname !== '/signup');
  const [showPassword, setShowPassword] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    emailOrMobile: '',
    password: '',
    examGoal: 'cgl2026',
    appearYear: '2026',
    prepLevel: 'intermediate',
  });
  const [error, setError] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      let endpoint = isLogin ? 'http://localhost:5000/api/auth/login' : 'http://localhost:5000/api/auth/signup';
      let payload = { ...formData };
      
      if (role === 'parent') {
        endpoint = isLogin ? 'http://localhost:5000/api/auth/parent/login' : 'http://localhost:5000/api/auth/parent/signup';
        if (loginMethod === 'email') {
          payload = { ...formData, email: formData.emailOrMobile, mobile: '' };
        } else {
          payload = { ...formData, mobile: formData.emailOrMobile, email: '' };
        }
      } else if (role === 'admin') {
        endpoint = 'http://localhost:5000/api/auth/admin/login'; // Admin only has login
      } else if (!isLogin && role === 'student') {
         // for student signup, backend expects email and mobile to be separated if we have them, 
         // but our UI uses emailOrMobile. Let's just map it depending on loginMethod
         if (loginMethod === 'email') {
           payload = { ...formData, email: formData.emailOrMobile, mobile: '' };
         } else {
           payload = { ...formData, mobile: formData.emailOrMobile, email: '' };
         }
      }

      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const data = await res.json();
      
      if (!res.ok) {
        setError(data.message || (isLogin ? 'Login failed' : 'Signup failed'));
      } else {
        login(data.user, data.token);
        if (role === 'student') {
          navigate('/dashboard');
        } else if (role === 'parent') {
          navigate('/parent-dashboard');
        } else {
          navigate('/admin-dashboard'); // Replace with actual admin route if exists
        }
      }
    } catch (err) {
      setError('Server error, please try again.');
    }
  };

  return (
    <div className="login-split-page">
      {/* Left Column: Blue Sidebar */}
      <div className="login-sidebar">
        <div className="sidebar-content">
          <div className="sidebar-header">
            <h1>Welcome Back to<br/><span className="highlight-text">CGLPrep <span className="highlight-ai">AI</span></span></h1>
            <p className="sidebar-subtitle">Same Aspiration. Bigger Dreams.</p>
            <div className="tricolor-underline"></div>
          </div>

          <div className="sidebar-features">
            <div className="feature-item">
              <div className="feature-icon bg-blue-circle">
                <i className="fas fa-bullseye"></i>
              </div>
              <div className="feature-text">
                <h4>AI-Powered Preparation</h4>
                <p>Study smarter with personalized plans</p>
              </div>
            </div>
            
            <div className="feature-item">
              <div className="feature-icon bg-green-circle">
                <i className="fas fa-file-alt"></i>
              </div>
              <div className="feature-text">
                <h4>Latest & Accurate Content</h4>
                <p>Updated for SSC CGL 2026</p>
              </div>
            </div>
            
            <div className="feature-item">
              <div className="feature-icon bg-purple-circle">
                <i className="fas fa-chart-bar"></i>
              </div>
              <div className="feature-text">
                <h4>Mock Tests & Analytics</h4>
                <p>Track progress and improve faster</p>
              </div>
            </div>
            
            <div className="feature-item">
              <div className="feature-icon bg-orange-circle">
                <i className="fas fa-lightbulb"></i>
              </div>
              <div className="feature-text">
                <h4>Current Affairs & Post Predictor</h4>
                <p>Stay ahead of the competition</p>
              </div>
            </div>
          </div>

          <div className="sidebar-quote-box">
            <i className="fas fa-quote-left quote-icon-mark"></i>
            <blockquote>"Discipline today<br/>leads to a Government job tomorrow."</blockquote>
            <p className="quote-author">— CGLPrep AI</p>
          </div>
        </div>

        {/* Bottom Student Image Section */}
        <div className="sidebar-bottom-image">
           <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800" alt="Student" className="student-img" />
           <div className="student-quote-overlay">
              <div className="handwriting-text">Government<br/>Job<br/>Is Not a Dream<br/>It's a Plan</div>
              <div className="tricolor-underline small"></div>
           </div>
           
           <div className="stats-bar">
             <div className="stat-item">
               <i className="fas fa-users text-blue"></i>
               <div>
                 <strong>10,000+</strong>
                 <span>Aspirants Trust Us</span>
               </div>
             </div>
             <div className="stat-item">
               <i className="fas fa-trophy text-yellow"></i>
               <div>
                 <strong>95%</strong>
                 <span>Satisfaction Rate</span>
               </div>
             </div>
             <div className="stat-item">
               <i className="fas fa-star text-blue"></i>
               <div>
                 <strong>4.8/5</strong>
                 <span>User Rating</span>
               </div>
             </div>
           </div>
        </div>
      </div>

      {/* Right Column: Login Form */}
      <div className="login-form-area">
        <div className="login-form-container">
          <div className="form-header">
            <Link to="/" className="form-logo">
              <span className="logo-icon"><i className="fas fa-graduation-cap"></i></span>
              <span className="logo-text"><strong>CGLPrep</strong> AI</span>
            </Link>
            <p className="logo-tagline">Plan \u2022 Practice \u2022 Crack CGL</p>
            
            <h2>{isLogin ? 'Login to Your Account' : 'Create Your Account'}</h2>
            <p className="form-subtitle">{isLogin ? 'Continue your preparation journey' : 'Join thousands of aspirants today'}</p>
          </div>

          {error && <div style={{padding: '10px', backgroundColor: '#fee2e2', color: '#ef4444', borderRadius: '8px', marginBottom: '15px', fontSize: '13px', textAlign: 'center'}}>{error}</div>}

          {/* Role Selection */}
          <div className="login-tabs" style={{ marginBottom: '10px' }}>
            <button 
              type="button"
              className={`tab-btn ${role === 'student' ? 'active' : ''}`}
              onClick={() => setRole('student')}
            >
              <i className="fas fa-user-graduate"></i> Student
            </button>
            <button 
              type="button"
              className={`tab-btn ${role === 'parent' ? 'active' : ''}`}
              onClick={() => setRole('parent')}
            >
              <i className="fas fa-user-friends"></i> Parent
            </button>
            <button 
              type="button"
              className={`tab-btn ${role === 'admin' ? 'active' : ''}`}
              onClick={() => { setRole('admin'); setIsLogin(true); }}
            >
              <i className="fas fa-user-shield"></i> Admin
            </button>
          </div>

          <div className="login-tabs">
            <button 
              type="button"
              className={`tab-btn ${loginMethod === 'email' ? 'active' : ''}`}
              onClick={() => { setLoginMethod('email'); setFormData({...formData, emailOrMobile: ''}); }}
            >
              <i className="far fa-envelope"></i> Login with Email
            </button>
            <button 
              type="button"
              className={`tab-btn ${loginMethod === 'mobile' ? 'active' : ''}`}
              onClick={() => { setLoginMethod('mobile'); setFormData({...formData, emailOrMobile: ''}); }}
            >
              <i className="fas fa-mobile-alt"></i> Login with Mobile
            </button>
          </div>

          <form className="auth-form" onSubmit={handleSubmit}>
            {!isLogin && (
              <div className="input-group">
                <label>Full Name</label>
                <div className="input-wrapper">
                  <i className="far fa-user icon-left"></i>
                  <input name="name" value={formData.name} onChange={handleChange} type="text" placeholder="Enter your full name" required={!isLogin} />
                </div>
              </div>
            )}

            {loginMethod === 'email' ? (
              <div className="input-group">
                <label>Email Address</label>
                <div className="input-wrapper">
                  <i className="far fa-envelope icon-left"></i>
                  <input name="emailOrMobile" value={formData.emailOrMobile} onChange={handleChange} type="email" placeholder="Enter your email address" required />
                </div>
              </div>
            ) : (
              <div className="input-group">
                <label>Mobile Number</label>
                <div className="input-wrapper">
                  <i className="fas fa-mobile-alt icon-left"></i>
                  <input name="emailOrMobile" value={formData.emailOrMobile} onChange={handleChange} type="tel" placeholder="Enter your mobile number" required />
                </div>
              </div>
            )}

            <div className="input-group">
              <label>Password</label>
              <div className="input-wrapper">
                <i className="fas fa-lock icon-left"></i>
                <input 
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  type={showPassword ? "text" : "password"} 
                  placeholder={isLogin ? "Enter your password" : "Create a password"} 
                  required 
                />
                <button type="button" className="toggle-password" onClick={() => setShowPassword(!showPassword)}>
                  <i className={showPassword ? "far fa-eye" : "far fa-eye-slash"}></i>
                </button>
              </div>
            </div>

            {isLogin ? (
              <>
                <div className="forgot-pwd-row">
                  <a href="#" className="forgot-pwd-link">Forgot Password?</a>
                </div>
                <div className="keep-signed-in">
                  <label className="checkbox-container">
                    <input type="checkbox" defaultChecked />
                    <span className="checkmark"></span>
                    Keep me signed in
                  </label>
                </div>
              </>
            ) : (
              <div className="keep-signed-in mt-2" style={{marginBottom: '15px'}}>
                <label className="checkbox-container" style={{fontSize: '13px'}}>
                  <input type="checkbox" required />
                  <span className="checkmark"></span>
                  I agree to the Terms & Conditions
                </label>
              </div>
            )}

            <button type="submit" className="btn-login-submit">{isLogin ? 'Login as ' : 'Sign Up as '}{role.charAt(0).toUpperCase() + role.slice(1)} &rarr;</button>

            {role !== 'admin' && (
              <div className="login-redirect" style={{marginTop: '20px', textAlign: 'center'}}>
                <span style={{color: '#64748b', fontSize: '14px'}}>
                  {isLogin ? "Don't have an account?" : "Already have an account?"}
                </span>{' '}
                <button 
                  type="button" 
                  onClick={() => setIsLogin(!isLogin)} 
                  style={{background: 'none', border: 'none', color: '#2563eb', fontWeight: '700', cursor: 'pointer', padding: 0, font: 'inherit'}}
                >
                  {isLogin ? 'Sign Up Here' : 'Login Here'}
                </button>
              </div>
            )}
          </form>

          <div className="auth-divider">
            <span>OR</span>
          </div>

          <div className="social-login-buttons">
            <button className="btn-social">
              <img src="https://img.icons8.com/color/48/000000/google-logo.png" alt="Google" />
              Continue with Google
            </button>
            <button className="btn-social">
              <i className="fab fa-apple text-black"></i>
              Continue with Apple
            </button>
            <button className="btn-social">
              <i className="fab fa-facebook text-blue"></i>
              Continue with Facebook
            </button>
          </div>

          <div className="trust-badge-box">
            <div className="trust-shield">
              <i className="fas fa-shield-alt"></i>
            </div>
            <div className="trust-text">
              <h4>Your Data is Safe with Us</h4>
              <p>We use industry-standard encryption to keep your information secure.</p>
            </div>
          </div>

          <div className="form-features-grid">
            <div className="ff-item">
              <div className="ff-icon text-green"><i className="fas fa-shield-alt"></i></div>
              <span>Secure<br/>Login</span>
            </div>
            <div className="ff-item">
              <div className="ff-icon text-blue"><i className="fas fa-cloud"></i></div>
              <span>Access<br/>Anywhere</span>
            </div>
            <div className="ff-item">
              <div className="ff-icon text-blue"><i className="fas fa-laptop-mobile"></i></div>
              <span>Sync Across<br/>Devices</span>
            </div>
            <div className="ff-item">
              <div className="ff-icon text-purple"><i className="fas fa-headset"></i></div>
              <span>24/7<br/>Support</span>
            </div>
          </div>
          
          <div className="form-footer-quote">
            <blockquote>"A better you, for a brighter India."</blockquote>
            <div className="tricolor-underline mini"></div>
            <p>— CGLPrep AI</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default LoginPage;
