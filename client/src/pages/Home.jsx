import React from 'react';
import usePageData from '../hooks/usePageData';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Info from '../components/Info';
import StudyPlan from '../components/StudyPlan';
import Mastery from '../components/Mastery';
import Predictor from '../components/Predictor';
import ExamAffairs from '../components/ExamAffairs';
import WhyChoose from '../components/WhyChoose';
import Parents from '../components/Parents';
import Success from '../components/Success';
import Pricing from '../components/Pricing';
import MobileApp from '../components/MobileApp';
import CTABanner from '../components/CTABanner';

const Home = () => {
  const { data, loading, error } = usePageData('home');

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      {/* Passing backend data as props down to components if needed */}
      <Hero title={data?.heroTitle} />
      <Features />
      <Info />
      <StudyPlan />
      <Mastery />
      <Predictor />
      <ExamAffairs />
      <WhyChoose />
      <Parents />
      <Success stats={data?.stats} />
      <Pricing />
      <MobileApp />
      <CTABanner />
    </>
  );
};

export default Home;
