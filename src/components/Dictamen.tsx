import React from 'react';
import { FileText, CheckCircle, Download } from 'lucide-react';

const Dictamen: React.FC = () => {
  const downloadPDF = () => {
    const link = document.createElement('a');
    link.href = '/dictamen-av-espana.pdf';
    link.download = 'Dictamen-Av-España-1640.pdf';
    link.click();
  };

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
                  <div className="flex flex-col items-center text-center">
                    <div className="flex items-center mb-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                      <span className="font-semibold text-gray-900">Expediente:</span>
                    </div>
                    <p className="text-gray-700">039 / D1 / E-2022 / 0212</p>
                  </div>
                  
                  <div className="flex flex-col items-center text-center">
                    <div className="flex items-center mb-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                      <span className="font-semibold text-gray-900">Zonificación:</span>
                    </div>
                    <p className="text-gray-700">Habitacional Plurifamiliar</p>
                  </div>
                </div>
              </div>

              {/* Download Button */}
              <div className="text-center">
                <button
                  onClick={downloadPDF}
                  className="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition-colors duration-300 font-medium"
                  title="Descargar PDF"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Descargar Dictamen PDF
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dictamen;