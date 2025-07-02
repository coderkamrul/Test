import React from 'react';
import Hero from './components/Hero';
import WhyChooseUs from './components/WhyChooseUs';
import FeaturedOffers from './components/FeaturedOffers';
import Testimonials from './components/Testimonials';
import GetFreeGuide from './components/GetFreeGuide';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <header>
        <Hero />
      </header>
      <main>
        <WhyChooseUs />
        <FeaturedOffers />
        <Testimonials />
        <GetFreeGuide />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
