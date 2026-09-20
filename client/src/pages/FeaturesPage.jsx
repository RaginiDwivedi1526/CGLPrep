import React, { useEffect } from 'react';
import FeaturesHero from '../components/features/FeaturesHero';
import FeaturesGrid from '../components/features/FeaturesGrid';
import ActionableInsights from '../components/features/ActionableInsights';
import DeepDiveGrid from '../components/features/DeepDiveGrid';
import PreFooterCTA from '../components/features/PreFooterCTA';
import '../features.css';

const FeaturesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="features-page">
      <FeaturesHero />
      <FeaturesGrid />
      <ActionableInsights />
      <DeepDiveGrid />
      <PreFooterCTA />
    </div>
  );
};

export default FeaturesPage;
