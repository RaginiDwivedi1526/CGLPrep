import React, { useEffect } from 'react';
import DashboardLayout from '../components/DashboardLayout';
import PyqTests from '../components/mocktests/PyqTests'; // Reuse the existing PyqTests component

const DashboardPyqPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <DashboardLayout>
      <div className="pyq-dashboard-container">
        <div style={{ marginBottom: '20px' }}>
          <h2 style={{ color: '#0f172a', fontSize: '28px', fontWeight: '800', margin: '0 0 8px' }}>Previous Year Papers</h2>
          <p style={{ color: '#475569', fontSize: '15px', margin: 0 }}>Practice actual SSC CGL past papers to gauge exam difficulty.</p>
        </div>
        
        {/* We can just render the existing PyqTests component here since it contains the PYQ UI */}
        <div style={{ margin: '-40px' }}>
           <PyqTests />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DashboardPyqPage;
