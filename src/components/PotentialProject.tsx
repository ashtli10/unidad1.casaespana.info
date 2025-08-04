import React, { useState, useEffect } from 'react';
import { Building2, Users, TrendingUp, ChevronLeft, ChevronRight } from 'lucide-react';

const PotentialProject: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    '/potencial/1.jpg',
    '/potencial/2.jpg', 
    '/potencial/3.jpeg',
    '/potencial/4.jpg'
  ];

  // Auto-advance slideshow every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const features = [
    {
      icon: Building2,
      title: 'Desarrollo Vertical',
      description: 'Posibilidad de hasta 5-7 pisos según zonificación local'
    },
    {
      icon: Users,
      title: 'Uso Mixto',
      description: 'Apto para desarrollo residencial, comercial o mixto'
    }
  ];

  return (
    <section id="potential" className="py-16 sm:py-20 bg-gradient-to-br from-purple-50 via-white to-yellow-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Proyecto Potencial
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Visualiza las posibilidades de desarrollo en esta ubicación privilegiada
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
          {/* Project Visualization - Slideshow */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="relative h-80 sm:h-96 overflow-hidden rounded-lg shadow-xl bg-white">
                <img
                  src={images[currentImageIndex]}
                  alt={`Proyecto potencial - imagen ${currentImageIndex + 1}`}
                  className="w-full h-full object-contain transition-opacity duration-500"
                  loading="lazy"
                />
                
                {/* Navigation arrows */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200"
                  aria-label="Imagen anterior"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200"
                  aria-label="Siguiente imagen"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
                
                {/* Slide indicators */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-200 ${
                        index === currentImageIndex ? 'bg-purple-600' : 'bg-gray-400'
                      }`}
                      aria-label={`Ir a imagen ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
              
              <div className="absolute bottom-4 left-4 text-gray-800 bg-white/80 px-2 py-1 rounded">
                <p className="text-sm font-medium">Proyecto Potencial</p>
                <p className="text-xs opacity-75">Imagen {currentImageIndex + 1} de {images.length}</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Imagina las Posibilidades
            </h3>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              La ubicación estratégica en Avenida España permite ampliaciones para 
              proyectos residenciales multifamiliares o desarrollos comerciales mixtos, 
              aprovechando la excelente conectividad y servicios de la zona.
            </p>
            <p className="text-gray-600 mb-8">
              Existen planos ya hechos para un proyecto de desarrollo vertical de 9 a 13 departamentos, con estacionamiento subterráneo, jardines y áreas comunes. 
              Este proyecto aprovecha al máximo el terreno de 500 m², permitiendo un uso eficiente del espacio y maximizando el retorno de inversión.
              Este proyecto cumple con todos los requisitos del Plan Parcial de la zona, asegurando que se ajusta a las normativas locales y aprovecha al máximo el potencial del terreno.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3 p-4 bg-white rounded-lg shadow-sm">
                  <div className="flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">{feature.title}</h4>
                    <p className="text-gray-600 text-xs mt-1">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Investment Highlights */}
        <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
            Ventajas de Inversión
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-lg font-bold text-yellow-600">500m²</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Área de Terreno</h4>
              <p className="text-gray-600 text-sm">Terreno de 500 m² ideal para proyectos ambiciosos</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-8 h-8 text-purple-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Ubicación Premium</h4>
              <p className="text-gray-600 text-sm">Avenida España - zona de alto crecimiento urbano</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Alto Potencial</h4>
              <p className="text-gray-600 text-sm">ROI proyectado superior al promedio del mercado</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PotentialProject;