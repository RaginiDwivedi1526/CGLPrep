import React, { useState, useEffect } from 'react';
import DashboardLayout from '../components/DashboardLayout';

const SUBJECTS = ['Quantitative Aptitude', 'Reasoning Ability', 'English Language', 'General Awareness'];
const DURATIONS = [15, 30, 45, 60, 90, 120];

const userId = 'demo_user_123';

const DashboardStudyPlanPage = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [saving, setSaving] = useState(false);
  const [form, setForm] = useState({ title: '', subject: SUBJECTS[0], durationMins: 30 });

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    setLoading(true);
    try {
      const res = await fetch(`http://localhost:5000/api/studyplan?userId=${userId}`);
      const data = await res.json();
      if (data.success) setTasks(data.data);
    } catch (err) {
      console.error('Failed to fetch tasks:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleAddTask = async (e) => {
    e.preventDefault();
    if (!form.title.trim()) return;
    setSaving(true);
    try {
      const res = await fetch('http://localhost:5000/api/studyplan', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId, ...form })
      });
      const data = await res.json();
      if (data.success) {
        setTasks(prev => [data.data, ...prev]);
        setForm({ title: '', subject: SUBJECTS[0], durationMins: 30 });
        setShowForm(false);
      }
    } catch (err) {
      console.error('Failed to add task:', err);
    } finally {
      setSaving(false);
    }
  };

  const toggleTaskStatus = async (taskId, currentStatus) => {
    const newStatus = currentStatus === 'Completed' ? 'Pending' : 'Completed';
    setTasks(prev => prev.map(t => t._id === taskId ? { ...t, status: newStatus } : t));
    try {
      const res = await fetch(`http://localhost:5000/api/studyplan/${taskId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus })
      });
      const data = await res.json();
      if (!data.success) setTasks(prev => prev.map(t => t._id === taskId ? { ...t, status: currentStatus } : t));
    } catch {
      setTasks(prev => prev.map(t => t._id === taskId ? { ...t, status: currentStatus } : t));
    }
  };

  const deleteTask = async (taskId) => {
    setTasks(prev => prev.filter(t => t._id !== taskId));
    try {
      await fetch(`http://localhost:5000/api/studyplan/${taskId}`, { method: 'DELETE' });
    } catch (err) {
      console.error('Failed to delete task:', err);
      fetchTasks();
    }
  };

  const completedCount = tasks.filter(t => t.status === 'Completed').length;
  const progress = tasks.length > 0 ? Math.round((completedCount / tasks.length) * 100) : 0;

  const subjectColors = {
    'Quantitative Aptitude': { bg: '#eff6ff', color: '#1d4ed8', icon: 'fa-calculator' },
    'Reasoning Ability':     { bg: '#f5f3ff', color: '#7c3aed', icon: 'fa-brain' },
    'English Language':      { bg: '#ecfdf5', color: '#065f46', icon: 'fa-book-open' },
    'General Awareness':     { bg: '#fff7ed', color: '#c2410c', icon: 'fa-globe' },
  };

  return (
    <DashboardLayout>
      <div style={{ padding: '28px', backgroundColor: '#f8fafc', minHeight: '100vh' }}>

        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '28px', background: 'white', padding: '24px 28px', borderRadius: '20px', boxShadow: '0 4px 20px rgba(0,0,0,0.04)' }}>
          <div>
            <h2 style={{ color: '#0f172a', fontSize: '28px', fontWeight: '900', margin: '0 0 4px', letterSpacing: '-0.5px' }}>My Study Plan</h2>
            <p style={{ color: '#64748b', fontSize: '14px', margin: 0 }}>
              {new Date().toLocaleDateString('en-IN', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}
            </p>
          </div>
          <button
            onClick={() => setShowForm(true)}
            style={{ background: 'linear-gradient(135deg, #3b82f6, #2563eb)', color: 'white', border: 'none', padding: '12px 24px', borderRadius: '12px', fontWeight: '700', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', boxShadow: '0 4px 14px rgba(37,99,235,0.3)' }}>
            <i className="fas fa-plus"></i> Add Task
          </button>
        </div>

        {/* Progress Bar */}
        {tasks.length > 0 && (
          <div style={{ background: 'white', borderRadius: '16px', padding: '20px 24px', marginBottom: '24px', boxShadow: '0 4px 20px rgba(0,0,0,0.04)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
              <span style={{ fontWeight: '700', color: '#1e293b', fontSize: '15px' }}>Today's Progress</span>
              <span style={{ fontWeight: '800', color: '#2563eb', fontSize: '18px' }}>{completedCount}/{tasks.length} tasks</span>
            </div>
            <div style={{ background: '#f1f5f9', borderRadius: '999px', height: '10px', overflow: 'hidden' }}>
              <div style={{ width: `${progress}%`, height: '100%', background: 'linear-gradient(90deg, #3b82f6, #8b5cf6)', borderRadius: '999px', transition: 'width 0.4s ease' }}></div>
            </div>
            <p style={{ margin: '8px 0 0', fontSize: '13px', color: '#64748b', fontWeight: '500' }}>{progress}% completed</p>
          </div>
        )}

        {/* Add Task Modal */}
        {showForm && (
          <div style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', backdropFilter: 'blur(4px)' }}>
            <div style={{ background: 'white', borderRadius: '24px', padding: '36px', width: '100%', maxWidth: '480px', boxShadow: '0 25px 60px rgba(0,0,0,0.2)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '28px' }}>
                <h3 style={{ margin: 0, fontSize: '22px', fontWeight: '800', color: '#0f172a' }}>Add New Task</h3>
                <button onClick={() => setShowForm(false)} style={{ background: '#f1f5f9', border: 'none', borderRadius: '10px', padding: '8px 12px', cursor: 'pointer', color: '#64748b', fontSize: '16px' }}>
                  <i className="fas fa-times"></i>
                </button>
              </div>

              <form onSubmit={handleAddTask} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: '700', color: '#374151', marginBottom: '6px' }}>Task Title *</label>
                  <input
                    type="text"
                    placeholder="e.g. Complete Ratio & Proportion Concepts"
                    value={form.title}
                    onChange={e => setForm(f => ({ ...f, title: e.target.value }))}
                    required
                    style={{ width: '100%', padding: '12px 16px', borderRadius: '10px', border: '1.5px solid #e2e8f0', fontSize: '14px', outline: 'none', boxSizing: 'border-box', transition: 'border-color 0.2s' }}
                    onFocus={e => e.target.style.borderColor = '#3b82f6'}
                    onBlur={e => e.target.style.borderColor = '#e2e8f0'}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: '700', color: '#374151', marginBottom: '6px' }}>Subject *</label>
                  <select
                    value={form.subject}
                    onChange={e => setForm(f => ({ ...f, subject: e.target.value }))}
                    style={{ width: '100%', padding: '12px 16px', borderRadius: '10px', border: '1.5px solid #e2e8f0', fontSize: '14px', outline: 'none', cursor: 'pointer', boxSizing: 'border-box', background: 'white' }}>
                    {SUBJECTS.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: '700', color: '#374151', marginBottom: '10px' }}>Duration</label>
                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                    {DURATIONS.map(d => (
                      <button
                        key={d} type="button"
                        onClick={() => setForm(f => ({ ...f, durationMins: d }))}
                        style={{ padding: '8px 16px', borderRadius: '8px', border: '1.5px solid', borderColor: form.durationMins === d ? '#3b82f6' : '#e2e8f0', background: form.durationMins === d ? '#eff6ff' : 'white', color: form.durationMins === d ? '#2563eb' : '#64748b', fontWeight: '700', fontSize: '13px', cursor: 'pointer', transition: 'all 0.2s' }}>
                        {d} min
                      </button>
                    ))}
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '12px', marginTop: '8px' }}>
                  <button type="button" onClick={() => setShowForm(false)} style={{ flex: 1, padding: '13px', borderRadius: '12px', border: '1.5px solid #e2e8f0', background: 'white', color: '#64748b', fontWeight: '700', fontSize: '14px', cursor: 'pointer' }}>
                    Cancel
                  </button>
                  <button type="submit" disabled={saving} style={{ flex: 2, padding: '13px', borderRadius: '12px', border: 'none', background: 'linear-gradient(135deg, #3b82f6, #2563eb)', color: 'white', fontWeight: '700', fontSize: '14px', cursor: saving ? 'not-allowed' : 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', boxShadow: '0 4px 14px rgba(37,99,235,0.25)' }}>
                    {saving ? <><i className="fas fa-spinner fa-spin"></i> Saving...</> : <><i className="fas fa-plus"></i> Add Task</>}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Task List */}
        <div style={{ background: 'white', borderRadius: '20px', padding: '28px', boxShadow: '0 4px 20px rgba(0,0,0,0.04)' }}>
          <h3 style={{ fontSize: '18px', fontWeight: '800', color: '#0f172a', margin: '0 0 20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ background: '#eff6ff', color: '#2563eb', padding: '8px 10px', borderRadius: '10px', fontSize: '16px' }}>
              <i className="fas fa-list-check"></i>
            </span>
            Today's Targets
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {loading ? (
              <div style={{ textAlign: 'center', padding: '50px', color: '#94a3b8' }}>
                <i className="fas fa-spinner fa-spin" style={{ fontSize: '28px', marginBottom: '12px', display: 'block' }}></i>
                Loading your tasks...
              </div>
            ) : tasks.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '60px 20px', backgroundColor: '#f8fafc', borderRadius: '16px', border: '2px dashed #e2e8f0' }}>
                <i className="fas fa-clipboard-list" style={{ fontSize: '52px', color: '#cbd5e1', marginBottom: '16px', display: 'block' }}></i>
                <h4 style={{ fontSize: '17px', fontWeight: '700', color: '#475569', marginBottom: '8px' }}>No tasks for today!</h4>
                <p style={{ color: '#94a3b8', fontSize: '14px', marginBottom: '20px' }}>Add your first task to start tracking your progress.</p>
                <button onClick={() => setShowForm(true)} style={{ background: 'linear-gradient(135deg, #3b82f6, #2563eb)', color: 'white', border: 'none', padding: '11px 24px', borderRadius: '10px', fontWeight: '700', cursor: 'pointer', fontSize: '14px' }}>
                  <i className="fas fa-plus" style={{ marginRight: '8px' }}></i>Add Your First Task
                </button>
              </div>
            ) : (
              tasks.map(task => {
                const isCompleted = task.status === 'Completed';
                const style = subjectColors[task.subject] || { bg: '#f1f5f9', color: '#475569', icon: 'fa-book' };
                return (
                  <div key={task._id}
                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '18px 20px', border: `1.5px solid ${isCompleted ? '#bbf7d0' : '#f1f5f9'}`, borderRadius: '14px', backgroundColor: isCompleted ? '#f0fdf4' : '#fafafa', transition: 'all 0.25s', gap: '12px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flex: 1, minWidth: 0 }}>
                      {/* Checkbox */}
                      <button
                        onClick={() => toggleTaskStatus(task._id, task.status)}
                        style={{ width: '26px', height: '26px', borderRadius: '8px', border: `2px solid ${isCompleted ? '#16a34a' : '#cbd5e1'}`, background: isCompleted ? '#16a34a' : 'white', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, transition: 'all 0.2s' }}>
                        {isCompleted && <i className="fas fa-check" style={{ color: 'white', fontSize: '11px' }}></i>}
                      </button>

                      <div style={{ minWidth: 0 }}>
                        <h4 style={{ margin: '0 0 5px', fontSize: '15px', fontWeight: '700', color: isCompleted ? '#166534' : '#1e293b', textDecoration: isCompleted ? 'line-through' : 'none', textDecorationColor: '#86efac' }}>
                          {task.title}
                        </h4>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
                          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', fontSize: '12px', fontWeight: '600', padding: '3px 10px', borderRadius: '6px', backgroundColor: style.bg, color: style.color }}>
                            <i className={`fas ${style.icon}`}></i> {task.subject}
                          </span>
                          <span style={{ fontSize: '12px', color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '4px', fontWeight: '500' }}>
                            <i className="far fa-clock"></i> {task.durationMins} min
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Delete button */}
                    <button
                      onClick={() => deleteTask(task._id)}
                      style={{ background: '#fff1f2', border: 'none', borderRadius: '8px', padding: '8px 10px', cursor: 'pointer', color: '#e11d48', flexShrink: 0, transition: 'all 0.2s' }}
                      title="Delete task">
                      <i className="fas fa-trash-alt" style={{ fontSize: '13px' }}></i>
                    </button>
                  </div>
                );
              })
            )}
          </div>
        </div>

      </div>
    </DashboardLayout>
  );
};

export default DashboardStudyPlanPage;
