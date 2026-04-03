import Navigation from './components/Navigation'
import Hero from './components/Hero'
import AcademicJourney from './components/AcademicJourney'
import TechnicalEcosystem from './components/TechnicalEcosystem'
import FeaturedProjects from './components/FeaturedProjects'
import VerifiedSkills from './components/VerifiedSkills'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-surface min-h-screen">
      <Navigation />
      <Hero />
      <AcademicJourney />
      <TechnicalEcosystem />
      <FeaturedProjects />
      <VerifiedSkills />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
