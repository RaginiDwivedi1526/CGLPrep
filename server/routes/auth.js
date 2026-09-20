const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const Parent = require('../models/Parent');
const router = express.Router();

const JWT_SECRET = process.env.JWT_SECRET || 'secret123';

// @route   POST /api/auth/signup
// @desc    Register user
router.post('/signup', async (req, res) => {
  const { name, email, mobile, password, examGoal, appearYear, prepLevel } = req.body;

  try {
    let user = await User.findOne({ $or: [{ email: email || 'nevermatch' }, { mobile: mobile || 'nevermatch' }] });
    if (user) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    user = new User({
      name,
      email,
      mobile,
      password: hashedPassword,
      examGoal,
      appearYear,
      prepLevel
    });

    await user.save();

    const payload = {
      user: {
        id: user.id,
        role: 'student'
      }
    };

    jwt.sign(payload, JWT_SECRET, { expiresIn: 360000 }, (err, token) => {
      if (err) throw err;
      res.json({ token, user: { id: user.id, name: user.name, role: 'student' } });
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// @route   POST /api/auth/parent/signup
// @desc    Register parent
router.post('/parent/signup', async (req, res) => {
  const { name, email, mobile, password } = req.body;

  try {
    let parent = await Parent.findOne({ $or: [{ email: email || 'nevermatch' }, { mobile: mobile || 'nevermatch' }] });
    if (parent) {
      return res.status(400).json({ message: 'Parent already exists' });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    parent = new Parent({
      name,
      email: email || undefined, // undefined prevents unique index errors for empty strings
      mobile: mobile || undefined,
      password: hashedPassword
    });

    await parent.save();

    const payload = {
      user: {
        id: parent.id,
        role: 'parent'
      }
    };

    jwt.sign(payload, JWT_SECRET, { expiresIn: 360000 }, (err, token) => {
      if (err) throw err;
      res.json({ token, user: { id: parent.id, name: parent.name, role: 'parent' } });
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// @route   POST /api/auth/login
// @desc    Authenticate user & get token
router.post('/login', async (req, res) => {
  const { emailOrMobile, password } = req.body;

  try {
    let user = await User.findOne({ 
      $or: [{ email: emailOrMobile }, { mobile: emailOrMobile }] 
    });

    if (!user) {
      return res.status(400).json({ message: 'Invalid Credentials' });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid Credentials' });
    }

    const payload = {
      user: {
        id: user.id,
        role: 'student'
      }
    };

    jwt.sign(payload, JWT_SECRET, { expiresIn: 360000 }, (err, token) => {
      if (err) throw err;
      res.json({ token, user: { id: user.id, name: user.name, role: 'student' } });
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// @route   POST /api/auth/parent/login
// @desc    Authenticate parent & get token
router.post('/parent/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Basic mock implementation for demo
    // We would normally look up the parent, but let's allow it to pass for UI testing if no DB populated
    if (email === 'parent@test.com' && password === 'password') {
      const payload = { user: { id: 'parent123', role: 'parent' } };
      return jwt.sign(payload, JWT_SECRET, { expiresIn: 360000 }, (err, token) => {
        if (err) throw err;
        res.json({ token, user: { id: 'parent123', name: 'Test Parent', role: 'parent' } });
      });
    }

    let parent = await Parent.findOne({ email });

    if (!parent) {
      return res.status(400).json({ message: 'Invalid Credentials' });
    }

    const isMatch = await bcrypt.compare(password, parent.password);

    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid Credentials' });
    }

    const payload = {
      user: {
        id: parent.id,
        role: 'parent'
      }
    };

    jwt.sign(payload, JWT_SECRET, { expiresIn: 360000 }, (err, token) => {
      if (err) throw err;
      res.json({ token, user: { id: parent.id, name: parent.name, role: 'parent' } });
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// @route   GET /api/auth/me
// @desc    Get user by token
const auth = require('../middleware/auth');
router.get('/me', auth, async (req, res) => {
  try {
    if (req.user.role === 'parent') {
      const parent = await Parent.findById(req.user.id).select('-password');
      if (parent) return res.json(parent);
      // Fallback for mock parent
      if (req.user.id === 'parent123') return res.json({ id: 'parent123', name: 'Test Parent', role: 'parent' });
    } else {
      const user = await User.findById(req.user.id).select('-password');
      if (user) return res.json(user);
    }
    return res.status(404).json({ message: 'User not found' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
