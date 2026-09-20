const mongoose = require('mongoose');

const StudyTaskSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  title: { type: String, required: true },
  subject: { type: String, required: true },
  durationMins: { type: Number, required: true },
  status: { type: String, enum: ['Pending', 'In Progress', 'Completed'], default: 'Pending' },
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('StudyTask', StudyTaskSchema);
