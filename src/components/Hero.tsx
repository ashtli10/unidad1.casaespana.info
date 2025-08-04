import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
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
            AV. ESPAÑA 1640, MODERNA, 44190 GUADALAJARA, JALISCO
          </span>
        </h1>
        
        <p className="text-lg sm:text-xl lg:text-2xl text-white mb-8 leading-relaxed max-w-3xl mx-auto" 
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