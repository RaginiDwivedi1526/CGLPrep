const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, sparse: true },
  mobile: { type: String, unique: true, sparse: true },
  password: { type: String, required: true },
  examGoal: { type: String, default: 'cgl2026' },
  appearYear: { type: String, default: '2026' },
  prepLevel: { type: String, default: 'intermediate' },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('User', UserSchema);
