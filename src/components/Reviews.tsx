import React, { useState, useEffect } from 'react';
import { reviews } from '../data/reviews';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const Reviews: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        handleNext();
      }, 5000);
      
      return () => clearInterval(interval);
    }
  }, [isPaused, activeIndex]);

  return (
    <section className="py-20 bg-[#F5E9D3]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#4B2E05] mb-4">What Our Customers Say</h2>
          <p className="text-[#8B5E3C] max-w-xl mx-auto">
            Discover why coffee enthusiasts choose Brew Haven for their daily brew.
          </p>
        </div>
        
        <div 
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {reviews.map((review) => (
                <div 
                  key={review.id} 
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-white rounded-lg shadow-lg p-8 md:p-10">
                    <div className="flex items-center mb-6">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star 
                          key={i}
                          size={18} 
                          className={`${i < review.rating ? 'text-amber-500 fill-amber-500' : 'text-gray-300'} mr-1`} 
                        />
                      ))}
                    </div>
                    
                    <p className="text-[#4B2E05] text-lg italic mb-6 leading-relaxed">
                      "{review.text}"
                    </p>
                    
                    <div className="flex items-center">
                      <img 
                        src={review.avatar} 
                        alt={review.name} 
                        className="w-12 h-12 rounded-full object-cover mr-4"
                      />
                      <div>
                        <h4 className="font-semibold text-[#4B2E05]">{review.name}</h4>
                        <p className="text-sm text-[#8B5E3C]">{review.location}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <button 
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white text-[#4B2E05] rounded-full p-3 shadow-md hover:bg-[#F5E9D3] transition-colors duration-200 z-10"
          >
            <ChevronLeft size={20} />
          </button>
          
          <button 
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white text-[#4B2E05] rounded-full p-3 shadow-md hover:bg-[#F5E9D3] transition-colors duration-200 z-10"
          >
            <ChevronRight size={20} />
          </button>
          
          <div className="flex justify-center mt-8">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full mx-1 transition-colors duration-200 ${
                  index === activeIndex ? 'bg-[#4B2E05]' : 'bg-[#8B5E3C]/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;