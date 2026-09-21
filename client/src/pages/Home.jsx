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
import './home.css';
const Home = () => {
  const { data, loading, error } = usePageData('home');

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <section className="home-section" id="hero-section">
        <Hero title={data?.heroTitle} stats={data?.stats} />
      </section>
      <section className="home-section" id="features-section">
        <Features />
      </section>
      <section className="home-section" id="info-section">
        <Info />
      </section>
      <section className="home-section" id="studyplan-section">
        <StudyPlan />
      </section>
      <section className="home-section" id="mastery-section">
        <Mastery />
      </section>
      <section className="home-section" id="predictor-section">
        <Predictor />
      </section>
      <section className="home-section" id="exam-affairs-section">
        <ExamAffairs topNews={data?.topNews} />
      </section>
      <section className="home-section" id="whychoose-section">
        <WhyChoose />
      </section>
      <section className="home-section" id="parents-section">
        <Parents />
      </section>
      <section className="home-section" id="success-section">
        <Success reviews={data?.reviews} />
      </section>
      <section className="home-section" id="pricing-section">
        <Pricing />
      </section>
      <section className="home-section" id="mobileapp-section">
        <MobileApp />
      </section>
      <section className="home-section" id="cta-section">
        <CTABanner />
      </section>
    </>
  );
};

export default Home;
