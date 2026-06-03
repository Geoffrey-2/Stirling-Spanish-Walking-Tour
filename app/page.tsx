import HeroSection from './components/HeroSection'
import IntroSection from './components/IntroSection'
import StoriesSection from './components/StoriesSection'
import RouteSection from './components/RouteSection'
import PullQuoteSection from './components/PullQuoteSection'
import PracticalSection from './components/PracticalSection'
import Footer from './components/Footer'

export default function Home() {
  return (
    <>
      <HeroSection />
      <IntroSection />
      <StoriesSection />
      <RouteSection />
      <PullQuoteSection />
      <PracticalSection />
      <Footer />
    </>
  )
}
