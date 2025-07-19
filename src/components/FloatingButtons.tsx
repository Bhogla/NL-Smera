import React from 'react';
import { Phone } from 'lucide-react';

const FloatingButtons = () => {
  return (
    <>
      {/* Phone Button */}
      <a
        href="tel:+916396266476"
        className="fixed left-6 bottom-6 bg-steel-blue-800 hover:bg-steel-blue-900 text-white p-4 rounded-full shadow-lg transition-all hover:scale-110"
        aria-label="Call us"
      >
        <Phone className="h-6 w-6" />
      </a>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/916396266476"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed right-6 bottom-6 bg-forest-green-600 hover:bg-forest-green-700 text-white p-4 rounded-full shadow-lg transition-all hover:scale-110"
        aria-label="Message us on WhatsApp"
      >
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" className="h-6 w-6" />
      </a>
    </>
  );
};

export default FloatingButtons;