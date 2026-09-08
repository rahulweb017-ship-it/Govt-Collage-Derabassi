import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Layout from './components/layout/Layout'
import HomePage from './pages/HomePage'
import AntiRaggingPage from './pages/AntiRaggingPage'
import AcademicCalendarPage from './pages/AcademicCalendarPage'
import ProspectusPage from './pages/ProspectusPage'
import AboutUsPage from './pages/AboutUsPage'
import PlaceholderPage from './pages/PlaceholderPage'

// Automatically scrolls to top on route change
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
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
          <Route path="/about/vision-mission" element={<PlaceholderPage />} />
          
          <Route path="/academics/departments-faculty" element={<PlaceholderPage />} />
          <Route path="/academics/courses-offered" element={<PlaceholderPage />} />
          <Route path="/academics/syllabus" element={<PlaceholderPage />} />
          <Route path="/academics/nep-guidelines" element={<PlaceholderPage />} />
          <Route path="/academics/distance-learning" element={<PlaceholderPage />} />
          
          <Route path="/students/admission-rules" element={<PlaceholderPage />} />
          
          <Route path="/examinations/date-sheets" element={<PlaceholderPage />} />
          <Route path="/examinations/results" element={<PlaceholderPage />} />
          <Route path="/examinations/form" element={<PlaceholderPage />} />
          <Route path="/examinations/admit-card" element={<PlaceholderPage />} />
          
          <Route path="/infrastructure/library" element={<PlaceholderPage />} />
          <Route path="/infrastructure/it-facilities" element={<PlaceholderPage />} />
          <Route path="/infrastructure/physical" element={<PlaceholderPage />} />

          {/* Catch-all fallback */}
          <Route path="*" element={<PlaceholderPage />} />
        </Routes>
      </Layout>
    </Router>
  )
}
