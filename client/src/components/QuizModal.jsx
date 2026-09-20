import React, { useState, useEffect } from 'react';
import '../quiz-modal.css';

const QuizModal = ({ isOpen, onClose, title, questions, config = {} }) => {
  const {
    timePerQuestion = 60,
    testMode = 'Timed Test',
    negativeMarking = false,
    showSolutionImmediately = false
  } = config;
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [timeLeft, setTimeLeft] = useState(-1); // Changed from 0 to -1 to prevent race condition auto-submit

  useEffect(() => {
    if (isOpen) {
      setCurrentQIndex(0);
      setSelectedAnswers({});
      setShowResults(false);
      setTimeLeft(testMode === 'Practice Mode' ? -1 : questions.length * timePerQuestion);
    } else {
      setTimeLeft(-1);
    }
  }, [isOpen, questions, testMode, timePerQuestion]);

  useEffect(() => {
    let timer;
    if (isOpen && !showResults && timeLeft > 0 && testMode !== 'Practice Mode') {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0 && isOpen && !showResults && testMode !== 'Practice Mode') {
      handleSubmit(); // Auto-submit when time is up
    }
    return () => clearInterval(timer);
  }, [isOpen, showResults, timeLeft, testMode]);

  const formatTime = (seconds) => {
    if (seconds < 0) return "Loading...";
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  if (!isOpen) return null;

  const currentQ = questions[currentQIndex];

  const handleSelect = (optionIndex) => {
    if (showResults) return; // cannot change after submitted
    if (showSolutionImmediately && selectedAnswers[currentQIndex] !== undefined) return; // locked if immediate solution

    setSelectedAnswers({
      ...selectedAnswers,
      [currentQIndex]: optionIndex
    });
  };

  const handleNext = () => {
    if (currentQIndex < questions.length - 1) {
      setCurrentQIndex(currentQIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentQIndex > 0) {
      setCurrentQIndex(currentQIndex - 1);
    }
  };

  const handleSubmit = async () => {
    setShowResults(true);
    setCurrentQIndex(0); // Go back to start to review

    // Calculate time spent (fallback to 0 if practice mode since we aren't tracking duration there yet)
    const totalTimeAllocated = testMode === 'Practice Mode' ? 0 : questions.length * timePerQuestion;
    const timeSpent = testMode === 'Practice Mode' ? 0 : totalTimeAllocated - timeLeft;

    const score = calculateScore();
    const maxScore = negativeMarking ? questions.length * 2 : questions.length;
    
    const topic = questions.length > 0 ? (questions[0].topic || 'Mixed') : 'Mixed';
    let subject = 'General Awareness';
    const tLower = topic.toLowerCase();
    if(tLower.includes('quant') || tLower.includes('math')) subject = 'Quantitative Aptitude';
    else if(tLower.includes('reasoning') || tLower.includes('intelligence')) subject = 'Reasoning Ability';
    else if(tLower.includes('english')) subject = 'English Language';

    try {
      await fetch('http://localhost:5000/api/progress/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId: 'guest',
          topic,
          subject,
          score,
          totalQuestions: questions.length,
          maxScore,
          timeSpentSeconds: timeSpent
        })
      });
    } catch(err) {
      console.error('Failed to save progress', err);
    }
  };

  const calculateScore = () => {
    let score = 0;
    questions.forEach((q, index) => {
      if (selectedAnswers[index] === q.correctAnswer) {
        score += negativeMarking ? 2 : 1;
      } else if (selectedAnswers[index] !== undefined) {
        if (negativeMarking) score -= 0.5;
      }
    });
    return score;
  };

  return (
    <div className="quiz-modal-overlay">
      <div className="quiz-modal-content">
        
        <div className="quiz-modal-header">
          <div>
            <span className="ai-badge"><i className="fas fa-robot"></i> AI Generated</span>
            <h2>{title}</h2>
          </div>
          <div style={{display: 'flex', alignItems: 'center', gap: '15px'}}>
            {!showResults && testMode !== 'Practice Mode' && (
              <span className="timer-badge" style={{fontWeight: 'bold', fontSize: '1.1rem', color: timeLeft <= 60 ? '#dc2626' : '#374151'}}>
                <i className="fas fa-clock"></i> {formatTime(timeLeft)}
              </span>
            )}
            <button className="close-btn" onClick={onClose}><i className="fas fa-times"></i></button>
          </div>
        </div>

        {questions.length === 0 ? (
          <div className="quiz-modal-body empty">
            <p>No questions generated.</p>
          </div>
        ) : (
          <div className="quiz-modal-body">
            
            {showResults && currentQIndex === 0 && (
              <div className="quiz-score-banner">
                <h3>Quiz Completed!</h3>
                <p>Your Score: <strong>{calculateScore()} / {negativeMarking ? questions.length * 2 : questions.length}</strong></p>
                <p className="score-subtitle">Scroll through to review the AI explanations.</p>
              </div>
            )}

            <div className="question-header">
              <span className="q-num">Question {currentQIndex + 1} of {questions.length}</span>
              <span className="q-topic">{currentQ.topic || 'General'} | {currentQ.difficulty || 'Moderate'}</span>
            </div>

            <h3 className="q-text">{currentQ.text}</h3>

            <div className="options-list">
              {currentQ.options.map((opt, idx) => {
                const isSelected = selectedAnswers[currentQIndex] === idx;
                const isCorrect = currentQ.correctAnswer === idx;
                const isLocked = showResults || (showSolutionImmediately && selectedAnswers[currentQIndex] !== undefined);
                
                let btnClass = "option-btn";
                if (isSelected) btnClass += " selected";
                
                if (isLocked) {
                  if (isCorrect) btnClass += " correct-ans";
                  else if (isSelected && !isCorrect) btnClass += " wrong-ans";
                  else btnClass += " disabled-ans";
                }

                return (
                  <button 
                    key={idx} 
                    className={btnClass}
                    onClick={() => handleSelect(idx)}
                    disabled={isLocked}
                  >
                    <span className="opt-letter">{String.fromCharCode(65 + idx)}</span>
                    <span className="opt-text">{opt}</span>
                    {isLocked && isCorrect && <i className="fas fa-check-circle" style={{marginLeft: 'auto', color: '#16a34a'}}></i>}
                    {isLocked && isSelected && !isCorrect && <i className="fas fa-times-circle" style={{marginLeft: 'auto', color: '#dc2626'}}></i>}
                  </button>
                )
              })}
            </div>

            {(showResults || (showSolutionImmediately && selectedAnswers[currentQIndex] !== undefined)) && (
              <div className="ai-explanation">
                <h4><i className="fas fa-lightbulb"></i> AI Explanation</h4>
                <p>{currentQ.explanation}</p>
              </div>
            )}
          </div>
        )}

        <div className="quiz-modal-footer">
          <button className="btn-outline" onClick={handlePrev} disabled={currentQIndex === 0}>Previous</button>
          
          {currentQIndex < questions.length - 1 ? (
            <button className="btn-primary" onClick={handleNext}>Next Question <i className="fas fa-arrow-right"></i></button>
          ) : (
            !showResults ? (
              <button className="btn-primary" style={{backgroundColor: '#16a34a', borderColor: '#16a34a'}} onClick={handleSubmit}>Submit Test</button>
            ) : (
              <button className="btn-primary" onClick={onClose}>Close & Exit</button>
            )
          )}
        </div>

      </div>
    </div>
  );
};

export default QuizModal;
