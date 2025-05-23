import React, { useState } from 'react';
import { Coffee } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formState);
  };

  return (
    <section id='contact' className="py-20 bg-[#F5E9D3] relative overflow-hidden min-h-screen flex items-center">
      {/* Floating coffee beans or subtle decorative elements */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 rounded-full border-4 border-[#8B5E3C] transform rotate-45 animate-floatingSlow" />
        <div className="absolute bottom-20 right-10 w-16 h-16 rounded-full border-4 border-[#4B2E05] transform -rotate-12 animate-floatingSlowReverse" />
        <div className="absolute top-1/3 left-1/4 w-12 h-12">
          <Coffee className="text-[#8B5E3C] w-full h-full animate-floating" />
        </div>
        <div className="absolute bottom-1/4 right-1/3 w-10 h-10">
          <Coffee className="text-[#4B2E05] w-full h-full animate-floatingReverse" />
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-3xl relative z-10 w-full">
        <div className="text-center mb-12">
          <Coffee size={48} className="text-[#4B2E05] mx-auto mb-4" />
          <h2 className="text-4xl font-bold text-[#4B2E05] mb-2">Get in Touch</h2>
          <p className="text-[#8B5E3C] text-lg max-w-md mx-auto">
            We'd love to hear from you. Send us a message and we'll get back to you soon.
          </p>
        </div>

        {/* Full width form */}
        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-10 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="group">
              <label htmlFor="name" className="block text-sm font-medium text-[#4B2E05] mb-2 group-hover:text-[#8B5E3C] transition-colors">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                value={formState.name}
                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border-2 border-[#8B5E3C]/20 focus:outline-none focus:border-[#8B5E3C] transition-colors"
                placeholder="John Doe"
                required
              />
            </div>
            <div className="group">
              <label htmlFor="email" className="block text-sm font-medium text-[#4B2E05] mb-2 group-hover:text-[#8B5E3C] transition-colors">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={formState.email}
                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border-2 border-[#8B5E3C]/20 focus:outline-none focus:border-[#8B5E3C] transition-colors"
                placeholder="john@example.com"
                required
              />
            </div>
          </div>

          <div className="mb-6 group">
            <label htmlFor="subject" className="block text-sm font-medium text-[#4B2E05] mb-2 group-hover:text-[#8B5E3C] transition-colors">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              value={formState.subject}
              onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border-2 border-[#8B5E3C]/20 focus:outline-none focus:border-[#8B5E3C] transition-colors"
              placeholder="How can we help?"
              required
            />
          </div>

          <div className="mb-6 group">
            <label htmlFor="message" className="block text-sm font-medium text-[#4B2E05] mb-2 group-hover:text-[#8B5E3C] transition-colors">
              Your Message
            </label>
            <textarea
              id="message"
              rows={5}
              value={formState.message}
              onChange={(e) => setFormState({ ...formState, message: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border-2 border-[#8B5E3C]/20 focus:outline-none focus:border-[#8B5E3C] transition-colors"
              placeholder="Write your message here..."
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#4B2E05] text-[#F5E9D3] py-4 rounded-lg font-semibold hover:bg-[#8B5E3C] transition-all duration-300 transform hover:scale-[1.02] focus:ring-4 focus:ring-[#8B5E3C]/30"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Add CSS animations */}
      <style>{`
        @keyframes floating {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        @keyframes floatingReverse {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(15px); }
        }
        @keyframes floatingSlow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-7px); }
        }
        @keyframes floatingSlowReverse {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(7px); }
        }
        .animate-floating {
          animation: floating 4s ease-in-out infinite;
        }
        .animate-floatingReverse {
          animation: floatingReverse 4s ease-in-out infinite;
        }
        .animate-floatingSlow {
          animation: floatingSlow 6s ease-in-out infinite;
        }
        .animate-floatingSlowReverse {
          animation: floatingSlowReverse 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Contact;
