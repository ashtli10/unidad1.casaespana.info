import React from 'react';
import { MapPin } from 'lucide-react';

const Map: React.FC = () => {
  // Property coordinates from Google Maps
  const latitude = 20.6630647;
  const longitude = -103.3624524;
  const address = "Avenida España 1640, Moderna, Guadalajara, Jalisco";
  
  // Google Maps Embed URL with satellite view
  const mapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3732.8!2d${longitude}!3d${latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDQwJzI1LjMiTiAxMDPCsDIxJzI3LjQiVw!5e1!3m2!1ses!2smx!4v1620000000000!5m2!1ses!2smx`;

  return (
    <section id="map" className="py-16 sm:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <MapPin className="w-8 h-8 text-purple-600 mr-2" />
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Ubicación
            </h2>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Vista satelital de la propiedad en {address}
          </p>
        </div>

        {/* Map Container */}
        <div className="max-w-6xl mx-auto">
          <div className="rounded-lg overflow-hidden shadow-lg border border-gray-200">
            <iframe
              src={mapUrl}
              width="100%"
              height="600"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa satelital de Avenida España 1640, Moderna, Guadalajara"
              className="w-full"
            />
          </div>
          
          {/* Address Info */}
          <div className="mt-6 text-center">
            <p className="text-gray-700">
              <span className="font-semibold">Dirección:</span> {address}
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Coordenadas: {latitude}, {longitude}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Map;
