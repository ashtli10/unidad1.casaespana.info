import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
          {/* Phone */}
          <div className="flex items-center">
            <Phone className="w-5 h-5 mr-2" />
            <a 
              href="tel:+523336670647" 
              className="text-white hover:text-yellow-400 transition-colors duration-200"
            >
              +52 33 3667 0647
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-gray-300">
              © 2025 Propiedad Av. España
            </p>
          </div>

          {/* Whatsapp Button */}
          <div>
            <a
              href="https://w.app/6j0ysx"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-full transition-colors duration-200 transform hover:scale-105"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              <span className="font-medium">Whatsapp</span>
            </a>
          </div>
        </div>

        {/* Mobile Sticky Footer */}
        <div className="fixed bottom-0 left-0 right-0 bg-gray-900 border-t border-gray-700 p-4 sm:hidden z-40">
          <div className="flex items-center justify-center space-x-4">
            <a
              href="tel:+523336670647"
              className="flex-1 flex items-center justify-center bg-gray-800 hover:bg-gray-700 text-white py-3 px-4 rounded-lg transition-colors duration-200"
            >
              <Phone className="w-5 h-5 mr-2" />
              <span>Llamar</span>
            </a>
            <a
              href="https://w.app/6j0ysx"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-lg transition-colors duration-200"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              <span>Whatsapp</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;