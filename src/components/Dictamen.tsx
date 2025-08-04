import React from 'react';
import { FileText, CheckCircle, MapPin } from 'lucide-react';

const Dictamen: React.FC = () => {
  return (
    <section id="dictamen" className="py-16 sm:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Dictamen Oficial
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Documento oficial que certifica el trazo, usos y destinos del predio
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-purple-600 to-purple-700 px-6 py-4">
              <div className="flex items-center text-white">
                <FileText className="w-6 h-6 mr-3" />
                <h3 className="text-xl font-bold">Centro Metropolitano - Dictamen de Trazo</h3>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 sm:p-8">
              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <h4 className="text-lg font-bold text-gray-900 mb-4 text-center">
                  CENTRO METROPOLITANO<br />
                  DICTAMEN DE TRAZO, USOS Y DESTINOS ESPECÍFICOS
                </h4>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-semibold text-gray-900">Expediente:</span>
                        <p className="text-gray-700">039 / D1 / E-2022 / 02120</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <MapPin className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-semibold text-gray-900">Ubicación:</span>
                        <p className="text-gray-700">AV. ESPAÑA 4160, GUADALAJARA</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-semibold text-gray-900">Superficie:</span>
                        <p className="text-gray-700">500.00 M²</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-semibold text-gray-900">Clave Catastral:</span>
                        <p className="text-gray-700">0051326013</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-semibold text-gray-900">Propósito:</span>
                        <p className="text-gray-700">Obra de Ampliación</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-semibold text-gray-900">Transporte:</span>
                        <p className="text-gray-700">Actrusma del Surlo</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-l-4 border-purple-500 pl-6 mb-6">
                <h4 className="font-bold text-gray-900 mb-2">Interesados:</h4>
                <ul className="text-gray-700 space-y-1">
                  <li>• Fernando Acosta Olver</li>
                  <li>• Alfredo Grajel Ramirez Franco</li>
                </ul>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-green-800 mb-1">Dictamen Aprobado</h4>
                    <p className="text-green-700 text-sm">
                      Este documento certifica oficialmente el trazo, usos y destinos específicos 
                      del predio, habilitándolo para proyectos de ampliación y desarrollo urbano 
                      conforme a la normatividad vigente de Guadalajara.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dictamen;