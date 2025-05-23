import React from 'react';
import { Coffee, Leaf, Award } from 'lucide-react';
import { useScrollPosition } from '../hooks/useScrollPosition';

const About: React.FC = () => {
  const scrollPosition = useScrollPosition();
  const animationTriggerPoint = 1200;
  const animationOffset = Math.max(0, Math.min(1, (scrollPosition - animationTriggerPoint) / 400));

  return (
    <section id="about" className="py-20 bg-[#4B2E05] text-[#F5E9D3]">
      <div className="container mx-auto px-4 relative w-[90%]">
        <div className="flex flex-col md:flex-row items-center">
          <div 
            className="w-full md:w-1/2 mb-10 md:mb-0 md:pr-12"
            style={{
              transform: `translateX(${-50 * (1 - animationOffset)}px)`,
              opacity: animationOffset,
              transition: 'transform 0.6s ease-out, opacity 0.6s ease-out',
            }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Coffee Story</h2>
            <p className="mb-6 text-[#F5E9D3]/90 leading-relaxed">
              Founded in 2018, Brew Haven began with a simple mission: to serve exceptional coffee 
              while promoting sustainability and ethical sourcing practices. Our journey started in a 
              small corner shop and has grown into a beloved destination for coffee enthusiasts.
            </p>
            <p className="mb-8 text-[#F5E9D3]/90 leading-relaxed">
              We travel the world to find the perfect beans, building direct relationships with farmers 
              and ensuring fair compensation for their craft. Every cup we serve carries their story and passion.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex flex-col items-center text-center p-4 bg-[#8B5E3C]/30 rounded-lg">
                <Coffee size={32} className="mb-2" />
                <h3 className="text-lg font-semibold mb-1">Artisanal Roasting</h3>
                <p className="text-sm text-[#F5E9D3]/80">Small-batch for perfect flavor</p>
              </div>
              
              <div className="flex flex-col items-center text-center p-4 bg-[#8B5E3C]/30 rounded-lg">
                <Leaf size={32} className="mb-2" />
                <h3 className="text-lg font-semibold mb-1">Sustainable</h3>
                <p className="text-sm text-[#F5E9D3]/80">Eco-friendly practices</p>
              </div>
              
              <div className="flex flex-col items-center text-center p-4 bg-[#8B5E3C]/30 rounded-lg">
                <Award size={32} className="mb-2" />
                <h3 className="text-lg font-semibold mb-1">Award Winning</h3>
                <p className="text-sm text-[#F5E9D3]/80">Recognized quality</p>
              </div>
            </div>
          </div>
          
          <div 
            className="w-full md:w-1/2"
            style={{
              transform: `translateX(${50 * (1 - animationOffset)}px)`,
              opacity: animationOffset,
              transition: 'transform 0.6s ease-out, opacity 0.6s ease-out',
            }}
          >
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/683039/pexels-photo-683039.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
                alt="Coffee beans being roasted" 
                className="w-full h-auto rounded-lg shadow-2xl"
              />
              
              <div className="absolute -bottom-6 -left-6 bg-[#8B5E3C] p-6 rounded-lg shadow-xl max-w-xs">
                <p className="text-lg italic font-light">
                  "We believe that great coffee can change the world, one cup at a time."
                </p>
                <p className="text-right mt-2 font-medium">— Maria Chen, Founder</p>
              </div>
              
              <div className="absolute -top-4 -right-4 bg-[#F5E9D3] text-[#4B2E05] p-4 rounded-full shadow-lg flex items-center justify-center">
                <div className="text-center">
                  <span className="block text-3xl font-bold">5+</span>
                  <span className="text-sm">Years of Excellence</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;