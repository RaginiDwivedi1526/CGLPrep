const mongoose = require('mongoose');

const TestResultSchema = new mongoose.Schema({
  userId: { type: String, default: 'guest' },
  topic: { type: String, required: true },
  subject: { type: String, required: true },
  score: { type: Number, required: true },
  totalQuestions: { type: Number, required: true },
  maxScore: { type: Number, required: true },
  timeSpentSeconds: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('TestResult', TestResultSchema);
