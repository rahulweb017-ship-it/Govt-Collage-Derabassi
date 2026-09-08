import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Layout from './components/layout/Layout'
import HomePage from './pages/HomePage'
import AntiRaggingPage from './pages/AntiRaggingPage'
import AcademicCalendarPage from './pages/AcademicCalendarPage'
import ProspectusPage from './pages/ProspectusPage'
import AboutUsPage from './pages/AboutUsPage'
import VisionMissionPage from './pages/VisionMissionPage'
import DepartmentsPage from './pages/DepartmentsPage'
import CoursesOfferedPage from './pages/CoursesOfferedPage'
import AdmissionRulesPage from './pages/AdmissionRulesPage'
import PhotoGalleryPage from './pages/PhotoGalleryPage'
import NewsGalleryPage from './pages/NewsGalleryPage'
import PlaceholderPage from './pages/PlaceholderPage'

// Automatically scrolls to top on route change
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function ExternalRedirect({ to }) {
  useEffect(() => {
    window.location.replace(to)
  }, [to])
  return (
    <div className="min-h-[50vh] flex flex-col items-center justify-center p-8 text-center bg-[#FAF9F5]">
      <div className="w-8 h-8 border-4 border-[#C75B2A] border-t-transparent rounded-full animate-spin mb-4" />
      <p className="text-sm font-semibold text-[#0C1D3F]">Redirecting to official university portal...</p>
      <a href={to} className="text-xs text-[#C75B2A] font-bold underline mt-2">
        Click here if not redirected automatically &rarr;
      </a>
    </div>
  )
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/prospectus" element={<ProspectusPage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/about/overview" element={<AboutUsPage />} />
          <Route path="/students/anti-ragging" element={<AntiRaggingPage />} />
          <Route path="/about/calendar" element={<AcademicCalendarPage />} />
          
          {/* Specific placeholder routes for all sub-items */}
          <Route path="/about/naac-report" element={<PlaceholderPage />} />
          <Route path="/about/vision-mission" element={<VisionMissionPage />} />
          
          <Route path="/academics/departments-faculty" element={<DepartmentsPage />} />
          <Route path="/academics/departments" element={<DepartmentsPage />} />
          <Route path="/departments" element={<DepartmentsPage />} />
          <Route path="/academics/courses-offered" element={<CoursesOfferedPage />} />
          <Route path="/courses" element={<CoursesOfferedPage />} />
          <Route path="/academics/nep-guidelines" element={<PlaceholderPage />} />
          <Route path="/academics/distance-learning" element={<PlaceholderPage />} />
          
          <Route path="/students/admission-rules" element={<AdmissionRulesPage />} />
          <Route path="/admissions/admission-rules" element={<AdmissionRulesPage />} />
          <Route path="/admissions/rules" element={<AdmissionRulesPage />} />
          <Route path="/admission-rules" element={<AdmissionRulesPage />} />
          
          <Route path="/examinations/date-sheets" element={<ExternalRedirect to="https://ds19.pupexamination.ac.in/uploaddatesheet/view-datesheet.php" />} />
          <Route path="/examinations/results" element={<ExternalRedirect to="https://results.pupexamination.ac.in/t8/results/results.php" />} />
          <Route path="/examinations/form" element={<ExternalRedirect to="https://pupexamination.ac.in/" />} />
          <Route path="/examinations/admit-card" element={<ExternalRedirect to="https://pupexamination.ac.in/Login.aspx?Type=PRINTFORM" />} />
          
          <Route path="/infrastructure/library" element={<PlaceholderPage />} />
          <Route path="/infrastructure/it-facilities" element={<PlaceholderPage />} />
          <Route path="/infrastructure/physical" element={<PlaceholderPage />} />

          {/* Gallery Routes */}
          <Route path="/gallery" element={<PhotoGalleryPage />} />
          <Route path="/gallery/photos" element={<PhotoGalleryPage />} />
          <Route path="/gallery/news" element={<NewsGalleryPage />} />
          <Route path="/news-gallery" element={<NewsGalleryPage />} />

          {/* Catch-all fallback */}
          <Route path="*" element={<PlaceholderPage />} />
        </Routes>
      </Layout>
    </Router>
  )
}
