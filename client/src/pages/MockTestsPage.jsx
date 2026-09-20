import React, { useEffect, useState } from 'react';
import DashboardLayout from '../components/DashboardLayout';
import MockTestsHero from '../components/mocktests/MockTestsHero';
import SectionalTestsHero from '../components/mocktests/SectionalTestsHero';
import TopicWiseHero from '../components/mocktests/TopicWiseHero';
import PyqHero from '../components/mocktests/PyqHero';
import CustomTestsHero from '../components/mocktests/CustomTestsHero';
import MockTestsGrid from '../components/mocktests/MockTestsGrid';
import '../mocktests.css';

const MockTestsPage = () => {
  const [activeTab, setActiveTab] = useState('custom');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <DashboardLayout>
      <div className="mock-tests-page">
        {activeTab === 'sectional' ? <SectionalTestsHero /> : activeTab === 'topic' ? <TopicWiseHero /> : activeTab === 'pyq' ? <PyqHero /> : activeTab === 'custom' ? <CustomTestsHero /> : <MockTestsHero />}
        <MockTestsGrid activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
    </DashboardLayout>
  );
};

export default MockTestsPage;
