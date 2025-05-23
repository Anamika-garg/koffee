import React from 'react';
import { Coffee, Facebook, Instagram, Twitter, Mail } from 'lucide-react';
import { Link } from './ui/Link';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-[#4B2E05] text-[#F5E9D3] pt-16 pb-8">
      <div className="container mx-auto px-4 relative w-[90%]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-4">
              <Coffee className="mr-2" />
              <span className="text-xl font-bold">BREW HAVEN</span>
            </div>
            <p className="text-[#F5E9D3]/80 mb-6 max-w-xs">
              Handcrafted coffee, sustainably sourced and roasted to perfection.
              Experience the difference with every cup.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-9 h-9 rounded-full bg-[#8B5E3C] flex items-center justify-center transition-colors duration-300 hover:bg-[#F5E9D3] hover:text-[#4B2E05]"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="#" 
                className="w-9 h-9 rounded-full bg-[#8B5E3C] flex items-center justify-center transition-colors duration-300 hover:bg-[#F5E9D3] hover:text-[#4B2E05]"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="#" 
                className="w-9 h-9 rounded-full bg-[#8B5E3C] flex items-center justify-center transition-colors duration-300 hover:bg-[#F5E9D3] hover:text-[#4B2E05]"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'Shop', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    href={`#${item.toLowerCase()}`}
                    className="text-[#F5E9D3]/80 hover:text-[#F5E9D3] transition-colors duration-200"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Shop</h3>
            <ul className="space-y-2">
              {['All Products', 'Bestsellers', 'New Arrivals', 'Coffee Equipment', 'Gift Cards'].map((item) => (
                <li key={item}>
                  <a 
                    href="#shop" 
                    className="text-[#F5E9D3]/80 hover:text-[#F5E9D3] transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-[#F5E9D3]/80 mb-4">
              1234 Coffee Street<br />
              Seattle, WA 98101
            </p>
            <p className="flex items-center text-[#F5E9D3]/80 mb-2">
              <Mail size={16} className="mr-2" />
              hello@brewhaven.com
            </p>
            <div className="mt-6">
              <h4 className="font-medium mb-2">Subscribe to our newsletter</h4>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="bg-[#8B5E3C]/30 text-[#F5E9D3] px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-[#F5E9D3]/50 w-full"
                />
                <button className="bg-[#8B5E3C] px-4 py-2 rounded-r-md hover:bg-[#F5E9D3] hover:text-[#4B2E05] transition-colors duration-300">
                  Join
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-[#8B5E3C]/30 text-center text-[#F5E9D3]/60 text-sm">
          <p>© {new Date().getFullYear()} Brew Haven. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <a href="#" className="hover:text-[#F5E9D3] transition-colors duration-200">Privacy Policy</a>
            <a href="#" className="hover:text-[#F5E9D3] transition-colors duration-200">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;