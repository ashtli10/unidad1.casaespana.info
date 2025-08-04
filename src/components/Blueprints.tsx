import React, { useState } from 'react';
import { ZoomIn, ZoomOut, RotateCcw, Download } from 'lucide-react';

const Blueprints: React.FC = () => {
  const [zoom, setZoom] = useState(1);

  const zoomIn = () => setZoom(prev => Math.min(prev + 0.2, 3));
  const zoomOut = () => setZoom(prev => Math.max(prev - 0.2, 0.5));
  const resetZoom = () => {
    setZoom(1);
  };

  const downloadPDF = () => {
    const link = document.createElement('a');
    link.href = '/planos-av-espana.pdf';
    link.download = 'Planos-Av-España-1640.pdf';
    link.click();
  };

  const specifications = [
    { label: 'Área de Terreno', value: '500 m²' },
    { label: 'Planta Baja', value: '306.43 m²' },
    { label: 'Planta Alta', value: '24.18 m²' },
    { label: 'Total Construcción', value: '330.61 m²' },
    { label: 'Ubicación', value: 'AV. ESPAÑA 1640, MODERNA, 44190 GUADALAJARA, JALISCO' },
    { label: 'Frente', value: '10 metros' },
    { label: 'Fondo', value: '50 metros' }
  ];

  return (
    <section id="blueprints" className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Planos y Dimensiones
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Detalles técnicos y dimensiones oficiales del terreno
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Blueprint Viewer */}
          <div className="order-2 lg:order-1">
            <div className="bg-gray-50 rounded-lg p-4 border-2 border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Plano Arquitectónico</h3>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={zoomOut}
                    className="p-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                    title="Alejar"
                  >
                    <ZoomOut className="w-4 h-4" />
                  </button>
                  <button
                    onClick={resetZoom}
                    className="p-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                    title="Restablecer vista"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>
                  <button
                    onClick={zoomIn}
                    className="p-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                    title="Acercar"
                  >
                    <ZoomIn className="w-4 h-4" />
                  </button>
                </div>
              </div>
              
              <div className="relative bg-white rounded-lg overflow-hidden" style={{ height: '400px' }}>
                <div className="w-full h-full flex items-center justify-center">
                  <img
                    src="/planos-avenida-espana.webp"
                    alt="Plano arquitectónico del terreno Av. España 1640 - dimensiones y distribución"
                    className="max-w-full max-h-full object-contain transition-transform duration-200"
                    style={{
                      transform: `scale(${zoom})`
                    }}
                    draggable={false}
                  />
                </div>
              </div>
              
              <div className="text-center mt-4">
                <button
                  onClick={downloadPDF}
                  className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors duration-300 font-medium shadow-lg hover:shadow-xl"
                  title="Descargar PDF"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Descargar Plano Arquitectónico PDF
                </button>
              </div>
            </div>
          </div>

          {/* Specifications */}
          <div className="order-1 lg:order-2">
            <div className="bg-gradient-to-br from-yellow-50 to-white rounded-lg p-6 border border-yellow-200">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Especificaciones Técnicas</h3>
              
              <div className="space-y-4">
                {specifications.map((spec, index) => (
                  <div key={index} className="flex items-center justify-between py-3 border-b border-gray-200 last:border-b-0">
                    <span className="font-medium text-gray-700">{spec.label}:</span>
                    <span className="text-gray-900 font-semibold">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blueprints;