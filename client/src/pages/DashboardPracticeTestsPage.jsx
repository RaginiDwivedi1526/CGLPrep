import React, { useState, useEffect } from 'react';
import DashboardLayout from '../components/DashboardLayout';
import QuizModal from '../components/QuizModal';

const DashboardPracticeTestsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [isGenerating, setIsGenerating] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [aiQuestions, setAiQuestions] = useState([]);
  const [currentTestTitle, setCurrentTestTitle] = useState("");
  
  const [subjects, setSubjects] = useState([
    { name: 'Quantitative Aptitude', icon: 'fas fa-calculator', color: '#2563eb', progress: 0, total: 120, completed: 0 },
    { name: 'Reasoning Ability', icon: 'fas fa-brain', color: '#8b5cf6', progress: 0, total: 80, completed: 0 },
    { name: 'English Language', icon: 'fas fa-language', color: '#10b981', progress: 0, total: 100, completed: 0 },
    { name: 'General Awareness', icon: 'fas fa-globe', color: '#f59e0b', progress: 0, total: 150, completed: 0 }
  ]);
  const [recentTests, setRecentTests] = useState([]);

  const fetchProgress = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/progress/summary?userId=guest');
      const result = await res.json();
      if (result.success) {
        setSubjects(result.data.subjects);
        setRecentTests(result.data.recentTests);
      }
    } catch (err) {
      console.error('Failed to fetch progress', err);
    }
  };

  useEffect(() => {
    fetchProgress();
  }, []);

  const handleStartPractice = async (subjectName) => {
    setIsGenerating(true);
    setCurrentTestTitle(`${subjectName} Practice`);
    try {
      const response = await fetch('http://localhost:5000/api/ai/generate-quiz', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          topic: subjectName,
          difficulty: 'Moderate',
          count: 10
        })
      });
      const result = await response.json();
      if (result.success) {
        setAiQuestions(result.data);
        setIsModalOpen(true);
      } else {
        alert(result.message);
      }
    } catch (err) {
      console.error(err);
      alert('Failed to generate test. Make sure backend is running.');
    } finally {
      setIsGenerating(false);
    }
  };



  return (
    <DashboardLayout>
      <div className="practice-tests-container">
        {/* Header Section */}
        <div className="db-header-row">
          <div>
            <h2 style={{ color: '#0f172a', fontSize: '28px', fontWeight: '800', margin: '0 0 8px' }}>Practice Tests</h2>
            <p style={{ color: '#475569', fontSize: '15px', margin: 0 }}>Topic-wise practice questions to strengthen your concepts.</p>
          </div>
          <button style={{ backgroundColor: '#f1f5f9', color: '#0f172a', border: '1px solid #cbd5e1', padding: '10px 20px', borderRadius: '8px', fontWeight: '600', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <i className="fas fa-filter"></i> Filter
          </button>
        </div>

        {/* Subjects Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px', marginBottom: '40px' }}>
          {subjects.map((subject, idx) => (
            <div key={idx} 
                 style={{ backgroundColor: 'white', borderRadius: '12px', padding: '24px', border: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column', transition: 'transform 0.2s, box-shadow 0.2s', cursor: 'pointer', opacity: isGenerating ? 0.7 : 1, pointerEvents: isGenerating ? 'none' : 'auto' }} 
                 onClick={() => handleStartPractice(subject.name)}
                 onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 10px 25px -5px rgba(0,0,0,0.1)'; }} 
                 onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}>
              <div style={{ width: '50px', height: '50px', borderRadius: '12px', backgroundColor: `${subject.color}15`, color: subject.color, display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '24px', marginBottom: '20px' }}>
                <i className={subject.icon}></i>
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#0f172a', margin: '0 0 10px' }}>{subject.name}</h3>
              <p style={{ color: '#64748b', fontSize: '13px', margin: '0 0 20px' }}>{subject.completed} of {subject.total} topics completed</p>
              
              <div style={{ width: '100%', height: '8px', backgroundColor: '#f1f5f9', borderRadius: '4px', overflow: 'hidden', marginBottom: '10px' }}>
                <div style={{ width: `${subject.progress}%`, height: '100%', backgroundColor: subject.color, borderRadius: '4px' }}></div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '13px', fontWeight: '600', color: '#334155' }}>{subject.progress}% Mastery</span>
                <span style={{ fontSize: '13px', fontWeight: '600', color: subject.color }}>
                  {isGenerating && currentTestTitle.includes(subject.name) ? <i className="fas fa-spinner fa-spin"></i> : 'Resume'} <i className="fas fa-arrow-right"></i>
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Recent Practice Sessions */}
        <div style={{ backgroundColor: 'white', borderRadius: '12px', padding: '24px', border: '1px solid #e2e8f0' }}>
          <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#0f172a', margin: '0 0 20px' }}>Recent Practice Sessions</h3>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                  <th style={{ textAlign: 'left', padding: '12px', color: '#64748b', fontSize: '13px', fontWeight: '600' }}>Topic</th>
                  <th style={{ textAlign: 'left', padding: '12px', color: '#64748b', fontSize: '13px', fontWeight: '600' }}>Subject</th>
                  <th style={{ textAlign: 'left', padding: '12px', color: '#64748b', fontSize: '13px', fontWeight: '600' }}>Score</th>
                  <th style={{ textAlign: 'left', padding: '12px', color: '#64748b', fontSize: '13px', fontWeight: '600' }}>Time Spent</th>
                  <th style={{ textAlign: 'left', padding: '12px', color: '#64748b', fontSize: '13px', fontWeight: '600' }}>Date</th>
                  <th style={{ textAlign: 'center', padding: '12px', color: '#64748b', fontSize: '13px', fontWeight: '600' }}>Action</th>
                </tr>
              </thead>
              <tbody>
                {recentTests.length === 0 && (
                  <tr>
                    <td colSpan="6" style={{ padding: '20px', textAlign: 'center', color: '#64748b' }}>No practice tests taken yet. Start one above!</td>
                  </tr>
                )}
                {recentTests.map((test, idx) => (
                  <tr key={idx} style={{ borderBottom: '1px solid #f1f5f9' }}>
                    <td style={{ padding: '15px 12px', fontWeight: '600', color: '#1e293b', fontSize: '14px' }}>{test.topic}</td>
                    <td style={{ padding: '15px 12px', color: '#475569', fontSize: '14px' }}>{test.subject}</td>
                    <td style={{ padding: '15px 12px' }}>
                      <span style={{ backgroundColor: test.score >= (test.maxScore / 2) ? '#dcfce7' : '#fef3c7', color: test.score >= (test.maxScore / 2) ? '#166534' : '#b45309', padding: '4px 8px', borderRadius: '6px', fontSize: '12px', fontWeight: '600' }}>
                        {test.score}/{test.maxScore}
                      </span>
                    </td>
                    <td style={{ padding: '15px 12px', color: '#475569', fontSize: '14px' }}>{Math.floor(test.timeSpentSeconds / 60)} mins</td>
                    <td style={{ padding: '15px 12px', color: '#475569', fontSize: '14px' }}>{new Date(test.createdAt).toLocaleDateString()}</td>
                    <td style={{ padding: '15px 12px', textAlign: 'center' }}><button style={{ color: '#2563eb', background: 'none', border: 'none', cursor: 'pointer', fontWeight: '600' }}>Review</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <QuizModal 
        isOpen={isModalOpen} 
        onClose={() => {
          setIsModalOpen(false);
          fetchProgress(); // Refresh progress when modal closes
        }} 
        title={currentTestTitle} 
        questions={aiQuestions} 
        config={{
          testMode: 'Practice Mode',
          showSolutionImmediately: true,
          negativeMarking: false,
          timePerQuestion: 60,
          shuffleQuestions: true
        }}
      />
    </DashboardLayout>
  );
};

export default DashboardPracticeTestsPage;
