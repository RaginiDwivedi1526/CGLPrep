const express = require('express');
const router = express.Router();
const StudyTask = require('../models/StudyTask');

// GET /api/studyplan?userId=123
router.get('/', async (req, res) => {
  try {
    const { userId } = req.query;
    if (!userId) return res.status(400).json({ success: false, message: 'userId required' });

    // Get today's tasks
    const startOfDay = new Date();
    startOfDay.setHours(0, 0, 0, 0);
    const endOfDay = new Date();
    endOfDay.setHours(23, 59, 59, 999);

    const tasks = await StudyTask.find({
      userId,
      date: { $gte: startOfDay, $lte: endOfDay }
    }).sort({ _id: -1 });

    res.json({ success: true, data: tasks });
  } catch (err) {
    console.error('Error fetching study tasks:', err);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// POST /api/studyplan — Create a custom task
router.post('/', async (req, res) => {
  try {
    const { userId, title, subject, durationMins } = req.body;
    if (!userId || !title || !subject) {
      return res.status(400).json({ success: false, message: 'userId, title, and subject are required' });
    }

    const newTask = new StudyTask({
      userId,
      title,
      subject,
      durationMins: Number(durationMins) || 30,
      status: 'Pending'
    });

    const saved = await newTask.save();
    res.status(201).json({ success: true, data: saved });
  } catch (err) {
    console.error('Error creating task:', err);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// PUT /api/studyplan/:id — Update task status
router.put('/:id', async (req, res) => {
  try {
    const { status } = req.body;
    const task = await StudyTask.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );
    if (!task) return res.status(404).json({ success: false, message: 'Task not found' });
    res.json({ success: true, data: task });
  } catch (err) {
    console.error('Error updating task:', err);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// DELETE /api/studyplan/:id — Delete a task
router.delete('/:id', async (req, res) => {
  try {
    const task = await StudyTask.findByIdAndDelete(req.params.id);
    if (!task) return res.status(404).json({ success: false, message: 'Task not found' });
    res.json({ success: true, message: 'Task deleted' });
  } catch (err) {
    console.error('Error deleting task:', err);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

module.exports = router;
