const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

// Note: In a real app, this data would come from the database (e.g. MockTests, ActivityLogs models)
// For this prototype, we're returning robust simulated data tied to the authenticated user.

// @route   GET /api/dashboard/progress
// @desc    Get overall progress metrics
router.get('/progress', auth, (req, res) => {
  res.json({
    testsTaken: 12,
    avgScore: "145/200",
    accuracy: "82%",
    timeSpent: "140 hrs",
    recentScores: [120, 135, 128, 142, 145, 140],
    overallRank: 1245
  });
});

// @route   GET /api/dashboard/analysis
// @desc    Get subject analysis
router.get('/analysis', auth, (req, res) => {
  res.json({
    subjects: [
      { name: "Quantitative Aptitude", score: "42/50", accuracy: "85%", status: "Strong" },
      { name: "General Intelligence", score: "45/50", accuracy: "90%", status: "Excellent" },
      { name: "English Language", score: "35/50", accuracy: "75%", status: "Needs Work" },
      { name: "General Awareness", score: "25/50", accuracy: "60%", status: "Weak" }
    ],
    weakTopics: ["Current Affairs (National)", "Geometry", "Vocabulary"]
  });
});

// @route   GET /api/dashboard/activity
// @desc    Get recent study activity
router.get('/activity', auth, (req, res) => {
  res.json({
    activities: [
      { id: 1, type: 'Test', title: 'Mock Test 12', score: '145/200', date: '2 hours ago' },
      { id: 2, type: 'Video', title: 'Geometry Basics', duration: '45 mins', date: 'Yesterday' },
      { id: 3, type: 'Quiz', title: 'Current Affairs - May', score: '18/20', date: '2 days ago' }
    ],
    streakDays: 14
  });
});

module.exports = router;
