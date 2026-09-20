const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Connect to MongoDB
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/cglprepai';
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB Connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/dashboard', require('./routes/dashboard'));

// Mock Data for Pages (Legacy)
const pageDataStore = {
  home: {
    heroTitle: "Crack CGL 2026 with AI",
    stats: { students: 10000, selections: 500 }
  },
  currentAffairs: {
    latestUpdate: "National Budget 2026 Announced",
    quizzesAvailable: 5
  },
  mockTests: {
    totalTests: 150,
    featuredTest: "CGL Tier 1 Full Mock 1"
  }
};

// API Route for Page Data (Legacy)
app.get('/api/page-data/:pageId', (req, res) => {
  const pageId = req.params.pageId;
  const data = pageDataStore[pageId];
  
  if (data) {
    res.json({ success: true, data });
  } else {
    res.status(404).json({ success: false, message: 'Page data not found' });
  }
});

// Original Status Route
app.get('/api/status', (req, res) => {
    res.json({ message: 'Backend is running successfully!', status: 'OK' });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
