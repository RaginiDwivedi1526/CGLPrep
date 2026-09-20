import React, { useEffect, useContext } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from './context/AuthContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import CGL2026 from './pages/CGL2026';

import FeaturesPage from './pages/FeaturesPage';
import MockTestsPage from './pages/MockTestsPage';
import CurrentAffairsPage from './pages/CurrentAffairsPage';
import PostPredictorPage from './pages/PostPredictorPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import ParentLoginPage from './pages/ParentLoginPage';
import PricingPage from './pages/PricingPage';
import OnboardingPage from './pages/OnboardingPage';
import DashboardPage from './pages/DashboardPage';
import DashboardAnalysisPage from './pages/DashboardAnalysisPage';
import DashboardStudyPlanPage from './pages/DashboardStudyPlanPage';
import DashboardPracticeTestsPage from './pages/DashboardPracticeTestsPage';
import DashboardPyqPage from './pages/DashboardPyqPage';
import DashboardNotesPage from './pages/DashboardNotesPage';
import DashboardBookmarksPage from './pages/DashboardBookmarksPage';
import DashboardDiscussPage from './pages/DashboardDiscussPage';
import DashboardSettingsPage from './pages/DashboardSettingsPage';
import ParentDashboardPage from './pages/ParentDashboardPage';
import ParentOverallProgressPage from './pages/ParentOverallProgressPage';
import ParentSubjectAnalysisPage from './pages/ParentSubjectAnalysisPage';
import ParentTestPerformancePage from './pages/ParentTestPerformancePage';
import ParentStudyActivityPage from './pages/ParentStudyActivityPage';
import ParentStudyPlanPage from './pages/ParentStudyPlanPage';
import ParentStrengthsWeaknessesPage from './pages/ParentStrengthsWeaknessesPage';
import ParentAiInsightsPage from './pages/ParentAiInsightsPage';
import ParentReportsDownloadsPage from './pages/ParentReportsDownloadsPage';
import ParentNotificationsPage from './pages/ParentNotificationsPage';
import ParentHelpSupportPage from './pages/ParentHelpSupportPage';

// Protected Route Component
const RequireAuth = ({ children, allowedRoles }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <div>Loading...</div>; // Could be replaced with a proper spinner
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return <Navigate to="/" replace />; // Redirect if not authorized
  }

  return children;
};

function App() {
  const location = useLocation();
  const isDashboardRoute = location.pathname.includes('dashboard') || location.pathname.includes('parent-');

  useEffect(() => {
    const header = document.getElementById('header');
    
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll > 50 && header) {
        header.style.boxShadow = '0 2px 20px rgba(0,0,0,.08)';
      } else if (header) {
        header.style.boxShadow = 'none';
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app-container">
      {!isDashboardRoute && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cgl-2026" element={<CGL2026 />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/mock-tests" element={<MockTestsPage />} />
        <Route path="/current-affairs" element={<CurrentAffairsPage />} />
        <Route path="/post-predictor" element={<PostPredictorPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/parent-login" element={<ParentLoginPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        
        {/* Protected Student Routes */}
        <Route path="/onboarding" element={<RequireAuth allowedRoles={['student']}><OnboardingPage /></RequireAuth>} />
        <Route path="/dashboard" element={<RequireAuth allowedRoles={['student']}><DashboardPage /></RequireAuth>} />
        <Route path="/dashboard-analysis" element={<RequireAuth allowedRoles={['student']}><DashboardAnalysisPage /></RequireAuth>} />
        <Route path="/dashboard-study-plan" element={<RequireAuth allowedRoles={['student']}><DashboardStudyPlanPage /></RequireAuth>} />
        <Route path="/dashboard-practice" element={<RequireAuth allowedRoles={['student']}><DashboardPracticeTestsPage /></RequireAuth>} />
        <Route path="/dashboard-pyq" element={<RequireAuth allowedRoles={['student']}><DashboardPyqPage /></RequireAuth>} />
        <Route path="/dashboard-notes" element={<RequireAuth allowedRoles={['student']}><DashboardNotesPage /></RequireAuth>} />
        <Route path="/dashboard-bookmarks" element={<RequireAuth allowedRoles={['student']}><DashboardBookmarksPage /></RequireAuth>} />
        <Route path="/dashboard-discuss" element={<RequireAuth allowedRoles={['student']}><DashboardDiscussPage /></RequireAuth>} />
        <Route path="/dashboard-settings" element={<RequireAuth allowedRoles={['student']}><DashboardSettingsPage /></RequireAuth>} />
        
        {/* Protected Parent Routes */}
        <Route path="/parent-dashboard" element={<RequireAuth allowedRoles={['parent']}><ParentDashboardPage /></RequireAuth>} />
        <Route path="/parent-overall-progress" element={<RequireAuth allowedRoles={['parent']}><ParentOverallProgressPage /></RequireAuth>} />
        <Route path="/parent-subject-analysis" element={<RequireAuth allowedRoles={['parent']}><ParentSubjectAnalysisPage /></RequireAuth>} />
        <Route path="/parent-test-performance" element={<RequireAuth allowedRoles={['parent']}><ParentTestPerformancePage /></RequireAuth>} />
        <Route path="/parent-study-activity" element={<RequireAuth allowedRoles={['parent']}><ParentStudyActivityPage /></RequireAuth>} />
        <Route path="/parent-study-plan" element={<RequireAuth allowedRoles={['parent']}><ParentStudyPlanPage /></RequireAuth>} />
        <Route path="/parent-strengths-weaknesses" element={<RequireAuth allowedRoles={['parent']}><ParentStrengthsWeaknessesPage /></RequireAuth>} />
        <Route path="/parent-ai-insights" element={<RequireAuth allowedRoles={['parent']}><ParentAiInsightsPage /></RequireAuth>} />
        <Route path="/parent-reports-downloads" element={<RequireAuth allowedRoles={['parent']}><ParentReportsDownloadsPage /></RequireAuth>} />
        <Route path="/parent-notifications" element={<RequireAuth allowedRoles={['parent']}><ParentNotificationsPage /></RequireAuth>} />
        <Route path="/parent-help-support" element={<RequireAuth allowedRoles={['parent']}><ParentHelpSupportPage /></RequireAuth>} />
      </Routes>
      {!isDashboardRoute && <Footer />}
    </div>
  );
}

export default App;
