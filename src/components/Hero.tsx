import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToGallery = () => {
    const element = document.getElementById('gallery');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Propiedad en venta Avenida España 4160 Guadalajara - fachada amarilla con bougainvillea morada"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight">
          <span className="block mb-2" style={{ textShadow: '2px 2px 4px rgba(255, 215, 0, 0.5)' }}>
            Propiedad en Venta
          </span>
          <span className="text-yellow-400 block text-2xl sm:text-3xl lg:text-4xl">
            Avenida España 4160, Guadalajara
          </span>
        </h1>
        
        <p className="text-lg sm:text-xl lg:text-2xl text-white mb-8 leading-relaxed max-w-3xl mx-auto" 
           style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.7)' }}>
          Terreno de 500 m² ideal para desarrollo residencial o comercial. 
          Ubicación privilegiada con potencial para ampliación y construcción moderna.
          <span className="block mt-2 text-yellow-300 font-semibold">Precio a consultar</span>
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="https://w.app/6j0ysx"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl w-full sm:w-auto"
          >
            Contactar vía WhatsApp
          </a>
          
          <button
            onClick={scrollToGallery}
            className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 border-2 border-white/50 hover:border-white/70 w-full sm:w-auto"
          >
            Ver Galería
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-8 h-8 text-white/70" />
      </div>
    </section>
  );
};

export default Hero;