import React, { useEffect } from 'react';
import DashboardLayout from '../components/DashboardLayout';
import Predictor from '../components/Predictor';

const PostPredictorPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <DashboardLayout>
      <div className="post-predictor-page">
        <main style={{ padding: '30px', minHeight: '80vh' }}>
          <Predictor />
        </main>
      </div>
    </DashboardLayout>
  );
};

export default PostPredictorPage;
