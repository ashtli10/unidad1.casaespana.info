import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`nav${isScrolled ? ' scrolled' : ''}`} id="nav">
      <div className="nav-logo">Espana <span>1640</span></div>
      <div className={`nav-links${isMobileOpen ? ' mobile-open' : ''}`}>
        <a href="#galeria" onClick={() => setIsMobileOpen(false)}>Galeria</a>
        <a href="#caracteristicas" onClick={() => setIsMobileOpen(false)}>Caracteristicas</a>
        <a href="#ubicacion" onClick={() => setIsMobileOpen(false)}>Ubicacion</a>
        <a href="#plano" onClick={() => setIsMobileOpen(false)}>Plano</a>
        <a
          href="https://wa.me/523336670647?text=Hola%2C%20me%20interesa%20la%20unidad%20en%20Av.%20Espa%C3%B1a%201640"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-cta-link"
          onClick={() => setIsMobileOpen(false)}
        >
          WhatsApp
        </a>
      </div>
      <button
        className="nav-hamburger"
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        aria-label="Menu"
      >
        <span></span><span></span><span></span>
      </button>
    </nav>
  );
};

export default Header;
