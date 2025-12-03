import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import VehicleServiceSection from './components/VehicleServiceSection';
import About from './components/About';
import Features from './components/Features';
import ServiceProviders from './components/ServiceProviders';
import Guarantees from './components/Guarantees';

import Contact from './components/Contact';



function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero  />
        <VehicleServiceSection/>
           <Features />
           <ServiceProviders />
        <About />
     <Guarantees />
        
        
        
        <Contact />
      </main>
      
    </div>
  );
}

export default App;