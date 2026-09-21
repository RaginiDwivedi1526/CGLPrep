const mongoose = require('mongoose');

const ParentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String },
  mobile: { type: String },
  password: { type: String, required: false }, // Optional for Google OAuth
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Parent', ParentSchema);
