const express = require('express');
const router = express.Router();
const TestResult = require('../models/TestResult');

// @route   POST /api/progress/submit
// @desc    Submit a test result
router.post('/submit', async (req, res) => {
  try {
    const { userId, topic, subject, score, totalQuestions, maxScore, timeSpentSeconds } = req.body;
    
    const newResult = new TestResult({
      userId: userId || 'guest',
      topic: topic || 'Unknown Topic',
      subject: subject || 'General',
      score,
      totalQuestions,
      maxScore,
      timeSpentSeconds
    });

    await newResult.save();
    res.json({ success: true, message: 'Test result saved successfully' });
  } catch (error) {
    console.error('Error saving test result:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// @route   GET /api/progress/summary
// @desc    Get progress summary and recent tests for a user
router.get('/summary', async (req, res) => {
  try {
    const userId = req.query.userId || 'guest';
    
    // Fetch all test results for this user
    const results = await TestResult.find({ userId }).sort({ createdAt: -1 });

    // Aggregate progress by subject
    const subjectsAgg = {
      'Quantitative Aptitude': { progress: 0, completed: 0, total: 120, color: '#2563eb', icon: 'fas fa-calculator' },
      'Reasoning Ability': { progress: 0, completed: 0, total: 80, color: '#8b5cf6', icon: 'fas fa-brain' },
      'English Language': { progress: 0, completed: 0, total: 100, color: '#10b981', icon: 'fas fa-language' },
      'General Awareness': { progress: 0, completed: 0, total: 150, color: '#f59e0b', icon: 'fas fa-globe' },
    };

    // Calculate completed topics per subject based on tests taken
    // A simple heuristic: each test taken increments completed topics by 1 (capped at total)
    // And progress = (completed / total) * 100
    results.forEach(r => {
      let subjectKey = r.subject;
      // Normalize names if necessary
      if (subjectKey.includes('Quant')) subjectKey = 'Quantitative Aptitude';
      if (subjectKey.includes('Reason')) subjectKey = 'Reasoning Ability';
      if (subjectKey.includes('English')) subjectKey = 'English Language';
      if (subjectKey.includes('General')) subjectKey = 'General Awareness';

      if (subjectsAgg[subjectKey]) {
        subjectsAgg[subjectKey].completed = Math.min(subjectsAgg[subjectKey].completed + 1, subjectsAgg[subjectKey].total);
      }
    });

    // Format subjects array for the frontend
    const subjects = Object.keys(subjectsAgg).map(key => {
      const data = subjectsAgg[key];
      data.progress = Math.round((data.completed / data.total) * 100);
      return { name: key, ...data };
    });

    // Calculate global metrics
    let totalQuestionsAttempted = 0;
    let totalCorrectScore = 0;
    let totalMaxScore = 0;
    
    results.forEach(r => {
      totalQuestionsAttempted += (r.totalQuestions || 0);
      totalCorrectScore += (r.score || 0);
      totalMaxScore += (r.maxScore || 1);
    });
    
    const accuracy = totalMaxScore > 0 ? Math.round((totalCorrectScore / totalMaxScore) * 100) : 0;

    res.json({
      success: true,
      data: {
        subjects,
        recentTests: results.slice(0, 10),
        overallStats: {
          totalTests: results.length,
          totalQuestions: totalQuestionsAttempted,
          accuracy: accuracy
        }
      }
    });
  } catch (error) {
    console.error('Error fetching progress summary:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

module.exports = router;
