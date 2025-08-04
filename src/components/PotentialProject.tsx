import React from 'react';
import { Building2, Users, Download, TrendingUp } from 'lucide-react';

const PotentialProject: React.FC = () => {
  const downloadPotentialExamples = () => {
    // Create downloads for all files in the potencial folder
    const files = [
      { name: 'ejemplo1.jpg', url: '/potencial/ejemplo1.jpg' },
      { name: 'ejemplo2.jpg', url: '/potencial/ejemplo2.jpg' },
      { name: 'ejemplo3.jpeg', url: '/potencial/ejemplo3.jpeg' }
    ];
    
    files.forEach((file, index) => {
      setTimeout(() => {
        const link = document.createElement('a');
        link.href = file.url;
        link.download = `Proyecto-Potencial-${file.name}`;
        link.click();
      }, index * 500); // Delay each download by 500ms
    });
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
          {/* Project Visualization */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <img
                src="/proyecto-potencial-sketch.jpg"
                alt="Proyecto conceptual - esquema de desarrollo potencial para el terreno"
                className="w-full h-80 sm:h-96 object-cover rounded-lg shadow-xl"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-sm font-medium">Proyecto Potencial</p>
                <p className="text-xs opacity-90">Esquema conceptual</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Imagina las Posibilidades
            </h3>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Este terreno ofrece un gran potencial para desarrollo. Imagina construir 
              un edificio moderno de varios pisos con terrazas verdes, apartamentos de 
              lujo y espacios sostenibles.
            </p>
            <p className="text-gray-600 mb-8">
              La ubicación estratégica en Avenida España permite ampliaciones para 
              proyectos residenciales multifamiliares o desarrollos comerciales mixtos, 
              aprovechando la excelente conectividad y servicios de la zona.
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

            <button
              onClick={downloadPotentialExamples}
              className="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 transform hover:scale-105"
            >
              <Download className="w-5 h-5 mr-2" />
              Descargar Ejemplos del Proyecto
            </button>
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