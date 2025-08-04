import React, { useState } from 'react';
import { ZoomIn, ZoomOut, RotateCcw } from 'lucide-react';

const Blueprints: React.FC = () => {
  const [zoom, setZoom] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  const zoomIn = () => setZoom(prev => Math.min(prev + 0.2, 3));
  const zoomOut = () => setZoom(prev => Math.max(prev - 0.2, 0.5));
  const resetZoom = () => {
    setZoom(1);
    setPosition({ x: 0, y: 0 });
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setPosition({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const specifications = [
    { label: 'Superficie Total', value: '500 m²' },
    { label: 'Ubicación', value: 'Av. España 4160, Guadalajara' },
    { label: 'Clave Catastral', value: '0051326013' },
    { label: 'Frente Aproximado', value: '20 metros' },
    { label: 'Fondo Aproximado', value: '25 metros' },
    { label: 'Tipo de Terreno', value: 'Urbano residencial' },
    { label: 'Servicios', value: 'Agua, luz, drenaje' },
    { label: 'Zonificación', value: 'Habitacional mixto' }
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
                <div
                  className="cursor-move w-full h-full flex items-center justify-center"
                  onMouseDown={handleMouseDown}
                  onMouseMove={handleMouseMove}
                  onMouseUp={handleMouseUp}
                  onMouseLeave={handleMouseUp}
                >
                  <img
                    src="https://images.pexels.com/photos/8292913/pexels-photo-8292913.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                    alt="Plano arquitectónico del terreno Av. España 4160 - dimensiones y distribución"
                    className="max-w-full max-h-full object-contain transition-transform duration-200"
                    style={{
                      transform: `scale(${zoom}) translate(${position.x / zoom}px, ${position.y / zoom}px)`,
                      cursor: isDragging ? 'grabbing' : 'grab'
                    }}
                    draggable={false}
                  />
                </div>
              </div>
              
              <p className="text-sm text-gray-500 mt-2 text-center">
                Haz clic y arrastra para mover • Usa los botones para hacer zoom
              </p>
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

              <div className="mt-8 p-4 bg-yellow-100 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Información Adicional</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Terreno completamente urbanizado</li>
                  <li>• Acceso directo desde Avenida España</li>
                  <li>• Documentación en regla</li>
                  <li>• Listo para construcción inmediata</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blueprints;