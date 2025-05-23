import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedProducts from './components/FeaturedProducts';
import About from './components/About';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  // Update the document title
  useEffect(() => {
    document.title = 'Brew Haven | Premium Coffee';
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <Hero />
      <FeaturedProducts />
      <About />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;