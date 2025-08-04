import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery: React.FC = () => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    {
      src: "https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
      alt: "Vista frontal de la propiedad - fachada amarilla con detalles arquitectónicos en Av. España 4160"
    },
    {
      src: "https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
      alt: "Jardín frontal con bougainvillea morada y palmera"
    },
    {
      src: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
      alt: "Detalle de la reja ornamental blanca de la entrada"
    },
    {
      src: "https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
      alt: "Entrada principal con piso de mosaico ajedrezado"
    },
    {
      src: "https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
      alt: "Letrero de venta azul con código QR para más información"
    },
    {
      src: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
      alt: "Vista lateral del terreno mostrando el potencial de desarrollo"
    }
  ];

  const openLightbox = (index: number = 0) => {
    setCurrentImageIndex(index);
    setIsLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    document.body.style.overflow = 'unset';
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <section id="gallery" className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Galería de Fotos
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explora cada detalle de esta propiedad única en Guadalajara
          </p>
        </div>

        {/* Featured Image */}
        <div className="max-w-4xl mx-auto">
          <div
            className="relative group cursor-pointer overflow-hidden rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-[1.02]"
            onClick={() => openLightbox(0)}
          >
            <img
              src={images[0].src}
              alt={images[0].alt}
              className="w-full h-64 sm:h-80 lg:h-96 object-cover transition-transform duration-700 group-hover:scale-110"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            {/* Overlay Content */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
              <div className="bg-white/95 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-gray-900 font-semibold text-lg">Ver todas las fotos</span>
              </div>
            </div>

            {/* Image Counter Badge */}
            <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
              {images.length} fotos
            </div>

            {/* Bottom Info */}
            <div className="absolute bottom-4 left-4 text-white">
              <p className="text-sm font-medium mb-1">Propiedad Av. España 4160</p>
              <p className="text-xs opacity-90">Haz clic para ver la galería completa</p>
            </div>
          </div>
        </div>
      </div>

      {/* Full-Screen Lightbox */}
      {isLightboxOpen && (
        <div className="fixed inset-0 bg-black z-50 flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-4 bg-black/90 backdrop-blur-sm">
            <div className="text-white">
              <h3 className="font-semibold text-lg">Galería de Fotos</h3>
              <p className="text-sm text-gray-300">
                {currentImageIndex + 1} de {images.length}
              </p>
            </div>
            <button
              onClick={closeLightbox}
              className="text-white hover:text-gray-300 p-2 rounded-full hover:bg-white/10 transition-all duration-200"
              aria-label="Cerrar galería"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Main Image Area */}
          <div className="flex-1 relative flex items-center justify-center p-4">
            <img
              src={images[currentImageIndex].src}
              alt={images[currentImageIndex].alt}
              className="max-w-full max-h-full object-contain rounded-lg"
            />

            {/* Navigation Arrows - Large and Clearly Visible */}
            <button
              onClick={prevImage}
              className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-900 p-3 sm:p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110"
              aria-label="Imagen anterior"
            >
              <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
            </button>
            
            <button
              onClick={nextImage}
              className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-900 p-3 sm:p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110"
              aria-label="Siguiente imagen"
            >
              <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
            </button>
          </div>

          {/* Image Description */}
          <div className="bg-black/90 backdrop-blur-sm p-4 text-center">
            <p className="text-white text-sm sm:text-base max-w-2xl mx-auto">
              {images[currentImageIndex].alt}
            </p>
          </div>

          {/* Thumbnail Navigation */}
          <div className="bg-black/90 backdrop-blur-sm p-4 overflow-x-auto">
            <div className="flex space-x-2 justify-center min-w-max">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => goToImage(index)}
                  className={`relative flex-shrink-0 w-16 h-12 sm:w-20 sm:h-14 rounded-lg overflow-hidden transition-all duration-200 ${
                    index === currentImageIndex
                      ? 'ring-2 ring-yellow-400 ring-offset-2 ring-offset-black scale-110'
                      : 'hover:scale-105 opacity-70 hover:opacity-100'
                  }`}
                >
                  <img
                    src={image.src}
                    alt={`Miniatura ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;