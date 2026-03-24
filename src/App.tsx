import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import PropertyDetails from './components/PropertyDetails';
import Gallery from './components/Gallery';
import Blueprints from './components/Blueprints';
import Dictamen from './components/Dictamen';
import PotentialProject from './components/PotentialProject';
import Map from './components/Map';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <PropertyDetails />
      <Gallery />
      <Blueprints />
      <Dictamen />
      <PotentialProject />
      <Map />
      <Footer />
    </div>
  );
}

export default App;