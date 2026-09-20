import React, { useEffect } from 'react';
import Predictor from '../components/Predictor';

const PostPredictorPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="post-predictor-page">
      <main style={{ paddingTop: '80px', paddingBottom: '40px', minHeight: '80vh' }}>
        <Predictor />
      </main>
    </div>
  );
};

export default PostPredictorPage;
