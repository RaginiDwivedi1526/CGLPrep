import React, { useEffect, useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import '../auth.css';

const SignupPage = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  
  const [signupMethod, setSignupMethod] = useState('email'); // 'email' or 'mobile'
  const [role, setRole] = useState('student'); // 'student' or 'parent'
  const [showPassword, setShowPassword] = useState(false);
  const [step, setStep] = useState(1);
  const [error, setError] = useState('');
  
  // Form Data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    password: '',
    examGoal: 'cgl2026',
    appearYear: '2026',
    prepLevel: 'intermediate',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [step]);

  const handleStep1Submit = (e) => {
    e.preventDefault();
    setError('');
    // Basic validation
    if (!formData.name || !formData.password || (signupMethod === 'email' ? !formData.email : !formData.mobile)) {
      setError('Please fill all required fields');
      return;
    }
    // In a real app we might send an OTP here.
    // For this prototype, we simulate OTP sending and move to step 2.
    setStep(2);
  };

  const handleStep2Verify = () => {
    // Simulate OTP verification success
    if (role === 'parent') {
      handleStep3Submit(); // Skip step 3 for parents
    } else {
      setStep(3);
    }
  };

  const handleStep3Submit = async () => {
    setError('');
    try {
      let endpoint = 'http://localhost:5000/api/auth/signup';
      let payload = { ...formData };
      
      if (role === 'parent') {
        endpoint = 'http://localhost:5000/api/auth/parent/signup';
        payload = { 
          name: formData.name, 
          email: formData.email, 
          mobile: formData.mobile, 
          password: formData.password 
        };
      }

      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const data = await res.json();
      
      if (!res.ok) {
        setError(data.message || 'Signup failed');
        setStep(1); // Go back if error
      } else {
        login(data.user, data.token);
        if (role === 'parent') {
          navigate('/parent-dashboard');
        } else {
          navigate('/onboarding');
        }
      }
    } catch (err) {
      setError('Server error, please try again.');
      setStep(1);
    }
  };

  return (
    <div className="signup-page-container">
      {/* Top Split-Screen Section */}
      <div className="login-split-page">
        {/* Left Column: Blue Sidebar (Static) */}
        <div className="login-sidebar">
          <div className="sidebar-content">
            <div className="sidebar-header">
              <p className="sidebar-top-subtitle" style={{color: '#e2e8f0', letterSpacing: '0px', fontWeight: '500', fontSize: '14px', marginBottom: '15px'}}>India's Most Trusted<br/>CGL Preparation Platform</p>
              <h1 style={{fontSize: '46px', fontWeight: '800', lineHeight: '1.1', marginBottom: '10px'}}>Same<br/>Aspiration<br/>Bigger<br/>Dreams!</h1>
              <div className="tricolor-underline" style={{width: '60px', height: '4px', margin: '15px 0 30px'}}></div>
            </div>

            <div className="sidebar-features" style={{gap: '20px', marginBottom: '30px'}}>
              <div className="feature-item">
                <div className="feature-icon bg-green-circle" style={{width: '36px', height: '36px', fontSize: '16px', borderRadius: '8px'}}>
                  <i className="fas fa-book-open"></i>
                </div>
                <div className="feature-text">
                  <h4 style={{fontSize: '15px', fontWeight: '600'}}>AI-Powered Learning</h4>
                  <p style={{fontSize: '13px', color: '#cbd5e1'}}>Personalized for you</p>
                </div>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon bg-purple-circle" style={{width: '36px', height: '36px', fontSize: '16px', borderRadius: '8px'}}>
                  <i className="fas fa-bullseye"></i>
                </div>
                <div className="feature-text">
                  <h4 style={{fontSize: '15px', fontWeight: '600'}}>Exam-focused Content</h4>
                  <p style={{fontSize: '13px', color: '#cbd5e1'}}>Latest pattern & syllabus</p>
                </div>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon bg-orange-circle" style={{width: '36px', height: '36px', fontSize: '16px', borderRadius: '8px'}}>
                  <i className="fas fa-chart-line"></i>
                </div>
                <div className="feature-text">
                  <h4 style={{fontSize: '15px', fontWeight: '600'}}>Mock Tests & Analytics</h4>
                  <p style={{fontSize: '13px', color: '#cbd5e1'}}>Track. Improve. Succeed.</p>
                </div>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon bg-blue-circle" style={{width: '36px', height: '36px', fontSize: '16px', borderRadius: '8px'}}>
                  <i className="fas fa-file-alt"></i>
                </div>
                <div className="feature-text">
                  <h4 style={{fontSize: '15px', fontWeight: '600'}}>Current Affairs & PDFs</h4>
                  <p style={{fontSize: '13px', color: '#cbd5e1'}}>Updated regularly</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Signup Form */}
        <div className="login-form-area signup-scrollable">
          <div className="signup-form-container" style={{maxWidth: '520px', margin: '40px auto'}}>
            
            {/* Step Indicator */}
            <div className="step-indicator" style={{marginBottom: '35px'}}>
               <div className={`step ${step >= 1 ? 'active' : ''}`}>
                 {step > 1 ? (
                   <div className="step-circle" style={{backgroundColor: '#2563eb', borderColor: '#2563eb', color: 'white'}}><i className="fas fa-check"></i></div>
                 ) : (
                   <div className="step-circle" style={{backgroundColor: '#2563eb', borderColor: '#2563eb', color: 'white'}}>1</div>
                 )}
                 <span style={{fontWeight: step >= 1 ? '700' : '600', color: step >= 1 ? '#0f172a' : '#94a3b8'}}>Create Account</span>
               </div>
               <div className="step-line" style={step > 1 ? {backgroundColor: '#2563eb'} : {}}></div>
               
               <div className={`step ${step >= 2 ? 'active' : ''}`}>
                 {step > 2 ? (
                   <div className="step-circle" style={{backgroundColor: '#2563eb', borderColor: '#2563eb', color: 'white'}}><i className="fas fa-check"></i></div>
                 ) : (
                   <div className="step-circle" style={step === 2 ? {backgroundColor: '#2563eb', borderColor: '#2563eb', color: 'white'} : {}}>2</div>
                 )}
                 <span style={{fontWeight: step >= 2 ? '700' : '600', color: step >= 2 ? '#0f172a' : '#94a3b8'}}>Verify</span>
               </div>
               <div className="step-line" style={step > 2 ? {backgroundColor: '#2563eb'} : {}}></div>
               
               <div className={`step ${step >= 3 ? 'active' : ''}`}>
                 <div className="step-circle" style={step === 3 ? {backgroundColor: '#2563eb', borderColor: '#2563eb', color: 'white'} : {}}>3</div>
                 <span style={{fontWeight: step >= 3 ? '700' : '600', color: step >= 3 ? '#0f172a' : '#94a3b8'}}>Get Started</span>
               </div>
            </div>

            {error && <div style={{padding: '10px', backgroundColor: '#fee2e2', color: '#ef4444', borderRadius: '8px', marginBottom: '15px', fontSize: '13px', textAlign: 'center'}}>{error}</div>}

            {/* STEP 1: CREATE ACCOUNT */}
            {step === 1 && (
              <div className="fade-in">
                <div className="form-header left-aligned" style={{textAlign: 'center'}}>
                  <h2 style={{fontSize: '28px', fontWeight: '800'}}>Create Your Account</h2>
                  <p className="form-subtitle" style={{fontSize: '14px', maxWidth: '380px', margin: '10px auto 0', lineHeight: '1.5'}}>Join thousands of aspirants and start your CGL journey today with AI-powered preparation.</p>
                </div>

                <div className="login-tabs" style={{backgroundColor: '#fff', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '5px', marginTop: '20px'}}>
                  <button 
                    type="button"
                    className={`tab-btn ${role === 'student' ? 'active' : ''}`}
                    onClick={() => setRole('student')}
                    style={role === 'student' ? {backgroundColor: '#eff6ff', color: '#2563eb', boxShadow: 'none'} : {color: '#64748b'}}
                  >
                    <i className="fas fa-user-graduate"></i> Student
                  </button>
                  <button 
                    type="button"
                    className={`tab-btn ${role === 'parent' ? 'active' : ''}`}
                    onClick={() => setRole('parent')}
                    style={role === 'parent' ? {backgroundColor: '#eff6ff', color: '#2563eb', boxShadow: 'none'} : {color: '#64748b'}}
                  >
                    <i className="fas fa-user-friends"></i> Parent
                  </button>
                </div>

                <div className="login-tabs" style={{backgroundColor: '#fff', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '5px', marginTop: '30px'}}>
                  <button 
                    type="button"
                    className={`tab-btn ${signupMethod === 'email' ? 'active' : ''}`}
                    onClick={() => { setSignupMethod('email'); setFormData({...formData, mobile: ''}); }}
                    style={signupMethod === 'email' ? {backgroundColor: '#eff6ff', color: '#2563eb', boxShadow: 'none'} : {color: '#64748b'}}
                  >
                    <i className="far fa-envelope"></i> Sign Up with Email
                  </button>
                  <button 
                    type="button"
                    className={`tab-btn ${signupMethod === 'mobile' ? 'active' : ''}`}
                    onClick={() => { setSignupMethod('mobile'); setFormData({...formData, email: ''}); }}
                    style={signupMethod === 'mobile' ? {backgroundColor: '#eff6ff', color: '#2563eb', boxShadow: 'none'} : {color: '#64748b'}}
                  >
                    <i className="fas fa-mobile-alt"></i> Sign Up with Mobile
                  </button>
                </div>

                <form className="auth-form" onSubmit={handleStep1Submit}>
                  <div className="input-group" style={{gap: '8px', marginBottom: '15px'}}>
                    <div className="input-wrapper">
                      <i className="far fa-user icon-left" style={{left: '18px', fontSize: '18px', color: '#64748b'}}></i>
                      <div style={{position: 'relative', width: '100%'}}>
                        <label style={{position: 'absolute', top: '8px', left: '48px', fontSize: '11px', color: '#64748b', fontWeight: '600'}}>Full Name</label>
                        <input name="name" value={formData.name} onChange={handleChange} type="text" placeholder="Enter your full name" style={{padding: '24px 15px 8px 48px', border: '1px solid #cbd5e1', borderRadius: '10px', fontSize: '14px', width: '100%'}} required />
                      </div>
                    </div>
                  </div>

                  {signupMethod === 'email' ? (
                    <div className="input-group" style={{gap: '8px', marginBottom: '15px'}}>
                      <div className="input-wrapper">
                        <i className="far fa-envelope icon-left" style={{left: '18px', fontSize: '18px', color: '#64748b'}}></i>
                        <div style={{position: 'relative', width: '100%'}}>
                          <label style={{position: 'absolute', top: '8px', left: '48px', fontSize: '11px', color: '#64748b', fontWeight: '600'}}>Email Address</label>
                          <input name="email" value={formData.email} onChange={handleChange} type="email" placeholder="Enter your email address" style={{padding: '24px 15px 8px 48px', border: '1px solid #cbd5e1', borderRadius: '10px', fontSize: '14px', width: '100%'}} required />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="input-group" style={{gap: '8px', marginBottom: '15px'}}>
                      <div className="input-wrapper">
                        <i className="fas fa-mobile-alt icon-left" style={{left: '18px', fontSize: '18px', color: '#64748b'}}></i>
                        <div style={{position: 'relative', width: '100%'}}>
                          <label style={{position: 'absolute', top: '8px', left: '48px', fontSize: '11px', color: '#64748b', fontWeight: '600'}}>Mobile Number</label>
                          <input name="mobile" value={formData.mobile} onChange={handleChange} type="tel" placeholder="Enter your mobile number" style={{padding: '24px 15px 8px 48px', border: '1px solid #cbd5e1', borderRadius: '10px', fontSize: '14px', width: '100%'}} required />
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="input-group" style={{gap: '8px', marginBottom: '5px'}}>
                    <div className="input-wrapper">
                      <i className="fas fa-lock icon-left" style={{left: '18px', fontSize: '18px', color: '#64748b'}}></i>
                      <div style={{position: 'relative', width: '100%'}}>
                        <label style={{position: 'absolute', top: '8px', left: '48px', fontSize: '11px', color: '#64748b', fontWeight: '600'}}>Password</label>
                        <input 
                          name="password"
                          value={formData.password}
                          onChange={handleChange}
                          type={showPassword ? "text" : "password"} 
                          placeholder="Create a strong password" 
                          style={{padding: '24px 45px 8px 48px', border: '1px solid #cbd5e1', borderRadius: '10px', fontSize: '14px', width: '100%'}} 
                          required 
                        />
                      </div>
                      <button type="button" className="toggle-password" style={{right: '18px'}} onClick={() => setShowPassword(!showPassword)}>
                        <i className={showPassword ? "far fa-eye" : "far fa-eye-slash"}></i>
                      </button>
                    </div>
                  </div>
                  
                  <div className="terms-checkbox mt-2">
                    <label className="checkbox-container" style={{fontSize: '13px', color: '#334155'}}>
                      <input type="checkbox" required />
                      <span className="checkmark" style={{borderRadius: '4px'}}></span>
                      I agree to the <a href="#">Terms & Conditions</a> and <a href="#">Privacy Policy</a>
                    </label>
                  </div>

                  <button type="submit" className="btn-login-submit mt-3" style={{width: '100%', padding: '15px', borderRadius: '8px'}}>
                    Create Account &rarr;
                  </button>
                </form>

                <div className="login-redirect" style={{marginTop: '30px', textAlign: 'center'}}>
                  <span style={{color: '#64748b', fontSize: '14px'}}>Already have an account?</span> <Link to="/login" style={{color: '#2563eb', fontWeight: '700'}}>Login Here</Link>
                </div>
              </div>
            )}

            {/* STEP 2: VERIFY */}
            {step === 2 && (
              <div className="otp-verification-container fade-in">
                <div className="form-header" style={{textAlign: 'center', marginTop: '20px'}}>
                  <div style={{width: '80px', height: '80px', borderRadius: '50%', backgroundColor: '#eff6ff', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0 auto 24px'}}>
                    <i className="fas fa-mobile-alt" style={{fontSize: '36px', color: '#2563eb'}}></i>
                  </div>
                  <h2 style={{fontSize: '28px', fontWeight: '800', color: '#0f172a'}}>Verify Your Identity</h2>
                  <p className="form-subtitle" style={{marginTop: '15px', fontSize: '15px'}}>We've sent a 6-digit OTP to</p>
                  <div style={{fontWeight: '800', fontSize: '20px', color: '#2563eb', marginTop: '5px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    {signupMethod === 'email' ? formData.email : formData.mobile} 
                    <span onClick={() => setStep(1)} style={{fontSize: '14px', color: '#64748b', fontWeight: '600', cursor: 'pointer', marginLeft: '10px', display: 'inline-flex', alignItems: 'center'}}>
                      <i className="fas fa-pen" style={{fontSize: '12px', marginRight: '4px'}}></i> Edit
                    </span>
                  </div>
                </div>
                
                <div style={{display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '35px', marginBottom: '25px'}}>
                   {['1', '2', '3', '4', '5', '6'].map((val, idx) => (
                      <input 
                        key={idx} 
                        type="text" 
                        defaultValue={val} 
                        style={{width: '48px', height: '60px', border: '1px solid #cbd5e1', borderRadius: '8px', textAlign: 'center', fontSize: '24px', fontWeight: '700', color: '#0f172a', outline: 'none', backgroundColor: 'white'}} 
                      />
                   ))}
                </div>

                <button onClick={handleStep2Verify} className="btn-login-submit" style={{width: '100%', padding: '16px', fontSize: '16px', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#0052cc', borderRadius: '8px', border: 'none'}}>
                   Verify & Continue <i className="fas fa-arrow-right" style={{marginLeft: '10px'}}></i>
                </button>
              </div>
            )}

            {/* STEP 3: GET STARTED */}
            {step === 3 && (
              <div className="personalization-container fade-in">
                <div className="form-header" style={{textAlign: 'center', marginTop: '10px', marginBottom: '30px'}}>
                  <h2 style={{fontSize: '28px', fontWeight: '800', color: '#0f172a'}}>Almost There!</h2>
                  <p className="form-subtitle" style={{marginTop: '10px', fontSize: '14px', maxWidth: '350px', margin: '10px auto 0'}}>Tell us a bit about yourself to personalize your learning experience.</p>
                </div>
                
                <div className="onboarding-step" style={{marginBottom: '25px'}}>
                  <h3 style={{fontSize: '15px', fontWeight: '700', display: 'flex', alignItems: 'center', color: '#0f172a', marginBottom: '5px'}}>
                    Select Your Exam Goal
                  </h3>
                  <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
                    <div onClick={() => setFormData({...formData, examGoal: 'cgl2026'})} style={{display: 'flex', alignItems: 'center', padding: '12px 15px', border: formData.examGoal === 'cgl2026' ? '1px solid #2563eb' : '1px solid #e2e8f0', borderRadius: '8px', cursor: 'pointer', backgroundColor: formData.examGoal === 'cgl2026' ? '#f0f9ff' : 'white'}}>
                      <div style={{width: '18px', height: '18px', borderRadius: '50%', border: formData.examGoal === 'cgl2026' ? '5px solid #2563eb' : '1px solid #cbd5e1', marginRight: '15px'}}></div>
                      <div><h4 style={{margin: '0', fontSize: '14px', fontWeight: '700', color: '#0f172a'}}>SSC CGL 2026</h4></div>
                    </div>
                    <div onClick={() => setFormData({...formData, examGoal: 'chsl'})} style={{display: 'flex', alignItems: 'center', padding: '12px 15px', border: formData.examGoal === 'chsl' ? '1px solid #2563eb' : '1px solid #e2e8f0', borderRadius: '8px', cursor: 'pointer', backgroundColor: formData.examGoal === 'chsl' ? '#f0f9ff' : 'white'}}>
                      <div style={{width: '18px', height: '18px', borderRadius: '50%', border: formData.examGoal === 'chsl' ? '5px solid #2563eb' : '1px solid #cbd5e1', marginRight: '15px'}}></div>
                      <div><h4 style={{margin: '0', fontSize: '14px', fontWeight: '700', color: '#0f172a'}}>SSC CHSL</h4></div>
                    </div>
                  </div>
                </div>

                <div className="onboarding-step" style={{marginBottom: '25px'}}>
                  <h3 style={{fontSize: '15px', fontWeight: '700', display: 'flex', alignItems: 'center', color: '#0f172a', marginBottom: '15px'}}>
                    When do you plan to appear?
                  </h3>
                  <div style={{display: 'flex', gap: '15px'}}>
                    <div onClick={() => setFormData({...formData, appearYear: '2026'})} style={{display: 'flex', alignItems: 'center', padding: '10px 15px', border: formData.appearYear === '2026' ? '1px solid #2563eb' : '1px solid #e2e8f0', borderRadius: '8px', cursor: 'pointer', backgroundColor: formData.appearYear === '2026' ? '#f0f9ff' : 'white'}}>
                      <div style={{width: '16px', height: '16px', borderRadius: '50%', border: formData.appearYear === '2026' ? '4px solid #2563eb' : '1px solid #cbd5e1', marginRight: '10px'}}></div>
                      <span style={{fontSize: '13px', fontWeight: '600', color: '#0f172a'}}>In 2026</span>
                    </div>
                    <div onClick={() => setFormData({...formData, appearYear: '2027'})} style={{display: 'flex', alignItems: 'center', padding: '10px 15px', border: formData.appearYear === '2027' ? '1px solid #2563eb' : '1px solid #e2e8f0', borderRadius: '8px', cursor: 'pointer', backgroundColor: formData.appearYear === '2027' ? '#f0f9ff' : 'white'}}>
                      <div style={{width: '16px', height: '16px', borderRadius: '50%', border: formData.appearYear === '2027' ? '4px solid #2563eb' : '1px solid #cbd5e1', marginRight: '10px'}}></div>
                      <span style={{fontSize: '13px', fontWeight: '600', color: '#0f172a'}}>In 2027</span>
                    </div>
                  </div>
                </div>

                <div className="onboarding-step" style={{marginBottom: '25px'}}>
                  <h3 style={{fontSize: '15px', fontWeight: '700', display: 'flex', alignItems: 'center', color: '#0f172a', marginBottom: '15px'}}>
                    Tell us your current preparation level
                  </h3>
                  <div style={{display: 'flex', gap: '15px'}}>
                    <div onClick={() => setFormData({...formData, prepLevel: 'beginner'})} style={{flex: 1, padding: '15px 10px', border: formData.prepLevel === 'beginner' ? '2px solid #2563eb' : '1px solid #e2e8f0', borderRadius: '8px', cursor: 'pointer', backgroundColor: formData.prepLevel === 'beginner' ? '#f0f9ff' : 'white', textAlign: 'center'}}>
                      <h4 style={{margin: '0 0 5px 0', fontSize: '13px', fontWeight: '700', color: '#0f172a'}}>Beginner</h4>
                    </div>
                    <div onClick={() => setFormData({...formData, prepLevel: 'intermediate'})} style={{flex: 1, padding: '15px 10px', border: formData.prepLevel === 'intermediate' ? '2px solid #2563eb' : '1px solid #e2e8f0', borderRadius: '8px', cursor: 'pointer', backgroundColor: formData.prepLevel === 'intermediate' ? '#f0f9ff' : 'white', textAlign: 'center'}}>
                      <h4 style={{margin: '0 0 5px 0', fontSize: '13px', fontWeight: '700', color: '#0f172a'}}>Intermediate</h4>
                    </div>
                    <div onClick={() => setFormData({...formData, prepLevel: 'advanced'})} style={{flex: 1, padding: '15px 10px', border: formData.prepLevel === 'advanced' ? '2px solid #2563eb' : '1px solid #e2e8f0', borderRadius: '8px', cursor: 'pointer', backgroundColor: formData.prepLevel === 'advanced' ? '#f0f9ff' : 'white', textAlign: 'center'}}>
                      <h4 style={{margin: '0 0 5px 0', fontSize: '13px', fontWeight: '700', color: '#0f172a'}}>Advanced</h4>
                    </div>
                  </div>
                </div>

                <button onClick={handleStep3Submit} className="btn-login-submit" style={{width: '100%', padding: '16px', fontSize: '16px', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#0052cc', borderRadius: '8px', border: 'none', cursor: 'pointer'}}>
                   Submit & Start Your Journey <i className="fas fa-arrow-right" style={{marginLeft: '10px'}}></i>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
