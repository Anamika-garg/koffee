import React from 'react';
import { products } from '../data/products';
import { useScrollPosition } from '../hooks/useScrollPosition';

const FeaturedProducts: React.FC = () => {
  const scrollPosition = useScrollPosition();

  return (
    <section id="shop" className="py-20 bg-[#F5E9D3]">
      <div className="container mx-auto px-8 md:px-12 lg:px-16 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#4B2E05] mb-4">Featured Blends</h2>
          <p className="text-[#8B5E3C] max-w-xl mx-auto">
            Discover our carefully curated selection of premium coffee blends,
            sourced from the finest growing regions around the world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {products.map((product, index) => {
            const animationOffset = Math.max(0, Math.min(1, (scrollPosition - 300) / 500));
            const delay = index * 0.1;
            
            return (
              <div 
                key={product.id}
                className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-500 hover:shadow-xl"
                style={{
                  transform: `translateY(${20 * (1 - animationOffset)}px)`,
                  opacity: animationOffset,
                  transition: `transform 0.5s ease ${delay}s, opacity 0.5s ease ${delay}s`
                }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                  {product.isNew && (
                    <div className="absolute top-4 right-4 bg-[#8B5E3C] text-[#F5E9D3] text-xs font-bold px-3 py-1 rounded-full">
                      NEW
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-[#4B2E05]">{product.name}</h3>
                    <span className="text-lg font-semibold text-[#8B5E3C]">${product.price.toFixed(2)}</span>
                  </div>
                  <div className="mb-4">
                    <div className="flex items-center mb-2">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <svg 
                          key={i}
                          className={`w-4 h-4 ${i < product.rating ? 'text-amber-500' : 'text-gray-300'}`}
                          fill="currentColor" 
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                      <span className="text-xs text-gray-500 ml-2">({product.reviewCount})</span>
                    </div>
                    <p className="text-[#4B2E05]/70 text-sm">{product.description}</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <span className="text-xs text-[#8B5E3C] font-medium px-2 py-1 bg-[#8B5E3C]/10 rounded-full mr-2">
                        {product.origin}
                      </span>
                      <span className="text-xs text-[#8B5E3C] font-medium px-2 py-1 bg-[#8B5E3C]/10 rounded-full">
                        {product.roastLevel}
                      </span>
                    </div>
                    <button className="text-[#4B2E05] hover:text-[#8B5E3C] font-medium text-sm transition-colors duration-200">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-[#8B5E3C] text-[#F5E9D3] rounded-md font-medium hover:bg-[#4B2E05] transition-colors duration-300">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;