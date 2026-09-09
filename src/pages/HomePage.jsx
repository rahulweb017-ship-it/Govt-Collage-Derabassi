import Hero from '../components/sections/Hero'
import AdmissionsBanner from '../components/sections/AdmissionsBanner'
import AboutLegacy from '../components/sections/AboutLegacy'
import KeyStats from '../components/sections/KeyStats'
import AcademicProgrammes from '../components/sections/AcademicProgrammes'
import CampusLife from '../components/sections/CampusLife'
import PrincipalMessage from '../components/sections/PrincipalMessage'
import StudentServices from '../components/sections/StudentServices'
import NewsAnnouncements from '../components/sections/NewsAnnouncements'
import WhyGCD from '../components/sections/WhyGCD'
import FinalCTA from '../components/sections/FinalCTA'

export default function HomePage() {
  return (
    <>
      <Hero />
      <NewsAnnouncements />
      <AdmissionsBanner />
      <AboutLegacy />
      <KeyStats />
      <AcademicProgrammes />
      <CampusLife />
      <PrincipalMessage />
      <StudentServices />
      <WhyGCD />
      <FinalCTA />
    </>
  )
}
