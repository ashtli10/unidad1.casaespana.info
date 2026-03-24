import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery: React.FC = () => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [preloadedImages, setPreloadedImages] = useState<Set<number>>(new Set());
  const [images, setImages] = useState<Array<{src: string, alt: string}>>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Dynamically load images from /fotos/ folder
  useEffect(() => {
    const loadImages = async () => {
      const imageList: Array<{src: string, alt: string, order: number}> = [];
      
      // Use a more efficient approach: check smaller batches and stop early
      const maxImages = 40; // Reduce from 50 to 40 for faster loading
      const batchSize = 3; // Check 3 images at a time
      
      for (let i = 1; i <= maxImages; i += batchSize) {
        const batch = [];
        
        // Check integer numbers in batch
        for (let j = i; j < i + batchSize && j <= maxImages; j++) {
          batch.push(checkAndAddImage(`/fotos/${j}.webp`, ``, j));
          
          // Check decimal variations for this number
          for (let decimal = 1; decimal <= 9; decimal++) {
            batch.push(checkAndAddImage(`/fotos/${j}.${decimal}.webp`, ``, j + (decimal / 10)));
          }
        }
        
        // Process batch with timeout for faster response
        const batchResults = await Promise.allSettled(
          batch.map(promise => 
            Promise.race([
              promise,
              new Promise((_, reject) => setTimeout(() => reject(new Error('timeout')), 2000)) // 2s timeout per image
            ])
          )
        );
        
        // Add successful results
        batchResults.forEach(result => {
          if (result.status === 'fulfilled' && result.value !== null && result.value !== undefined) {
            imageList.push(result.value as {src: string, alt: string, order: number});
          }
        });
        
        // If we found images in this batch, continue; otherwise break early
        const foundInBatch = batchResults.some(result => result.status === 'fulfilled' && result.value !== null);
        if (!foundInBatch && i > 5) { // Give first 5 numbers a chance
          break;
        }
      }
      
      // Sort images by order and remove the order property
      const sortedImages = imageList
        .sort((a, b) => a.order - b.order)
        .map(({src, alt}) => ({src, alt}));
      
      setImages(sortedImages);
      setIsLoading(false);
    };

    const checkAndAddImage = async (imagePath: string, alt: string, order: number): Promise<{src: string, alt: string, order: number} | null> => {
      try {
        const exists = await checkImageExists(imagePath);
        if (exists) {
          return { src: imagePath, alt, order };
        }
        return null;
      } catch {
        return null;
      }
    };

    const checkImageExists = (imagePath: string): Promise<boolean> => {
      return new Promise((resolve) => {
        const img = new Image();
        const timeout = setTimeout(() => {
          img.onload = null;
          img.onerror = null;
          resolve(false);
        }, 1500); // 1.5s timeout per image check
        
        img.onload = () => {
          clearTimeout(timeout);
          resolve(true);
        };
        img.onerror = () => {
          clearTimeout(timeout);
          resolve(false);
        };
        img.src = imagePath;
      });
    };

    loadImages();
  }, []);

  const openLightbox = (index: number = 0) => {
    setCurrentImageIndex(index);
    setIsLightboxOpen(true);
    document.body.style.overflow = 'hidden';
    // Preload adjacent images for smooth navigation
    preloadAdjacentImages(index);
    
    // Center the initial thumbnail after lightbox opens
    setTimeout(() => {
      const thumbnailContainer = document.querySelector('.thumbnail-container');
      const selectedThumbnail = document.querySelector(`[data-thumbnail-index="${index}"]`);
      
      if (thumbnailContainer && selectedThumbnail) {
        const containerWidth = thumbnailContainer.clientWidth;
        const thumbnailLeft = (selectedThumbnail as HTMLElement).offsetLeft;
        const thumbnailWidth = (selectedThumbnail as HTMLElement).offsetWidth;
        
        const scrollLeft = thumbnailLeft - (containerWidth / 2) + (thumbnailWidth / 2);
        
        thumbnailContainer.scrollTo({
          left: scrollLeft,
          behavior: 'smooth'
        });
      }
    }, 100); // Small delay to ensure DOM is ready
  };

  const preloadAdjacentImages = (currentIndex: number) => {
    const indicesToPreload = [
      currentIndex - 1,
      currentIndex + 1,
      currentIndex - 2,
      currentIndex + 2
    ].filter(i => i >= 0 && i < images.length && !preloadedImages.has(i));

    indicesToPreload.forEach(index => {
      const img = new Image();
      img.onload = () => {
        setPreloadedImages(prev => new Set([...prev, index]));
      };
      img.src = images[index].src;
    });
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    document.body.style.overflow = 'unset';
  };

  const nextImage = () => {
    const newIndex = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(newIndex);
    preloadAdjacentImages(newIndex);
    
    // Auto-scroll to center the thumbnail
    setTimeout(() => {
      const thumbnailContainer = document.querySelector('.thumbnail-container');
      const selectedThumbnail = document.querySelector(`[data-thumbnail-index="${newIndex}"]`);
      
      if (thumbnailContainer && selectedThumbnail) {
        const containerWidth = thumbnailContainer.clientWidth;
        const thumbnailLeft = (selectedThumbnail as HTMLElement).offsetLeft;
        const thumbnailWidth = (selectedThumbnail as HTMLElement).offsetWidth;
        
        const scrollLeft = thumbnailLeft - (containerWidth / 2) + (thumbnailWidth / 2);
        
        thumbnailContainer.scrollTo({
          left: scrollLeft,
          behavior: 'smooth'
        });
      }
    }, 0);
  };

  const prevImage = () => {
    const newIndex = (currentImageIndex - 1 + images.length) % images.length;
    setCurrentImageIndex(newIndex);
    preloadAdjacentImages(newIndex);
    
    // Auto-scroll to center the thumbnail
    setTimeout(() => {
      const thumbnailContainer = document.querySelector('.thumbnail-container');
      const selectedThumbnail = document.querySelector(`[data-thumbnail-index="${newIndex}"]`);
      
      if (thumbnailContainer && selectedThumbnail) {
        const containerWidth = thumbnailContainer.clientWidth;
        const thumbnailLeft = (selectedThumbnail as HTMLElement).offsetLeft;
        const thumbnailWidth = (selectedThumbnail as HTMLElement).offsetWidth;
        
        const scrollLeft = thumbnailLeft - (containerWidth / 2) + (thumbnailWidth / 2);
        
        thumbnailContainer.scrollTo({
          left: scrollLeft,
          behavior: 'smooth'
        });
      }
    }, 0);
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
    preloadAdjacentImages(index);
    
    // Scroll to center the selected thumbnail
    setTimeout(() => {
      const thumbnailContainer = document.querySelector('.thumbnail-container');
      const selectedThumbnail = document.querySelector(`[data-thumbnail-index="${index}"]`);
      
      if (thumbnailContainer && selectedThumbnail) {
        const containerWidth = thumbnailContainer.clientWidth;
        const thumbnailLeft = (selectedThumbnail as HTMLElement).offsetLeft;
        const thumbnailWidth = (selectedThumbnail as HTMLElement).offsetWidth;
        
        // Calculate the scroll position to center the thumbnail
        const scrollLeft = thumbnailLeft - (containerWidth / 2) + (thumbnailWidth / 2);
        
        thumbnailContainer.scrollTo({
          left: scrollLeft,
          behavior: 'smooth'
        });
      }
    }, 0);
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

        {/* Loading state with progress indicator */}
        {isLoading && (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600"></div>
            <p className="mt-4 text-gray-600">Cargando fotos...</p>
            {images.length > 0 && (
              <div className="mt-2">
                <div className="w-64 bg-gray-200 rounded-full h-2 mx-auto">
                  <div 
                    className="bg-purple-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${(images.length / 20) * 100}%` }}
                  ></div>
                </div>
                <p className="text-sm text-gray-500 mt-1">{images.length} fotos encontradas</p>
              </div>
            )}
          </div>
        )}

        {/* No images found */}
        {!isLoading && images.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600">No se encontraron fotos en la galería.</p>
            <p className="text-sm text-gray-500 mt-2">
              Agrega fotos con nombres 1.webp, 2.webp, etc. en la carpeta /public/fotos/
            </p>
          </div>
        )}

        {/* Gallery content */}
        {!isLoading && images.length > 0 && (
          <>
            {/* Featured Image */}
            <div className="max-w-4xl mx-auto">
              <div
                className="relative group cursor-pointer overflow-hidden rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-[1.02]"
                onClick={() => openLightbox(0)}
              >
            <img
              src={images[0].src}
              alt={images[0].alt}
              className="w-full h-80 sm:h-96 lg:h-[32rem] xl:h-[36rem] object-cover transition-transform duration-700 group-hover:scale-110"
              loading="eager"
              decoding="async"
              fetchPriority="high"
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
              <p className="text-sm font-medium mb-1">Propiedad Av. España 1640</p>
              <p className="text-xs opacity-90">Haz clic para ver la galería completa</p>
            </div>
          </div>
        </div>
        </>
        )}

        {/* Full-Screen Lightbox */}
        {isLightboxOpen && (
        <div className="fixed inset-0 bg-black z-50 lightbox-container">
          {/* Header */}
          <div className="flex items-center justify-between p-3 bg-black/90 backdrop-blur-sm h-14">
            <div className="text-white">
              <h3 className="font-semibold text-lg">Galería de Fotos</h3>
              <p className="text-sm text-gray-300">
                {currentImageIndex + 1}/{images.length}
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
          <div className="relative flex items-center justify-center p-4 sm:p-6 lg:p-8" style={{ height: 'calc(100vh - 110px)' }}>
            <div className="relative w-full h-full flex items-center justify-center">
              <img
                src={images[currentImageIndex].src}
                alt={images[currentImageIndex].alt}
                className="max-w-[95%] max-h-[95%] object-contain rounded-lg shadow-2xl"
                loading="lazy"
                decoding="async"
              />
            </div>

            {/* Navigation Arrows - Large and Clearly Visible */}
            <button
              onClick={prevImage}
              className="absolute left-4 sm:left-6 lg:left-8 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-900 p-3 sm:p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110 z-10"
              aria-label="Imagen anterior"
            >
              <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
            </button>
            
            <button
              onClick={nextImage}
              className="absolute right-4 sm:right-6 lg:right-8 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-900 p-3 sm:p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110 z-10"
              aria-label="Siguiente imagen"
            >
              <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
            </button>
          </div>

          {/* Image Description */}
          <div className="bg-black/90 backdrop-blur-sm p-2 text-center h-12 flex items-center justify-center">
            <p className="text-white text-sm max-w-2xl mx-auto">
              {images[currentImageIndex].alt}
            </p>
          </div>

          {/* Thumbnail Navigation */}
          <div className="bg-black/90 backdrop-blur-sm p-4 overflow-x-auto h-24 flex items-center thumbnail-container">
            <div className="flex space-x-2 justify-center min-w-max mx-auto">
              {images.map((image, index) => (
                <button
                  key={index}
                  data-thumbnail-index={index}
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
                    loading="lazy"
                    decoding="async"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;