import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CAHero from '../components/currentaffairs/CAHero';
import CAMagazineHero from '../components/currentaffairs/CAMagazineHero';
import CATopicHero from '../components/currentaffairs/CATopicHero';
import CAQuizHero from '../components/currentaffairs/CAQuizHero';
import CADocsHero from '../components/currentaffairs/CADocsHero';
import CAYearHero from '../components/currentaffairs/CAYearHero';
import CATopGrid from '../components/currentaffairs/CATopGrid';
import CAMiddleGrid1 from '../components/currentaffairs/CAMiddleGrid1';
import CAMiddleGrid2 from '../components/currentaffairs/CAMiddleGrid2';
import CABottomGrid from '../components/currentaffairs/CABottomGrid';
import CAPreFooter from '../components/currentaffairs/CAPreFooter';
import CAMagazine from '../components/currentaffairs/CAMagazine';
import CAMagPreFooter from '../components/currentaffairs/CAMagPreFooter';
import CATopics from '../components/currentaffairs/CATopics';
import CATopicPreFooter from '../components/currentaffairs/CATopicPreFooter';
import CAQuiz from '../components/currentaffairs/CAQuiz';
import CAQuizPreFooter from '../components/currentaffairs/CAQuizPreFooter';
import CADocs from '../components/currentaffairs/CADocs';
import CADocsPreFooter from '../components/currentaffairs/CADocsPreFooter';
import CAYear from '../components/currentaffairs/CAYear';
import CAYearPreFooter from '../components/currentaffairs/CAYearPreFooter';
import '../currentaffairs.css';

const CurrentAffairsPage = () => {
  const [activeTab, setActiveTab] = useState('year');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ca-page-wrapper">
      <Header />
      <main>
        {activeTab === 'year' ? (
          <CAYearHero activeTab={activeTab} setActiveTab={setActiveTab} />
        ) : activeTab === 'docs' ? (
          <CADocsHero activeTab={activeTab} setActiveTab={setActiveTab} />
        ) : activeTab === 'quiz' ? (
          <CAQuizHero activeTab={activeTab} setActiveTab={setActiveTab} />
        ) : activeTab === 'topic' ? (
          <CATopicHero activeTab={activeTab} setActiveTab={setActiveTab} />
        ) : activeTab === 'magazine' ? (
          <CAMagazineHero activeTab={activeTab} setActiveTab={setActiveTab} />
        ) : (
          <CAHero activeTab={activeTab} setActiveTab={setActiveTab} />
        )}
        
        <div className="ca-main-content">
          {activeTab === 'year' ? (
            <CAYear />
          ) : activeTab === 'docs' ? (
            <CADocs />
          ) : activeTab === 'quiz' ? (
            <CAQuiz />
          ) : activeTab === 'topic' ? (
            <CATopics />
          ) : activeTab === 'magazine' ? (
            <CAMagazine />
          ) : (
            <>
              <CATopGrid />
              <CAMiddleGrid1 />
              <CAMiddleGrid2 />
              <CABottomGrid />
            </>
          )}
        </div>
        
        {activeTab === 'year' ? <CAYearPreFooter /> : activeTab === 'docs' ? <CADocsPreFooter /> : activeTab === 'quiz' ? <CAQuizPreFooter /> : activeTab === 'topic' ? <CATopicPreFooter /> : activeTab === 'magazine' ? <CAMagPreFooter /> : <CAPreFooter />}
      </main>
      <Footer />
    </div>
  );
};

export default CurrentAffairsPage;
