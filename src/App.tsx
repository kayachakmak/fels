import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { Hero } from './components/sections/Hero'
import { Marquee } from './components/sections/Marquee'
import { Solution } from './components/sections/Solution'
import { Industries } from './components/sections/Industries'
import { BeyondVoice } from './components/sections/BeyondVoice'
import { WhyFels } from './components/sections/WhyFels'
import { HowItWorks } from './components/sections/HowItWorks'
import { FinalCta } from './components/sections/FinalCta'

export function App() {
  return (
    <div className="min-h-screen bg-bg-primary">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Solution />
        <BeyondVoice />
        <WhyFels />
        <Industries />
        <HowItWorks />
        <FinalCta />
      </main>
      <Footer />
    </div>
  )
}
