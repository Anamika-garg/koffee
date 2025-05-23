import React, { useState, useEffect } from 'react';
import { Coffee, ShoppingBag, Menu, X } from 'lucide-react';
import { Link } from './ui/Link';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#4B2E05] shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center relative w-[90%]">
        <div className="flex items-center">
          <Coffee className={`mr-2 ${isScrolled ? 'text-[#F5E9D3]' : 'text-[#8B5E3C]'}`} />
          <span className={`text-xl font-bold ${isScrolled ? 'text-[#F5E9D3]' : 'text-[#4B2E05]'}`}>
            BREW HAVEN
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {['Home', 'Shop', 'About', 'Contact'].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`relative font-medium transition-colors duration-200 
                ${isScrolled ? 'text-[#F5E9D3]' : 'text-[#4B2E05]'} 
                hover:text-[#8B5E3C] after:absolute after:bottom-0 after:left-0 after:w-0 
                after:h-0.5 after:bg-[#8B5E3C] after:transition-all after:duration-300 
                hover:after:w-full`}
            >
              {item}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <button 
            className={`p-2 rounded-full transition-colors duration-200 
              ${isScrolled ? 'text-[#F5E9D3] hover:bg-[#8B5E3C]/20' : 'text-[#4B2E05] hover:bg-[#F5E9D3]/20'}`}
          >
            <ShoppingBag size={20} />
          </button>
        </div>

        {/* Mobile Navigation Toggle */}
        <button 
          className="md:hidden p-1"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X size={24} className={isScrolled ? 'text-[#F5E9D3]' : 'text-[#4B2E05]'} />
          ) : (
            <Menu size={24} className={isScrolled ? 'text-[#F5E9D3]' : 'text-[#4B2E05]'} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#4B2E05] shadow-lg">
          <nav className="container mx-auto py-4 px-4 flex flex-col space-y-4">
            {['Home', 'Shop', 'About', 'Contact'].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-[#F5E9D3] font-medium py-2 hover:text-[#8B5E3C] transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
            <div className="pt-2 border-t border-[#8B5E3C]/30">
              <button className="flex items-center text-[#F5E9D3] font-medium py-2 hover:text-[#8B5E3C] transition-colors duration-200">
                <ShoppingBag size={18} className="mr-2" />
                Cart
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;