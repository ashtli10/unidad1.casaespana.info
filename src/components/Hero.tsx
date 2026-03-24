import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/casa-avenida-espana.webp"
          alt="Propiedad en venta Avenida España 1640 Guadalajara - fachada amarilla con bougainvillea morada"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="mb-4 sm:mb-6">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
            <span className="block mb-3 bg-gradient-to-r from-white to-gray-100 bg-clip-text text-transparent" 
                  style={{ textShadow: '0 4px 8px rgba(0, 0, 0, 0.3)' }}>
              Propiedad Premium
            </span>
            <div className="bg-gradient-to-r from-amber-300 via-yellow-300 to-amber-400 bg-clip-text text-transparent text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold leading-tight">
              <div className="flex flex-col space-y-1 items-center">
                <span className="block">AVENIDA ESPAÑA 1640</span>
                <span className="block text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-medium opacity-90">
                  MODERNA • GUADALAJARA, JALISCO
                </span>
                <span className="block text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-amber-300 mt-2">
                  $10,500,000 MXN
                </span>
              </div>
            </div>
          </h1>
        </div>
        
        <p className="text-base sm:text-lg lg:text-xl text-white mb-6 sm:mb-8 leading-relaxed max-w-3xl mx-auto px-2 mt-2 sm:mt-3" 
           style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.7)' }}>
          Terreno de 500 m² con construcción actual de 330.61 m² (planta baja 306.43 m², planta alta 24.18 m²). 
          Frente 10m, fondo 50m. Ubicación privilegiada con potencial para desarrollo residencial o comercial.
        </p>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-8 h-8 text-white/70" />
      </div>
    </section>
  );
};

export default Hero;