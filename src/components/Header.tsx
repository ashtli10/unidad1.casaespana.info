import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMenuOpen(false);
  };

  const menuItems = [
    { label: 'Inicio', id: 'hero' },
    { label: 'Detalles', id: 'property-details' },
    { label: 'Galería', id: 'gallery' },
    { label: 'Planos', id: 'blueprints' },
    { label: 'Dictamen', id: 'dictamen' },
    { label: 'Proyecto', id: 'potential' }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white/90 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-lg sm:text-xl font-bold text-gray-900">
              Av. España 1640
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-700 hover:text-yellow-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Contact Button - Desktop */}
          <div className="hidden md:flex items-center">
            <a
              href="tel:+523336670647"
              className="flex items-center text-gray-700 hover:text-yellow-600 transition-colors duration-200"
            >
              <Phone className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">+52 33 3667 0647</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-gray-900 focus:outline-none"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-3 py-2 text-gray-700 hover:text-yellow-600 hover:bg-gray-50 transition-colors duration-200"
                >
                  {item.label}
                </button>
              ))}
              <a
                href="tel:+523336670647"
                className="flex items-center px-3 py-2 text-gray-700 hover:text-yellow-600 hover:bg-gray-50 transition-colors duration-200"
              >
                <Phone className="w-4 h-4 mr-2" />
                <span>+52 33 3667 0647</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;