import React, { useEffect, useRef } from 'react';
import { BackgroundAnimation } from './BackgroundAnimation';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleParallax = () => {
      if (heroRef.current) {
        const scrollValue = window.scrollY;
        const opacity = Math.max(1 - scrollValue / 700, 0);
        const transform = `translateY(${scrollValue * 0.3}px)`;
        
        heroRef.current.style.opacity = opacity.toString();
        heroRef.current.style.transform = transform;
      }
    };

    window.addEventListener('scroll', handleParallax);
    return () => window.removeEventListener('scroll', handleParallax);
  }, []);

  return (
    <section id="home" className="container relative min-h-screen flex items-center overflow-hidden relative min-h-screen flex items-center overflow-hidden">
      <BackgroundAnimation />
      
      <div className="absolute inset-0 bg-gradient-to-b from-[#F5E9D3]/40 to-[#F5E9D3]/90 z-10"></div>
      
      <div className="container mx-auto px-4 pt-20 relative z-20 items-center justify-center flex">
        <div className="flex flex-col md:flex-row items-center w-[90%] relative">
          <div className="w-full md:w-1/2 mb-10 md:mb-0" ref={heroRef}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#4B2E05] mb-4">
              Discover the Perfect <span className="text-[#8B5E3C]">Brew</span>
            </h1>
            <p className="text-lg md:text-xl text-[#4B2E05]/80 mb-8 max-w-md">
              Handcrafted coffee made with passion, sourced from sustainable farms around the world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-3 bg-[#4B2E05] text-[#F5E9D3] rounded-md font-medium hover:bg-[#8B5E3C] transition-colors duration-300">
                Shop Now
              </button>
              <button className="px-8 py-3 bg-transparent border-2 border-[#4B2E05] text-[#4B2E05] rounded-md font-medium hover:bg-[#4B2E05]/10 transition-colors duration-300">
                Our Menu
              </button>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative w-80 h-80 md:w-96 md:h-96">
              <img 
                src="https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
                alt="A beautiful cup of coffee on a wooden table" 
                className="w-full h-full object-cover rounded-full shadow-2xl transform transition-transform duration-700 hover:scale-105"
                style={{ objectPosition: 'center 30%' }}
              />
              <div className="absolute -bottom-4 -right-4 bg-[#8B5E3C] text-[#F5E9D3] rounded-full py-4 px-6 shadow-lg">
                <span className="block text-sm">From</span>
                <span className="block text-2xl font-bold">$4.99</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;