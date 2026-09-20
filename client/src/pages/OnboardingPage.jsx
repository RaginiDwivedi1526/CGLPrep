import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const OnboardingPage = () => {
  const { user } = useContext(AuthContext);
  const [examGoal, setExamGoal] = useState('cgl2026');
  const [prepLevel, setPrepLevel] = useState('beginner');
  const [appearYear, setAppearYear] = useState('2026');
  const [studyTime, setStudyTime] = useState('1-2');
  const [subjects, setSubjects] = useState({
    quant: true,
    ga: true,
    reasoning: true,
    english: false,
    computer: false,
    staticGk: false,
    currentAffairs: false,
    all: false
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubjectChange = (name) => {
    setSubjects(prev => ({ ...prev, [name]: !prev[name] }));
  };

  return (
    <div style={{ display: 'flex', minHeight: 'calc(100vh - 70px)', fontFamily: "'Inter', sans-serif", backgroundColor: '#ffffff' }}>
      {/* Left Sidebar */}
      <div style={{ width: '280px', backgroundColor: '#0f172a', color: 'white', display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden' }}>
        <div style={{ padding: '40px 30px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '25px' }}>
            <i className="fas fa-graduation-cap" style={{ fontSize: '32px', color: '#10b981' }}></i>
            <div>
              <p style={{ margin: 0, fontSize: '13px', color: '#94a3b8' }}>Welcome to</p>
              <h2 style={{ margin: 0, fontSize: '20px', fontWeight: '800' }}>CGLPrep AI</h2>
            </div>
          </div>
          
          <p style={{ fontSize: '14px', lineHeight: '1.5', color: '#cbd5e1', marginBottom: '40px' }}>
            Let's set up your personalized learning journey.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
            {/* Step 1 */}
            <div style={{ display: 'flex', gap: '15px', position: 'relative' }}>
              <div style={{ width: '2px', height: '100%', backgroundColor: '#1e293b', position: 'absolute', left: '16px', top: '35px' }}></div>
              <div style={{ width: '34px', height: '34px', borderRadius: '50%', backgroundColor: '#2563eb', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', fontSize: '14px', zIndex: 2 }}>1</div>
              <div>
                <h4 style={{ margin: '0 0 4px', fontSize: '15px', fontWeight: '600' }}>Personalize</h4>
                <p style={{ margin: 0, fontSize: '12px', color: '#94a3b8' }}>Tell us about your goals</p>
              </div>
            </div>
            
            {/* Step 2 */}
            <div style={{ display: 'flex', gap: '15px', position: 'relative' }}>
              <div style={{ width: '2px', height: '100%', backgroundColor: '#1e293b', position: 'absolute', left: '16px', top: '35px' }}></div>
              <div style={{ width: '34px', height: '34px', borderRadius: '50%', border: '2px solid #334155', backgroundColor: '#0f172a', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', fontSize: '14px', color: '#cbd5e1', zIndex: 2 }}>2</div>
              <div>
                <h4 style={{ margin: '0 0 4px', fontSize: '15px', fontWeight: '500', color: '#cbd5e1' }}>Explore</h4>
                <p style={{ margin: 0, fontSize: '12px', color: '#64748b' }}>We'll customize your plan</p>
              </div>
            </div>

            {/* Step 3 */}
            <div style={{ display: 'flex', gap: '15px' }}>
              <div style={{ width: '34px', height: '34px', borderRadius: '50%', border: '2px solid #334155', backgroundColor: '#0f172a', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', fontSize: '14px', color: '#cbd5e1', zIndex: 2 }}>3</div>
              <div>
                <h4 style={{ margin: '0 0 4px', fontSize: '15px', fontWeight: '500', color: '#cbd5e1' }}>Start Learning</h4>
                <p style={{ margin: 0, fontSize: '12px', color: '#64748b' }}>Access all features</p>
              </div>
            </div>
          </div>
          
          <div style={{ marginTop: '50px', padding: '20px', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', backgroundColor: 'rgba(255,255,255,0.03)' }}>
            <h3 style={{ fontFamily: "'Caveat', cursive", fontSize: '24px', margin: 0, lineHeight: '1.3', color: '#f8fafc' }}>
              "A small step today, a big result tomorrow."
            </h3>
            <div style={{ height: '3px', width: '40px', background: 'linear-gradient(90deg, #ff9933 33.3%, #ffffff 33.3%, #ffffff 66.6%, #138808 66.6%)', borderRadius: '2px', marginTop: '15px' }}></div>
          </div>
        </div>

        <div style={{ marginTop: 'auto', position: 'relative', height: '220px' }}>
           <img src="https://images.unsplash.com/photo-1596440539121-724d262b9213?auto=format&fit=crop&q=80&w=800" alt="Parliament" style={{ width: '100%', height: '100%', objectFit: 'cover', maskImage: 'linear-gradient(to bottom, transparent 0%, black 30%)', WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 30%)' }} />
           <div style={{ position: 'absolute', bottom: '30px', left: '30px', right: '20px' }}>
              <p style={{ margin: 0, fontSize: '13px', fontWeight: '600', color: 'white' }}>Disciplined Aspirants</p>
              <p style={{ margin: 0, fontSize: '14px', fontWeight: '700', color: '#93c5fd' }}>Build a Brighter India</p>
           </div>
        </div>
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, padding: '40px 60px', overflowY: 'auto' }}>
        
        {/* Header Section */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '40px' }}>
          <div>
            <p style={{ color: '#64748b', fontSize: '14px', fontWeight: '600', marginBottom: '8px' }}>Step 1 of 3</p>
            <h1 style={{ color: '#0f172a', fontSize: '32px', fontWeight: '800', margin: '0 0 10px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              Hi {user?.name || 'Student'}! <span style={{ fontSize: '28px' }}>👋</span>
            </h1>
            <h2 style={{ color: '#1e3a8a', fontSize: '28px', fontWeight: '800', margin: '0 0 15px' }}>
              Let's Personalize Your CGL Journey
            </h2>
            <p style={{ color: '#64748b', fontSize: '16px', margin: 0 }}>
              Help us understand your goals, so we can create the best study experience for you.
            </p>
          </div>
          
          <div style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
            <div style={{ transform: 'rotate(-5deg)', textAlign: 'center' }}>
               <h3 style={{ fontFamily: "'Caveat', cursive", fontSize: '26px', color: '#1e3a8a', margin: 0, lineHeight: '1.1' }}>
                 Same<br/>Aspiration<br/>Bigger<br/>Dreams!
               </h3>
               <div style={{ height: '3px', width: '40px', background: 'linear-gradient(90deg, #ff9933 33.3%, #ffffff 33.3%, #ffffff 66.6%, #138808 66.6%)', borderRadius: '2px', margin: '8px auto 0' }}></div>
            </div>
            
            <div style={{ backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '20px 25px', maxWidth: '280px' }}>
               <p style={{ fontSize: '16px', color: '#334155', fontStyle: 'italic', margin: '0 0 10px', lineHeight: '1.4' }}>"Tell us your goal, we'll give you the right path."</p>
               <p style={{ fontSize: '13px', color: '#64748b', textAlign: 'right', margin: 0, fontWeight: '600' }}>— CGLPrep AI</p>
            </div>
          </div>
        </div>

        {/* Form Sections */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
          
          {/* Section 1: Target Exam */}
          <div>
            <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#0f172a', display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
              <span style={{ backgroundColor: '#2563eb', color: 'white', width: '26px', height: '26px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px' }}>1</span>
              Select Your Target Exam <span style={{ fontSize: '13px', fontWeight: '400', color: '#64748b' }}>(You can change this later)</span>
            </h3>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
              {/* Card 1 */}
              <div onClick={() => setExamGoal('cgl2026')} style={{ border: examGoal === 'cgl2026' ? '2px solid #2563eb' : '1px solid #e2e8f0', borderRadius: '12px', padding: '20px', cursor: 'pointer', backgroundColor: examGoal === 'cgl2026' ? '#eff6ff' : 'white', display: 'flex', alignItems: 'center', gap: '15px', position: 'relative' }}>
                {examGoal === 'cgl2026' ? (
                  <div style={{ position: 'absolute', top: '-10px', right: '-10px', backgroundColor: '#2563eb', color: 'white', width: '24px', height: '24px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '12px' }}><i className="fas fa-check"></i></div>
                ) : (
                  <div style={{ position: 'absolute', top: '15px', right: '15px', width: '16px', height: '16px', borderRadius: '50%', border: '1px solid #cbd5e1' }}></div>
                )}
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: '#dbeafe', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', color: '#2563eb' }}><i className="fas fa-university"></i></div>
                <div>
                  <h4 style={{ margin: '0 0 4px', fontSize: '16px', fontWeight: '700', color: '#0f172a' }}>SSC CGL 2026</h4>
                  <p style={{ margin: 0, fontSize: '12px', color: '#64748b' }}>Tier I + Tier II + Tier III</p>
                </div>
              </div>
              
              {/* Card 2 */}
              <div onClick={() => setExamGoal('chsl')} style={{ border: examGoal === 'chsl' ? '2px solid #2563eb' : '1px solid #e2e8f0', borderRadius: '12px', padding: '20px', cursor: 'pointer', backgroundColor: examGoal === 'chsl' ? '#eff6ff' : 'white', display: 'flex', alignItems: 'center', gap: '15px', position: 'relative' }}>
                {examGoal === 'chsl' ? (
                  <div style={{ position: 'absolute', top: '-10px', right: '-10px', backgroundColor: '#2563eb', color: 'white', width: '24px', height: '24px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '12px' }}><i className="fas fa-check"></i></div>
                ) : (
                  <div style={{ position: 'absolute', top: '15px', right: '15px', width: '16px', height: '16px', borderRadius: '50%', border: '1px solid #cbd5e1' }}></div>
                )}
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: '#ffe4e6', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', color: '#e11d48' }}><i className="fas fa-building"></i></div>
                <div>
                  <h4 style={{ margin: '0 0 4px', fontSize: '16px', fontWeight: '700', color: '#0f172a' }}>SSC CHSL</h4>
                  <p style={{ margin: 0, fontSize: '12px', color: '#64748b' }}>Tier I + Tier II</p>
                </div>
              </div>

              {/* Card 3 */}
              <div onClick={() => setExamGoal('mts')} style={{ border: examGoal === 'mts' ? '2px solid #2563eb' : '1px solid #e2e8f0', borderRadius: '12px', padding: '20px', cursor: 'pointer', backgroundColor: examGoal === 'mts' ? '#eff6ff' : 'white', display: 'flex', alignItems: 'center', gap: '15px', position: 'relative' }}>
                {examGoal === 'mts' ? (
                  <div style={{ position: 'absolute', top: '-10px', right: '-10px', backgroundColor: '#2563eb', color: 'white', width: '24px', height: '24px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '12px' }}><i className="fas fa-check"></i></div>
                ) : (
                  <div style={{ position: 'absolute', top: '15px', right: '15px', width: '16px', height: '16px', borderRadius: '50%', border: '1px solid #cbd5e1' }}></div>
                )}
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: '#f3e8ff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', color: '#a855f7' }}><i className="fas fa-file-invoice"></i></div>
                <div>
                  <h4 style={{ margin: '0 0 4px', fontSize: '16px', fontWeight: '700', color: '#0f172a' }}>SSC MTS</h4>
                  <p style={{ margin: 0, fontSize: '12px', color: '#64748b' }}>Tier I</p>
                </div>
              </div>

              {/* Card 4 */}
              <div onClick={() => setExamGoal('other')} style={{ border: examGoal === 'other' ? '2px solid #2563eb' : '1px solid #e2e8f0', borderRadius: '12px', padding: '20px', cursor: 'pointer', backgroundColor: examGoal === 'other' ? '#eff6ff' : 'white', display: 'flex', alignItems: 'center', gap: '15px', position: 'relative' }}>
                {examGoal === 'other' ? (
                  <div style={{ position: 'absolute', top: '-10px', right: '-10px', backgroundColor: '#2563eb', color: 'white', width: '24px', height: '24px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '12px' }}><i className="fas fa-check"></i></div>
                ) : (
                  <div style={{ position: 'absolute', top: '15px', right: '15px', width: '16px', height: '16px', borderRadius: '50%', border: '1px solid #cbd5e1' }}></div>
                )}
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: '#dcfce7', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', color: '#10b981' }}><i className="fas fa-folder-open"></i></div>
                <div>
                  <h4 style={{ margin: '0 0 4px', fontSize: '16px', fontWeight: '700', color: '#0f172a' }}>Other SSC Exams</h4>
                  <p style={{ margin: 0, fontSize: '12px', color: '#64748b' }}>(CPO, JE, Stenographer, etc.)</p>
                </div>
              </div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '3fr 2fr', gap: '40px' }}>
             {/* Section 2: Prep Level */}
             <div>
                <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#0f172a', display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                  <span style={{ backgroundColor: '#2563eb', color: 'white', width: '26px', height: '26px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px' }}>2</span>
                  What is Your Current Preparation Level?
                </h3>
                
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '15px' }}>
                  <div onClick={() => setPrepLevel('beginner')} style={{ border: prepLevel === 'beginner' ? '2px solid #2563eb' : '1px solid #e2e8f0', borderRadius: '12px', padding: '20px 15px', cursor: 'pointer', backgroundColor: prepLevel === 'beginner' ? '#eff6ff' : 'white', textAlign: 'center', position: 'relative' }}>
                    {prepLevel === 'beginner' ? (
                      <div style={{ position: 'absolute', top: '10px', right: '10px', backgroundColor: '#2563eb', color: 'white', width: '20px', height: '20px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '10px' }}><i className="fas fa-check"></i></div>
                    ) : (
                      <div style={{ position: 'absolute', top: '10px', right: '10px', width: '16px', height: '16px', borderRadius: '50%', border: '1px solid #cbd5e1' }}></div>
                    )}
                    <i className="fas fa-signal" style={{ fontSize: '32px', color: '#10b981', marginBottom: '10px' }}></i>
                    <h4 style={{ margin: '0 0 5px', fontSize: '15px', fontWeight: '700', color: '#0f172a' }}>Beginner</h4>
                    <p style={{ margin: 0, fontSize: '12px', color: prepLevel === 'beginner' ? '#166534' : '#64748b' }}>Just starting<br/>my preparation</p>
                  </div>

                  <div onClick={() => setPrepLevel('intermediate')} style={{ border: prepLevel === 'intermediate' ? '2px solid #2563eb' : '1px solid #e2e8f0', borderRadius: '12px', padding: '20px 15px', cursor: 'pointer', backgroundColor: prepLevel === 'intermediate' ? '#eff6ff' : 'white', textAlign: 'center', position: 'relative' }}>
                    {prepLevel === 'intermediate' ? (
                      <div style={{ position: 'absolute', top: '10px', right: '10px', backgroundColor: '#2563eb', color: 'white', width: '20px', height: '20px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '10px' }}><i className="fas fa-check"></i></div>
                    ) : (
                      <div style={{ position: 'absolute', top: '10px', right: '10px', width: '16px', height: '16px', borderRadius: '50%', border: '1px solid #cbd5e1' }}></div>
                    )}
                    <i className="fas fa-users-cog" style={{ fontSize: '32px', color: '#8b5cf6', marginBottom: '10px' }}></i>
                    <h4 style={{ margin: '0 0 5px', fontSize: '15px', fontWeight: '700', color: '#0f172a' }}>Intermediate</h4>
                    <p style={{ margin: 0, fontSize: '12px', color: '#64748b' }}>Some preparation done</p>
                  </div>

                  <div onClick={() => setPrepLevel('advanced')} style={{ border: prepLevel === 'advanced' ? '2px solid #2563eb' : '1px solid #e2e8f0', borderRadius: '12px', padding: '20px 15px', cursor: 'pointer', backgroundColor: prepLevel === 'advanced' ? '#eff6ff' : 'white', textAlign: 'center', position: 'relative' }}>
                    {prepLevel === 'advanced' ? (
                      <div style={{ position: 'absolute', top: '10px', right: '10px', backgroundColor: '#2563eb', color: 'white', width: '20px', height: '20px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '10px' }}><i className="fas fa-check"></i></div>
                    ) : (
                      <div style={{ position: 'absolute', top: '10px', right: '10px', width: '16px', height: '16px', borderRadius: '50%', border: '1px solid #cbd5e1' }}></div>
                    )}
                    <i className="fas fa-trophy" style={{ fontSize: '32px', color: '#f59e0b', marginBottom: '10px' }}></i>
                    <h4 style={{ margin: '0 0 5px', fontSize: '15px', fontWeight: '700', color: '#0f172a' }}>Advanced</h4>
                    <p style={{ margin: 0, fontSize: '12px', color: '#64748b' }}>Already well prepared</p>
                  </div>
                </div>
             </div>
             
             {/* Section 3: Year */}
             <div>
                <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#0f172a', display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                  <span style={{ backgroundColor: '#2563eb', color: 'white', width: '26px', height: '26px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px' }}>3</span>
                  When do you plan to appear?
                </h3>
                
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '15px' }}>
                  <div onClick={() => setAppearYear('2026')} style={{ border: appearYear === '2026' ? '2px solid #2563eb' : '1px solid #e2e8f0', borderRadius: '12px', padding: '20px 10px', cursor: 'pointer', backgroundColor: appearYear === '2026' ? '#eff6ff' : 'white', textAlign: 'center', position: 'relative' }}>
                    {appearYear === '2026' ? (
                      <div style={{ position: 'absolute', top: '10px', right: '10px', backgroundColor: '#2563eb', color: 'white', width: '20px', height: '20px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '10px' }}><i className="fas fa-check"></i></div>
                    ) : (
                      <div style={{ position: 'absolute', top: '10px', right: '10px', width: '16px', height: '16px', borderRadius: '50%', border: '1px solid #cbd5e1' }}></div>
                    )}
                    <i className="far fa-calendar-check" style={{ fontSize: '24px', color: appearYear === '2026' ? '#2563eb' : '#64748b', marginBottom: '10px' }}></i>
                    <h4 style={{ margin: '0', fontSize: '15px', fontWeight: '700', color: appearYear === '2026' ? '#1e3a8a' : '#0f172a' }}>In 2026</h4>
                  </div>
                  
                  <div onClick={() => setAppearYear('2027')} style={{ border: appearYear === '2027' ? '2px solid #2563eb' : '1px solid #e2e8f0', borderRadius: '12px', padding: '20px 10px', cursor: 'pointer', backgroundColor: appearYear === '2027' ? '#eff6ff' : 'white', textAlign: 'center', position: 'relative' }}>
                    {appearYear === '2027' ? (
                      <div style={{ position: 'absolute', top: '10px', right: '10px', backgroundColor: '#2563eb', color: 'white', width: '20px', height: '20px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '10px' }}><i className="fas fa-check"></i></div>
                    ) : (
                      <div style={{ position: 'absolute', top: '10px', right: '10px', width: '16px', height: '16px', borderRadius: '50%', border: '1px solid #cbd5e1' }}></div>
                    )}
                    <i className="far fa-calendar-alt" style={{ fontSize: '24px', color: '#64748b', marginBottom: '10px' }}></i>
                    <h4 style={{ margin: '0', fontSize: '15px', fontWeight: '500', color: '#0f172a' }}>In 2027</h4>
                  </div>
                  
                  <div onClick={() => setAppearYear('notsure')} style={{ border: appearYear === 'notsure' ? '2px solid #2563eb' : '1px solid #e2e8f0', borderRadius: '12px', padding: '20px 10px', cursor: 'pointer', backgroundColor: appearYear === 'notsure' ? '#eff6ff' : 'white', textAlign: 'center', position: 'relative' }}>
                    {appearYear === 'notsure' ? (
                      <div style={{ position: 'absolute', top: '10px', right: '10px', backgroundColor: '#2563eb', color: 'white', width: '20px', height: '20px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '10px' }}><i className="fas fa-check"></i></div>
                    ) : (
                      <div style={{ position: 'absolute', top: '10px', right: '10px', width: '16px', height: '16px', borderRadius: '50%', border: '1px solid #cbd5e1' }}></div>
                    )}
                    <i className="far fa-question-circle" style={{ fontSize: '24px', color: '#64748b', marginBottom: '10px' }}></i>
                    <h4 style={{ margin: '0', fontSize: '15px', fontWeight: '500', color: '#0f172a' }}>Not Sure Yet</h4>
                  </div>
                </div>
             </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
             {/* Section 4: Subjects */}
             <div>
                <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#0f172a', display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
                  <span style={{ backgroundColor: '#2563eb', color: 'white', width: '26px', height: '26px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px' }}>4</span>
                  Which subjects do you want to focus on?
                </h3>
                <p style={{ fontSize: '13px', color: '#64748b', marginBottom: '20px', marginLeft: '38px' }}>You can select multiple options. We'll personalize your study plan accordingly.</p>
                
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px', marginLeft: '38px' }}>
                   {Object.keys(subjects).map((key) => {
                     const labels = {
                       quant: "Quantitative Aptitude",
                       ga: "General Awareness",
                       reasoning: "General Intelligence & Reasoning",
                       english: "English Language",
                       computer: "Computer Knowledge",
                       staticGk: "Static GK",
                       currentAffairs: "Current Affairs (Extra Focus)",
                       all: "All Subjects"
                     };
                     
                     return (
                       <div key={key} onClick={() => handleSubjectChange(key)} style={{ border: '1px solid #e2e8f0', borderRadius: '8px', padding: '12px 10px', display: 'flex', alignItems: 'flex-start', gap: '10px', cursor: 'pointer', backgroundColor: subjects[key] ? '#f8fafc' : 'white', gridColumn: (key === 'reasoning' || key === 'currentAffairs') ? 'span 2' : (key === 'quant' || key === 'ga' || key === 'english' || key === 'computer' || key === 'staticGk' || key === 'all') ? 'span 1' : 'span 1' }}>
                         <div style={{ width: '18px', height: '18px', borderRadius: '4px', border: subjects[key] ? 'none' : '1px solid #cbd5e1', backgroundColor: subjects[key] ? '#2563eb' : 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', flexShrink: 0, marginTop: '2px' }}>
                           {subjects[key] && <i className="fas fa-check" style={{ color: 'white', fontSize: '10px' }}></i>}
                         </div>
                         <span style={{ fontSize: '12px', fontWeight: subjects[key] ? '600' : '500', color: subjects[key] ? '#0f172a' : '#475569', lineHeight: '1.4' }}>{labels[key]}</span>
                       </div>
                     );
                   })}
                </div>
             </div>
             
             {/* Section 5: Daily Study Time */}
             <div>
                <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#0f172a', display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                  <span style={{ backgroundColor: '#2563eb', color: 'white', width: '26px', height: '26px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px' }}>5</span>
                  What is your daily study time?
                </h3>
                
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px' }}>
                  <div onClick={() => setStudyTime('1-2')} style={{ border: studyTime === '1-2' ? '2px solid #2563eb' : '1px solid #e2e8f0', borderRadius: '12px', padding: '20px 10px', cursor: 'pointer', backgroundColor: studyTime === '1-2' ? '#eff6ff' : 'white', textAlign: 'center', position: 'relative' }}>
                    {studyTime === '1-2' ? (
                      <div style={{ position: 'absolute', top: '10px', right: '10px', backgroundColor: '#2563eb', color: 'white', width: '20px', height: '20px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '10px' }}><i className="fas fa-check"></i></div>
                    ) : (
                      <div style={{ position: 'absolute', top: '10px', right: '10px', width: '16px', height: '16px', borderRadius: '50%', border: '1px solid #cbd5e1' }}></div>
                    )}
                    <i className="far fa-clock" style={{ fontSize: '24px', color: studyTime === '1-2' ? '#2563eb' : '#64748b', marginBottom: '10px' }}></i>
                    <h4 style={{ margin: '0 0 4px', fontSize: '14px', fontWeight: '700', color: '#0f172a' }}>1-2 Hours</h4>
                    <p style={{ margin: 0, fontSize: '11px', color: studyTime === '1-2' ? '#2563eb' : '#64748b' }}>Getting Started</p>
                  </div>
                  
                  <div onClick={() => setStudyTime('2-4')} style={{ border: studyTime === '2-4' ? '2px solid #2563eb' : '1px solid #e2e8f0', borderRadius: '12px', padding: '20px 10px', cursor: 'pointer', backgroundColor: studyTime === '2-4' ? '#eff6ff' : 'white', textAlign: 'center', position: 'relative' }}>
                    {studyTime === '2-4' ? (
                      <div style={{ position: 'absolute', top: '10px', right: '10px', backgroundColor: '#2563eb', color: 'white', width: '20px', height: '20px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '10px' }}><i className="fas fa-check"></i></div>
                    ) : (
                      <div style={{ position: 'absolute', top: '10px', right: '10px', width: '16px', height: '16px', borderRadius: '50%', border: '1px solid #cbd5e1' }}></div>
                    )}
                    <div style={{ width: '24px', height: '24px', borderRadius: '50%', border: '2px solid #64748b', margin: '0 auto 10px' }}></div>
                    <h4 style={{ margin: '0 0 4px', fontSize: '14px', fontWeight: '600', color: '#0f172a' }}>2-4 Hours</h4>
                    <p style={{ margin: 0, fontSize: '11px', color: '#64748b' }}>Regular Study</p>
                  </div>

                  <div onClick={() => setStudyTime('4-6')} style={{ border: studyTime === '4-6' ? '2px solid #2563eb' : '1px solid #e2e8f0', borderRadius: '12px', padding: '20px 10px', cursor: 'pointer', backgroundColor: studyTime === '4-6' ? '#eff6ff' : 'white', textAlign: 'center', position: 'relative' }}>
                    {studyTime === '4-6' ? (
                      <div style={{ position: 'absolute', top: '10px', right: '10px', backgroundColor: '#2563eb', color: 'white', width: '20px', height: '20px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '10px' }}><i className="fas fa-check"></i></div>
                    ) : (
                      <div style={{ position: 'absolute', top: '10px', right: '10px', width: '16px', height: '16px', borderRadius: '50%', border: '1px solid #cbd5e1' }}></div>
                    )}
                    <div style={{ width: '24px', height: '24px', borderRadius: '50%', border: '2px solid #64748b', margin: '0 auto 10px' }}></div>
                    <h4 style={{ margin: '0 0 4px', fontSize: '14px', fontWeight: '600', color: '#0f172a' }}>4-6 Hours</h4>
                    <p style={{ margin: 0, fontSize: '11px', color: '#64748b' }}>Serious Preparation</p>
                  </div>

                  <div onClick={() => setStudyTime('6+')} style={{ border: studyTime === '6+' ? '2px solid #2563eb' : '1px solid #e2e8f0', borderRadius: '12px', padding: '20px 10px', cursor: 'pointer', backgroundColor: studyTime === '6+' ? '#eff6ff' : 'white', textAlign: 'center', position: 'relative' }}>
                    {studyTime === '6+' ? (
                      <div style={{ position: 'absolute', top: '10px', right: '10px', backgroundColor: '#2563eb', color: 'white', width: '20px', height: '20px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '10px' }}><i className="fas fa-check"></i></div>
                    ) : (
                      <div style={{ position: 'absolute', top: '10px', right: '10px', width: '16px', height: '16px', borderRadius: '50%', border: '1px solid #cbd5e1' }}></div>
                    )}
                    <div style={{ width: '24px', height: '24px', borderRadius: '50%', border: '2px solid #64748b', margin: '0 auto 10px' }}></div>
                    <h4 style={{ margin: '0 0 4px', fontSize: '14px', fontWeight: '600', color: '#0f172a' }}>6+ Hours</h4>
                    <p style={{ margin: 0, fontSize: '11px', color: '#64748b' }}>Full Focus</p>
                  </div>
                </div>
             </div>
          </div>
          
          {/* Bottom Ready Banner */}
          <div style={{ backgroundColor: '#f0fdf4', borderRadius: '16px', padding: '30px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', border: '1px solid #bbf7d0', marginTop: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '25px', flex: 1 }}>
              <div style={{ width: '70px', height: '70px', borderRadius: '50%', backgroundColor: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 10px rgba(0,0,0,0.05)' }}>
                <i className="fas fa-bullseye" style={{ fontSize: '40px', color: '#ef4444' }}></i>
              </div>
              <div>
                <h2 style={{ margin: '0 0 8px', fontSize: '24px', fontWeight: '800', color: '#0f172a' }}>You're Almost Ready!</h2>
                <p style={{ margin: 0, fontSize: '15px', color: '#475569', maxWidth: '350px', lineHeight: '1.5' }}>
                  Click continue to get your personalized dashboard, study plan and full access to all features.
                </p>
              </div>
            </div>
            
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><i className="fas fa-check-circle" style={{ color: '#10b981', fontSize: '16px' }}></i> <span style={{ fontSize: '14px', color: '#334155' }}>Personalized study plan</span></div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><i className="fas fa-check-circle" style={{ color: '#10b981', fontSize: '16px' }}></i> <span style={{ fontSize: '14px', color: '#334155' }}>Topic-wise mock tests</span></div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><i className="fas fa-check-circle" style={{ color: '#10b981', fontSize: '16px' }}></i> <span style={{ fontSize: '14px', color: '#334155' }}>Current affairs & post predictor</span></div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><i className="fas fa-check-circle" style={{ color: '#10b981', fontSize: '16px' }}></i> <span style={{ fontSize: '14px', color: '#334155' }}>Track progress & improve faster</span></div>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', alignItems: 'center' }}>
               <button onClick={() => window.location.href = "/dashboard"} className="btn-login-submit" style={{ padding: '16px 30px', fontSize: '16px', backgroundColor: '#0052cc', color: 'white', border: 'none', borderRadius: '8px', fontWeight: '600', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px' }}>
                 Continue to Dashboard <i className="fas fa-arrow-right"></i>
               </button>
               <div style={{ fontSize: '12px', color: '#64748b', display: 'flex', alignItems: 'center', gap: '6px' }}>
                 <i className="fas fa-lock"></i> Your data is safe with us.
               </div>
            </div>
          </div>

          {/* Footer Stats */}
          <div style={{ borderTop: '1px solid #e2e8f0', paddingTop: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px' }}>
             <div style={{ display: 'flex', gap: '40px' }}>
               <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                 <i className="fas fa-users text-blue" style={{ fontSize: '20px', color: '#3b82f6' }}></i>
                 <div>
                   <strong style={{ display: 'block', fontSize: '15px', color: '#0f172a' }}>10,000+</strong>
                   <span style={{ fontSize: '11px', color: '#64748b' }}>Aspirants Trust Us</span>
                 </div>
               </div>
               <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                 <i className="fas fa-trophy text-yellow" style={{ fontSize: '20px', color: '#fbbf24' }}></i>
                 <div>
                   <strong style={{ display: 'block', fontSize: '15px', color: '#0f172a' }}>95%</strong>
                   <span style={{ fontSize: '11px', color: '#64748b' }}>Satisfaction Rate</span>
                 </div>
               </div>
               <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                 <i className="fas fa-star text-blue" style={{ fontSize: '20px', color: '#3b82f6' }}></i>
                 <div>
                   <strong style={{ display: 'block', fontSize: '15px', color: '#0f172a' }}>4.8/5</strong>
                   <span style={{ fontSize: '11px', color: '#64748b' }}>User Rating</span>
                 </div>
               </div>
             </div>
             
             <div style={{ fontStyle: 'italic', color: '#334155', fontSize: '14px', fontWeight: '500' }}>
               "A Better You. A Brighter India."
             </div>
             
             <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', fontWeight: '600', color: '#475569' }}>
               <div style={{ display: 'flex', gap: '2px' }}>
                 <div style={{ width: '12px', height: '8px', backgroundColor: '#ff9933' }}></div>
                 <div style={{ width: '12px', height: '8px', backgroundColor: '#ffffff', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}></div>
                 <div style={{ width: '12px', height: '8px', backgroundColor: '#138808' }}></div>
               </div>
               Made for India's Aspirants <i className="fas fa-heart" style={{ color: '#ef4444' }}></i>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnboardingPage;
