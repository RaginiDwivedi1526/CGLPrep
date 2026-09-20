import React, { useEffect } from 'react';
import DashboardLayout from '../components/DashboardLayout';

const DashboardDiscussPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const discussions = [
    { id: 1, author: 'Rahul S.', avatar: 'R', role: 'Aspirant', time: '2 hours ago', title: 'Strategy for English Vocabulary?', text: 'I am struggling with antonyms and synonyms. Any suggestions on how to retain vocabulary effectively for the upcoming CGL tier 1?', tags: ['English', 'Strategy'], likes: 24, comments: 12 },
    { id: 2, author: 'Sneha M.', avatar: 'S', role: 'Selected - CGL 2024', time: '5 hours ago', title: 'My journey from 110 to 165 in Mock Tests', text: 'Hey everyone, just wanted to share what worked for me. The key is analyzing your mocks properly. After every mock, spend at least 2 hours...', tags: ['Motivation', 'Mocks'], likes: 156, comments: 45 },
    { id: 3, author: 'Amit K.', avatar: 'A', role: 'Aspirant', time: '1 day ago', title: 'Doubt in Geometry (Circles)', text: 'Can someone explain the alternate segment theorem with an example? I keep getting this wrong in mocks.', tags: ['Quantitative Aptitude', 'Doubt'], likes: 8, comments: 4 }
  ];

  return (
    <DashboardLayout>
      <div className="discuss-container" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '30px' }}>
        
        {/* Main Feed */}
        <div className="discuss-feed">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <h2 style={{ color: '#0f172a', fontSize: '24px', fontWeight: '800', margin: 0 }}>Community Discussions</h2>
            <div style={{ display: 'flex', gap: '10px' }}>
              <button style={{ padding: '8px 16px', backgroundColor: '#f1f5f9', border: 'none', borderRadius: '20px', fontSize: '13px', fontWeight: '600', cursor: 'pointer', color: '#475569' }}>Trending</button>
              <button style={{ padding: '8px 16px', backgroundColor: '#2563eb', border: 'none', borderRadius: '20px', fontSize: '13px', fontWeight: '600', cursor: 'pointer', color: 'white' }}>Latest</button>
            </div>
          </div>

          {/* New Post Box */}
          <div style={{ backgroundColor: 'white', borderRadius: '12px', padding: '20px', border: '1px solid #e2e8f0', marginBottom: '30px' }}>
            <div style={{ display: 'flex', gap: '15px' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#475569', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: '700', flexShrink: 0 }}>U</div>
              <div style={{ flex: 1 }}>
                <input type="text" placeholder="Start a discussion or ask a doubt..." style={{ width: '100%', padding: '12px', border: '1px solid #cbd5e1', borderRadius: '8px', fontSize: '14px', outline: 'none', marginBottom: '10px' }} />
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'flex', gap: '15px', color: '#64748b' }}>
                    <i className="fas fa-image" style={{ cursor: 'pointer' }}></i>
                    <i className="fas fa-link" style={{ cursor: 'pointer' }}></i>
                    <i className="fas fa-square-root-alt" style={{ cursor: 'pointer' }}></i>
                  </div>
                  <button style={{ backgroundColor: '#2563eb', color: 'white', border: 'none', padding: '8px 20px', borderRadius: '6px', fontWeight: '600', cursor: 'pointer' }}>Post</button>
                </div>
              </div>
            </div>
          </div>

          {/* Discussion List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {discussions.map(post => (
              <div key={post.id} style={{ backgroundColor: 'white', borderRadius: '12px', padding: '24px', border: '1px solid #e2e8f0' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '15px' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: '#e2e8f0', color: '#334155', display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: '700' }}>{post.avatar}</div>
                  <div>
                    <h4 style={{ margin: '0 0 2px', fontSize: '14px', color: '#0f172a', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      {post.author} 
                      {post.role.includes('Selected') && <i className="fas fa-check-circle" style={{ color: '#10b981', fontSize: '12px' }}></i>}
                    </h4>
                    <p style={{ margin: 0, fontSize: '12px', color: '#64748b' }}>{post.role} • {post.time}</p>
                  </div>
                </div>
                <h3 style={{ margin: '0 0 10px', fontSize: '16px', fontWeight: '700', color: '#0f172a' }}>{post.title}</h3>
                <p style={{ margin: '0 0 15px', fontSize: '14px', color: '#334155', lineHeight: '1.5' }}>{post.text}</p>
                <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
                  {post.tags.map(tag => (
                    <span key={tag} style={{ backgroundColor: '#f1f5f9', color: '#475569', padding: '4px 10px', borderRadius: '12px', fontSize: '11px', fontWeight: '600' }}>{tag}</span>
                  ))}
                </div>
                <div style={{ display: 'flex', gap: '20px', borderTop: '1px solid #f1f5f9', paddingTop: '15px' }}>
                  <button style={{ background: 'none', border: 'none', color: '#64748b', fontSize: '13px', fontWeight: '600', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <i className="far fa-thumbs-up"></i> {post.likes} Likes
                  </button>
                  <button style={{ background: 'none', border: 'none', color: '#64748b', fontSize: '13px', fontWeight: '600', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <i className="far fa-comment-alt"></i> {post.comments} Comments
                  </button>
                  <button style={{ background: 'none', border: 'none', color: '#64748b', fontSize: '13px', fontWeight: '600', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px', marginLeft: 'auto' }}>
                    <i className="fas fa-share"></i> Share
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar Widgets */}
        <div className="discuss-sidebar">
          {/* Top Contributors */}
          <div style={{ backgroundColor: 'white', borderRadius: '12px', padding: '20px', border: '1px solid #e2e8f0', marginBottom: '20px' }}>
            <h3 style={{ margin: '0 0 15px', fontSize: '16px', fontWeight: '700', color: '#0f172a', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <i className="fas fa-medal text-orange"></i> Top Contributors
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: '#fef3c7', color: '#d97706', display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: '700' }}>S</div>
                <div style={{ flex: 1 }}>
                  <h4 style={{ margin: 0, fontSize: '13px', color: '#0f172a' }}>Sneha M.</h4>
                  <span style={{ fontSize: '11px', color: '#64748b' }}>450 points</span>
                </div>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: '#f1f5f9', color: '#475569', display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: '700' }}>V</div>
                <div style={{ flex: 1 }}>
                  <h4 style={{ margin: 0, fontSize: '13px', color: '#0f172a' }}>Vikram Singh</h4>
                  <span style={{ fontSize: '11px', color: '#64748b' }}>320 points</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Guidelines */}
          <div style={{ backgroundColor: '#f0fdf4', borderRadius: '12px', padding: '20px', border: '1px solid #bbf7d0' }}>
            <h3 style={{ margin: '0 0 10px', fontSize: '15px', fontWeight: '700', color: '#166534' }}>Community Guidelines</h3>
            <p style={{ margin: '0 0 10px', fontSize: '12px', color: '#15803d', lineHeight: '1.5' }}>Be respectful, stay on topic, and help your fellow aspirants. Do not post promotional content.</p>
            <a href="#" style={{ color: '#16a34a', fontSize: '12px', fontWeight: '600', textDecoration: 'none' }}>Read Full Guidelines &rarr;</a>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DashboardDiscussPage;
