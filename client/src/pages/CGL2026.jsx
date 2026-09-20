import React, { useState } from 'react';
import CGLHero from '../components/CGLHero';
import CGLStats from '../components/CGLStats';
import ImportantDates from '../components/ImportantDates';
import TabNavigation from '../components/TabNavigation';
import OverviewContent from '../components/OverviewContent';
import VacanciesData from '../components/VacanciesData';
import StudyResources from '../components/StudyResources';
import ExpertAdvice from '../components/ExpertAdvice';

const CGL2026 = () => {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <>
      <CGLHero />
      <CGLStats />
      <ImportantDates />
      <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
      
      {/* Simple tab rendering based on ID */}
      {activeTab === 'overview' && <OverviewContent />}
      {activeTab === 'vacancies' && <VacanciesData />}
      {(activeTab !== 'overview' && activeTab !== 'vacancies') && (
        <section className="overview-section">
            <div className="container" style={{padding: '60px 20px', textAlign: 'center'}}>
                <h2>Content for {activeTab} coming soon...</h2>
            </div>
        </section>
      )}
      
      <StudyResources />
      <ExpertAdvice />
    </>
  );
};

export default CGL2026;
