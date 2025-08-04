import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import Blueprints from './components/Blueprints';
import Dictamen from './components/Dictamen';
import PotentialProject from './components/PotentialProject';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Gallery />
      <Blueprints />
      <Dictamen />
      <PotentialProject />
      <Footer />
    </div>
  );
}

export default App;