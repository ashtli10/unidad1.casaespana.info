import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import StatsBar from './components/StatsBar';
import Plusvalia from './components/Plusvalia';
import Gallery from './components/Gallery';
import Features from './components/Features';
import RoofGarden from './components/RoofGarden';
import Location from './components/Location';
import FloorPlan from './components/FloorPlan';
import CTA from './components/CTA';
import Footer from './components/Footer';
import Lightbox from './components/Lightbox';

function App() {
  useEffect(() => {
    const intObs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
        }
      });
    }, { threshold: 0.15 });

    const observeAll = () => {
      document.querySelectorAll('.reveal:not(.visible)').forEach(el => intObs.observe(el));
    };

    observeAll();

    const mutObs = new MutationObserver(observeAll);
    mutObs.observe(document.body, { childList: true, subtree: true });

    return () => {
      intObs.disconnect();
      mutObs.disconnect();
    };
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <StatsBar />
      <Plusvalia />
      <Gallery />
      <Features />
      <RoofGarden />
      <Location />
      <FloorPlan />
      <CTA />
      <Footer />
      <Lightbox />
    </>
  );
}

export default App;
